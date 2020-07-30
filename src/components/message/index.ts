import { h, defineComponent, ref, reactive, onMounted, onUnmounted, nextTick } from 'vue'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtMessageProps, AtMessageState } from 'types/message'
import AtComponentWithDefaultProps from "../mixins"

const AtMessage = defineComponent({

    mixins: [AtComponentWithDefaultProps],

    onHide() {
        Taro.eventCenter.off('atMessage')
    },

    onShow() {
        this.bindMessageListener()
    },

    setup(props: AtMessageProps) {
        const _timer = ref<NodeJS.Timeout | number | null>(null)

        const state = reactive<AtMessageState>({
            _isOpened: false,
            _message: '',
            _type: 'info',
            _duration: 3000
        })

        function bindMessageListener(): void {
            Taro.eventCenter.on('atMessage', (options = {}) => {
                const { message, type, duration } = options
                const newState = {
                    _isOpened: true,
                    _message: message,
                    _type: type,
                    _duration: duration || state._duration
                }
                Object.assign(state, newState)
                nextTick(() => {
                    clearTimeout(_timer.value as number)
                    _timer.value = setTimeout(() => {
                        state._isOpened = false
                    }, state._duration)
                })
            })
            // 绑定函数
            Taro.atMessage = Taro.eventCenter.trigger.bind(
                Taro.eventCenter,
                'atMessage'
            )
        }

        onMounted(() => {
            bindMessageListener()
        })

        onUnmounted(() => {
            Taro.eventCenter.off('atMessage')
        })

        return () => {
            const rootClass = classNames(
                {
                    'at-message': true,
                    'at-message--show': state._isOpened,
                    'at-message--hidden': !state._isOpened
                },
                `at-message--${state._type}`,
                props.className
            )

            return (
                h(View, {
                    class: rootClass,
                    style: props.customStyle,
                }, state._message)
            )
        }
    }
})

export default AtMessage