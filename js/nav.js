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
        this.animIntro();
        this.headerRepeat();
        //footer
        this.drawKoFi();
    },
    methods: {
        switchPage(target) {
            this.page = target;
            if(target == "stories") {
                if($('#hcb-script-stories')[0]) {
                    $('#hcb-script-stories')[0].remove();
                }
                this.hcbFunction("stories","https://ayrlin-renata.github.io/avra/html/stories.html");
            }
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
        drawKoFi() {
            kofiWidgetOverlay.draw('ayrlin', {
                'type': 'floating-chat',
                'floating-chat.donateButton.text': 'Ko-Fi',
                'floating-chat.donateButton.background-color': '#00aaaa',
                'floating-chat.donateButton.text-color': '#fff'
            });
        },
        headerRepeat() {
            var context1 = this;
            setTimeout(function() {
                $('.rtitle').removeClass("anim-rtitle");
                $('.rtitle').addClass("anim-rtitle-out");
                var context2 = context1;
                setTimeout(function() {context2.randomizeHeader(); context2.headerRepeat();},1000);
            },9000);
        },
        randomizeHeader() {
            //const head = $('#rtitle')[0];
            const wData = [
                [
                    ["a"],
                    ["very","vacantly","vacuously","vaguely","vainly","valiantly","validly","valorously","vanishingly","vapidly","variably","variously","vastly","vauntingly","vehemently","venally","vengefully","venomously","ventrally","verbally","verbosely","verily","vertically","very","vexatiously","vicariously","viciously","victoriously","videlicet","vigilantly","vigorously","vilely","vindictively","violently","virtually","virtuously","virulently","viscerally","viscidly","visibly","visually","vitally","vitriolically","vivaciously","vividly","vocally","vocationally","vociferously","volcanically","volitionally","volubly","volumetrically","voluminously","voluntarily","voluptuously","voraciously","vulnerably"],
                    ["random","reasonable","rabid","racemose","rackety","racking","racy","raddled","radial","radiant","radiating","radical","radio","radioactive","radiographic","radiological","radiolucent","radiopaque","radiophonic","radiosensitive","radiotelephonic","raffish","raftered","ragged","raging","raiding","raimentless","raining","rainless","rainproof","raisable","raiseable","raised","raising","rakish","rallying","ramate","rambling","rambunctious","ramose","ramous","rampageous","rampant","ramshackle","rancid","rancorous","random","randomised","randomized","ranging","rangy","rank","ranked","ranking","ransacked","ransomed","rapacious","rapid","rapt","raptorial","rapturous","rare","rarefied","rarified","raring","rascal","rash","rasping","raspy","ratable","rateable","ratified","ratiocinative","rational","rationalist","rationalistic","rationed","ratlike","rattled","rattlepated","rattling","ratty","raucous","ravaged","ravaging","ravening","ravenous","ravishing","raw","rawboned","rayless","razed","razorback","reachable","reactionary","reactionist","reactive","readable","ready","real","realised","realistic","realizable","realized","reanimated","rearing","rearmost","rearward","reasonable","reasoned","reasoning","reasonless","reassured","reassuring","rebarbative","rebellious","reborn","recalcitrant","receding","receivable","received","recent","receptive","recessed","recessional","recessionary","recessive","rechargeable","recherche","reciprocal","reciprocative","reciprocatory","reckless","reclaimable","reclaimed","recluse","reclusive","recognisable","recognised","recognizable","recognized","recoilless","recollective","recombinant","reconcilable","reconciled","reconciling","recondite","reconstructed","reconstructive","recorded","recoverable","recovered","recovering","recreant","recreational","recriminative","recriminatory","recrudescent","rectangular","rectifiable","rectified","rectilineal","rectilinear","recumbent","recuperative","recurrent","recurring","recursive","recurvate","recurved","recusant","recyclable","red","redbrick","reddened","reddish","redeemable","redeemed","redeeming","redemptional","redemptive","redemptory","redheaded","redistributed","redolent","redoubled","redoubtable","reduced","reducible","reductionist","reductive","redundant","redux","reechoing","reedlike","reedy","reefy","reeking","reentrant","referable","referenced","referent","referential","refined","reflected","reflecting","reflective","reflexed","reflexive","reformable","reformative","reformatory","reformed","reformist","refractile","refractive","refractory","refreshed","refreshful","refreshing","refrigerated","refrigerating","refulgent","refutable","regal","regardant","regardful","regardless","regenerate","regenerating","regent","regimental","regimented","regional","registered","regnant","regressive","regretful","regrettable","regular","regulated","regulation","regulative","regulatory","rehabilitative","reigning","reincarnate","reinforced","reinvigorated","reiterative","rejected","rejective","rejoicing","related","relational","relative","relativistic","relaxant","relaxed","relaxing","releasing","relentless","relevant","reliable","reliant","relieved","religious","relinquished","relocated","reluctant","remaining","remarkable","remediable","remedial","remindful","reminiscent","remiss","remittent","remorseful","remorseless","remote","removable","removed","remunerated","remunerative","renal","renascent","rending","renegade","renewable","renewed","renewing","reniform","renowned","rentable","renunciant","renunciative","reorganised","reorganized","repand","reparable","repayable","repeatable","repeated","repellant","repellent","repelling","repentant","repetitious","repetitive","replaceable","replete","reportable","reported","reposeful","reprehensible","representable","representational","representative","represented","repressed","repressing","repressive","reproachful","reprobate","reproducible","reproductive","reproving","reptilian","repudiative","repugnant","repulsive","reputable","requested","required","requisite","rescindable","rescued","resentful","reserved","resettled","resident","residential","residual","residuary","resilient","resinated","resinlike","resinous","resiny","resistant","resistible","resistive","resistless","resolute","resolvable","resolved","resonant","resonating","resounding","resourceful","resourceless","respectable","respected","respectful","respective","respiratory","resplendent","respondent","responsible","responsive","rested","restful","restive","restless","restorative","restrained","restricted","restricting","restrictive","resultant","resupine","resurgent","resuscitated","retained","retaliative","retaliatory","retentive","reticent","reticular","reticulate","retinal","retired","retiring","retractable","retracted","retractile","retral","retributive","retributory","retrievable","retro","retroactive","retroflex","retroflexed","retrograde","retrogressive","retrorse","retrospective","retrousse","returnable","returning","reusable","revealing","revelatory","revenant","revengeful","reverberant","reverberating","reverberative","revered","reverend","reverent","reverential","reverse","reversed","reversible","reversionary","reversive","revertible","reverting","revised","revitalised","revitalising","revitalized","revitalizing","revivalistic","revived","reviving","revocable","revokable","revolting","revolutionary","revolved","rewardful","rewarding","rhapsodic","rhenish","rheologic","rheological","rhetorical","rheumatic","rheumatoid","rhinal","rhizoidal","rhizomatous","rhombic","rhombohedral","rhomboid","rhomboidal","rhymed","rhymeless","rhyming","rhythmic","rhythmical","riant", "ribbed","ribbonlike","ribbon","ribless","riblike","rich","rickettsial","rickety","riddled","ridged","ridiculous","riemannian","rife","rifled","rigged","right","righteous","rightful","rightish","rightist","rightmost","rigid","rigorous","riled","rimed","rimeless","riming","rimless","rimmed","rimose","rimy","ringed","ringleted","ringlike","riotous","riparian","ripe","ripened","ripped","ripping","rippled","risen","risible","rising","riskless","risky","risque","ritardando","ritenuto","ritual","ritualistic","ritzy","rivalrous","riveting","roadless","roan","roaring","roast","roasted","robed","robotic","robotlike","robust","robustious","rockbound","rocklike","rocky","rococo","rodlike","roentgenographic","roguish","roiled","roiling","roily","rolled","rollicking","rolling","romance","romantic","romanticist","romanticistic","romish","roofed","roofless","roomy","rootbound","rooted","rootless","ropey","ropy","rosaceous","rose","roseate","rostrate","rosy","rotary","rotatable","rotated","rotational","rotatory","rotted","rotten","rotund","rouged","rough","roughdried","roughened","roughhewn","roughish","roughshod","round","roundabout","rounded","roundheaded","roundish","rousing","routine","roving","rowdy","royal","ruandan","rubber","rubberlike","rubbery","rubbishy","rubicund","ruby","rudderless","ruddy","rude","rudimentary","rueful","ruffled","rugged","rugose","ruined","ruinous","ruled","ruling","ruly","rum","rumbling","rumbustious","ruminant","ruminative","rummy","rumpled","runaway","runcinate","runic","running","runny","runproof","runty","rupestral","rupicolous","rural","ruritanian","rush","rushed","rushlike","rushy","russet","rust","rusted","rustic","rustless","rustling","rustproof","rustproofed","rusty","ruthful","ruthless","rutted","ruttish","rutty"],
                    ["algorithm"],
                ]
            ];
            const template = this.rsList(wData);
            
            //const w1 = cfLetter(this.rsList(template[0]));
            const w2 = this.cfLetter(this.rsList(template[1]));
            const w3 = this.cfLetter(this.rsList(template[2]));
            //const w4 = cfLetter(this.rsList(template[3]));
            
            //$('#rtitle-1').text(w1);
            $('#rtitle-2').text(w2);
            $('#rtitle-3').text(w3);
            //$('#rtitle-4').text(w4);
            $('.rtitle').removeClass("anim-rtitle-out");
            $('.rtitle').addClass("anim-rtitle");
        },
        rsList(list) {
            return list[Math.floor(Math.random() * list.length)];
        },
        cfLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        hcbFunction(id, pge = '') {
            if (!window.hcb_user) { hcb_user = {}; }
            hcb_user.PAGE = pge;
            (function () {
                var s = document.createElement("script"),
                    l = hcb_user.PAGE || ("" + window.location).replace(/'/g, "%27"),
                    h = "https://www.htmlcommentbox.com";
                s.setAttribute("id", "hcb-script-" + id);
                s.setAttribute("type", "application/javascript");
                s.setAttribute("src", h + "/jread?page=" + encodeURIComponent(l).replace("+", "%2B") + "&mod=%241%24wq1rdBcg%24CKnAuHuwa6v1%2FPeVJz3UF%2F" + "&opts=16862&num=20&ts=1614062288781");
                if (typeof s != "undefined")
                    document.getElementsByTagName("head")[0].appendChild(s);
            })();
            //<script type="application/javascript" src="https://www.htmlcommentbox.com/jread?page=https%3A%2F%2Fayrlin-renata.github.io%2Favra%2Fhtml%2Fstories.html&mod=%241%24wq1rdBcg%24CKnAuHuwa6v1%2FPeVJz3UF%2F&opts=16862&num=20&ts=1614062288781"></script>
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
