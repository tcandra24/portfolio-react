import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: localStorage.getItem('theme') || 'light',
    direction: localStorage.getItem('direction') || 'ltr',
};

const themeConfigSlice = createSlice({
    name: 'themeConfig',
    initialState: initialState,
    reducers: {
        toggleTheme(state, { payload }) {
            payload = payload || state.theme; // light | dark
            localStorage.setItem('theme', payload);
            state.theme = payload;
        },
        toggleDirection(state, { payload }) {
            payload = payload || state.direction; // rtl, ltr
            localStorage.setItem('direction', payload);
            state.direction = payload;

            document.querySelector('html')?.setAttribute('dir', state.direction || 'ltr');
        },
    },
});

export const { toggleTheme, toggleDirection } = themeConfigSlice.actions;

export default themeConfigSlice.reducer;
