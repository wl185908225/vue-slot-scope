<template>
  <inlineTagsInput v-model="tags"></inlineTagsInput>
</template>
<script>
import inlineTagsInput from "@/components/inlineTagsInput";

export default {
  name: "Home",
  components: {
    inlineTagsInput
  },
  data() {
    return {
      tags: []
    };
  }
};
</script>
