import debounce from "lodash/debounce";
import { useCallback, useLayoutEffect } from "react";

interface UseAutoMaxHeightProps {
    minHeight: number;
    wait: number;
}
/**
 * change element auto height if element was out of screen to fit the screen
 * height = 100% need full path DOM tree parent set height 100%
 * use this one set 
 * @param {React.RefObject<HTMLElement>} ref
 */
export const useAutoMaxHeight = (
    ref: React.RefObject<HTMLElement>,
    { minHeight, wait }: UseAutoMaxHeightProps = defaultUseAutoMaxHeightProps
): void => {
    const handleResize = useCallback(
        debounce(() => {
            const clientReact = ref.current!.getBoundingClientRect();
            const innerHeight = window.innerHeight;
            const clientY = clientReact.y;
            if (clientY > 0) {
                let newHeight = innerHeight - clientY;
                if (newHeight < minHeight) {
                    newHeight = minHeight;
                }
                ref.current!.style.maxHeight = `${newHeight}px`;
            }
        }, wait),
        [ref]
    );

    useLayoutEffect(() => {
        if (!ref.current) {
            return;
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });
};

const defaultUseAutoMaxHeightProps = {
    minHeight: 250,
    wait: 1000,
};
