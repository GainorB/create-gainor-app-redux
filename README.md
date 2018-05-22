# create-gainor-app-redux

A boilerplate application for creating react apps with redux.

Includes everything found her: https://github.com/GainorB/create-gainor-app

# Redux Data Flow

1.  **View:** React Components that fire actions to the Action Creators, that fire actions to the store
2.  **Store:** includes state which sends state to connected components
3.  **Reducers:** pure functions that specify how application state should change in response to actions. State is immutable, essentially recreated as new state and returned to component to react accordingly.

# Three Principles

1.  Single source of truth: The state of your whole application is stored in an object tree within a single store.
2.  State is read-only: The only way to change the state is to emit an action, an object describing what happened.
3.  Changes are made with pure functions: Reducers are just pure functions that take the previous state and an action, and return the next state. Remember to return new state objects, instead of mutating the previous state.

# Actions

Actions are payloads of information that send data from your application to your store. They are the only source of information for the store.

Actions are plain JavaScript objects. Actions must have a type property that indicates the type of action being performed. Types should typically be defined as string constants. Once your app is large enough, you may want to move them into a separate module.

# Action Creators

Action creators are exactly that—functions that create actions.

# Reducers

Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes. In Redux, all the application state is stored as a single object. It's a good idea to think of its shape before writing any code.

# Middleware

1.  redux-thunk: allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

2.  redux-promise: lets you dispatch a Promise async action, and dispatches a normal action when the Promise resolves.
