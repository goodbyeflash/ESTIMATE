<template>
  <div class="inner">
    <div class="sheetFooter">
      <h3>Note</h3>
      <ul class="etcList">
        <li v-for="(note, index) in notes" :key="index">
          <span v-html="note"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EstimateNote',
  props: ['notes'],
};
</script>

<style scoped></style>
