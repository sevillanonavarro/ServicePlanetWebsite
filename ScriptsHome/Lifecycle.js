// ==== REFERENCIAS DOM ====  
const svg       = document.getElementById('svg-clicker');
const zoomLayer = document.getElementById('zoom-layer');

// ==== CONFIGS ====  
const transformOrigins = {
  1: { x: 260, y: 300 },
  2: { x: 600, y: 2150 },
  3: { x: 2200, y: 1600 },
  4: { x: 1800, y: 15 }
};

// Orígenes Fase 2 (edítalos a mano)
const transformOriginsPhase2 = {
  1: { x: -320, y: -220 },
  2: { x: -650, y: 3300 },
  3: { x: 3000, y: 2000 },
  4: { x: 2700, y: -500 }
};

// Factores de zoom Fase 2 (edítalos aquí)
const scaleFactorsPhase2 = {
  1: 1.05,
  2: 1.30,
  3: 1.20,
  4: 1.25
};

const imageReplacements = {
  1: './Sources/LifecycleExtras/2A.png',
  2: './Sources/LifecycleExtras/2D.png',
  3: './Sources/LifecycleExtras/2C.png',
  4: './Sources/LifecycleExtras/2B.png'
};

const polygonPoints = {
  1: `m 395.07667,1464.1167 -17.30488,6.3349 -23.79422,8.4979 -21.6311,7.1074 -34.91879,12.5151 -34.60976,12.0516 -28.27495,10.043 -26.88437,7.8799 -4.94425,-20.5495 -6.33482,-27.9659 -9.42499,-43.2623 -8.34342,-58.0949 -4.94425,-49.4425 -3.55369,-62.5757 0.30902,-50.3696 2.93565,-61.8032 5.71679,-43.4167 4.94425,-37.6999 7.57089,-40.0175 7.7254,-36.46391 10.35202,-42.64417 15.45079,-46.50688 19.00447,-55.00481 23.33069,-54.54128 25.95733,-53.15071 17.30488,-30.43806 19.31349,-32.29215 19.31348,-29.20199 22.55816,-33.3737 18.84996,-24.72126 32.44665,-40.63558 24.72127,-27.96593 31.51961,-33.83722 27.03888,-26.26634 32.44665,-29.66552 26.57536,-22.40364 27.65691,-21.4766 40.48107,-29.51101 37.08189,-23.94872 38.62697,-24.10323 34.45526,-18.54095 33.37371,-16.37783 28.12043,-12.97866 29.51101,-12.82416 36.30935,-13.90571 52.68719,-17.76841 30.74707,-8.96145 36.61837,-9.42498 43.8802,-9.57949 36.7729,-6.33483 29.82,-4.32622 32.7557,-3.39917 31.5196,-2.31762 33.9918,-2.16311 57.1679,-0.77254 27.9659,1.23606 35.0733,1.8541 30.438,2.31762 26.2664,3.09015 41.8716,6.64384 35.2278,7.10737 13.1332,2.62663 -3.3992,23.02168 -3.2446,17.30488 -3.5537,17.15037 -5.0988,23.79422 -4.9442,22.09463 -7.4164,33.83723 -9.5795,44.03474 -3.5537,16.68686 -20.704,-4.32623 -35.0733,-6.48933 -37.2364,-4.63523 -25.4938,-2.47213 -31.2106,-2.47213 -41.8717,-0.92704 -39.0905,0.46352 -21.7856,1.23606 -23.1762,1.54508 -22.5581,2.31762 -20.3951,2.93565 -29.82,4.63524 -36.4638,7.10736 -39.7086,10.50654 -38.16341,11.27907 -40.32656,14.67825 -40.79008,16.53235 -39.0905,18.69545 -43.57122,23.79421 -29.97453,17.92292 -42.48967,28.89297 -47.74294,36.46387 -36.15484,32.44665 -29.3565,28.42945 -23.94873,24.41225 -55.77734,68.44699 -28.73847,42.64418 -25.80282,41.71713 -24.25774,45.42532 -25.80281,57.63144 -16.53235,44.49827 -15.60529,50.52411 -9.57949,39.245 -9.27048,46.5069 -6.79834,48.3609 -4.48073,56.8589 -0.92705,35.2278 0.46352,36.0004 2.93565,52.2236 7.10737,57.786 6.0258,30.129 7.87991,34.3008
z`,
  
  2: `m 247.02233,914.12466 83.57899,26.11161 60.30797,18.13609 44.13845,13.98446 -5.79044,19.66564 -7.75701,28.84294 -9.28655,38.4573 -6.88298,36.9277 -4.91641,34.5241 -3.82387,37.3647 -1.85731,33.8686 -1.09254,43.483 1.4203,34.5241 3.27761,47.7438 2.94984,22.5062 4.80716,33.1039 8.41252,42.1719 9.28656,36.4906 13.21968,43.92 13.32894,38.0202 11.79938,30.3725 20.53968,45.5588 13.65669,24.8005 22.72475,40.4238 36.05368,54.6268 35.2889,46.4328 29.38921,32.9946 31.79279,33.4316 45.01248,42.2811 48.07157,37.8017 56.26559,38.6758 48.83635,28.843 50.69366,24.6913 58.77842,23.9265 55.39161,18.7916 51.6769,13.3289 76.5868,14.7493 51.1306,4.8071 62.7116,3.0591 57.2489,-2.0758 44.1384,-3.6053 53.862,-8.0848 45.5587,-8.631 54.1898,-14.64 45.7773,-16.2788 6.8829,15.7325 9.0681,21.96 9.5051,20.6489 10.2698,23.271 10.5976,24.6913 13.7659,31.028 8.8496,20.1027 9.7235,23.4895 -16.825,6.5552 -20.1027,7.5385 -19.6656,6.446 -23.5988,7.6477 -20.7582,6.1182 -19.1193,5.0257 -28.406,7.32 -20.5396,4.6979 -21.8508,4.8072 -26.0023,5.0256 -27.2041,4.0424 -24.5821,2.9498 -12.3457,1.5296 -16.9343,1.6388 -29.1707,1.8573 -21.5229,1.4203 -31.5743,0.437 -23.8173,0.1093 -28.1874,0.2185 -33.4316,-1.4203 -28.9522,-2.1851 -28.8429,-3.3868 -23.1618,-3.0591 -35.5074,-5.572 -28.8429,-5.5719 -37.36477,-8.194 -32.88533,-8.5218 -39.00352,-11.6901 -28.62444,-9.3958
c 0,0 -33.75936,-11.9087 -34.08712,-12.3457 -0.32776,-0.437 -63.58558,-26.5486 -63.58558,-26.5486
l -45.8865,-23.271 -36.59995,-19.1194 -27.5319,-17.5898 -40.64233,-25.5654 -28.40593,-20.2119 -22.83399,-17.0435 -31.7928,-24.4728 -40.31456,-35.6167 -21.95997,-20.2119 -19.55639,-19.5564 -18.46386,-19.5564 -15.40475,-17.0436 -13.00118,-14.9677 -21.52295,-25.7838 -18.90087,-24.0358 -33.97786,-47.1976 -26.87638,-41.7348 -19.88415,-35.0704 -14.63998,-26.5487 -18.46386,-36.4906 -15.2955,-33.6501 -11.36237,-28.0782 -12.89192,-33.6501 -11.36237,-35.5074 -19.01012,-64.3504 -13.32894,-58.4506 -8.63103,-47.8531 -5.46268,-45.8865 -3.16835,-40.7516 -2.07582,-49.3826 -0.43702,-49.1641 3.16836,-56.7026 6.1182,-52.114 5.89969,-44.794 12.01789,-61.18195 13.76595,-49.27337 11.03462,-38.02024
z`,

  3: `m 1985.1173,814.25657 55.0049,-33.99174 76.3268,-47.27941 36.1549,-22.24914 8.6524,13.21043 22.0174,43.1077 20.3951,42.56692 11.1197,25.40375 16.1695,40.75158 12.5642,36.81845 12.0179,38.56652 12.7826,50.14737 8.0848,36.0537 7.3736,40.1753 4.1717,25.9573 3.7082,31.0561 3.5537,38.009 1.3905,26.5753 1.6996,35.6913 -0.4635,46.5069 -1.2361,25.3393 -2.0086,29.6655 -2.9356,23.9487 -2.6266,30.2836 -6.0258,35.3823 -7.88,41.8716 -7.7253,33.5282 -8.807,34.6098 -9.2705,31.5196 -13.4422,40.4811 -11.588,29.0475 -15.6053,39.554 -16.6869,35.2278 -18.0774,36.3093 -14.5238,26.1119 -17.1503,28.4294 -18.85,30.9016 -16.0688,22.5582 -16.8414,24.4122 -22.5581,29.82 -28.275,34.3008 -22.8671,25.8028 -24.8758,25.8028 -23.7942,24.1032 -23.0217,21.3221 -24.5668,21.6311 -28.5839,24.1033 -28.893,21.6311 -27.6569,19.6225 -28.4295,19.0044 -36.9273,22.7127 -27.1934,15.4508 -40.1721,21.0131 -42.0261,19.0044 -40.0176,16.6869 -39.7085,15.1418 -58.095,18.6954 -7.5708,-25.4938 -8.9615,-25.9573 -11.8971,-34.9188 -11.5881,-35.6913 -9.734,-28.7385 -12.2061,-35.8458 0.309,-10.1975 13.4422,-4.0172 23.7942,-7.1074 36.3094,-12.6697 30.747,-12.3606 26.4209,-11.2791 25.9573,-12.5151 26.2663,-13.4422 31.8287,-18.3864 26.2663,-16.5324 27.1934,-18.2319 21.6311,-15.6053 31.3651,-24.2577 40.0175,-34.9188 15.7598,-15.2963 26.8844,-27.8114 19.468,-20.7041 23.3307,-27.5024 15.4508,-19.6225 19.6225,-27.3479 18.5409,-27.3479 22.8672,-36.4638 25.1848,-46.9704 13.2877,-26.5754 11.5881,-28.1204 12.3606,-32.9102 16.5323,-49.597 9.425,-33.3737 10.9701,-47.5885 5.8713,-35.3823 6.0258,-49.4425 2.4721,-31.9831 1.5451,-36.3094 -0.7726,-43.4167
v -23.6397
l -3.3991,-29.9745 -3.8627,-36.6184 -6.6439,-38.627 -7.7254,-39.863 -8.3434,-30.1291 -11.4336,-40.32651 -15.1417,-42.48967 -17.1504,-42.64418 -14.0602,-29.66551 -13.5967,-24.87577
z`,

  4: `m 968.53295,417.67642 -15.2955,-26.38474 -14.36685,-25.45608 -16.87968,-29.93548 -17.58982,-29.99011 -16.98893,-29.93548 -6.88298,-11.47162 -11.69013,-23.16176 16.55191,-5.62656 12.45491,-4.42477 21.90534,-6.88298 20.15729,-6.3367 22.61549,-6.17283 27.69578,-7.31999 22.77942,-5.02566 25.5107,-4.97104 22.3423,-3.93313 25.2922,-4.26089 18.6278,-2.67671 18.0814,-1.91194 21.6322,-2.07582 19.9934,-1.85731 14.7493,-0.65552 39.4951,-1.4203 26.6033,-0.0546 27.2041,0.38238 22.5063,0.6009 21.8507,1.36567 21.5229,1.69343 18.1361,1.74806 20.048,2.56745 28.6791,4.37015 18.1361,2.73134 9.8875,1.58417 15.1316,3.0591 9.2865,2.07582 18.3546,3.8785 17.4806,4.04239 23.7627,6.00894 14.9131,4.37015 19.0101,5.57193 19.1194,6.00894 18.2453,6.22746 11.1439,3.98775 11.6901,4.26089 12.6734,5.18955 18.2454,6.99223 16.0602,6.39133 16.8797,7.26536 15.7872,7.15611 18.1361,8.90417 15.7325,7.97551 17.6444,9.1773 18.7916,10.21521 12.4003,7.5385 12.0179,6.77372 14.7492,8.84954 11.4717,7.04685 18.9008,12.18178 16.6066,11.08924 11.6355,8.35789 13.8206,10.26984 12.6188,9.1773 11.854,9.12267 11.0346,9.06805 11.3624,8.90417 7.3199,6.55521 8.9042,7.5385 13.1651,11.36237 7.9755,7.37462 15.3501,14.14833 9.5597,8.9588 10.0513,10.05133 11.6355,11.74476 10.2699,10.48834 8.4671,9.01342 8.1394,8.46715 8.9588,9.83282 9.2866,10.92536 8.6856,10.16058 7.5385,9.45044 7.0469,8.5764 7.9208,10.37909 7.7571,9.06805 5.7358,7.31999 7.4838,10.97998 8.3579,11.417 7.5932,10.48835 6.6098,9.55968 6.7737,10.10596 6.8284,10.32446 10.7068,17.26207 6.2275,9.88744 6.1728,9.88745 7.9209,13.87521 5.7358,10.54297 5.3534,10.10595 5.8451,10.26984 7.0468,13.16506 4.5341,10.37908 6.1182,12.18178 5.1349,10.32446 5.4627,12.40028 5.7358,12.40028 5.5719,13.21969 5.0803,12.72804 5.9543,15.02236 4.1517,11.14387 4.971,12.40028 5.8997,17.04356 3.8239,12.18177 5.1895,15.67789 4.4794,14.96774 5.6812,19.11937 4.1516,14.4761 5.1349,21.08594 2.6768,13.65669 5.1895,22.5062 3.7692,20.7036 3.7693,22.397 3.1137,18.5731 3.2776,27.9689 3.7693,37.6378 2.3489,43.1006 1.0926,25.5653 -27.2588,0.2185 -24.9098,1.1472 -34.5788,1.6388 -49.0548,3.1137 -47.3068,2.5128 -14.3122,1.3111 -12.3457,-3.4961 -0.055,-20.4851 -0.6009,-16.7704 -1.0926,-14.5853 -1.3656,-21.96 -2.2943,-19.8295 -2.786,-23.2164 -3.1684,-20.2666 -4.3155,-22.5608 -4.1516,-18.9009 -4.097,-18.0268 -6.9923,-27.8051 -6.3367,-21.57753 -9.942,-30.53637 -9.5597,-26.43937 -12.6188,-30.75488 -14.203,-31.73816 -14.64,-28.67907 -14.3668,-26.43936 -14.3122,-24.52743 -17.2075,-26.87638 -15.6232,-21.63221 -20.9221,-28.3513 -13.0558,-16.38804 -8.7403,-10.32446 -10.8707,-12.89192 -13.3836,-15.077 -12.4002,-13.76595 -11.7994,-11.41699 -16.6066,-16.33341 -12.0179,-11.14387 -14.2029,-12.83729 -13.9845,-12.2364 -13.4928,-10.81611 -17.2621,-13.54744 -13.8752,-10.87073 -16.2241,-11.52626 -17.7537,-12.2364 -13.2743,-8.84954 -20.1027,-12.34565 -15.951,-9.39581 -29.5531,-16.27878 -32.3391,-16.06027 -30.0447,-13.98446 -66.5011,-23.81833 -97.9328,-25.04797 -69.7904,-12.31061 -86.8267,-5.31648 -121.3901,5.62817 -90.8803,15.1426`
};



