/*
landing.html JS

author: Ayrlin Renata
*/
var clicked = false;
var skipIntro = false;

$(document).ready(function() {
	openGet();
	loadTitle();
	headerRepeat();
});

function openGet() {
	var sear = window.location.search;
	if(sear) {
		skipIntro = true;
	} 
}

function loadTitle() {
	//load the title images
	
	//Remove load screen
	$('#load-screen').css("display","none");
	
	//Animate title screen
	animIntro();
}

function headerRepeat() {
	setTimeout(function() {
		$('.rtitle').removeClass("anim-rtitle");
		$('.rtitle').addClass("anim-rtitle-out");
		setTimeout(function() {randomizeHeader(); headerRepeat();},1000);
	},9000);
}

function randomizeHeader() {
	//const head = $('#rtitle')[0];
	const wData = [
		[
			["a"],
			["very","vacantly","vacuously","vaguely","vainly","valiantly","validly","valorously","vanishingly","vapidly","variably","variously","vastly","vauntingly","vehemently","venally","vengefully","venomously","ventrally","verbally","verbosely","verily","vertically","very","vexatiously","vicariously","viciously","victoriously","videlicet","vigilantly","vigorously","vilely","vindictively","violently","virtually","virtuously","virulently","viscerally","viscidly","visibly","visually","vitally","vitriolically","vivaciously","vividly","vocally","vocationally","vociferously","volcanically","volitionally","volubly","volumetrically","voluminously","voluntarily","voluptuously","voraciously","vulnerably"],
			["random","reasonable","rabid","racemose","rackety","racking","racy","raddled","radial","radiant","radiating","radical","radio","radioactive","radiographic","radiological","radiolucent","radiopaque","radiophonic","radiosensitive","radiotelephonic","raffish","raftered","ragged","raging","raiding","raimentless","raining","rainless","rainproof","raisable","raiseable","raised","raising","rakish","rallying","ramate","rambling","rambunctious","ramose","ramous","rampageous","rampant","ramshackle","rancid","rancorous","random","randomised","randomized","ranging","rangy","rank","ranked","ranking","ransacked","ransomed","rapacious","rapid","rapt","raptorial","rapturous","rare","rarefied","rarified","raring","rascal","rash","rasping","raspy","ratable","rateable","ratified","ratiocinative","rational","rationalist","rationalistic","rationed","ratlike","rattled","rattlepated","rattling","ratty","raucous","ravaged","ravaging","ravening","ravenous","ravishing","raw","rawboned","rayless","razed","razorback","reachable","reactionary","reactionist","reactive","readable","ready","real","realised","realistic","realizable","realized","reanimated","rearing","rearmost","rearward","reasonable","reasoned","reasoning","reasonless","reassured","reassuring","rebarbative","rebellious","reborn","recalcitrant","receding","receivable","received","recent","receptive","recessed","recessional","recessionary","recessive","rechargeable","recherche","reciprocal","reciprocative","reciprocatory","reckless","reclaimable","reclaimed","recluse","reclusive","recognisable","recognised","recognizable","recognized","recoilless","recollective","recombinant","reconcilable","reconciled","reconciling","recondite","reconstructed","reconstructive","recorded","recoverable","recovered","recovering","recreant","recreational","recriminative","recriminatory","recrudescent","rectangular","rectifiable","rectified","rectilineal","rectilinear","recumbent","recuperative","recurrent","recurring","recursive","recurvate","recurved","recusant","recyclable","red","redbrick","reddened","reddish","redeemable","redeemed","redeeming","redemptional","redemptive","redemptory","redheaded","redistributed","redolent","redoubled","redoubtable","reduced","reducible","reductionist","reductive","redundant","redux","reechoing","reedlike","reedy","reefy","reeking","reentrant","referable","referenced","referent","referential","refined","reflected","reflecting","reflective","reflexed","reflexive","reformable","reformative","reformatory","reformed","reformist","refractile","refractive","refractory","refreshed","refreshful","refreshing","refrigerated","refrigerating","refulgent","refutable","regal","regardant","regardful","regardless","regenerate","regenerating","regent","regimental","regimented","regional","registered","regnant","regressive","regretful","regrettable","regular","regulated","regulation","regulative","regulatory","rehabilitative","reigning","reincarnate","reinforced","reinvigorated","reiterative","rejected","rejective","rejoicing","related","relational","relative","relativistic","relaxant","relaxed","relaxing","releasing","relentless","relevant","reliable","reliant","relieved","religious","relinquished","relocated","reluctant","remaining","remarkable","remediable","remedial","remindful","reminiscent","remiss","remittent","remorseful","remorseless","remote","removable","removed","remunerated","remunerative","renal","renascent","rending","renegade","renewable","renewed","renewing","reniform","renowned","rentable","renunciant","renunciative","reorganised","reorganized","repand","reparable","repayable","repeatable","repeated","repellant","repellent","repelling","repentant","repetitious","repetitive","replaceable","replete","reportable","reported","reposeful","reprehensible","representable","representational","representative","represented","repressed","repressing","repressive","reproachful","reprobate","reproducible","reproductive","reproving","reptilian","repudiative","repugnant","repulsive","reputable","requested","required","requisite","rescindable","rescued","resentful","reserved","resettled","resident","residential","residual","residuary","resilient","resinated","resinlike","resinous","resiny","resistant","resistible","resistive","resistless","resolute","resolvable","resolved","resonant","resonating","resounding","resourceful","resourceless","respectable","respected","respectful","respective","respiratory","resplendent","respondent","responsible","responsive","rested","restful","restive","restless","restorative","restrained","restricted","restricting","restrictive","resultant","resupine","resurgent","resuscitated","retained","retaliative","retaliatory","retentive","reticent","reticular","reticulate","retinal","retired","retiring","retractable","retracted","retractile","retral","retributive","retributory","retrievable","retro","retroactive","retroflex","retroflexed","retrograde","retrogressive","retrorse","retrospective","retrousse","returnable","returning","reusable","revealing","revelatory","revenant","revengeful","reverberant","reverberating","reverberative","revered","reverend","reverent","reverential","reverse","reversed","reversible","reversionary","reversive","revertible","reverting","revised","revitalised","revitalising","revitalized","revitalizing","revivalistic","revived","reviving","revocable","revokable","revolting","revolutionary","revolved","rewardful","rewarding","rhapsodic","rhenish","rheologic","rheological","rhetorical","rheumatic","rheumatoid","rhinal","rhizoidal","rhizomatous","rhombic","rhombohedral","rhomboid","rhomboidal","rhymed","rhymeless","rhyming","rhythmic","rhythmical","riant", "ribbed","ribbonlike","ribbon","ribless","riblike","rich","rickettsial","rickety","riddled","ridged","ridiculous","riemannian","rife","rifled","rigged","right","righteous","rightful","rightish","rightist","rightmost","rigid","rigorous","riled","rimed","rimeless","riming","rimless","rimmed","rimose","rimy","ringed","ringleted","ringlike","riotous","riparian","ripe","ripened","ripped","ripping","rippled","risen","risible","rising","riskless","risky","risque","ritardando","ritenuto","ritual","ritualistic","ritzy","rivalrous","riveting","roadless","roan","roaring","roast","roasted","robed","robotic","robotlike","robust","robustious","rockbound","rocklike","rocky","rococo","rodlike","roentgenographic","roguish","roiled","roiling","roily","rolled","rollicking","rolling","romance","romantic","romanticist","romanticistic","romish","roofed","roofless","roomy","rootbound","rooted","rootless","ropey","ropy","rosaceous","rose","roseate","rostrate","rosy","rotary","rotatable","rotated","rotational","rotatory","rotted","rotten","rotund","rouged","rough","roughdried","roughened","roughhewn","roughish","roughshod","round","roundabout","rounded","roundheaded","roundish","rousing","routine","roving","rowdy","royal","ruandan","rubber","rubberlike","rubbery","rubbishy","rubicund","ruby","rudderless","ruddy","rude","rudimentary","rueful","ruffled","rugged","rugose","ruined","ruinous","ruled","ruling","ruly","rum","rumbling","rumbustious","ruminant","ruminative","rummy","rumpled","runaway","runcinate","runic","running","runny","runproof","runty","rupestral","rupicolous","rural","ruritanian","rush","rushed","rushlike","rushy","russet","rust","rusted","rustic","rustless","rustling","rustproof","rustproofed","rusty","ruthful","ruthless","rutted","ruttish","rutty"],
			["algorithm"],
		]
	];
	const template = rsList(wData);
	
	//const w1 = cfLetter(rsList(template[0]));
	const w2 = cfLetter(rsList(template[1]));
	const w3 = cfLetter(rsList(template[2]));
	//const w4 = cfLetter(rsList(template[3]));
	
	//$('#rtitle-1').text(w1);
	$('#rtitle-2').text(w2);
	$('#rtitle-3').text(w3);
	//$('#rtitle-4').text(w4);
	$('.rtitle').removeClass("anim-rtitle-out");
	$('.rtitle').addClass("anim-rtitle");
}

