import { DivRef } from '../types/sections'

export default class Scroll {
  static scrollToRefWithRefOffset(targetRef: DivRef, offsetRef: DivRef) {
    const offsetHeight = offsetRef?.current?.clientHeight
    const targetPosition = targetRef?.current?.getBoundingClientRect().top

    if (!offsetHeight || !targetPosition) return

    const scrollAmount = window.scrollY + targetPosition - offsetHeight
    window.scrollTo({ top: scrollAmount, behavior: 'smooth' })
  }

  static scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
}
