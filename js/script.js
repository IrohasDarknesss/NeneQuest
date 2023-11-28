// Setting Canvas
var canvas = document.getElementById( 'canvas' );
canvas.width = 1000;		//canvas's width'
canvas.height = 640;	//canvas's height
// Get Context
var ctx = canvas.getContext( '2d' );
 

// Player
var player = new Object();
player.img = new Image();
player.img.src = 'img/player1.png';
player.x = 0;
player.y = 0;
player.die_x = 0;
player.die_y = 0;
player.move = 0;
player.jump = 0;

var player2 = new Object();
player2.img = new Image();
player2.img.src = 'img/player2.png';
player2.x = 0;
player2.y = 0;
player2.die_x = 0;
player2.die_y = 0;
player2.move = 0;
player2.jump = 0;
 
var bg = new Object();
bg.img = new Image();
bg.x = 0;
bg.y = 0;
var bg2 = new Image();
bg2.src = "img/bridge.png";


bg.img.src = 'img/bg.png';
bg.img.style.zIndex = 1;


var time = new Object();
time.bg = 0;
time.bb = 0;
time.md = 0;
time.game = 600000;
time.pace = 2;
time.fire = 0;
time.af =0;
time.bf =0;
time.cf =0;
time.df =0;
time.ef =0;
time.ff =0;
time.gf =0;
time.hf =0;
time.if =0;
time.ac = Math.random()*700;
time.bc = Math.random()*700;
time.cc = Math.random()*700;
time.dc = Math.random()*700;
time.ec = Math.random()*700;
time.fc = Math.random()*700;
time.gc = Math.random()*700;
time.hc = Math.random()*700;
time.ic = Math.random()*700;


var weapon = new Object();
weapon.img =  new Image();
weapon.img.src="img/weapon_sword.png";
weapon.time = 0;
weapon.time2 = 0;

var weapon_a = new Image();
weapon_a.src = "img/weapon_a.png";

var weapon2 = new Image();
weapon2.src = "img/weapon_axe.png";

var weapon2_a = new Image();
weapon2_a.src ="img/weapon_axe_a.png";



var monster_a = new Object();
monster_a.img = new Image();
monster_a.src = "img/icon_fire.png";
monster_a.x = 900;
monster_a.y = 300;
monster_a.life = 1;
monster_a.atx = 0;
monster_a.aty = 0;



var monster_b = new Object();
monster_b.img = new Image();
monster_b.src = "img/icon_fire.png";
monster_b.x = 900;
monster_b.y = 400;
monster_b.life = 1;
monster_b.atx = 0;
monster_b.aty = 0;

var monster_c = new Object();
monster_c.img = new Image();
monster_c.src = "img/icon_fire.png";
monster_c.x = 900;
monster_c.y = 366;
monster_c.life = 1;
monster_c.atx = 0;
monster_c.aty = 0;

var monster_d = new Object();
monster_d.img = new Image();
monster_d.src = "img/icon_fire.png";
monster_d.x = 900;
monster_d.y = 500;
monster_d.life = 1;
monster_d.atx = 0;
monster_d.aty = 0;

var monster_e = new Object();
monster_e.img = new Image();
monster_e.src = "img/icon_fire.png";
monster_e.x = 900;
monster_e.y = 350;
monster_e.life = 1;
monster_e.atx = 0;
monster_e.aty = 0;

var monster_f = new Object();
monster_f.img = new Image();
monster_f.src = "img/icon_fire.png";
monster_f.x = 900;
monster_f.y = 450;
monster_f.life = 1;

var monster_g = new Object();
monster_g.img = new Image();
monster_g.src = "img/icon_fire.png";
monster_g.x = 900;
monster_g.y = 333;
monster_g.life = 1;

var monster_h = new Object();
monster_h.img = new Image();
monster_h.src = "img/icon_fire.png";
monster_h.x = 900;
monster_h.y = 200;
monster_h.life = 1;

var monster_i = new Object();
monster_i.img = new Image();
monster_i.src = "img/icon_fire.png";
monster_i.x = 900;
monster_i.y = 250;
monster_i.life = 1;


var monsterspeed = new Object();
monsterspeed.a = Math.floor(Math.random()*13)+3;
monsterspeed.b = Math.floor(Math.random()*13)+3;
monsterspeed.c = Math.floor(Math.random()*13)+3;
monsterspeed.d = Math.floor(Math.random()*13)+3;
monsterspeed.e = Math.floor(Math.random()*13)+3;
monsterspeed.f = Math.floor(Math.random()*13)+3;
monsterspeed.g = Math.floor(Math.random()*13)+3;
monsterspeed.h = Math.floor(Math.random()*13)+3;
monsterspeed.i = Math.floor(Math.random()*13)+3;


dragon=new Image();
dragon.src ="img/enemy_dragon.png";


var dra = new Object();
dra.x = 0;
dra.y = 0;
dra.life = 0;



var fire = new Object();
fire.x = -9999;
fire.y = 300;
fire.flag = 0;

var fire1 =new Object();
fire1.x = -9999;
fire1.y = 300;
fire1.flag = 0;

var fire2 =new Object();
fire2.x = -9999;
fire2.y = 300;
fire2.flag = 0;

var fire3 =new Object();
fire3.x = -9999;
fire3.y = 300;
fire3.flag = 0;


var fire4 =new Object();
fire4.x = -700;
fire4.y = 300;
fire4.flag = 0;



var fireimg = new Image();
fireimg.src = "img/icon_fire.png";





var monsteria = new Image();
monsteria.src ="img/enemy_boar_anim.png";



var damage = new Object();
damage.x = 0;
damage.y = 0;
damage.img = new Image();
damage.src ="img/icon_damage.png";

var damageimg = new Image();
damageimg.src ="img/icon_damage.png";



var hpline = canvas.getContext('2d');


var hp = new Object();
hp.player = 150;
hp.player2 = 150;
hp.dragon = 200;
hp.ia = 1;
hp.ib = 1;
hp.ic = 1;
hp.id = 1;
hp.ie = 1;
hp.if = 1;
hp.ig = 1;
hp.ih = 1;
hp.ii = 1;
hp.icon_x = 30 ;
hp.icon_x2 = hp.icon_x + 340 ;
hp.icon_y = 30;
hp.icon_y2 = hp.icon_y +0;

var hpicon = new Image();
hpicon.src = "img/icon_p1.png";
var hpicon2 = new Image();
hpicon2.src = "img/icon_p2.png";


var die = new Object();
die.ax = 0;
die.bx = 0;
die.cx = 0;
die.ex = 0;
die.fx = 0;
die.gx = 0;
die.hx = 0;
die.ix = 0;
die.jx = 0;

die.ay = 0;
die.by = 0;
die.cy = 0;
die.dy = 0;
die.ey = 0;
die.fy = 0;
die.gy = 0;
die.hy = 0;
die.iy = 0;



var died_a = new Image();
died_a.src = "img/enemy_die.png";




var died_b = new Image();
died_b.src = "img/enemy_die.png";


var died_c = new Image();
died_c.src = "img/enemy_die.png";


///////////////////////////////////
// Object


var hako_a = new Image();
hako_a.src = "img/obj_barrel.png";

var hako_an = new Image();
hako_an.src = "img/obj_barrel1.png";

var hako_b = new Image();
hako_b.src = "img/obj_chest.png";

var hako_bn = new Image();
hako_bn.src = "img/obj_chest1.png";


//Box A
var hakoa = new Object();
hakoa.x = 900;
hakoa.y = Math.random()*500;
if(hakoa.y < 250){
	hakoa.y = 250
}
hakoa.life = 1;
hakoa.timef = 0;
hakoa.timec = Math.random()*500;
hakoa.px = 0;
hakoa.py = 0;
hakoa.timeh = 0;
hakoa.atx = 0;
hakoa.aty = 0;


//Box B
var hakob = new Object();
hakob.x = 900;
hakob.y = Math.random()*500;
if(hakob.y < 250){
	hakob.y = 250
}
hakob.life = 1;
hakob.timef = 0;
hakob.timec = Math.random()*200;
hakob.px = 0;
hakob.py = 0;
hakob.timeh = 0;
hakob.atx = 0;
hakob.aty = 0;

///////////////////////////////////
// Weapon
var onigiri = new Image();
onigiri.src = "img/item_onigiri.png";

var onigiria = new Object();
onigiria.life = 0;
onigiria.x = 0;
onigiria.y = 0;
onigiria.rate = 0.5;
///////////////////////////////////
// Attack Flg

var atk = new Object();
atk.mona = 0;
atk.monb = 0;
atk.monc = 0;
atk.mond = 0;
atk.dra = 0;
atk.hakoa = 0;
atk.hakob = 0;
///////////////////////////////////
// Weapon Img
var weapon_axe = new Image();
weapon_axe.src = "img/weapon_axe.png";
var weapon_sword2 = new Image();
weapon_sword2.src = "img/weapon_sword2.png";
var weapon_bow = new Image();
weapon_bow.src = "img/weapon_bow.png";
var weapon_arrow = new Image();
weapon_arrow.src = "img/weapon_arrow.png";
// Field Weapon
var bow = new Object();
bow.x = 900;
bow.y = Math.random()*600+200;
bow.flag = 0;
bow.ht = Math.random()*500;


var axe = new Object();
axe.x = 900;
axe.y = Math.random()*600+200;
axe.flag = 0;
axe.ht = Math.random()*500;


var arrow = new Object();
arrow.x = 900;
arrow.y = Math.random()*600+200;
arrow.flag = 0;
arrow.ht = Math.random()*500;

var arrow = new Object();
arrow.x = 900;
arrow.y = Math.random()*600+200;
arrow.flag = 0;
arrow.ht = Math.random()*500;

var sword2 = new Object();
sword2.x = 0;
sword2.y = 0;
sword2.flag = 0;
sword2.rate = 0.5;



//////////////////////////////////
// Coffin

var hitsugi = new Image();
hitsugi.src = "img/hitsugi.png";

var hitsugi_break = new Image();
hitsugi_break.src = "img/hitsugi_break.png";

var coffin = new Object();
coffin.flag1 = 0;
coffin.flag2 = 0;

coffin.ax = 0;
coffin.ay = 0;
coffin.bx = 0;
coffin.by = 0;

coffin_time_a =0;
coffin_time_b =0;

var p1_die = new Image();
p1_die.src = "img/p1_die.png";
var p2_die = new Image();
p2_die.src = "img/p2_die.png";

var heaven = new Object();
heaven.a = 0;
heaven.b = 0;

//////////////////////////////////
// Gameover
var gameover = new Object();
gameover.time = 0;
var overtitle = new Image();
overtitle.src = "img/gameover/gameover_text.jpg";

var dieplayer = new Image();
dieplayer.src = "img/gameover/p1_down.png";

var dieplayer2 = new Image();
dieplayer2.src = "img/gameover/p2_down.png";

var bg_o = new Image();
bg_o.src = "img/gameover/bg_o.png";
var bg_u = new Image();
bg_u.src = "img/gameover/bg_u.png";

var ba_o = new Image();
ba_o.src = "img/gameover/ba_o.png";
var ba_u = new Image();
ba_u.src = "img/gameover/ba_u.png";

var bm_o = new Image();
bm_o.src = "img/gameover/bm_o.png";
var bm_u = new Image();
bm_u.src = "img/gameover/bm_u.png";

var be_o = new Image();
be_o.src = "img/gameover/be_o.png";
var be_u = new Image();
be_u.src = "img/gameover/be_u.png";

var o_o = new Image();
o_o.src = "img/gameover/o_o.png";
var o_u = new Image();
o_u.src = "img/gameover/o_u.png";

var v_o = new Image();
v_o.src = "img/gameover/v_o.png";
var v_u = new Image();
v_u.src = "img/gameover/v_u.png";

var e_o = new Image();
e_o.src = "img/gameover/e_o.png";
var e_u = new Image();
e_u.src = "img/gameover/e_u.png";

var r_o = new Image();
r_o.src = "img/gameover/r_o.png";
var r_u = new Image();
r_u.src = "img/gameover/r_u.png";


var overt = new Object();
overt.g = 0;
overt.a = 0;
overt.m = 0;
overt.e = 0;

overt.go = 0;
overt.gv = 0;
overt.ge = 0;
overt.gr = 0;

//////////////////////////////////


//////////////////////////////////
// Menu
var mtitle = new Image();
mtitle.src = "img/titlescreen.png";

var tisle = new Image();
tisle.src = "img/titlesle.png";

var menusle = new Object();
menusle.y = 375;

flag_up = 0;
flag_down = 0;
menu_flag = 0;
menu_bar = 0;
//////////////////////////////////
// Victory
var nene = new Image();
nene.src = "img/nene.jpg";

// Acquire time data and store in variable jikan.

var jikanflag = 0;

// Get HH:MM:SS

var hour_start = 0;
var minute_start = 0;
var second_start = 0;

var hour_end = 0;
var minute_end = 0;
var second_end = 0;
var score_min = 0;
var score_sec = 0;
var victory_time = 0;


// Date
var today = new Date();

//////////////////////////////////



//////////////////////////////////
// Ranking
var rankbox = new Object();
rankbox.x = 140;
rankbox.y = 130;
rankbox.size_x = 740;
rankbox.size_y = 470;

var players = document.cookie;

function getCookie(c_name){
    var st="";
    var ed="";
    if(document.cookie.length>0){
        // Retrieving cookie values
        st=document.cookie.indexOf(c_name + "=");
        if(st!=-1){
            st=st+c_name.length+1;
            ed=document.cookie.indexOf(";",st);
            if(ed==-1) ed=document.cookie.length;
            // Decode and return the value
            return decodeURIComponent(document.cookie.substring(st,ed));
        }
    }
    return "";
}
//////////////////////////////////




// Input

var furi = new Object();
furi.y = 200;
furi.x = 100;
furi.sex = furi.x-4;
furi.sey = furi.y-25;
furi.flagd = 0
furi.flagu = 0;
furi.flagr = 0;
furi.flagl = 0;
furi.sizex = 32;
furi.sizey = 32;

var namae = new Object();
namae.boxx = 560;
namae.boxy = 180;
namae.boxsize_x = 380;
namae.boxsize_y = 60;
namae.str ="";
namae.flag = 0;
namae.flag2 = 0;
namae.flag3 = 0;
namae.out ="";

var score_name = new Object();
score_name.x = 680;
score_name.y = 385;


// Create keyboard objects
var key = new Object();
key.up = false;
key.down = false;
key.right = false;
key.left = false;
key.push = '';
key.jump = false;
key.attack = false;

key.up2 = false;
key.down2 = false;
key.right2 = false;
key.left2 = false;
key.push2 = '';
key.jump2 = false;
key.attack2 = false;





/////////////////////////////////////////////////////////////////
// Sound

function attack_sound() {
	attack_s = new Audio();
	attack_s.src = "se/attack.mp3";
	attack_s.play();
}

function attack2_sound() {
	attack2_s = new Audio();
	attack2_s.src = "se/attack2.mp3";
	attack2_s.play();
	damage_s.volume = 0.5;
}

function damage_sound(){
	damage_s = new Audio();
	damage_s.src = "se/damage.mp3";
	damage_s.play();
	damage_s.volume = 0.2;
}

function hitan_sound(){
	hitan_s = new Audio();
	hitan_s.src = "se/dog.mp3";
	hitan_s.play();
	hitan_s.volume = 0.4;
}

function crash_sound(){
	crash_s = new Audio();
	crash_s.src = "se/crash.mp3";
	crash_s.play();
	crash_s.volume = 0.4;
}

function hp_sound(){
	hp_s = new Audio();
	hp_s.src = "se/hp.mp3";
	hp_s.play();
	hp_s.volume = 0.5;
}

function levelup_sound(){
	levelup_s = new Audio();
	levelup_s.src = "se/levelup.mp3";
	levelup_s.play();
	levelup_s.volume = 0.2;
}

function angel_sound(){
	angel_s = new Audio();
	angel_s.src = "se/angel.mp3";
	angel_s.play();
	angel_s.volume = 0.5;
}

function victory_sound(){
	victory_s = new Audio();
	victory_s.src = "se/victory.mp3";
	victory_s.play();
	victory_s.volume = 0.5;
}

function fail_sound(){
	fail_s = new Audio();
	fail_s.src = "bgm/fail.mp3";
	fail_s.play();
	fail_s.volume = 0.5;
}

function fire_sound(){
	fire_s = new Audio();
	fire_s.src = "se/fire.mp3";
	fire_s.play();
	fire_s.volume = 0.5;
}

function jump_sound(){
	jump_s = new Audio();
	jump_s.src = "se/jump.mp3";
	jump_s.play();
	jump_s.volume = 0.3;
}

function key1_sound(){
	key1_s = new Audio();
	key1_s.src = "se/key1.mp3";
	key1_s.play();
	key1_s.volume = 0.8;
}

function key2_sound(){
	key2_s = new Audio();
	key2_s.src = "se/key2.mp3";
	key2_s.play();
	key2_s.volume = 0.8;
}

function key3_sound(){
	key3_s = new Audio();
	key3_s.src = "se/key3.mp3";
	key3_s.play();
	key3_s.volume = 0.8;
}

function battle_sound(){
	battle_s = new Audio();
	battle_s.src = "bgm/battle.mp3";
	battle_s.play();
	battle_s.volume = 0.2;
}

function boss_sound(){
	boss_s = new Audio();
	boss_s.src = "bgm/boss.mp3";
	boss_s.play();
	boss_s.volume = 0.2;
}

function menu_sound(){
	menu_s = new Audio();
	menu_s.src = "bgm/menu.mp3";
	menu_s.play();
	menu_s.volume = 0.3;
}

var sound_flag = new Object();
var sound_time = new Object();


/////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////
// Pattern creation and drawing after image loading is finished
bg.onload = function(){
    var pattern = c.createPattern(bg, 'repeat');
    c.fillStyle = pattern;
    c.fillRect(0, 0, 1000, 800);
}



/////////////////////////////////////////////////////////////////


/*
var $container = $('#cont-canvas');
var renderer, camera, scene;
var object;
var contWidth = $(window).innerWidth();
var contHeight = $(window).innerHeight();

*/

function initThree() {
	// Setting Scene
	scene = new THREE.Scene();
  
	// Setting Renderer
	renderer = new THREE.CSS3DRenderer();
	renderer.setSize(contWidth, contHeight);
	$container.append(renderer.domElement);
  
	// Setting Camera
	camera = new THREE.PerspectiveCamera(45, contWidth/contHeight, 1, 10000);
	camera.position.set(0,0,500);
}


function initObject() {
	object = new THREE.CSS3DObject($('#cont-scene')[0]);
	scene.add(object);
}

function render() {
	renderer.render(scene, camera);
}

//initThree();  // 1.Three.js Initialize
//initObject(); // 2.Object Initialize
//render();




