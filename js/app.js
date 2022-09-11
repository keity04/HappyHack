window.addEventListener('load', function () {
  //下記particles-js↓のところはHTMLで指定したidと合わせてください
  particlesJS('particles-js', {
    //パーティクルの設定
    "particles": {
      //シェイプの数
      "number": {
        "value": 120,//シェイプの数
        "density": {
          "enable": true,//密度を変更する
          "value_area": 800//密集度
        }
      },
      //色
      "color": {
        "value": ["ffffff"]
      },
      //シェイプの形状
      "shape": {
        "type": "circle",//シェイプの形
        "stroke": {
          "width": 0,//外線つけない
          "color": "#000000"//つける場合の線色
        },
        //※typeがpolygon(多角形)の場合
        "polygon": {
          "nb_sides": 5//角の数
        },
      },
      //シェイプの透明度
      "opacity": {
        "value": 0.5,//透明度(1で不透明)
        "random": false,//透明度をランダムにしない
        //randomがtrueの場合
        "anim": {
          "enable": false,//透明度のアニメーションをしない
          "speed": 1,//アニメーションスピード
          "opacity_min": 0.1,//透明度の最小値
          "sync": false//各シェイプを同時に動かさない
        }
      },
      //シェイプの大きさ
      "size": {
        "value": 3,//大きさ
        "random": true,//大きさをランダムにする falseで均一
        "anim": {
          "enable": false,//シェイプの大きさをアニメーションしない
          "speed": 40,//アニメーションのスピード
          "size_min": 0.1,//サイズの最小値
          "sync": false//各シェイプを同時に動かさない
        }
      },
      //シェイプ間を結ぶ線
      "line_linked": {
        "enable_auto": true,//線をつけない
        "distance": 150,//繋がりの数
        "color": "#ffffff",//線の色
        "opacity": 0.8,//透明度　1で不透明
        "width": 0.7//線の太さ
      },
      //シェイプの動き
      "move": {
        "ramdom": false,
        "enable": true,//動きを付ける
        "speed": 7,//シェイプが動くスピード数値が大きいと早い
        "direction": "none",//動きの方向(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-left)
        "straight": false,//動きを動きを止めるか否か
        "out_mode": "out",//外枠に達した際のシェイプの動き　bounce→跳ね返る　out→フレームアウト
        /*シェイプを引き寄せる*/
        "attract": {
          "enable": false,//引き寄せない
          "rotateX": 600,//横軸の指定
          "rotateY": 1200//横軸の指定
        }
      }
    },
    //相互作用
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        //カーソルを乗せた時の動き
        "onhover": {
          "enable": false,//無効
          "mode": "repulse"//enableがtrueの場合の動き(下の★のリストの名前入れるとその動きが発動)
        },
        //クリックしたときの動き
        "onclick": {
          "enable": false,//無効
          "mode": "push"//(下の★のリストの名前入れるとその動きが発動)
        },
        "resize": true//リサイズしたとき拡縮しない
      },
      //各モード設定した場合の動き
      "modes": {
        //★シェイプとカーソルの間に線ができる
        "grab": {
          "distance": 400,//カーソルからの反応距離
          "line_linked": {
            "opacity": 1//線の不当明度
          }
        },
        //★シェイプが膨らむ
        "bubble": {
          "distance": 200,//カーソルからの反応距離
          "size": 40,//膨らむ際の大きさ
          "duration": 2,//持続時間
          "opacity": 8,//透明度
          "speed": 3//速度
        },
        //★シェイプに触れるとカーソルから逃げる
        "repulse": {
          "distance": 200//カーソルからの反応距離
        },
        //★シェイプを増やす
        "push": {
          "particles_nb": 4//数
        },
        //★シェイプを減らす
        "remove": {
          "particles_nb": 2//数
        }
      }
    },
    "retina_detect": true,//Retina Display(*高画素密度のディスプレイ)を対応する
  }
  );
});






// /* -----------------------------------------------
// /* How to use? : Check the GitHub README
// /* ----------------------------------------------- */

// /* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
// /*
// particlesJS.load('particles-js', 'particles.json', function() {
//   console.log('particles.js loaded - callback');
// });
// */

// /* Otherwise just put the config content (json): */

// particlesJS('particles-js',

//   {
//     "particles": {
//       "number": {
//         "value": 80,
//         "density": {
//           "enable": true,
//           "value_area": 800
//         }
//       },
//       "color": {
//         "value": "#ffffff"
//       },
//       "shape": {
//         "type": "circle",
//         "stroke": {
//           "width": 0,
//           "color": "#000000"
//         },
//         "polygon": {
//           "nb_sides": 5
//         },
//         "image": {
//           "src": "img/github.svg",
//           "width": 100,
//           "height": 100
//         }
//       },
//       "opacity": {
//         "value": 0.5,
//         "random": false,
//         "anim": {
//           "enable": false,
//           "speed": 1,
//           "opacity_min": 0.1,
//           "sync": false
//         }
//       },
//       "size": {
//         "value": 5,
//         "random": true,
//         "anim": {
//           "enable": false,
//           "speed": 40,
//           "size_min": 0.1,
//           "sync": false
//         }
//       },
//       "line_linked": {
//         "enable": true,
//         "distance": 150,
//         "color": "#ffffff",
//         "opacity": 0.4,
//         "width": 1
//       },
//       "move": {
//         "enable": true,
//         "speed": 6,
//         "direction": "none",
//         "random": false,
//         "straight": false,
//         "out_mode": "out",
//         "attract": {
//           "enable": false,
//           "rotateX": 600,
//           "rotateY": 1200
//         }
//       }
//     },
//     "interactivity": {
//       "detect_on": "canvas",
//       "events": {
//         "onhover": {
//           "enable": true,
//           "mode": "repulse"
//         },
//         "onclick": {
//           "enable": true,
//           "mode": "push"
//         },
//         "resize": true
//       },
//       "modes": {
//         "grab": {
//           "distance": 400,
//           "line_linked": {
//             "opacity": 1
//           }
//         },
//         "bubble": {
//           "distance": 400,
//           "size": 40,
//           "duration": 2,
//           "opacity": 8,
//           "speed": 3
//         },
//         "repulse": {
//           "distance": 200
//         },
//         "push": {
//           "particles_nb": 4
//         },
//         "remove": {
//           "particles_nb": 2
//         }
//       }
//     },
//     "retina_detect": true,
//     "config_demo": {
//       "hide_card": false,
//       "background_color": "#b61924",
//       "background_image": "",
//       "background_position": "50% 50%",
//       "background_repeat": "no-repeat",
//       "background_size": "cover"
//     }
//   }

// );