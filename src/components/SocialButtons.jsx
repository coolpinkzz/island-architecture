import {useState} from 'preact/hooks';

/** a counter written in Preact */
export function SocialButtons() {
    const [count, setCount] = useState(0);
    const add = () => setCount((i) => i + 1);
    const subtract = () => setCount((i) => i - 1);

    return (
        <>
            <div>
                {count} people liked this post
            </div>
            <div  align="left">
                <img src="/like.png" width="32" height="32" onclick={add}></img>
                <img src="/unlike.png" width="32" height="32" onclick={subtract}></img>
            </div>
        </>
    );
}