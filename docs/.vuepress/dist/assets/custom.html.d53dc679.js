import{_ as n,o as s,c as a,e}from"./app.398e9a3e.js";const p={},t=e(`<h1 id="javapayment-\u81EA\u5DF1\u7684\u8BA2\u5355\u5B9E\u73B0\u652F\u4ED8" tabindex="-1"><a class="header-anchor" href="#javapayment-\u81EA\u5DF1\u7684\u8BA2\u5355\u5B9E\u73B0\u652F\u4ED8" aria-hidden="true">#</a> JavaPayment \u81EA\u5DF1\u7684\u8BA2\u5355\u5B9E\u73B0\u652F\u4ED8</h1><p>join.payment\u6A21\u5757\u4E0B\u7684<code>paymentExample</code>\u6587\u4EF6\u5939\u5199\u4E86\u5B9E\u73B0\u793A\u4F8B\uFF0C\u53EF\u53C2\u8003\u5B9E\u73B0\u81EA\u5DF1\u7684\u8BA2\u5355</p><h2 id="\u4E00-\u5B9E\u4F53\u7C7B\u5B9E\u73B0\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u4E00-\u5B9E\u4F53\u7C7B\u5B9E\u73B0\u63A5\u53E3" aria-hidden="true">#</a> \u4E00.\u5B9E\u4F53\u7C7B\u5B9E\u73B0\u63A5\u53E3</h2><p>\u5B9E\u4F53\u7C7B \u5B9E\u73B0IPayableOrder \u63A5\u53E3</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyOrder</span> <span class="token keyword">implements</span> <span class="token class-name">IPayableOrder</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getBusinessNo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getBusinessName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C-\u670D\u52A1\u5B9E\u73B0\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u4E8C-\u670D\u52A1\u5B9E\u73B0\u63A5\u53E3" aria-hidden="true">#</a> \u4E8C.\u670D\u52A1\u5B9E\u73B0\u63A5\u53E3</h2><p>\u670D\u52A1Service \u7684\u63A5\u53E3\u7EE7\u627FIPayableOrderService</p><p>IPayableOrderService \u5305\u542B\u56DB\u4E2A\u4E3B\u8981\u65B9\u6CD5</p><ol><li>\u53D1\u8D77\u652F\u4ED8 PayResult payOrder(IPayableOrder order, PayParam param)</li><li>\u652F\u4ED8\u6210\u529F\u56DE\u8C03 void paySuccess(PayOrder payOrder)</li><li>\u53D1\u8D77\u9000\u6B3E</li><li>\u9000\u6B3E\u6210\u529F\u56DE\u8C03 void refundSuccess(PayOrder refundOrder)</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">MyOrdersServiceImpl</span> <span class="token keyword">implements</span> 
<span class="token class-name">IPayableOrderService</span><span class="token punctuation">,</span>
<span class="token class-name">IMyOrdersService</span>
<span class="token punctuation">{</span>
  <span class="token comment">// \u652F\u4ED8\u670D\u52A1</span>
  <span class="token annotation punctuation">@Autowired</span>
  <span class="token keyword">private</span> <span class="token class-name">IPaymentService</span> paymentService<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
  * \u83B7\u5F97\u4E1A\u52A1\u540D\u79F0
  * <span class="token keyword">@return</span> \u4E1A\u52A1\u522B\u540D
  */</span>
  <span class="token class-name">String</span> <span class="token function">getBussinesName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token string">&quot;\u5145\u503C\u8BA2\u5355&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
     * \u53D1\u8D77\u652F\u4ED8
     * <span class="token keyword">@param</span> <span class="token parameter">order</span> \u652F\u4ED8\u4E1A\u52A1\u5355
     * <span class="token keyword">@param</span> <span class="token parameter">param</span> \u652F\u6301\u53C2\u6570
     * <span class="token keyword">@return</span> \u652F\u4ED8\u7ED3\u679C
     */</span>
    <span class="token class-name">PayResult</span> <span class="token function">payOrder</span><span class="token punctuation">(</span><span class="token class-name">IPayableOrder</span> order<span class="token punctuation">,</span> <span class="token class-name">PayParam</span> param<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> paymentService<span class="token punctuation">.</span><span class="token function">payOrder</span><span class="token punctuation">(</span>order<span class="token punctuation">,</span>param<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
     <span class="token doc-comment comment">/**
     * \u652F\u4ED8\u6210\u529F\u540E\u56DE\u8C03
     * <span class="token keyword">@param</span> <span class="token parameter">payOrder</span> \u652F\u4ED8\u8BB0\u5F55
     */</span>
    <span class="token keyword">void</span> <span class="token function">paySuccess</span><span class="token punctuation">(</span><span class="token class-name">PayOrder</span> payOrder<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// \u901A\u8FC7\u4E1A\u52A1\u5355\u53F7\u67E5\u8BE2\u8BA2\u5355</span>
        <span class="token class-name">MyOrder</span> order <span class="token operator">=</span> <span class="token function">selectOrderByNo</span><span class="token punctuation">(</span>payOrder<span class="token punctuation">.</span><span class="token function">getBusinessNo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u66F4\u65B0\u72B6\u6001</span>
        <span class="token function">updateOrder</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u9000\u6B3E\u6210\u529F\u540E\u56DE\u8C03
     * <span class="token keyword">@param</span> <span class="token parameter">refundOrder</span> \u9000\u6B3E\u8BB0\u5F55
     */</span>
    <span class="token keyword">void</span> <span class="token function">refundSuccess</span><span class="token punctuation">(</span><span class="token class-name">PayOrder</span> refundOrder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E09-\u8C03\u7528\u53D1\u8D77\u652F\u4ED8" tabindex="-1"><a class="header-anchor" href="#\u4E09-\u8C03\u7528\u53D1\u8D77\u652F\u4ED8" aria-hidden="true">#</a> \u4E09. \u8C03\u7528\u53D1\u8D77\u652F\u4ED8</h2><p>Controller \u4E2D\u8C03\u7528\u670D\u52A1</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,13),c=[t];function i(l,o){return s(),a("div",null,c)}const u=n(p,[["render",i],["__file","custom.html.vue"]]);export{u as default};
