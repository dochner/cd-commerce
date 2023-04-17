<script setup lang="ts">
import usePublicLayout from "~/composables/layout";

const { isMenuDrawerOpen, toggleMenuDrawer } = usePublicLayout();
</script>

<template>
  <QDrawer
    v-if="$q.screen.lt.md"
    :model-value="isMenuDrawerOpen"
    side="right"
    overlay
    behavior="mobile"
    bordered
    @update:model-value="toggleMenuDrawer"
  >
    <!-- drawer content -->
  </QDrawer>
</template>
