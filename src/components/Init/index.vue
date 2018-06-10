<template>
    <div class="init-index-component-root">
        <terminal
            class="terminal"
            :script="term"
        ></terminal>
    </div>
</template>

<script>
    import Terminal from '~/components/Terminal';
    import util from '~/util';
    import init from '~/scripts/init';

    export default {
        name: 'index',
        components: {Terminal},
        data: function () {
            return {
                term: ''
            };
        }
    };
</script>

<style scoped>
    .init-index-component-root {
        color: #efd;
    }
</style>