/////////////////////////////////////////////////////////////////
// Menu
function menu(){
	
	time.game = 10000;
	mounstercounter = 0;
	player.atk = 0;
	player2.atk = 0;
 	score_min = 0;
	score_sec = 0;
	victory_time = 0;
	namae.str ="";
	namae.flag3 = 0;
	fireflag = 0;
	furi.sex = 0;
	furi.sey = 0;


	player.x = 0;
	player.y = 0;
	player.die_x = 0;
	player.die_y = 0;
	player.die_flag = 0;
	heaven.a = 0;
	heaven.b = 0;

	player2.x = 0;
	player2.y = 0;
	player2.die_x = 0;
	player2.die_y = 0;
	player2.die_flag = 0;


	monster_a.x = 900;
	monster_a.y = 300;
	monster_a.life = 1;
	
	monster_b.x = 900;
	monster_b.y = 400;
	monster_b.life = 1;
	
	monster_c.x = 900;
	monster_c.y = 200;
	monster_c.life = 1;

	monster_d.x = 900;
	monster_d.y = 250;
	monster_d.life = 1;

	monster_e.x = 900;
	monster_e.y = 333;
	monster_e.life = 1;

	monster_f.x = 900;
	monster_f.y = 450;
	monster_f.life = 1;

	monster_g.x = 900;
	monster_g.y = 366;
	monster_g.life = 1;
	

	monster_h.x = 900;
	monster_h.y = 477;
	monster_h.life = 1;

	monster_i.x = 900;
	monster_i.y = 422;
	monster_i.life = 1;


	dra.x = 0;
	dra.y = 0;
	dra.life = 0;
	
	
	fire.x = -9999;
	fire.y = 300;
	fire.flag = 0;
	
	fire1.x = -9999;
	fire1.y = 300;
	fire1.flag = 0;
	
	fire2.x = -9999;
	fire2.y = 300;
	fire2.flag = 0;
	

	fire3.x = -9999;
	fire3.y = 300;
	fire3.flag = 0;
	
	
	fire4.x = -700;
	fire4.y = 300;
	fire4.flag = 0;
	
	

	damage.x = 0;
	damage.y = 0;


	hp.player = 152;
	hp.player2 = 152;
	hp.dragon = 200;
	hp.ia = 1;
	hp.ib = 1;
	hp.ic = 1;
	
	
	die.ax = 0;
	die.bx = 0;
	die.cx = 0;
	die.dx = 0;
	die.ex = 0;
	die.fx = 0;
	die.gx = 0;
	die.hx = 0;
	die.ix = 0;
	
	die.ay = 0;
	die.by = 0;
	die.cy = 0;
	die.dy = 0;
	die.ey = 0;
	die.fy = 0;
	die.gy = 0;
	die.hy = 0;
	die.iy = 0;


	time.bg = 0;
	time.bb = 0;
	time.md = 0;
	time.fire = 0;
	time.boss = 0;
	player.x = 0;
	player.y = 0;
	player2.x = 0;
	player2.y = 50;


	//////////////////////////
	gameover.time = 0;

	overt.g = 0;
	overt.a = 0;
	overt.m = 0;
	overt.e = 0;

	overt.go = 0;
	overt.gv = 0;
	overt.ge = 0;
	overt.gr = 0;
	//////////////////////////



	//////////////////////////
	// Box A

	hakoa.x = 900;
	hakoa.y = Math.random()*500;
	if(hakoa.y < 250){
		hakoa.y = 250
	}
	hakoa.life = 1;
	hakoa.timef = 0;
	hakoa.timec = Math.random()*500;
	hakoa.px = 0;
	hakoa.py = 0;
	hakoa.timeh = 0;
	hakoa.atx = 0;
	hakoa.aty = 0;


	// Box B

	hakob.x = 900;
	hakob.y = Math.random()*500;
	if(hakob.y < 250){
		hakob.y = 250
	}
	hakob.life = 1;
	hakob.timef = 0;
	hakob.timec = Math.random()*200;
	hakob.px = 0;
	hakob.py = 0;
	hakob.timeh = 0;
	hakob.atx = 0;
	hakob.aty = 0;


	//////////////////////////
	jikanflag = 1;

	//////////////////////////





	sound_flag.a = 0;
	sound_flag.b = 0;
	sound_flag.c = 0;
	sound_flag.d = 0;
	sound_flag.fire1 = 0;
	sound_flag.fire2 = 0;
	sound_flag.fire3 = 0;
	sound_flag.fire4 = 0;
	sound_flag.fire5 = 0;

	sound_flag.fi1 = 1;
	sound_flag.fi2 = 1;
	sound_flag.fi3 = 1;
	sound_flag.fi4 = 1;
	sound_flag.fi5 = 1;


	sound_flag.dra = 0;


	sound_time.a = 0;
	sound_time.b = 0;
	sound_time.c = 0;
	sound_time.d = 0;
	sound_time.fire1 = 0;
	sound_time.fire2 = 0;
	sound_time.fire3 = 0;
	sound_time.fire4 = 0;
	sound_time.fire5 = 0;


	sound_time.dra = 0;

	// Player2

	sound_flag.a2 = 0;
	sound_flag.b2 = 0;
	sound_flag.c2 = 0;
	sound_flag.d2 = 0;
	sound_flag.fire12 = 0;
	sound_flag.fire22 = 0;
	sound_flag.fire32 = 0;
	sound_flag.fire42 = 0;
	sound_flag.fire52 = 0;

	sound_flag.dra2 = 0;

	sound_time.a2 = 0;
	sound_time.b2 = 0;
	sound_time.c2 = 0;
	sound_time.d2 = 0;
	sound_time.fire12 = 0;
	sound_time.fire22 = 0;
	sound_time.fire32 = 0;
	sound_time.fire42 = 0;
	sound_time.fire52 = 0;

	sound_time.dra2 = 0;
	//////////////////////////








	ctx.drawImage(bg.img,0,0,1000,800,0,0,1000,800);
	ctx.drawImage(mtitle,0,0,720,340,270,20,504,238);
	//ctx.drawImage(tisle,0,0,500,400,370,350,300,240);

	ctx.font = "40px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText("1-PLAYER", 414, 403);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText("1-PLAYER", 414, 403); 

	ctx.font = "40px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText("2-PLAYER", 414, 463);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText("2-PLAYER", 414, 463); 

	ctx.font = "40px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText("RAKING", 434, 523);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText("RAKING", 434, 523); 



	ctx.beginPath();
    ctx.moveTo(370, menusle.y);
    ctx.lineTo(370, menusle.y+30);
	ctx.lineTo(390, menusle.y+15);
	ctx.fillStyle = "rgba(" + [0, 0, 0] + ")";
	ctx.fill();
	
	ctx.beginPath();
    ctx.moveTo(675, menusle.y);
    ctx.lineTo(675, menusle.y+30);
	ctx.lineTo(655, menusle.y+15);
	ctx.fillStyle = "rgba(" + [0, 0, 0] + ")";
	ctx.fill();

	ctx.beginPath();
	ctx.fillStyle = "rgba(" + [255, 255, 255, 0.5] + ")";
	ctx.fillRect(402, menusle.y-15, 240, 60);   


	addEventListener("keydown", keydownfunc, false);
	addEventListener("keyup", keyupfunc, false);

	if(menusle.y <=375){
		menusle.y = 375;
	}
	if(menusle.y >=495){
		menusle.y = 495;
	}

	if(key.down == true && (menusle.y == 375 || menusle.y == 435)){
		flag_down = 1;
		
	}
	if(flag_down == 1 && key.down == false){
		menusle.y +=60;
		flag_down = 0;
		key3_sound();
	}

	if(key.up == true && (menusle.y == 435 || menusle.y == 495)){
		flag_up = 1;
	}

	if(flag_up == 1 && key.up == false){
		menusle.y -=60;
		flag_up = 0;
		key3_sound();
	}

	if(key.attack == true && menusle.y == 375){
		if(jikanflag == 1){
			var jikans= new Date();
			hour_start = jikans.getHours();
			minute_start = jikans.getMinutes();
			second_start = jikans.getSeconds();
			jikanflag = 2;
		}

		canvas.addEventListener('load', main(), false);
		menu_s.pause();
		key2_sound();
		battle_sound();
		cancelAnimationFrame(menu);
	}
	else if(key.attack == true && menusle.y == 435){
		if(jikanflag == 1){
			var jikans= new Date();
			hour_start = jikans.getHours();
			minute_start = jikans.getMinutes();
			second_start = jikans.getSeconds();
			jikanflag = 2;
		}

		canvas.addEventListener('load', dual(), false);
		menu_s.pause();
		key2_sound();
		battle_sound();
		cancelAnimationFrame(menu);
	}
	else if(key.attack == true && menusle.y == 495){
		key2_sound();
		canvas.addEventListener('load', ranking(), false);
		cancelAnimationFrame(menu);
	}
	else{
		requestAnimationFrame(menu);
	}

}


/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
// Victory
function victory(){
	ctx.drawImage(bg.img,bg.x,0,1000,800,0,0,1000,800);
	ctx.drawImage(bg2,0,0,340,533,1000-time.bb,280,260,360);
	ctx.drawImage(nene,0,0,800,467,100,300,500,292);

	ctx.font = "96px arial black";
	ctx.fillStyle="rgb(255,255,255)";
	ctx.fillText("Victory", 340, 200);
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.strokeText("Victory", 340, 200); 




	ctx.drawImage( monsteria,0,0,256,256, 750, 300,90,90);
	ctx.font = "48px arial black";
	ctx.fillStyle="rgb(255,255,255)";
	ctx.fillText(mounstercounter, 840, 365);
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.strokeText(mounstercounter, 840, 365); 

	ctx.font = "48px arial black";
	ctx.fillStyle="rgb(255,255,255)";
	ctx.fillText("Time", 750, 455);
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.strokeText("Time", 750, 455); 

	ctx.font = "48px arial black";
	ctx.fillStyle="rgb(255,255,255)";
	ctx.fillText(score_min ,760, 505);
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.strokeText(score_min, 760, 505); 

	ctx.font = "48px arial black";
	ctx.fillStyle="rgb(255,255,255)";
	ctx.fillText("分" ,800, 505);
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.strokeText("分", 800, 505); 

	ctx.font = "48px arial black";
	ctx.fillStyle="rgb(255,255,255)";
	ctx.fillText(score_sec ,860, 505);
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.strokeText(score_sec, 860, 505); 

	ctx.font = "48px arial black";
	ctx.fillStyle="rgb(255,255,255)";
	ctx.fillText("秒" ,930, 505);
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.strokeText("秒" , 930, 505); 

	victory_time++;
	if(victory_time < 400){
		requestAnimationFrame(victory);
	}
	else{
		cancelAnimationFrame(victory);
		canvas.addEventListener('load', name(), false);

	}
}
/////////////////////////////////////////////////////////////////
// Input Name
function name(){
	ctx.drawImage(bg.img,0,0,1000,800,0,0,1000,800);
	ctx.fillStyle = "rgba(" + [255, 255, 255, 0.5] + ")";
	ctx.fillRect(furi.x-20,furi.y-40,370,400);
	ctx.strokeRect(furi.x-20,furi.y-40,370,400);
	ctx.font = "24px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText("あ い う え お", furi.x, furi.y);
	ctx.fillText("か き く け こ", furi.x, furi.y+30);
	ctx.fillText("さ し す せ そ", furi.x, furi.y+60);
	ctx.fillText("た ち つ て と", furi.x, furi.y+90);
	ctx.fillText("な に ぬ ね の", furi.x, furi.y+120);
	ctx.fillText("は ひ ふ へ ほ", furi.x, furi.y+150);
	ctx.fillText("ま み む め も", furi.x, furi.y+180);
	ctx.fillText("ら り る れ ろ", furi.x, furi.y+210);
	ctx.fillText("や ゆ よ わ を", furi.x, furi.y+240);
	ctx.fillText("ん ゃ ゅ ょ っ", furi.x, furi.y+270);

	ctx.fillText("が ぎ ぐ げ ご", furi.x+170, furi.y);
	ctx.fillText("ざ じ ず ぜ ぞ", furi.x+170, furi.y+30);
	ctx.fillText("だ ぢ づ で ど", furi.x+170, furi.y+60);
	ctx.fillText("ば び ぶ べ ぼ", furi.x+170, furi.y+90);
	ctx.fillText("ぱ ぴ ぷ ぺ ぽ", furi.x+170, furi.y+120);
	ctx.font = "28px arial ";
	ctx.fillText("A", furi.x+170, furi.y+150);
	ctx.fillText("B", furi.x+203, furi.y+150);
	ctx.fillText("C", furi.x+235, furi.y+150);
	ctx.fillText("D", furi.x+267, furi.y+150);
	ctx.fillText("E", furi.x+300, furi.y+150);

	ctx.fillText("F", furi.x+170, furi.y+180);
	ctx.fillText("G", furi.x+201, furi.y+180);
	ctx.fillText("H", furi.x+236, furi.y+180);
	ctx.fillText("I", furi.x+273, furi.y+180);
	ctx.fillText("J", furi.x+302, furi.y+180);

	ctx.fillText("K", furi.x+170, furi.y+210);
	ctx.fillText("L", furi.x+205, furi.y+210);
	ctx.fillText("M", furi.x+235, furi.y+210);
	ctx.fillText("N", furi.x+267, furi.y+210);
	ctx.fillText("O", furi.x+298, furi.y+210);

	ctx.fillText("P", furi.x+170, furi.y+240);
	ctx.fillText("Q", furi.x+203, furi.y+240);
	ctx.fillText("R", furi.x+235, furi.y+240);
	ctx.fillText("S", furi.x+267, furi.y+240);
	ctx.fillText("T", furi.x+300, furi.y+240);

	ctx.fillText("U", furi.x+170, furi.y+270);
	ctx.fillText("V", furi.x+203, furi.y+270);
	ctx.fillText("W", furi.x+232, furi.y+270);
	ctx.fillText("X", furi.x+267, furi.y+270);
	ctx.fillText("Y", furi.x+300, furi.y+270);

	ctx.fillText("Z", furi.x+300, furi.y+300);


	ctx.fillText("1", furi.x+2, furi.y+300);
	ctx.fillText("2", furi.x+34, furi.y+300);
	ctx.fillText("3", furi.x+67, furi.y+300);
	ctx.fillText("4", furi.x+99, furi.y+300);
	ctx.fillText("5", furi.x+131, furi.y+300);

	ctx.fillText("6", furi.x+171, furi.y+300);
	ctx.fillText("7", furi.x+205, furi.y+300);
	ctx.fillText("8", furi.x+236, furi.y+300);
	ctx.fillText("9", furi.x+268, furi.y+300);
	ctx.fillText("0", furi.x+3, furi.y+330);

	ctx.font = "30px arial black";
	ctx.fillText("消し", furi.x+168, furi.y+340);
	ctx.fillText("送信", furi.x+258, furi.y+340);


	addEventListener("keydown", keydownfunc, false);
	addEventListener("keyup", keyupfunc, false);


	if(furi.sey >furi.y+276 && furi.sex <furi.x +130){		//最下行
		furi.sey = furi.y+306;
		furi.sex = furi.x-4;
	}
	if(furi.sey >furi.y+276 && furi.sex >furi.x +130 ){		//最下行
		if( furi.sex <furi.x +220){
			furi.sey = furi.y+310;
			furi.sex = furi.x+160;
		}
		else{
			furi.sey = furi.y+310;
			furi.sex = furi.x+252;
		}
		furi.sizex = 75;
		furi.sizey = 40;
	}
	else{
		furi.sizex = 32;
		furi.sizey = 32;
	}
	if(furi.sey <175){
		furi.sey = 175;
	}

	if(furi.sex <furi.x-4 && furi.sey <=furi.y+275){
		furi.sex = furi.x-4;
	}
	if(furi.sex >furi.x+294 && furi.sey <=furi.y+275){
		furi.sex = furi.x+294;
	}

	///////////////////////////////////////////
	//↓
	if(key.down == true && furi.sey < furi.y+300 && furi.flagd == 0){
		furi.flagd = 1;
	}
	if(furi.flagd == 1 && key.down == false){
		furi.flagd  = 0;
		if(furi.sey == furi.y+276 && furi.sex <furi.x+125){
			furi.sex = furi.x - 4;
			furi.sey = furi.y + 306;
			key3_sound();
		}
		else{
			furi.sey +=30;
			key3_sound();
		}

	}
	
	///////////////////////////////////////////
	//↑
	if(key.up == true && furi.sey > furi.y-10 &&  furi.flagu== 0){
		furi.flagu = 1;
	}
	if(furi.flagu == 1 && key.up == false){
		furi.flagu  = 0;
		if(furi.sex == furi.x+160 && furi.sey == furi.y+310){
			furi.sey -=35;
			furi.sex +=6;
			key3_sound();
		}
		else if(furi.sex == furi.x+252 && furi.sey == furi.y+310){
			furi.sex +=10;
			furi.sey -=35;
			key3_sound();
		}
		else{
			furi.sey -=30;
			key3_sound();
		}

	}

	///////////////////////////////////////////
	//->
	if(key.right == true && furi.sex < furi.x+294 && furi.flagr == 0 && !(furi.sex==furi.x+252 && furi.sey== furi.y + 310)){
		furi.flagr = 1;
	}
	if(furi.flagr == 1 && key.right == false && furi.sex!=furi.x+124 &&!(furi.sex==furi.x+160 && furi.sey== furi.y + 310)
		&& !(furi.sex == furi.x-4 && furi.sey == furi.y + 306)){
		furi.flagr  = 0;
		furi.sex +=32;
		key3_sound();
	}

	if(furi.flagr == 1 && key.right == false && furi.sex==furi.x+124){
		furi.flagr  = 0;
		furi.sex +=42;
		key3_sound();
	}

	if(furi.flagr == 1 && key.right == false && furi.sex==furi.x+160 && furi.sey== furi.y + 310){
		furi.flagr  = 0;
		furi.sex +=92;
		key3_sound();
	}
	if(furi.flagr == 1 && key.right == false && furi.sex==furi.x-4 && furi.sey== furi.y + 306){
		furi.flagr  = 0;
		furi.sex +=164;
		furi.sey +=4;
		key3_sound();
	}
	///////////////////////////////////////////
	//<-
	if(key.left == true && furi.sex > furi.x-4 && furi.flagl == 0){
		furi.flagl = 1;
	}
	if(furi.flagl == 1 && key.left == false && furi.sex!=furi.x+166 &&!(furi.sex==furi.x+252 && furi.sey== furi.y + 310)){
		furi.flagl  = 0;
		furi.sex -=32;
		key3_sound();
	}
	if(furi.flagl == 1 && key.left == false && furi.sex==furi.x+166){
		furi.flagl  = 0;
		furi.sex -=42;
		key3_sound();
	}

	if(furi.flagl == 1 && key.left == false &&furi.sex==furi.x+252 && furi.sey== furi.y + 310){
		furi.flagl  = 0;
		furi.sex -=108;
		key3_sound();
	}
	///////////////////////////////////////////
	ctx.beginPath();
	ctx.fillStyle = "rgba(" + [135, 255, 191, 0.5] + ")";
	ctx.fillRect(furi.sex, furi.sey, furi.sizex, furi.sizey);   




	ctx.drawImage( monsteria,0,0,256,256, score_name.x-100, score_name.y-65,90,90);
	ctx.font = "48px arial black";
	ctx.fillStyle="rgb(255,255,255)";
	ctx.fillText(mounstercounter, score_name.x, score_name.y);
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.strokeText(mounstercounter, score_name.x, score_name.y); 

	ctx.font = "48px arial black";
	ctx.fillStyle="rgb(255,255,255)";
	ctx.fillText("Time", score_name.x-90, score_name.y+80);
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.strokeText("Time", score_name.x-90, score_name.y+80); 

	ctx.font = "48px arial black";
	ctx.fillStyle="rgb(255,255,255)";
	ctx.fillText(score_min ,score_name.x-80, score_name.y+140);
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.strokeText(score_min, score_name.x-80, score_name.y+140); 

	ctx.font = "48px arial black";
	ctx.fillStyle="rgb(255,255,255)";
	ctx.fillText("分" ,score_name.x-40, score_name.y+140);
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.strokeText("分", score_name.x-40, score_name.y+140); 

	ctx.font = "48px arial black";
	ctx.fillStyle="rgb(255,255,255)";
	ctx.fillText(score_sec ,score_name.x+20, score_name.y+140);
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.strokeText(score_sec, score_name.x+20, score_name.y+140); 

	ctx.font = "48px arial black";
	ctx.fillStyle="rgb(255,255,255)";
	ctx.fillText("秒" ,score_name.x+90, score_name.y+140);
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.strokeText("秒" , score_name.x+90, score_name.y+140); 


	///////////////////////////////////////////



	// Push Input 

	if(key.attack == true && namae.flag == 0 && !(furi.sex == furi.x+160 && furi.sey == furi.y +310)  && namae.str.length  < 7){
		namae.flag = 1;
	}
	if( key.attack == false && namae.flag == 1){
		if(furi.sex == furi.x-4 && furi.sey == furi.y -25){
			namae.flag = 0;
			namae.str +="あ";
			key1_sound();
		}
		if(furi.sex == furi.x+28 && furi.sey == furi.y -25){
			namae.flag = 0;
			namae.str +="い";
			key1_sound();
		}
		if(furi.sex == furi.x+60 && furi.sey == furi.y -25){
			namae.flag = 0;
			namae.str +="う";
			key1_sound();
		}
		if(furi.sex == furi.x+92 && furi.sey == furi.y -25){
			namae.flag = 0;
			namae.str +="え";
			key1_sound();
		}
		if(furi.sex == furi.x+124 && furi.sey == furi.y -25){
			namae.flag = 0;
			namae.str +="お";
			key1_sound();
		}
		if(furi.sex == furi.x-4 && furi.sey == furi.y +5){
			namae.flag = 0;
			namae.str +="か";
			key1_sound();
		}
		if(furi.sex == furi.x+28 && furi.sey == furi.y +5){
			namae.flag = 0;
			namae.str +="き";
			key1_sound();
		}
		if(furi.sex == furi.x+60 && furi.sey == furi.y +5){
			namae.flag = 0;
			namae.str +="く";
			key1_sound();
		}
		if(furi.sex == furi.x+92 && furi.sey == furi.y +5){
			namae.flag = 0;
			namae.str +="け";
			key1_sound();
		}
		if(furi.sex == furi.x+124 && furi.sey == furi.y +5){
			namae.flag = 0;
			namae.str +="こ";
			key1_sound();
		}
		if(furi.sex == furi.x-4 && furi.sey == furi.y +35){
			namae.flag = 0;
			namae.str +="さ";
			key1_sound();
		}
		if(furi.sex == furi.x+28 && furi.sey == furi.y +35){
			namae.flag = 0;
			namae.str +="し";
			key1_sound();
		}
		if(furi.sex == furi.x+60 && furi.sey == furi.y +35){
			namae.flag = 0;
			namae.str +="す";
			key1_sound();
		}
		if(furi.sex == furi.x+92 && furi.sey == furi.y +35){
			namae.flag = 0;
			namae.str +="せ";
			key1_sound();
		}
		if(furi.sex == furi.x+124 && furi.sey == furi.y +35){
			namae.flag = 0;
			namae.str +="そ";
			key1_sound();
		}
		if(furi.sex == furi.x-4 && furi.sey == furi.y +65){
			namae.flag = 0;
			namae.str +="た";
			key1_sound();
		}
		if(furi.sex == furi.x+28 && furi.sey == furi.y +65){
			namae.flag = 0;
			namae.str +="ち";
			key1_sound();
		}
		if(furi.sex == furi.x+60 && furi.sey == furi.y +65){
			namae.flag = 0;
			namae.str +="つ";
			key1_sound();
		}
		if(furi.sex == furi.x+92 && furi.sey == furi.y +65){
			namae.flag = 0;
			namae.str +="て";
			key1_sound();
		}
		if(furi.sex == furi.x+124 && furi.sey == furi.y +65){
			namae.flag = 0;
			namae.str +="と";
			key1_sound();
		}
		if(furi.sex == furi.x-4 && furi.sey == furi.y +95){
			namae.flag = 0;
			namae.str +="な";
			key1_sound();
		}
		if(furi.sex == furi.x+28 && furi.sey == furi.y +95){
			namae.flag = 0;
			namae.str +="に";
			key1_sound();
		}
		if(furi.sex == furi.x+60 && furi.sey == furi.y +95){
			namae.flag = 0;
			namae.str +="ぬ";
			key1_sound();
		}
		if(furi.sex == furi.x+92 && furi.sey == furi.y +95){
			namae.flag = 0;
			namae.str +="ね";
			key1_sound();
		}
		if(furi.sex == furi.x+124 && furi.sey == furi.y +95){
			namae.flag = 0;
			namae.str +="の";
			key1_sound();
		}
		if(furi.sex == furi.x-4 && furi.sey == furi.y +125){
			namae.flag = 0;
			namae.str +="は";
			key1_sound();
		}
		if(furi.sex == furi.x+28 && furi.sey == furi.y +125){
			namae.flag = 0;
			namae.str +="ひ";
			key1_sound();
		}
		if(furi.sex == furi.x+60 && furi.sey == furi.y +125){
			namae.flag = 0;
			namae.str +="ふ";
			key1_sound();
		}
		if(furi.sex == furi.x+92 && furi.sey == furi.y +125){
			namae.flag = 0;
			namae.str +="へ";
			key1_sound();
		}
		if(furi.sex == furi.x+124 && furi.sey == furi.y +125){
			namae.flag = 0;
			namae.str +="ほ";
			key1_sound();
		}
		if(furi.sex == furi.x-4 && furi.sey == furi.y +155){
			namae.flag = 0;
			namae.str +="ま";
			key1_sound();
		}
		if(furi.sex == furi.x+28 && furi.sey == furi.y +155){
			namae.flag = 0;
			namae.str +="み";
			key1_sound();
		}
		if(furi.sex == furi.x+60 && furi.sey == furi.y +155){
			namae.flag = 0;
			namae.str +="む";
			key1_sound();
		}
		if(furi.sex == furi.x+92 && furi.sey == furi.y +155){
			namae.flag = 0;
			namae.str +="め";
			key1_sound();
		}
		if(furi.sex == furi.x+124 && furi.sey == furi.y +155){
			namae.flag = 0;
			namae.str +="も";
			key1_sound();
		}
		if(furi.sex == furi.x-4 && furi.sey == furi.y +185){
			namae.flag = 0;
			namae.str +="ら";
			key1_sound();
		}
		if(furi.sex == furi.x+28 && furi.sey == furi.y +185){
			namae.flag = 0;
			namae.str +="り";
			key1_sound();
		}
		if(furi.sex == furi.x+60 && furi.sey == furi.y +185){
			namae.flag = 0;
			namae.str +="る";
			key1_sound();
		}
		if(furi.sex == furi.x+92 && furi.sey == furi.y +185){
			namae.flag = 0;
			namae.str +="れ";
			key1_sound();
		}
		if(furi.sex == furi.x+124 && furi.sey == furi.y +185){
			namae.flag = 0;
			namae.str +="ろ";
			key1_sound();
		}
		if(furi.sex == furi.x-4 && furi.sey == furi.y +215){
			namae.flag = 0;
			namae.str +="や";
			key1_sound();
		}
		if(furi.sex == furi.x+28 && furi.sey == furi.y +215){
			namae.flag = 0;
			namae.str +="ゆ";
			key1_sound();
		}
		if(furi.sex == furi.x+60 && furi.sey == furi.y +215){
			namae.flag = 0;
			namae.str +="よ";
			key1_sound();
		}
		if(furi.sex == furi.x+92 && furi.sey == furi.y +215){
			namae.flag = 0;
			namae.str +="わ";
			key1_sound();
		}
		if(furi.sex == furi.x+124 && furi.sey == furi.y +215){
			namae.flag = 0;
			namae.str +="を";
			key1_sound();
		}
		if(furi.sex == furi.x-4 && furi.sey == furi.y +245){
			namae.flag = 0;
			namae.str +="ん";
			key1_sound();
		}
		if(furi.sex == furi.x+28 && furi.sey == furi.y +245){
			namae.flag = 0;
			namae.str +="ゃ";
			key1_sound();
		}
		if(furi.sex == furi.x+60 && furi.sey == furi.y +245){
			namae.flag = 0;
			namae.str +="ゅ";
			key1_sound();
		}
		if(furi.sex == furi.x+92 && furi.sey == furi.y +245){
			namae.flag = 0;
			namae.str +="ょ";
			key1_sound();
		}
		if(furi.sex == furi.x+124 && furi.sey == furi.y +245){
			namae.flag = 0;
			namae.str +="っ";
			key1_sound();
		}
		if(furi.sex == furi.x+166 && furi.sey == furi.y -25){
			namae.flag = 0;
			namae.str +="が";
			key1_sound();
		}
		if(furi.sex == furi.x+198 && furi.sey == furi.y -25){
			namae.flag = 0;
			namae.str +="ぎ";
			key1_sound();
		}
		if(furi.sex == furi.x+230 && furi.sey == furi.y -25){
			namae.flag = 0;
			namae.str +="ぐ";
			key1_sound();
		}
		if(furi.sex == furi.x+262 && furi.sey == furi.y -25){
			namae.flag = 0;
			namae.str +="げ";
			key1_sound();
		}
		if(furi.sex == furi.x+294 && furi.sey == furi.y -25){
			namae.flag = 0;
			namae.str +="ご";
			key1_sound();
		}
		if(furi.sex == furi.x+166 && furi.sey == furi.y +5){
			namae.flag = 0;
			namae.str +="ざ";
			key1_sound();
		}
		if(furi.sex == furi.x+198 && furi.sey == furi.y +5){
			namae.flag = 0;
			namae.str +="じ";
			key1_sound();
		}
		if(furi.sex == furi.x+230 && furi.sey == furi.y +5){
			namae.flag = 0;
			namae.str +="ず";
			key1_sound();
		}
		if(furi.sex == furi.x+262 && furi.sey == furi.y +5){
			namae.flag = 0;
			namae.str +="ぜ";
			key1_sound();
		}
		if(furi.sex == furi.x+294 && furi.sey == furi.y +5){
			namae.flag = 0;
			namae.str +="ぞ";
			key1_sound();
		}
		if(furi.sex == furi.x+166 && furi.sey == furi.y +35){
			namae.flag = 0;
			namae.str +="だ";
			key1_sound();
		}
		if(furi.sex == furi.x+198 && furi.sey == furi.y +35){
			namae.flag = 0;
			namae.str +="ぢ";
			key1_sound();
		}
		if(furi.sex == furi.x+230 && furi.sey == furi.y +35){
			namae.flag = 0;
			namae.str +="づ";
			key1_sound();
		}
		if(furi.sex == furi.x+262 && furi.sey == furi.y +35){
			namae.flag = 0;
			namae.str +="で";
			key1_sound();
		}
		if(furi.sex == furi.x+294 && furi.sey == furi.y +35){
			namae.flag = 0;
			namae.str +="ど";
			key1_sound();
		}
		if(furi.sex == furi.x+166 && furi.sey == furi.y +65){
			namae.flag = 0;
			namae.str +="ば";
			key1_sound();
		}
		if(furi.sex == furi.x+198 && furi.sey == furi.y +65){
			namae.flag = 0;
			namae.str +="び";
			key1_sound();
		}
		if(furi.sex == furi.x+230 && furi.sey == furi.y +65){
			namae.flag = 0;
			namae.str +="ぶ";
			key1_sound();
		}
		if(furi.sex == furi.x+262 && furi.sey == furi.y +65){
			namae.flag = 0;
			namae.str +="べ";
			key1_sound();
		}
		if(furi.sex == furi.x+294 && furi.sey == furi.y +65){
			namae.flag = 0;
			namae.str +="ぼ";
			key1_sound();
		}
		if(furi.sex == furi.x+166 && furi.sey == furi.y +95){
			namae.flag = 0;
			namae.str +="ぱ";
			key1_sound();
		}
		if(furi.sex == furi.x+198 && furi.sey == furi.y +95){
			namae.flag = 0;
			namae.str +="ぴ";
			key1_sound();
		}
		if(furi.sex == furi.x+230 && furi.sey == furi.y +95){
			namae.flag = 0;
			namae.str +="ぷ";
			key1_sound();
		}
		if(furi.sex == furi.x+262 && furi.sey == furi.y +95){
			namae.flag = 0;
			namae.str +="ぺ";
			key1_sound();
		}
		if(furi.sex == furi.x+294 && furi.sey == furi.y +95){
			namae.flag = 0;
			namae.str +="ぽ";
			key1_sound();
		}
		if(furi.sex == furi.x+166 && furi.sey == furi.y +125){
			namae.flag = 0;
			namae.str +="A";
			key1_sound();
		}
		if(furi.sex == furi.x+198 && furi.sey == furi.y +125){
			namae.flag = 0;
			namae.str +="B";
			key1_sound();
		}
		if(furi.sex == furi.x+230 && furi.sey == furi.y +125){
			namae.flag = 0;
			namae.str +="C";
			key1_sound();
		}
		if(furi.sex == furi.x+262 && furi.sey == furi.y +125){
			namae.flag = 0;
			namae.str +="D";
			key1_sound();
		}
		if(furi.sex == furi.x+294 && furi.sey == furi.y +125){
			namae.flag = 0;
			namae.str +="E";
			key1_sound();
		}
		if(furi.sex == furi.x+166 && furi.sey == furi.y +155){
			namae.flag = 0;
			namae.str +="F";
			key1_sound();
		}
		if(furi.sex == furi.x+198 && furi.sey == furi.y +155){
			namae.flag = 0;
			namae.str +="G";
			key1_sound();
		}
		if(furi.sex == furi.x+230 && furi.sey == furi.y +155){
			namae.flag = 0;
			namae.str +="H";
			key1_sound();
		}
		if(furi.sex == furi.x+262 && furi.sey == furi.y +155){
			namae.flag = 0;
			namae.str +="I";
			key1_sound();
		}
		if(furi.sex == furi.x+294 && furi.sey == furi.y +155){
			namae.flag = 0;
			namae.str +="J";
			key1_sound();
		}
		if(furi.sex == furi.x+166 && furi.sey == furi.y +185){
			namae.flag = 0;
			namae.str +="K";
			key1_sound();
		}
		if(furi.sex == furi.x+198 && furi.sey == furi.y +185){
			namae.flag = 0;
			namae.str +="L";
			key1_sound();
		}
		if(furi.sex == furi.x+230 && furi.sey == furi.y +185){
			namae.flag = 0;
			namae.str +="M";
			key1_sound();
		}
		if(furi.sex == furi.x+262 && furi.sey == furi.y +185){
			namae.flag = 0;
			namae.str +="N";
			key1_sound();
		}
		if(furi.sex == furi.x+294 && furi.sey == furi.y +185){
			namae.flag = 0;
			namae.str +="O";
			key1_sound();
		}
		if(furi.sex == furi.x+166 && furi.sey == furi.y +215){
			namae.flag = 0;
			namae.str +="P";
			key1_sound();
		}
		if(furi.sex == furi.x+198 && furi.sey == furi.y +215){
			namae.flag = 0;
			namae.str +="Q";
			key1_sound();
		}
		if(furi.sex == furi.x+230 && furi.sey == furi.y +215){
			namae.flag = 0;
			namae.str +="R";
			key1_sound();
		}
		if(furi.sex == furi.x+262 && furi.sey == furi.y +215){
			namae.flag = 0;
			namae.str +="S";
			key1_sound();
		}
		if(furi.sex == furi.x+294 && furi.sey == furi.y +215){
			namae.flag = 0;
			namae.str +="T";
			key1_sound();
		}
		if(furi.sex == furi.x+166 && furi.sey == furi.y +245){
			namae.flag = 0;
			namae.str +="U";
			key1_sound();
		}
		if(furi.sex == furi.x+198 && furi.sey == furi.y +245){
			namae.flag = 0;
			namae.str +="V";
			key1_sound();
		}
		if(furi.sex == furi.x+230 && furi.sey == furi.y +245){
			namae.flag = 0;
			namae.str +="W";
			key1_sound();
		}
		if(furi.sex == furi.x+262 && furi.sey == furi.y +245){
			namae.flag = 0;
			namae.str +="X";
			key1_sound();
		}
		if(furi.sex == furi.x+294 && furi.sey == furi.y +245){
			namae.flag = 0;
			namae.str +="Y";
			key1_sound();
		}
		if(furi.sex == furi.x+294 && furi.sey == furi.y +275){
			namae.flag = 0;
			namae.str +="Z";
			key1_sound();
		}
		if(furi.sex == furi.x-4 && furi.sey == furi.y +275){
			namae.flag = 0;
			namae.str +="1";
			key1_sound();
		}
		if(furi.sex == furi.x+28 && furi.sey == furi.y +275){
			namae.flag = 0;
			namae.str +="2";
			key1_sound();
		}
		if(furi.sex == furi.x+60 && furi.sey == furi.y +275){
			namae.flag = 0;
			namae.str +="3";
			key1_sound();
		}
		if(furi.sex == furi.x+92 && furi.sey == furi.y +275){
			namae.flag = 0;
			namae.str +="4";
			key1_sound();
		}
		if(furi.sex == furi.x+124 && furi.sey == furi.y +275){
			namae.flag = 0;
			namae.str +="5";
			key1_sound();
		}
		if(furi.sex == furi.x+166 && furi.sey == furi.y +275){
			namae.flag = 0;
			namae.str +="6";
			key1_sound();
		}
		if(furi.sex == furi.x+198 && furi.sey == furi.y +275){
			namae.flag = 0;
			namae.str +="7";
			key1_sound();
		}
		if(furi.sex == furi.x+230 && furi.sey == furi.y +275){
			namae.flag = 0;
			namae.str +="8";
			key1_sound();
		}
		if(furi.sex == furi.x+262 && furi.sey == furi.y +275){
			namae.flag = 0;
			namae.str +="9";
			key1_sound();
		}
		if(furi.sex == furi.x-4 && furi.sey == furi.y +306){
			namae.flag = 0;
			namae.str +="0";
			key1_sound();
		}
	
	
	}


	//消し

	if(key.attack == true && namae.flag2 == 0 && furi.sex == furi.x+160 && furi.sey == furi.y +310){
		namae.flag2 = 1;
	}

	if( key.attack == false && namae.flag2 == 1){
		if(furi.sex == furi.x+160 && furi.sey == furi.y +310){
			namae.flag2 = 0;
			namae.str = namae.str.slice(0,-1);
			key1_sound();
		}
	}

	// Determination
	if(key.attack == true && namae.flag3 == 0 && furi.sex == furi.x+252 && furi.sey == furi.y +310){
		namae.flag3 = 1;
		key2_sound();
	}



	if( key.attack == false && namae.flag3 == 1){
		
		if(namae.str.length != 0){
			namae.flag3 = 2;
			document.cookie = "input_name="+ namae.str; "max-age=100";
			document.cookie = "input_score="+ mounstercounter; "max-age=100";
	
	
			document.cookie = "input_time= 00:0"+ score_min +":"+score_sec; "max-age=100";
			document.cookie = "input_date="+ today.getFullYear()+"-"+(today.getMonth()+1) +"-" +today.getDate(); "max-age=100";
			
			location.href = "update.php";
		}
		else{
			cancelAnimationFrame(name);
			menu_sound();
			canvas.addEventListener('load', menu(), false);
		}

	}
	else{
		requestAnimationFrame(name);
	}



	// Passing the Score
	

	ctx.strokeRect(namae.boxx,namae.boxy,namae.boxsize_x,namae.boxsize_y);
	ctx.fillStyle = "rgba(" + [0, 0, 0, 0.5] + ")";
	ctx.fillRect(namae.boxx, namae.boxy, namae.boxsize_x,namae.boxsize_y);
	ctx.fillStyle="rgb(255,255,255)";
	ctx.font = "36px arial white";
	ctx.fillText(namae.str, namae.boxx+10, namae.boxy+42);



	//////
	/*ctx.fillStyle = "rgba(" + [0, 0, 0, 0.5] + ")";
	ctx.fillText(furi.sex, 700, 300);
	ctx.fillText(furi.sey, 700, 400);
	ctx.fillText(namae.flag , 700, 500);
	ctx.fillText(namae.flag2 , 700, 600);

	ctx.fillText(furi.sex - furi.x , 800, 500);
	ctx.fillText(furi.sey - furi.y , 800, 600);
	if(namae.flag3 == 2){
		ctx.fillStyle="rgb(0,0,0)";
		ctx.fillText("OK" , 500, 100);
	}
	//ctx.fillText(window.sessionStorage.getItem(['name']) , 600, 100);*/
	//////
	
}

