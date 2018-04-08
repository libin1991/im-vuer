// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import { ConfirmPlugin } from './components/Confirm'
import { ToastPlugin } from './components/Toast'
import { ActionSheetPlugin } from './components/ActionSheet'
import { TipPlugin } from './components/Tip'


import { Tab } from './components/Tab'
import { Step } from './components/Step'
import { CountUp } from './components/CountUp'
import { Marquee } from './components/Marquee'
import { Rater } from './components/Rater'
import { Switch } from './components/Switch'
import { CheckBox } from './components/CheckBox'
import { SwiperOut } from './components/SwiperOut'
import { Progress } from './components/Progress'
import { Radio, RadioItem } from './components/Radio'
import { TimeLine, TimeLineItem } from './components/TimeLine'
import { Swiper, SwiperItem } from './components/Swiper'
import { IndexList } from './components/IndexList'
import { Picker, PickerItem } from './components/Picker'
import { DatePicker } from './components/DatePicker'
import { Layer } from './components/Layer'  // 这个感觉没啥用

let _Nid = 0;
let _log = function (component) {
	_Nid++;
	console.log(component);
}

_log(Tab)
_log(Step)
_log(CountUp)
_log(Marquee)
_log(Rater)
_log(Switch)
_log(CheckBox)
_log(SwiperOut)
_log(Progress)
_log(Radio)
_log(RadioItem)
_log(TimeLine)
_log(TimeLineItem)
_log(Swiper)
_log(SwiperItem)
_log(IndexList)
_log(Picker)
_log(PickerItem)
_log(DatePicker)
_log(Layer)


_log(ConfirmPlugin)
_log(ToastPlugin)
_log(ActionSheetPlugin)
_log(TipPlugin)

console.log('all num', _Nid)

// if (window.Vue) {
//   Vue.use(ConfirmPlugin);
//   Vue.use(ToastPlugin);
//   Vue.use(ActionSheetPlugin);
//   Vue.use(TipPlugin);
// }

export {
	Tab,
	Step,
	CountUp,
	Marquee,
	Rater,
	Switch,
	CheckBox,
	SwiperOut,
	Progress,
	Radio,
	RadioItem,
	TimeLine,
	TimeLineItem,
	Swiper,
	SwiperItem,
	IndexList,
	Picker,
	PickerItem,
	DatePicker,
	Layer,
	ConfirmPlugin,
	ToastPlugin,
	ActionSheetPlugin,
	TipPlugin
}