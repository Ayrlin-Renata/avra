var landingScreen = {
    methods: {
        animIntro() {
            //animate title
            for(var tidx = 1; tidx < 5; tidx++) {
                this.animIntroUtil(tidx,'#title-', 0, 200);
            }
            //animate subtitle
            for(var tidx = 1; tidx < 8; tidx++) {
                this.animIntroUtil(tidx,'#subtitle-', 500, 200);
            }
            if(!this.skipIntro) {
                let context = this;
                setTimeout(function() { 
                    if(!context.clicked) {
                        $('#arrow-down').addClass('anim-intro'); 
                    }
                }, 3800);
                
                setTimeout(function() { 
                    $('#arrow-down').removeClass('anim-intro'); 
                    if(!context.clicked) 
                        $('#arrow-down').addClass('anim-intro-loop'); 
                }, 4300);
            } else {
                this.animCollapse();
            }
        },
        animIntroUtil(tidx,prefix,delay,delta) {
            if(this.skipIntro) {
                $(prefix+tidx).addClass('skip-anim');
            }
            let context = this;
            setTimeout(function() { 
                if(!context.clicked) {
                    $(prefix+tidx).addClass('anim-intro'); 
                } else {
                    $(prefix+tidx).addClass('fullviz'); 
                }
            }, (context.skipIntro)? 0 : delay + tidx*delta);
        },
        animCollapse() {
            this.clicked = true;
            
            //remove click
            $('#title-screen').attr("onClick","");
            
            //remove previous animation
            $('.t-text').removeClass("anim-intro");
            $('#arrow-down').removeClass("anim-intro-loop");
            
            if(this.skipIntro) {
                $('#title-screen').addClass('skip-anim');
                $('#title-container').addClass('skip-anim');
                $('#subtitle-container').addClass('skip-anim');
                $('#top-overlay').addClass('skip-anim');
                $('.t-text').addClass('skip-anim');
            }
            //do collapse anim
            $('#title-screen').addClass('anim-collapse');
            $('#title-container').addClass('anim-collapse');
            $('#subtitle-container').addClass('anim-collapse');
            $('#top-overlay').addClass('anim-collapse');
            $('.t-text').addClass('anim-collapse');
        },
    }
}
