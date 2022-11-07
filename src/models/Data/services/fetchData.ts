import { createAsyncThunk } from '@reduxjs/toolkit';
import { Item } from '../types/data';
import {ThunkConfig} from "providers/StoreProvider/config/StateSchema";

export const fetchData = createAsyncThunk<
    Item,
    void,
    ThunkConfig<string>
    >(
    'data/fetchData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<Item>('/data');

            if (!response.data) {
                throw new Error();
            }
            console.log(response.data)
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);