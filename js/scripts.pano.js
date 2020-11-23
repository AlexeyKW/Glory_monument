var panorama1, panorama2, panorama3, panorama4, panorama5, panorama6, panorama7, panorama8, panorama9, panorama10, panorama11, panorama12, viewer, container, infospot, font;
var panorama13, panorama14, panorama15, panorama16, panorama17, panorama18, panorama19, panorama20, panorama21, panorama22, panorama23, panorama24;
var panorama25, panorama26, panorama27, panorama28, panorama29, panorama30, panorama31, panorama32, panorama33, panorama34, panorama35, panorama36;
var panorama37, panorama38, panorama39, panorama1f, panorama2f, panorama3f, panorama4f, panorama5f;

container = document.querySelector( '#container' );

function createTextShape ( message, size = 10, count ) {
        message = makeMultiLine( message, count );
        var shapes = font.generateShapes( message, size );
        var geometry = new THREE.ShapeGeometry( shapes );
        var matLite = new THREE.MeshBasicMaterial( {
          color: 0xffffff,
          transparent: true,
          opacity: 1,
          side: THREE.DoubleSide
        } );
        geometry.computeBoundingBox();
        var xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
        geometry.translate( xMid, 0, 0 );
        return new THREE.Mesh( geometry, matLite );
}
function makeMultiLine ( text = '', count = 40 ) {
        let lineCharacterLimit = 0;
        return text.split(' ').map( word => {
          lineCharacterLimit += word.length;
          if ( lineCharacterLimit > count ) {
            word += '\n';
            lineCharacterLimit = 0;
          }
          return word;
        }).join(' ').replace( /\n /g, '\n' );
}

panorama1 = new PANOLENS.ImagePanorama( './asset/P_1.png' );
panorama2 = new PANOLENS.ImagePanorama( './asset/P_2.png' );
panorama3 = new PANOLENS.ImagePanorama( './asset/P_3.png' );
panorama4 = new PANOLENS.ImagePanorama( './asset/P_4.png' );
panorama5 = new PANOLENS.ImagePanorama( './asset/P_5.png' );
panorama6 = new PANOLENS.ImagePanorama( './asset/P_6.png' );
panorama7 = new PANOLENS.ImagePanorama( './asset/P_7.png' );
panorama8 = new PANOLENS.ImagePanorama( './asset/P_8.png' );
panorama9 = new PANOLENS.ImagePanorama( './asset/P_9.png' );
panorama10 = new PANOLENS.ImagePanorama( './asset/P_10.png' );
panorama11 = new PANOLENS.ImagePanorama( './asset/P_11.png' );
panorama12 = new PANOLENS.ImagePanorama( './asset/P_12.png' );
panorama13 = new PANOLENS.ImagePanorama( './asset/P_13.png' );
panorama14 = new PANOLENS.ImagePanorama( './asset/P_14.png' );
panorama15 = new PANOLENS.ImagePanorama( './asset/P_15.png' );
panorama16 = new PANOLENS.ImagePanorama( './asset/P_16.png' );
panorama17 = new PANOLENS.ImagePanorama( './asset/P_17.png' );
panorama18 = new PANOLENS.ImagePanorama( './asset/P_18.png' );
panorama19 = new PANOLENS.ImagePanorama( './asset/P_19.png' );
panorama20 = new PANOLENS.ImagePanorama( './asset/P_20.png' );
panorama21 = new PANOLENS.ImagePanorama( './asset/P_21.png' );
panorama22 = new PANOLENS.ImagePanorama( './asset/P_22.png' );
panorama23 = new PANOLENS.ImagePanorama( './asset/P_23.png' );
panorama24 = new PANOLENS.ImagePanorama( './asset/P_24.png' );
panorama25 = new PANOLENS.ImagePanorama( './asset/P_25.png' );
panorama26 = new PANOLENS.ImagePanorama( './asset/P_26.png' );
panorama27 = new PANOLENS.ImagePanorama( './asset/P_27.png' );
panorama28 = new PANOLENS.ImagePanorama( './asset/P_28.png' );
panorama29 = new PANOLENS.ImagePanorama( './asset/P_29.png' );
panorama30 = new PANOLENS.ImagePanorama( './asset/P_30.png' );
panorama31 = new PANOLENS.ImagePanorama( './asset/P_31.png' );
panorama32 = new PANOLENS.ImagePanorama( './asset/P_32.png' );
panorama33 = new PANOLENS.ImagePanorama( './asset/P_33.png' );
panorama34 = new PANOLENS.ImagePanorama( './asset/P_34.png' );
panorama35 = new PANOLENS.ImagePanorama( './asset/P_35.png' );
panorama36 = new PANOLENS.ImagePanorama( './asset/P_36.png' );
panorama37 = new PANOLENS.ImagePanorama( './asset/P_37.png' );
panorama38 = new PANOLENS.ImagePanorama( './asset/P_38.png' );
panorama39 = new PANOLENS.ImagePanorama( './asset/P_39.png' );
panorama1f = new PANOLENS.ImagePanorama( './asset/F_1.png' );
panorama2f = new PANOLENS.ImagePanorama( './asset/F_2.png' );
panorama3f = new PANOLENS.ImagePanorama( './asset/F_3.png' );
panorama4f = new PANOLENS.ImagePanorama( './asset/F_4.png' );
panorama5f = new PANOLENS.ImagePanorama( './asset/F_5.png' );

