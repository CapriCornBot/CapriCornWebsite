import { useRouter, withRouter } from 'next/router'
import { Component } from 'react'
//import { socket } from '../../../../socket'
const socket = require('../../../../socket').socket
const Post = (data) => {
    const router = useRouter()
    
    const channel_id = data.channel_id
    const message_id = data.message_id

    const props = {
        channel_id: channel_id, 
        message_id: message_id
    }

    return (
        <div>
            <h1>Exported JSON</h1>
            <p>
                This is the exported JSON2 for the message.
            </p> 
            <pre>
                <code>
                    <JsonExport {...props}></JsonExport > 
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
            message: "Loading"
        }
    };
    componentDidMount() {
        socket.emit('export_json', {
            "code": 1,
            "data": {
                "channel_id": this.props.channel_id,
                "message_id": this.props.message_id
            }
        })
        socket.on('export_json_callback', (data) => {
            this.setState({
                message: JSON.stringify(data.data.json, null, 2)
                })
            })
        // setTimeout(() => {
        //     this.setState(
        //         {
        //             message: "Testing",
        //             message_id: this.state.message_id,
        //             channel_id: this.state.channel_id
        //         }
        //     );
        // }, 1000);
    };
    render() {
        return (
            <a>{this.state.message}</a>
        )
    }
}

export async function getServerSideProps(context) {
    const channel_id = context.query.channel_id
    const message_id = context.query.message_id
    const props = {
        channel_id: channel_id, 
        message_id: message_id
    }
    return {
        props: props
    }
}
export default withRouter(Post)