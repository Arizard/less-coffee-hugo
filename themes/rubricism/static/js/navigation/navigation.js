console.log('rubricism/navigation.js');

window.onload = function(ev) {
    main();
};

function main() {
    Vue.component('hamburgerbutton', {
        props: ['icon', 'click-handler'],
        template: `
            <i :class="icon" v-on:click="clickHandler" />
        `,
    });
    let nav = new Vue({
        el: '#navigation',
        data: {
            hide: true,
        },
        computed: {
            className: function() {
                return this.hide ? 'navigation-mobile-hidden' : 'navigation-mobile-shown'
            }
        },
        methods: {
            toggle: function() {
                this.hide = !this.hide;
                console.log(this.hide);
            },
        },
    });

}