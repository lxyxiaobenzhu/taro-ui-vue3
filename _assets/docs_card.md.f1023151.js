import{f as t,g as a,B as s}from"./common-03e26d29.js";const n='{"title":"Card 卡片","frontmatter":{},"headers":[{"level":2,"title":"使用指南","slug":"使用指南"},{"level":2,"title":"一般用法","slug":"一般用法"},{"level":2,"title":"AtCard 参数","slug":"atcard-参数"},{"level":2,"title":"AtCard 事件","slug":"atcard-事件"}],"relativePath":"docs/card.md","lastUpdated":1608015292835.5813}';var e={};const d=s('<h1 id="card-卡片"><a class="header-anchor" href="#card-卡片" aria-hidden="true">#</a> Card 卡片</h1><hr><p>提供常见的卡片样式。</p><h2 id="使用指南"><a class="header-anchor" href="#使用指南" aria-hidden="true">#</a> 使用指南</h2><p>在 Taro 文件中引入组件</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AtCard <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;taro-ui-vue3&#39;</span>\n</code></pre></div><p><strong>组件依赖的样式文件（仅按需引用时需要）</strong></p><div class="language-scss"><pre><code><span class="token keyword">@import</span> <span class="token string">&quot;taro-ui-vue3/dist/style/components/card.scss&quot;</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="一般用法"><a class="header-anchor" href="#一般用法" aria-hidden="true">#</a> 一般用法</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AtCard</span>\n  <span class="token attr-name">note</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>小Tips<span class="token punctuation">&#39;</span></span>\n  <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>额外信息<span class="token punctuation">&#39;</span></span>\n  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>这是个标题<span class="token punctuation">&#39;</span></span>\n  <span class="token attr-name">thumb</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG<span class="token punctuation">&#39;</span></span>\n<span class="token punctuation">&gt;</span></span>\n  这也是内容区 可以随意定义功能\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AtCard</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="atcard-参数"><a class="header-anchor" href="#atcard-参数" aria-hidden="true">#</a> AtCard 参数</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>元素的标题</td><td><code>String</code></td><td>-</td><td>-</td></tr><tr><td>note</td><td>元素的辅助信息</td><td><code>String</code></td><td>-</td><td>-</td></tr><tr><td>thumb</td><td>元素的缩略图</td><td><code>String</code></td><td>-</td><td>-</td></tr><tr><td>icon</td><td>元素的图标，仅支持 AtIcon 支持的类型: <code>AtIconBaseProps</code>, 详细定义如下</td><td><code>AtIconBaseProps</code></td><td>-</td><td>-</td></tr><tr><td>renderIcon</td><td>元素自定义图标</td><td><code>JSX.Element | VNode</code></td><td>-</td><td>-</td></tr><tr><td>extra</td><td>元素的额外信息</td><td><code>String</code></td><td>-</td><td>-</td></tr><tr><td>extraStyle</td><td>元素的额外信息自定义样式</td><td><code>Object</code></td><td>-</td><td>-</td></tr><tr><td>isFull</td><td>是否通栏</td><td><code>Boolean</code></td><td>-</td><td>-</td></tr></tbody></table><br><h4 id="aticonbaseprops-字段定义"><a class="header-anchor" href="#aticonbaseprops-字段定义" aria-hidden="true">#</a> <code>AtIconBaseProps</code> 字段定义</h4><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">AtIconBaseProps</span> <span class="token punctuation">{</span>\n  value<span class="token operator">:</span> <span class="token builtin">string</span>\n  color<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>\n  prefixClass<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>\n  size<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="atcard-事件"><a class="header-anchor" href="#atcard-事件" aria-hidden="true">#</a> AtCard 事件</h2><table><thead><tr><th>事件名称</th><th>说明</th><th>返回参数</th></tr></thead><tbody><tr><td>onClick</td><td>元素被点击触发的事件</td><td>-</td></tr></tbody></table>',17);e.render=function(s,n,e,o,p,r){return t(),a("div",null,[d])};export default e;export{n as __pageData};