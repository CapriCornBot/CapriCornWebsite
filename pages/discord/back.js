export default function handleDiscordBack() {
    return <div></div>
}

export async function getServerSideProps(ctx) {
    console.log(ctx)
    if(ctx.query.code) {
        let url = `https://discordapp.com/api/v9/oauth2/token`
        let body = {
            client_id: process.env.DISCORD_CLIENT_ID,
            client_secret: process.env.DISCORD_CLIENT_SECRET,
            grant_type: 'authorization_code',
            code: ctx.query.code,
            redirect_uri: process.env.DISCORD_REDIRECT_URI
        }
        let body2 = `client_id=${process.env.DISCORD_CLIENT_ID}&client_secret=${process.env.DISCORD_CLIENT_SECRET}&grant_type=authorization_code&code=${ctx.query.code}&redirect_uri=${encodeURIComponent(process.env.DISCORD_REDIRECT_URI)}`
        console.log(body2)
        console.log(url)
        const res = await fetch(url,{
            "method": "POST",
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            "body": `client_id=${process.env.DISCORD_CLIENT_ID}&client_secret=${process.env.DISCORD_CLIENT_SECRET}&grant_type=authorization_code&code=${ctx.query.code}&redirect_uri=${encodeURIComponent(process.env.DISCORD_REDIRECT_URI)}`,
        })
        const data = await res.json()
        console.log(data)
        const res2 = await fetch(`https://discordapp.com/api/v9/users/@me`, {
            headers: {
                Authorization: `Bearer ${data.access_token}`
            }
        })
        const data2 = await res2.json()
        console.log(data2)
        return {
            props: {
                code: ctx.query.code,
                user: data2
            }
        }
    }
}