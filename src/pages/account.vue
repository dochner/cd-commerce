<template>
  <QPage
    class="page-account justify-center items-center row q-py-xl column q-pa-md overflow-hidden"
  >
    <RouterView v-slot="{ Component }">
      <Transition name="flip" mode="out-in">
        <component class="col-12" :is="Component" />
      </Transition>
    </RouterView>
  </QPage>
</template>
