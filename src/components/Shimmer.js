

const Shimmer = ()=>
{
    const shims = Array.from({length:50})
    return (
        <div className="shimmer-container">
              {shims.map((__,index)=>
              {
                   return <div className="shimmer-card" key={index}></div>
              })}
        </div>
    )
}

export default Shimmer