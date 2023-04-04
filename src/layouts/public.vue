<script setup lang="ts">
import PublicFooter from "~/components/organisms/PublicFooter.vue";
import PublicHeader from "~/components/organisms/PublicHeader.vue";
import PublicCartDrawer from "~/components/organisms/PublicCartDrawer.vue";
import PublicMenuDrawer from "~/components/organisms/PublicMenuDrawer.vue";
</script>

<template>
  <QLayout view="hHr lpR ffr">
    <PublicHeader />

    <PublicCartDrawer />
    <PublicMenuDrawer />

    <QPageContainer class="public-page-container">
      <RouterView />
    </QPageContainer>

    <PublicFooter />
  </QLayout>
</template>

<style lang="scss">
.public-page-container {
  background-color: #070415;
}
</style>
