<template>
  <div class="app">
    <app-header />
    <app-content/>
    <button @click="show">
      show
    </button>
  </div>
</template>

<script>
import getPayments from './mocks/getPayments';

export default {

  name: 'App',

  methods: {
    async show() {
      const res = await getPayments();
      console.log(res);
    },
  },
};
</script>
