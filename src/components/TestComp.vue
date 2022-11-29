<template>
  <div>
    {{ text }}
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: ["text"]
});
</script>