// === Datos con id ya predefinido ===
const phase2Extras = {
  1: [
    { id: 'ball-1-0', x: 1075, y: 450, href: './Sources/LifecycleExtras/1A.png', width: 350, height: 350, selectedHref: './Sources/LifecycleExtras/1B.png',}
  ],
  2: [
    { id: 'ball-2-0',  x: 1075, y: 450, href: './Sources/LifecycleExtras/1A.png', width: 350, height: 350, selectedHref: './Sources/LifecycleExtras/1B.png', },

    { id: 'ball-2-1', x: 550, y: 800, href: './Sources/LifecycleExtras/1A.png', width: 350, height: 350, selectedHref: './Sources/LifecycleExtras/1B.png', },

    { id: 'ball-2-2', x: 1600, y: 800, href: './Sources/LifecycleExtras/1A.png', width: 350, height: 350, selectedHref: './Sources/LifecycleExtras/1B.png', },

    { id: 'ball-2-3', x: 1550, y: 1450, href: './Sources/LifecycleExtras/1A.png', width: 350, height: 350, selectedHref: './Sources/LifecycleExtras/1B.png', },

    { id: 'ball-2-4', x: 600, y: 1450, href: './Sources/LifecycleExtras/1A.png', width: 350, height: 350, selectedHref: './Sources/LifecycleExtras/1B.png', },
  ],
  3: [
    { id: 'ball-3-0',  x: 1075, y: 450, href: './Sources/LifecycleExtras/1A.png', width: 350, height: 350, selectedHref: './Sources/LifecycleExtras/1B.png', },

    { id: 'ball-3-1', x: 550, y: 800, href: './Sources/LifecycleExtras/1A.png', width: 350, height: 350, selectedHref: './Sources/LifecycleExtras/1B.png', },

    { id: 'ball-3-2', x: 1600, y: 800, href: './Sources/LifecycleExtras/1A.png', width: 350, height: 350, selectedHref: './Sources/LifecycleExtras/1B.png', },

    { id: 'ball-3-3',  x: 1550, y: 1450, href: './Sources/LifecycleExtras/1A.png', width: 350, height: 350, selectedHref: './Sources/LifecycleExtras/1B.png', },

    { id: 'ball-3-4', x: 600, y: 1450, href: './Sources/LifecycleExtras/1A.png', width: 350, height: 350, selectedHref: './Sources/LifecycleExtras/1B.png', },
    
  ],
  4: [
    { id: 'ball-4-0',  x: 1075, y: 450, href: './Sources/LifecycleExtras/1A.png', width: 350, height: 350, selectedHref: './Sources/LifecycleExtras/1B.png', },
    { id: 'ball-4-1', x: 1650, y: 1350, href: './Sources/LifecycleExtras/1A.png', width: 350, height: 350, selectedHref: './Sources/LifecycleExtras/1B.png', },
    { id: 'ball-4-2', x: 500, y: 1350, href: './Sources/LifecycleExtras/1A.png', width: 350, height: 350, selectedHref: './Sources/LifecycleExtras/1B.png', },
  ],
};

