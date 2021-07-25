<template>
  <div class="app">
    <app-header />
    <app-content/>
  </div>
</template>

<script>
import getPayments from './mocks/getPayments';

export default {

  name: 'App',

  methods: {
    async show() {
      const res = await getPayments();
    },
  },
};
</script>
