<script setup>
import useLayout from '~/composables/layout'
import { APP_TITLE } from '~/constants'
import DcBtn from '../atoms/DcBtn.vue';

const { toggleCartDrawer, toggleMenuDrawer } = useLayout()
</script>

<template>
  <QHeader elevated class="bg-dark text-white" style="height: 80px" height-hint="80">
    <QToolbar class="full-height">
      <QToolbarTitle>
        <QAvatar>
          <img src="/favicon.svg">
        </QAvatar>
        {{ APP_TITLE }}
      </QToolbarTitle>

      <div class="q-gutter-x-md" v-if="$q.screen.gt.sm" >
        <DcBtn icon="i-carbon-user" label="Entrar" class="public-header__login-btn"></DcBtn>
        <QBtn dense flat round icon="i-carbon-shopping-cart" @click="toggleCartDrawer" />
      </div>

      <QBtn
        v-if="$q.screen.lt.md"
        icon="i-carbon-menu"
        @click="toggleMenuDrawer"
        dense
        flat
        round
      />
    </QToolbar>
  </QHeader>
</template>