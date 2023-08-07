import React from 'react'

const Website = ({url, title}) => {
    return (
        <section className='projects__content__section projects__content__section__website'>
            <iframe src={url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title={title} loading='lazy'
            ></iframe>
        </section>
    )
}

export default Website