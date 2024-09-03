<template>
  <UContainer>
    <div class="flex justify-between mt-6 mx-2">
      <section class="w-full flex flex-col md:mr-12 gap-4">
        seguidores aqui
      </section>
      <aside
        class="h-full w-full max-w-72 text-center sticky top-20 hidden md:block"
      >
        <UCard>
          <div class="w-full flex flex-col justify-start items-center gap-2">
            <UAvatar alt="Miguel Domingos" size="3xl" />
            <div class="flex flex-col items-center w-full gap-4">
              <div class="w-full flex flex-col items-center gap-1">
                <span class="text-slate-900 dark:text-white">
                  userData.data.user.name
                </span>
                <span class="text-slate-900 dark:text-white opacity-80">
                  userData.data.user.bio
                </span>
              </div>
              <div class="flex gap-2">
                <UButton
                  icon="i-carbon-logo-github"
                  variant="ghost"
                  color="gray"
                  size="xl"
                />
                <UButton
                  icon="i-carbon-logo-linkedin"
                  variant="ghost"
                  color="gray"
                  size="xl"
                />
                <UButton
                  icon="i-carbon-logo-facebook"
                  variant="ghost"
                  color="gray"
                  size="xl"
                />
              </div>
            </div>
            <div class="w-full mt-2">
              <UButton v-if="true" block size="lg">
                <span class="text-white font-normal"> Seguir </span>
              </UButton>
              <UButton v-else block size="lg" color="gray">
                <span class="text-white font-normal"> Não Seguir </span>
              </UButton>
            </div>
          </div>
        </UCard>
      </aside>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { useUser } from "@/composables";

const { followers, getOneUser } = useUser();

const { user } = useRoute().params;

onBeforeMount(async () => {
  const userResponse = await getOneUser(user as string);
  if (userResponse.statusCode == 200) {
    const followersResponse = await followers(userResponse.data.user.id);
    console.log(followersResponse);
  }
});
</script>
