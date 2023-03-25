<script setup lang="ts">
import usePublicLayout from '~/composables/layout';

const { isCartDrawerOpen, toggleCartDrawer } = usePublicLayout();
</script>

<template>
  <QDrawer :model-value="isCartDrawerOpen" @update:model-value="toggleCartDrawer" side="right" overlay behavior="mobile" bordered>
    <!-- drawer content -->
  </QDrawer>
</template>