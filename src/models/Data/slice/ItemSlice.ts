import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Item, ItemSchema} from "models/Data/types/data";
import {fetchData} from "models/Data/services/fetchData";

const initialState: ItemSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
    selectVal: 'retailSales',
};

export const itemSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        updateData: (state, action: PayloadAction<string>) => {
            state.selectVal = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchData.fulfilled, (
                state,
                action: PayloadAction<Item>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
});

// Action creators are generated for each case reducer function
export const { actions: itemActions } = itemSlice;
export const { reducer: itemReducer } = itemSlice;