const ballText = {
  'ball-1-0': {
    title: 'Título 1-0',
    items: ['Texto 1A', 'Texto 1B', 'Texto 1C'],
    link: "Services/Cyric.html"
  },
  'ball-2-0': {
    title: 'Título 2-0',
    items: ['Texto 2A', 'Texto 2B', 'Texto 2C']
  },
  'ball-2-1': {
    title: 'Título 2-1',
    items: ['Texto 2-1A', 'Texto 2-1B', 'Texto 2-1C']
  },
  'ball-2-2': {
    title: 'Título 2-2',
    items: ['Texto 2-2A', 'Texto 2-2B', 'Texto 2-2C']
  },
  'ball-2-3': {
    title: 'Título 2-3',
    items: ['Texto 2-3A', 'Texto 2-3B', 'Texto 2-3C']
  },
  'ball-2-4': {
    title: 'Título 2-4',
    items: ['Texto 2-4A', 'Texto 2-4B', 'Texto 2-4C']
  },
  // Agrega los demás según necesites...
};


const phase2Center = {
  href: './Sources/LifecycleExtras/3.png',
  width:  1000,
  height: 850,
  x: 750,   // = 896
  y: 800,   // = 1015
  id:    'phase2-center',
  class: 'phase2-center'
};



// ==== UTILIDADES ====  
function applyHover(containerSvg, zoomLayerSelector, groupClass) {
  const zLayer = containerSvg.querySelector(zoomLayerSelector);
  containerSvg.querySelectorAll('.hover-area').forEach(poly => {
    const idx   = poly.dataset.index;
    const group = zLayer.querySelector(`.${groupClass}[data-index="${idx}"]`);
    const scale = (groupClass === 'zoom-group-p2' && scaleFactorsPhase2[idx]) 
      ? scaleFactorsPhase2[idx] 
      : 1.05;
    group.style.setProperty('--hover-scale', scale);

    poly.addEventListener('mouseenter', () => {
      zLayer.appendChild(group);
      void group.getBoundingClientRect();
      requestAnimationFrame(() => requestAnimationFrame(() => {
        group.classList.add('hovered');
      }));
    });
    poly.addEventListener('mouseleave', () => {
      group.classList.remove('hovered');
    });
  });
}

