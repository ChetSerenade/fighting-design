import{_ as C,A as p,c as A,C as l,y as o,v as a,M as y,o as u,a as s,K as v,L as h}from"./chunks/framework.59a1e8ef.js";const G=JSON.parse('{"title":"Layout 布局","description":"","frontmatter":{},"headers":[],"relativePath":"components/layout.md","filePath":"components/layout.md","lastUpdated":1693188676000}'),f={name:"components/layout.md"},t=D=>(v("data-v-3a917504"),D=D(),h(),D),_=y('<h1 id="layout-布局" tabindex="-1" data-v-3a917504>Layout 布局 <a class="header-anchor" href="#layout-布局" aria-label="Permalink to &quot;Layout 布局&quot;" data-v-3a917504>​</a></h1><p data-v-3a917504>处理常见的一些网页布局，实现快速搭建</p><ul data-v-3a917504><li data-v-3a917504><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/layout" target="_blank" rel="noreferrer" data-v-3a917504>源代码</a></li><li data-v-3a917504><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/components/layout.md" target="_blank" rel="noreferrer" data-v-3a917504>文档编辑</a></li></ul><h2 id="基本使用" tabindex="-1" data-v-3a917504>基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;" data-v-3a917504>​</a></h2><ul data-v-3a917504><li data-v-3a917504><code data-v-3a917504>f-layout</code> 外层容器, 可以实现垂直、水平、嵌套布局</li><li data-v-3a917504><code data-v-3a917504>f-main</code> 主体容器</li><li data-v-3a917504><code data-v-3a917504>f-header</code> 头部容器</li><li data-v-3a917504><code data-v-3a917504>f-aside</code> 侧栏容器</li><li data-v-3a917504><code data-v-3a917504>f-footer</code> 底栏容器</li></ul><h2 id="基本布局" tabindex="-1" data-v-3a917504>基本布局 <a class="header-anchor" href="#基本布局" aria-label="Permalink to &quot;基本布局&quot;" data-v-3a917504>​</a></h2><p data-v-3a917504>下面是由 <code data-v-3a917504>Fighting Design</code> 提供的几种常见的页面布局演示</p>',7),b=t(()=>a("br",null,null,-1)),m=t(()=>a("br",null,null,-1)),g=t(()=>a("br",null,null,-1)),x=t(()=>a("br",null,null,-1)),B=t(()=>a("br",null,null,-1)),k=t(()=>a("br",null,null,-1)),M=t(()=>a("br",null,null,-1)),q=t(()=>a("br",null,null,-1)),P=t(()=>a("br",null,null,-1)),H=t(()=>a("br",null,null,-1)),I=t(()=>a("br",null,null,-1)),T=t(()=>a("br",null,null,-1)),L=t(()=>a("br",null,null,-1)),S=t(()=>a("br",null,null,-1)),E=t(()=>a("br",null,null,-1)),V=t(()=>a("br",null,null,-1)),N=t(()=>a("div",{class:"language-html"},[a("button",{title:"Copy Code",class:"copy"}),a("span",{class:"lang"},"html"),a("pre",{class:"shiki material-theme-palenight"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-header"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"Header"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-header"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-main"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"Main"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-main"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-header"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"Header"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-header"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-main"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"Main"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-main"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-footer"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"Footer"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-footer"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-aside"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"Aside"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-aside"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-main"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"Main"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-main"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-header"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"Header"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-header"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-aside"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"Aside"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-aside"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-main"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"Main"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-main"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-header"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"Header"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-header"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-aside"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"width"),a("span",{style:{color:"#89DDFF"}},"="),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#C3E88D"}},"70px"),a("span",{style:{color:"#89DDFF"}},'"'),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"Aside1"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-aside"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-aside"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"Aside2"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-aside"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-main"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"Main"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-main"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-header"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"Header"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-header"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-main"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"Main"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-main"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-aside"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"Aside"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-aside"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-header"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"Header"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-header"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-aside"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"Aside"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-aside"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"        "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-main"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"Main"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-main"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"        "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-footer"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"Footer"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-footer"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-aside"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"Aside"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-aside"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-header"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"Header"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-header"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-main"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"Main"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-main"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-aside"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"Aside"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-aside"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-header"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"Header"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-header"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-main"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"Main"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-main"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"      "),a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"f-footer"),a("span",{style:{color:"#89DDFF"}},">"),a("span",{style:{color:"#A6ACCD"}},"Footer"),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-footer"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"f-layout"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"template"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"}),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"<"),a("span",{style:{color:"#F07178"}},"style"),a("span",{style:{color:"#89DDFF"}}," "),a("span",{style:{color:"#C792EA"}},"scoped"),a("span",{style:{color:"#89DDFF"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"."),a("span",{style:{color:"#FFCB6B"}},"f-header"),a("span",{style:{color:"#89DDFF"}},",")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"."),a("span",{style:{color:"#FFCB6B"}},"f-footer"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"background-color"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"#"),a("span",{style:{color:"#A6ACCD"}},"6b8bf5"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"color"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"#"),a("span",{style:{color:"#A6ACCD"}},"fff"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"text-align"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," center"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"line-height"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#F78C6C"}},"60px"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"."),a("span",{style:{color:"#FFCB6B"}},"f-aside"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"background-color"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"#"),a("span",{style:{color:"#A6ACCD"}},"65adf0"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"color"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"#"),a("span",{style:{color:"#A6ACCD"}},"fff"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"text-align"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," center"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"line-height"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#F78C6C"}},"200px"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"."),a("span",{style:{color:"#FFCB6B"}},"f-main"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"background-color"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"#"),a("span",{style:{color:"#A6ACCD"}},"3178c6"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"color"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#89DDFF"}},"#"),a("span",{style:{color:"#A6ACCD"}},"fff"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"text-align"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," center"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"    "),a("span",{style:{color:"#B2CCD6"}},"line-height"),a("span",{style:{color:"#89DDFF"}},":"),a("span",{style:{color:"#A6ACCD"}}," "),a("span",{style:{color:"#F78C6C"}},"160px"),a("span",{style:{color:"#89DDFF"}},";")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#A6ACCD"}},"  "),a("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#89DDFF"}},"</"),a("span",{style:{color:"#F07178"}},"style"),a("span",{style:{color:"#89DDFF"}},">")])])])],-1)),w=y(`<h2 id="layout-attributes" tabindex="-1" data-v-3a917504>layout Attributes <a class="header-anchor" href="#layout-attributes" aria-label="Permalink to &quot;layout Attributes&quot;" data-v-3a917504>​</a></h2><div class="vp-table__container" data-v-3a917504><table data-v-3a917504><thead data-v-3a917504><tr data-v-3a917504><th data-v-3a917504>参数</th><th data-v-3a917504>说明</th><th data-v-3a917504>类型</th><th data-v-3a917504>可选值</th><th data-v-3a917504>默认值</th></tr></thead><tbody data-v-3a917504><tr data-v-3a917504><td data-v-3a917504><code data-v-3a917504>direction</code></td><td data-v-3a917504>排列方向</td><td data-v-3a917504><a href="#layoutdirection" data-v-3a917504>LayoutDirection</a></td><td data-v-3a917504><code data-v-3a917504>horizontal</code> <code data-v-3a917504>vertical</code></td><td data-v-3a917504>——</td></tr></tbody></table></div><h2 id="header-attributes" tabindex="-1" data-v-3a917504>Header Attributes <a class="header-anchor" href="#header-attributes" aria-label="Permalink to &quot;Header Attributes&quot;" data-v-3a917504>​</a></h2><div class="vp-table__container" data-v-3a917504><table data-v-3a917504><thead data-v-3a917504><tr data-v-3a917504><th data-v-3a917504>参数</th><th data-v-3a917504>说明</th><th data-v-3a917504>类型</th><th data-v-3a917504>可选值</th><th data-v-3a917504>默认值</th></tr></thead><tbody data-v-3a917504><tr data-v-3a917504><td data-v-3a917504><code data-v-3a917504>height</code></td><td data-v-3a917504>高度</td><td data-v-3a917504>string / number</td><td data-v-3a917504>——</td><td data-v-3a917504>——</td></tr><tr data-v-3a917504><td data-v-3a917504><code data-v-3a917504>padding</code></td><td data-v-3a917504>内边距</td><td data-v-3a917504>string / number</td><td data-v-3a917504>——</td><td data-v-3a917504>——</td></tr></tbody></table></div><h2 id="main-attributes" tabindex="-1" data-v-3a917504>Main Attributes <a class="header-anchor" href="#main-attributes" aria-label="Permalink to &quot;Main Attributes&quot;" data-v-3a917504>​</a></h2><div class="vp-table__container" data-v-3a917504><table data-v-3a917504><thead data-v-3a917504><tr data-v-3a917504><th data-v-3a917504>参数</th><th data-v-3a917504>说明</th><th data-v-3a917504>类型</th><th data-v-3a917504>可选值</th><th data-v-3a917504>默认值</th></tr></thead><tbody data-v-3a917504><tr data-v-3a917504><td data-v-3a917504><code data-v-3a917504>padding</code></td><td data-v-3a917504>内边距</td><td data-v-3a917504>string / number</td><td data-v-3a917504>——</td><td data-v-3a917504>——</td></tr></tbody></table></div><h2 id="aside-attributes" tabindex="-1" data-v-3a917504>Aside Attributes <a class="header-anchor" href="#aside-attributes" aria-label="Permalink to &quot;Aside Attributes&quot;" data-v-3a917504>​</a></h2><div class="vp-table__container" data-v-3a917504><table data-v-3a917504><thead data-v-3a917504><tr data-v-3a917504><th data-v-3a917504>参数</th><th data-v-3a917504>说明</th><th data-v-3a917504>类型</th><th data-v-3a917504>可选值</th><th data-v-3a917504>默认值</th></tr></thead><tbody data-v-3a917504><tr data-v-3a917504><td data-v-3a917504><code data-v-3a917504>width</code></td><td data-v-3a917504>宽度</td><td data-v-3a917504>string / number</td><td data-v-3a917504>——</td><td data-v-3a917504>——</td></tr><tr data-v-3a917504><td data-v-3a917504><code data-v-3a917504>padding</code></td><td data-v-3a917504>内边距</td><td data-v-3a917504>string / number</td><td data-v-3a917504>——</td><td data-v-3a917504>——</td></tr></tbody></table></div><h2 id="footer-attributes" tabindex="-1" data-v-3a917504>Footer Attributes <a class="header-anchor" href="#footer-attributes" aria-label="Permalink to &quot;Footer Attributes&quot;" data-v-3a917504>​</a></h2><div class="vp-table__container" data-v-3a917504><table data-v-3a917504><thead data-v-3a917504><tr data-v-3a917504><th data-v-3a917504>参数</th><th data-v-3a917504>说明</th><th data-v-3a917504>类型</th><th data-v-3a917504>可选值</th><th data-v-3a917504>默认值</th></tr></thead><tbody data-v-3a917504><tr data-v-3a917504><td data-v-3a917504><code data-v-3a917504>height</code></td><td data-v-3a917504>高度</td><td data-v-3a917504>string / number</td><td data-v-3a917504>——</td><td data-v-3a917504>——</td></tr><tr data-v-3a917504><td data-v-3a917504><code data-v-3a917504>padding</code></td><td data-v-3a917504>内边距</td><td data-v-3a917504>string / number</td><td data-v-3a917504>——</td><td data-v-3a917504>——</td></tr></tbody></table></div><h2 id="interface" tabindex="-1" data-v-3a917504>Interface <a class="header-anchor" href="#interface" aria-label="Permalink to &quot;Interface&quot;" data-v-3a917504>​</a></h2><p data-v-3a917504>组件导出以下类型定义：</p><div class="language-ts" data-v-3a917504><button title="Copy Code" class="copy" data-v-3a917504></button><span class="lang" data-v-3a917504>ts</span><pre class="shiki material-theme-palenight" data-v-3a917504><code data-v-3a917504><span class="line" data-v-3a917504><span style="color:#89DDFF;font-style:italic;" data-v-3a917504>import</span><span style="color:#A6ACCD;" data-v-3a917504> </span><span style="color:#89DDFF;font-style:italic;" data-v-3a917504>type</span><span style="color:#A6ACCD;" data-v-3a917504> </span><span style="color:#89DDFF;" data-v-3a917504>{</span></span>
<span class="line" data-v-3a917504><span style="color:#F07178;" data-v-3a917504>  </span><span style="color:#A6ACCD;" data-v-3a917504>AsideProps</span><span style="color:#89DDFF;" data-v-3a917504>,</span></span>
<span class="line" data-v-3a917504><span style="color:#F07178;" data-v-3a917504>  </span><span style="color:#A6ACCD;" data-v-3a917504>AsideInstance</span><span style="color:#89DDFF;" data-v-3a917504>,</span></span>
<span class="line" data-v-3a917504><span style="color:#F07178;" data-v-3a917504>  </span><span style="color:#A6ACCD;" data-v-3a917504>FooterInstance</span><span style="color:#89DDFF;" data-v-3a917504>,</span></span>
<span class="line" data-v-3a917504><span style="color:#F07178;" data-v-3a917504>  </span><span style="color:#A6ACCD;" data-v-3a917504>FooterProps</span><span style="color:#89DDFF;" data-v-3a917504>,</span></span>
<span class="line" data-v-3a917504><span style="color:#F07178;" data-v-3a917504>  </span><span style="color:#A6ACCD;" data-v-3a917504>HeaderInstance</span><span style="color:#89DDFF;" data-v-3a917504>,</span></span>
<span class="line" data-v-3a917504><span style="color:#F07178;" data-v-3a917504>  </span><span style="color:#A6ACCD;" data-v-3a917504>HeaderProps</span><span style="color:#89DDFF;" data-v-3a917504>,</span></span>
<span class="line" data-v-3a917504><span style="color:#F07178;" data-v-3a917504>  </span><span style="color:#A6ACCD;" data-v-3a917504>LayoutInstance</span><span style="color:#89DDFF;" data-v-3a917504>,</span></span>
<span class="line" data-v-3a917504><span style="color:#F07178;" data-v-3a917504>  </span><span style="color:#A6ACCD;" data-v-3a917504>LayoutProps</span><span style="color:#89DDFF;" data-v-3a917504>,</span></span>
<span class="line" data-v-3a917504><span style="color:#F07178;" data-v-3a917504>  </span><span style="color:#A6ACCD;" data-v-3a917504>LayoutDirection</span><span style="color:#89DDFF;" data-v-3a917504>,</span></span>
<span class="line" data-v-3a917504><span style="color:#F07178;" data-v-3a917504>  </span><span style="color:#A6ACCD;" data-v-3a917504>MainInstance</span><span style="color:#89DDFF;" data-v-3a917504>,</span></span>
<span class="line" data-v-3a917504><span style="color:#F07178;" data-v-3a917504>  </span><span style="color:#A6ACCD;" data-v-3a917504>MainProps</span></span>
<span class="line" data-v-3a917504><span style="color:#89DDFF;" data-v-3a917504>}</span><span style="color:#A6ACCD;" data-v-3a917504> </span><span style="color:#89DDFF;font-style:italic;" data-v-3a917504>from</span><span style="color:#A6ACCD;" data-v-3a917504> </span><span style="color:#89DDFF;" data-v-3a917504>&#39;</span><span style="color:#C3E88D;" data-v-3a917504>fighting-design</span><span style="color:#89DDFF;" data-v-3a917504>&#39;</span></span></code></pre></div><h3 id="layoutdirection" tabindex="-1" data-v-3a917504>LayoutDirection <a class="header-anchor" href="#layoutdirection" aria-label="Permalink to &quot;LayoutDirection&quot;" data-v-3a917504>​</a></h3><div class="language-ts" data-v-3a917504><button title="Copy Code" class="copy" data-v-3a917504></button><span class="lang" data-v-3a917504>ts</span><pre class="shiki material-theme-palenight" data-v-3a917504><code data-v-3a917504><span class="line" data-v-3a917504><span style="color:#C792EA;" data-v-3a917504>type</span><span style="color:#A6ACCD;" data-v-3a917504> </span><span style="color:#FFCB6B;" data-v-3a917504>LayoutDirection</span><span style="color:#A6ACCD;" data-v-3a917504> </span><span style="color:#89DDFF;" data-v-3a917504>=</span><span style="color:#A6ACCD;" data-v-3a917504> </span><span style="color:#89DDFF;" data-v-3a917504>&#39;</span><span style="color:#C3E88D;" data-v-3a917504>horizontal</span><span style="color:#89DDFF;" data-v-3a917504>&#39;</span><span style="color:#A6ACCD;" data-v-3a917504> </span><span style="color:#89DDFF;" data-v-3a917504>|</span><span style="color:#A6ACCD;" data-v-3a917504> </span><span style="color:#89DDFF;" data-v-3a917504>&#39;</span><span style="color:#C3E88D;" data-v-3a917504>vertical</span><span style="color:#89DDFF;" data-v-3a917504>&#39;</span></span></code></pre></div><h2 id="contributors" tabindex="-1" data-v-3a917504>Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;" data-v-3a917504>​</a></h2>`,16),$={href:"https://github.com/Tyh2001",target:"_blank"},z={href:"https://github.com/XiaoLi-sach",target:"_blank"};function R(D,J,K,O,U,X){const c=p("f-header"),e=p("f-main"),n=p("f-layout"),F=p("f-footer"),r=p("f-aside"),i=p("vp-demo"),d=p("f-avatar");return u(),A("div",null,[_,l(i,{source:""},{source:o(()=>[l(n,null,{default:o(()=>[l(c,null,{default:o(()=>[s("Header")]),_:1}),l(e,null,{default:o(()=>[s("Main")]),_:1})]),_:1}),b,m,l(n,null,{default:o(()=>[l(c,null,{default:o(()=>[s("Header")]),_:1}),l(e,null,{default:o(()=>[s("Main")]),_:1}),l(F,null,{default:o(()=>[s("Footer")]),_:1})]),_:1}),g,x,l(n,null,{default:o(()=>[l(r,null,{default:o(()=>[s("Aside")]),_:1}),l(e,null,{default:o(()=>[s("Main")]),_:1})]),_:1}),B,k,l(n,null,{default:o(()=>[l(c,null,{default:o(()=>[s("Header")]),_:1}),l(n,null,{default:o(()=>[l(r,null,{default:o(()=>[s("Aside")]),_:1}),l(e,null,{default:o(()=>[s("Main")]),_:1})]),_:1})]),_:1}),M,q,l(n,null,{default:o(()=>[l(c,null,{default:o(()=>[s("Header")]),_:1}),l(n,null,{default:o(()=>[l(r,{width:"70px"},{default:o(()=>[s("Aside1")]),_:1}),l(r,null,{default:o(()=>[s("Aside2")]),_:1}),l(e,null,{default:o(()=>[s("Main")]),_:1})]),_:1})]),_:1}),P,H,l(n,null,{default:o(()=>[l(c,null,{default:o(()=>[s("Header")]),_:1}),l(n,null,{default:o(()=>[l(e,null,{default:o(()=>[s("Main")]),_:1}),l(r,null,{default:o(()=>[s("Aside")]),_:1})]),_:1})]),_:1}),I,T,l(n,null,{default:o(()=>[l(c,null,{default:o(()=>[s("Header")]),_:1}),l(n,null,{default:o(()=>[l(r,null,{default:o(()=>[s("Aside")]),_:1}),l(n,null,{default:o(()=>[l(e,null,{default:o(()=>[s("Main")]),_:1}),l(F,null,{default:o(()=>[s("Footer")]),_:1})]),_:1})]),_:1})]),_:1}),L,S,l(n,null,{default:o(()=>[l(r,null,{default:o(()=>[s("Aside")]),_:1}),l(n,null,{default:o(()=>[l(c,null,{default:o(()=>[s("Header")]),_:1}),l(e,null,{default:o(()=>[s("Main")]),_:1})]),_:1})]),_:1}),E,V,l(n,null,{default:o(()=>[l(r,null,{default:o(()=>[s("Aside")]),_:1}),l(n,null,{default:o(()=>[l(c,null,{default:o(()=>[s("Header")]),_:1}),l(e,null,{default:o(()=>[s("Main")]),_:1}),l(F,null,{default:o(()=>[s("Footer")]),_:1})]),_:1})]),_:1})]),default:o(()=>[N]),_:1}),w,a("a",$,[l(d,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),a("a",z,[l(d,{round:"",src:"https://avatars.githubusercontent.com/u/55753927?v=4"})])])}const Q=C(f,[["render",R],["__scopeId","data-v-3a917504"]]);export{G as __pageData,Q as default};
