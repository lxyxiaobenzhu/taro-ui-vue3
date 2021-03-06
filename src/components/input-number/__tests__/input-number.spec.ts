import { mount } from '@vue/test-utils'
import AtInputNumber from '../index'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(AtInputNumber as any, {
    slots,
    props: { ...values },
  })
}

describe('AtInputNumber Snap', () => {
  it('should render initial AtInputNumber', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtInputNumber -- props style', () => {
    const wrapper = factory({ style: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtInputNumber -- props class', () => {
    const wrapper = factory({ class: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtInputNumber -- props type(number)', () => {
    const wrapper = factory({ type: 'number' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtInputNumber -- props type(digit)', () => {
    const wrapper = factory({ type: 'digit' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtInputNumber -- props disabled', () => {
    const wrapper = factory({ disabled: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtInputNumber -- props disabledInput', () => {
    const wrapper = factory({ disabledInput: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtInputNumber -- props value', () => {
    const wrapper = factory({ value: 2 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtInputNumber -- props width', () => {
    const wrapper = factory({ width: 200 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtInputNumber -- props size', () => {
    const wrapper = factory({ size: 'large' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtInputNumber -- props step', () => {
    const wrapper = factory({ step: 2 })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('AtNumberInput Event', () => {
  it('AtNumberInput onChange', () => {
    const onChange = jest.fn()
    const wrapper = factory({ value: 2, onChange: onChange })
    wrapper.find('.at-input-number .at-input-number__input').trigger('input')
    expect(onChange).toBeCalled()
  })

  it('AtNumberInput onBlur', () => {
    const onBlur = jest.fn()
    const wrapper = factory({ value: 2, onBlur: onBlur })
    wrapper.find('.at-input-number .at-input-number__input').trigger('blur')
    expect(onBlur).toBeCalled()
  })
})
