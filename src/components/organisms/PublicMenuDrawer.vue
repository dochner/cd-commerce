<script setup lang="ts">
import usePublicLayout from '~/composables/layout';

const { isMenuDrawerOpen, toggleMenuDrawer } = usePublicLayout();
</script>

<template>
  <QDrawer
    v-if="$q.screen.lt.md"
    :model-value="isMenuDrawerOpen"
    @update:model-value="toggleMenuDrawer"
    side="right"
    overlay behavior="mobile"
    bordered
  >
    <!-- drawer content -->
  </QDrawer>
</template>