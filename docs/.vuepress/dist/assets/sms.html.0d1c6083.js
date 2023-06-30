import{_ as e,o as n,c as s,e as i}from"./app.cf2efcaa.js";const a={},d=i(`<h1 id="ismsservice-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#ismsservice-\u670D\u52A1" aria-hidden="true">#</a> ISmsService \u670D\u52A1</h1><p>\u77ED\u4FE1\u53D1\u9001\u8303\u56F4\uFF0C\u5185\u90E8\u96C6\u6210\u4E86 \u963F\u91CC\u4E91\u77ED\u4FE1\u3001\u817E\u8BAF\u4E91\u77ED\u4FE1</p><h2 id="yml\u6587\u4EF6\u6307\u5B9A\u77ED\u4FE1\u670D\u52A1\u5546" tabindex="-1"><a class="header-anchor" href="#yml\u6587\u4EF6\u6307\u5B9A\u77ED\u4FE1\u670D\u52A1\u5546" aria-hidden="true">#</a> yml\u6587\u4EF6\u6307\u5B9A\u77ED\u4FE1\u670D\u52A1\u5546</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u77ED\u4FE1\u9A8C\u8BC1\u7801\u4F7F\u7528\u670D\u52A1\u5546 Tencent Aliyun</span>
<span class="token key atrule">sms.type</span><span class="token punctuation">:</span> Aliyun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u963F\u91CC\u4E91\u9700\u8981\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u963F\u91CC\u4E91\u9700\u8981\u914D\u7F6E" aria-hidden="true">#</a> \u963F\u91CC\u4E91\u9700\u8981\u914D\u7F6E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u963F\u91CC\u4E91
aliyun:
  accessKeyId: xxxxxx
  accessKeySecret: xxxxx
  regionId: cn-huhehaote
  sms:
    signName: xx
    templateCode: xxxxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u817E\u8BAF\u4E91\u9700\u8981\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u817E\u8BAF\u4E91\u9700\u8981\u914D\u7F6E" aria-hidden="true">#</a> \u817E\u8BAF\u4E91\u9700\u8981\u914D\u7F6E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u817E\u8BAF\u4E91\u77ED\u4FE1\u5E73\u53F0
tencentCloud:
  appId: xxxxx
  secretKey: xxxx
  secretId:xxxxx
  templateId: xxxx
  sign: xxxxxx
  nationCode: 86
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[d];function c(r,t){return n(),s("div",null,l)}const v=e(a,[["render",c],["__file","sms.html.vue"]]);export{v as default};
