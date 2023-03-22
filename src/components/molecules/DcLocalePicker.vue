<template>
  <QBtnDropdown color="dark" label="Português" dropdown-icon="i-carbon-chevron-down">
    <QList class="bg-dark text-white">
      <QItem clickable v-close-popup @click="() => {}">
        <QItemSection avatar>
          <QIcon name="i-twemoji:flag-brazil" />
        </QItemSection>
        <QItemSection>
          <QItemLabel>Português</QItemLabel>
        </QItemSection>
      </QItem>

      <QItem clickable v-close-popup @click="() => {}">
        <QItemSection avatar>
          <QIcon name="i-twemoji:flag-united-states" />
        </QItemSection>
        <QItemSection>
          <QItemLabel>Inglês</QItemLabel>
        </QItemSection>
      </QItem>
    </QList>
  </QBtnDropdown>
</template>