// ==== FASE 1 ====  
window.addEventListener('DOMContentLoaded', () => {
  Object.entries(transformOrigins).forEach(([idx, { x, y }]) => {
    const g = svg.querySelector(`.zoom-group[data-index="${idx}"]`);
    if (g) g.style.transformOrigin = `${x}px ${y}px`;
  });
  applyHover(svg, '#zoom-layer', 'zoom-group');
});

// ==== FASE 2 ====  
const imageContainer = document.createElement('div');
imageContainer.id = 'image-container';
imageContainer.style.cssText = 'display:none; width:50%; overflow:hidden; z-index:10';

const newSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
newSvg.setAttribute("viewBox", "0 0 2500 2529");
newSvg.setAttribute("width",  "80%");
newSvg.setAttribute("height", "100%");

const phase2Img = document.createElementNS("http://www.w3.org/2000/svg", "image");
phase2Img.setAttribute("width", "100%");
phase2Img.setAttribute("height","100%");
newSvg.appendChild(phase2Img);

const newZoomLayer = document.createElementNS("http://www.w3.org/2000/svg", "g");
newZoomLayer.id = 'new-zoom-layer';
newSvg.appendChild(newZoomLayer);

const phase2Areas = document.createElementNS("http://www.w3.org/2000/svg", "g");
phase2Areas.id = 'phase2-areas';
newSvg.appendChild(phase2Areas);

