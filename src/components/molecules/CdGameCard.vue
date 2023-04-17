<script setup lang="ts">
import { computed } from "vue";
import { Game } from "~/types";

const props = defineProps<{
  game: Game;
}>();

const getPromotionText = computed(
  () => props?.game.promotion && `${props.game?.promotion * 100}%`
);

const platforms = computed(() =>
  props.game?.platforms?.map((plataform) => ({
    ...plataform,
    icon: plataform.name.includes("Windows")
      ? "i-mdi-microsoft-windows"
      : "i-mdi-steam",
  }))
);
</script>

<template>
  <QCard>
    <QImg
      :src="game?.img"
      :aspect-ratio="3 / 1"
    />

    <QCardSection>
      <div>
        <h3 class="text-body2">
          Lawn Mowing Simulator
        </h3>
      </div>
      <div class="row q-gutter-x-xs">
        <QIcon
          v-for="(plataform, index) in platforms"
          :key="index"
          :name="plataform.icon"
          :title="plataform.name"
        />
      </div>
    </QCardSection>
    <QCardActions class="q-gutter-x-sm">
      <div
        v-if="game?.promotion"
        class="bg-negative rounded-borders q-px-sm q-py-xs"
      >
        {{ getPromotionText }}
      </div>
      <QBtn
        class="col-grow"
        label="USD$ 26.98"
      />
    </QCardActions>
  </QCard>
</template>
