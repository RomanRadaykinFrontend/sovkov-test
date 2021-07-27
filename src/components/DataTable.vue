<template>
  <div class="data-table">
    <div class="data-table__filter">
      <ui-money
        v-model="moneyFilter"
        @input="getMoneyFilter($event)"
      />
    </div>

    <!-- Your component code here -->

    <div
      class="mobile-data-table"
    >
      <mobile-data-table-row
        v-for="row in getPaginateRows"
        :row="row"
        :key="row.id"
        :columns="columns" />
    </div>

    <div
      class="full-screen-data-table__header-row"
      :style="{'grid-template-columns':  `${getGridStyle}`}"
    >
      <data-table-cell v-for="col in columns" :key="col.label">
        {{ col.label }}
      </data-table-cell>
    </div>
    <data-table-row class="full-screen-data-table"
      v-for="(row, index) in getPaginateRows"
      :row="row"
      :gridStyle="getGridStyle"
      :key="index"/>

    <div class="data-table__paginator">
      <ui-pagination v-model="page" :pages="pageCount"
      />
    </div>
  </div>
</template>

<script>
export default {

  name: 'DataTable',

  props: {
    rows: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    page: 1,
    pageSize: 4,
    moneyFilter: 0,
  }),

  computed: {
    pageCount() {
      return Math.ceil(this.rows.length / this.pageSize);
    },
    getGridStyle() {
      return this.columns.map((col) => col.width).join(' ');
    },
    getPaginateRows() {
      const sortedRows = this.moneyFilter === 0 || this.moneyFilter === undefined
        ? [...this.rows]
        : this.rows.filter((row) => row.money <= this.moneyFilter);
      const result = sortedRows.slice((this.page - 1) * this.pageSize, this.pageSize * this.page);
      localStorage.setItem('sortData', JSON.stringify(result));
      return result;
    },
  },
  methods: {
    getMoneyFilter(value) {
      this.moneyFilter = value;
    },
  },
  mounted() {
    if (localStorage.getItem('valueInput')) {
      const moneyFilterFromStorage = localStorage.getItem('valueInput').split(' ').join('');
      this.moneyFilter = +moneyFilterFromStorage;
    }
  },
};
</script>

<style scoped lang="sass">
.data-table
  &__filter
    display: flex
    justify-content: flex-end
    margin-bottom: 15px
.full-screen-data-table
  &__header-row
    display: grid
.mobile-data-table
  display: none
@media screen and (max-width: 738px)
  .full-screen-data-table
    display: none
    &__header-row
      display: none
  .mobile-data-table
    display: block

</style>
