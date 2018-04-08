(function(window){var svgSprite='<svg><symbol id="icon-cuowutishi" viewBox="0 0 1024 1024"><path d="M504.787121 16.587353c-278.279557 0-503.868569 225.589013-503.868569 503.868569 0 278.279557 225.589013 503.868569 503.868569 503.868569s503.868569-225.589013 503.868569-503.868569C1008.65569 242.176366 783.06567 16.587353 504.787121 16.587353zM504.787121 984.015006c-256.016628 0-463.559084-207.542456-463.559084-463.559084 0-256.016628 207.542456-463.559084 463.559084-463.559084s463.559084 207.542456 463.559084 463.559084C968.346205 776.47255 760.803749 984.015006 504.787121 984.015006z"  ></path><path d="M501.60368 781.248216m-40.309486 0a40 40 0 1 0 80.618971 0 40 40 0 1 0-80.618971 0Z"  ></path><path d="M526.594553 630.416168c0 13.802976-11.188905 24.991881-24.991881 24.991881l0 0c-13.802976 0-24.990873-11.188905-24.990873-24.991881l0-387.404388c0-13.801968 11.188905-24.990873 24.990873-24.990873l0 0c13.802976 0 24.991881 11.188905 24.991881 24.990873L526.594553 630.416168z"  ></path><path d="M504.787121 16.459371c-277.981266 0-503.330437 225.348163-503.330437 503.32943 0 277.983282 225.349171 503.330437 503.330437 503.330437 277.982274 0 503.330437-225.347156 503.330437-503.330437C1008.117559 241.807534 782.769395 16.459371 504.787121 16.459371zM504.787121 970.571792c-248.960452 0-450.781984-201.820524-450.781984-450.782992 0-248.959444 201.821532-450.781984 450.781984-450.781984 248.96146 0 450.780977 201.82254 450.780977 450.781984C955.568098 768.751268 753.748581 970.571792 504.787121 970.571792z"  ></path></symbol><symbol id="icon-duigou" viewBox="0 0 1024 1024"><path d="M997.888 70.144C686.592 261.12 460.8 502.272 358.912 623.104l-248.832-195.072-110.08 88.576 429.568 437.248c73.728-189.44 308.224-559.616 594.432-822.784l-26.112-60.928m0 0z"  ></path></symbol><symbol id="icon-cuowu" viewBox="0 0 1024 1024"><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 983.466667C251.733333 983.466667 40.533333 772.266667 40.533333 512 40.533333 251.733333 251.733333 40.533333 512 40.533333c260.266667 0 471.466667 211.2 471.466667 471.466667 0 260.266667-211.2 471.466667-471.466667 471.466667z" fill="#666767" ></path><path d="M663.466667 360.533333c-8.533333-8.533333-21.333333-8.533333-29.866667 0L512 482.133333l-121.6-121.6c-8.533333-8.533333-21.333333-8.533333-29.866667 0-8.533333 8.533333-8.533333 21.333333 0 29.866667l121.6 121.6-121.6 121.6c-8.533333 8.533333-8.533333 21.333333 0 29.866667 8.533333 8.533333 21.333333 8.533333 29.866667 0l121.6-121.6 121.6 121.6c8.533333 8.533333 21.333333 8.533333 29.866667 0 8.533333-8.533333 8.533333-21.333333 0-29.866667L541.866667 512l121.6-121.6c8.533333-6.4 8.533333-21.333333 0-29.866667z" fill="#666767" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)