imageContainer.appendChild(newSvg);



function createZoomGroupPhase2(idx) {

  svg.querySelectorAll('.hover-area').forEach(area => {
    area.style.pointerEvents = '';
  });
  
  const group = document.createElementNS("http://www.w3.org/2000/svg","g");
  group.classList.add("zoom-group-p2");
  group.dataset.index = idx;

  const cp = document.createElementNS("http://www.w3.org/2000/svg","clipPath");
  cp.id = `zr-clip-${idx}`;

  const path = document.createElementNS("http://www.w3.org/2000/svg","path");
  cp.setAttribute("clipPathUnits", "userSpaceOnUse")
  path.setAttribute("d", polygonPoints[idx]);
  cp.appendChild(path);

  const im = document.createElementNS("http://www.w3.org/2000/svg","image");
  im.setAttribute("clip-path", `url(#zr-clip-${idx})`);
  im.setAttribute("x","0");
  im.setAttribute("y","0");
  im.setAttribute("width","100%");
  im.setAttribute("height","100%");
  im.setAttributeNS('http://www.w3.org/1999/xlink','href', imageReplacements[idx]);

  group.appendChild(cp);
  group.appendChild(im);
  newZoomLayer.appendChild(group);

  // transform-origin Fase2
  const to = transformOriginsPhase2[idx];
  group.style.transformOrigin = `${to.x}px ${to.y}px`;

  return group;
}
      const svgContainer = document.querySelector('.svg-container');
      svgContainer.appendChild(imageContainer);

