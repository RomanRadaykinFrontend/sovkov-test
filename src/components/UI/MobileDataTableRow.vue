<template>
  <div class="mobile-data-table-row">
    <div class="mobile-data-table-row__wrapper"
         v-for="col in columns"
         :key="col.label">
      <div class="mobile-data-table-row__item">
        <span class="mobile-data-table-row__name"> {{ col.label }} </span>
        <span class="mobile-data-table-row__value"> {{ row[col.label.toLowerCase()] }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileDataTableRow',
  props: {
    row: {
      type: Object,
      require: true,
    },
    columns: {
      type: Array,
      require: true,
    },
  },

};
</script>

<style scoped lang="sass">
.mobile-data-table-row
  width: 100%
  padding: 10px
  border: 1px solid black
  margin-top: 15px

  &__wrapper
    margin-top: 10px
    &:nth-child(1)
      margin-top: 0

  &__item
    display: flex
    flex-direction: column

  &__name
    font-weight: bold

</style>
