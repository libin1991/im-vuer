<template>
    <div class="im-date-picker" v-if="value" @click.stop="cancel">

      <div class="im-date-picker-box">

        <div class="im-date-picker-box-value" :style="{ backgroundColor: headerColor}">
          <span :class="{ 'im-txt-in': setAnimate }">{{todayText.split('--')[1]}}</span>
        </div>

        <div class="im-date-picker-box-ctrl">
          <svg viewBox="0 0 24 24" class="im-date-picker-box-ctrl-prev arrow" @click.stop="_prev">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
          </svg>
          <div class="im-date-picker-box-ctrl-date">{{oHeadDate}}</div>
          <svg viewBox="0 0 24 24" class="im-date-picker-box-ctrl-next arrow" @click.stop="_next">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
          </svg>
        </div>
        <table class="im-date-picker-box-title">
          <tr class="im-date-picker-box-header">
            <th v-for="(v, k) in weekArr" :key="k">{{v.substring(2, v.length)}}</th>
          </tr>
          <tr class="im-date-picker-box-content" v-for="(v, k) in allDate" :key="k">
            <td
              v-for="(vv, kk) in v"
              :key="kk"
              :id="vv.id"
              :style="currentItem.indexOf(vv.id) != -1 ? currentDate : vv.disabled ? '' : currentDateNot"
              :class="[vv.disabled ? 'im-disabled-true' : 'im-disabled-flase', 'im-date-picker-box-content-item']"
              @click.stop="tapItem(7 * k + kk, false, vv.id)">{{vv.date}}</td>
          </tr>
        </table>

        <div class="im-date-picker-box-btns">
          <div class="im-date-picker-box-btns-item" :style="{ color: cancelBtn }" @click.stop="cancel">取消</div>
          <div class="im-date-picker-box-btns-item" :style="{ color: confirmBtn }" @click.stop="confirm">确定</div>
        </div>

      </div>

    </div>
</template>

