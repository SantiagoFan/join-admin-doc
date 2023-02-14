import{_ as n,o as s,c as a,e}from"./app.d3f71144.js";const p={},t=e(`<h1 id="javapayment-\u652F\u4ED8\u4E2D\u5FC3\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#javapayment-\u652F\u4ED8\u4E2D\u5FC3\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> JavaPayment \u652F\u4ED8\u4E2D\u5FC3\u4F7F\u7528\u65B9\u6CD5</h1><h2 id="\u4E00-\u5F15\u7528\u5305-join-payment" tabindex="-1"><a class="header-anchor" href="#\u4E00-\u5F15\u7528\u5305-join-payment" aria-hidden="true">#</a> \u4E00.\u5F15\u7528\u5305 join-payment</h2><h2 id="\u4E8C-\u914D\u7F6Eyml\u652F\u4ED8\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u4E8C-\u914D\u7F6Eyml\u652F\u4ED8\u53C2\u6570" aria-hidden="true">#</a> \u4E8C. \u914D\u7F6Eyml\u652F\u4ED8\u53C2\u6570</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u5FAE\u4FE1\u652F\u4ED8\u914D\u7F6E</span>
<span class="token key atrule">wx</span><span class="token punctuation">:</span>
  <span class="token key atrule">pay</span><span class="token punctuation">:</span>
    <span class="token key atrule">appId</span><span class="token punctuation">:</span> xxxx <span class="token comment">#\u5FAE\u4FE1\u516C\u4F17\u53F7\u6216\u8005\u5C0F\u7A0B\u5E8F\u7B49\u7684appid</span>
    <span class="token key atrule">mchId</span><span class="token punctuation">:</span> xxxx <span class="token comment">#\u5FAE\u4FE1\u652F\u4ED8\u5546\u6237\u53F7</span>
    <span class="token key atrule">mchKey</span><span class="token punctuation">:</span> xxxx <span class="token comment">#\u5FAE\u4FE1\u652F\u4ED8\u5546\u6237\u5BC6\u94A5</span>
    <span class="token comment">#    subAppId: #\u670D\u52A1\u5546\u6A21\u5F0F\u4E0B\u7684\u5B50\u5546\u6237\u516C\u4F17\u8D26\u53F7ID</span>
    <span class="token comment">#    subMchId: #\u670D\u52A1\u5546\u6A21\u5F0F\u4E0B\u7684\u5B50\u5546\u6237\u53F7</span>
    <span class="token key atrule">keyPath</span><span class="token punctuation">:</span> xxxx <span class="token comment"># p12\u8BC1\u4E66\u7684\u4F4D\u7F6E\uFF0C\u53EF\u4EE5\u6307\u5B9A\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u7C7B\u8DEF\u5F84\uFF08\u4EE5classpath:\u5F00\u5934\uFF09</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C-\u5B9E\u4F53\u7C7B\u5B9E\u73B0\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u4E8C-\u5B9E\u4F53\u7C7B\u5B9E\u73B0\u63A5\u53E3" aria-hidden="true">#</a> \u4E8C.\u5B9E\u4F53\u7C7B\u5B9E\u73B0\u63A5\u53E3</h2><p>\u5B9E\u4F53\u7C7B \u5B9E\u73B0IPayableOrder \u63A5\u53E3</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyOrder</span> <span class="token keyword">implements</span> <span class="token class-name">IPayableOrder</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getBusinessNo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">BigDecimal</span> <span class="token function">getPayAmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8C-\u670D\u52A1\u5B9E\u73B0\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u4E8C-\u670D\u52A1\u5B9E\u73B0\u63A5\u53E3" aria-hidden="true">#</a> \u4E8C.\u670D\u52A1\u5B9E\u73B0\u63A5\u53E3</h2><p>\u670D\u52A1Service\u5B9E\u73B0IPayableOrderService</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">MyOrdersServiceImpl</span> <span class="token keyword">implements</span> 
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,13),c=[t];function i(l,o){return s(),a("div",null,c)}const u=n(p,[["render",i],["__file","index.html.vue"]]);export{u as default};
