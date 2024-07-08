<template>
    <div class="h-screen">
      <main class="h-full overflow-auto">
        <header class="absolute inset-x-0 top-0 z-50">
          <nav class="flex items-center justify-between max-w-7xl mx-auto py-4 px-6">
            <NuxtLink href="/" class="flex items-center">
              <div class="relative h-8 w-8 mr-4">
                <img class="object-cover" alt="Logo" src="/logo.svg" />
              </div>
              <h1 class="text-2xl font-bold">AI platform</h1>
            </NuxtLink>
            <div class="flex items-center gap-x-2">
              <NuxtLink :to="user ? '/dashboard' : '/auth'">
                <Button outline class="rounded-full"> Get Started </Button>
              </NuxtLink>
            </div>
          </nav>
        </header>
        <div class="relative isolate px-6 pt-14 lg:px-8">
          <div
            class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style="
                clip-path: polygon(
                  74.1% 44.1%,
                  100% 61.6%,
                  97.5% 26.9%,
                  85.5% 0.1%,
                  80.7% 2%,
                  72.5% 32.5%,
                  60.2% 62.4%,
                  52.4% 68.1%,
                  47.5% 58.3%,
                  45.2% 34.5%,
                  27.5% 76.7%,
                  0.1% 64.9%,
                  17.9% 100%,
                  27.6% 76.8%,
                  76.1% 97.7%,
                  74.1% 44.1%
                );
              "
            />
          </div>
          <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div class="text-center">
              <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Lorem ipsum dolor sit amet.
              </h1>
              <p class="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolore suscipit dicta cum laboriosam dolor, distinctio officiis qui debitis praesentium earum sapiente deleniti dolorem, 
                inventore placeat quaerat fugiat vitae sunt odit?
              </p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <NuxtLink :to="user ? '/dashboard' : '/auth'">
                  <Button variant="premium"> Start Generating For Free </Button>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
  
        <div class="bg-white pb-24 sm:pb-32">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">
              Lorem ipsum dolor sit amet.
            </h2>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  const user = useSupabaseUser();
  definePageMeta({
    layout: 'home',
  });
  </script>
  
  <style scoped></style>