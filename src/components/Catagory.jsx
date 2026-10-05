import React from 'react'
import Warapper from './Warapper'
import { useNewsContext } from '../context/NewsContext'

const Catagory = () => {

    const { setNews, fetchNews } = useNewsContext();
    const catagories = ["business", "entertainment", "general", "health", "science", "sports", "technology"]

    const handleClick = async (e) => {
        const cat = e.target.value;
        const data = await fetchNews(`everything?q=${cat}`);
        setNews(data.articles)

    }

    return (
        <Warapper>
            <div className='flex  justify-center gap-2 my-3 overflow-x-auto scrollbar_none'>
                {catagories.map((items) => {
                    return (
                        <button onClick={handleClick} key={items} value={items} className="btn btn-active btn-primary">{items}</button>
                    )
                })}

            </div>
        </Warapper>
    )
}

export default Catagory