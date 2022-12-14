import{_ as n,o as s,c as a,e as t}from"./app.bc6d45fc.js";const e={},p=t(`<h1 id="\u652F\u4ED8\u8BB0\u5F55\u8868" tabindex="-1"><a class="header-anchor" href="#\u652F\u4ED8\u8BB0\u5F55\u8868" aria-hidden="true">#</a> \u652F\u4ED8\u8BB0\u5F55\u8868</h1><p>pay_order</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token doc-comment comment">/** \u652F\u4ED8\u8BB0\u5F55\u8868 */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** \u652F\u4ED8\u9879\u76EE\u540D\u79F0 */</span>
    <span class="token annotation punctuation">@Excel</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;\u652F\u4ED8\u9879\u76EE&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> title<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** \u662F\u5426\u4E3A\u9000\u6B3E */</span>
    <span class="token annotation punctuation">@Excel</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;\u662F\u5426\u4E3A\u9000\u6B3E&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Boolean</span> isRefund<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** \u652F\u4ED8\u5B8C\u6210\u72B6\u6001 -1\u64A4\u9500 0 \u9ED8\u8BA4 1 \u4EA4\u6613\u4E2D 2\u652F\u4ED8\u5B8C\u6210 */</span>
    <span class="token annotation punctuation">@Excel</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;\u5B8C\u6210\u72B6\u6001&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">OrderStateEnum</span> state<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** \u4E1A\u52A1\u7C7B\u522B\uFF1A1.\u5546\u54C1\u652F\u4ED8 */</span>
    <span class="token annotation punctuation">@Excel</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;\u4E1A\u52A1\u7C7B\u522B&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> businessName<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** \u5185\u90E8\u4E1A\u52A1 \u5173\u8054\u8BA2\u5355\u53F7\u7801 */</span>
    <span class="token annotation punctuation">@Excel</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;\u5185\u90E8\u4E1A\u52A1&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> businessNo<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** \u652F\u4ED8\u6E20\u9053\uFF1Aalipay,wxpay */</span>
    <span class="token annotation punctuation">@Excel</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;\u652F\u4ED8\u6E20\u9053&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> payChannel<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** \u5BA2\u6237\u7AEF\u4EA4\u6613\u7C7B\u578B\uFF1Awx_js,... */</span>
    <span class="token annotation punctuation">@Excel</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;\u4EA4\u6613\u7C7B\u578B&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> clientType<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** \u652F\u4ED8\u6E20\u9053 \u8FD4\u56DE\u7684\u5916\u90E8\u8BA2\u5355\u53F7 */</span>
    <span class="token annotation punctuation">@Excel</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;\u652F\u4ED8\u6E20\u9053\u5355\u53F7&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> payChannelNo<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** \u64CD\u4F5C\u91D1\u989D \u652F\u4ED8\u4E3A\u6B63 \u9000\u6B3E\u4E3A\u8D1F */</span>
    <span class="token annotation punctuation">@Excel</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;\u64CD\u4F5C\u91D1\u989D&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> amount<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** \u5B9E\u9645\u652F\u4ED8\u91D1\u989D */</span>
    <span class="token annotation punctuation">@Excel</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;\u5B9E\u9645\u652F\u4ED8\u91D1\u989D&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> realAmount<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** \u4E0B\u5355\u65F6\u95F4 */</span>
    <span class="token annotation punctuation">@JsonFormat</span><span class="token punctuation">(</span>pattern <span class="token operator">=</span> <span class="token string">&quot;yyyy-MM-dd&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Excel</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;\u4E0B\u5355\u65F6\u95F4&quot;</span><span class="token punctuation">,</span> width <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">,</span> dateFormat <span class="token operator">=</span> <span class="token string">&quot;yyyy-MM-dd&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> applyTime<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** \u4EA4\u6613\u5B8C\u6210\u65F6\u95F4 */</span>
    <span class="token annotation punctuation">@JsonFormat</span><span class="token punctuation">(</span>pattern <span class="token operator">=</span> <span class="token string">&quot;yyyy-MM-dd&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Excel</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;\u4EA4\u6613\u5B8C\u6210\u65F6\u95F4&quot;</span><span class="token punctuation">,</span> width <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">,</span> dateFormat <span class="token operator">=</span> <span class="token string">&quot;yyyy-MM-dd&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> completeTime<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** \u539F\u8BA2\u5355\u4EA4\u6613\u91D1\u989D */</span>
    <span class="token annotation punctuation">@Excel</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;\u539F\u8BA2\u5355\u4EA4\u6613\u91D1\u989D&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">BigDecimal</span> originalAmount<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** \u539F\u59CB\u4EA4\u6613\u8BA2\u5355 */</span>
    <span class="token annotation punctuation">@Excel</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;\u539F\u59CB\u4EA4\u6613\u8BA2\u5355&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> originalId<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","pay_order.html.vue"]]);export{r as default};
