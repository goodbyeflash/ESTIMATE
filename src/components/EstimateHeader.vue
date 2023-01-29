<template>
  <div class="inner">
    <div class="sheetHeader">
      <h1>Estimate.</h1>

      <h2>{{ info.title }}</h2>
      <test></test>
      <div class="information">
        <div class="item">
          <h3>Provider</h3>
          <div class="itemTxt">
            <p>{{ info.providerInfo.company }}</p>
            <p>{{ info.providerInfo.businessNo }}</p>
            <p>{{ info.providerInfo.hp }}</p>
            <p>{{ info.providerInfo.name }}</p>
          </div>
        </div>

        <div class="item">
          <h3>Date</h3>
          <div class="itemTxt">
            <p>{{ info.date }}</p>
          </div>
        </div>

        <div class="item">
          <h3>Client</h3>
          <div class="itemTxt">
            <p>{{ info.clientInfo.company }}</p>
            <p>{{ info.clientInfo.businessNo }}</p>
            <p>{{ info.clientInfo.hp }}</p>
            <p>{{ info.clientInfo.name }}</p>
          </div>
        </div>

        <div class="item">
          <h3>Total(vat포함)</h3>
          <p class="totalPrice">
            {{ new Intl.NumberFormat().format(totalPrice) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EstimateHeader',
  props: {
    info: Object,
  },
  data() {
    return {
      totalPrice: 0,
    };
  },
  mounted() {
    this.emitter.on('calTotalPrice', (e) => {
      this.totalPrice = e;
    });
  },
};
</script>

<style scoped></style>
