<template>
    <div class="init-index-component-root">
        <terminal
            class="terminal"
            :content="term"
        ></terminal>
    </div>
</template>

<script>
    import Terminal from '~/components/Terminal';

    export default {
        name: 'index',
        components: {Terminal},
        data: function () {
            return {
                term: `POST OK
Loading operating system`
            };
        }
    };
</script>

<style scoped>
    .init-index-component-root {
        color: #efd;
    }
</style>
