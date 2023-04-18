<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const setLocale = (newLocale) => {
  locale.value = newLocale;
};

const actualLocale = computed(() => ({
  label: t(`locale.${locale.value}`),
  flag:
    locale.value === "en-US"
      ? "i-twemoji:flag-united-states"
      : "i-twemoji:flag-brazil",
}));
</script>

<template>
  <QBtnDropdown
    color="dark"
    dropdown-icon="i-mdi-chevron-down"
    no-caps
  >
    <template #label>
      <div class="row q-gutter-x-sm items-center">
        <QIcon
          v-if="actualLocale.flag.includes('brazil')"
          name="i-twemoji:flag-brazil"
        />
        <QIcon
          v-else
          name="i-twemoji:flag-united-states"
        />
        <div>{{ actualLocale.label }}</div>
      </div>
    </template>

    <QList class="text-white">
      <QItem
        v-close-popup
        clickable
        @click="setLocale('pt-BR')"
      >
        <QItemSection avatar>
          <QIcon name="i-twemoji:flag-brazil" />
        </QItemSection>
        <QItemSection>
          <QItemLabel>{{ t("locale.pt-BR") }}</QItemLabel>
        </QItemSection>
      </QItem>

      <QItem
        v-close-popup
        clickable
        @click="setLocale('en-US')"
      >
        <QItemSection avatar>
          <QIcon name="i-twemoji:flag-united-states" />
        </QItemSection>
        <QItemSection>
          <QItemLabel>{{ t("locale.en-US") }}</QItemLabel>
        </QItemSection>
      </QItem>
    </QList>
  </QBtnDropdown>
</template>