/////////////////////////////////////////////////////////////////
// Main Loop
function main() {
    //Specify the colour to be painted
	/*ctx.fillStyle = 'rgb( 255 ,255 ,255 )';
	// Painted
	ctx.fillRect(0, 0, 600, 300);*/


	if(key.attack == false){
		atk.mona = 0;
		atk.monb = 0;
		atk.monc = 0;
		atk.mond = 0;
		atk.dra = 0;
		atk.hakoa = 0;
		atk.hakob = 0;
	}

	if(time.bg<time.game){
		time.bg +=time.pace;
		ctx.drawImage(bg.img,bg.x,0,1000,800,0,0,1000,800);
		bg.x += time.pace;
		if(bg.x >999){
			bg.x = 0;
		}


		// Move Range
		if(player.y <75){
			player.y = 75;
		}

		if(player.y >430){
			player.y = 430;
		}

		if(player.x < 0){
			player.x = 0;
		}
		if(player.x > 900){
			player.x = 900;
		}



		if(monster_a.y <130){
			monster_a.y = 130;
		}
		if(monster_b.y <130){
			monster_b.y = 130;
		}
		if(monster_c.y <130){
			monster_c.y = 130;
		}
		if(monster_d.y <130){
			monster_d.y = 130;
		}
		if(monster_e.y <130){
			monster_e.y = 130;
		}
		if(monster_f.y <130){
			monster_f.y = 130;
		}
		if(monster_g.y <130){
			monster_g.y = 130;
		}
		if(monster_h.y <130){
			monster_h.y = 130;
		}
		if(monster_i.y <130){
			monster_i.y = 130;
		}

	}
	else{
		ctx.drawImage(bg.img,bg.x,0,1000,800,0,0,1000,800);
	
	}
	if(time.bg>time.game-500){

		// Move Range


		if(time.bg <time.game+1){
			if(time.md <800){
				if(player.x > 1150-time.md ){
					player.x = 1150-time.md;
				}
			}

		}
		if(player.x>925-time.bb && player.x <1225-time.bb){
			if(player.y <220){
				player.y = 220;
			}
			if(player.y >360){
				player.y = 360;
			}
		}
		if(player.y <75){
			player.y = 75;
		}

		if(player.y >430){
			player.y = 430;
		}

		if(player.x < 0){
			player.x = 0;
		}
		if(player.x > 900){
			player.x = 900;
		}
		
		if(time.bb < 500){
			time.bb+=2;
		}
		if(player.x > 1200-time.bb){
			player.x = 1200-time.bb;
		}


		ctx.drawImage(bg2,0,0,340,533,1000-time.bb,280,260,360);
		
	}


////////////////////////////////////


////////////////////////////////////




	////////////////////////////////////
	// Boss

	if( time.bg > time.game-450 && time.bg <time.game+1 && time.md <800){
		if(time.md <800){
			time.md++;	
		}
		if(time.md%20<10){
			ctx.drawImage(dragon,0,600,820,600,1400-time.md,200,570,380);
		}
		else{
			ctx.drawImage(dragon,820,600,820,600,1400-time.md,200,570,380);
		}
		if(time.md == 1){
			battle_s.pause();
			boss_sound();
		}
	}

	if(time.md == 800){
		time.fire++;


		if(time.fire % 400 < 320){
			ctx.drawImage(dragon,0,0,820,600,1400-time.md,200,570,380);				//攻撃

			if(time.fire % 400 < 80){
				fire.flag=1;
			}
			else if(time.fire % 400 < 160){
				fire1.flag=1;
			}
			else if(time.fire % 400 < 240){
				fire2.flag=1;
			}
			else {
				fire3.flag=1;
				fire4.flag=1;
			}

			
		}
		else{
			ctx.drawImage(dragon,0,600,820,600,1400-time.md,200,570,380);
			dra.x = 1400-time.md;
			dra.y = 200;
		}



		//////////////////////////////////////
		// Fire Ball

		if(fire.flag == 1){															//攻撃

			if(fire.x <= 0){
				fire.x = 1400-time.md;
			}
			if(sound_flag.fi1 ==1){
				fire_sound();
				sound_flag.fi1 = 0;
			}

			y1 = 0;


			fire.y +=y1;
			fire.x -=2;
			if(fire.x>0){
				ctx.drawImage(fireimg,0,0,103,139,fire.x,fire.y,63,82);
			}
			else{
				fire.flag = 0;
				fire.y = 300;
				sound_flag.fi1 =1;
			}
			
		}



		if(fire1.flag == 1){															//攻撃

			if(fire1.x <= 0){
				fire1.x = 1400-time.md;
			}
			if(sound_flag.fi2 ==1){
				fire_sound();
				sound_flag.fi2 = 0;
			}

			y2 = 1;

			fire1.y +=y2;
			fire1.x -=2;
			if(fire1.x>0){
				ctx.drawImage(fireimg,0,0,103,139,fire1.x,fire1.y,63,82);
			}
			else{
				fire1.flag = 0;
				fire1.y = 300;
				sound_flag.fi2 =1;
			}
			
		}
		if(fire2.flag == 1){															//攻撃

			if(fire2.x <= 0){
				fire2.x = 1400-time.md;
			}

			if(sound_flag.fi3 ==1){
				fire_sound();
				sound_flag.fi3 = 0;
			}

			y3 = 2;

			fire2.y +=y3;
			fire2.x -=2;
			if(fire2.x>0){
				ctx.drawImage(fireimg,0,0,103,139,fire2.x,fire2.y,63,82);
			}
			else{
				fire2.flag = 0;
				fire2.y = 300;
				sound_flag.fi3 =1;
			}
			
		}




		if(fire3.flag == 1){															//攻撃

			if(fire3.x <= 0){
				fire3.x = 1400-time.md;
			}
			if(sound_flag.fi4 ==1){
				fire_sound();
				sound_flag.fi4 = 0;
			}


			y4 = 3;

			fire3.y +=y4;


			fire3.x -=2;
			if(fire3.x>0){
				ctx.drawImage(fireimg,0,0,103,139,fire3.x,fire3.y,63,82);
			}
			else{
				fire3.flag = 0;
				fire3.y = 300;
				sound_flag.fi4 =1;
			}
			
		}
	


		if(fire4.flag == 1){															//攻撃

			if(fire4.y >800 || fire4.x<0 || fire4.x > 1000){
				fire4.x = 1400-time.md;
				fire4.y = 300;
				firetime = 0;
			}
			firetime++;

			if(sound_flag.fi5 ==1){
				fire_sound();
				sound_flag.fi5 = 0;
			}

			if(firetime <200){
				if(fire4.x < player.x){
					fire4.x +=2;
					fire4_flag_x  = 1;
				}
				else{
					fire4.x -=2;
					fire4_flag_x  = 0;
				}

				if(fire4.y < player.y){
					fire4.y +=2;
					fire4_flag_y  = 1;
				}
				else{
					fire4.y -=2;
					fire4_flag_y  = 0;
				}
			}
			else{
				if(fire4_flag_x  == 1){
					fire4.x +=2;
				}
				else{
					fire4.x -=2;
				}

				if(fire4_flag_y  == 1){
					fire4.y +=0.7;
				}
				else{
					fire4.y -=0.7;
				}
			}
			
			if(fire4.y <800  && (fire4.x>0 || fire4.x > 1000)){
				if(firetime <200){
					if(time.boss %10 !=0){
						ctx.drawImage(fireimg,0,0,103,139,fire4.x,fire4.y,63,82);
					}
				}
				else{
					ctx.drawImage(fireimg,0,0,103,139,fire4.x,fire4.y,63,82);
				}

		
			}
			else{
				fire4.flag = 0;
				fire4.y = 300;
				fire4.x = 1400-time.md;
				firetime = 0;
				sound_flag.fi5 =1;
			}
			
		}



		// Fire Ball(end)
		///////////////////////////////////////////////////




	}

	///////////////////////////////////


	if(key.attack == false){
		weapon.time = 0;
	}
	if(key.jump == false){
		player.jump = 0;
	}

	
	////////////////////////////////////////
	// Field Weapon

	// Bow
	if(time.bg%700 > bow.ht && bow.flag == 0){
		bow.flag = 1;
		if(Math.random() >0.5){
			bowf = 0;
		}
		else{
			bowf = 277
		}
	}

	if(bow.flag == 1){
		bow.x -= time.pace;
		ctx.drawImage(weapon_bow,0,bowf,128,277,bow.x,bow.y,60,120);
	}
	if(bow.x <= -170  && time.bg<time.game - 1500){
		bow.flag = 0;
		bow.x = 1000;
		bow.y = Math.random()*600+200;
	}

	// Axe

	if(time.bg%700 > axe.ht && axe.flag == 0){
		axe.flag = 1;
	}

	if(axe.flag == 1){
		axe.x -= time.pace;
		ctx.drawImage(weapon_axe,0,0,94,188,axe.x,axe.y,54,108);
	}
	if(axe.x <= -170  && time.bg<time.game - 1500){
		axe.flag = 0;
		axe.x = 1000;
		axe.y = Math.random()*600+200;
	}


	// Arrow

	if(time.bg%700 > arrow.ht && arrow.flag == 0){
		arrow.flag = 1;
	}

	if(arrow.flag == 1){
		arrow.x -= time.pace;
		ctx.drawImage(weapon_arrow,0,0,169,51,arrow.x,arrow.y,100,35);
	}
	if(arrow.x <= -170  && time.bg<time.game - 1500){
		arrow.flag = 0;
		arrow.x = 1000;
		arrow.y = Math.random()*600+250;
	}
	////////////////////////////////////////

	////////////////////////////////////////
	// Box A
	if(time.bg<time.game - 500){

		if(time.bg%700 >hakoa.timec && hakoa.timef == 0){
			hakoa.timef = 1;
		}
		if(hakoa.life == 1 && hakoa.timef == 1){
			ctx.drawImage( hako_a,0,0,128,128, hakoa.x, hakoa.y,128,128);
			hakoa.x-=time.pace;
		}
		if(hakoa.x <= -150  && time.bg<time.game - 1500 ){
			hakoa.timef = 0;
			hakoa.x = 1000;
			hakoa.timec = Math.random()*500;
			hakoa.y = Math.random()*500;
			hakoa.life = 1;
			hakoa.timeh = 0;
			if(hakoa.y < 250){
				hakoa.y = 250
			}
		}
	}

	// Box B
	if(time.bg<time.game - 500){

		if(time.bg%700 >hakob.timec && hakob.timef == 0){
			hakob.timef = 1;
		}
		if(hakob.life == 1 && hakob.timef == 1){
			ctx.drawImage( hako_b,0,0,200,372, hakob.x, hakob.y,100,186);
			hakob.x-=time.pace;
		}
		if(hakob.x <= -150  && time.bg<time.game - 1500 ){
			hakob.timef = 0;
			hakob.x = 1000;
			hakob.timec = Math.random()*200;
			hakob.y = Math.random()*500;
			hakob.life = 1;
			hakob.timeh = 0;
			if(hakob.y < 250){
				hakob.y = 250
			}
		}
	}

	// Box(end)
	////////////////////////////////////////

	////////////////////////////////////////
	// Enemy
	if(time.bg<time.game - 500){
		if(time.af == 0 && time.bg%700 > time.ac ){
			time.af = 1;
		}
		if(time.bf == 0 && time.bg%700 > time.bc){
			time.bf = 1;
		}
		if(time.cf == 0 && time.bg%700 > time.cc){
			time.cf = 1;
		} 

		if(time.df == 0 && time.bg%700 > time.dc ){
			time.df = 1;
		}
		if(time.ef == 0 && time.bg%700 > time.ec){
			time.ef = 1;
		}
		if(time.ff == 0 && time.bg%700 > time.fc){
			time.ff = 1;
		} 

		if(time.gf == 0 && time.bg%700 > time.gc ){
			time.gf = 1;
		}
		if(time.hf == 0 && time.bg%700 > time.hc){
			time.hf = 1;
		}
		if(time.if == 0 && time.bg%700 > time.ic){
			time.if = 1;
		} 


		if(time.af == 1 && monster_a.life == 1){
			if(time.bg%20 < 10){
				ctx.drawImage( monsteria,0,0,256,256, monster_a.x, monster_a.y,200,200);
			}
			else{
				ctx.drawImage( monsteria,0,256,256,256, monster_a.x, monster_a.y,200,200);
			}
			monster_a.x -=monsterspeed.a;
			if(player.y > monster_a.y && monster_a.x>=0 && monster_a.x <899){
				monster_a.y++;
			}
			else{
				monster_a.y--;
			}
		}

		if(time.bf == 1 && monster_b.life == 1){
			if(time.bg%20 < 10){
				ctx.drawImage( monsteria,0,0,256,256, monster_b.x, monster_b.y,200,200);
			}
			else{
				ctx.drawImage( monsteria,0,256,256,256, monster_b.x, monster_b.y,200,200);
			}
			monster_b.x -=monsterspeed.b;
			if(player.y > monster_b.y && monster_b.x>=0 && monster_b.x <899){
				monster_b.y++;
			}
			else{
				monster_b.y--;
			}
		}


		if(time.cf == 1 && monster_c.life == 1){
			if(time.bg%20 < 10){
				ctx.drawImage( monsteria,0,0,256,256, monster_c.x, monster_c.y,200,200);
			}
			else{
				ctx.drawImage( monsteria,0,256,256,256, monster_c.x, monster_c.y,200,200);
			}
			monster_c.x -=monsterspeed.c;
			if(player.y > monster_c.y && monster_c.x>=0 && monster_c.x <899){
				monster_c.y++;
			}
			else{
				monster_c.y--;
			}
		}

		if(time.df == 1 && monster_d.life == 1){
			if(time.bg%20 < 10){
				ctx.drawImage( monsteria,0,0,256,256, monster_d.x, monster_d.y,200,200);
			}
			else{
				ctx.drawImage( monsteria,0,256,256,256, monster_d.x, monster_d.y,200,200);
			}
			monster_d.x -=monsterspeed.d;
			if(player.y > monster_d.y && monster_d.x>=0 && monster_d.x <899){
				monster_d.y++;
			}
			else{
				monster_d.y--;
			}
		}

		if(monster_a.x <= -170  && time.bg<time.game - 1000){
			monster_a.x =1000;
			monster_a.y =Math.random()*700+200;
			monster_a.y =player.y;
			monster_a.life = 1
			hp.ia = 0;
			time.af == 0;
			time.ac = Math.random()*500;
			monsterspeed.a = Math.ceil(Math.random()*13)+3;
		}

		if(monster_b.x <= -170  && time.bg<time.game - 1000){
			monster_b.x =1000;
			monster_b.y =Math.random()*700+200;
			monster_b.y =player.y;
			monster_b.life = 1
			hp.ib = 0;
			time.bf == 0;
			time.bc = Math.random()*500;
			monsterspeed.b = Math.ceil(Math.random()*13)+3;
		}

		if(monster_c.x <= -170  && time.bg<time.game - 1000 ){
			monster_c.x =1000;
			monster_c.y =Math.random()*700+200;
			monster_c.y =player.y;
			monster_c.life = 1
			hp.ic = 0;
			time.cf == 0;
			time.cc = Math.random()*500;
			monsterspeed.c = Math.ceil(Math.random()*13)+3;
		}
		if(monster_d.x <= -170  && time.bg<time.game - 1000 ){
			monster_d.x =1000;
			monster_d.y =Math.random()*700+200;
			monster_d.y =player.y;
			monster_d.life = 1
			hp.id = 0;
			time.df == 0;
			time.dc = Math.random()*500;
			monsterspeed.d = Math.ceil(Math.random()*13)+3;
		}

	}

	///////////////////////////////////////////
	// Player Move

	// Jump

	if(key.jump == true){

		if(player.jump ==4){
			jump_sound();
		}
		player.jump+=2;
		if(player.jump < 10){
			player.y -= 28;
		}
		if(player.jump < 20){
			player.y += 10;
		}
		ctx.drawImage( weapon.img,0,0,180,290, player.x+87, player.y+18,70,120);
		ctx.drawImage( player.img,0,582,180,290, player.x, player.y,120,210);
		
		if(player.jump >20){
			player.jump = 0;
		}
	}

	//////////////////////////////////
	// Attack
	else if(key.attack == true){
		weapon.time+=2;
		if (weapon.time == 4){
			attack_sound();
		}
		if(weapon.time < 10){
			ctx.drawImage( weapon_a,0,0,230,240, player.x+92, player.y+48,100,120);
			ctx.drawImage( player.img,181,0,180,290, player.x, player.y,120,210);
			
		}
		else{
			ctx.drawImage( weapon.img,0,0,180,290, player.x+94, player.y+18,70,120);
			ctx.drawImage( player.img,0,0,180,290, player.x, player.y,120,210);
			
		}
	}


	//////////////////////////////////
	// Walk

	else if(key.right || key.left || key.up || key.down == true){
		if (player.x%16 ==0){
			ctx.drawImage( weapon.img,0,0,180,290, player.x+94, player.y+18,70,120);
			ctx.drawImage( player.img,0,0,180,290, player.x, player.y,120,210);
			
		}
		else{
			ctx.drawImage( weapon.img,0,0,180,290, player.x+94, player.y+18,70,120);
			ctx.drawImage( player.img,0,291,180,290, player.x, player.y,120,210);
			
		}
	}

	else
	{
		ctx.drawImage( weapon.img,0,0,180,290, player.x+94, player.y+18,70,120);
		ctx.drawImage( player.img,0,0,180,290, player.x, player.y,120,210);
		

	}

	// Player Move(end)
	///////////////////////////////////////////
	

	////////////////////////////////////
	// Hit Flg
	if(((player.x < (monster_c.x+50)+50)&&(player.x > (monster_c.x+50)-50)) && ((player.y > (monster_c.y-30)-30)&&(player.y < (monster_c.y+10)+30)) && monster_c.life == 1){
		ctx.drawImage( damageimg,0,0,132,128, player.x+30, player.y,82,78);
		
		hp.player-=1;
		if(sound_flag.c == 0){
			damage_sound();
			sound_flag.c = 1;
			sound_time.c = time.bg;
		}
		if(sound_time.c+60<time.bg){
			sound_flag.c = 0;
		}
		
	}
	if(((player.x < (monster_b.x+50)+50)&&(player.x > (monster_b.x+50)-50)) && ((player.y > (monster_b.y-30)-30)&&(player.y < (monster_b.y+10)+30)) && monster_b.life == 1){
		ctx.drawImage( damageimg,0,0,132,128, player.x+30, player.y,82,78);
		hp.player-=1;

		if(sound_flag.b == 0){
			damage_sound();
			sound_flag.b = 1;
			sound_time.b = time.bg;
		}
		if(sound_time.b+60<time.bg){
			sound_flag.b = 0;
		}
		
	}
	if(((player.x < (monster_a.x+50)+50)&&(player.x > (monster_a.x+50)-50)) && ((player.y > (monster_a.y-30)-30)&&(player.y < (monster_a.y+10)+30)) && monster_a.life == 1){
		ctx.drawImage( damageimg,0,0,132,128, player.x+30, player.y,82,78);
		hp.player-=1;
		
		if(sound_flag.a == 0){
			damage_sound();
			sound_flag.a = 1;
			sound_time.a = time.bg;
		}
		if(sound_time.a+60<time.bg){
			sound_flag.a = 0;
		}
		
	}
	if(((player.x < (monster_d.x+50)+50)&&(player.x > (monster_d.x+50)-50)) && ((player.y > (monster_d.y-30)-30)&&(player.y < (monster_d.y+10)+30)) && monster_d.life == 1){
		ctx.drawImage( damageimg,0,0,132,128, player.x+30, player.y,82,78);
		hp.player-=1;
		
		
		if(sound_flag.d == 0){
			damage_sound();
			sound_flag.d = 1;
			sound_time.d = time.bg;
		}
		if(sound_time.d+60<time.bg){
			sound_flag.d = 0;
		}
		
	}

	time.boss++;

	if(((player.x < fire.x+20)&&(player.x > fire.x-30)) && ((player.y > fire.y-120)&&(player.y < (fire.y+10)+10)) ){
		ctx.drawImage( damageimg,0,0,132,128, player.x+30, player.y,82,78);
		hp.player-=1


		if(sound_flag.fire1 == 0){
			damage_sound();
			sound_flag.fire1 = 1;
			sound_time.fire1 = time.boss;
		}

		if(sound_time.fire1+60<time.boss){
			sound_flag.fire1 = 0;
		}

	}

	if(((player.x < (fire1.x)+20)&&(player.x > fire1.x-30)) && ((player.y > fire1.y-120)&&(player.y < (fire1.y+10)+10)) ){
		ctx.drawImage( damageimg,0,0,132,128, player.x+30, player.y,82,78);
		hp.player-=1;
		
		
		
		if(sound_flag.fire2 == 0){
			damage_sound();
			sound_flag.fire2 = 1;
			sound_time.fire2 = time.boss;
		}

		if(sound_time.fire2+60<time.boss){
			sound_flag.fire2 = 0;
		}
	}

	if(((player.x < (fire2.x)+20)&&(player.x > fire2.x-30)) && ((player.y > fire2.y-120)&&(player.y < (fire2.y+10)+10)) ){
		ctx.drawImage( damageimg,0,0,132,128, player.x+30, player.y,82,78);
		hp.player-=1;
		
		if(sound_flag.fire3 == 0){
			damage_sound();
			sound_flag.fire3 = 1;
			sound_time.fire3 = time.boss;
		}

		if(sound_time.fire3+60<time.boss){
			sound_flag.fire3 = 0;
		}
	}

	if(((player.x < (fire3.x)+20)&&(player.x > fire3.x-30)) && ((player.y > fire3.y-120)&&(player.y < (fire3.y+10)+10)) ){
		ctx.drawImage( damageimg,0,0,132,128, player.x+30, player.y,82,78);
		hp.player-=1;
		
		
		
		if(sound_flag.fire4 == 0){
			damage_sound();
			sound_flag.fire4 = 1;
			sound_time.fire4 = time.boss;
		}

		if(sound_time.fire4+60<time.boss){
			sound_flag.fire4 = 0;
		}
	}

	if(((player.x < (fire4.x)+20)&&(player.x > fire4.x-30)) && ((player.y > fire4.y-120)&&(player.y < (fire4.y+10)+10)) ){
		ctx.drawImage( damageimg,0,0,132,128, player.x+30, player.y,82,78);
		hp.player-=1;
		
		
		
		if(sound_flag.fire5 == 0){
			damage_sound();
			sound_flag.fire5 = 1;
			sound_time.fire5 = time.boss;
		}

		if(sound_time.fire5+60<time.boss){
			sound_flag.fire5 = 0;
		}
	}



	// Hit Flg (end)
	////////////////////////////////////


	////////////////////////////////////
	// Atk Hit Flg

	if(key.attack ==true && atk.monc == 0 && ((player.x+50)<(monster_c.x+150)) &&
	((player.x+50)>(monster_c.x-120)) &&
	((player.y+50)<(monster_c.y+100)) &&
	((player.y+50)>(monster_c.y-70))){
		monster_c.life = 0;
		//ctx.drawImage( damageimg,0,0,132,128, player.x+90, player.y+60,82,78);
		//key.attack =false;
		monster_c.atx = monster_c.x;
		monster_c.aty = monster_c.y;
		atk.monc = 1;

		hitan_sound();
	}

	if(monster_c.life == 0){
		if( hp.ic>=120){
			//monster_c.x = 9999;
			//monster_c.y = 9999;
		}
		hp.ic++;
		monster_c.x -=time.pace;

		if(hp.ic == 5){
			mounstercounter++;
		}

		//died_c.style.opacity =hp.ic;
		if(hp.ic < 20){
			die.cx = 0;
			die.cy = 0;
		}
		else if(hp.ic < 30){
			die.cx = 512;
			die.cy = 0;
		}
		else if(hp.ic < 40){
			die.cx = 0;
			die.cy = 256;
		}
		else if(hp.ic < 50){
			die.cx = 512;
			die.cy = 256;
		}
		else if(hp.ic < 60){
			die.cx = 0;
			die.cy = 512;
		}
		else if(hp.ic < 70){
			die.cx = 512;
			die.cy = 512;
		}
		else if(hp.ic < 80){
			die.cx = 256;
			die.cy = 0;
		}
		else if(hp.ic < 90){
			die.cx = 768;
			die.cy = 0;
		}
		else if(hp.ic < 100){
			die.cx = 256;
			die.cy = 256;
		}
		else if(hp.ic < 110){
			die.cx = 768;
			die.cy = 256;
		}
		else{
			die.cx = 256;
			die.cy = 512;
		}
		if(hp.ic < 120){
			ctx.drawImage( died_c,die.cx,die.cy,256,256, monster_c.x, monster_c.y,200,200);
		}
		else{
			monster_c.x = -10000;
		}


		if(hp.ic <10){
			ctx.drawImage( damageimg,0,0,132,128, monster_c.atx+60, monster_c.aty+40,82,78);
		}
		//ctx.drawImage( monsteria,0,0,256,256, monster_c.x, monster_c.y,200,200);
		//died_c.drawImage( monsteria,0,0,256,256, monster_c.x, monster_c.y,200,200);
	}



	if(key.attack ==true && atk.monb == 0 && ((player.x+50)<(monster_b.x+150)) &&
	((player.x+50)>(monster_b.x-120)) &&
	((player.y+50)<(monster_b.y+100)) &&
	((player.y+50)>(monster_b.y-70))){
		monster_b.life = 0;
		//ctx.drawImage( damageimg,0,0,132,128, player.x+90, player.y+60,82,78);
		//key.attack =false;
		monster_b.atx = monster_b.x;
		monster_b.aty = monster_b.y;
		atk.monb = 1;

		hitan_sound();

	}
	if(monster_b.life == 0){
		if( hp.ib>=120){
			//monster_b.x = 9999;
			//monster_b.y = 9999;
		}
		hp.ib++;
		monster_b.x -=time.pace;
		//died_b.style.opacity =hp.ib;

		if(hp.ib == 5){
			mounstercounter++;
		}


		if(hp.ib < 20){
			die.bx = 0;
			die.by = 0;
		}
		else if(hp.ib < 30){
			die.bx = 512;
			die.by = 0;
		}
		else if(hp.ib < 40){
			die.bx = 0;
			die.by = 256;
		}
		else if(hp.ib < 50){
			die.bx = 512;
			die.by = 256;
		}
		else if(hp.ib < 60){
			die.bx = 0;
			die.by = 512;
		}
		else if(hp.ib < 70){
			die.bx = 512;
			die.by = 512;
		}
		else if(hp.ib < 80){
			die.bx = 256;
			die.by = 0;
		}
		else if(hp.ib < 90){
			die.bx = 768;
			die.by = 0;
		}
		else if(hp.ib < 100){
			die.bx = 256;
			die.by = 256;
		}
		else if(hp.ib < 110){
			die.bx = 768;
			die.by = 256;
		}
		else{
			die.bx = 256;
			die.by = 512;
		}

		if(hp.ib < 120){
			ctx.drawImage( died_b,die.bx,die.by,256,256, monster_b.x, monster_b.y,200,200);
		}
		else{
			//monster_b.x = -1;
		}


		if(hp.ib <10){
			ctx.drawImage( damageimg,0,0,132,128, monster_b.atx+60, monster_b.aty+40,82,78);
		}

		//ctx.drawImage( monsteria,0,0,256,256, monster_b.x, monster_b.y,200,200);
		//died_b.drawImage( monsteria,0,0,256,256, monster_b.x, monster_b.y,200,200);
	}


	if(key.attack ==true && atk.mona == 0 && ((player.x+50)<(monster_a.x+150)) &&
	((player.x+50)>(monster_a.x-120)) &&
	((player.y+50)<(monster_a.y+100)) &&
	((player.y+50)>(monster_a.y-70))){
		monster_a.life = 0;
		//ctx.drawImage( damageimg,0,0,132,128, player.x+90, player.y+60,82,78);
		//key.attack =false;
		monster_a.atx = monster_a.x;
		monster_a.aty = monster_a.y;
		atk.mona = 1;

		hitan_sound();
	}
	if(monster_a.life == 0){
		if( hp.ia>=120){
			//monster_a.x = 9999;
			//monster_a.y = 9999;
		}
		hp.ia++;
		monster_a.x -=time.pace;
		

		if(hp.ia == 5){
			mounstercounter++;
		}

		if(hp.ia < 20){
			die.ax = 0;
			die.ay = 0;
		}
		else if(hp.ia < 30){
			die.ax = 512;
			die.ay = 0;
		}
		else if(hp.ia < 40){
			die.ax = 0;
			die.ay = 256;
		}
		else if(hp.ia < 50){
			die.ax = 512;
			die.ay = 256;
		}
		else if(hp.ia < 60){
			die.ax = 0;
			die.ay = 512;
		}
		else if(hp.ia < 70){
			die.ax = 512;
			die.ay = 512;
		}
		else if(hp.ia < 80){
			die.ax = 256;
			die.ay = 0;
		}
		else if(hp.ia < 90){
			die.ax = 768;
			die.ay = 0;
		}
		else if(hp.ia < 100){
			die.ax = 256;
			die.ay = 256;
		}
		else if(hp.ia < 110){
			die.ax = 768;
			die.ay = 256;
		}
		else{
			die.ax = 256;
			die.ay = 512;
		}
		if(hp.ia < 120){
			ctx.drawImage( died_a,die.ax,die.ay,256,256, monster_a.x, monster_a.y,200,200);
		}
		else{
			//monster_c.x = -1;
		}


		if(hp.ia <10){
			ctx.drawImage( damageimg,0,0,132,128, monster_a.atx+60, monster_a.aty+40,82,78);
		}

	}


	// Die
	if(key.attack ==true && atk.mond == 0 && ((player.x+50)<(monster_d.x+150)) &&
	((player.x+50)>(monster_d.x-120)) &&
	((player.y+50)<(monster_d.y+100)) &&
	((player.y+50)>(monster_d.y-70)) && monster_d.life ==1){
		monster_d.life = 0;


		monster_d.atx = monster_d.x;
		monster_d.aty = monster_d.y;
		atk.mond = 0;

		hitan_sound();
	}
	if(monster_d.life == 0){
		hp.id++;
		monster_d.x -=time.pace;
		
		if(hp.id == 5){
			mounstercounter++;
		}
		if(hp.id < 20){
			die.dx = 0;
			die.dy = 0;
		}
		else if(hp.id < 30){
			die.dx = 512;
			die.dy = 0;
		}
		else if(hp.id < 40){
			die.dx = 0;
			die.dy = 256;
		}
		else if(hp.id < 50){
			die.dx = 512;
			die.dy = 256;
		}
		else if(hp.id < 60){
			die.dx = 0;
			die.dy = 512;
		}
		else if(hp.id < 70){
			die.dx = 512;
			die.dy = 512;
		}
		else if(hp.id < 80){
			die.dx = 256;
			die.dy = 0;
		}
		else if(hp.id < 90){
			die.dx = 768;
			die.dy = 0;
		}
		else if(hp.id < 100){
			die.dx = 256;
			die.dy = 256;
		}
		else if(hp.id < 110){
			die.dx = 768;
			die.dy = 256;
		}
		else{
			die.dx = 256;
			die.dy = 512;
		}
		if(hp.id < 120){
			ctx.drawImage( died_a,die.dx,die.dy,256,256, monster_d.x, monster_d.y,200,200);
		}
		else{
			//monster_d.x = -1;
		}

		if(hp.id <10){
			ctx.drawImage( damageimg,0,0,132,128, monster_d.atx+60, monster_d.aty+40,82,78);
		}
	}




	////////////////////////////////////
	// Boss Atk Hit Flg

	if(key.attack ==true && atk.dra == 0 && ((player.x+50)<(1400-time.md+350)) &&
	((player.x+50)>(1400-time.md+50)) &&
	((player.y+50)<(dra.y+400)) &&
	((player.y+50)>(dra.y-50)) 
		&& time.bg>=time.game){
		dra.life = 1;
		atk.dra = 1;

		sound_flag.dra = 1;
		attack2_sound();
	}
	if(dra.life == 1  ){
		hp.dragon -=((player.atk*1)+1);
		dra.life = 0;
	}



	if(sound_flag.dra == 1){
		ctx.drawImage( damageimg,0,0,132,128, player.x+160, player.y+40,82,78);
		sound_time.dra++

		if(sound_time.dra >10){
			sound_flag.dra = 0;
			sound_time.dra = 0;
		}
	}


	// Boss Atk Hit Flg(end)
	////////////////////////////////////



	////////////////////////////////////
	// Box Hit Atk Flg

	// Box A
	if(key.attack ==true && atk.hakoa == 0 && ((player.x+50)<(hakoa.x+150)) &&
	((player.x+50)>(hakoa.x-130)) &&
	((player.y+50)<(hakoa.y+150)) &&
	((player.y+50)>(hakoa.y-90)) && hakoa.life == 1){
		hakoa.life = 0;
		//key.attack =false;
		//ctx.drawImage( damageimg,0,0,132,128, hakoa.x, hakoa.y,82,78);

		hakoa.atx = hakoa.x;
		hakoa.aty = hakoa.y;
		atk.hakoa = 1;
		if(Math.random() < onigiria.rate && onigiria.life == 0){
			onigiria.life = 1;
			onigiria.x = hakoa.x;
			onigiria.y = hakoa.y;
		}
		crash_sound();
	}

	if(hakoa.life == 0){
		hakoa.x-=time.pace;
		hakoa.timeh++;

		if(hakoa.timeh < 40){
			hakoa.px = 0;
			hakoa.py = 0;
		}
		else if(hakoa.timeh < 60){
			hakoa.px = 0;
			hakoa.py = 128;
		}
		else if(hakoa.timeh < 80){
			hakoa.px = 0;
			hakoa.py = 256;
		}
		else if(hakoa.timeh < 100){
			hakoa.px = 128;
			hakoa.py = 0;
		}
		else{
			hakoa.px = 128;
			hakoa.py = 128;
		}

		if(hakoa.timeh <120){
			ctx.drawImage( hako_an,hakoa.px,hakoa.py,128,128, hakoa.x, hakoa.y,128,128);
		}
		else{
			hakoa.x = -160;
		}

		if(hakoa.timeh<10){
			ctx.drawImage( damageimg,0,0,132,128, hakoa.atx, hakoa.aty,82,78);
		}
	}



	// Box B

	if(key.attack ==true && atk.hakob == 0 && ((player.x+50)<(hakob.x+150)) &&
	((player.x+50)>(hakob.x-130)) &&
	((player.y+50)<(hakob.y+150)) &&
	((player.y+50)>(hakob.y-180)) && hakob.life == 1){
		//key.attack =false;
		hakob.life = 0;
		//ctx.drawImage( damageimg,0,0,132,128, hakob.x, hakob.y,82,78);
		hakob.atx = hakob.x;
		hakob.aty = hakob.y;
		atk.hakob = 1;

		
		if(Math.random() < sword2.rate && sword2.flag == 0){
			sword2.flag = 1;
			sword2.x = hakob.x +20;
			sword2.y = hakob.y +50;
		}

		crash_sound();
	}

	if(hakob.life == 0){
		hakob.x-=time.pace;
		hakob.timeh++;

		if(hakob.timeh < 40){
			hakob.px = 0;
			hakob.py = 0;
		}
		else if(hakob.timeh < 60){
			hakob.px = 200;
			hakob.py = 0;
		}
		else if(hakob.timeh < 80){
			hakob.px = 400;
			hakob.py = 0;
		}
		else if(hakob.timeh < 100){
			hakob.px = 0;
			hakob.py = 372;
		}
		else{
			hakob.px = 200;
			hakob.py = 372;
		}

		if(hakob.timeh <100){
			ctx.drawImage( hako_bn,hakob.px,hakob.py,200,372, hakob.x, hakob.y,100,186);
		}
		else{
			hakob.x = -160;
		}

		if(hakob.timeh<10){
			ctx.drawImage( damageimg,0,0,132,128, hakob.atx, hakob.aty,82,78);
		}
	}
	// Box Hit Flg(end)
	////////////////////////////////////


	////////////////////////////////////
	// Goods

	// 🍙
	if(onigiria.life == 1){
		onigiria.x -=time.pace;
		ctx.drawImage( onigiri,0,0,128,128, onigiria.x, onigiria.y,100,100);
	}

	if(onigiria.x <= -150  && time.bg<time.game - 1000 ){
		onigiria.life = 0;
	}


	if(player.x < onigiria.x+100 && player.x > onigiria.x-150 && player.y > onigiria.y-100 && player.y < onigiria.y+40 && onigiria.life == 1){
		onigiria.life = 0;
		hp.player +=100;
		hp_sound();
	}

	// Weapon
	if(sword2.flag == 1){
		sword2.x -=time.pace;
		ctx.drawImage( weapon_sword2,0,0,78,268, sword2.x, sword2.y,40,100);
	}

	if(onigiri.x <= -150  && time.bg<time.game - 1000 ){
		sword2.flag = 0;
	}


	if(player.x < sword2.x+100 && player.x > sword2.x-150 && player.y > sword2.y-130 && player.y < sword2.y+40 && sword2.flag == 1){
		sword2.flag = 0;
		player.atk++;
		levelup_sound();
	}


	////////////////////////////////////

	// Atk Hit Flg(end)
	////////////////////////////////////




	///////////////////////////////////
	// HP

	if(hp.player <=0){
		hp.player = 0;
	}
	if(hp.player > 150){
		hp.player = 150;
	}
	hpline.strokeRect(80, 30, 180, 27);
	if(hp.player >70){
		hpline.fillStyle="rgb(34, 139, 34)";
	}
	else{
		hpline.fillStyle="rgb(255, 0, 0)";
	}
	hpline.fillRect(81,31,hp.player*1.2,25);
	hpline.fillStyle="rgb(34, 139, 34)";
	ctx.drawImage( hpicon,20,20,108,108, 30, 5,90,90);

	ctx.drawImage( monsteria,0,0,256,256, 280, -5,90,90);
	ctx.font = "48px arial black";
	ctx.fillStyle="rgb(255,255,255)";
	ctx.fillText(mounstercounter, 370, 60);
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.strokeText(mounstercounter, 370, 60); 

	ctx.drawImage( weapon_sword2,0,0,78,268, 440, -5,30,80);
	ctx.font = "48px arial black";
	ctx.fillStyle="rgb(255,255,255)";
	ctx.fillText(player.atk, 480, 60);
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.strokeText(player.atk, 480, 60); 


	if(hp.dragon <=0){
		hp.dragon = 0;
	}
	if(time.md == 800){
		hpline.strokeRect(750, 30, 240, 27);
		if(hp.dragon >70){
			hpline.fillStyle="rgb(34, 139, 34)";
		}
		else{
			hpline.fillStyle="rgb(255, 0, 0)";
		}
		hpline.fillRect(751,31,hp.dragon*1.2,25);
		ctx.drawImage( dragon,20,20,350,280, 700, 15,70,50);
	}
	
	///////////////////////////////////
	
	addEventListener("keydown", keydownfunc, false);
	addEventListener("keyup", keyupfunc, false);
 
	// If the directional key is pressed, the Player moves
	if ( player.move === 0 ) {
		if ( key.left === true ) {
			player.move = 32;
			key.push = 'left';
		}
		if ( key.up === true ) {
			player.move = 32;
			key.push = 'up';
		}
		if ( key.right === true ) {
			player.move = 32;
			key.push = 'right';
		}
		if ( key.down === true ) {
			player.move = 32;
			key.push = 'down';
		}

	}
	// If player.move is greater than 0, continue moving by 4px
	if (player.move > 0 && (key.right || key.left || key.up || key.down == true)) {
		player.move -= 4;
		if ( key.push === 'left' ) player.x -= 4;
		if ( key.push === 'up' ) player.y -= 4;
		if ( key.push === 'right' ) player.x += 4;
		if ( key.push === 'down' ) player.y += 4;
	}



	if(hp.player == 0 || hp.dragon == 0){

		if(hp.player == 0){
			cancelAnimationFrame(main);
			//ctx.clearRect(0, 0, canvas.width, canvas.height);
			if(time.md > 0){
				boss_s.pause();
			}
			battle_s.pause();
			fail_sound();
			canvas.addEventListener('load', gg(), false);
		}

		if(hp.dragon == 0){
			boss_s.pause();
			victory_sound();
			if(jikanflag == 2){
				var jikane= new Date();
				hour_end = jikane.getHours();
				minute_end = jikane.getMinutes();
				second_end = jikane.getSeconds();
				jikanflag = 3;
			}
			score_min = Math.floor(((hour_end - hour_start)*3600+(minute_end - minute_start)*60 + (second_end - second_start))/60);
			score_sec = ((hour_end - hour_start)*3600+(minute_end - minute_start)*60 + (second_end - second_start))%60;
			//ctx.clearRect(0, 0, canvas.width, canvas.height);
			cancelAnimationFrame(main);
			
			canvas.addEventListener('load', victory(), false);
		}


	}
	else{
		requestAnimationFrame( main );
	}
		
}
// Main Loop end
///////////////////////////////////////////

