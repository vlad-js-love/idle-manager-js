export default class IdleManager {
  idleTime: number;
  onIdle: () => void;
  onActive: () => void;
  timer: NodeJS.Timeout | null;
  isIdle: boolean;
  events: string[];
  handleEvent: () => void;

  constructor({
    idleTime = 60000,
    onIdle,
    onActive,
  }: {
    idleTime?: number;
    onIdle: () => void;
    onActive: () => void;
  }) {
    this.idleTime = idleTime;
    this.onIdle = onIdle;
    this.onActive = onActive;
    this.timer = null;
    this.isIdle = false;
    this.events = [
      "mousemove",
      "keydown",
      "mousedown",
      "touchstart",
      "touchmove",
      "visibilitychange",
    ];
    this.handleEvent = this.resetTimer.bind(this);
  }

  start(): void {
    this.events.forEach((event) =>
      window.addEventListener(event, this.handleEvent)
    );
    this.resetTimer();
  }

  stop(): void {
    this.events.forEach((event) =>
      window.removeEventListener(event, this.handleEvent)
    );
    if (this.timer) clearTimeout(this.timer);
  }

  resetTimer(): void {
    if (document.visibilityState === "hidden") {
      this.triggerIdle();
      return;
    }
    if (this.timer) clearTimeout(this.timer);
    if (this.isIdle) {
      this.isIdle = false;
      this.onActive?.();
    }
    this.timer = setTimeout(() => this.triggerIdle(), this.idleTime);
  }

  triggerIdle(): void {
    if (!this.isIdle) {
      this.isIdle = true;
      this.onIdle?.();
    }
  }
}
