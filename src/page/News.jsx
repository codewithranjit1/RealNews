import { useEffect } from 'react'
import Warapper from '../components/Warapper'
import { useNewsContext } from '../context/NewsContext'
import Loader from '../components/Loader';


const News = () => {
  const { news, setNews, fetchNews, loading } = useNewsContext();

  useEffect(() => {
    (async () => {
      const data = await fetchNews()
      setNews(data.articles);
    })()
  }, [])

  if (loading) return <Loader />

  return (
    <Warapper>
      <div className='grid grid-cols-5 gap-6 m-auto'>
        {news.map((items, index) => {
          if (!items.urlToImage) return null;
          return (
            <div key={index}>
              <NewsCart titles={items} />
            </div>
          )
        })}

      </div>

    </Warapper>
  )
}

const NewsCart = ({ titles }) => {
  return (
    <div className="card bg-base-100 shadow-sm ">
      <figure>
        <img
          className='w-full aspect-video object-contain'
          src={titles.urlToImage}
          alt="Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-2">{titles.title}</h2>
        <p className='line-clamp-3'>{titles.description}</p>
        <div className="card-actions justify-end mt-4">
          <button onClick={() => window.open(titles.url)} className="btn badge-outline">Read More</button>
        </div>
      </div>
    </div>
  )
}

export default News