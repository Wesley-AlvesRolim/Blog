<script setup lang="ts">
import { getAllPostsUseCase } from "~/data/posts";

const data = await getAllPostsUseCase(
  "?populate=*&sort=id:desc&pagination[pageSize]=10"
);

useHead({
  title: `Home | ${data?.posts.length} posts | Wesley Blog`,
});
</script>

<template>
  <section class="w-11/12 max-w-screen-lg mx-auto grid gap-4">
    <h1 class="text-4xl">All Posts</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
      <PostPreview
        v-if="data?.posts"
        v-for="post in data.posts"
        :key="post.slug"
        :post="post"
      />
    </div>
  </section>
</template>
