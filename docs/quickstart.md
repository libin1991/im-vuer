## 开始

> 安装

```shell
npm install im-vuer -S
```

## 项目中使用

> `main.js`

```js
适配方案采用的是手淘的flexiable方案，要先安装配置

import { ConfirmPlugin } from 'im-vuer'
import { ToastPlugin } from 'im-vuer'
import { ActionSheetPlugin } from 'im-vuer'
import { TipPlugin } from 'im-vuer'
import { PreviewImagePlugin } from 'im-vuer'

import { Tab } from 'im-vuer'
import { Step } from 'im-vuer'
import { CountUp } from 'im-vuer'
import { Marquee } from 'im-vuer'
import { Rater } from 'im-vuer'
import { Switch } from 'im-vuer'
import { CheckBox, CheckBoxItem } from 'im-vuer'
import { SwiperOut } from 'im-vuer'
import { Progress } from 'im-vuer'
import { Radio, RadioItem } from 'im-vuer'
import { TimeLine, TimeLineItem } from 'im-vuer'
import { Swiper, SwiperItem } from 'im-vuer'
import { IndexList } from 'im-vuer'
import { CityPicker } from 'im-vuer'
import { DatePicker } from 'im-vuer'
import { Picker, PickerItem } from 'im-vuer'

import 'im-vuer/dist/im-vuer.css'

Vue.component(`${Tab.name}`, Tab)
Vue.component(`${Step.name}`, Step)
Vue.component(`${CountUp.name}`, CountUp)
Vue.component(`${Marquee.name}`, Marquee)
Vue.component(`${Rater.name}`, Rater)
Vue.component(`${CheckBox.name}`, CheckBox)
Vue.component(`${CheckBoxItem.name}`, CheckBoxItem)
Vue.component(`${SwiperOut.name}`, SwiperOut)
Vue.component(`${TimeLine.name}`, TimeLine)
Vue.component(`${TimeLineItem.name}`, TimeLineItem)
Vue.component(`${Radio.name}`, Radio)
Vue.component(`${RadioItem.name}`, RadioItem)
Vue.component(`${Swiper.name}`, Swiper)
Vue.component(`${SwiperItem.name}`, SwiperItem)
Vue.component(`${IndexList.name}`, IndexList)
Vue.component(`${CityPicker.name}`, CityPicker)
Vue.component(`${DatePicker.name}`, DatePicker)
Vue.component(`${Picker.name}`, Picker)
Vue.component(`${PickerItem.name}`, PickerItem)
Vue.component(`${Progress.name}`, Progress)
Vue.component(`${Switch.name}`, Switch)

Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)
Vue.use(ActionSheetPlugin)
Vue.use(TipPlugin)
Vue.use(PreviewImagePlugin)
```

## 单文件项目中使用

> `index.html`

参考dist目录下的index.html文件

[https://github.com/is-liyiwei/im-vuer/blob/master/dist/index.html](https://github.com/is-liyiwei/im-vuer/blob/master/dist/index.html)