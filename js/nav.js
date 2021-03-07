const NavApp = {
    data() {
        return {
            mounted: false,
            skipIntro: false,
            clicked: false,
            page: 'nav',
        }
    },
    mounted() {
        //disappear load screen
        this.mounted = true;
        //read query
        this.openGet();
        //do anims
        this.headerRepeat();
        this.animIntro();
        //footer
        this.drawKoFi();
    },
    updated() {
        switch(this.page) { // runs after element loaded
            case 'nav': {} break;
            case 'stories': {
                this.hcbFunction("stories","https://ayrlin-renata.github.io/avra/html/stories.html");
                this.loadHtml("stories","sacrifice");
            } break;
            default: {}
        }
    },
    mixins: [landingScreen, commentBox, navTitleBox],
    watch: {
        page: function(val) { // runs immediately before elements are ready
            switch(val) {
                case 'nav': {} break;
                case 'stories': {
                    if($('#hcb-script-stories')[0]) {
                        $('#hcb-script-stories')[0].remove();
                    }
                } break;
                default: {}
            }
        }
    },
    methods: {
        switchPage(target) {
            this.page = target;
        },
        landingClick() {
            if(!this.clicked) {
                this.clicked = true;
                this.animCollapse();
            } else {
                this.switchPage('nav');
            }
        },
        openGet() {
            var sear = window.location.search;
            if(sear) {
                this.skipIntro = true;
            } 
        },
        drawKoFi() {
            kofiWidgetOverlay.draw('ayrlin', {
                'type': 'floating-chat',
                'floating-chat.donateButton.text': 'Ko-Fi',
                'floating-chat.donateButton.background-color': '#00aaaa',
                'floating-chat.donateButton.text-color': '#fff'
            });
        },
        loadHtml(folder,file) {
            $(((folder == '.')? "" : '.' + folder) + '#' + file).load("../html/" + folder + "/" + file + ".html");
        }
    }
}
const app = Vue.createApp(NavApp);

app.component('load-screen', {
    template: '#load-screen-template',
})

app.component('landing-screen', {
    template: '#landing-screen-template',
})

app.component('card-row-template', {
    template: '#card-row-template',
})

app.component('card-template', {
    template: '#card-template',
})

app.component('htmlcommentbox-template', {
    template: '#htmlcommentbox-template',
})

app.mount('#nav');