viewer = new PANOLENS.Viewer( {output: 'console', container: container});
viewer.add( panorama1, panorama2, panorama3, panorama4, panorama5, panorama6, panorama7, panorama8, panorama9, panorama10, panorama11, panorama12);
viewer.add( panorama13, panorama14, panorama15, panorama16, panorama17, panorama18, panorama19, panorama20, panorama21, panorama22, panorama23, panorama24);
viewer.add( panorama25, panorama26, panorama27, panorama28, panorama29, panorama30, panorama31, panorama32, panorama33, panorama34, panorama35, panorama36);
viewer.add( panorama37, panorama38, panorama39, panorama1f, panorama2f, panorama3f, panorama4f, panorama5f);

panorama1.link( panorama2, new THREE.Vector3( 4153.95, -57.10, -2767.17 ) );
panorama1.link( panorama1f, new THREE.Vector3( 3835.11, 2123.84, -2386.53 ) );

panorama1.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4170.45, 33.55, -2743.46), 0 );
} );

panorama2.link( panorama1, new THREE.Vector3( 4974.89, -212.82, 319.56 ) );
panorama2.link( panorama1f, new THREE.Vector3( 4800.66, 1331.14, 285.41 ) );
panorama2.link( panorama2f, new THREE.Vector3( -3998.17, 2975.25, -348.72 ) );
panorama2.link( panorama3, new THREE.Vector3( -294.78, -134.91, 4979.25 ) );
panorama2.link( panorama4, new THREE.Vector3( -525.47, -328.50, -4959.11 ) );
panorama2.link( panorama5, new THREE.Vector3( -4691.79, -121.43, -1697.20 ) );

panorama2.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4953.52, 505.25, -337.72), 0 );
} );

panorama1f.link( panorama1, new THREE.Vector3( -416.19, -4841.20, 1167.13 ) );

panorama1f.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-1798.80, -1167.18, 4510.12), 0 );
} );

panorama2f.link( panorama2, new THREE.Vector3( -417.04, -1306.03, 4800.85 ) );

panorama2f.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-1099.67, 745.59, 4815.46), 0 );
} );

panorama3.link( panorama2, new THREE.Vector3( 1450.72, -390.55, -4762.9 ) );
panorama3.link( panorama2f, new THREE.Vector3( -1829.01, 3071.87, -3484.29 ) );
panorama3.link( panorama4, new THREE.Vector3( -1419.76, -128.86, -4783.63 ) );
panorama3.link( panorama5, new THREE.Vector3( -4439.13, -2.23, -2285.88 ) );
panorama3.link( panorama8, new THREE.Vector3( -4978.85, 215.78, -241.89 ) );

panorama3.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-1394.42, 168.83, 4788.80), 0 );
} );

panorama4.link( panorama2, new THREE.Vector3( 4958.06, -399.33, 490.28 ) );
panorama4.link( panorama2f, new THREE.Vector3( 3611.75, 2953.85, 1783.50 ) );
panorama4.link( panorama3, new THREE.Vector3( 1902.07, -78.54, 4614.95 ) );
panorama4.link( panorama5, new THREE.Vector3( -2536.84, 13.37, 4305.57 ) );
panorama4.link( panorama6, new THREE.Vector3( -4316.62, -27.03, 2518.85 ) );

panorama4.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3954.21, 102.30, -3044.77), 0 );
} );

