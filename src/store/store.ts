import {configureStore} from '@reduxjs/toolkit';

import main from './stores/main/mainSlice';
import form from './stores/form/formSlice';

const store = configureStore({
  reducer: {main, form},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
