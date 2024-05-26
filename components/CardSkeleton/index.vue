<template>
  <div class="w-full flex gap-4">
    <div class="w-full flex flex-col gap-4">
      <div class="w-full flex gap-4">
        <USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
        <div class="flex flex-col justify-center gap-2">
          <USkeleton class="h-2 w-[250px]" />
          <USkeleton class="h-2 w-[200px]" />
        </div>
      </div>
      <div
        class="block sm:hidden md:block lg:hidden rounded overflow-hidden w-full h-[150px]"
      >
        <USkeleton class="h-full w-full" />
      </div>
      <div class="flex flex-col gap-2">
        <USkeleton class="h-2 w-full" />
        <USkeleton class="h-2 w-[20%]" />
      </div>
      <div class="flex flex-col gap-2">
        <USkeleton class="h-2 w-full" />
        <USkeleton class="h-2 w-full" />
        <USkeleton class="h-2 w-[50%]" />
      </div>
      <div
        class="flex justify-center sm:justify-start md:justify-center lg:justify-start gap-2 mt-2"
      >
        <USkeleton class="h-4 w-10" />
        <USkeleton class="h-4 w-10" />
        <USkeleton class="h-4 w-10" />
      </div>
    </div>
    <div class="hidden sm:flex md:hidden lg:flex items-center">
      <div class="rounded overflow-hidden">
        <USkeleton class="h-[200px] w-[200px]" />
      </div>
    </div>
  </div>
</template>
