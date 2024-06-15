<template>
    <div>
        <Heading title="Image" description="Description" icon='ic:sharp-image' iconColor="text-yellow-400"
            bgColor="bg-yellow500/10"></Heading>
        <div class="px-4 lg:px-8">
            <div>
                <form @submit.prevent="submitPrompt"
                    class="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2">
                    <div class="col-span-12 lg:col-span-10">
                        <div class="m-0 p-0">
                            <input v-model="prompt" placeholder="Type your image prompt"
                                class="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent w-full" />
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-2">
                        <Select v-model="resolution">
                            <SelectTrigger>
                                <SelectValue placeholder="Please choose your resolution" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem v-for="(res, i) in resolutionOptions" :value="res.value">
                                        {{ res.text }}
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div class="col-span-12 lg:col-span-2">
                        <Select v-model="amount">
                            <SelectTrigger>
                                <SelectValue placeholder="Choose your resolution" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem v-for="(res, i) in amountOptions" :value="res.value">
                                        {{ res.text }}
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button class="col-span-12 lg:col-span-2 w-full" type="submit" :disabled="!prompt || isLoading">
                        Generate
                    </Button>
                </form>
            </div>
        </div>
        <div class="space-y-4 mt-4">
            <div v-if="isLoading" class="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                <Loader />
            </div>
            <Empty v-if="photos.length === 0 && !isLoading" label="No images generated." />
            <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
                <div v-for="photo in photos" :key="photo" class="rounded-lg overflow-hidden border-black/5 border">
                    <div class="relative aspect-square">
                        <img alt="Generated" class="w-full" :src="photo" />
                    </div>
                    <div class="p-2">
                        <NuxtLink :to="photo" download target="_blank"
                            class="w-full bg-slate-200 flex justify-center px-1 py-2 items-center">
                            <Icon name="ic:sharp-download" class="h-4 w-4 mr-2" />
                            Download
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const prompt = ref('');
import { useProModal } from '@/store/useProModal';
const store = useProModal();
const isLoading = ref(false);
const photos = ref<string[]>([]);
const amount = ref('1');
const resolution = ref('256x256');

const submitPrompt = async () => {
    isLoading.value = true;
    photos.value = [];

    const { data, error } = await useFetch('/api/image', {
        method: 'POST',
        body: {
            prompt: prompt.value,
            amount: amount.value,
            resolution: resolution.value,
        },
    });
    if (error.value) {
        console.log(error.value);
        if (error.value.statusCode === 403) {
            store.onOpen();
        }
    }
    if (data.value) {
        photos.value = data.value.map((img) => {
            if (img.url) {
                return img.url;
            }
            return '';
        });
        await refreshNuxtData('userData');
    }
    prompt.value = '';
    isLoading.value = false;
};
</script>

<style scoped></style>