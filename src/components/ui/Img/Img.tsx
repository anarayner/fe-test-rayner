import {classNames} from "lib/classNames";
import {CSSProperties, memo, useMemo} from "react";


interface LogoProps {
    className?: string;
    src?: any;
    size?: number;
    alt?: string;
}

export const Img = memo(({className, src, size, alt}: LogoProps) => {

    const styles = useMemo<CSSProperties>(() => ({
            width: size || 50,
            height: size || 50
        }), [size]);

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames('', {}, [className])}/>

    );
});