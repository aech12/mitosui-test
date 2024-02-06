<template>
  <div>
    {{ message || "Hello" }} {{ name }}! I can run in React, Vue, Solid or
    Svelte!
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "my-basic-component",

  props: ["message"],

  data() {
    return { name: "Foo" };
  },
});
</script>