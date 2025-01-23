import{d as D,f as y,c as F,K as n,C as a,y as r,v as t,A as o,o as h,a as s}from"./chunks/framework.a23d502a.js";const m={href:"https://github.com/Tyh2001",target:"_blank"},B=JSON.parse('{"title":"Date Picker 日期选择器","description":"","frontmatter":{},"headers":[],"relativePath":"components/date-picker.md","filePath":"components/date-picker.md","lastUpdated":1725971386000}'),u={name:"components/date-picker.md"},k=D({...u,setup(f){const l=y("");return(g,e)=>{const c=o("f-date-picker"),d=o("vp-demo"),p=o("f-avatar");return h(),F("div",null,[e[2]||(e[2]=n('<h1 id="date-picker-日期选择器" tabindex="-1">Date Picker 日期选择器 <a class="header-anchor" href="#date-picker-日期选择器" aria-label="Permalink to &quot;Date Picker 日期选择器&quot;">​</a></h1><p>选取你想要的时间</p><ul><li><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/date-picker" target="_blank" rel="noreferrer">源代码</a></li><li><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/components/date-picker.md" target="_blank" rel="noreferrer">文档编辑</a></li></ul><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><p>使用 <code>v-model:date</code> 绑定一个值</p>',5)),a(d,{source:""},{source:r(()=>[a(c,{date:l.value,"onUpdate:date":e[0]||(e[0]=i=>l.value=i)},null,8,["date"])]),default:r(()=>[e[1]||(e[1]=t("div",{class:"language-html"},[t("button",{title:"Copy Code",class:"copy"}),t("span",{class:"lang"},"html"),t("pre",{class:"shiki material-theme-palenight"},[t("code",null,[t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"template"),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#BABED8"}},"  "),t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"f-date-picker"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"v-model:date"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"value1"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}}," />")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"template"),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"}),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"<"),t("span",{style:{color:"#F07178"}},"script"),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"lang"),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#C3E88D"}},"ts"),t("span",{style:{color:"#89DDFF"}},'"'),t("span",{style:{color:"#89DDFF"}}," "),t("span",{style:{color:"#C792EA"}},"setup"),t("span",{style:{color:"#89DDFF"}},">")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#BABED8"}},"  "),t("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),t("span",{style:{color:"#BABED8"}}," "),t("span",{style:{color:"#89DDFF"}},"{"),t("span",{style:{color:"#F07178"}}," "),t("span",{style:{color:"#BABED8"}},"ref"),t("span",{style:{color:"#F07178"}}," "),t("span",{style:{color:"#89DDFF"}},"}"),t("span",{style:{color:"#BABED8"}}," "),t("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),t("span",{style:{color:"#BABED8"}}," "),t("span",{style:{color:"#89DDFF"}},"'"),t("span",{style:{color:"#C3E88D"}},"vue"),t("span",{style:{color:"#89DDFF"}},"'")]),s(`
`),t("span",{class:"line"}),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#BABED8"}},"  "),t("span",{style:{color:"#C792EA"}},"const"),t("span",{style:{color:"#BABED8"}}," value1 "),t("span",{style:{color:"#89DDFF"}},"="),t("span",{style:{color:"#BABED8"}}," "),t("span",{style:{color:"#82AAFF"}},"ref"),t("span",{style:{color:"#BABED8"}},"("),t("span",{style:{color:"#89DDFF"}},"''"),t("span",{style:{color:"#BABED8"}},")")]),s(`
`),t("span",{class:"line"},[t("span",{style:{color:"#89DDFF"}},"</"),t("span",{style:{color:"#F07178"}},"script"),t("span",{style:{color:"#89DDFF"}},">")])])])],-1))]),_:1}),e[3]||(e[3]=n('<h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><div class="vp-table__container"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:date</code></td><td>绑定值</td><td>string</td><td>——</td><td>——</td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td>boolean</td><td>——</td><td>false</td></tr><tr><td><code>clear</code></td><td>是否可清空</td><td>boolean</td><td>——</td><td>false</td></tr><tr><td><code>format</code></td><td>时间格式</td><td>string</td><td>——</td><td>YYYY/MM/DD</td></tr><tr><td><code>placeholder</code></td><td>占位符</td><td>string</td><td>——</td><td>——</td></tr><tr><td><code>size</code></td><td>尺寸</td><td><a href="/components/interface.html#fightingsize">FightingSize</a></td><td><code>large</code> <code>middle</code> <code>small</code> <code>mini</code></td><td>middle</td></tr><tr><td><code>add-zero</code></td><td>不满 10 的是否前面加 0</td><td>boolean</td><td>——</td><td>false</td></tr></tbody></table></div><h2 id="interface" tabindex="-1">Interface <a class="header-anchor" href="#interface" aria-label="Permalink to &quot;Interface&quot;">​</a></h2><p>组件导出以下类型定义：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">DatePickerInstance</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">DatePickerProps</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fighting-design</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>',6)),t("a",m,[a(p,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})])])}}});export{B as __pageData,k as default};