<script>
// import { parseTime } from '../../helper/time'
import sliceArray from '../../helper/sliceArray'
export default {
  name: 'im-date-picker',
  data () {
    return {
      now: {
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        date: new Date().getDate()
      },
      oHeadDate: '',
      prevDate: [],
      nowDate: [],
      nextDate: [],
      allDate: [],
      todayText: '',
      todayTextMultiple: [],
      weekArr: [
        '星期日',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六'
      ],
      currentItem: [],
      setAnimate: false
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    headerColor: {
      type: String,
      default: '#00bfff'
    },
    itemColor: {
      type: String,
      default: '#00bfff'
    },
    cancelBtn: {
      type: String,
      default: '#000000'
    },
    confirmBtn: {
      type: String,
      default: '#00bfff'
    },
    type: {
      type: String,
      default: 'single',
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['single', 'multiple', 'range'].indexOf(value) !== -1
      }
    }
  },
  created () {
    this._fillDate(this.now.year, this.now.month)
  },
  mounted () {
    this.$emit('confirm', this.type === 'multiple' ? JSON.parse(JSON.stringify(this.todayTextMultiple)) : this.todayText)
  },
  methods: {
    _fillDate (year, month) {
      let firstDay = new Date(year, month, 1).getDay() === 0 ? 7 : new Date(year, month, 1).getDay()
      let finalDate = new Date(year, month + 1, 0).getDate()
      let lastDate = new Date(year, month, 0).getDate()
      let surplus = 42 - firstDay - finalDate
      this.oHeadDate = year + '年' + (month + 1) + '月'
      for (let i = 0; i < firstDay; i++) {
        this.prevDate.push({
          date: lastDate - (firstDay - 1) + i,
          disabled: true,
          id: 'prevDate--' + year + '年' + (month + 1) + '月' + (i + 1) + '日'
        })
      }
      for (let j = 0; j < finalDate; j++) {
        this.nowDate.push({
          date: j + 1,
          disabled: false,
          id: 'nowDate--' + year + '年' + (month + 1) + '月' + (j + 1) + '日'
        })
      }
      for (let k = 0; k < surplus; k++) {
        this.nextDate.push({
          date: k + 1,
          disabled: true,
          id: 'nextDate--' + year + '年' + (month + 1) + '月' + (k + 1) + '日'
        })
      }

      this.allDate = []

      Array.prototype.push.apply(this.allDate, [
        ...this.prevDate,
        ...this.nowDate,
        ...this.nextDate
      ])

      this.allDate = sliceArray(this.allDate, 7)

      // if (year === new Date().getFullYear() && month === new Date().getMonth()) {
      //   // 这段用来初始化当天时间的
      //   this.currentItem = [firstDay + new Date().getDate() - 1]
      //   this._setWeek(this.currentItem, false, parseTime(new Date, '{y}年{m}月{d}日'))
      // }
    },
    _next () {
      this.now.month++
      if (this.now.month > 11) {
        this.now.month = 0
        this.now.year++
      }
      this._reset()
      this._fillDate(this.now.year, this.now.month)
      // this.tapItem(1, true)
    },
    _prev () {
      this.now.month--
      if (this.now.month < 0) {
        this.now.month = 11
        this.now.year--
      }
      this._reset()
      this._fillDate(this.now.year, this.now.month)
      // this.tapItem(1, true)
    },
    _nextYear () {

    },
    _prevYear () {

    },
    _reset () {
      this.prevDate = []
      this.nowDate = []
      this.nextDate = []
    },
    _setWeek (k, tapArrow = false, id) {
      this.setAnimate = true

      if (tapArrow) {
        this.todayText = this.weekArr[~~this.prevDate.length % 7]
      } else {
        if (this.type === 'multiple') {
          this._setMultipleValue(id, k)
        } else {
          this._setSingleValue(id, k)
        }
      }

      setTimeout(() => {
        this.setAnimate = false
      }, 300)
    },
    _setSingleValue (str, k) {
      this.todayText = str + this.weekArr[~~k % 7]
    },
    _setMultipleValue (str, k) {
      const _index = this.todayTextMultiple.indexOf(str + this.weekArr[~~k % 7])
      if (_index === -1) {
        this.todayTextMultiple.push(str + this.weekArr[~~k % 7])
      } else {
        this.todayTextMultiple.splice(_index, 1)
      }
    },
    tapItem (targetIndex, tapArrow = false, id) {
      if (tapArrow) {
        // 点击箭头
        this.currentItem.push(id)
        this._setWeek(targetIndex, tapArrow)
      } else {
        // 点击灰色区域日期
        if (
          targetIndex < this.prevDate.length ||
          targetIndex > this.prevDate.length + this.nowDate.length - 1
        ) {
          return
        }
        // 点击可选日期
        if (this.type === 'single') {
          this.currentItem = []
        }
        const _index = this.currentItem.indexOf(id)
        if (_index === -1) {
          this.currentItem.push(id)
        } else {
          this.currentItem.splice(_index, 1)
        }
        this._setWeek(targetIndex, tapArrow, id)
      }
    },
    cancel () {
      this.$emit('input', false)
    },
    confirm () {
      let currentData
      // fix数据
      if (this.type === 'multiple') {
        currentData = JSON.parse(JSON.stringify(this.todayTextMultiple))
        for (let i = 0; i < currentData.length; i++) {
          currentData[i] = currentData[i].split('--')[1]
        }
      } else {
        currentData = this.todayText.split('--')[1]
      }
      this.$emit('confirm', currentData)
      this.$emit('input', false)
    }
  },
  computed: {
    currentDate () {
      return {
        backgroundColor: this.itemColor,
        color: '#FFF',
        borderRadius: '50%'
      }
    },
    currentDateNot () {
      return {
        color: this.itemColor
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../less/base.less";

@keyframes vuer-txt-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.@{prefixClass} {
  &-date-picker {
    .mask();
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    &-box {
      position: fixed;
      animation: vuer-txt-in 100ms ease-in 0s 1 forwards;
      top: 50%;
      left: 50%;
      width: 6px * @baseRem;
      height: 9.5px * @baseRem;
      transform: translate3d(-50%, -50%, 0);
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 1px 19px 60px rgba(0, 0, 0, 0.3), 2px 15px 20px rgba(0, 0, 0, 0.2);
      z-index: 1501;
      background-color: #fff;
      .im-txt-in {
        animation: vuer-txt-in 300ms ease-in 0s 1 forwards;
      }
      &-value {
        padding: 0.6px * @baseRem 0.2px * @baseRem;
        width: 100%;
        font-size: 0.4px * @baseRem;
        font-weight: bold;
        color: #fff;
        letter-spacing: 0.07px * @baseRem;
      }
      &-ctrl {
        display: flex;
        font-size: 0.3px * @baseRem;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0.3px * @baseRem 0.5px * @baseRem;
        &-date {
          padding: 0 0.2px * @baseRem;
          letter-spacing: 0.04px * @baseRem;
        }
        .arrow {
          width: 0.4px * @baseRem;
          height: 0.4px * @baseRem;
        }
      }
      &-title {
        font-size: 0.3px * @baseRem;
        width: 100%;
        padding: 0.2px * @baseRem;
        text-align: center;
        color: @base-color-txt-title;
      }
      &-header {
        height: 0.7px * @baseRem;
      }
      &-content {
        text-align: center;
        font-size: 0.3px * @baseRem;
        &-item {
          height: 77px;
        }
        .im-disabled-true {
          color: @base-color-txt-fuzzy;
        }
      }
      &-btns {
        width: 100%;
        height: 100%;
        padding: 0.3px * @baseRem;
        display: flex;
        justify-content: flex-end;
        font-size: 32px;
        &-item {
          padding: 0.2px * @baseRem;
        }
      }
    }
  }
}

</style>
