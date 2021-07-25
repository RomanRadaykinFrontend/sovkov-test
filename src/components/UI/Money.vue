<template>
  <input
    type="text"
    v-model="valueInput"
    class="ui-money"
    @input="correctInputValue"
  />
</template>

<script>
import { getCorrectMoney } from '../../helpers/functions';

export default {

  name: 'UiMoney',

  props: {
    value: {
      type: Number,
      require: true,
    },
  },

  data() {
    return {
      valueInput: '',
    };
  },
  methods: {
    correctInputValue(e) {
      this.valueInput = this.valueInput.replace(',', '.');
      this.valueInput = this.valueInput.replace(/[^0-9.{1,}]/g, '');
      this.valueInput = getCorrectMoney(this.valueInput);
    },
  },
};
</script>
