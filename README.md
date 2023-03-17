####   [English ](https://github.com/lqzhgood/RealDisplay/blob/master/README_EN.md)


# RealDisplay
在你当前显示器显示 其他设备的 真实物理尺寸

##  预览

[http://lqzhgood.github.io/RealDisplay/](http://lqzhgood.github.io/RealDisplay/)

----------------

## 如何使用

在顶部左侧输入你当前显示器的 对角线长度（英寸）和缩放比例，右侧选择你要显示的设备。
即可显示目标设备**真实的物理尺寸**在你当前的显示器上。

你可以 选择/粘贴图片 或者打开 页面，来查看在选择设备上的物理尺寸效果。

----------------

## 参数

#### Url 参数
| 参数       |    值                         | 例子          |默认值               | 备注    |
| :-------- | :-----------------------------|:-------------|:-------------------|:--------|
| *my       | @Diagonal^Dpr                 | @15.6^1.2    | Diagonal 24 / Dpr 1| @15. 是错误的输入|
| show      | Horzres **x** Vertres@Diagonal| 1080x1920@5.5|                    | @5. 是错误的输入|

** 对角线 Diagonal 的单位是 英尺 **


> http://lqzhgood.github.io/RealDisplay/?my=@24 <br/>
> http://lqzhgood.github.io/RealDisplay/?my=@15.6^1.2 <br/>
> http://lqzhgood.github.io/RealDisplay/?my=@24^1&show=1080x1920@5.5 <br/>
> http://lqzhgood.github.io/RealDisplay/?my=@15.6&show=1080x1920@5.5 <br/>


#### WinApi
下载本项目到本地，通过 `start.bat` 打开，会自动将本机的 Dpi 写入 `myDpi.js` 提供给前端调用。


#### UserInput
如果没有 Url 参数，并且 myDpi.js 不存在或参数为 0 ，将提示用户输入当前显示器大小（对角线-英寸）和 Dpr。如果输入错误或不输入，将采用默认值 @24^1 (24英寸显示且缩放为100%)


**优先级**
Url > WinApi > HTML5 localStorage > UserInput



----------------

## 说明

 - 你的每一次选择和输入将会写入 `HTML5 localStorage`

 - 如何查找我当前设备的缩放比例（Dpr）

![Aaron Swartz](https://github.com/lqzhgood/RealDisplay/blob/master/img/win10.jpg?raw=true)
```text
如果你选择的是 100%，则 Dpr 为 1，如果选择的是 150% 则 Dpr 为 1.5，以此类推。
```

- 为什么我在 Page 中输入 Url 无效？
``` text
因为网站设置了禁止 iframe 打开。你可以在 F12 中看到相关错误。
例如 www.google.com
Refused to display 'https://www.google.com.hk/?gfe_rd=cr&ei=v-qKWZ-7E4TD8AeziJW4Cg' in a frame because it set 'X-Frame-Options' to 'sameorigin'.
```
