<template>
  <div class="data-table">
    <div class="data-table__filter">
      <ui-money v-model="moneyFilter"/>
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
      <data-table-cell
        v-for="col in columns"
        :key="col.label">
        {{ col.label }}
      </data-table-cell>
    </div>
    <data-table-row
      class="full-screen-data-table"
      v-for=" row, index in getPaginateRows "
      :row="row"
      :gridStyle="getGridStyle"
      :key="index"/>

    <div class="data-table__paginator">
      <ui-pagination
        v-model="page"
        :pages="pageCount"
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
      return this.rows.slice((this.page - 1) * this.pageSize, this.pageSize * this.page);
    },
  },
};
</script>

<style scoped lang="sass">
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
