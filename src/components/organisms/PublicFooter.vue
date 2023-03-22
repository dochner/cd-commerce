<script setup>
import { computed } from 'vue'
import { APP_TITLE } from '~/constants'
import DcLocalePicker from '../molecules/DcLocalePicker.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const menu = computed(() => [
  {
    title: t('button.about'),
    href: '/#about',
  },
  {
    title: t('button.contact_us'),
    href: '/#contact-us'
  }
])
</script>

<template>
  <QFooter elevated class="public-footer bg-dark">
    <div class="public-footer__wrapper">
      <QToolbar class="row justify-between q-pa-md">
        <div class="column row-md q-gutter-y-lg q-gutter-x-lg">
          <RouterLink
            class="public-footer__link text-subtitle1"
            v-for="(item, index) in menu"
            :key="index"
            :to="item.href"
          >
            {{ item.title }}
          </RouterLink>
        </div>

        <div>
          <DcLocalePicker />
        </div>
      </QToolbar>
      <QSeparator dark />
      <QToolbar>
        <QToolbarTitle class="public-footer__toolbar row q-gutter-x-md items-center q-pa-md">
          <QAvatar size="30px">
            <img src="/favicon.svg">
          </QAvatar>
          <div class="text-h6 text-weight-bold flex">{{APP_TITLE}}<span class="text-caption "> &copy; {{ new Date().getFullYear() }}</span></div>
        </QToolbarTitle>
      </QToolbar>
    </div>
  </QFooter>
</template>

<style lang="scss">
.public-footer {
  &__link {
    color: #f8f8f8;
    transition: .15s ease-in-out;
    border-bottom: 2px solid transparent;


    &:hover {
      color: var(--q-primary);
      border-color: currentColor;
    }
  }
}

@media screen and (min-width: 1024px) {
  .public-footer {
    &__wrapper {
      max-width: 80rem;
      margin: 0 auto;
    }
  }
}
</style>