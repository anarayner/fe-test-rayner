import './styles/index.scss'
import { classNames } from "lib/classNames";
import { Navbar } from "components/Navbar/Navbar";
import { Sidebar } from "components/Sidebar/Sidebar/Sidebar";
import {useCallback, useEffect, useState} from 'react';
import {fetchData} from "models/Data/services/fetchData";
import {useAppDispatch} from "lib/hooks/useAppDispatch";
import {Chart} from "components/Chart/Chart";
import cls from './App.module.scss'
import {Table} from "components/Table/Table";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {getData} from "models/Data/selectors/getData";
import {getDataError} from "models/Data/selectors/getDataError";
import {getDataIsLoading} from "models/Data/selectors/getDataIsLoading";
import {Select, SelectOption} from "components/ui/Select/Select";
import {getDataSelect} from "models/Data/selectors/getDataSelect";
import {itemActions} from "models/Data/slice/ItemSlice";


const App = () =>{
    const dispatch = useAppDispatch();

    useEffect(() => {
            dispatch(fetchData());
    }, [dispatch]);

    const data = useSelector(getData)
    const isLoading = useSelector(getDataIsLoading);
    const error = useSelector(getDataError);
    const graphValue = useSelector(getDataSelect)

    const options: SelectOption[] = [
        {value: 'retailSales', content: 'Retail sales'},
        {value: 'wholesaleSales', content: 'Wholesale sales'},
        {value: 'retailerMargin', content: 'Retailer margin'}
    ]

    const onChangeSelectOption = useCallback((value: string) => {
        dispatch(itemActions.updateData(value));
    }, [dispatch]);


    if (isLoading) {
        return (
            <div>
                LOADING
            </div>
        );
    }
    return(
        <div className={classNames('', {}, [])}>
            <Navbar/>
            <div className={cls.content_page}>
                <Sidebar item={data}/>
                <div className={cls.content}>
                    <Select
                        label={'Options'}
                        options={options}
                        className={cls.select_wrapper}
                        onChange={onChangeSelectOption}
                    />
                    <Chart data={data}
                            min={-3000000}
                            max={5000000}
                            yAxisKey={graphValue}
                    />

                    <Table item={data}/>
                </div>
            </div>
        </div>
    )
}

export default App