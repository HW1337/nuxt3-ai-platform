<template>
    <div>
        <Heading title="Conversation" description="Description" icon="ic:sharp-message" iconColor="text-blue-400"
            bgColor="bg-blue500/10"></Heading>
        <div class="px-4 lg:px-8">
            <div>
                <form @submit.prevent="submitPrompt"
                    class="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2">
                    <div class="col-span-12 lg:col-span-10">
                        <div class="m-0 p-0">
                            <input v-model="prompt" placeholder="Type your question here"
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
            <Empty label="No conversation started." />
        </div>
    </div>
</template>

<script setup lang="ts">
const prompt = ref('');
const isLoading = ref(false);
</script>

<style scoped></style>