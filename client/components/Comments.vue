<script setup lang="ts">
defineProps({
  pageId: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  const scriptLoader = document.createElement("script");
  scriptLoader.type = "module";
  scriptLoader.async = true;
  scriptLoader.src = "https://talk.hyvor.com/embed/embed.js";
  document.querySelector("#comments")?.appendChild(scriptLoader);
});
</script>

<template>
  <section id="comments">
    <hyvor-talk-comments
      website-id="9473"
      :page-id="pageId"
      colors="dark"
    ></hyvor-talk-comments>
  </section>
</template>
