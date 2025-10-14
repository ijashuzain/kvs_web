import {ElementRef , Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private touchStartX = 0;
  private swipeThreshold = 50;

  constructor() {}

  next(container: HTMLElement, currentIndex: number, cardsInView: number, step: number, total: number): number {
    const maxIndex = total - cardsInView;
    const newIndex = Math.min(currentIndex + step, maxIndex);
    this.scrollToIndex(container, newIndex);
    return newIndex;
  }

  prev(container: HTMLElement, currentIndex: number, step: number): number {
    const newIndex = Math.max(currentIndex - step, 0);
    this.scrollToIndex(container, newIndex);
    return newIndex;
  }

  private scrollToIndex(container: HTMLElement, index: number): void {
    if (!container) return;

    const targetCard = container.children[index] as HTMLElement;
    if (targetCard) {
      const cardStyle = getComputedStyle(targetCard);
      const cardWidth = targetCard.offsetWidth + parseFloat(cardStyle.marginRight);
      container.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
    }
  }

  // --- Swipe ---
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent, container: HTMLElement, nextFn: () => void, prevFn: () => void): void {
    const touchEndX = event.changedTouches[0].clientX;
    const distance = this.touchStartX - touchEndX;
    if (Math.abs(distance) > this.swipeThreshold) {
      distance > 0 ? nextFn() : prevFn();
    }
  }
}
