<template lang="html">
  <sui-button
    toggle
    content="同意"
    :active="isActive"
    @click="isActive = !isActive"
  />
</template>

<script>
export default {
  name: 'ButtonToggleExample',
  data: () => ({
    isActive: false,
  }),
};
</script>
