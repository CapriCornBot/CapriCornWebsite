import { Head } from "next/head"


export default function Login(req, res) {
    return (<div>
    </div>)
}

export async function getServerSideProps(ctx) {
    ctx.res.statusCode = 302
    ctx.res.setHeader('Location', `${process.env.DISCORD_OAUTH}`)
    return {
        props: {
        }
    }
}