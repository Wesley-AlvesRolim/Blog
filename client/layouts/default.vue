<template>
  <div class="bg-zinc-900 text-white min-h-screen">
    <AppHeader />
    <main class="min-h-[calc(100vh-128px)] p-4">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
