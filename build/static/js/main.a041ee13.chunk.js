(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(2),l=t.n(o);t(13);var s=function(){return r.a.createElement("div",{className:"gomoku__gameboard"},r.a.createElement("span",{className:"gomoku__gameboard-outer"}),r.a.createElement("span",{className:"gomoku__gameboard-horizontal"}),r.a.createElement("span",{className:"gomoku__gameboard-horizontal two"}),r.a.createElement("span",{className:"gomoku__gameboard-horizontal three"}),r.a.createElement("span",{className:"gomoku__gameboard-horizontal four"}),r.a.createElement("span",{className:"gomoku__gameboard-horizontal five"}),r.a.createElement("span",{className:"gomoku__gameboard-horizontal six"}),r.a.createElement("span",{className:"gomoku__gameboard-horizontal seven"}),r.a.createElement("span",{className:"gomoku__gameboard-horizontal eight"}),r.a.createElement("span",{className:"gomoku__gameboard-horizontal nine"}),r.a.createElement("span",{className:"gomoku__gameboard-vertical"}),r.a.createElement("span",{className:"gomoku__gameboard-vertical v-two"}),r.a.createElement("span",{className:"gomoku__gameboard-vertical v-three"}),r.a.createElement("span",{className:"gomoku__gameboard-vertical v-four"}),r.a.createElement("span",{className:"gomoku__gameboard-vertical v-five"}),r.a.createElement("span",{className:"gomoku__gameboard-vertical v-six"}),r.a.createElement("span",{className:"gomoku__gameboard-vertical v-seven"}),r.a.createElement("span",{className:"gomoku__gameboard-vertical v-eigth"}),r.a.createElement("span",{className:"gomoku__gameboard-vertical v-nine"}),r.a.createElement("span",{className:"gomoku__gameboard-vertical center"}))},c=t(3),m=t(4),i=t(6),u=t(5),g=t(7);var p=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(u.a)(a).call(this,e))).state={piece:[],turn:!0,winner:null,history:Array(19).fill(null)},t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){for(var e=this.state.piece,a=[],t=[],n=-9;n<=351;n+=20)a.push(n);for(var r=-375;r<=-15;r+=20)t.push(r);for(var o=1;o<=19;o+=1)for(var l=1;l<=19;l+=1){var s={name:"gomoku__content-piece-L".concat(l,"-").concat(o),x:a[o-1],y:t[l-1],ide:"L".concat(l).concat(o),display:!1,player:"none"};e.push(s),this.setState({piece:e})}}},{key:"handleContentChange",value:function(e){var a=this.state,t=a.turn,n=a.piece,r=a.winner,o=a.history,l=t?"white":"#666666",s=e.target.getAttribute("class"),c=s.substr([s.indexOf("L")+1]),m=n.filter(function(e){return e.name===s});if(m[0].display=!0,null===r&&"none"===m[0].player){m[0].player=l;var i=c.substring(c,c.indexOf("-")),u=c.substr([c.indexOf("-")+1]);if(null===o[i-1]){var g=Array(19).fill(null);g[u-1]=l,o[i-1]=g}else{var p=o[i-1];p[u-1]=l,o[i-1]=p}this.setState({piece:n,turn:!t,history:o}),function(e,a,t){for(var n=[],r=0;r<e.length;r+=1)if(null!==e[r]&&-1!==e[r].indexOf(t)){for(var o=a[r].indexOf(t),l=[];-1!==o;)l.push(o),o=a[r].indexOf(t,o+1);n=[];for(var s=0;s<l.length;s+=1){o=l[s];for(var c=r;c<r+5&&c<20;c+=1)e[c]&&e[c+1]&&e[c][o]&&e[c][o]===e[c+1][o]&&n.push(!0);if(4!==n.length){n=[];for(var m=o;m<o+5&&m<20;m+=1)e[r][m]&&e[r][m]===e[r][m+1]&&n.push(!0)}if(4!==n.length){n=[];for(var i=r,u=o;i>r-5&&i>0&&u>o-5&&u>0;i-=1,u-=1)e[i]&&e[i-1]&&e[i][u]&&e[i][u]===e[i-1][u-1]&&n.push(!0)}if(4!==n.length){n=[];for(var g=r,p=o;g>r-5&&g<20&&p<o+5&&p<20;g-=1,p+=1)e[g]&&e[g-1]&&e[g][p]&&e[g][p]===e[g-1][p+1]&&n.push(!0)}if(4===n.length)return!0}}return!1}(o,o,l)&&this.setState({winner:l})}}},{key:"render",value:function(){var e=this,a=this.state,t=a.piece,n=a.winner,o=a.turn;return r.a.createElement("div",{className:"gomoku__content"},t.map(function(a){return r.a.createElement("button",{type:"button",className:a.name,style:{opacity:a.display?"1":"0",top:a.y,left:a.x,background:a.player},key:a.name,onClick:e.handleContentChange.bind(e)})}),n?r.a.createElement("div",{className:"gomoku__content-result"},r.a.createElement("b",null,"Winner\uff1a","white"===n?"\u767d\u5b50":"\u9ed1\u5b50"),r.a.createElement("div",{className:"gomoku__content-tips"},"\u91cd\u65b0\u8f09\u5165\u9801\u9762\u5373\u53ef\u958b\u59cb\u65b0\u68cb\u5c40")):r.a.createElement("div",{className:"gomoku__content-turn"},"\u8f2a\u5230\u300c",r.a.createElement("b",null,o?"\u767d\u5b50":"\u9ed1\u5b50"),"\u300d\u4e0b\u68cb"))}}]),a}(n.Component);var v=function(){return r.a.createElement("main",{className:"gomoku"},r.a.createElement("header",{className:"gomoku__title"},"\u4e94\u5b50\u68cb",r.a.createElement("i",{className:"fas fa-circle"}),r.a.createElement("span",null,r.a.createElement("i",{className:"gomoku__title-circle"}))),r.a.createElement(s,null),r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.a041ee13.chunk.js.map