///////////////////////////////////////////
// Game Over
function gg(){
	ctx.drawImage(bg.img,0,0,1000,800,0,0,1000,800);
	ctx.drawImage( dieplayer,0,0,302,167, player.x-50, player.y+90,270,155)
	if(hp.player2 == 0){
		ctx.drawImage( dieplayer2,0,0,302,167, player2.x-50, player2.y+90,270,155)
	}
	///////////////////////////////////////
	// Title
	if(gameover.time <1000){
		gameover.time++;
	}

	// g
	if(gameover.time < 10){
		ctx.drawImage(bg_u,0,0,256,256,200+overt.g,100,130,130);
		overt.g++;
	}
	
	else{
		ctx.drawImage(bg_o,0,0,256,256,230,100,130,130);
	}
	// a
	if(gameover.time < 15 && gameover.time>5){
		ctx.drawImage(ba_u,0,0,256,256,260+overt.a,100,130,130);
		overt.a++;
	}
	
	if(gameover.time >= 15){
		ctx.drawImage(ba_o,0,0,256,256,290,100,130,130);
	}

	// m
	if(gameover.time < 20 && gameover.time>10){
		ctx.drawImage(bm_u,0,0,256,256,320+overt.m,100,130,130);
		overt.m++;
	}
	
	if(gameover.time >= 20){
		ctx.drawImage(bm_o,0,0,256,256,350,100,130,130);
	}
	// e
	if(gameover.time < 25 && gameover.time>15){
		ctx.drawImage(be_u,0,0,256,256,380+overt.e,100,130,130);
		overt.e++;
	}
	
	if(gameover.time >= 25){
		ctx.drawImage(be_o,0,0,256,256,410,100,130,130);
	}

	// o
	if(gameover.time < 30 && gameover.time>20){
		ctx.drawImage(o_u,0,0,256,256,500+overt.go,100,150,150);
		overt.go++;
	}
	
	if(gameover.time >= 30){
		ctx.drawImage(o_o,20,20,256,256,530,100,150,150);
	}
	// v
	if(gameover.time < 35 && gameover.time>25){
		ctx.drawImage(v_o,0,0,256,256,560+overt.gv,100,150,150);
		overt.gv++;
	}
	
	if(gameover.time >= 30){
		ctx.drawImage(v_o,20,20,256,256,590,100,150,150);
	}
	// e
	if(gameover.time < 40 && gameover.time>30){
		ctx.drawImage(e_o,0,0,256,256,620+overt.ge,100,150,150);
		overt.ge++;
	}
	
	if(gameover.time >= 35){
		ctx.drawImage(e_o,20,20,256,256,650,100,150,150);
	}

	// r
	if(gameover.time < 45 && gameover.time>35){
		ctx.drawImage(r_o,0,0,256,256,680+overt.gr,100,150,150);
		overt.gr++;
	}
	
	if(gameover.time >= 40){
		ctx.drawImage(r_o,20,20,256,256,710,100,150,150);
	}

	if(gameover.time >= 80){
		ctx.drawImage(overtitle,0,0,830,188,325,100,415,94);
		 
	}
	///////////////////////////////////////

	if(gameover.time >= 120){
		ctx.font = "40px arial black";
		ctx.fillStyle="rgb(255,255,255)";
		ctx.fillText("戻る", 480, 550);
		ctx.strokeStyle = "rgb(0,0,0)";
		ctx.strokeText("戻る", 480, 550); 
		ctx.fillStyle = "rgba(" + [255, 255, 255, 0.5] + ")";
		ctx.fillRect(458,510,120,50);
		ctx.strokeRect(458,510,120,50);
	}


	if(gameover.time >=120 && key.jump == true){
		fail_s.pause();
		key2_sound();
		menu_sound();
		cancelAnimationFrame(gg);
		canvas.addEventListener('load', menu(), false);
	}
	else{
		requestAnimationFrame(gg);
	}
}
///////////////////////////////////////////