svg.querySelectorAll('.hover-area').forEach(poly => {
  
  poly.addEventListener('click', () => {

    svg.querySelectorAll('.hover-area').forEach(area => {
      area.style.pointerEvents = 'none';
    });
    const idx = poly.dataset.index;
    const src = imageReplacements[idx];
    if (!src) return;

    // limpiar previos ANTES de animación
    newZoomLayer.querySelectorAll('.zoom-group-p2').forEach(el => el.remove());
    phase2Areas.innerHTML = '';

    const r = svg.getBoundingClientRect();
    Object.assign(imageContainer.style, {
      top:  `${r.top + window.scrollY}px`,
      left: `${r.left + window.scrollX}px`,
      width:  `${r.width}px`,
      height: `${r.height}px`
    });
    
    // 3) Inicia fade-out
    svg.classList.add('fade-out');
    svg.addEventListener('animationend', function fin1(ev) {
      if (ev.animationName !== 'fancyFadeOut') return;
      svg.removeEventListener('animationend', fin1);
    
      // **Aquí sí** lo mostramos, justo al acabar el fade-out
      imageContainer.style.display = 'block';
    
      svg.style.display = 'none';
      svg.classList.remove('fade-out');
    
      // … y arrancas el montaje de Fase 2 (fade-in, etc.) …
    });


    phase2Img.setAttributeNS('http://www.w3.org/1999/xlink','href', src);
    phase2Img.classList.add('fade-in');
    
    phase2Img.addEventListener('animationend', function onFadeIn() {
      phase2Img.removeEventListener('animationend', onFadeIn);

      

      createZoomGroupPhase2(idx);

      const a = document.createElementNS("http://www.w3.org/2000/svg","path");
      a.setAttribute("d", polygonPoints[idx]);
      a.classList.add("hover-area");
      a.dataset.index = idx;
      phase2Areas.appendChild(a);

      const textGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
      textGroup.id = 'phase2-center-text-group';
      newSvg.appendChild(textGroup);


      applyHover(newSvg, '#new-zoom-layer', 'zoom-group-p2');


      addPhase2Center();

      addPhase2Extras(idx);

      a.addEventListener('click', () => {
        
        const textGroup = newSvg.querySelector('#phase2-center-text-group');
            textGroup.innerHTML = ''; // Limpiar textos anteriores
        imageContainer.classList.add('fade-out');
        imageContainer.addEventListener('animationend', function fin2() {
          imageContainer.removeEventListener('animationend', fin2);
          imageContainer.style.display = 'none';
          imageContainer.classList.remove('fade-out');
          svg.style.display = 'block';
          svg.classList.add('fade-in');
          svg.addEventListener('animationend', function fin3() {
            svg.removeEventListener('animationend', fin3);
            svg.classList.remove('fade-in');
            
          });
        });
      });
    });

    
  });
});



