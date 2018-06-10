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
        props: ['script'],
        data: function () {
            return {
                terminalContent: ''
            };
        },
        mounted: function () {
            this.parseCommand(this.script.shift());
        },
        methods: {
            parseCommand: function (command) {
                /**
                 *  typeof(command[0]) === 'string'
                 *  Push every line of the command[0] to the terminal.
                 *      typeof(command[1]) === 'Object'
                 *      Parse #0 as accepted ms interval list.
                 *      !command[1].hasOwnProperty(0)
                 *      Set interval to default (1000ms)
                 *      command[1].hasOwnProperty('settings') // reserved for future use.
                 *      Parse settings.
                 *  typeof(command[0]) === 'number'
                 *  Special command. Defined in ~/scripts/command.
                 */
                if (typeof (command[0]) === 'string') {
                    command[0] = command[0].split('\n');
                    if (command.hasOwnProperty(1)) {
                        this.readScript(command[0], command[1]);
                    } else {
                        this.readScript(command[0], [10, 25, 35]);
                    }
                }
            },
            readScript: async function (singleLineScripts, delayGroup) {
                this.terminalContent += singleLineScripts.shift();
                if (singleLineScripts.length > 0) {
                    await util.awaitTimeout(util.array.randomIn(delayGroup));
                } else if (this.script.length > 0) {
                    this.parseCommand(this.script.shift());
                } else {
                    return false; // eof
                }
                return true;
            },
            makeTimeStamp: function (text) {
                return '[' + util.string.padding(util.getUnixTimeStamp(), '000000.000') + ']' + text;
            }
        }
    };
</script>

<style scoped>
    .terminal-component-root {
        overflow: hidden;
    }
</style>
