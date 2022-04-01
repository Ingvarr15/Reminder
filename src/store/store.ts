import {configureStore} from '@reduxjs/toolkit';
import main from './stores/main/mainSlice';

const store = configureStore({
  reducer: {main},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
