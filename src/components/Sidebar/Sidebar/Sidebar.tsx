import cls from './Sidebar.module.scss'
import {classNames} from "lib/classNames";
import {Img} from 'components/ui/Img/Img';
import {Button, ButtonSize} from "components/ui/Button/Button";
import {Item} from "models/Data/types/data";
import {memo} from "react";


interface SidebarProps {
    className?: string;
    item?: Item;
}


export const Sidebar = memo(({className, item}: SidebarProps) => {

    return (
        <div className={classNames(cls.Sidebar, {}, [className])}>
             <Img
                 className={cls.image}
                 src={item?.image}
                 size={150}
             />
             <div className={cls.item_name}>
                 {item?.title}
             </div>
             <div className={cls.item_desc}>
                 {item?.subtitle}
             </div>

            <div className={cls.buttons}>
                {item?.tags?.map((tag) => (
                    <Button size={ButtonSize.S} className={cls.btn} key={tag}>
                        {tag}
                    </Button>
                ))}
            </div>
        </div>
    );
});