<template>
  <div class="inner">
    <div class="sheetBody">
      <h3>Contents</h3>
      <table class="detailList">
        <thead>
          <tr>
            <th>세부내용</th>
            <th>단가</th>
            <th>기간</th>
            <th>비용</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(content, index) in contents" :key="index">
            <td>{{ content.text }}</td>
            <td>{{ new Intl.NumberFormat().format(content.unitPrice) }}</td>
            <td>{{ content.day }}</td>
            <td>
              {{
                new Intl.NumberFormat().format(content.day * content.unitPrice)
              }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EstimateBody',
  props: ['contents'],
  mounted() {
    let totalPrice = 0;
    this.contents.forEach((data) => {
      totalPrice += data.unitPrice * data.day;
    });
    this.emitter.emit('calTotalPrice', totalPrice);
  },
};
</script>

<style scoped></style>
