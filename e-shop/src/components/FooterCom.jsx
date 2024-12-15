import { SiFacebook , SiInstagram , SiTelegram} from "react-icons/si";
import logo from "../assets/logo.png"
const FooterCom=()=>{
    return(
        <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
            <div className="mx-auto max-w-screen-xl">
                <div className="md:flex md:justify-between">
                    <div className="flex flex-col mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <img src={logo} className="h-16 w-16" alt="" />
                        </a>
                        {/* <p className="text-sm w-1/3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum eos esse, voluptate dolorum repellat blanditiis. Explicabo delectus quidem reprehenderit cumque natus odit placeat perspiciatis harum, eos rem necessitatibus corporis aut.</p> */}
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="https://flowbite.com" className="hover:underline">Flowbite</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://flowbite.com" className="hover:underline">Flowbite</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://flowbite.com" className="hover:underline">Flowbite</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="https://github.com/" className="hover:underline ">Github</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://github.com/" className="hover:underline ">Github</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://github.com/" className="hover:underline ">Github</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://github.com/" className="hover:underline ">Github</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 
                        <a href="/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <a href="https://www.facebook.com/korm.taiyi.5" target="blank" className="text-2xl text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <SiFacebook />
                        </a>
                        <a href="#" target="blank" className="text-2xl text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <SiInstagram />
                        </a>
                        <a href="" target="blank" className="text-2xl text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <SiTelegram />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default FooterCom;