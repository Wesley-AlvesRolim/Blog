<script setup lang="ts">
import { getAllPostsUseCase } from "~/data/posts";

const route = useRoute();
const pageCount = Number(route.params.page_count);

const data = await getAllPostsUseCase(
  "?populate=*&sort=id:desc&pagination[pageSize]=6&pagination[page]=" +
    pageCount
);

if (data === null) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
  });
}

const { pagination, posts } = data;

if (typeof pagination !== "undefined" && pageCount > pagination.totalPages) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
  });
}

useHead({
  title: `Home | ${pagination?.totalItems} posts | Page ${pagination?.currentPage} | Wesley Blog`,
});
</script>

<template>
  <section class="w-11/12 max-w-screen-lg mx-auto grid gap-4">
    <h1 class="text-4xl">All Posts</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
      <PostPreview
        v-if="posts"
        v-for="post in data.posts"
        :key="post.slug"
        :post="post"
      />
    </div>

    <div class="flex justify-end">
      <Pagination
        :totalPages="pagination?.totalPages"
        :currentPage="pagination?.currentPage"
      />
    </div>
  </section>
</template>
