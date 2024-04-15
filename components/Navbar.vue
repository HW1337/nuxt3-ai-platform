<template>
    <div class="flex items-center p-4">
        <!-- MobileSide -->
        <div class="flex w-full justify-end">
            <DropdownMenu>
                <DropdownMenuTrigger as-child>
                    <Button variant="outline">
                        <Icon name="ic:sharp-supervised-user-circle" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" class="w-72 left-[100px]">
                    <DropdownMenuLabel>Account Details</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <div class="w-full flex align-items-center p-2 pl-2">
                        <Avatar class="mr-2 border border-gray-400">
                            <AvatarImage v-if="user?.user_metadata.avatar_url" :src="user?.user_metadata.avatar_url" />
                            <AvatarFallback>
                                {{ user?.email?.charAt(0).toUpperCase() }}
                                {{ user?.email?.charAt(1).toUpperCase() }}
                            </AvatarFallback>
                        </Avatar>

                        <div class="flex items-center">
                            <div class="font-bold">{{ user?.user_metadata.full_name }}</div>
                            <div class="text-sm">{{ user?.email }}</div>
                        </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem @click="logout" class="cursor-pointer">
                        <Icon class="mr-2 h-4 w-4" name="ic:sharp-logout" />
                        <span class="ml-2">Log Out</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
const supabaseClient = useSupabaseClient();
const logout = async () => {
    await supabaseClient.auth.signOut();
    navigateTo('/auth');
};
</script>

<style scoped></style>