import { Component } from "react";
import Image from "next/image";

class Navbar extends Component {
    render() {
        return <>
            <header className="sticky top-0 z-50">
                <ul className="flex items-center flex-shrink-0 space-x-6 pl-2">
                    {/* <li className="relative">
                        <button id="switchTheme" className="h-10 w-10 flex justify-center items-center focus:outline-none text-yellow-500">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRrule="evenodd"></path></svg>
                        </button>
                    </li> */}
                    <li className="relative">
                        <Image className="object-cover w-8 h-8 rounded-full" src="https://avatars.githubusercontent.com/u/45714458?v=4" width="32px" height="32px" alt="" aria-hidden="true"/>
                    </li>
                </ul>
            </header>
        </>
    }
}

export default Navbar;