function rsList(list) {
	return list[Math.floor(Math.random() * list.length)];
}

function cfLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// ANIMATIONS

function animIntro() {
	//animate title
	for(var tidx = 1; tidx < 5; tidx++) {
		animIntroUtil(tidx,'#title-', 0, 200);
	}
	//animate subtitle
	for(var tidx = 1; tidx < 8; tidx++) {
		animIntroUtil(tidx,'#subtitle-', 500, 200);
	}
	if(!skipIntro) {
		setTimeout(function() { 
			if(!clicked) {
				$('#arrow-down').addClass('anim-intro'); 
			}
		}, 3800);
		
		setTimeout(function() { 
			$('#arrow-down').removeClass('anim-intro'); 
			if(!clicked) 
				$('#arrow-down').addClass('anim-intro-loop'); 
		}, 4300);
	} else {
		animCollapse();
	}
}

/**
 * Workaround for setTimeout() not using different values in a loop
 */
function animIntroUtil(tidx,prefix,delay,delta) {
	if(skipIntro) {
		$(prefix+tidx).addClass('skip-anim');
	}
	setTimeout(function() { 
		if(!clicked) {
			$(prefix+tidx).addClass('anim-intro'); 
		} else {
			$(prefix+tidx).addClass('fullviz'); 
		}
	}, (skipIntro)? 0 : delay + tidx*delta);
}

function animCollapse() {
	clicked = true;
	
	//remove click
	$('#title-screen').attr("onClick","");
	
	//remove previous animation
	$('.t-text').removeClass("anim-intro");
	$('#arrow-down').removeClass("anim-intro-loop");
	
	if(skipIntro) {
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
}