panorama5.link( panorama2, new THREE.Vector3( 4952.52, -578.34, 191.61 ) );
panorama5.link( panorama3, new THREE.Vector3( 2743.36, -40.99, 4170.17 ) );
panorama5.link( panorama4, new THREE.Vector3( 2109.95, -347.18, -4513.58 ) );
panorama5.link( panorama6, new THREE.Vector3( -1318.78, -2115.38, -4326.18 ) );
panorama5.link( panorama7, new THREE.Vector3( -1668.35, -463.78, -4682.43 ) );
panorama5.link( panorama8, new THREE.Vector3( 130.21, -738.62, 4936.77 ) );
panorama5.link( panorama9, new THREE.Vector3( 613.41, 55.70, 4956.02 ) );
panorama5.link( panorama10, new THREE.Vector3( -4490.97, 137.68, 2172.43 ) );
panorama5.link( panorama2f, new THREE.Vector3( 3785.75, 3212.71, -542.51 ) );
panorama5.link( panorama3f, new THREE.Vector3( -2821.14, 3596.96, 2016.60 ) );

panorama5.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3958.39, 95.81, 3040.01), 0 );
} );

panorama3f.link( panorama5, new THREE.Vector3( -658.07, -3879.14, 3079.73 ) );

panorama3f.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(1941.69, 300.86, -4590.40), 0 );
} );

panorama6.link( panorama2, new THREE.Vector3( 4633.74, -453.55, 1798.55 ) );
panorama6.link( panorama4, new THREE.Vector3( 4350.79, -923.59, -2262.16 ) );
panorama6.link( panorama5, new THREE.Vector3( -2135.34, -84.21, 4512.22 ) );
panorama6.link( panorama7, new THREE.Vector3( -1877.71, 220.77, -4618.32 ) );
panorama6.link( panorama2f, new THREE.Vector3( 2911.18, 3114.16, 2604.67 ) );
panorama6.link( panorama3f, new THREE.Vector3( -3030.60, 3169.00, 2388.60 ) );

panorama6.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(521.69, 277.85, -4961.72), 0 );
} );

panorama7.link( panorama2, new THREE.Vector3( 767.08, -338.49, 4920.45 ) );
panorama7.link( panorama4, new THREE.Vector3( 2681.27, -483.65, 4181.18 ) );
panorama7.link( panorama5, new THREE.Vector3( -4182.20, -914.17, 2566.78 ) );
panorama7.link( panorama6, new THREE.Vector3( -2954.11, -1400.06, 3770.88 ) );
panorama7.link( panorama2f, new THREE.Vector3( -455.13, 1615.76, 4705.36 ) );
panorama7.link( panorama3f, new THREE.Vector3( -3757.08, 3227.58, -648.66 ) );
panorama7.link( panorama10, new THREE.Vector3( -4787.14, 504.45, -1315.4 ) );

panorama7.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(3441.59, 107.57, -3613.82), 0 );
} );

panorama8.link( panorama2, new THREE.Vector3( 4341.93, -383.98, -2443.65 ) );
panorama8.link( panorama3, new THREE.Vector3( 4315.15, 106.79, 2515.37 ) );
panorama8.link( panorama5, new THREE.Vector3( -2883.75, -650.86, -4026.12 ) );
panorama8.link( panorama9, new THREE.Vector3( -1886.41, 236.53, 4614.3 ) );
panorama8.link( panorama2f, new THREE.Vector3( 3595.71, 2073.39, -2772.88 ) );
panorama8.link( panorama3f, new THREE.Vector3( -3866.52, 3138.29, -407.03 ) );

panorama8.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(1351.86, 257.14, 4796.61), 0 );
} );

panorama9.link( panorama2, new THREE.Vector3( 2468.81, -251.07, -4334.96 ) );
panorama9.link( panorama3, new THREE.Vector3( 4905.03, -446.61, -809.90 ) );
panorama9.link( panorama5, new THREE.Vector3( -3978.55, -431.06, -2989.35 ) );
panorama9.link( panorama8, new THREE.Vector3( -3298.55, -2147.46, -3072.93 ) );
panorama9.link( panorama2f, new THREE.Vector3( 2549.92, 1678.97, -3947.50 ) );
panorama9.link( panorama3f, new THREE.Vector3( -3265.04, 3757.77, 420.35 ) );
panorama9.link( panorama10, new THREE.Vector3( -4882.14, -42.09, 1065.28 ) );

panorama9.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(549.70, -19.04, 4967.57), 0 );
} );

panorama10.link( panorama5, new THREE.Vector3( 538.84, -644.12, 4924.32 ) );
panorama10.link( panorama7, new THREE.Vector3( 4233.23, -256.65, 2630.7 ) );
panorama10.link( panorama9, new THREE.Vector3( -4155.50, -382.08, 2741.37 ) );
panorama10.link( panorama11, new THREE.Vector3( 3262.45, 64.67, -3779.8 ) );
panorama10.link( panorama12, new THREE.Vector3( -3046.01, -25.80, -3957.07 ) );
panorama10.link( panorama14, new THREE.Vector3( 264.68, 70.40, -4983.36 ) );
panorama10.link( panorama3f, new THREE.Vector3( 124.43, 3864.35, 3161.67 ) );

