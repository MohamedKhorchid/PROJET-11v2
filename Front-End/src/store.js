import { configureStore } from '@reduxjs/toolkit'
import authentificationReducer from './reducers/authentification.reducer.js'
import userReducer from "./reducers/user.reducer.js"

const store = configureStore({
  reducer: {
    auth: authentificationReducer,
    user: userReducer,
  },
  devTools: true, //a changer en false quand le projet est terminé, true uniquement pendant le développement,
})

export default store