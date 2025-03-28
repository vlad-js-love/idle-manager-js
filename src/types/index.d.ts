declare module 'idle-manager' {
  export interface IdleManagerOptions {
    idleTime?: number; // timeout in milliseconds
    onIdle: () => void; // callback for idle state
    onActive: () => void; // callback for active state
    events?: string[]; // array of events to listen to (optional, all events are activated by default)
  }

  export default class IdleManager {
    constructor(options: IdleManagerOptions);
    
    start(): void; // start tracking
    stop(): void; // stop tracking
    resetTimer(): void; // reset timer
    triggerIdle(): void; // trigger idle state
  }
}
