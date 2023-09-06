<script setup lang="ts">
import type { PostAttributes } from "~/domain/protocols";

defineProps({
  post: Object as PropType<PostAttributes>,
});
</script>

<template>
  <div
    class="max-w-[200px] md:max-w-[400px] rounded-lg overflow-hidden"
    v-if="post?.title"
  >
    <NuxtLink class="text-white hover:opacity-100" :to="`/post/${post.slug}`">
      <div class="overflow-hidden md:h-[350px]">
        <img
          class="w-full min-h-full object-cover hover:scale-125 hover:rotate-6"
          :src="post.cover.data.attributes.formats.medium?.url"
          :alt="post.cover.data.attributes.alternativeText"
        />
      </div>
      <h1 class="text-2xl my-2 hover:text-emerald-200">{{ post.title }}</h1>
      <p class="text-sm h-10 line-clamp-2 overflow-ellipsis hover:underline">
        {{ post.content }}
      </p>
    </NuxtLink>
  </div>
</template>

<style scoped>
div * {
  @apply transition-all duration-300 ease-in-out;
}
</style>
