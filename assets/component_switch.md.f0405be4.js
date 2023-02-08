import{f as r,r as d,o as e,h as F,c as y,a as c,b as t,d as D,e as i}from"./app.dc292821.js";const h={__name:"switch1",setup(o){const s=r(!1);return(p,a)=>{const l=d("v-switch");return e(),F(l,{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=n=>s.value=n)},null,8,["modelValue"])}}},_={__name:"switch2",setup(o){const s=r(!1);return(p,a)=>{const l=d("v-switch");return e(),F(l,{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=n=>s.value=n),disabled:""},null,8,["modelValue"])}}},u={__name:"switch3",setup(o){const s=r(!0);return(p,a)=>{const l=d("v-switch");return e(),F(l,{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=n=>s.value=n),closeColor:"#409EFF",activeColor:"#E6A23C"},null,8,["modelValue"])}}},C=t("h1",{id:"switch",tabindex:"-1"},[D("Switch "),t("a",{class:"header-anchor",href:"#switch","aria-hidden":"true"},"#")],-1),A=t("h3",{id:"\u57FA\u7840\u4F7F\u7528",tabindex:"-1"},[D("\u57FA\u7840\u4F7F\u7528 "),t("a",{class:"header-anchor",href:"#\u57FA\u7840\u4F7F\u7528","aria-hidden":"true"},"#")],-1),v=t("p",null,[t("code",null,"v-model"),D("\u63A7\u5236\u5F00\u5173")],-1),m=i(`<div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-switch</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">switchVal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-switch</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> switchVal </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u7981\u7528\u72B6\u6001" tabindex="-1">\u7981\u7528\u72B6\u6001 <a class="header-anchor" href="#\u7981\u7528\u72B6\u6001" aria-hidden="true">#</a></h3><p>\u4F20\u5165<code>disabled</code></p>`,3),w=i(`<div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-switch</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">switchVal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-switch</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u81EA\u5B9A\u4E49\u9009\u4E2D\u989C\u8272" tabindex="-1">\u81EA\u5B9A\u4E49\u9009\u4E2D\u989C\u8272 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u9009\u4E2D\u989C\u8272" aria-hidden="true">#</a></h3><p>\u4F20\u5165<code>closeColor</code> \u548C <code>activeColor</code></p>`,3),g=i(`<div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-switch</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">switchVal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">closeColor</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#409EFF</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">activeColor</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#E6A23C</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-switch</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="switch\u5C5E\u6027" tabindex="-1">Switch\u5C5E\u6027 <a class="header-anchor" href="#switch\u5C5E\u6027" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u7ED1\u5B9A\u503C</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>closeColor</td><td>\u5173\u95ED\u989C\u8272</td><td>String</td><td>\u2014</td><td>#BFBFBF</td></tr><tr><td>activeColor</td><td>\u81EA\u5B9A\u4E49\u66FF\u5F00\u542F\u65F6\u7684\u989C\u8272</td><td>String</td><td>\u2014</td><td>#0E80EB</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h3 id="switch-events" tabindex="-1">Switch Events <a class="header-anchor" href="#switch-events" aria-hidden="true">#</a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F00\u5173\u4E8B\u4EF6</td><td></td></tr></tbody></table>`,5),E=JSON.parse('{"title":"Switch","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u7840\u4F7F\u7528","slug":"\u57FA\u7840\u4F7F\u7528"},{"level":3,"title":"\u7981\u7528\u72B6\u6001","slug":"\u7981\u7528\u72B6\u6001"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u9009\u4E2D\u989C\u8272","slug":"\u81EA\u5B9A\u4E49\u9009\u4E2D\u989C\u8272"},{"level":3,"title":"Switch\u5C5E\u6027","slug":"switch\u5C5E\u6027"},{"level":3,"title":"Switch Events","slug":"switch-events"}],"relativePath":"component/switch.md"}'),f={name:"component/switch.md"},b=Object.assign(f,{setup(o){return(s,p)=>(e(),y("div",null,[C,A,v,c(h,{class:"md-row"}),m,c(_,{class:"md-row"}),w,c(u,{class:"md-row"}),g]))}});export{E as __pageData,b as default};
