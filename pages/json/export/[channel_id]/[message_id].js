import { useRouter } from 'next/router'
import { Component } from 'react'
const Post = () => {
    const router = useRouter()
    const channel_id = router.query.channel_id
    const message_id = router.query.message_id

    return (
        <div>
            <h1>Exported JSON</h1>
            <p>
                This is the exported JSON for the message.
            </p>
            <pre>
                <code>
                    <JsonExport></JsonExport>
                </code>
            </pre>
        </div>
    )
}

class JsonExport extends Component {
    constructor(props) {
        super(props)
        this.state = {
            channel_id: this.props.channel_id,
            message_id: this.props.message_id,
            message: null
        }
    };
    componentDidMount() {
        setTimeout(() => {
            this.setState(
                {
                    message: "Testing",
                    message_id: this.state.message_id,
                    channel_id: this.state.channel_id
                }
            );
        }, 1000);
    };
    render() {
        return (
            <a>{this.state.message}</a>
        )
    }
}

export default Post