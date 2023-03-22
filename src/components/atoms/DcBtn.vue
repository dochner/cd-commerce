<script setup></script>

<template>
  <QBtn
    class="text-weight-bold"
    no-caps
    rounded
  >
    <template
      v-for="(_, name) in $slots"
      #[name]="slotProps = {}"
    >
      <slot
        v-bind="slotProps"
        :name="name"
      ></slot>
    </template>
  </QBtn>
</template>