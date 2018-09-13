<template>
  <div id="app">
    <h1>Select Address</h1>
    <div>
      <label>縣市</label>
      <address-selector :options="dataCities" v-model="cityIndex" v-on:selectedEvent="getCity"></address-selector>
    </div>
    <div>
      <label>行政區</label>
      <address-selector :options="districts" v-model="districtIndex" :value="districtIndex"
       v-on:selectedEvent="getDistrict"></address-selector>
    </div>
    <div>
      <label>郵遞區號</label>
      {{zip}}
    </div>
    <hr/>
    <div>
      您所選擇的地址是：{{city}} {{district}} {{zip}}
    </div>
  </div>
</template>

<script>
import AddressSelector from './components/AddressSelector.vue';
const cities = [
  {
    name: '基隆市',
    areas: [
      { name: '仁愛區', zip: '200' },
      { name: '信義區', zip: '201' },
      { name: '中正區', zip: '202' },
      { name: '中山區', zip: '203' },
      { name: '安樂區', zip: '204' },
      { name: '暖暖區', zip: '205' },
      { name: '七堵區', zip: '206' },
    ],
  },
  {
    name: '台北市',
    areas: [
      { name: '中正區', zip: '300' },
      { name: '大同區', zip: '301' },
      { name: '中山區', zip: '302' },
      { name: '松山區', zip: '303' },
      { name: '大安區', zip: '304' },
      { name: '萬華區', zip: '305' },
      { name: '信義區', zip: '306' },
      { name: '士林區', zip: '307' },
      { name: '北投區', zip: '308' },
      { name: '內湖區', zip: '309' },
      { name: '南港區', zip: '310' },
      { name: '文山區', zip: '311' },
    ],
  },
  {
    name: '新竹市',
    areas: [
      { name: '新竹市', zip: '400' },
    ],
  },
];

export default {
  name: 'app',
  components: {
    AddressSelector
  },
  data() {
    return {
      cities,
      cityIndex:0,
      districtIndex:0,
      city:'基隆市',
      district:'',
      zip:''
    };
  },
  methods: {
   getCity(value) {
    this.cityIndex = value;
    this.city = this.cities[value].name;
   },
   getDistrict(value) {
    this.districtIndex = value;
    this.district = this.cities[this.cityIndex].areas[value].name;
    this.getZip(value);
   },
   getZip(value) {
    this.zip = this.cities[this.cityIndex].areas[value].zip;
   }
  },
  computed: {
    dataCities() {
      this.getZip(0);
      return this.cities;
    },
    districts() {
      this.getDistrict(0);
      return this.cities[this.cityIndex].areas;
    }
  },
  watch: {
    cityIndex() {
      this.districtIndex = 0;
      this.getCity(this.cityIndex);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
