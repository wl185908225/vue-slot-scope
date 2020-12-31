<script>
    export default {
        props: ['value'],
        data() {
            return {
                newTag: ''
            }
        },
        render() {
            return this.$scopedSlots.default({
                tags: this.value,
                removeTag: this.removeTag,
                addTag: this.addTag,
                inputAttrs: {
                    value: this.newTag
                },
                inputEvents: {
                    input: (e) => { this.newTag = e.target.value },
                    keydown: (e) => {
                        if (e.keyCode === 13) {
                            e.preventDefault()
                            this.addTag()
                        }
                    }
                }
            })
        },
        methods: {
            addTag() {
                if (this.newTag.trim().length === 0 || this.value.includes(this.newTag.trim())) {
                    return
                }
                this.$emit('input', [...this.value, this.newTag.trim()])
                this.newTag = ''
            },
            removeTag(tag) {
                this.$emit('input', this.value.filter(t => t !== tag))
            }
        }
    }
</script>