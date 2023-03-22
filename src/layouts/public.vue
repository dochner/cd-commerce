<script setup>
import { ref } from 'vue'

const rightDrawerOpen = ref(false)

const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value
}
</script>

<template>
  <QLayout view="hHr lpR ffr">

    <QHeader elevated class="bg-primary text-white">
      <QToolbar>
        <QToolbarTitle>
          <QAvatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </QAvatar>
          Title
        </QToolbarTitle>

        <QBtn dense flat round icon="i-carbon-shopping-cart" @click="toggleRightDrawer" />
      </QToolbar>
    </QHeader>

    <QDrawer v-model="rightDrawerOpen" side="right" overlay behavior="mobile" bordered>
      <!-- drawer content -->
    </QDrawer>

    <QPageContainer>
      <RouterView />
    </QPageContainer>

    <QFooter elevated class="bg-grey-8 text-white">
      <QToolbar>
        <QToolbarTitle class="row q-gutter-x-md items-center">
          <QAvatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </QAvatar>
          <div>Title</div>
        </QToolbarTitle>
      </QToolbar>
    </QFooter>

  </QLayout>
</template>
