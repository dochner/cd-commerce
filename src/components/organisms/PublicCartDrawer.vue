<script setup lang="ts">
import usePublicLayout from '~/composables/layout';

const { isCartDrawerOpen, toggleCartDrawer } = usePublicLayout();
</script>

<template>
  <QDrawer
    :model-value="isCartDrawerOpen"
    side="right"
    overlay
    behavior="mobile"
    bordered
    @update:model-value="toggleCartDrawer"
  >
    <!-- drawer content -->
  </QDrawer>
</template>