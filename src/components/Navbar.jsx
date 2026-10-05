
import Warapper from './Warapper'
import { useNewsContext } from '../context/NewsContext'

const Navbar = () => {
    const { news, setNews, fetchNews } = useNewsContext()

    let timer;
    const searchNews = (e) => {
        const searchdata = e.target.value;
        if (!searchdata) return;
        clearTimeout(timer);
        timer = setTimeout(async () => {
            const data = await fetchNews(`everything?q=${searchdata}`);
            setNews(data.articles)
        }, 1000);
        console.log(news)
    }
    return (
        <Warapper>
            <div className="navbar bg-gray-300 shadow-sm  rounded-lg">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">
                        RealNews
                    </a>
                </div>
                <div className="flex gap-2">
                    <input onChange={searchNews}
                        type="text" placeholder="Search" className="input w-24 md:w-auto" />
                    <div className="dropdown dropdown-end  ">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://tse3.mm.bing.net/th/id/OIP.5Na6Fj15E0QZOTGUQHEoWQHaHa?r=0&pid=Api&P=0&h=180" />
                            </div>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Profile</a></li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Warapper>
    )
}

export default Navbar