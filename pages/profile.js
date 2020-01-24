import Button from '../lib/components/Button';
import Link from "next/link";

export default () => {
    return (
        <h1>
            Profile{ " "}
            <Link href ="/" >
                <Button>home</Button>
            </Link>
            <Button onClick ={async ()=> {
                const response = await fetch('/api/emojis');

                alert (await response.text());
                }}
                >
                    get emojis
            </Button>
        </h1>
    )
}