/*if(hp.player == 0){
	//cancelAnimationFrame(main);
	addEventListener('load', gameover(), false);
}*/

// Function called when the keyboard is pressed
function keydownfunc( event ) {
	var key_code = event.keyCode;
	if( key_code === 37 ) key.left = true;
	if( key_code === 38 ) key.up = true;
	if( key_code === 39 ) key.right = true;
	if( key_code === 40 ) key.down = true;
	if( key_code === 32 ) key.jump = true;
	if( key_code === 90 ) key.attack = true;

	// Player2

	if( key_code === 74 ) key.left2 = true;
	if( key_code === 73 ) key.up2 = true;
	if( key_code === 76 ) key.right2 = true;
	if( key_code === 75 ) key.down2 = true;
	if( key_code === 104 ) key.jump2 = true;
	if( key_code === 100 ) key.attack2 = true;
	event.preventDefault();
}
 
// Function called when the keyboard is released
function keyupfunc( event ) {
	var key_code = event.keyCode;
	if( key_code === 37 ) key.left = false;
	if( key_code === 38 ) key.up = false;
	if( key_code === 39 ) key.right = false;
	if( key_code === 40 ) key.down = false;
	if( key_code === 32 ) key.jump = false;
	if( key_code === 90 ) key.attack = false;

	// Player2

	if( key_code === 74 ) key.left2 = false;
	if( key_code === 73 ) key.up2 = false;
	if( key_code === 76 ) key.right2 = false;
	if( key_code === 75 ) key.down2 = false;
	if( key_code === 104 ) key.jump2 = false;
	if( key_code === 100 ) key.attack2 = false;
}





