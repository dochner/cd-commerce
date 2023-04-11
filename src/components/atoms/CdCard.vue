<script setup lang="ts">
import { onMounted } from "vue";

type Props = {
  flat?: boolean;
  title?: string;
};

defineProps<Props>();

const test = () => {
  console.log("oi");
};

onMounted(() => {
  test();
});
</script>

<template>
  <div id="card">{{ title }}</div>
</template>
