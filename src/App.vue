<script setup lang="ts">
import { useQuasar } from "quasar";
import LayoutPrivate from "./layouts/private.vue";
import LayoutPublic from "./layouts/public.vue";

const $q = useQuasar();
$q.iconMapFn = (iconName) =>
  iconName.startsWith("i-") ? { cls: iconName } : undefined;
</script>

<template>
  <LayoutPrivate v-if="$route.meta.layout == 'private'">
    <RouterView />
  </LayoutPrivate>

  <LayoutPublic v-else>
    <RouterView />
  </LayoutPublic>
</template>