function dual() {
    //Specify the colour to be filled
	/*ctx.fillStyle = 'rgb( 255 ,255 ,255 )';
	//fillRect; /*ctx.fillRect(0)
	ctx.fillRect(0, 0, 600, 300);*/



	if(key.attack == false && key.attack2 == false){
		atk.mona = 0;
		atk.monb = 0;
		atk.monc = 0;
		atk.mond = 0;
		atk.dra = 0;
		atk.hakoa = 0;
		atk.hakob = 0;
	}

	if(time.bg<time.game){
		time.bg +=time.pace;
		ctx.drawImage(bg.img,bg.x,0,1000,800,0,0,1000,800);
		bg.x += time.pace;
		if(bg.x >999){
			bg.x = 0;
		}


		// Move Range
		if(player.y <75){
			player.y = 75;
		}

		if(player.y >430){
			player.y = 430;
		}

		if(player.x < 0){
			player.x = 0;
		}
		if(player.x > 900){
			player.x = 900;
		}


		// Player2

		if(player2.y <75){
			player2.y = 75;
		}

		if(player2.y >430){
			player2.y = 430;
		}

		if(player2.x < 0){
			player2.x = 0;
		}
		if(player2.x > 900){
			player2.x = 900;
		}



		if(monster_a.y <130){
			monster_a.y = 130;
		}
		if(monster_b.y <130){
			monster_b.y = 130;
		}
		if(monster_c.y <130){
			monster_c.y = 130;
		}
		if(monster_d.y <130){
			monster_d.y = 130;
		}
		if(monster_e.y <130){
			monster_e.y = 130;
		}
		if(monster_f.y <130){
			monster_f.y = 130;
		}
		if(monster_g.y <130){
			monster_g.y = 130;
		}
		if(monster_h.y <130){
			monster_h.y = 130;
		}
		if(monster_i.y <130){
			monster_i.y = 130;
		}

	}
	else{
		ctx.drawImage(bg.img,bg.x,0,1000,800,0,0,1000,800);
	
	}
	if(time.bg>time.game-500){

		// Move Range


		if(time.bg <time.game+1){
			if(time.md <800){
				if(player.x > 1150-time.md ){
					player.x = 1150-time.md;
				}

				// Player2
				if(player2.x > 1150-time.md ){
					player2.x = 1150-time.md;
				}
			}

		}
		if(player.x>925-time.bb && player.x <1225-time.bb){
			if(player.y <220){
				player.y = 220;
			}
			if(player.y >360){
				player.y = 360;
			}
		}

		// Player2
		if(player2.x>925-time.bb && player2.x <1225-time.bb){
			if(player2.y <220){
				player2.y = 220;
			}
			if(player2.y >360){
				player2.y = 360;
			}
		}

		if(player.y <75){
			player.y = 75;
		}

		if(player.y >430){
			player.y = 430;
		}

		if(player.x < 0){
			player.x = 0;
		}
		if(player.x > 900){
			player.x = 900;
		}
		
		if(player.x > 1200-time.bb){
			player.x = 1200-time.bb;
		}

		// Player2

		if(player2.y <75){
			player2.y = 75;
		}

		if(player2.y >430){
			player2.y = 430;
		}

		if(player2.x < 0){
			player2.x = 0;
		}
		if(player2.x > 900){
			player2.x = 900;
		}
		
		if(player2.x > 1200-time.bb){
			player2.x = 1200-time.bb;
		}


		if(time.bb < 500){
			time.bb+=2;
		}
		ctx.drawImage(bg2,0,0,340,533,1000-time.bb,280,260,360);
		
	}


////////////////////////////////////





	////////////////////////////////////
	// Die
	if(hp.player == 0){
		if(coffin.flag1 ==0){
			ctx.drawImage(hitsugi,0,0,1000,629,player.x,player.y+100,166,104);

			if(key.attack2 ==true  && ((player2.x+50)<(player.x+150)) &&
			((player2.x+50)>(player.x-130)) &&
			((player2.y+50)<(player.y+200)) &&
			((player2.y+50)>(player.y-90))  && hp.player2 != 0){
				coffin.flag1 = 1;		
				crash_sound();
			}
		}

		if(coffin.flag1 == 1){
			coffin_time_a++
			if(coffin_time_a <20){
				coffin.ax = 0;
				coffin.ay = 0;
			}
			else if(coffin_time_a <40){
				coffin.ax = 0;
				coffin.ay = 104;
				coffin.flag1 = 2;
				angel_sound();
			}
			else if(coffin_time_a <60){
				coffin.ax = 0;
				coffin.ay = 208;
			}
			else if(coffin_time_a <80){
				coffin.ax = 166;
				coffin.ay = 0;
			}
			else{
				coffin.ax = 166;
				coffin.ay = 104;
			}
			ctx.drawImage(hitsugi_break,coffin.ax,coffin.ay,166,104,player.x,player.y+100,166,104);

		}

		if(coffin.flag1 == 2){
			if(heaven.a < 300){
				heaven.a++;
				ctx.drawImage(p1_die,0,0,128,128,player.x,player.y-(heaven.a*2),96,96);				
			}
			else{
				coffin.flag1 = 3;
			}

		}

	}




	if(hp.player2 == 0){
		if(coffin.flag2 ==0){
			ctx.drawImage(hitsugi,0,0,1000,629,player2.x,player2.y+100,166,104);

			if(key.attack ==true  && ((player.x+50)<(player2.x+150)) &&
			((player.x+50)>(player2.x-130)) &&
			((player.y+50)<(player2.y+200)) &&
			((player.y+50)>(player2.y-90))  && hp.player != 0){
				coffin.flag2 = 1;	
				crash_sound();	
			}
		}

		if(coffin.flag2 == 1){
			coffin_time_b++
			if(coffin_time_b <20){
				coffin.bx = 0;
				coffin.by = 0;
			}
			else if(coffin_time_b <40){
				coffin.bx = 0;
				coffin.by = 104;
				coffin.flag2 = 2;
				angel_sound();
			}
			else if(coffin_time_b <60){
				coffin.bx = 0;
				coffin.by = 208;
			}
			else if(coffin_time_b <80){
				coffin.bx = 166;
				coffin.by = 0;
			}
			else{
				coffin.bx = 166;
				coffin.by = 104;
			}
			ctx.drawImage(hitsugi_break,coffin.bx,coffin.by,166,104,player2.x,player2.y+100,166,104);

		}

		if(coffin.flag2 == 2){
			if(heaven.b < 300){
				heaven.b++;
				ctx.drawImage(p2_die,0,0,128,128,player2.x,player2.y-(heaven.b*2),96,96);			
			}
			else{
				coffin.flag2 = 3;
			}
			
		}
	}


	////////////////////////////////////
	




////////////////////////////////////




	////////////////////////////////////
	// Boss

	if( time.bg > time.game-450 && time.bg <time.game+1 && time.md <800){
		if(time.md <800){
			time.md++;	
		}
		if(time.md%20<10){
			ctx.drawImage(dragon,0,600,820,600,1400-time.md,200,570,380);
		}
		else{
			ctx.drawImage(dragon,820,600,820,600,1400-time.md,200,570,380);
		}
		
		if(time.md == 1){
			battle_s.pause();
			boss_sound();
		}
	}

	if(time.md == 800){
		time.fire++;
		if(time.fire % 400 < 320){
			ctx.drawImage(dragon,0,0,820,600,1400-time.md,200,570,380);				//攻撃

			if(time.fire % 400 < 80){
				fire.flag=1;
			}
			else if(time.fire % 400 < 160){
				fire1.flag=1;
			}
			else if(time.fire % 400 < 240){
				fire2.flag=1;
			}
			else {
				fire3.flag=1;
				fire4.flag=1;
			}

			
		}
		else{
			ctx.drawImage(dragon,0,600,820,600,1400-time.md,200,570,380);
			dra.x = 1400-time.md;
			dra.y = 200;
		}



		//////////////////////////////////////
		// Fire Ball

		if(fire.flag == 1){															//攻撃

			if(fire.x <= 0){
				fire.x = 1400-time.md;
			}

			if(sound_flag.fi1 ==1){
				fire_sound();
				sound_flag.fi1 = 0;
			}

			y1 = 0;


			fire.y +=y1;
			fire.x -=2;
			if(fire.x>0){
				ctx.drawImage(fireimg,0,0,103,139,fire.x,fire.y,63,82);
			}
			else{
				fire.flag = 0;
				fire.y = 300;
				sound_flag.fi1 =1;
			}
			
		}



		if(fire1.flag == 1){															//攻撃

			if(fire1.x <= 0){
				fire1.x = 1400-time.md;
			}

			if(sound_flag.fi2 ==1){
				fire_sound();
				sound_flag.fi2 = 0;
			}

			y2 = 1;

			fire1.y +=y2;
			fire1.x -=2;
			if(fire1.x>0){
				ctx.drawImage(fireimg,0,0,103,139,fire1.x,fire1.y,63,82);
			}
			else{
				fire1.flag = 0;
				fire1.y = 300;
				sound_flag.fi2 =1;
			}
			
		}
		if(fire2.flag == 1){															//攻撃

			if(fire2.x <= 0){
				fire2.x = 1400-time.md;
			}

			if(sound_flag.fi3 ==1){
				fire_sound();
				sound_flag.fi3 = 0;
			}


			y3 = 2;

			fire2.y +=y3;
			fire2.x -=2;
			if(fire2.x>0){
				ctx.drawImage(fireimg,0,0,103,139,fire2.x,fire2.y,63,82);
			}
			else{
				fire2.flag = 0;
				fire2.y = 300;
				sound_flag.fi3 =1;
			}
			
		}




		if(fire3.flag == 1){															//攻撃

			if(fire3.x <= 0){
				fire3.x = 1400-time.md;
			}

			if(sound_flag.fi4 ==1){
				fire_sound();
				sound_flag.fi4 = 0;
			}

			y4 = 3;

			fire3.y +=y4;


			fire3.x -=2;
			if(fire3.x>0){
				ctx.drawImage(fireimg,0,0,103,139,fire3.x,fire3.y,63,82);
			}
			else{
				fire3.flag = 0;
				fire3.y = 300;
				sound_flag.fi4 =1;
			}
			
		}
	


		if(fire4.flag == 1){															//攻撃

			if(fire4.y >800 || fire4.x<0 || fire4.x > 1000){
				fire4.x = 1400-time.md;
				fire4.y = 300;
				firetime = 0;
				fireflag = 0;
			}
			firetime++;

			if(sound_flag.fi5 ==1){
				fire_sound();
				sound_flag.fi5 = 0;
			}

			if(fireflag == 0 && hp.player != 0 && hp.player2 != 0){
				if(Math.random() <0.5){
					fireflag = 1;
				}
				else{
					fireflag = 2;
				}
			}

			if(hp.player == 0){
				fireflag = 2;
			}

			if(hp.player2 == 0){
				fireflag = 1;
			}

			if(fireflag == 1){
				if(firetime <200){
					if(fire4.x < player.x){
						fire4.x +=2;
						fire4_flag_x  = 1;
					}
					else{
						fire4.x -=2;
						fire4_flag_x  = 0;
					}
	
					if(fire4.y < player.y){
						fire4.y +=2;
						fire4_flag_y  = 1;
					}
					else{
						fire4.y -=2;
						fire4_flag_y  = 0;
					}
				}
				else{
					if(fire4_flag_x  == 1){
						fire4.x +=2;
					}
					else{
						fire4.x -=2;
					}
	
					if(fire4_flag_y  == 1){
						fire4.y +=0.7;
					}
					else{
						fire4.y -=0.7;
					}
				}
			}

			if(fireflag == 2){
				if(firetime <200){
					if(fire4.x < player2.x){
						fire4.x +=2;
						fire4_flag_x  = 1;
					}
					else{
						fire4.x -=2;
						fire4_flag_x  = 0;
					}
	
					if(fire4.y < player2.y){
						fire4.y +=2;
						fire4_flag_y  = 1;
					}
					else{
						fire4.y -=2;
						fire4_flag_y  = 0;
					}
				}
				else{
					if(fire4_flag_x  == 1){
						fire4.x +=2;
					}
					else{
						fire4.x -=2;
					}
	
					if(fire4_flag_y  == 1){
						fire4.y +=0.7;
					}
					else{
						fire4.y -=0.7;
					}
				}
			}
			
			if(fire4.y <800  && (fire4.x>0 || fire4.x > 1000)){
				if(firetime <200){
					if(time.boss %10 !=0){
						ctx.drawImage(fireimg,0,0,103,139,fire4.x,fire4.y,63,82);
					}
				}
				else{
					ctx.drawImage(fireimg,0,0,103,139,fire4.x,fire4.y,63,82);
				}

			}
			else{
				fire4.flag = 0;
				fire4.y = 300;
				fire4.x = 1400-time.md;
				firetime = 0;
				fireflag = 0;
				sound_flag.fi5 =1;
			}
			
		}



		// Fire Ball(end)
		///////////////////////////////////////////////////

	}

	///////////////////////////////////


	if(key.attack == false){
		weapon.time = 0;
	}
	if(key.jump == false){
		player.jump = 0;
	}

	// Player2
	if(key.attack2 == false){
		weapon.time2 = 0;
	}
	if(key.jump2 == false){
		player2.jump = 0;
	}
	
	////////////////////////////////////////
	// Field Weapon

	// Bow
	if(time.bg%700 > bow.ht && bow.flag == 0){
		bow.flag = 1;
		if(Math.random() >0.5){
			bowf = 0;
		}
		else{
			bowf = 277
		}
	}

	if(bow.flag == 1){
		bow.x -= time.pace;
		ctx.drawImage(weapon_bow,0,bowf,128,277,bow.x,bow.y,60,120);
	}
	if(bow.x <= -170  && time.bg<time.game - 1500){
		bow.flag = 0;
		bow.x = 1000;
		bow.y = Math.random()*600+200;
	}

	// Axe

	if(time.bg%700 > axe.ht && axe.flag == 0){
		axe.flag = 1;
	}

	if(axe.flag == 1){
		axe.x -= time.pace;
		ctx.drawImage(weapon_axe,0,0,94,188,axe.x,axe.y,54,108);
	}
	if(axe.x <= -170  && time.bg<time.game - 1500){
		axe.flag = 0;
		axe.x = 1000;
		axe.y = Math.random()*600+200;
	}


	// Arrow

	if(time.bg%700 > arrow.ht && arrow.flag == 0){
		arrow.flag = 1;
	}

	if(arrow.flag == 1){
		arrow.x -= time.pace;
		ctx.drawImage(weapon_arrow,0,0,169,51,arrow.x,arrow.y,100,35);
	}
	if(arrow.x <= -170  && time.bg<time.game - 1500){
		arrow.flag = 0;
		arrow.x = 1000;
		arrow.y = Math.random()*600+200;
	}
	////////////////////////////////////////

	////////////////////////////////////////
	// Box A
	if(time.bg<time.game - 500){

		if(time.bg%700 >hakoa.timec && hakoa.timef == 0){
			hakoa.timef = 1;
		}
		if(hakoa.life == 1 && hakoa.timef == 1){
			ctx.drawImage( hako_a,0,0,128,128, hakoa.x, hakoa.y,128,128);
			hakoa.x-=time.pace;
		}
		if(hakoa.x <= -150  && time.bg<time.game - 1500 ){
			hakoa.timef = 0;
			hakoa.x = 1000;
			hakoa.timec = Math.random()*500;
			hakoa.y = Math.random()*500;
			hakoa.life = 1;
			hakoa.timeh = 0;
			if(hakoa.y < 250){
				hakoa.y = 250
			}
		}
	}

	// Box B
	if(time.bg<time.game - 500){

		if(time.bg%700 >hakob.timec && hakob.timef == 0){
			hakob.timef = 1;
		}
		if(hakob.life == 1 && hakob.timef == 1){
			ctx.drawImage( hako_b,0,0,200,372, hakob.x, hakob.y,100,186);
			hakob.x-=time.pace;
		}
		if(hakob.x <= -150  && time.bg<time.game - 1500 ){
			hakob.timef = 0;
			hakob.x = 1000;
			hakob.timec = Math.random()*200;
			hakob.y = Math.random()*500;
			hakob.life = 1;
			hakob.timeh = 0;
			if(hakob.y < 250){
				hakob.y = 250
			}
		}
	}

	// Box(end)
	////////////////////////////////////////

	////////////////////////////////////////
	// Enenmy
	if(time.bg<time.game - 500){
		if(time.af == 0 && time.bg%700 > time.ac ){
			time.af = 1;
		}
		if(time.bf == 0 && time.bg%700 > time.bc){
			time.bf = 1;
		}
		if(time.cf == 0 && time.bg%700 > time.cc){
			time.cf = 1;
		} 

		if(time.df == 0 && time.bg%700 > time.dc ){
			time.df = 1;
		}
		if(time.ef == 0 && time.bg%700 > time.ec){
			time.ef = 1;
		}
		if(time.ff == 0 && time.bg%700 > time.fc){
			time.ff = 1;
		} 

		if(time.gf == 0 && time.bg%700 > time.gc ){
			time.gf = 1;
		}
		if(time.hf == 0 && time.bg%700 > time.hc){
			time.hf = 1;
		}
		if(time.if == 0 && time.bg%700 > time.ic){
			time.if = 1;
		} 


		if(time.af == 1 && monster_a.life == 1){
			if(time.bg%20 < 10){
				ctx.drawImage( monsteria,0,0,256,256, monster_a.x, monster_a.y,200,200);
			}
			else{
				ctx.drawImage( monsteria,0,256,256,256, monster_a.x, monster_a.y,200,200);
			}
			monster_a.x -=monsterspeed.a;
			if(player2.y > monster_a.y && monster_a.x>=0 && monster_a.x <899){
				monster_a.y++;
			}
			else{
				monster_a.y--;
			}
		}

		if(time.bf == 1 && monster_b.life == 1){
			if(time.bg%20 < 10){
				ctx.drawImage( monsteria,0,0,256,256, monster_b.x, monster_b.y,200,200);
			}
			else{
				ctx.drawImage( monsteria,0,256,256,256, monster_b.x, monster_b.y,200,200);
			}
			monster_b.x -=monsterspeed.b;
			if(player2.y > monster_b.y && monster_b.x>=0 && monster_b.x <899){
				monster_b.y++;
			}
			else{
				monster_b.y--;
			}
		}

		if(time.cf == 1 && monster_c.life == 1){
			if(time.bg%20 < 10){
				ctx.drawImage( monsteria,0,0,256,256, monster_c.x, monster_c.y,200,200);
			}
			else{
				ctx.drawImage( monsteria,0,256,256,256, monster_c.x, monster_c.y,200,200);
			}
			monster_c.x -=monsterspeed.c;
			if(player.y > monster_c.y && monster_c.x>=0 && monster_c.x <899){
				monster_c.y++;
			}
			else{
				monster_c.y--;
			}
		}

		if(time.df == 1 && monster_d.life == 1){
			if(time.bg%20 < 10){
				ctx.drawImage( monsteria,0,0,256,256, monster_d.x, monster_d.y,200,200);
			}
			else{
				ctx.drawImage( monsteria,0,256,256,256, monster_d.x, monster_d.y,200,200);
			}
			monster_d.x -=monsterspeed.d;
			if(player.y > monster_d.y && monster_d.x>=0 && monster_d.x <899){
				monster_d.y++;
			}
			else{
				monster_d.y--;
			}
		}

		if(monster_a.x <= -170  && time.bg<time.game - 1000){
			monster_a.x =1000;
			monster_a.y =Math.random()*700+200;
			monster_a.y =player2.y;
			monster_a.life = 1
			hp.ia = 0;
			time.af == 0;
			time.ac = Math.random()*500;
			monsterspeed.a = Math.ceil(Math.random()*13)+3;
		}

		if(monster_b.x <= -170  && time.bg<time.game - 1000){
			monster_b.x =1000;
			monster_b.y =Math.random()*700+200;
			monster_b.y =player2.y;
			monster_b.life = 1
			hp.ib = 0;
			time.bf == 0;
			time.bc = Math.random()*500;
			monsterspeed.b = Math.ceil(Math.random()*13)+3;
		}

		if(monster_c.x <= -170  && time.bg<time.game - 1000 ){
			monster_c.x =1000;
			monster_c.y =Math.random()*700+200;
			monster_c.y =player.y;
			monster_c.life = 1
			hp.ic = 0;
			time.cf == 0;
			time.cc = Math.random()*500;
			monsterspeed.c = Math.ceil(Math.random()*13)+3;
		}
		if(monster_d.x <= -170  && time.bg<time.game - 1000 ){
			monster_d.x =1000;
			monster_d.y =Math.random()*700+200;
			monster_d.y =player.y;
			monster_d.life = 1
			hp.id = 0;
			time.df == 0;
			time.dc = Math.random()*500;
			monsterspeed.d = Math.ceil(Math.random()*13)+3;
		}

	}

	///////////////////////////////////////////
	// Player Move

	// Jump

	if(key.jump == true && hp.player != 0){


		if(player.jump ==4){
			jump_sound();
		}

		player.jump+=2;
		if(player.jump < 10){
			player.y -= 28;
		}
		if(player.jump < 20){
			player.y += 10;
		}
		ctx.drawImage( weapon.img,0,0,180,290, player.x+87, player.y+18,70,120);
		ctx.drawImage( player.img,0,582,180,290, player.x, player.y,120,210);
		
		if(player.jump >20){
			player.jump = 0;
		}
	}


	//////////////////////////////////
	// Attack
	else if(key.attack == true && hp.player != 0){
		weapon.time+=2;
		if(weapon.time == 4){
			attack_sound();
		}
		if(weapon.time < 10){
			ctx.drawImage( weapon_a,0,0,230,240, player.x+92, player.y+48,100,120);
			ctx.drawImage( player.img,181,0,180,290, player.x, player.y,120,210);
			
		}
		else{
			ctx.drawImage( weapon.img,0,0,180,290, player.x+94, player.y+18,70,120);
			ctx.drawImage( player.img,0,0,180,290, player.x, player.y,120,210);
			
		}
	}

	
	//////////////////////////////////
	// Walk

	else if((key.right || key.left || key.up || key.down == true) && hp.player != 0){
		if (player.x%16 ==0){
			ctx.drawImage( weapon.img,0,0,180,290, player.x+94, player.y+18,70,120);
			ctx.drawImage( player.img,0,0,180,290, player.x, player.y,120,210);
			
		}
		else{
			ctx.drawImage( weapon.img,0,0,180,290, player.x+94, player.y+18,70,120);
			ctx.drawImage( player.img,0,291,180,290, player.x, player.y,120,210);
			
		}
	}

	else
	{	
		if(hp.player != 0){
			ctx.drawImage( weapon.img,0,0,180,290, player.x+94, player.y+18,70,120);
			ctx.drawImage( player.img,0,0,180,290, player.x, player.y,120,210);
		}


	}

	


	///////////////////////////////////////////
	// Player2 Move
	// Jump

	if(key.jump2 == true && hp.player2 != 0){


		if(player2.jump ==4){
			jump_sound();
		}

		player2.jump+=2;
		if(player2.jump < 10){
			player2.y -= 28;
		}
		if(player2.jump < 20){
			player2.y += 10;
		}
		ctx.drawImage( weapon2,0,0,94,188, player2.x+97, player2.y-7,70,120);
		ctx.drawImage( player2.img,0,582,180,290, player2.x, player2.y,120,210);

		if(player2.jump >20){
			player2.jump = 0;
		}
	}

	//////////////////////////////////
	// Attack
	else if(key.attack2 == true && hp.player2 != 0){
		weapon.time2+=2;
		if(weapon.time2 == 4){
			attack_sound();
		}
		if(weapon.time2 < 10){
			ctx.drawImage( weapon2_a,0,0,240,240, player2.x+80, player2.y+30,100,120);
			ctx.drawImage( player2.img,181,0,180,290, player2.x, player2.y,120,210);

		}
		else{
			ctx.drawImage( weapon2,0,0,94,188, player2.x+97, player2.y,70,120);
			ctx.drawImage( player2.img,0,0,180,290, player2.x, player2.y,120,210);

		}
	}

	//////////////////////////////////
	// Walk

	else if((key.right2 || key.left2 || key.up2 || key.down2 == true) && hp.player2 != 0){
		if (player2.x%16 ==0){
			ctx.drawImage( weapon2,0,0,94,188, player2.x+97, player2.y,70,120);
			ctx.drawImage( player2.img,0,0,180,290, player2.x, player2.y,120,210);

		}
		else{
			ctx.drawImage( weapon2,0,0,94,188, player2.x+97, player2.y,70,120);
			ctx.drawImage( player2.img,0,291,180,290, player2.x, player2.y,120,210);

		}
	}

	else
	{
		if(hp.player2 != 0){
			ctx.drawImage( weapon2,0,0,94,188, player2.x+97, player2.y,70,120);
			ctx.drawImage( player2.img,0,0,180,290, player2.x, player2.y,120,210);
		}

	}


	// Player Move(end)
	///////////////////////////////////////////
	

	////////////////////////////////////
	// Hit Flg
	if(((player.x < (monster_c.x+50)+50)&&(player.x > (monster_c.x+50)-50)) && 
	((player.y > (monster_c.y-30)-30)&&(player.y < (monster_c.y+10)+30)) && monster_c.life == 1
	&& hp.player != 0){
		ctx.drawImage( damageimg,0,0,132,128, player.x+30, player.y,82,78);

		hp.player-=1;

		if(sound_flag.c == 0){
			damage_sound();
			sound_flag.c = 1;
			sound_time.c = time.bg;
		}
		if(sound_time.c+60<time.bg){
			sound_flag.c = 0;
		}
	}
	if(((player.x < (monster_b.x+50)+50)&&(player.x > (monster_b.x+50)-50)) && 
	((player.y > (monster_b.y-30)-30)&&(player.y < (monster_b.y+10)+30)) && monster_b.life == 1
	&& hp.player != 0){
		ctx.drawImage( damageimg,0,0,132,128, player.x+30, player.y,82,78);
		hp.player-=1;

		if(sound_flag.b == 0){
			damage_sound();
			sound_flag.b = 1;
			sound_time.b = time.bg;
		}
		if(sound_time.b+60<time.bg){
			sound_flag.b = 0;
		}
	}
	if(((player.x < (monster_a.x+50)+50)&&(player.x > (monster_a.x+50)-50)) && 
	((player.y > (monster_a.y-30)-30)&&(player.y < (monster_a.y+10)+30)) && monster_a.life == 1
	&& hp.player != 0){
		ctx.drawImage( damageimg,0,0,132,128, player.x+30, player.y,82,78);
		hp.player-=1;

		if(sound_flag.a == 0){
			damage_sound();
			sound_flag.a = 1;
			sound_time.a = time.bg;
		}
		if(sound_time.a+60<time.bg){
			sound_flag.a = 0;
		}
	}
	if(((player.x < (monster_d.x+50)+50)&&(player.x > (monster_d.x+50)-50)) && 
	((player.y > (monster_d.y-30)-30)&&(player.y < (monster_d.y+10)+30)) && monster_d.life == 1
	&& hp.player != 0){
		ctx.drawImage( damageimg,0,0,132,128, player.x+30, player.y,82,78);
		hp.player-=1;

		if(sound_flag.d == 0){
			damage_sound();
			sound_flag.d = 1;
			sound_time.d = time.bg;
		}
		if(sound_time.d+60<time.bg){
			sound_flag.d = 0;
		}
	}

	// Fire Ball

	time.boss++;

	if(((player.x < fire.x+20)&&(player.x > fire.x-30)) && ((player.y > fire.y-120)&&(player.y < (fire.y+10)+10)) && hp.player != 0){
		ctx.drawImage( damageimg,0,0,132,128, player.x+30, player.y,82,78);
		hp.player-=1

		if(sound_flag.fire1 == 0){
			damage_sound();
			sound_flag.fire1 = 1;
			sound_time.fire1 = time.boss;
		}

		if(sound_time.fire1+60<time.boss){
			sound_flag.fire1 = 0;
		}
	}

	if(((player.x < (fire1.x)+20)&&(player.x > fire1.x-30)) && ((player.y > fire1.y-120)&&(player.y < (fire1.y+10)+10)) && hp.player != 0){
		ctx.drawImage( damageimg,0,0,132,128, player.x+30, player.y,82,78);
		hp.player-=1;

		if(sound_flag.fire2 == 0){
			damage_sound();
			sound_flag.fire2 = 1;
			sound_time.fire2 = time.boss;
		}

		if(sound_time.fire2+60<time.boss){
			sound_flag.fire2 = 0;
		}
	}

	if(((player.x < (fire2.x)+20)&&(player.x > fire2.x-30)) && ((player.y > fire2.y-120)&&(player.y < (fire2.y+10)+10)) && hp.player != 0){
		ctx.drawImage( damageimg,0,0,132,128, player.x+30, player.y,82,78);
		hp.player-=1;

		if(sound_flag.fire3 == 0){
			damage_sound();
			sound_flag.fire3 = 1;
			sound_time.fire3 = time.boss;
		}

		if(sound_time.fire3+60<time.boss){
			sound_flag.fire3 = 0;
		}
	}

	if(((player.x < (fire3.x)+20)&&(player.x > fire3.x-30)) && ((player.y > fire3.y-120)&&(player.y < (fire3.y+10)+10)) && hp.player != 0){
		ctx.drawImage( damageimg,0,0,132,128, player.x+30, player.y,82,78);
		hp.player-=1;

		if(sound_flag.fire4 == 0){
			damage_sound();
			sound_flag.fire4 = 1;
			sound_time.fire4 = time.boss;
		}

		if(sound_time.fire4+60<time.boss){
			sound_flag.fire4 = 0;
		}
	}

	if(((player.x < (fire4.x)+20)&&(player.x > fire4.x-30)) && ((player.y > fire4.y-120)&&(player.y < (fire4.y+10)+10)) && hp.player != 0){
		ctx.drawImage( damageimg,0,0,132,128, player.x+30, player.y,82,78);
		hp.player-=1;

		if(sound_flag.fire5 == 0){
			damage_sound();
			sound_flag.fire5 = 1;
			sound_time.fire5 = time.boss;
		}

		if(sound_time.fire5+60<time.boss){
			sound_flag.fire5 = 0;
		}
	}

	// Player2

	if(((player2.x < (monster_c.x+50)+50)&&(player2.x > (monster_c.x+50)-50)) && ((player2.y > (monster_c.y-30)-30)&&
	(player2.y < (monster_c.y+10)+30)) && monster_c.life == 1 && hp.player2 != 0){
		ctx.drawImage( damageimg,0,0,132,128, player2.x+30, player2.y,82,78);

		hp.player2-=1;

		if(sound_flag.c2 == 0){
			damage_sound();
			sound_flag.c2 = 1;
			sound_time.c2 = time.bg;
		}
		if(sound_time.c2+60<time.bg){
			sound_flag.c2 = 0;
		}
	}
	if(((player2.x < (monster_b.x+50)+50)&&(player2.x > (monster_b.x+50)-50)) && ((player2.y > (monster_b.y-30)-30)&&
	(player2.y < (monster_b.y+10)+30)) && monster_b.life == 1 && hp.player2 != 0){
		ctx.drawImage( damageimg,0,0,132,128, player2.x+30, player2.y,82,78);
		hp.player2-=1;

		if(sound_flag.b2 == 0){
			damage_sound();
			sound_flag.b2 = 1;
			sound_time.b2 = time.bg;
		}
		if(sound_time.b2+60<time.bg){
			sound_flag.b2 = 0;
		}
	}
	if(((player2.x < (monster_a.x+50)+50)&&(player2.x > (monster_a.x+50)-50)) && ((player2.y > (monster_a.y-30)-30)&&
	(player2.y < (monster_a.y+10)+30)) && monster_a.life == 1 && hp.player2 != 0){
		ctx.drawImage( damageimg,0,0,132,128, player2.x+30, player2.y,82,78);
		hp.player2-=1;

		if(sound_flag.a2 == 0){
			damage_sound();
			sound_flag.a2 = 1;
			sound_time.a2 = time.bg;
		}
		if(sound_time.a2+60<time.bg){
			sound_flag.a2 = 0;
		}
	}
	if(((player2.x < (monster_d.x+50)+50)&&(player2.x > (monster_d.x+50)-50)) && ((player2.y > (monster_d.y-30)-30)&&
	(player2.y < (monster_d.y+10)+30)) && monster_d.life == 1 && hp.player2 != 0){
		ctx.drawImage( damageimg,0,0,132,128, player2.x+30, player2.y,82,78);
		hp.player2-=1;

		if(sound_flag.d2 == 0){
			damage_sound();
			sound_flag.d2 = 1;
			sound_time.d2 = time.bg;
		}
		if(sound_time.d2+60<time.bg){
			sound_flag.d2 = 0;
		}
	}

	//Fire Ball

	if(((player2.x < fire.x+20)&&(player2.x > fire.x-30)) && ((player2.y > fire.y-120)&&(player2.y < (fire.y+10)+10)) && hp.player2 != 0){
		ctx.drawImage( damageimg,0,0,132,128, player2.x+30, player2.y,82,78);
		hp.player2-=1

		if(sound_flag.fire12 == 0){
			damage_sound();
			sound_flag.fire12 = 1;
			sound_time.fire12 = time.boss;
		}

		if(sound_time.fire12+60<time.boss){
			sound_flag.fire12 = 0;
		}
	}

	if(((player2.x < (fire1.x)+20)&&(player2.x > fire1.x-30)) && ((player2.y > fire1.y-120)&&(player2.y < (fire1.y+10)+10)) && hp.player2 != 0){
		ctx.drawImage( damageimg,0,0,132,128, player2.x+30, player2.y,82,78);
		hp.player2-=1;

		if(sound_flag.fire22 == 0){
			damage_sound();
			sound_flag.fire22 = 1;
			sound_time.fire22 = time.boss;
		}

		if(sound_time.fire22+60<time.boss){
			sound_flag.fire22 = 0;
		}
	}

	if(((player2.x < (fire2.x)+20)&&(player2.x > fire2.x-30)) && ((player2.y > fire2.y-120)&&(player2.y < (fire2.y+10)+10)) && hp.player2 != 0){
		ctx.drawImage( damageimg,0,0,132,128, player2.x+30, player2.y,82,78);
		hp.player2-=1;

		if(sound_flag.fire32 == 0){
			damage_sound();
			sound_flag.fire32 = 1;
			sound_time.fire32 = time.boss;
		}

		if(sound_time.fire32+60<time.boss){
			sound_flag.fire32 = 0;
		}
	}

	if(((player2.x < (fire3.x)+20)&&(player2.x > fire3.x-30)) && ((player2.y > fire3.y-120)&&(player2.y < (fire3.y+10)+10)) && hp.player2 != 0){
		ctx.drawImage( damageimg,0,0,132,128, player2.x+30, player2.y,82,78);
		hp.player2-=1;

		if(sound_flag.fire42 == 0){
			damage_sound();
			sound_flag.fire42 = 1;
			sound_time.fire42 = time.boss;
		}

		if(sound_time.fire42+60<time.boss){
			sound_flag.fire42 = 0;
		}
	}

	if(((player2.x < (fire4.x)+20)&&(player2.x > fire4.x-30)) && ((player2.y > fire4.y-120)&&(player2.y < (fire4.y+10)+10)) && hp.player2 != 0){
		ctx.drawImage( damageimg,0,0,132,128, player2.x+30, player2.y,82,78);
		hp.player2-=1;

		if(sound_flag.fire52 == 0){
			damage_sound();
			sound_flag.fire52 = 1;
			sound_time.fire52 = time.boss;
		}

		if(sound_time.fire52+60<time.boss){
			sound_flag.fire52 = 0;
		}
	}

	// Hit Flg(end)
	////////////////////////////////////


	////////////////////////////////////
	// Atk Hit Flg

	if(key.attack ==true && atk.monc == 0 && ((player.x+50)<(monster_c.x+150)) &&
	((player.x+50)>(monster_c.x-120)) &&
	((player.y+50)<(monster_c.y+100)) &&
	((player.y+50)>(monster_c.y-70)) && hp.player != 0){
		monster_c.life = 0;
		//ctx.drawImage( damageimg,0,0,132,128, player.x+90, player.y+60,82,78);
		//key.attack =false;
		monster_c.atx = monster_c.x;
		monster_c.aty = monster_c.y;
		atk.monc = 1;

		hitan_sound();
	}


	if(monster_c.life == 0){
		if( hp.ic>=120){
			//monster_c.x = 9999;
			//monster_c.y = 9999;
		}
		hp.ic++;
		monster_c.x -=time.pace;

		if(hp.ic == 5){
			mounstercounter++;
		}

		//died_c.style.opacity =hp.ic;
		if(hp.ic < 20){
			die.cx = 0;
			die.cy = 0;
		}
		else if(hp.ic < 30){
			die.cx = 512;
			die.cy = 0;
		}
		else if(hp.ic < 40){
			die.cx = 0;
			die.cy = 256;
		}
		else if(hp.ic < 50){
			die.cx = 512;
			die.cy = 256;
		}
		else if(hp.ic < 60){
			die.cx = 0;
			die.cy = 512;
		}
		else if(hp.ic < 70){
			die.cx = 512;
			die.cy = 512;
		}
		else if(hp.ic < 80){
			die.cx = 256;
			die.cy = 0;
		}
		else if(hp.ic < 90){
			die.cx = 768;
			die.cy = 0;
		}
		else if(hp.ic < 100){
			die.cx = 256;
			die.cy = 256;
		}
		else if(hp.ic < 110){
			die.cx = 768;
			die.cy = 256;
		}
		else{
			die.cx = 256;
			die.cy = 512;
		}
		if(hp.ic < 120){
			ctx.drawImage( died_c,die.cx,die.cy,256,256, monster_c.x, monster_c.y,200,200);
		}
		else{
			monster_c.x = -10000;
		}
		if(hp.ic <10){
			ctx.drawImage( damageimg,0,0,132,128, monster_c.atx+60, monster_c.aty+40,82,78);
		}
	}

	if(key.attack ==true && atk.monb == 0 && ((player.x+50)<(monster_b.x+150)) &&
	((player.x+50)>(monster_b.x-120)) &&
	((player.y+50)<(monster_b.y+100)) &&
	((player.y+50)>(monster_b.y-70)) && hp.player != 0){
		monster_b.life = 0;
		//ctx.drawImage( damageimg,0,0,132,128, player.x+90, player.y+60,82,78);
		//key.attack =false;
		monster_b.atx = monster_b.x;
		monster_b.aty = monster_b.y;
		atk.monb = 1;

		hitan_sound();
	}
	if(monster_b.life == 0){
		if( hp.ib>=120){
			//monster_b.x = 9999;
			//monster_b.y = 9999;
		}
		hp.ib++;
		monster_b.x -=time.pace;
		//died_b.style.opacity =hp.ib;

		if(hp.ib == 5){
			mounstercounter++;
		}

		if(hp.ib < 20){
			die.bx = 0;
			die.by = 0;
		}
		else if(hp.ib < 30){
			die.bx = 512;
			die.by = 0;
		}
		else if(hp.ib < 40){
			die.bx = 0;
			die.by = 256;
		}
		else if(hp.ib < 50){
			die.bx = 512;
			die.by = 256;
		}
		else if(hp.ib < 60){
			die.bx = 0;
			die.by = 512;
		}
		else if(hp.ib < 70){
			die.bx = 512;
			die.by = 512;
		}
		else if(hp.ib < 80){
			die.bx = 256;
			die.by = 0;
		}
		else if(hp.ib < 90){
			die.bx = 768;
			die.by = 0;
		}
		else if(hp.ib < 100){
			die.bx = 256;
			die.by = 256;
		}
		else if(hp.ib < 110){
			die.bx = 768;
			die.by = 256;
		}
		else{
			die.bx = 256;
			die.by = 512;
		}

		if(hp.ib < 120){
			ctx.drawImage( died_b,die.bx,die.by,256,256, monster_b.x, monster_b.y,200,200);
		}
		else{
			//monster_b.x = -1;
		}

		if(hp.ib <10){
			ctx.drawImage( damageimg,0,0,132,128, monster_b.atx+60, monster_b.aty+40,82,78);
		}
	}

	if(key.attack ==true && atk.mona == 0 && ((player.x+50)<(monster_a.x+150)) &&
	((player.x+50)>(monster_a.x-120)) &&
	((player.y+50)<(monster_a.y+100)) &&
	((player.y+50)>(monster_a.y-70)) && hp.player != 0){
		monster_a.life = 0;
		//ctx.drawImage( damageimg,0,0,132,128, player.x+90, player.y+60,82,78);
		monster_a.atx = monster_a.x;
		monster_a.aty = monster_a.y;
		atk.mona = 1;
		hitan_sound();
	}
	if(monster_a.life == 0){
		hp.ia++;
		monster_a.x -=time.pace;
		
		if(hp.ia == 5){
			mounstercounter++;
		}

		if(hp.ia < 20){
			die.ax = 0;
			die.ay = 0;
		}
		else if(hp.ia < 30){
			die.ax = 512;
			die.ay = 0;
		}
		else if(hp.ia < 40){
			die.ax = 0;
			die.ay = 256;
		}
		else if(hp.ia < 50){
			die.ax = 512;
			die.ay = 256;
		}
		else if(hp.ia < 60){
			die.ax = 0;
			die.ay = 512;
		}
		else if(hp.ia < 70){
			die.ax = 512;
			die.ay = 512;
		}
		else if(hp.ia < 80){
			die.ax = 256;
			die.ay = 0;
		}
		else if(hp.ia < 90){
			die.ax = 768;
			die.ay = 0;
		}
		else if(hp.ia < 100){
			die.ax = 256;
			die.ay = 256;
		}
		else if(hp.ia < 110){
			die.ax = 768;
			die.ay = 256;
		}
		else{
			die.ax = 256;
			die.ay = 512;
		}
		if(hp.ia < 120){
			ctx.drawImage( died_a,die.ax,die.ay,256,256, monster_a.x, monster_a.y,200,200);
		}
		else{
			
		}


		if(hp.ia <10){
			ctx.drawImage( damageimg,0,0,132,128, monster_a.atx+60, monster_a.aty+40,82,78);
		}

	}


	// Die
	if(key.attack ==true && atk.mond == 0 && ((player.x+50)<(monster_d.x+150)) &&
	((player.x+50)>(monster_d.x-120)) &&
	((player.y+50)<(monster_d.y+100)) &&
	((player.y+50)>(monster_d.y-70)) && monster_d.life ==1 && hp.player != 0){
		monster_d.life = 0;
		//key.attack =false;
		//ctx.drawImage( damageimg,0,0,132,128, player.x+90, player.y+60,82,78);

		monster_d.atx = monster_d.x;
		monster_d.aty = monster_d.y;
		atk.mond = 0;

		hitan_sound();

	}
	if(monster_d.life == 0){
		hp.id++;
		monster_d.x -=time.pace;
		
		if(hp.id == 5){
			mounstercounter++;
		}
		if(hp.id < 20){
			die.dx = 0;
			die.dy = 0;
		}
		else if(hp.id < 30){
			die.dx = 512;
			die.dy = 0;
		}
		else if(hp.id < 40){
			die.dx = 0;
			die.dy = 256;
		}
		else if(hp.id < 50){
			die.dx = 512;
			die.dy = 256;
		}
		else if(hp.id < 60){
			die.dx = 0;
			die.dy = 512;
		}
		else if(hp.id < 70){
			die.dx = 512;
			die.dy = 512;
		}
		else if(hp.id < 80){
			die.dx = 256;
			die.dy = 0;
		}
		else if(hp.id < 90){
			die.dx = 768;
			die.dy = 0;
		}
		else if(hp.id < 100){
			die.dx = 256;
			die.dy = 256;
		}
		else if(hp.id < 110){
			die.dx = 768;
			die.dy = 256;
		}
		else{
			die.dx = 256;
			die.dy = 512;
		}
		if(hp.id < 120){
			ctx.drawImage( died_a,die.dx,die.dy,256,256, monster_d.x, monster_d.y,200,200);
		}
		else{
			//monster_d.x = -1;
		}

		if(hp.id <10){
			ctx.drawImage( damageimg,0,0,132,128, monster_d.atx+60, monster_d.aty+40,82,78);
		}
	}




	////////////////////////////////////
	// P2 Atk Hit Flg

	if(key.attack2 ==true && atk.monc == 0 && ((player2.x+50)<(monster_c.x+150)) &&
	((player2.x+50)>(monster_c.x-120)) &&
	((player2.y+50)<(monster_c.y+100)) &&
	((player2.y+50)>(monster_c.y-70)) && hp.player2 != 0){
		monster_c.life = 0;
		//key.attack =false;
		//ctx.drawImage( damageimg,0,0,132,128, player2.x+90, player2.y+60,82,78);
		monster_c.atx = monster_c.x;
		monster_c.aty = monster_c.y;
		atk.monc = 1;
		hitan_sound();
	}

	if(key.attack2 ==true && atk.monb == 0 && ((player2.x+50)<(monster_b.x+150)) &&
	((player2.x+50)>(monster_b.x-120)) &&
	((player2.y+50)<(monster_b.y+100)) &&
	((player2.y+50)>(monster_b.y-70)) && hp.player2 != 0){
		monster_b.life = 0;
		//key.attack =false;
		ctx.drawImage( damageimg,0,0,132,128, player2.x+90, player2.y+60,82,78);
		monster_b.atx = monster_b.x;
		monster_b.aty = monster_b.y;
		atk.monb = 1;
		hitan_sound();
	}

	if(key.attack2 ==true && atk.mona == 0 && ((player2.x+50)<(monster_a.x+150)) &&
	((player2.x+50)>(monster_a.x-120)) &&
	((player2.y+50)<(monster_a.y+100)) &&
	((player2.y+50)>(monster_a.y-70)) && hp.player2 != 0){
		monster_a.life = 0;
		ctx.drawImage( damageimg,0,0,132,128, player2.x+90, player2.y+60,82,78);
		monster_a.atx = monster_a.x;
		monster_a.aty = monster_a.y;
		atk.mona = 1;

		hitan_sound();
	}

	//Die
	if(key.attack2 ==true && atk.mond == 0 && ((player2.x+50)<(monster_d.x+150)) &&
	((player2.x+50)>(monster_d.x-120)) &&
	((player2.y+50)<(monster_d.y+100)) &&
	((player2.y+50)>(monster_d.y-70)) && monster_d.life ==1 && hp.player2 != 0){
		monster_d.life = 0;
		//key.attack =false;
		ctx.drawImage( damageimg,0,0,132,128, player2.x+90, player2.y+60,82,78);

		monster_d.atx = monster_d.x;
		monster_d.aty = monster_d.y;
		atk.mond = 1;

		hitan_sound();
	}




	////////////////////////////////////
	// Boss Atk Hit Flg 

	if(key.attack ==true && atk.dra == 0 && ((player.x+50)<(1400-time.md+350)) &&
	((player.x+50)>(1400-time.md+50)) &&
	((player.y+50)<(dra.y+400)) &&
	((player.y+50)>(dra.y-50)) && hp.player != 0){
		dra.life = 1;
		atk.dra = 1;

		sound_flag.dra = 1;
		attack2_sound();

	}
	if(dra.life == 1 && time.bg>=time.game ){
		hp.dragon -=((player.atk*1)+1);
		dra.life = 0;
		
	}

	if(sound_flag.dra == 1){
		ctx.drawImage( damageimg,0,0,132,128, player.x+160, player.y+40,82,78);
		sound_time.dra++

		if(sound_time.dra >10){
			sound_flag.dra = 0;
			sound_time.dra = 0;
		}
	}


	//P2

	if(key.attack2 ==true && atk.dra == 0 && ((player2.x+50)<(1400-time.md+350)) &&
	((player2.x+50)>(1400-time.md+50)) &&
	((player2.y+50)<(dra.y+400)) &&
	((player2.y+50)>(dra.y-50)) && hp.player2 != 0){
		dra.life = 1;
		atk.dra = 1;

		sound_flag.dra2 = 1;
		attack2_sound();

	}
	if(dra.life == 1 && time.bg>=time.game ){
		hp.dragon -=((player2.atk*1)+1);
		dra.life = 0;
	}


	if(sound_flag.dra2 == 1){
		ctx.drawImage( damageimg,0,0,132,128, player2.x+160, player2.y+40,82,78);
		sound_time.dra2++

		if(sound_time.dra2 >10){
			sound_flag.dra2 = 0;
			sound_time.dra2 = 0;
		}
	}




	// Boss Atk Hit Flg(end)
	////////////////////////////////////



	////////////////////////////////////
	// Box Hit Flg

	// Box A
	if(key.attack ==true && atk.hakoa == 0 && ((player.x+50)<(hakoa.x+150)) &&
	((player.x+50)>(hakoa.x-130)) &&
	((player.y+50)<(hakoa.y+150)) &&
	((player.y+50)>(hakoa.y-90)) && hakoa.life == 1 && hp.player != 0){
		hakoa.life = 0;
		//key.attack =false;
		//ctx.drawImage( damageimg,0,0,132,128, hakoa.x, hakoa.y,82,78);

		hakoa.atx = hakoa.x;
		hakoa.aty = hakoa.y;
		atk.hakoa = 1;
		if(Math.random() < onigiria.rate && onigiria.life == 0){
			onigiria.life = 1;
			onigiria.x = hakoa.x;
			onigiria.y = hakoa.y;
		}
		crash_sound();
	}

	if(hakoa.life == 0){
		hakoa.x-=time.pace;
		hakoa.timeh++;

		if(hakoa.timeh < 40){
			hakoa.px = 0;
			hakoa.py = 0;
		}
		else if(hakoa.timeh < 60){
			hakoa.px = 0;
			hakoa.py = 128;
		}
		else if(hakoa.timeh < 80){
			hakoa.px = 0;
			hakoa.py = 256;
		}
		else if(hakoa.timeh < 100){
			hakoa.px = 128;
			hakoa.py = 0;
		}
		else{
			hakoa.px = 128;
			hakoa.py = 128;
		}

		if(hakoa.timeh <120){
			ctx.drawImage( hako_an,hakoa.px,hakoa.py,128,128, hakoa.x, hakoa.y,128,128);
		}
		else{
			hakoa.x = -160;
		}

		if(hakoa.timeh<10){
			ctx.drawImage( damageimg,0,0,132,128, hakoa.atx, hakoa.aty,82,78);
		}
	}



	// Box B

	if(key.attack ==true && atk.hakob == 0 && ((player.x+50)<(hakob.x+150)) &&
	((player.x+50)>(hakob.x-130)) &&
	((player.y+50)<(hakob.y+150)) &&
	((player.y+50)>(hakob.y-180)) && hakob.life == 1 && hp.player != 0){
		//key.attack =false;
		hakob.life = 0;
		//ctx.drawImage( damageimg,0,0,132,128, hakob.x, hakob.y,82,78);
		hakob.atx = hakob.x;
		hakob.aty = hakob.y;
		atk.hakob = 1;
		if(Math.random() < sword2.rate && sword2.flag == 0){
			sword2.flag = 1;
			sword2.x = hakob.x +20;
			sword2.y = hakob.y +50;
		}
		crash_sound();
	}

	if(hakob.life == 0){
		hakob.x-=time.pace;
		hakob.timeh++;

		if(hakob.timeh < 40){
			hakob.px = 0;
			hakob.py = 0;
		}
		else if(hakob.timeh < 60){
			hakob.px = 200;
			hakob.py = 0;
		}
		else if(hakob.timeh < 80){
			hakob.px = 400;
			hakob.py = 0;
		}
		else if(hakob.timeh < 100){
			hakob.px = 0;
			hakob.py = 372;
		}
		else{
			hakob.px = 200;
			hakob.py = 372;
		}

		if(hakob.timeh <100){
			ctx.drawImage( hako_bn,hakob.px,hakob.py,200,372, hakob.x, hakob.y,100,186);
		}
		else{
			hakob.x = -160;
		}

		if(hakob.timeh<10){
			ctx.drawImage( damageimg,0,0,132,128, hakob.atx, hakob.aty,82,78);
		}
	}




	////////////////////////////////////
	// Player2

	// Box A
	if(key.attack2 ==true && atk.hakoa == 0 && ((player2.x+50)<(hakoa.x+150)) &&
	((player2.x+50)>(hakoa.x-130)) &&
	((player2.y+50)<(hakoa.y+150)) &&
	((player2.y+50)>(hakoa.y-90)) && hakoa.life == 1 && hp.player2 != 0){
		hakoa.life = 0;
		//key.attack =false;
		//ctx.drawImage( damageimg,0,0,132,128, hakoa.x, hakoa.y,82,78);

		hakoa.atx = hakoa.x;
		hakoa.aty = hakoa.y;
		atk.hakoa = 1;
		if(Math.random() < onigiria.rate && onigiria.life == 0){
			onigiria.life = 1;
			onigiria.x = hakoa.x;
			onigiria.y = hakoa.y;
		}
		crash_sound();
	}





	// Box B

	if(key.attack2 ==true && atk.hakob == 0 && ((player2.x+50)<(hakob.x+150)) &&
	((player2.x+50)>(hakob.x-130)) &&
	((player2.y+50)<(hakob.y+150)) &&
	((player2.y+50)>(hakob.y-180)) && hakob.life == 1 && hp.player2 != 0){
		//key.attack =false;
		hakob.life = 0;
		//ctx.drawImage( damageimg,0,0,132,128, hakob.x, hakob.y,82,78);
		hakob.atx = hakob.x;
		hakob.aty = hakob.y;
		atk.hakob = 1;
		if(Math.random() < sword2.rate && sword2.flag == 0){
			sword2.flag = 1;
			sword2.x = hakob.x +20;
			sword2.y = hakob.y +50;
		}
		crash_sound();
	}






	// Box Atk Hit Flg(end)
	////////////////////////////////////


	////////////////////////////////////
	// Goods

	// 🍙
	if(onigiria.life == 1){
		onigiria.x -=time.pace;
		ctx.drawImage( onigiri,0,0,128,128, onigiria.x, onigiria.y,100,100);
	}

	if(onigiria.x <= -150  && time.bg<time.game - 1000 ){
		onigiria.life = 0;
	}


	if(player.x < onigiria.x+100 && player.x > onigiria.x-150 && player.y > onigiria.y-100 &&
		 player.y < onigiria.y+40 && onigiria.life == 1 && hp.player != 0){
		onigiria.life = 0;
		hp.player +=100;
		hp_sound();
	}

	// Player2
	if(player2.x < onigiria.x+100 && player2.x > onigiria.x-150 && player2.y > onigiria.y-100 &&
		 player2.y < onigiria.y+40 && onigiria.life == 1 && hp.player2 != 0){
		onigiria.life = 0;
		hp.player2 +=100;
		hp_sound();
	}

	// Weapon
	if(sword2.flag == 1){
		sword2.x -=time.pace;
		ctx.drawImage( weapon_sword2,0,0,78,268, sword2.x, sword2.y,40,100);
	}

	if(onigiri.x <= -150  && time.bg<time.game - 1000 ){
		sword2.flag = 0;
	}


	if(player.x < sword2.x+100 && player.x > sword2.x-150 && player.y > sword2.y-130 &&
		 player.y < sword2.y+40 && sword2.flag == 1 && hp.player != 0){
		sword2.flag = 0;
		player.atk++;
		levelup_sound();
	}

	// Player2

	if(player2.x < sword2.x+100 && player2.x > sword2.x-150 && player2.y > sword2.y-130 &&
		 player2.y < sword2.y+40 && sword2.flag == 1 && hp.player2 != 0){
		sword2.flag = 0;
		player2.atk++;
		levelup_sound();
	}
	////////////////////////////////////
	// Attk Hit Flg(end)
	////////////////////////////////////




	///////////////////////////////////
	// Hp

	if(hp.player <=0){
		hp.player = 0;
	}
	if(hp.player > 150){
		hp.player = 150;
	}

	// Player2
	if(hp.player2 <=0){
		hp.player2 = 0;
	}
	if(hp.player2 > 150){
		hp.player2 = 150;
	}
	// Player1
	if(hp.player >70){
		hpline.fillStyle="rgb(34, 139, 34)";
	}
	else{
		hpline.fillStyle="rgb(255, 0, 0)";
	}
	
	hpline.strokeRect(hp.icon_x+50, hp.icon_y, 180 , 27);
	hpline.fillRect(hp.icon_x +51,hp.icon_y+1,hp.player*1.2,25);
	hpline.fillStyle="rgb(34, 139, 34)";
	ctx.drawImage( hpicon,20,20,108,108, hp.icon_x, hp.icon_y-32,90,90);

	ctx.drawImage( weapon_sword2,0,0,78,268, hp.icon_x +260, hp.icon_y-35,30,80);
	ctx.font = "48px arial black";
	ctx.fillStyle="rgb(255,255,255)";
	ctx.fillText(player.atk, hp.icon_x +300, hp.icon_y+30);
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.strokeText(player.atk, hp.icon_x +300, hp.icon_y+30); 

	// Player2
	hpline.strokeRect(hp.icon_x2+50, hp.icon_y2, 180 , 27);
	if(hp.player2 >70){
		hpline.fillStyle="rgb(34, 139, 34)";
	}
	else{
		hpline.fillStyle="rgb(255, 0, 0)";
	}
	hpline.fillRect(hp.icon_x2 +51,hp.icon_y2+1,hp.player2*1.2,25);
	hpline.fillStyle="rgb(34, 139, 34)";
	ctx.drawImage( hpicon2,20,20,108,108, hp.icon_x2+10, hp.icon_y2-25,70,70);

	ctx.drawImage( weapon_sword2,0,0,78,268, hp.icon_x2 +260, hp.icon_y2-35,30,80);
	ctx.font = "48px arial black";
	ctx.fillStyle="rgb(255,255,255)";
	ctx.fillText(player2.atk, hp.icon_x2 +300, hp.icon_y2+30);
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.strokeText(player2.atk, hp.icon_x2 +300, hp.icon_y2+30); 

	ctx.drawImage( monsteria,0,0,256,256, hp.icon_x, hp.icon_y + 30,90,90);
	ctx.font = "48px arial black";
	ctx.fillStyle="rgb(255,255,255)";
	ctx.fillText(mounstercounter, hp.icon_x +90, hp.icon_y+95);
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.strokeText(mounstercounter, hp.icon_x +90, hp.icon_y+95); 

	if(hp.dragon <=0){
		hp.dragon = 0;
	}
	if(time.md == 800){
		hpline.strokeRect(750, 30, 240, 27);
		if(hp.dragon >70){
			hpline.fillStyle="rgb(34, 139, 34)";
		}
		else{
			hpline.fillStyle="rgb(255, 0, 0)";
		}
		hpline.fillRect(751,31,hp.dragon*1.2,25);
		ctx.drawImage( dragon,20,20,350,280, 700, 15,70,50);
	}
	
	///////////////////////////////////

	addEventListener("keydown", keydownfunc, false);
	addEventListener("keyup", keyupfunc, false);
 
	// If the directional key is pressed, the Player moves
	if ( player.move === 0  && hp.player != 0) {
		if ( key.left === true ) {
			player.move = 32;
			key.push = 'left';
		}
		if ( key.up === true ) {
			player.move = 32;
			key.push = 'up';
		}
		if ( key.right === true ) {
			player.move = 32;
			key.push = 'right';
		}
		if ( key.down === true ) {
			player.move = 32;
			key.push = 'down';
		}
	}
	// Player2
	if ( player2.move === 0 && hp.player2 != 0) {
		if ( key.left2 === true ) {
			player2.move = 32;
			key.push2 = 'left';
		}
		if ( key.up2 === true ) {
			player2.move = 32;
			key.push2 = 'up';
		}
		if ( key.right2 === true ) {
			player2.move = 32;
			key.push2 = 'right';
		}
		if ( key.down2 === true ) {
			player2.move = 32;
			key.push2 = 'down';
		}
	}

	// If player.move is greater than 0, the movement continues by 4px
	if (player.move > 0 && (key.right || key.left || key.up || key.down == true)) {
		player.move -= 4;
		if ( key.push === 'left' ) player.x -= 4;
		if ( key.push === 'up' ) player.y -= 4;
		if ( key.push === 'right' ) player.x += 4;
		if ( key.push === 'down' ) player.y += 4;
	}

	// Player2
	if (player2.move > 0 && (key.right2 || key.left2 || key.up2 || key.down2 == true)) {
		player2.move -= 4;
		if ( key.push2 === 'left' ) player2.x -= 4;
		if ( key.push2 === 'up' ) player2.y -= 4;
		if ( key.push2 === 'right' ) player2.x += 4;
		if ( key.push2 === 'down' ) player2.y += 4;
	}

	if((hp.player == 0 && hp.player2 == 0) || hp.dragon == 0){

		if(hp.player == 0 && hp.player2 == 0){
			cancelAnimationFrame(main);
			//ctx.clearRect(0, 0, canvas.width, canvas.height);
			if(time.md > 0){
				boss_s.pause();
			}
			battle_s.pause();
			fail_sound();
			canvas.addEventListener('load', gg(), false);
		}

	if(hp.dragon == 0){
			boss_s.pause();
			victory_sound();
			
			if(jikanflag == 2){
				var jikane= new Date();
				hour_end = jikane.getHours();
				minute_end = jikane.getMinutes();
				second_end = jikane.getSeconds();
				jikanflag = 3;
			}
			score_min = Math.floor(((hour_end - hour_start)*3600+(minute_end - minute_start)*60 + (second_end - second_start))/60);
			score_sec = ((hour_end - hour_start)*3600+(minute_end - minute_start)*60 + (second_end - second_start))%60;
			//ctx.clearRect(0, 0, canvas.width, canvas.height);
			cancelAnimationFrame(dual);
			canvas.addEventListener('load', victory(), false);
		}
	}
	else{
		requestAnimationFrame( dual );
	}
}

