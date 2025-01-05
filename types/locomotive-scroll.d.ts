declare module 'locomotive-scroll' {
  export default class LocomotiveScroll {
    constructor(options: any)
    on(event: string, callback: (...args: any[]) => void): void
    destroy(): void
  }
}

