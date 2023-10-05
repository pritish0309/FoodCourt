import React from 'react'

const Panel = () => {
  return (
    <div className='panel' 
    style = {{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'justify',
        justifyContent: 'center'
    }}
    >
        <div className="container">
            <div className="panel-details">
                <h6>Title</h6>
                <p className="panel-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facilis consequatur totam eius excepturi id incidunt iure, hic accusantium officia natus dolore, tempore distinctio quidem fugiat animi. Laboriosam, alias ullam!
                </p>
            </div>
        </div>
    </div>
  )
}

export default Panel
