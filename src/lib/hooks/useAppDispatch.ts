import { useDispatch } from 'react-redux';
import {AppDispatch} from "providers/StoreProvider/config/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
