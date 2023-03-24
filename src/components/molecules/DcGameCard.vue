<script setup lang="ts">
import { computed } from "vue";
import { Plataform } from "~/types";

const props = defineProps({
  img: String,
  name: String,
  platforms: Array<Plataform>,
  price: Number,
  promotion: Number,
});

const getPromotionText = computed(
  () => props?.promotion && `${props.promotion * 100}%`
);

const hasWindows = computed(() =>
  props.platforms?.find((plataform) => plataform.name.includes("Win"))
);
const hasSteam = computed(() =>
  props.platforms?.find((plataform) => plataform.name.includes("Steam"))
);
</script>

<template>
  <QCard>
    <QImg :src="img" :aspect-ratio="3 / 1" />

    <QCardSection>
      <div>
        <h3 class="text-body2">Lawn Mowing Simulator</h3>
      </div>
      <div class="row q-gutter-x-xs">
        <QIcon
          v-if="hasWindows"
          name="i-mdi-microsoft-windows"
          title="Windows"
        ></QIcon>
        <QIcon v-if="hasSteam" name="i-mdi-steam" title="Steam"></QIcon>
      </div>
    </QCardSection>
    <QCardActions class="q-gutter-x-sm">
      <div v-if="promotion" class="bg-negative rounded-borders q-px-sm q-py-xs">
        {{ getPromotionText }}
      </div>
      <QBtn class="col-grow" label="USD$ 26.98" />
    </QCardActions>
  </QCard>
</template>