panorama10.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(121.09, 148.96, -4987.80), 0 );
} );

panorama11.link( panorama10, new THREE.Vector3( 2264.33, -55.61, 4447.76 ) );
panorama11.link( panorama12, new THREE.Vector3( -1792.89, -69.99, 4657.22 ) );
panorama11.link( panorama14, new THREE.Vector3( -4952.95, 150.49, 608.99 ) );

panorama11.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4296.79, -602.02, -2476.93), 0 );
} );

panorama12.link( panorama10, new THREE.Vector3( 4059.25, -95.87, -2910.21 ) );
panorama12.link( panorama11, new THREE.Vector3( 2161.00, 200.71, -4494.02 ) );
panorama12.link( panorama14, new THREE.Vector3( -2249.16, 77.90, -4454.51 ) );
panorama12.link( panorama13, new THREE.Vector3( 601.89, -188.55, 4952.57 ) );

panorama12.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4903.44, -246.92, -897.40), 0 );
} );

panorama13.link( panorama10, new THREE.Vector3( 4827.82, -156.62, 1250.6 ) );
panorama13.link( panorama12, new THREE.Vector3( 4875.09, -598.76, -883.96 ) );
panorama13.link( panorama14, new THREE.Vector3( 4422.34, -264.14, -2296.19 ) );

panorama13.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4964.52, -249.07, 490.32), 0 );
} );

panorama14.link( panorama10, new THREE.Vector3( 4975.18, -289.10, 256.76 ) );
panorama14.link( panorama11, new THREE.Vector3( 2466.52, 287.24, -4334.54 ) );
panorama14.link( panorama12, new THREE.Vector3( 1853.83, -130.80, 4631.27 ) );
panorama14.link( panorama16, new THREE.Vector3( -4935.13, 650.34, -360.92 ) );
panorama14.link( panorama15, new THREE.Vector3( -4165.10, 682.39, -2662.91 ) );
panorama14.link( panorama17, new THREE.Vector3( -4618.47, 554.62, 1805.00 ) );

panorama14.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4949.11, 660.47, 71.37), 0 );
} );

panorama15.link( panorama14, new THREE.Vector3( 4704.64, -36.82, 1672.99 ) );
panorama15.link( panorama16, new THREE.Vector3( -45.46, -148.57, 4991.78 ) );
panorama15.link( panorama18, new THREE.Vector3( -2024.06, 135.91, 4565.71 ) );
panorama15.link( panorama19, new THREE.Vector3( -3800.81, 83.53, 3235.37 ) );
panorama15.link( panorama20, new THREE.Vector3( -3563.75, 200.99, -3486.47 ) );
panorama15.link( panorama29, new THREE.Vector3( -73.69, 408.32, -4978.83 ) );

panorama15.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4494.28, 689.87, -2066.46), 0 );
} );

panorama16.link( panorama14, new THREE.Vector3( 4967.00, 359.20, 360.45 ) );
panorama16.link( panorama15, new THREE.Vector3( -131.78, 21.29, -4992.26 ) );
panorama16.link( panorama17, new THREE.Vector3( -335.41, 9.44, 4982.05 ) );
panorama16.link( panorama18, new THREE.Vector3( -3552.08, -57.26, 3506.12 ) );
panorama16.link( panorama19, new THREE.Vector3( -4992.99, -106.38, 54.08 ) );
panorama16.link( panorama20, new THREE.Vector3( -3360.64, -15.78, -3699.86 ) );

panorama16.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4847.43, 1194.64, 127.63), 0 );
} );

panorama17.link( panorama14, new THREE.Vector3( 4612.77, 58.03, -1909.99 ) );
panorama17.link( panorama16, new THREE.Vector3( 144.22, -25.23, -4991.45 ) );
panorama17.link( panorama18, new THREE.Vector3( -4068.30, 189.44, 2889.53 ) );
panorama17.link( panorama19, new THREE.Vector3( -2725.70, 71.84, -4180.19 ) );
panorama17.link( panorama20, new THREE.Vector3( -1477.92, 144.50, -4767.41 ) );
panorama17.link( panorama28, new THREE.Vector3( -564.50, 227.19, 4956.95 ) );

panorama17.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4065.00, 707.99, 2811.50), 0 );
} );

panorama18.link( panorama15, new THREE.Vector3( -2143.43, 54.52, 4509.41 ) );
panorama18.link( panorama16, new THREE.Vector3( -3876.65, -6.70, 3146.50 ) );
panorama18.link( panorama17, new THREE.Vector3( -3854.13, 334.47, -3153.88 ) );
panorama18.link( panorama19, new THREE.Vector3( -133.93, -149.30, 4987.11 ) );
panorama18.link( panorama22, new THREE.Vector3( 4677.72, 368.82, 1706.75 ) );
panorama18.link( panorama28, new THREE.Vector3( -422.34, 236.06, -4968.59 ) );

