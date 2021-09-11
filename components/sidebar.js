import { Component } from "react";
import Image from "next/image";

class Sidebar2 extends Component {
  render() {
    console.log("Props", this.props);
    return (
      <div className="bg-ddark sticky flex h-screen flex-col w-64 top-0">
        <div className="flex flex-col flex-1">
          <div className="border-4 rounded-b-md border-capri flex items-center justify-between px-4 py-3 bg-capri text-white">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"/>
              </svg>
              <span className="ml-2 font-semibold text-xl tracking-tight">
                CapriCorn
              </span>
            </div>
            <div>
              <button className="inline-flex items-center px-2 py-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-1000 focus:outline-none focus:bg-gray-1000 focus:text-white">
                <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-1 h-0 overflow-y-auto">
            <nav className="px-2 py-4">
              <MenuItem title="Dashboard" icon="home" link="/" path={["/"]} active={this.props.page}/>
              <MenuItem title="Custom Properties" icon="custom" link="/custom" path={["/custom"]} active={this.props.page}></MenuItem>
              <MenuItem title="JSON Export" icon="custom" link="/custom" path={["/json/export", "/json/export/[channel_id]/[message_id]"]} active={this.props.page} only_dash={true}></MenuItem>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar2;

class MenuItem extends Component {
  render() {
    if(this.props.only_dash && !this.props.active.startsWith("/dash")) {
      return <></>
    }
    if(this.props.active.startsWith("/dash")) {
      this.props.path.forEach(element => {
        let i = this.props.path.indexOf(element)
        element = "/dash" + this.props.path[i]
        this.props.path[i] = element
      });
    }
    if(this.props.path.includes(this.props.active)) {
      return (
        <a href={this.props.link} className="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 bg-gray-800 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150">
          <MenuSvg src={this.props.icon} width="24px" height="24px"></MenuSvg>
            {this.props.title}
        </a>
      )
    }
    return (
      <a href={this.props.link} className="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150">
        <MenuSvg src={this.props.icon} width="24px" height="24px"></MenuSvg>
          {this.props.title}
        </a>
    );
  }
}

function MenuSvg(props) {
  try {
    if(props.src == "custom") {
      return (<svg className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-   1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"/></svg>)
    }else if (props.src == "home") {
      return (<svg className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"/>
    </svg>)
    }
  } catch (e){
    console.log(e)
  }
  return <></>
}