function ranking(){
	ctx.drawImage(bg.img,0,0,1000,800,0,0,1000,800);

	ctx.font = "96px arial black";
	ctx.fillStyle="rgb(255,255,255)";
	ctx.fillText("Racking", 300, 100);
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.strokeText("Racking", 300, 100); 

	ctx.fillStyle = "rgba(" + [255, 255, 255, 0.5] + ")";
	ctx.fillRect(rankbox.x,rankbox.y,rankbox.size_x,rankbox.size_y);
	ctx.strokeRect(rankbox.x,rankbox.y,rankbox.size_x,rankbox.size_y);


	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(255,255,255)";
	ctx.fillText("Name", rankbox.x+80, rankbox.y+35);
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.strokeText("Name", rankbox.x+80, rankbox.y+35); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(255,255,255)";
	ctx.fillText("Score", rankbox.x+250, rankbox.y+35);
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.strokeText("Score", rankbox.x+250, rankbox.y+35); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(255,255,255)";
	ctx.fillText("Time", rankbox.x+420, rankbox.y+35);
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.strokeText("Time", rankbox.x+420, rankbox.y+35); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(255,255,255)";
	ctx.fillText("Date", rankbox.x+590, rankbox.y+35);
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.strokeText("Date", rankbox.x+590, rankbox.y+35); 

	// 1
	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText("1", rankbox.x+10, rankbox.y+75);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText("1", rankbox.x+10, rankbox.y+75); 

	//var sampleStr = getCookie("name")[0];

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("name[0]"), rankbox.x+80, rankbox.y+75);
	ctx.strokeStyle = "rgb(50,50,50)";
	ctx.strokeText(getCookie("name[0]"), rankbox.x+80, rankbox.y+75); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("score[0]"), rankbox.x+250, rankbox.y+75);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("score[0]"), rankbox.x+250, rankbox.y+75); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("time[0]").substring(3,8), rankbox.x+420, rankbox.y+75);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("time[0]").substring(3,8), rankbox.x+420, rankbox.y+75); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("date[0]").substring(5,10), rankbox.x+590, rankbox.y+75);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("date[0]").substring(5,10), rankbox.x+590, rankbox.y+75); 

	// 2
	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText("2", rankbox.x+10, rankbox.y+115);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText("2", rankbox.x+10, rankbox.y+115); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("name[1]"), rankbox.x+80, rankbox.y+115);
	ctx.strokeStyle = "rgb(50,50,50)";
	ctx.strokeText(getCookie("name[1]"), rankbox.x+80, rankbox.y+115); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("score[1]"), rankbox.x+250, rankbox.y+115);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("score[1]"), rankbox.x+250, rankbox.y+115); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("time[1]").substring(3,8), rankbox.x+420, rankbox.y+115);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("time[1]").substring(3,8), rankbox.x+420, rankbox.y+115); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("date[1]").substring(5,10), rankbox.x+590, rankbox.y+115);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("date[1]").substring(5,10), rankbox.x+590, rankbox.y+115); 

	// 3
	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText("3", rankbox.x+10, rankbox.y+155);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText("3", rankbox.x+10, rankbox.y+155); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("name[2]"), rankbox.x+80, rankbox.y+155);
	ctx.strokeStyle = "rgb(50,50,50)";
	ctx.strokeText(getCookie("name[2]"), rankbox.x+80, rankbox.y+155); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("score[2]"), rankbox.x+250, rankbox.y+155);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("score[2]"), rankbox.x+250, rankbox.y+155); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("time[2]").substring(3,8), rankbox.x+420, rankbox.y+155);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("time[2]").substring(3,8), rankbox.x+420, rankbox.y+155); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("date[2]").substring(5,10), rankbox.x+590, rankbox.y+155);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("date[2]").substring(5,10), rankbox.x+590, rankbox.y+155); 

	// 4
	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText("4", rankbox.x+10, rankbox.y+195);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText("4", rankbox.x+10, rankbox.y+195); 


	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("name[3]"), rankbox.x+80, rankbox.y+195);
	ctx.strokeStyle = "rgb(50,50,50)";
	ctx.strokeText(getCookie("name[3]"), rankbox.x+80, rankbox.y+195); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("score[3]"), rankbox.x+250, rankbox.y+195);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("score[3]"), rankbox.x+250, rankbox.y+195); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("time[3]").substring(3,8), rankbox.x+420, rankbox.y+195);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("time[3]").substring(3,8), rankbox.x+420, rankbox.y+195); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("date[3]").substring(5,10), rankbox.x+590, rankbox.y+195);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("date[3]").substring(5,10), rankbox.x+590, rankbox.y+195); 
	// 5
	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText("5", rankbox.x+10, rankbox.y+235);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText("5", rankbox.x+10, rankbox.y+235); 


	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("name[4]"), rankbox.x+80, rankbox.y+235);
	ctx.strokeStyle = "rgb(50,50,50)";
	ctx.strokeText(getCookie("name[4]"), rankbox.x+80, rankbox.y+235); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("score[4]"), rankbox.x+250, rankbox.y+235);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("score[4]"), rankbox.x+250, rankbox.y+235); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("time[4]").substring(3,8), rankbox.x+420, rankbox.y+235);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("time[4]").substring(3,8), rankbox.x+420, rankbox.y+235); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("date[4]").substring(5,10), rankbox.x+590, rankbox.y+235);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("date[4]").substring(5,10), rankbox.x+590, rankbox.y+235); 
	// 6
	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText("6", rankbox.x+10, rankbox.y+275);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText("6", rankbox.x+10, rankbox.y+275); 


	ctx.font = "30px arial black ";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("name[5]"), rankbox.x+80, rankbox.y+275);
	ctx.strokeStyle = "rgb(50,50,50)";
	ctx.font = "30px arial black";
	ctx.strokeText(getCookie("name[5]"), rankbox.x+80, rankbox.y+275); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("score[5]"), rankbox.x+250, rankbox.y+275);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("score[5]"), rankbox.x+250, rankbox.y+275); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("time[5]").substring(3,8), rankbox.x+420, rankbox.y+275);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("time[5]").substring(3,8), rankbox.x+420, rankbox.y+275); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("date[5]").substring(5,10), rankbox.x+590, rankbox.y+275);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("date[5]").substring(5,10), rankbox.x+590, rankbox.y+275); 
	// 7
	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText("7", rankbox.x+10, rankbox.y+315);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText("7", rankbox.x+10, rankbox.y+315); 


	ctx.font = "30px arial black ";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("name[6]"), rankbox.x+80, rankbox.y+315);
	ctx.strokeStyle = "rgb(50,50,50)";
	ctx.font = "30px arial black";
	ctx.strokeText(getCookie("name[6]"), rankbox.x+80, rankbox.y+315); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("score[6]"), rankbox.x+250, rankbox.y+315);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("score[6]"), rankbox.x+250, rankbox.y+315); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("time[6]").substring(3,8), rankbox.x+420, rankbox.y+315);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("time[6]").substring(3,8), rankbox.x+420, rankbox.y+315); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("date[6]").substring(5,10), rankbox.x+590, rankbox.y+315);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("date[6]").substring(5,10), rankbox.x+590, rankbox.y+315); 
	// 8
	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText("8", rankbox.x+10, rankbox.y+355);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText("8", rankbox.x+10, rankbox.y+355); 


	ctx.font = "30px arial black ";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("name[7]"), rankbox.x+80, rankbox.y+355);
	ctx.strokeStyle = "rgb(50,50,50)";
	ctx.font = "30px arial black";
	ctx.strokeText(getCookie("name[7]"), rankbox.x+80, rankbox.y+355); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("score[7]"), rankbox.x+250, rankbox.y+355);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("score[7]"), rankbox.x+250, rankbox.y+355); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("time[7]").substring(3,8), rankbox.x+420, rankbox.y+355);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("time[7]").substring(3,8), rankbox.x+420, rankbox.y+355); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("date[7]").substring(5,10), rankbox.x+590, rankbox.y+355);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("date[7]").substring(5,10), rankbox.x+590, rankbox.y+355); 
	// 9
	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText("9", rankbox.x+10, rankbox.y+395);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText("9", rankbox.x+10, rankbox.y+395); 


	ctx.font = "30px arial black ";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("name[8]"), rankbox.x+80, rankbox.y+395);
	ctx.strokeStyle = "rgb(50,50,50)";
	ctx.font = "30px arial black";
	ctx.strokeText(getCookie("name[8]"), rankbox.x+80, rankbox.y+395); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("score[8]"), rankbox.x+250, rankbox.y+395);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("score[8]"), rankbox.x+250, rankbox.y+395); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("time[8]").substring(3,8), rankbox.x+420, rankbox.y+395);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("time[8]").substring(3,8), rankbox.x+420, rankbox.y+395); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("date[8]").substring(5,10), rankbox.x+590, rankbox.y+395);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("date[8]").substring(5,10), rankbox.x+590, rankbox.y+395); 
	// 10
	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText("10", rankbox.x+10, rankbox.y+435);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText("10", rankbox.x+10, rankbox.y+435); 


	ctx.font = "30px arial black ";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("name[9]"), rankbox.x+80, rankbox.y+435);
	ctx.strokeStyle = "rgb(50,50,50)";
	ctx.font = "30px arial black";
	ctx.strokeText(getCookie("name[9]"), rankbox.x+80, rankbox.y+435); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("score[9]"), rankbox.x+250, rankbox.y+435);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("score[9]"), rankbox.x+250, rankbox.y+435); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("time[9]").substring(3,8), rankbox.x+420, rankbox.y+435);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("time[9]").substring(3,8), rankbox.x+420, rankbox.y+435); 

	ctx.font = "30px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText( getCookie("date[9]").substring(5,10), rankbox.x+590, rankbox.y+435);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText(getCookie("date[9]").substring(5,10), rankbox.x+590, rankbox.y+435); 

	ctx.fillStyle = "rgba(" + [150, 150, 150, 0.5] + ")";
	ctx.fillRect(888,550,100,50);
	ctx.strokeRect(888,550,100,50);
	ctx.font = "40px arial black";
	ctx.fillStyle="rgb(255,255,255)";
	ctx.fillText("戻る", 900, 590);
	ctx.strokeStyle = "rgb(0,0,0)";
	ctx.strokeText("戻る", 900, 590); 

	if(key.jump == true){
		cancelAnimationFrame(ranking);
		key2_sound();
		canvas.addEventListener('load', menu(), false);
	}
	else{
		requestAnimationFrame(ranking);
	}

}