panorama18.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4013.91, 656.99, -2901.23), 0 );
} );

panorama19.link( panorama15, new THREE.Vector3( -3224.55, 114.79, 3808.00 ) );
panorama19.link( panorama16, new THREE.Vector3( -4978.29, 25.49, -395.17 ) );
panorama19.link( panorama17, new THREE.Vector3( -3136.12, 353.69, -3867.54 ) );
panorama19.link( panorama18, new THREE.Vector3( 138.38, 235.15, -4983.51 ) );
panorama19.link( panorama20, new THREE.Vector3( -93.40, 129.55, 4990.02 ) );
panorama19.link( panorama22, new THREE.Vector3( 4986.86, 244.83, 67.12 ) );

panorama19.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4989.83, 190.54, 51.16), 0 );
} );

panorama20.link( panorama15, new THREE.Vector3( -4055.85, 194.70, 2908.33 ) );
panorama20.link( panorama16, new THREE.Vector3( -3255.88, 68.04, -3784.99 ) );
panorama20.link( panorama17, new THREE.Vector3( -1170.54, 263.68, -4844.93 ) );
panorama20.link( panorama19, new THREE.Vector3( 520.43, 73.96, -4969.82 ) );
panorama20.link( panorama22, new THREE.Vector3( 4807.42, 281.01, -1307.92 ) );
panorama20.link( panorama29, new THREE.Vector3( -678.13, 33.81, 4946.64 ) );

panorama20.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(3603.37, -84.28, 3453.330), 0 );
} );

panorama21.link( panorama22, new THREE.Vector3( -1533.01, 127.89, 4753.32 ) );

panorama21.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-497.20, 160.82, -4967.62), 0 );
} );

panorama22.link( panorama21, new THREE.Vector3( -969.63, 14.55, -4901.23 ) );
panorama22.link( panorama25, new THREE.Vector3( -4987.76, 147.67, 122.92 ) );
panorama22.link( panorama24, new THREE.Vector3( -4445.12, -1.57, 2274.18 ) );
panorama22.link( panorama23, new THREE.Vector3( -4731.09, -111.21, -1595.94 ) );
panorama22.link( panorama19, new THREE.Vector3( 4968.75, 506.61, -44.04 ) );

panorama22.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4989.45, 34.72, 175.20), 0 );
} );

panorama25.link( panorama22, new THREE.Vector3( -73.28, 62.76, -4993.69 ) );
panorama25.link( panorama23, new THREE.Vector3( -4978.09, 375.60, -136.48 ) );
panorama25.link( panorama24, new THREE.Vector3( 4992.19, 46.41, 114.24 ) );
panorama25.link( panorama30, new THREE.Vector3( -3867.68, -3155.87, -121.58 ) );
panorama25.link( panorama26, new THREE.Vector3( -504.48, 106.91, 4969.36 ) );

panorama25.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-504.48, 106.91, 4969.36), 0 );
} );

panorama23.link( panorama22, new THREE.Vector3( 1822.02, 60.07, -4646.45 ) );
panorama23.link( panorama25, new THREE.Vector3( 4934.27, -732.58, 191.69 ) );
panorama23.link( panorama30, new THREE.Vector3( 4978.94, -302.29, 175.14 ) );
panorama23.link( panorama26, new THREE.Vector3( 1222.12, 264.88, 4831.06 ) );

panorama23.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4861.96, 1107.20, -225.69), 0 );
} );

panorama24.link( panorama22, new THREE.Vector3( 1599.91, -196.03, 4726.00 ) );
panorama24.link( panorama25, new THREE.Vector3( 4923.39, -857.45, 1.54 ) );
panorama24.link( panorama30, new THREE.Vector3( 4980.71, -422.58, -5.64 ) );
panorama24.link( panorama26, new THREE.Vector3( 2758.50, 33.00, -4160.71 ) );

panorama24.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4861.96, 1107.20, -225.69), 0 );
} );

panorama30.link( panorama22, new THREE.Vector3( 250.70, 240.82, -4977.40 ) );
panorama30.link( panorama23, new THREE.Vector3( -4976.48, 159.48, -329.30 ) );
panorama30.link( panorama24, new THREE.Vector3( 4973.28, 251.85, 320.95 ) );
panorama30.link( panorama25, new THREE.Vector3( 3499.32, -3565.64, 69.64 ) );
panorama30.link( panorama26, new THREE.Vector3( -246.68, -27.10, 4986.01 ) );

