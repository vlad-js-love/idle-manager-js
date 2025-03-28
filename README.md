# Idle Manager Js

`Idle Manager Js` is a library for tracking user activity. It allows you to detect when a user becomes inactive and react to user activity, which can be useful for applications that require auto-session termination or timeout actions.

## Installation

To install the library, execute one of the commands:

```bash
npm install idle-manager-js
yarn add idle-manager-js
pnpm add idle-manager-js
```

# Usage

Basic Example

``` js
import IdleManager from 'idle-manager-js';

const idleManager = new IdleManager({
  idleTime: 300000, // Time of inactivity in milliseconds (e.g., 5 minutes)
  onIdle: () => {
    console.log('User is idle');
    // Perform actions when the user is idle (e.g., log out or end session)
  },
  onActive: () => {
    console.log('User is active');
    // Perform actions when the user becomes active again (e.g., restore session)
  },
});

idleManager.start(); // Starts tracking user activity
```

## Configuration

- **`idleTime`** (optional):  
  The time of inactivity in milliseconds after which the user is considered idle.  
  _Default: `60000` milliseconds (1 minute)_

- **`onIdle`** (required):  
  A callback function that will be triggered when the user becomes idle.

- **`onActive`** (required):  
  A callback function that will be triggered when the user becomes active again.

## Methods

### `start()`
Starts tracking user activity. Begins listening for activity events and resets the timer on each event.

### `stop()`
Stops tracking user activity. Removes all event listeners and clears the timer.

### `resetTimer()`
Automatically resets the timer whenever an activity event (e.g., mouse movement or key press) occurs. If the page loses focus, the user is considered idle.

### `triggerIdle()`
Triggers the idle timeout, marking the user as idle.

## License

This project is licensed under the MIT License.

## Contributing

We welcome contributions! If you have ideas, improvements, or fixes — please feel free to create a Pull Request or open an Issue.
