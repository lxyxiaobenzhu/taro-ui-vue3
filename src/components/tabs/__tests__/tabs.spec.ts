import { mount } from '@vue/test-utils'
import AtTabs from '../index'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(AtTabs as any, {
    slots,
    props: { ...values },
  })
}

const tabList = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]
describe('AtTabs Snap', () => {
  it('should render initial AtTabs', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtTabs -- props style', () => {
    const wrapper = factory({ style: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtTabs -- props class', () => {
    const wrapper = factory({ class: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtTabs -- props tabList', () => {
    const wrapper = factory({ tabList: tabList })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtTabs -- props current', () => {
    const wrapper = factory({ tabList: tabList, current: 2 })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtTabs -- props swipeable', () => {
    const wrapper = factory({ tabList: tabList, swipeable: true })
    expect(wrapper.element).toMatchSnapshot()
  })

  // it('should render AtTabs -- props scroll', () => {
  //   const wrapper = factory({ tabList: tabList, scroll: true })
  //   expect(wrapper.element).toMatchSnapshot()
  // })

  it('should render AtTabs -- props tabDirection', () => {
    const wrapper = factory({ tabList: tabList, tabDirection: 'vertical' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtTabs -- props animated', () => {
    const wrapper = factory({ tabList: tabList, animated: false })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtTabs -- props height', () => {
    const wrapper = factory({ tabList: tabList, tabDirection: 'vertical', height: '300px' })
    expect(wrapper.element).toMatchSnapshot()
  })
})

describe('AtTabs Event', () => {
  it('AtTabs onClick', () => {
    const onClick = jest.fn()
    const wrapper = factory({ onClick: onClick, tabList: tabList })
    wrapper.find('.at-tabs .at-tabs__item').trigger('tap')
    expect(onClick).toBeCalled()
  })
})
