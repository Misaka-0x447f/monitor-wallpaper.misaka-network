<template>
    <div class="terminal-component-root">
        <div v-for="i in terminalContent" :key="i">
            <span>
                {{ i }}
            </span>
        </div>
    </div>
</template>

<script>
    import util from '~/util';

    export default {
        name: 'Terminal',
        props: ['content'],
        computed: {
            terminalContent: function () {
                return util.escapeHTML(this.content).split('\n');
            }
        }
    };
</script>

<style scoped>
</style>
