<script setup lang="ts">
import { computed } from "vue";
import { APP_TITLE } from "~/constants";
import DcLocalePicker from "../molecules/DcLocalePicker.vue";
import { useI18n } from "vue-i18n";
import { NavMenuItem } from "~/types";

const { t } = useI18n();

const menu = computed<NavMenuItem[]>(() => [
  {
    title: t("button.about"),
    href: "/about",
  },
  {
    title: t("button.contact_us"),
    href: "/contact-us",
  },
]);

const actualYear = computed(() => new Date().getFullYear());
</script>

<template>
  <QFooter elevated class="public-footer bg-dark">
    <div class="public-footer__wrapper">
      <QToolbar class="public-footer__toolbar justify-between q-pa-md">
        <div
          class="public-footer__toolbar-links flex flex-grow q-gutter-y-lg q-gutter-x-lg"
        >
          <RouterLink
            class="public-footer__link text-subtitle1"
            v-for="(item, index) in menu"
            :key="index"
            :to="item.href"
          >
            {{ item.title }}
          </RouterLink>
        </div>

        <div class="column">
          <DcLocalePicker style="width: 170px" />
        </div>
      </QToolbar>
      <QSeparator />
      <QToolbar>
        <QToolbarTitle
          class="public-footer__toolbar row q-gutter-x-md items-center q-pa-md"
        >
          <QAvatar size="30px">
            <img src="/favicon.svg" />
          </QAvatar>
          <div class="text-h6 text-weight-bold flex">
            {{ APP_TITLE }}
            <span class="text-caption"> &copy; {{ actualYear }}</span>
          </div>
        </QToolbarTitle>
      </QToolbar>
    </div>
  </QFooter>
</template>

<style lang="scss">
.public-footer {
  &__wrapper {
    max-width: 80rem;
    margin: 0 auto;
  }

  &__toolbar {
    flex-direction: row;

    &-links {
      flex-direction: column;
    }

    @media screen and (min-width: 1024px) {
      &-links {
        flex-direction: row;
      }
    }
  }

  &__link {
    color: #f8f8f8;
    transition: 0.15s ease-in-out;
    border-bottom: 2px solid transparent;

    &:hover {
      color: var(--q-primary);
      border-color: currentColor;
    }
  }
}
</style>
