<template v-if="true">
    <child-comp :name="name"></child-comp>
</template>

<script>
export default {
    data() {
        return {
            name: 'jk'
        }
    },
    mounted() {
        console.log('from other teams');
    },
    methods: {
        ...actions['sample'],
    },
}
</script>
