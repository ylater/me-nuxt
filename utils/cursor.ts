class RingDot {
  root: HTMLElement;
  cursor: HTMLElement;
  dot: HTMLElement;
  pointerX: number;
  pointerY: number;
  cursorSize: number;
  cursorStyle: CSSStyleDeclaration;
  dotStyle: CSSStyleDeclaration;

  constructor() {
    this.root = document.body;
    this.cursor = document.querySelector(".curzr") as HTMLElement;
    this.dot = document.querySelector(".curzr-dot") as HTMLElement;

    this.pointerX = 0;
    this.pointerY = 0;
    this.cursorSize = 20;

    this.cursorStyle = {
      boxSizing: 'border-box',
      position: 'fixed',
      display: 'flex',
      top: `${this.cursorSize / -2}px`,
      left: `${this.cursorSize / -2}px`,
      zIndex: '2147483647',
      justifyContent: 'center',
      alignItems: 'center',
      width: `${this.cursorSize}px`,
      height: `${this.cursorSize}px`,
      backgroundColor: '#fff0',
      boxShadow: '0 0 0 1.25px #111920, 0 0 0 2.25px #F2F5F8',
      borderRadius: '50%',
      transition: '200ms, transform 100ms',
      userSelect: 'none',
      pointerEvents: 'none'
    };

    this.dotStyle = {
      boxSizing: 'border-box',
      position: 'fixed',
      zIndex: '2147483647',
      width: '4px',
      height: '4px',
      backgroundColor: '#111920',
      boxShadow: '0 0 0 1px #F2F5F8',
      borderRadius: '50%',
      userSelect: 'none',
      pointerEvents: 'none',
    };

    this.init(this.cursor, this.cursorStyle);
    this.init(this.dot, this.dotStyle);
  }

  init(el: HTMLElement, style: CSSStyleDeclaration) {
    Object.assign(el.style, style);
    this.cursor.removeAttribute("hidden");
  }

  move(event: MouseEvent) {
    if (
      event.target?.localName === 'button' ||
      event.target?.localName === 'a' ||
      event.target?.onclick !== null ||
      (event.target?.className && event.target.className.includes('curzr-hover'))
    ) {
      this.hover(40);
    } else {
      this.hoverout();
    }

    this.pointerX = event.pageX + this.root.getBoundingClientRect().x;
    this.pointerY = event.pageY + this.root.getBoundingClientRect().y;

    this.cursor.style.transform = `translate3d(${this.pointerX}px, ${this.pointerY}px, 0)`;
  }

  hover(radius: number) {
    this.cursor.style.width = this.cursor.style.height = `${radius}px`;
    this.cursor.style.top = this.cursor.style.left = `${radius / -2}px`;
  }

  hoverout() {
    this.cursor.style.width = this.cursor.style.height = `${this.cursorSize}px`;
    this.cursor.style.top = this.cursor.style.left = `${this.cursorSize / -2}px`;
  }

  click() {
    this.cursor.style.transform += ` scale(0.75)`;
    setTimeout(() => {
      this.cursor.style.transform = this.cursor.style.transform.replace(` scale(0.75)`, '');
    }, 35);
  }

  remove() {
    this.cursor.remove();
    this.dot.remove();
  }
}
export default RingDot;