function addPhase2Extras(idx) {
  
  
  const extras = phase2Extras[idx] || [];

  extras.forEach(({ id, x, y, href, selectedHref, width, height }) => {

    

    const img = document.createElementNS("http://www.w3.org/2000/svg", "image");
    img.id = id;
    img.classList.add("phase2-ball", "fade-in-inside"); // Añadir ambas clases
    img.setAttribute("x", x);
    img.setAttribute("y", y);
    img.setAttribute("width", width);
    img.setAttribute("height", height);
    img.setAttributeNS("http://www.w3.org/1999/xlink", "href", href);
    
    img.dataset.original = href;
    img.dataset.selected = selectedHref;
    
    img.addEventListener("click", (event) => {
      const target = event.currentTarget;

      // Restaurar otras bolas
      phase2Areas.querySelectorAll(".phase2-ball").forEach((b) => {
        b.classList.remove("grow");
        b.setAttributeNS("http://www.w3.org/1999/xlink", "href", b.dataset.original);
      });

      rotateCenterTo(target);
      target.classList.remove("fade-in-inside")
      target.classList.add("grow");
      target.setAttributeNS("http://www.w3.org/1999/xlink", "href", target.dataset.selected);

      const onScaleUpEnd = (ev) => {
        if (ev.propertyName !== "transform") return;

        target.removeEventListener("transitionend", onScaleUpEnd);

        target.style.opacity = "0.6";

          target.setAttributeNS("http://www.w3.org/1999/xlink", "href", target.dataset.selected);
          target.style.opacity = "1";
          target.class.add("fade-in-inside")
          target.classList.remove("grow");
      };

      const textGroup = newSvg.querySelector('#phase2-center-text-group');
      textGroup.innerHTML = ''; // Limpiar textos anteriores

      const key = img.id;
      const data = ballText[key];

      if (data) {
        // Título
        const titleEl = document.createElementNS("http://www.w3.org/2000/svg", "text");
        titleEl.setAttribute("x", "1250");
        titleEl.setAttribute("y", "1050");
        titleEl.setAttribute("text-anchor", "middle");
        titleEl.setAttribute("class", "phase2-text-title");
        titleEl.setAttribute("data-text", `ballText.${key}.title`);
        titleEl.textContent = data.title;
        textGroup.appendChild(titleEl);
      
        // Mostrar solo los dos primeros textos como normales y el tercero como enlace si hay
        data.items.forEach((text, i) => {
          if (i === 2 && data.link) {
            const link = document.createElementNS("http://www.w3.org/2000/svg", "a");
            link.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", data.link);
            link.setAttribute("target", "_blank");
      
            const linkText = document.createElementNS("http://www.w3.org/2000/svg", "text");
            linkText.setAttribute("x", "1250");
            linkText.setAttribute("y", `${1170 + i * 140}`);
            linkText.setAttribute("text-anchor", "middle");
            linkText.setAttribute("class", "phase2-text-link");
            linkText.setAttribute("data-text", `ballText.${key}.items[${i}]`);
            linkText.textContent = text;
      
            link.appendChild(linkText);
            textGroup.appendChild(link);
          } else if (i < 2) {
            const line = document.createElementNS("http://www.w3.org/2000/svg", "text");
            line.setAttribute("x", "1250");
            line.setAttribute("y", `${1170 + i * 140}`);
            line.setAttribute("text-anchor", "middle");
            line.setAttribute("class", "phase2-text-item");
            line.setAttribute("data-text", `ballText.${key}.items[${i}]`);
            line.textContent = text;
            textGroup.appendChild(line);
          }
        });
      
        if (typeof loadTranslations === 'function') {
          const lang = localStorage.getItem('user-lang') || 'en';
          loadTranslations(lang);
        }
      }

    });

    phase2Areas.appendChild(img);
    
  });
  
}




