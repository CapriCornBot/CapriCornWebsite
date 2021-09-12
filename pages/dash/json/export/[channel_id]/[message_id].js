import { useRouter, withRouter } from 'next/router'
import { Component } from 'react'
import styles from '../../../../../styles/Home.module.css'
import json_css from '../../../../../styles/json.export.module.css'
import Sidebar2 from '../../../../../components/sidebar'
import EmbedVisualizer, {parseContent, parseTitle} from 'embed-visualizer'
import 'embed-visualizer/dist/index.css'

//import { socket } from '../../../../socket'
const socket = require('../../../../../socket').socket
const Post = (data) => {
    const router = useRouter()
    const channel_id = data.channel_id
    const message_id = data.message_id

    const props = {
        channel_id: channel_id, 
        message_id: message_id
    }
    //return <></>
    return (
        <div className="flex">
            <Sidebar2 page={"/dash/json/export/[channel_id]/[message_id]"}></Sidebar2>
            <div className="flex-grow flex-col bg-ldark">
                <div className="" id="Ueberschrift">
                    <h1 className={styles.title}>Exported JSON</h1>
                    <br/>
                    <p>
                        This is the exported JSON2 for the message.
                    </p> 
                </div>
                <div className="w-full overflow-y-scroll h-30 pb-10 bg-verydark border-4 rounded-lg border-ddark" id="Codewidget">
                    <pre>
                        <code>
                            <JsonExport {...props}></JsonExport> 
                        </code>
                    </pre>
                </div>
            </div>
        
        </div>

        // <div className="ml-10 mr-10 h-screen">
        //     <div className="table-row-group block w-full table">
        //         <div className="table-row">
        //             <div className="table-cell block h-30" id="Ueberschrift">
        //                 <h1 className={styles.title}>Exported JSON</h1>
        //                 <br/>
        //                 <p>
        //                     This is the exported JSON2 for the message.
        //                 </p> 
        //                 <br/>
        //             </div>
        //         </div>
        //         <div className="table-row">
                    // <div className="table-cell w-full overflow-y-scroll h-auto pb-10 bg-verydark border-4 rounded-lg border-ddark" id="Codewidget">
                    //     <pre>
                    //         <code>
                    //             <JsonExport {...props}></JsonExport > 
                    //         </code>
                    //     </pre>
                    // </div>
        //         </div>
        //     </div>
        // </div>
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

class EmbedVisualizer2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            embed: {
                title: "LOADING",
                description: "LOADING"
            }
        }
    };
    render() {
        return (<EmbedVisualizer embed={this.state.embed} />)
    }
}


export async function getServerSideProps(context) {
    console.log("Context", context)
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