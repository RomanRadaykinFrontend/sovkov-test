<template>
  <div class="data-table-row" :style="getRowStyle">
    <data-table-cell
      v-for="value, idx in getFormateData"
      :key="idx"> {{ value }}
    </data-table-cell>
  </div>
</template>

<script>
import { getCorrectDate, getCorrectMoney } from '../../helpers/functions';

export default {
  name: 'DataTableRow',
  props: {
    row: {
      type: Object,
      require: false,
    },
    gridStyle: {
      type: String,
      require: true,
    },
  },
  mounted() {
    console.log(this.row);
  },
  computed: {
    getRowStyle() {
      return {
        'grid-template-columns': this.gridStyle,
      };
    },
    getFormateData() {
      return {
        ...this.row,
        date: getCorrectDate(this.row.date),
        money: getCorrectMoney(this.row.money),
      };
    },
  },

};
</script>

<style scoped lang="sass">
.data-table-row
  display: grid
</style>
