import Confirm from './Confirm.vue'
import { pageScroll } from '../../helper/pageScroll.js'

import { hashChange } from '../../helper/hashChange.js'

function noop () {

}

let ConfirmPlugin = {
  install: function (Vue, options) {
    const ConfirmConstructor = Vue.extend(Confirm)

    const instance = new ConfirmConstructor({
      el: document.createElement('div')
    })

    let el = instance.$el

    let firstChild = el.firstChild

    ConfirmConstructor.prototype.closeConfirm = function (callback) {
      typeof callback === 'function' && callback()

      instance.complete()

      pageScroll.unlock()

      firstChild.className = 'im-confirm-box-' + instance.styleFor + ' confirm-fadeOut'

      // 200ms from Confirm.vue file cssName 'fadeOut' animation time
      setTimeout(() => {
        el.parentNode && el.parentNode.removeChild(el)
        window.removeEventListener('hashchange', hashChange.bind(this, el))
      }, 200)
    }

    Vue.prototype.$confirm = function (options) {
      instance.title = options.title || '标题'
      instance.content = options.content || '这是一段提示'
      instance.styleFor = +['ios', 'android'].indexOf(options.styleFor) !== -1 ? options.styleFor : 'ios'
      instance.opts = options.opts || [{
        txt: '确定',
        color: '#00bFFF',
        cb: () => {}
      }]
      instance.complete = options.complete || noop

      firstChild.className = 'im-confirm-box-' + instance.styleFor + ' confirm-fadeIn'

      window.addEventListener('hashchange', hashChange.bind(this, el))

      document.body.appendChild(el)

      pageScroll.lock()
    }
  }
}

export { ConfirmPlugin }
