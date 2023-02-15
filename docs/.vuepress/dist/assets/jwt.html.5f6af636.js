import{_ as n,o as s,c as a,e}from"./app.005f1991.js";const t={},o=e(`<h2 id="controller" tabindex="-1"><a class="header-anchor" href="#controller" aria-hidden="true">#</a> Controller</h2><p>Controller \u7EE7\u627F JwtBaseController \u5B9E\u73B0jwt\u7684\u9A8C\u8BC1</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u4EE5/app/ \u5F00\u59CB\u7684\u9875\u9762\u4E0D\u4F1A\u8D70\u5168\u5C40\u7684\u6743\u9650\u9A8C\u8BC1</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/app/xcx/channel&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// \u7EE7\u627F JwtBaseController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ChannelController</span> <span class="token keyword">extends</span> <span class="token class-name">JwtBaseController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/list&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u83B7\u53D6\u5F53\u524D\u767B\u5F55\u4F1A\u5458id</span>
      <span class="token class-name">Long</span> userId <span class="token operator">=</span> <span class="token function">getMemberId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// \u83B7\u53D6\u767B\u5F55\u4F1A\u5458id</span>
      <span class="token class-name">SysMember</span> member <span class="token operator">=</span>  <span class="token function">getLoginMember</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> <span class="token string">&quot;success&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[o];function p(l,i){return s(),a("div",null,c)}const r=n(t,[["render",p],["__file","jwt.html.vue"]]);export{r as default};
