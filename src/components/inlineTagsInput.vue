<template>
    <renderlessTagsInput :value="value" @input="(tags) => { $emit('input', tags) }">
        <div slot-scope="{ tags, removeTag, inputAttrs, inputEvents }" class="tags-input">
        <span class="tags-input-tag" v-for="(tag, index) in tags" :key="index">
            <span>{{ tag }}</span>
            <button type="button" class="tags-input-remove" @click="removeTag(tag)">&times;</button>
        </span>
        <input class="tags-input-text" placeholder="Add tag ..."
            v-bind="inputAttrs"
            v-on="inputEvents"
        >
        </div>
  </renderlessTagsInput>
</template>
<script>
    import renderlessTagsInput from '@/components/renderlessTagsInput'; 
    export default {
        props: ['value'],
        components: {
            renderlessTagsInput
        },
    }
</script>