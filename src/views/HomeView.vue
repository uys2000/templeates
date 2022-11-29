<template>
  <div class="text-3xl font-bold underline">
    <test-comp text="text-comp text"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TestComp from '@/components/TestComp.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    TestComp,
  },
});
</script>
