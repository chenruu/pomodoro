(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["settings"],{"26d3":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"settings"}},[n("b-container",[n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("h1",{staticClass:"text-center"},[e._v("設定")])]),n("b-col",{attrs:{cols:"12"}},[n("b-table",{attrs:{items:e.items,fields:e.fields},on:{"row-clicked":e.select},scopedSlots:e._u([{key:"cell(src)",fn:function(e){return[n("audio",{attrs:{controls:"",src:s("1771")("./"+e.value)}})]}},{key:"cell(select)",fn:function(t){return[t.item.src===e.sound?n("span",[e._v("V")]):e._e()]}}])})],1)],1)],1)],1)},c=[],l={data:function(){return{items:[{name:"鬧鈴",src:"alarm.mp3"},{name:"yay",src:"yay.mp3"}],fields:[{key:"name",label:"名稱"},{key:"src",label:"試聽"},{key:"select",label:"選擇"}]}},methods:{select:function(e){console.log(e),this.$store.commit("selectSound",e.src)}},computed:{sound:function(){return this.$store.state.sound}}},o=l,r=s("2877"),a=Object(r["a"])(o,n,c,!1,null,null,null);t["default"]=a.exports}}]);
//# sourceMappingURL=settings.6828220a.js.map