function start(){
	ctx.drawImage(bg.img,0,0,1000,800,0,0,1000,800);
	ctx.drawImage(mtitle,0,0,720,340,270,20,504,238);

	menu_bar++;
	ctx.font = "40px arial black";
	ctx.fillStyle="rgb(0,0,0)";
	ctx.fillText("START", 440, 503);
	ctx.strokeStyle = "rgb(255,255,255)";
	ctx.strokeText("START", 440, 503); 

	ctx.beginPath();
    ctx.moveTo(370, 475);
    ctx.lineTo(370, 505);
	ctx.lineTo(390, 490);
	ctx.fillStyle = "rgba(" + [0, 0, 0] + ")";
	ctx.fill();
	
	ctx.beginPath();
    ctx.moveTo(660, 475);
    ctx.lineTo(660, 505);
	ctx.lineTo(640, 490);
	ctx.fillStyle = "rgba(" + [0, 0, 0] + ")";
	ctx.fill();

	//render();
	ctx.beginPath();
	ctx.fillStyle = "rgba(" + [255, 255, 255, (menu_bar%100)/200+0.2] + ")";
	ctx.fillRect(405, menusle.y+85, 220, 60);   


	addEventListener("keydown", keydownfunc, false);
	addEventListener("keyup", keyupfunc, false);



	if(key.jump == true){
		key2_sound();
		menu_sound();
		canvas.addEventListener('load', menu(), false);	
	}
	else{
		requestAnimationFrame(start);
	}
}

//////////////////////////////////////////////////////////////////////////////
//When All Data is loaded, Start Main Loop.	  //////
																		//////
canvas.addEventListener('load', start(), false);						//////
															            //////
																		//////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////