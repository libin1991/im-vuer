<script>
export default {
  name: 'im-progress',
  data () {
    return {

    }
  },
  render: function (createElement) {
    return createElement(
      'div',
      {
        class: {
          'im-progress': true
        },
        attrs: {
          id: this._uid
        },
        style: {
          padding: this.inTop ? '0' : '.2rem'
        }
      },
      [
        this.$slots.startText,
        createElement(
          'div',
          {
            class: {
              'im-progress-box': true
            },
            style: {
              position: this.inTop ? 'fixed' : '',
              top: '0px',
              margin: this.inTop ? '0' : '0 .2rem'
            }
          },
          [
            createElement('div', {
              class: {
                'im-progress-box-runway': true
              },
              style: {
                height: this.progressHeight + 'px',
                backgroundColor: this.color,
                borderRadius: this.progressHeight + 'px'
              }
            }),
            createElement('div', {
              class: {
                'im-progress-box-progress': true
              },
              style: {
                width: this.progressWidth + '%',
                height: this.progressHeight + 'px',
                backgroundColor: this.progressColor,
                borderRadius: this.progressHeight + 'px'
              }
            })
          ]
        ),
        this.$slots.endText
      ]
    )
  },
  props: {
    progressWidth: {
      type: [Number, String],
      default: 0
    },
    progressHeight: {
      type: [Number, String],
      default: 2
    },
    progressColor: {
      type: String,
      default: '#00bfff'
    },
    color: {
      type: String,
      default: '#5d5d5d'
    },
    startText: {
      type: String,
      default: '0%'
    },
    endText: {
      type: String,
      default: '100%'
    },
    inTop: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "../../less/base.less";
.@{prefixClass} {
  &-progress {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2px * @baseRem;
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .progress-text {
      font-size: 0.3px * @baseRem;
      color: #5d5d5d;
    }
    &-box {
      position: relative;
      width: 100%;
      margin: 0 0.2px * @baseRem;
      z-index: 9993;
      &-runway {
        width: 100%;
        position: absolute;
      }
      &-progress {
        position: absolute;
      }
    }
  }
}
</style>
