/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['pt-sans, sans-serif']='<script src=\"http://use.edgefonts.net/pt-sans:n4,i4,n7,i7:all.js\"></script>';

var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'flying_girl',
                type: 'image',
                rect: ['201px', '155px','513px','188px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"flying_girl.png",'0px','0px']
            },
            {
                id: 'fireball',
                type: 'image',
                rect: ['466px', '668px','513px','382px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"fireball.png",'0px','0px']
            },
            {
                id: 'boss',
                type: 'image',
                rect: ['306px', '2288px','569px','525px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"boss.png",'0px','0px']
            },
            {
                id: 'combo_ghosts_02',
                type: 'image',
                rect: ['390px', '1393px','759px','585px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"combo_ghosts_02.png",'0px','0px']
            },
            {
                id: 'girl_iceball',
                type: 'image',
                rect: ['-409px', '633px','909px','734px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"girl_iceball.png",'0px','0px']
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['274px', '162px','237px','217px','auto', 'auto'],
                opacity: 1,
                text: "Быстрый и красивый способ передвижения, доступный всем классам и расам. Используя определенные кнопки, ты можешь набирать скорость, бегать по воде, стенам и даже левитировать.<br>Используя эту способность, можно забраться практически всюду: начни разбег с любого места и поднимись на какую угодно высоту. <br><br><br><br>",
                align: "left",
                font: ['pt-sans, sans-serif', 15, "rgba(255,255,255,1.00)", "200", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['274px', '130px','282px','25px','auto', 'auto'],
                text: "ПОСТУПЬ ВЕТРА",
                align: "left",
                font: ['pt-sans, sans-serif', 14, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'Text3Copy',
                type: 'text',
                rect: ['275px', '896px','282px','25px','auto', 'auto'],
                text: "СИСТЕМА БОЯ<br>",
                align: "left",
                font: ['pt-sans, sans-serif', 14, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'Text2Copy2',
                type: 'text',
                rect: ['377px', '1762px','427px','179px','auto', 'auto'],
                text: "Поднять врага в воздух и резко уронить на землю, добить упавшего противника эффектным прыжком сверху – для этого и не только в Blade and Soul есть комбо-удары. Это цепочки умений, которые активируются в определенных игровых ситуациях.<br><br>Умелое применение контратак, блоков и уход от нападения сделают бой интереснее и разнообразнее. Причем важно не только самому правильно применить серию ударов, но и вовремя прервать комбо противника – в противном случае, ты можешь лишиться половины очков здоровья.<br><br>",
                align: "left",
                font: ['pt-sans, sans-serif', 14, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text3Copy2',
                type: 'text',
                rect: ['377px', '1730px','282px','25px','auto', 'auto'],
                text: "КОМБО УДАРЫ",
                align: "left",
                font: ['pt-sans, sans-serif', 14, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'Text2Copy4',
                type: 'text',
                rect: ['377px', '2251px','427px','179px','auto', 'auto'],
                text: "Для сражений с боссами и выполнения сложных заданий тебе понадобится группа союзников. И дело не только в количестве воинов, но и в возможности использовать групповые комбо-удары.<br><br>Во время схватки босс подсвечивается разными цветами в зависимости от своего состояния. Чтобы добить его, нужно применить умение, которое вводит в такое же состояние:<br><br>",
                align: "left",
                font: ['pt-sans, sans-serif', 14, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text3Copy4',
                type: 'text',
                rect: ['377px', '2217px','282px','25px','auto', 'auto'],
                text: "БОЙ В ГРУППЕ<br>",
                align: "left",
                font: ['pt-sans, sans-serif', 14, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'Screenshot_2014-03-26_181726',
                type: 'image',
                rect: ['1360px', '618px','1174px','437px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Screenshot%202014-03-26%2018.17.26.png",'0px','0px']
            },
            {
                id: 'Text2Copy5',
                type: 'text',
                rect: ['274px', '1044px','237px','217px','auto', 'auto'],
                text: "Больше не нужно кликать мышкой по врагам. Тот, кто находится перед тобой, автоматически становится целью, поэтому для нанесения удара достаточно оказаться на нужном расстоянии от противника и навести на него камеру.",
                align: "left",
                font: ['pt-sans, sans-serif', 15, "rgba(255,255,255,1.00)", "200", "none", "normal"]
            },
            {
                id: 'Screenshot_2014-03-26_181726Copy',
                type: 'image',
                rect: ['1360px', '1099px','1174px','437px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Screenshot%202014-03-26%2018.17.26.png",'0px','0px']
            },
            {
                id: 'Text4Copy',
                type: 'text',
                rect: ['540px', '1044px','237px','170px','auto', 'auto'],
                text: "Стоит тебе повернуться кругом <br>– и ты потеряешь цель. Благодаря этому же правилу можно уворачиваться от ударов.",
                align: "left",
                font: ['pt-sans, sans-serif', 15, "rgba(255,255,255,1)", "200", "none", "normal"]
            },
            {
                id: 'Text5',
                type: 'text',
                rect: ['543px', '162px','237px','145px','auto', 'auto'],
                text: "Однако передвигаться таким образом можно не бесконечно - нужно следить за специальным индикатором «усталости».<br>",
                align: "left",
                font: ['pt-sans, sans-serif', 15, "rgba(255,255,255,1)", "200", "none", "normal"]
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['9px', '2px','196px','14px','auto', 'auto'],
                fill: ["rgba(188,229,142,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'stamina',
                type: 'image',
                rect: ['543px', '253px','216px','17px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"stamina.png",'0px','0px']
            },
            {
                id: 'coub',
                type: 'image',
                rect: ['781px', '169px','330px','186px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"coub.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Text3Copy}": [
                ["style", "top", '1008px'],
                ["style", "letter-spacing", '1px'],
                ["style", "left", '274px']
            ],
            "${_Text3Copy4}": [
                ["style", "top", '2217px'],
                ["style", "letter-spacing", '1px'],
                ["style", "left", '377px'],
                ["style", "font-style", 'normal']
            ],
            "${_fireball}": [
                ["style", "top", '777px'],
                ["style", "height", '382px'],
                ["style", "left", '-552px'],
                ["style", "width", '513px']
            ],
            "${_Text2Copy3}": [
                ["style", "top", '1477px'],
                ["style", "font-size", '14px'],
                ["style", "height", '179px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'pt-sans, sans-serif'],
                ["style", "left", '377px'],
                ["style", "width", '427px']
            ],
            "${_combo_ghosts_02}": [
                ["style", "top", '1573px'],
                ["style", "height", '491px'],
                ["style", "left", '960px'],
                ["style", "width", '637px']
            ],
            "${_Text2Copy2}": [
                ["style", "top", '1762px'],
                ["style", "width", '427px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '179px'],
                ["style", "font-family", 'pt-sans, sans-serif'],
                ["style", "left", '377px'],
                ["style", "font-size", '14px']
            ],
            "${_Rectangle}": [
                ["style", "top", '255px'],
                ["color", "background-color", 'rgba(188,229,142,1.00)'],
                ["style", "height", '14px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '552px'],
                ["style", "width", '196px']
            ],
            "${_stamina}": [
                ["style", "left", '543px'],
                ["style", "top", '253px']
            ],
            "${_flying_girl}": [
                ["style", "height", '188px'],
                ["style", "top", '379px'],
                ["style", "left", '327px'],
                ["style", "width", '513px']
            ],
            "${_Text5}": [
                ["style", "top", '162px'],
                ["style", "left", '543px'],
                ["style", "width", '237px']
            ],
            "${_Text3Copy3}": [
                ["style", "top", '1445px'],
                ["style", "left", '377px']
            ],
            "${_Screenshot_2014-03-26_181726Copy}": [
                ["style", "left", '1360px'],
                ["style", "top", '1099px']
            ],
            "${_Text3Copy2}": [
                ["style", "top", '1730px'],
                ["style", "letter-spacing", '1px'],
                ["style", "left", '377px'],
                ["style", "font-style", 'normal']
            ],
            "${_Text2}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '200'],
                ["style", "left", '274px'],
                ["style", "font-size", '15px'],
                ["style", "top", '162px'],
                ["style", "opacity", '1'],
                ["style", "height", '217px'],
                ["style", "font-family", 'pt-sans, sans-serif'],
                ["style", "word-spacing", '0px'],
                ["style", "width", '237px']
            ],
            "${_Text3}": [
                ["style", "top", '130px'],
                ["style", "letter-spacing", '1px'],
                ["style", "left", '274px']
            ],
            "${_boss}": [
                ["style", "top", '2288px'],
                ["style", "height", '525px'],
                ["style", "left", '306px'],
                ["style", "width", '569px']
            ],
            "${_Text2Copy5}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '200'],
                ["style", "left", '274px'],
                ["style", "font-size", '15px'],
                ["style", "top", '1044px'],
                ["style", "height", '217px'],
                ["style", "font-family", 'pt-sans, sans-serif'],
                ["style", "word-spacing", '0px'],
                ["style", "width", '237px']
            ],
            "${_Text2Copy4}": [
                ["style", "top", '2251px'],
                ["style", "font-size", '14px'],
                ["style", "height", '179px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'pt-sans, sans-serif'],
                ["style", "left", '377px'],
                ["style", "width", '427px']
            ],
            "${_girl_iceball}": [
                ["style", "top", '809px'],
                ["style", "height", '734px'],
                ["style", "left", '-980px'],
                ["style", "width", '909px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,0.25)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '3000px'],
                ["style", "width", '100%']
            ],
            "${_coub}": [
                ["style", "left", '781px'],
                ["style", "top", '169px']
            ],
            "${_Text4Copy}": [
                ["style", "top", '1044px'],
                ["style", "font-weight", '200'],
                ["style", "left", '540px'],
                ["style", "font-size", '15px']
            ],
            "${_Screenshot_2014-03-26_181726}": [
                ["style", "left", '1360px'],
                ["style", "top", '618px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4500,
            autoPlay: false,
            labels: {
                "end": 4500
            },
            timeline: [
                { id: "eid30", tween: [ "style", "${_combo_ghosts_02}", "left", '519px', { fromValue: '960px'}], position: 2009, duration: 991 },
                { id: "eid34", tween: [ "style", "${_combo_ghosts_02}", "left", '512px', { fromValue: '519px'}], position: 3000, duration: 1000 },
                { id: "eid69", tween: [ "style", "${_Text3Copy}", "top", '1008px', { fromValue: '1008px'}], position: 0, duration: 0 },
                { id: "eid37", tween: [ "style", "${_combo_ghosts_02}", "top", '2332px', { fromValue: '1573px'}], position: 3000, duration: 1000 },
                { id: "eid68", tween: [ "style", "${_Text3Copy}", "left", '274px', { fromValue: '274px'}], position: 0, duration: 0 },
                { id: "eid78", tween: [ "style", "${_Rectangle}", "width", '55px', { fromValue: '196px'}], position: 0, duration: 1000 },
                { id: "eid26", tween: [ "style", "${_fireball}", "top", '1036px', { fromValue: '777px'}], position: 1000, duration: 1000 },
                { id: "eid24", tween: [ "style", "${_girl_iceball}", "top", '1042px', { fromValue: '809px'}], position: 1000, duration: 1000 },
                { id: "eid31", tween: [ "style", "${_girl_iceball}", "top", '1423px', { fromValue: '1042px'}], position: 2000, duration: 1000 },
                { id: "eid35", tween: [ "style", "${_girl_iceball}", "top", '2148px', { fromValue: '1423px'}], position: 3000, duration: 1000 },
                { id: "eid25", tween: [ "style", "${_fireball}", "left", '818px', { fromValue: '-552px'}], position: 1000, duration: 1000 },
                { id: "eid2", tween: [ "style", "${_flying_girl}", "top", '404px', { fromValue: '379px'}], position: 0, duration: 1000 },
                { id: "eid23", tween: [ "style", "${_girl_iceball}", "left", '-490px', { fromValue: '-980px'}], position: 1000, duration: 1000 },
                { id: "eid32", tween: [ "style", "${_girl_iceball}", "left", '-488px', { fromValue: '-490px'}], position: 2000, duration: 1000 },
                { id: "eid33", tween: [ "style", "${_girl_iceball}", "left", '-540px', { fromValue: '-488px'}], position: 3000, duration: 1000 },
                { id: "eid46", tween: [ "color", "${_Stage}", "background-color", 'rgba(0,0,0,0.62)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,0.25)'}], position: 0, duration: 1000 },
                { id: "eid10", tween: [ "style", "${_flying_girl}", "left", '1027px', { fromValue: '327px'}], position: 0, duration: 1000 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-733169868");
