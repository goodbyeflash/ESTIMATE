<template>
  <div class="inner">
    <div class="btnWrap">
      <a class="btn" target="_blank" v-bind:href="link.url">
        {{ link.title }}
        <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EstimateLink',
  props: ['link'],
};
</script>

<style scoped></style>
