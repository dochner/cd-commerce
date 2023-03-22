import { ref } from 'vue'

const isCartDrawerOpen = ref(false)

const isMenuDrawerOpen = ref(false)

export const usePublicLayout = () => {
  const toggleCartDrawer = () => {
    isCartDrawerOpen.value = !isCartDrawerOpen.value
  }

  const toggleMenuDrawer = () => {
    isMenuDrawerOpen.value = !isMenuDrawerOpen.value
  }

  return {
    isCartDrawerOpen,
    toggleCartDrawer,
    isMenuDrawerOpen,
    toggleMenuDrawer,
  }
}

export default usePublicLayout;