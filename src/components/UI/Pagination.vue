<template>
  <div v-if="show" class="ui-pagination">
    <a
      v-for="item in items"
      :key="item.label"
      class="ui-pagination__item"
      :class="{ 'ui-pagination__item_disabled': item.disabled }"
      @click="goto(item.to)"
    >
      {{ item.label }}
    </a>
  </div>
</template>

<script>
import { getFromLocalStorage, setToLocalStorage } from '../../helpers/functions';

export default {

  name: 'UiPagination',

  props: {
    value: {
      type: Number,
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
  },

  computed: {
    show() {
      return this.pages > 1;
    },
    isFirst() {
      return this.value === 1;
    },
    isLast() {
      return this.value === this.pages;
    },
    items() {
      return [
        {
          label: '«',
          disabled: this.isFirst,
          to: 1,
        },
        ...[...Array(this.pages)].map((value, index) => ({
          label: index + 1,
          disabled: index + 1 === this.value,
          to: index + 1,
        })),
        {
          label: '»',
          disabled: this.isLast,
          to: this.pages,
        },
      ];
    },
  },

  methods: {
    goto(page) {
      if (page === this.value) {
        return;
      }

      setToLocalStorage('page', page);
      this.$emit('input', page);
    },
  },
  mounted() {
    if (getFromLocalStorage('page')) {
      this.$emit('input', getFromLocalStorage('page'));
    }
  },
};
</script>
