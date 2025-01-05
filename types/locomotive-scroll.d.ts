declare module 'locomotive-scroll' {
  interface ILocomotiveScrollOptions {
    el: HTMLElement;
    smooth?: boolean;
    multiplier?: number;
    class?: string;
    lerp?: number;
    [key: string]: any;
  }

  export default class LocomotiveScroll {
    constructor(options: ILocomotiveScrollOptions);

    options: ILocomotiveScrollOptions;
    
    scroll: {
      instance: {
        scroll: { x: number; y: number };
        limit: { x: number; y: number };
      };
    };

    init(): this;
    destroy(): void;
    update(): void;
    start(): void;
    stop(): void;
    
    on(event: string, func: Function): void;
    off(event: string, func: Function): void;

    scrollTo(
      target: string | number | HTMLElement | Object,
      options?: {
        offset?: number;
        callback?: Function;
        duration?: number;
        easing?: [number, number, number, number];
        disableLerp?: boolean;
      }
    ): void;
  }
}
