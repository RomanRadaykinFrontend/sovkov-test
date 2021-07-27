<template>
  <input
    type="text"
    v-model="valueInput"
    class="ui-money"
    @input="correctInputValue"
  />

</template>

<script>
import { checkingInputValue, getCorrectMoney } from '../../helpers/functions';

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
      this.valueInput = checkingInputValue(e.target.value);
      this.$emit('input', this.valueInput !== '' ? +this.valueInput : undefined);
      this.valueInput = getCorrectMoney(this.valueInput);
    },
  },
};
</script>
