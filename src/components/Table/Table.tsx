import cls from './Table.module.scss'
import {classNames} from "lib/classNames";
import {fakeData} from 'db'
import {Item} from "models/Data/types/data";
import {tableNames} from "lib/consts";
import { v4 as uuidv4 } from 'uuid';
import {memo} from "react";

interface TableProps {
    className?: string;
    item?: Item;
}

export const Table = memo(({className, item}: TableProps) => {
    return (
        <div className={classNames(cls.Table, {}, [className])}>
            <table className={cls.table} >
                <thead>
                <tr>
                    {tableNames.map((item) => (
                        <th scope="col" className={cls.col} key={uuidv4()}>{item}</th>
                        )
                    )}
                </tr>
                </thead>
                <tbody>
                {item?.sales?.map((sale) =>(
                    <tr key={uuidv4()}>
                        <th scope="row" className={cls.row} key={uuidv4()}>{sale.weekEnding}</th>
                        <th scope="row" className={cls.row} key={uuidv4()}>${sale.retailSales}</th>
                        <th scope="row" className={cls.row} key={uuidv4()}>${sale.wholesaleSales}</th>
                        <th scope="row" className={cls.row} key={uuidv4()}>{sale.unitsSold}</th>
                        <th scope="row" className={cls.row} key={uuidv4()}>${sale.retailerMargin}</th>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
});