<script setup lang="ts">
import { markdownToHtml } from "~/infra";
import { getSinglePostUseCase } from "~/data/posts";

const route = useRoute();
const slug = route.params.slug;
const data = await getSinglePostUseCase(
  "?populate=*&[filters][slug][$eq]=" + slug
);
const post = data?.post;

if (!post) {
  throw createError({ statusCode: 404, statusMessage: "Post not found" });
}

useHead({
  title: post.title + " | Wesley Blog",
});
const postHtml = markdownToHtml(post.content || "");
</script>

<template>
  <div v-if="post" class="max-w-screen-lg mx-auto">
    <h1 class="text-4xl text-center">{{ post.title }}</h1>
    <div class="w-fit my-8 mx-auto">
      <picture
        class="aspect-video overflow-hidden rounded mx-auto flex items-center justify-center"
      >
        <img :src="post.cover.data.attributes.formats.large?.url" />
      </picture>
      <footer class="opacity-75 mt-2">
        Publicado por
        {{ post.author?.data.attributes.name }}
        <time>
          em
          {{ post.createdAt }}
        </time>
      </footer>
    </div>
    <article :class="$style.post_content" v-html="postHtml"></article>
    <Comments v-if="!Array.isArray(slug)" :pageId="slug" />
  </div>
</template>

<style module>
.post_content h1 {
  @apply text-4xl my-6;
}

.post_content h2 {
  @apply text-3xl my-6;
}

.post_content h3 {
  @apply text-2xl my-6;
}

.post_content h4 {
  @apply text-xl my-4;
}

.post_content h5 {
  @apply text-lg my-4;
}

.post_content h6 {
  @apply text-base my-4;
}

.post_content p {
  @apply text-lg my-4;
}

.post_content pre {
  @apply text-lg my-2 p-6 overflow-x-auto;
}
</style>
