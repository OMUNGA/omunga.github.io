<template>
  <header
    class="h-16 fixed z-50 flex w-full shadow-sm bg-white dark:bg-brand-dark dark:shadow-brand-shadow/50 top-0"
  >
    <Container>
      <div class="h-16 w-full flex justify-between items-center gap-4">
        <div class="sm:flex justify-center items-center">
          <OButton variant="unstyle" class="bg-transparent border-0" to="/">
            <Logo />
          </OButton>
        </div>
        <div class="hidden md:block w-[500px]">
          <OInput placeholder="Pesquise por um assunto">
            <template #icon>
              <div
                class="i-ic-outline-search text-2xl text-black/35 dark:text-white/35"
              ></div>
            </template>
          </OInput>
        </div>

        <div v-if="isAuthenticated" class="flex items-center gap-2">
          <!-- <OButton
            variant="unstyle"
            class="md:hidden border-0 cursor-pointer bg-transparent p-2 text-black/35 dark:text-white/35"
          >
            <div class="i-ic-outline-search text-2xl"></div>
          </OButton> -->

          <OButton variant="outline"> criar artigo </OButton>
          <OButton
            variant="unstyle"
            class="border-0 transition rounded cursor-pointer bg-transparent p-2 text-black/35 hover:text-black/75 dark:text-white/35 dark:hover:text-white/75"
          >
            <div
              class="i-material-symbols-notifications-rounded text-2xl"
            ></div>
          </OButton>
          <div @click="authenticatedModal.openModal()">
            <Avatar src="/avatar.jpg" class="w-10 h-10" />
          </div>

          <Aside ref="authenticatedModal">
            <template #content>
              <div class="absolute top-2 right-2">
                <OButton
                  @click="authenticatedModal.closeModal"
                  variant="unstyle"
                  class="outline-none focus:outline-none cursor-pointer p-0 border-0 bg-transparent text-black/35 dark:text-white/35"
                >
                  <div
                    class="i-material-symbols-close-rounded text-2xl"
                    aria-hidden="true"
                  ></div>
                </OButton>
              </div>
              <div
                class="flex flex-col divide-y divide-solid divide-black/5 dark:divide-white/5"
              >
                <div class="py-1">
                  <OButton
                    :to="'/@' + user.username"
                    variant="unstyle"
                    class="border-0 bg-transparent w-full cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 rounded"
                  >
                    <div class="flex gap-2 p-2">
                      <Avatar src="/avatar.jpg" class="w-10 h-10" />
                      <div class="flex flex-col">
                        <span
                          class="font-bold text-sm text-slate-900 dark:text-white"
                          >{{ user.name }}</span
                        >
                        <span
                          class="text-sm text-slate-600 dark:text-slate-400 font-light"
                          ><span class="text-xs">@</span
                          >{{ user.username }}</span
                        >
                      </div>
                    </div>
                  </OButton>
                </div>

                <div class="border-0 w-full py-1 flex flex-col">
                  <OButton
                    variant="unstyle"
                    class="bg-transparent cursor-pointer flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 rounded border-0 p-2 text-left"
                  >
                    <div
                      class="i-carbon-pen-fountain text-xl text-brand-dark dark:text-slate-600"
                    ></div>
                    <span class="text-slate-900 dark:text-white">
                      Criar artigo
                    </span>
                  </OButton>
                  <OButton
                    variant="unstyle"
                    class="bg-transparent cursor-pointer items-center flex gap-2 hover:bg-black/5 dark:hover:bg-white/5 rounded border-0 p-2 text-left"
                  >
                    <div
                      class="i-carbon-forum text-xl text-brand-dark dark:text-slate-600"
                    ></div>
                    <span class="text-slate-900 dark:text-white">
                      Criar forum
                    </span>
                  </OButton>
                </div>

                <div class="border-0 w-full py-1 flex flex-col">
                  <OButton
                    variant="unstyle"
                    class="bg-transparent cursor-pointer flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 rounded border-0 p-2 text-left"
                  >
                    <div
                      class="i-material-symbols-book-3-rounded text-xl text-brand-dark dark:text-slate-600"
                    ></div>
                    <span class="text-slate-900 dark:text-white">
                      Teus artigos
                    </span>
                  </OButton>
                  <OButton
                    variant="unstyle"
                    class="bg-transparent cursor-pointer items-center flex gap-2 hover:bg-black/5 dark:hover:bg-white/5 rounded border-0 p-2 text-left"
                  >
                    <div
                      class="i-mdi-google-circles-communities text-xl text-brand-dark dark:text-slate-600"
                    ></div>
                    <span class="text-slate-900 dark:text-white">
                      Teus foruns
                    </span>
                  </OButton>
                  <OButton
                    variant="unstyle"
                    class="bg-transparent cursor-pointer items-center flex gap-2 hover:bg-black/5 dark:hover:bg-white/5 rounded border-0 p-2 text-left"
                  >
                    <div
                      class="i-carbon-bookmark text-xl text-brand-dark dark:text-slate-600"
                    ></div>
                    <span class="text-slate-900 dark:text-white">
                      Tuas recomendações
                    </span>
                  </OButton>
                </div>
                <div class="border-0 w-full py-1 flex flex-col">
                  <OButton
                    variant="unstyle"
                    class="bg-transparent cursor-pointer flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 rounded border-0 p-2 text-left"
                  >
                    <div
                      class="i-carbon-settings text-xl text-brand-dark dark:text-slate-600"
                    ></div>
                    <span class="text-slate-900 dark:text-white">
                      Editar perfil
                    </span>
                  </OButton>
                  <div class="border-0 w-full py-1 flex flex-col">
                    <ThemeToggle>
                      <template #button>
                        <OButton
                          variant="unstyle"
                          class="w-full bg-transparent cursor-pointer flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 rounded border-0 p-2 text-left"
                        >
                          <div
                            class="i-carbon-sun dark:i-carbon-moon text-xl text-brand-dark dark:text-slate-600"
                          ></div>
                          <span class="text-slate-900 dark:text-white">
                            Trocar tema
                          </span>
                        </OButton>
                      </template>
                    </ThemeToggle>
                  </div>
                </div>
                <div class="border-0 w-full py-1 flex flex-col">
                  <OButton
                    @click="handleLogout"
                    variant="unstyle"
                    class="bg-transparent cursor-pointer flex items-center gap-2 hover:bg-black/5 dark:hover:bg-white/5 rounded border-0 p-2 text-left"
                  >
                    <span class="text-slate-900 dark:text-white"> Sair </span>
                  </OButton>
                </div>
              </div>
            </template>
          </Aside>
        </div>
        <div v-else>
          <div class="hidden md:flex gap-2 items-center">
            <div class="flex gap-4">
              <OButton variant="link" to="login"> Entrar </OButton>

              <OButton class="text-nowrap" to="register"> Criar conta </OButton>
            </div>
            <div class="text-brand-border-white dark:text-brand-border-dark">
              |
            </div>
            <div class="flex gap-2 items-center">
              <ThemeToggle>
                <template #button>
                  <div
                    class="i-carbon-sun dark:i-carbon-moon cursor-pointer text-2xl text-black/50 hover:text-black/80 dark:text-slate-600 dark:hover:text-slate-300"
                  ></div>
                </template>
              </ThemeToggle>
              <div class="text-brand-border-white dark:text-brand-border-dark">
                |
              </div>
              <SocialMedia />
            </div>
          </div>
          <div class="flex justify-center gap-4 items-center md:hidden">
            <OButton
              variant="unstyle"
              class="border-0 cursor-pointer bg-transparent p-2 text-black/35 dark:text-white/35"
            >
              <div class="i-ic-outline-search text-2xl"></div>
            </OButton>
            <OButton
              @click="mobileModalRef.openModal()"
              variant="unstyle"
              class="border-0 cursor-pointer bg-transparent p-2 text-black/35 dark:text-white/35"
            >
              <div
                class="i-material-symbols-menu-rounded text-3xl"
                aria-hidden="true"
              ></div>
            </OButton>
            <Modal ref="mobileModalRef">
              <template #content>
                <div class="absolute top-4 right-4">
                  <OButton
                    @click="mobileModalRef.closeModal"
                    variant="unstyle"
                    class="cursor-pointer border-0 bg-transparent text-black/35 dark:text-white/35"
                  >
                    <div
                      class="i-material-symbols-close-rounded text-2xl"
                      aria-hidden="true"
                    ></div>
                  </OButton>
                </div>
                <div class="flex flex-col gap-4 items-start">
                  <OButton
                    to="login"
                    variant="unstyle"
                    class="text-base bg-transparent border-0 cursor-pointer text-brand-dark dark:text-brand-white hover:text-brand-primary"
                    >Entrar</OButton
                  >
                  <OButton
                    to="register"
                    variant="unstyle"
                    class="text-base bg-transparent border-0 cursor-pointer text-brand-dark dark:text-brand-white hover:text-brand-primary"
                    >Criar Conta</OButton
                  >
                  <OButton
                    variant="unstyle"
                    class="text-base bg-transparent border-0 cursor-pointer text-brand-dark dark:text-brand-white hover:text-brand-primary"
                    >Github</OButton
                  >
                  <div
                    class="border-0 w-full border-t-1 border-solid border-black/15 dark:border-white/15"
                  >
                    <div class="mt-4 flex gap-4">
                      <span class="font-normal">Mudar Tema</span>
                      <ThemeToggle>
                        <template #button>
                          <div
                            class="i-carbon-sun dark:i-carbon-moon cursor-pointer text-2xl text-black/50 hover:text-black/80 dark:text-slate-600 dark:hover:text-slate-300"
                          ></div>
                        </template>
                      </ThemeToggle>
                    </div>
                  </div>
                </div>
              </template>
            </Modal>
          </div>
        </div>
      </div>
    </Container>
  </header>
</template>

<script setup>
import {
  Logo,
  OButton,
  OInput,
  Container,
  ThemeToggle,
  SocialMedia,
  Modal,
  Avatar,
  Aside,
} from "@/components";
import { useAuthStore } from "~/store";

const mobileModalRef = ref(null);
const authenticatedModal = ref(null);

const { isAuthenticated, user, logout } = useAuthStore();

async function handleLogout() {
  const response = await logout();
  if (response) return reloadNuxtApp();
}
</script>
