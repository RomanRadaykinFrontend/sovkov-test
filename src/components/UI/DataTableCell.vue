<template>
  <div class="data-table-cell">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'DataTableRow',
};
</script>

<style scoped lang="sass">
.data-table-cell
  padding: 5px 0
  border: 1px solid black
  text-align: center
</style>
