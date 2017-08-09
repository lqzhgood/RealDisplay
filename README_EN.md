#### [中文说明](https://github.com/lqzhgood/RealDisplay/blob/master/README.md)

# RealDisplay
Show other device physical size in you Display

##  Preview

[lqzhgood.github.io/RealDisplay/](http://lqzhgood.github.io/RealDisplay/)

----------------

## How to use

On the top left, enter the diagonal length (inch) and scaling ratio of your current display, and select the device you want to display on the right. You can display the **actual physical size** of the target device  on your current monitor.

You can select / paste pictures or open pages to see the physical size effects on the selection device.

----------------

## Parameter

#### Url parameter
| parameter       |    value                | e.g.          |default               | remark    |
| :-------- | :-----------------------------|:-------------|:-------------------|:--------|
| *my       | @Diagonal^Dpr                 | @15.6^1.2    | Diagonal 24 / Dpr 1| @15. is wrong|
| show      | Horzres **x** Vertres@Diagonal| 1080x1920@5.5|                    | @5. is wrong |

** The diagonal units are inches **

> http://lqzhgood.github.io/RealDisplay/?my=@24  <br/>
> http://lqzhgood.github.io/RealDisplay/?my=@15.6^1.2   <br/>
> http://lqzhgood.github.io/RealDisplay/?my=@24^1&show=1080x1920@5.5  <br/> 
> http://lqzhgood.github.io/RealDisplay/?my=@15.6&show=1080x1920@5.5   <br/>


#### WinApi
Download the project to the local, open through `start.bat`, will automatically write the local Dpi to `myDpi.js`, provided to the Web call.

#### UserInput
If there is no Url parameter, and the myDpi.js does not exist or the parameter is 0, the user is prompted to enter the current display size (diagonal inch) and Dpr. If the input is wrong or not entered, the default value is @24^1 (24 inches and scaled 100%)


**Priority**
Url > WinApi > HTML5 localStorage > UserInput



----------------

## F.A.Q

- every choice and input you write will be written to `HTML5 localStorage`

- how do I find the scaling ratio of my current device (Dpr)?

![Aaron Swartz](https://github.com/lqzhgood/RealDisplay/blob/master/img/win10.jpg?raw=true)
```text
If you choose 100%, then Dpr is 1, and if you choose 150%, Dpr is 1.5, and so on.
```

- Why did I enter Url invalid in Page ?
``` text
Iframe is not allowed because the site settings are open. You can see the related error in F12.
e.g. www.google.com
Refused to display 'https://www.google.com.hk/?gfe_rd=cr&ei=v-qKWZ-7E4TD8AeziJW4Cg' in a frame because it set 'X-Frame-Options' to 'sameorigin'.
```
