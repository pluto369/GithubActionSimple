import{s as p,r as l,M as m,T as f,j as r,F as d,a,B as c,b as h,m as g,c as y,R as b}from"./vendor.6873c1fd.js";const v=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}};v();const B=p.div`
  margin: 0;
  padding: 0;
  height: 800px;
  width: 100vw;
  overflow: hidden;
`;function L(){return l.exports.useEffect(()=>{new m("map",{center:[-.113049,51.498568],zoom:14,baseLayer:new f("base",{urlTemplate:"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",subdomains:["a","b","c","d"]})})},[]),r(d,{children:r(B,{id:"map"})})}function w(){const s=()=>{g.info("This is a normal message")};return a(d,{children:[a("h1",{children:["Github Action Simple:",l.exports.version]}),r(c,{type:"primary",children:"Antd\u6D4B\u8BD5"}),r(h,{color:"orange",children:"Antd\u6D4B\u8BD5"}),r(c,{type:"dashed",onClick:s,children:"Display normal message"}),r(L,{})]})}const x=y(document.getElementById("root"));x.render(r(b.StrictMode,{children:r(w,{})}));