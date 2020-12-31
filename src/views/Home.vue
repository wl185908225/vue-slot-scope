<template>
  <div>
    <links-list>
      <div slot="link" slot-scope="{ slotLink, bookmarkButtonAttrs, bookmarkButtonEvents }">
        <a :href="slotLink.href">{{ slotLink.title }}</a>
        <button v-bind="bookmarkButtonAttrs" v-on="bookmarkButtonEvents">bookmark</button>
      </div>
    </links-list>
  </div>
</template>

<script>
import LinksList from "@/components/LinksList";

export default {
  name: "Home",
  components: {
    LinksList
  }
};
</script>
