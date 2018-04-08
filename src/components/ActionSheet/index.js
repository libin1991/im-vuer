import ActionSheet from './ActionSheet.vue'
import { pageScroll } from '../../helper/pageScroll.js'

let ActionSheetPlugin = {
  install: function (Vue, options) {
    const ActionSheetConstructor = Vue.extend(ActionSheet);

    const instance = new ActionSheetConstructor({
        el: document.createElement('div')
    });

    let el = instance.$el;

    let firstChild = el.firstChild;

    ActionSheetConstructor.prototype.closeActionSheet = function (callback) {

      typeof callback === 'function' && callback();

      pageScroll.unlock();

      firstChild.className = 'im-action-sheet-box action-sheet-fadeOut';

      // 200ms from ActionSheet.vue file cssName 'fadeOut' animation time
      setTimeout( () => {
        el.parentNode && el.parentNode.removeChild(el);
      }, 200)

    };

    Vue.prototype.$actionSheet = function (options) {
      
      instance.hasCancel = options.hasCancel || false;
      instance.opts = options.opts || [{
            txt: 'hello world',
            color: '#00bFFF',
            cb: () => {}
          },{
            txt: 'hello world',
            color: '#f00',
            cb: () => {}
          }];

      firstChild.className = 'im-action-sheet-box action-sheet-fadeIn';

      document.body.appendChild(el);
      pageScroll.lock();

    }
  }
}

export { ActionSheetPlugin }