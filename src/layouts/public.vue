<script setup>
import PublicFooter from '~/components/organisms/PublicFooter.vue';
import PublicHeader from '~/components/organisms/PublicHeader.vue';
import PublicCartDrawer from '~/components/organisms/PublicCartDrawer.vue';
import PublicMenuDrawer from '~/components/organisms/PublicMenuDrawer.vue';
</script>

<template>
  <QLayout view="hHr lpR ffr">
    <PublicHeader />

    <PublicCartDrawer />
    <PublicMenuDrawer />

    <QPageContainer>
      <RouterView />
    </QPageContainer>

    <PublicFooter />
  </QLayout>
</template>
