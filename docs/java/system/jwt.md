---
title: 移动端 jwt 权限验证
---
## Controller
Controller 继承 JwtBaseController 实现jwt的验证
```java
// 以/app/ 开始的页面不会走全局的权限验证
@RequestMapping("/app/xcx/channel")
// 继承 JwtBaseController
public class ChannelController extends JwtBaseController {

    @GetMapping("/list")
    public String list() {
      // 获取当前登录会员id
      Long userId = getMemberId();
      // 获取登录会员id
      SysMember member =  getLoginMember();

      return "success"
    }
}
```