function addPhase2Center() {
  const img = document.createElementNS("http://www.w3.org/2000/svg", "image");
  img.setAttribute("id",    phase2Center.id);
  img.setAttribute("class", phase2Center.class);
  img.setAttribute("x",     phase2Center.x);
  img.setAttribute("y",     phase2Center.y);
  img.setAttribute("width",  phase2Center.width);
  img.setAttribute("height", phase2Center.height);
  img.setAttributeNS("http://www.w3.org/1999/xlink", "href", phase2Center.href);

  // Guarda el ángulo actual en un data-attribute, empezando en 0
  img.dataset.angle = "0";

  phase2Areas.appendChild(img);

  // Texto central vacío
  const txt = document.createElementNS("http://www.w3.org/2000/svg","text");
  txt.setAttribute("id", "phase2-center-text");
  phase2Areas.appendChild(txt);
}

function rotateCenterTo(target) {
  const centerImg = newSvg.querySelector('#phase2-center');

  // 1) Calcula el centro de rotación
  const cb = centerImg.getBBox();
  const cx = cb.x + cb.width  / 2;
  const cy = cb.y + cb.height / 2;

  // 2) Calcula el nuevo ángulo de la misma forma
  const bb = target.getBBox();
  let angle = Math.atan2(
    (bb.y + bb.height/2) - cy,
    (bb.x + bb.width/2)  - cx
  ) * 180 / Math.PI + 90;

  // 3) Recoge el ángulo previo
  const prev = parseFloat(centerImg.dataset.angle || 0);

  // 4) Limpia cualquier animación previa
  const oldAnim = centerImg.querySelector('animateTransform');
  if (oldAnim) oldAnim.remove();

  // 5) Crea el <animateTransform> y lo arrancas
  const anim = document.createElementNS("http://www.w3.org/2000/svg", "animateTransform");
  anim.setAttribute("attributeName", "transform");
  anim.setAttribute("type",          "rotate");
  anim.setAttribute("from",          `${prev} ${cx} ${cy}`);
  anim.setAttribute("to",            `${angle} ${cx} ${cy}`);
  anim.setAttribute("dur",           "0.5s");
  anim.setAttribute("fill",          "freeze");
  centerImg.appendChild(anim);
  anim.beginElement();

  // 6) Guarda el nuevo ángulo
  centerImg.dataset.angle = angle.toString();
}


function triggerSequentialHover(containerSvg, zoomLayerSelector, groupClass, delay = 700) { // Cambio el delay a 1000 (1 segundo)
  const zLayer = containerSvg.querySelector(zoomLayerSelector);
  const polys = Array.from(containerSvg.querySelectorAll('.hover-area'));

  polys.forEach((poly, i) => {
    const idx = poly.dataset.index;
    const group = zLayer.querySelector(`.${groupClass}[data-index="${idx}"]`);
    const scale = (groupClass === 'zoom-group-p2' && scaleFactorsPhase2[idx]) 
      ? scaleFactorsPhase2[idx] 
      : 1.2;

    group.style.setProperty('--hover-scale', scale);

    setTimeout(() => {
      // Añadir clase hovered
      zLayer.appendChild(group);
      void group.getBoundingClientRect();
      group.classList.add('hovered');

      // Quitar hover después de un momento
      setTimeout(() => {
        group.classList.remove('hovered');
      }, delay - 50); // duración del "hover"
    }, i * delay);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  Object.entries(transformOrigins).forEach(([idx, { x, y }]) => {
    const g = svg.querySelector(`.zoom-group[data-index="${idx}"]`);
    if (g) g.style.transformOrigin = `${x}px ${y}px`;
  });

  applyHover(svg, '#zoom-layer', 'zoom-group');

  // Trigger hover secuencial al cargar
  triggerSequentialHover(svg, '#zoom-layer', 'zoom-group');
});