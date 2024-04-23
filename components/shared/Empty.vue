<template>
    <div class="h-full p-20 flex flex-col items-center justify-center">
        <p class="text-muted-foreground text-sm text-center">{{ label }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{ label: string }>();
</script>