<template>
    <div>
        <Heading title="Music" description="Description" icon='ic:sharp-music-note' iconColor="text-red-400"
            bgColor="bg-red500/10"></Heading>
        <div class="px-4 lg:px-8">
            <div>
                <form @submit.prevent="submitPrompt"
                    class="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2">
                    <div class="col-span-12 lg:col-span-10">
                        <div class="m-0 p-0">
                            <input v-model="prompt" placeholder="Type your sound prompt"
                                class="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent w-full" />
                        </div>
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

            <Empty v-if="!music && !isLoading" label="No music generated." />

            <audio v-if="music" controls class="w-full mt-8">
                <source :src="music" />
            </audio>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { AudioResponse } from '~/types.d';
const prompt = ref('');
const isLoading = ref(false);
const music = ref<string>();
const submitPrompt = async () => {
    isLoading.value = true;
    music.value = undefined;
    const { data, error } = await useFetch<AudioResponse>('/api/music', {
        method: 'POST',
        body: {
            prompt: prompt.value,
        },
    });
    if (error.value) {
        console.log(error);
        if (error.value.statusCode === 403) {
            store.onOpen();
        }
    }
    if (data.value) {
        music.value = data.value.audio;
        await refreshNuxtData('userData');
    }
    prompt.value = '';
    isLoading.value = false;
};
</script>

<style scoped></style>