panorama30.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-246.68, -27.10, 4986.01), 0 );
} );

panorama26.link( panorama25, new THREE.Vector3( -1176.05, 158.48, 4847.73 ) );
panorama26.link( panorama27, new THREE.Vector3( -4815.14, 313.79, -1274.14 ) );
panorama26.link( panorama31, new THREE.Vector3( 4969.57, 143.39, 473.04 ) );

panorama26.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4995.91, 76.65, 20.48), 0 );
} );

panorama28.link( panorama17, new THREE.Vector3( -368.76, -456.77, 4957.63 ) );
panorama28.link( panorama18, new THREE.Vector3( 440.98, -496.57, 4949.13 ) );

panorama28.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(50.59, -492.40, 4970.09), 0 );
} );

panorama29.link( panorama15, new THREE.Vector3( -4872.73, 306.64, 1060.28 ) );
panorama29.link( panorama20, new THREE.Vector3( -4984.76, 317.72, 52.55 ) );

panorama29.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4961.77, 347.75, 468.83), 0 );
} );

panorama27.link( panorama25, new THREE.Vector3( -1767.63, 180.13, 4662.29 ) );
panorama27.link( panorama26, new THREE.Vector3( 966.38, 102.06, 4898.27 ) );
panorama27.link( panorama28, new THREE.Vector3( -1856.67, 96.82, -4631.61 ) );

panorama27.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4993.01, -71.64, -79.62), 0 );
} );

panorama31.link( panorama26, new THREE.Vector3( 4714.51, 302.03, 1618.23 ) );
panorama31.link( panorama32, new THREE.Vector3( -4981.19, -157.59, 240.69 ) );
panorama31.link( panorama33, new THREE.Vector3( -2665.32, 404.82, 4202.65 ) );
panorama31.link( panorama34, new THREE.Vector3( -4985.43, 309.62, -45.82 ) );

panorama31.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4985.77, 310.18, 38.90), 0 );
} );

panorama32.link( panorama26, new THREE.Vector3( 4926.37, 440.35, 679.92 ) );
panorama32.link( panorama31, new THREE.Vector3( 4974.06, -255.17, -303.68 ) );
panorama32.link( panorama33, new THREE.Vector3( 1895.73, 502.35, 4590.26 ) );
panorama32.link( panorama34, new THREE.Vector3( -4897.88, 323.01, 913.47 ) );

panorama32.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4884.16, 486.14, 911.78), 0 );
} );

panorama33.link( panorama31, new THREE.Vector3( -4219.60, -641.30, 2587.90 ) );
panorama33.link( panorama32, new THREE.Vector3( 820.79, -1136.92, 4791.80 ) );
panorama33.link( panorama34, new THREE.Vector3( 4402.05, -299.51, 2332.96 ) );

panorama33.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3108.42, -480.15, -3874.66), 0 );
} );

panorama34.link( panorama31, new THREE.Vector3( 4863.93, -218.68, 1106.44 ) );
panorama34.link( panorama32, new THREE.Vector3( 4790.30, -513.30, 1299.66 ) );
panorama34.link( panorama33, new THREE.Vector3( 4001.74, 189.85, 2980.62 ) );
panorama34.link( panorama35, new THREE.Vector3( -4878.16, 218.86, -1053.31 ) );

panorama34.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4329.98, -10.80, 2499.36), 0 );
} );

panorama35.link( panorama34, new THREE.Vector3( 4871.55, 594.37, -909.62 ) );
panorama35.link( panorama36, new THREE.Vector3( -4801.59, 330.30, 1322.17 ) );

panorama35.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4885.99, 587.45, 823.69), 0 );
} );

panorama36.link( panorama35, new THREE.Vector3( -4012.03, 98.95, -2973.58 ) );
panorama36.link( panorama37, new THREE.Vector3( 4087.96, -13.05, 2871.97 ) );

panorama36.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4151.00, -20.51, 2774.36), 0 );
} );

panorama37.link( panorama36, new THREE.Vector3( 4988.15, 134.29, -125.37 ) );
panorama37.link( panorama39, new THREE.Vector3( -4957.69, 547.50, -162.62 ) );

panorama37.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3985.24, 404.09, -2986.15), 0 );
} );

panorama39.link( panorama37, new THREE.Vector3( -3951.20, 385.66, 3030.82 ) );
panorama39.link( panorama38, new THREE.Vector3( 731.04, -569.92, -4902.76 ) );
panorama39.link( panorama5f, new THREE.Vector3( -2434.74, 3877.58, 1994.12 ) );

