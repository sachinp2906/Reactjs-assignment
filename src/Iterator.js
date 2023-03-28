import React from 'react'

function Iterator({arr}) {
  return (
    <div>
        {
            arr.map((ele)=>{
                return(
                    <h3>{ele}</h3>
                )
            })
        }
    </div>
  )
}

export default Iterator