<template>
  <ul>
    <li v-for="(link, index) in links" :key="index">
      <slot name="link" :slotLink="link" :bookmarkButtonAttrs="{
          style: [ link.bookmarked ? { 'display': 'none'} : {}]
        }" :bookmarkButtonEvents="{
          click: () => bookmark(link)
        }"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: "LinkList",
  props: {},
  data() {
    return {
      links: [{ href: "http://www.baidu.com", title: 'title', bookmarked: false }]
    }
  },
  methods: {
    bookmark(link) {
      link.bookmarked = !link.bookmarked
    }
  }
};
</script>
