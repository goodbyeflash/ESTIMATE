<template>
  <div v-if="data">
    <EstimateHeader v-bind:info="data.info" />
    <EstimateBody v-bind:contents="data.contents.data" />
    <EstimateLink v-bind:link="data.contents.link" />
    <EstimateNote v-bind:notes="data.notes" />
  </div>

  <div class="inner">
    <vue3-html2pdf
      :show-layout="false"
      :float-layout="true"
      :enable-download="true"
      :preview-modal="false"
      :paginate-elements-by-height="1400"
      v-bind:filename="fileName"
      :pdf-quality="2"
      :manual-pagination="false"
      pdf-format="a4"
      pdf-orientation="portrait"
      pdf-content-width="768px"
      ref="html2Pdf"
    >
      <template v-slot:pdf-content>
        <div v-if="data">
          <EstimateHeader v-bind:info="data.info" />
          <EstimateBody v-bind:contents="data.contents.data" />
          <EstimateNote v-bind:notes="data.notes" />
        </div>
      </template>
    </vue3-html2pdf>
    <div class="btnWrap">
      <button class="btn" v-on:click="generateReport">
        견적서 <font-awesome-icon icon="fa-solid fa-download" />
      </button>
    </div>
  </div>
</template>

<script>
import EstimateHeader from './components/EstimateHeader.vue';
import EstimateBody from './components/EstimateBody.vue';
import EstimateLink from './components/EstimateLink.vue';
import EstimateNote from './components/EstimateNote.vue';
import axios from 'axios';
import dummyData from '../datas/learningcrew_1차.json';
import Vue3Html2pdf from 'vue3-html2pdf';

export default {
  name: 'App',
  components: {
    EstimateHeader,
    EstimateBody,
    EstimateLink,
    EstimateNote,
    Vue3Html2pdf,
  },
  data() {
    return {
      data: null,
      fileName: null,
    };
  },
  mounted() {
    if (window.location.href.indexOf('localhost') > -1) {
      this.data = dummyData;
      this.fileName = `${this.data.info.clientInfo.company}_${this.data.info.title}_견적서`;
    } else {
      axios({
        method: 'get',
        url: `./datas/${getUrlParams().id}.json`,
      }).then((response) => {
        if (response.statusText == 'OK') {
          this.data = response.data;
          this.fileName = `${this.data.info.clientInfo.company}_${this.data.info.title}_견적서`;
        } else {
          console.error('데이터를 찾을 수 없음');
        }
      });
    }
  },
  methods: {
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
  },
};

function getUrlParams() {
  let params = {};

  window.location.search.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    function (str, key, value) {
      params[key] = value;
    }
  );

  return params;
}
</script>

<style lang="scss"></style>
