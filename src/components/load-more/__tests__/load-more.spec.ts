import { mount } from '@vue/test-utils'
import AtLoadMore from '../index'

const factory = (values = {}, slots = { default: [] }) => {
  return mount(AtLoadMore as any, {
    global: {
      components: {}
    },
    slots,
    props: { ...values },
  })
}

describe('AtLoadMore Snap', () => {
  it('should render initial AtLoadMore', () => {
    const wrapper = factory()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtLoadMore -- props style', () => {
    const wrapper = factory({ style: 'color:red;' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtLoadMore -- props class', () => {
    const wrapper = factory({ class: 'test' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtLoadMore -- props status === more', () => {
    const wrapper = factory({ status: 'more' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtLoadMore -- props status === loading', () => {
    const wrapper = factory({ status: 'loading' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtLoadMore -- props status === noMore', () => {
    const wrapper = factory({ status: 'noMore' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtLoadMore -- props moreText', () => {
    const wrapper = factory({ moreText: 'moreText', status: 'more' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtLoadMore -- props loadingText', () => {
    const wrapper = factory({ loadingText: 'loadingText', status: 'loading' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtLoadMore -- props noMoreText', () => {
    const wrapper = factory({ noMoreText: 'noMoreText', status: 'noMore' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtLoadMore -- props noMoreTextStyle', () => {
    const wrapper = factory({ noMoreTextStyle: 'color:red' })
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render AtLoadMore -- props moreBtnStyle', () => {
    const wrapper = factory({ moreBtnStyle: 'color:red' })
    expect(wrapper.element).toMatchSnapshot()
  })
})
