<template>
    <div id="host-component-root">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Host'
    };
</script>

<style>
    html {
        background-color: #001;
        font-family: "Source Code Pro", "Consolas", monospace;
    }

    body {
        margin: 0;
    }
</style>

<style scoped>
</style>
