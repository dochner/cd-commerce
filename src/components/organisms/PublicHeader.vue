<script setup>
import { APP_TITLE } from "~/constants";
import useLayout from "~/composables/layout";
import CdBtn from "../atoms/CdBtn.vue";

const { toggleCartDrawer, toggleMenuDrawer } = useLayout();
</script>

<template>
  <QHeader
    elevated
    class="public-header text-white"
    style="height: 80px"
    height-hint="80"
  >
    <QToolbar class="full-height">
      <QToolbarTitle>
        <RouterLink to="/" class="text-white">
          <QAvatar>
            <img src="/favicon.svg" />
          </QAvatar>
          {{ APP_TITLE }}
        </RouterLink>
      </QToolbarTitle>

      <div class="q-gutter-x-md" v-if="$q.screen.gt.sm">
        <CdBtn
          to="/account/login"
          icon="i-mdi-account"
          label="Entrar"
          class="public-header__login-btn"
        />
        <QBtn dense flat round icon="i-mdi-cart" @click="toggleCartDrawer" />
      </div>

      <QBtn
        v-if="$q.screen.lt.md"
        icon="i-mdi-menu"
        @click="toggleMenuDrawer"
        dense
        flat
        round
      />
    </QToolbar>
  </QHeader>
</template>

<style lang="scss">
.public-header {
  background-color: #130b3b;
}
</style>
