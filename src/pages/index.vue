<script setup lang="ts">
import DcGameCard from "~/components/molecules/DcGameCard.vue";
import { Game } from "~/types";

const gameList: Game[] = [
  {
    id: 1,
    name: "Lawn Mowing Simulator",
    platforms: [
      {
        id: 1,
        name: "Windows",
      },
      {
        id: 2,
        name: "Steam",
      },
    ],
    price: 28.99,
    img: "https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/610d7e28a3f8b176b24e51fd/banners/kcazjj7yyt8kfdqy0dlv.jpg",
  },
  {
    id: 2,
    name: "Lawn Mowing Simulator",
    platforms: [
      {
        id: 3,
        name: "Windows",
      },
    ],
    price: 28.99,
    img: "https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/610d7e28a3f8b176b24e51fd/banners/kcazjj7yyt8kfdqy0dlv.jpg",
    promotion: 0.2,
  },
  {
    id: 3,
    name: "Lawn Mowing Simulator",
    platforms: [
      {
        id: 1,
        name: "Windows",
      },
      {
        id: 2,
        name: "Steam",
      },
    ],
    price: 28.99,
    img: "https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/610d7e28a3f8b176b24e51fd/banners/kcazjj7yyt8kfdqy0dlv.jpg",
  },
  {
    id: 4,
    name: "Lawn Mowing Simulator",
    platforms: [
      {
        id: 1,
        name: "Windows",
      },
    ],
    price: 28.99,
    img: "https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/610d7e28a3f8b176b24e51fd/banners/kcazjj7yyt8kfdqy0dlv.jpg",
    promotion: 0.7,
  },
  {
    id: 5,
    name: "Lawn Mowing Simulator",
    platforms: [
      {
        id: 1,
        name: "Windows",
      },
    ],
    price: 28.99,
    img: "https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/610d7e28a3f8b176b24e51fd/banners/kcazjj7yyt8kfdqy0dlv.jpg",
    promotion: 0.7,
  },
  {
    id: 6,
    name: "Lawn Mowing Simulator",
    platforms: [
      {
        id: 1,
        name: "Windows",
      },
    ],
    price: 28.99,
    img: "https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/610d7e28a3f8b176b24e51fd/banners/kcazjj7yyt8kfdqy0dlv.jpg",
    promotion: 0.7,
  },
  {
    id: 7,
    name: "Lawn Mowing Simulator",
    platforms: [
      {
        id: 1,
        name: "Windows",
      },
    ],
    price: 28.99,
    img: "https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/610d7e28a3f8b176b24e51fd/banners/kcazjj7yyt8kfdqy0dlv.jpg",
    promotion: 0.7,
  },
];
</script>

<template>
  <QPage padding class="row">
    <div class="home-page__games-grid q-mx-auto q-py-xl row items-center">
      <div
        v-for="(game, index) in gameList"
        :key="game.id"
        class="col-12 q-pa-md home-page__game-card"
      >
        <DcGameCard v-bind="game"> </DcGameCard>
      </div>
    </div>
  </QPage>
</template>

<style lang="scss">
.home-page {
  &__games-grid {
    max-width: 80rem;
  }

  @media screen and (min-width: 600px) {
    &__game-card {
      width: calc(6 / 12 * 100%) !important;
    }
  }

  @media screen and (min-width: 800px) {
    &__game-card {
      width: calc(4 / 12 * 100%) !important;
    }
  }

  @media screen and (min-width: 1024px) {
    &__game-card {
      width: calc(3 / 12 * 100%) !important;
    }
  }

  @media screen and (min-width: 1365px) {
    &__game-card {
      width: calc(2 / 12 * 100%) !important;
    }
  }
}
</style>
