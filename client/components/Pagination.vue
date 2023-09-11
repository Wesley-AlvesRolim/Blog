<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  totalPages: {
    type: Number,
  },
  currentPage: {
    type: Number,
  },
});

const leftLink = computed(() => {
  return props.currentPage === undefined || props.currentPage - 1 === 1
    ? "/"
    : `/page/${props.currentPage - 1}`;
});

const leftArrowIsDisabled = computed(() => {
  return props.currentPage === undefined || props.currentPage <= 1
    ? "disabled"
    : "";
});

const rightArrowIsDisabled = computed(() => {
  return props.currentPage === undefined ||
    props.totalPages === undefined ||
    props.currentPage >= props.totalPages
    ? "disabled"
    : "";
});
</script>

<template>
  <div class="flex items-center gap-3" v-if="currentPage && totalPages">
    <NuxtLink
      :class="`pagination-link group border border-transparent hover:border-emerald-400 hover:bg-emerald-50/20 ${leftArrowIsDisabled}`"
      :to="leftLink"
    >
      <PhosphorIconArrowLeft
        class="translate-x-1 group-hover:translate-x-0 transition-transform"
        :size="24"
      />
    </NuxtLink>
    <span>{{ currentPage }} / {{ totalPages }}</span>
    <NuxtLink
      :class="`pagination-link group border border-transparent hover:border-emerald-400 hover:bg-emerald-50/20 ${rightArrowIsDisabled}`"
      :to="`/page/${currentPage + 1}`"
    >
      <PhosphorIconArrowRight
        class="-translate-x-1 group-hover:translate-x-0 transition-transform"
        :size="24"
      />
    </NuxtLink>
  </div>
</template>

<style scoped>
.pagination-link.disabled {
  color: currentColor;
  display: inline-block;
  pointer-events: none;
  text-decoration: none;
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
