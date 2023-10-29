import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    title: '',
    description: '',
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
            state.title = action.payload.title;
            state.description = action.payload.description;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.title = '';
            state.description = '';
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
