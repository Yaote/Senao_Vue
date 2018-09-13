<template>
        <select @change="selectedEvent" v-model="selectedIndex">
            <option v-for="(item, index) in options" :value="index" :key="index">{{item.name}}</option>
        </select>
</template>

<script>
export default {
  name: 'AddressSelector',
  props: {
    value: Number,
    options: Array,
  },
  data() {
    return {
      selectedIndex: 0,
    };
  },
  methods: {
    selectedEvent() {
      this.$emit('selectedEvent', this.selectedIndex);
    },
  },
  watch: {
    value() {
      this.selectedIndex = this.value;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>