panorama39.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3147.04, 557.93, -3831.56), 0 );
} );

panorama5f.link( panorama39, new THREE.Vector3( -2729.26, -3983.44, 1280.20 ) );

panorama5f.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-2609.39, 309.21, 4244.62), 0 );
} );

panorama38.link( panorama39, new THREE.Vector3( -85.31, 333.25, -4982.44 ) );
panorama38.link( panorama4f, new THREE.Vector3( 2549.92, 1678.97, -3947.50 ) );

panorama38.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3475.10, 3580.16, 232.00), 0 );
} );

panorama4f.link( panorama38, new THREE.Vector3( 1327.48, -3550.79, -3254.66 ) );

panorama4f.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-2302.10, 688.25, 4374.43), 0 );
} );

radius = 1500;
var loader = new THREE.FontLoader();
var info_p2_1, info_p6_1, info_p8_1, info_p9_1, info_p9_2, info_p10_1, info_p11_1, info_p13_1_1, info_p13_1_2, info_p13_2_1, info_p13_4_1, info_p13_4_2, info_p13_4_3, info_p13_4_4, info_p14_1_1, info_p14_1_2, info_p14_1_3, info_p15_2_1, info_p15_2_2;

loader.load( './fonts/tbi.json', onFontLoaded );
function onFontLoaded ( _font ) {
        font = _font;

p1_t1 = createLabel('Санпропускник', 3.94, 20);
//panorama1.add( p1_t1 );
p1_t2 = createLabel('Автоклавная', 3.45, -250);
//panorama1.add( p1_t2 );
p1_t3 = createLabel('Кабинет приготовления \n   питательных сред', 0.22, -100);
//panorama1.add( p1_t3 );
p1_t4 = createLabel('3-й этаж', 0.8, 80);
//panorama1.add( p1_t4 );
p1_t5 = createLabel('Кабинет для работы \n    с документами', 0.7, -175);
//panorama1.add( p1_t5 );

p2_t1 = createLabel('К лабораториям', 4.6, 20);
//panorama2.add( p2_t1 );
p2_t2 = createLabel('Коридор 1-го этажа', 1.3, -250);
//panorama2.add( p2_t2 );

p3_t1 = createLabel('Санпропускник', 5.05, -20);
//panorama3.add( p3_t1 );
p3_t2 = createLabel('Автоклавная', 4.83, -330);
//panorama3.add( p3_t2 );
p3_t3 = createLabel('Микробиологические \n      исследования', 0.65, -100);
//panorama3.add( p3_t3 );
p3_t4 = createLabel('Микробиологические \n      исследования', 1.4, 00);
//panorama3.add( p3_t4 );
p3_t5 = createLabel('Микологические исследования', 3.2, -45);
//panorama3.add( p3_t5 );
p3_t6 = createLabel('Забор проб', 2.83, -55);
//panorama3.add( p3_t6 );

p4_t1 = createLabel('Коридор 1-го этажа', 0.55, -150);
//panorama4.add( p4_t1 );

p5_t1 = createLabel('Коридор 1-го этажа', 3.4, -175);
//panorama5.add( p5_t1 );

p6_t1 = createLabel('Коридор 1-го этажа', 2.4, -20);
//panorama6.add( p6_t1 );

p7_t1 = createLabel('Коридор 1-го этажа', 0.3, -20);
//panorama7.add( p7_t1 );

p8_t1 = createLabel('Коридор 1-го этажа', 2.2, -200);
//panorama8.add( p8_t1 );

p9_t1 = createLabel('Коридор 1-го этажа', 0.1, -100);
//panorama9.add( p9_t1 );

p10_t1 = createLabel('Коридор 1-го этажа', 1.16, -130);
//panorama10.add( p10_t1 );
p10_t2 = createLabel('Термостатная', 4.2, -10);
//panorama10.add( p10_t2 );

p12_t1 = createLabel('На 1-й этаж', 5.35, -130);
//panorama12.add( p12_t1 );
p12_t2 = createLabel('    Проведение \n физико-химических \n    исследований', 0.85, 250);
//panorama12.add( p12_t2 );
p12_t3 = createLabel('    Проведение \n физико-химических \n    исследований', 2.35, 100);
//panorama12.add( p12_t3 );
p12_t4 = createLabel('    Проведение \n физико-химических \n    исследований', 3.95, 50);
//panorama12.add( p12_t4 );

info_p5_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p5_1.position.set( -2519.86, -2234.82, 3687.60 );
info_p5_1.addHoverElement( document.getElementById( 'desc-p5_1' ), 200 );
panorama5.add( info_p5_1 );

info_p6_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p6_1.position.set( 2870.49, -2174.70, 3456.64 );
info_p6_1.addHoverElement( document.getElementById( 'desc-p6_1' ), 200 );
panorama6.add( info_p6_1 );

info_p8_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p8_1.position.set( -1157.05, 220.09, -4850.32 );
info_p8_1.addHoverElement( document.getElementById( 'desc-p8_1' ), 200 );
panorama8.add( info_p8_1 );

info_p9_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p9_1.position.set( 4585.20, 326.18, 1952.45 );
info_p9_1.addHoverElement( document.getElementById( 'desc-p9_1' ), 200 );
panorama9.add( info_p9_1 );

info_p9_2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p9_2.position.set( 4462.10, -1174.62, -1918.06 );
info_p9_2.addHoverElement( document.getElementById( 'desc-p9_2' ), 200 );
panorama9.add( info_p9_2 );

info_p10_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p10_1.position.set( 2853.84, 443.19, -4074.81 );
info_p10_1.addHoverElement( document.getElementById( 'desc-p10_1' ), 200 );
panorama10.add( info_p10_1 );

info_p11_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p11_1.position.set( 3079.23, -373.10, 3912.63 );
info_p11_1.addHoverElement( document.getElementById( 'desc-p11_1' ), 200 );
panorama11.add( info_p11_1 );

info_p13_1_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_1_1.position.set( 3745.09, -2321.64, 2348.57 );
info_p13_1_1.addHoverElement( document.getElementById( 'desc-p13_1_1' ), 200 );
panorama13.add( info_p13_1_1 );
info_p13_1_2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_1_2.position.set( -910.80, -2366.09, -4305.69 );
info_p13_1_2.addHoverElement( document.getElementById( 'desc-p13_1_2' ), 200 );
panorama13.add( info_p13_1_2 );

info_p13_2_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_2_1.position.set( -4919.62, 225.32, 800.70 );
info_p13_2_1.addHoverElement( document.getElementById( 'desc-p13_2_1' ), 200 );
panorama13.add( info_p13_2_1 );

info_p13_4_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_4_1.position.set( 2255.78, -2283.40, 3830.85 );
info_p13_4_1.addHoverElement( document.getElementById( 'desc-p13_4_1' ), 200 );
panorama13.add( info_p13_4_1 );
info_p13_4_2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_4_2.position.set( 3963.87, -1368.49, 2706.61 );
info_p13_4_2.addHoverElement( document.getElementById( 'desc-p13_4_2' ), 200 );
panorama13.add( info_p13_4_2 );
info_p13_4_3 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_4_3.position.set( 4585.53, -1505.99, -1276.95 );
info_p13_4_3.addHoverElement( document.getElementById( 'desc-p13_4_3' ), 200 );
panorama13.add( info_p13_4_3 );
info_p13_4_4 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_4_4.position.set( -1331.62, -3079.72, -3697.05 );
info_p13_4_4.addHoverElement( document.getElementById( 'desc-p13_4_4' ), 200 );
panorama13.add( info_p13_4_4 );

info_p14_1_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p14_1_1.position.set( -4615.91, -1770.56, -681.55 );
info_p14_1_1.addHoverElement( document.getElementById( 'desc-p14_1_1' ), 200 );
panorama14.add( info_p14_1_1 );
info_p14_1_2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p14_1_2.position.set( -4950.63, -539.46, -315.52 );
info_p14_1_2.addHoverElement( document.getElementById( 'desc-p14_1_2' ), 200 );
panorama14.add( info_p14_1_2 );
info_p14_1_3 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p14_1_3.position.set( -2884.14, -1090.44, 3931.56 );
info_p14_1_3.addHoverElement( document.getElementById( 'desc-p14_1_3' ), 200 );
panorama14.add( info_p14_1_3 );

info_p15_2_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p15_2_1.position.set( 4173.26, -1802.17, 2060.94 );
info_p15_2_1.addHoverElement( document.getElementById( 'desc-p15_2_1' ), 200 );
panorama15.add( info_p15_2_1 );
info_p15_2_2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p15_2_2.position.set( -4820.01, -821.60, -1035.75 );
info_p15_2_2.addHoverElement( document.getElementById( 'desc-p15_2_2' ), 200 );
panorama15.add( info_p15_2_2 );

}

function createLabel(text='', angle=0, height=0)
{
    titleSprite = createTextShape( text, 15);
    titleSprite.position.set( radius * Math.sin( -angle ), height, radius * Math.cos( -angle ) );
    titleSprite.position.y += 45;
    titleSprite.rotation.y = Math.PI - angle;
    titleSprite.scale.multiplyScalar( 2 );
    return titleSprite;
}




