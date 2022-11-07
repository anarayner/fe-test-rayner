import cls from './Table.module.scss'
import {classNames} from "lib/classNames";
import {memo} from "react";

interface MonthProps {
    className?: string;
}

const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
export const Month = memo(({className}: MonthProps) => {

    return (
        <div className={classNames('', {}, [className])}>
            <table className={cls.table} >
                <tbody>
                    <tr>
                        {month.map((item) => (
                                <th scope="col" className={cls.month} key={item}>{item}</th>
                            )
                        )}
                    </tr>
                </tbody>
            </table>
        </div>
    );
});