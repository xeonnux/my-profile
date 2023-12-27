const index = (props) => {
  const { key, title, description, image, date, author} = props
  return (
    <div className="w-[300px] text-gray-600 shadow-md dark:bg-white bg-slate-400 rounded-2xl h-[275px] dark:text-gray-700 p-3" key={key} style={{
      background: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <h4 className="text-xl">{title}</h4>
      <p>{description}</p>
      <p>{date}</p>
    </div>
  )
}

export default index