import React, { useState } from 'react'
import './projects.scss'

import Website from '../website/Website';

import dashboard from '../../assets/img/dashboard.png'

const Projects = () => {
  return (
    <div className='projects main'>
      <div className='projects__sidebar'>
        <div className='projects__sidebar__item stack_symfony'>Symfony</div>
        <div className='projects__sidebar__item stack_react'>React</div>
        <div className='projects__sidebar__item stack_prestashop'>Prestashop</div>
        <div className='projects__sidebar__item stack_website'>Sites</div>
      </div>

      <div className='projects__summary'>
        <div className='projects__summary__project'>
          <div className='projects__summary__project__snapshot'>
            <img src={dashboard} alt='placeholder' />
          </div>
          <div className='projects__summary__project__title'>Gestion de stock</div>
          <div className='projects__summary__project__stack'>
            <span className='projects__summary__project__item'>React JS</span>
            <span className='projects__summary__project__item'>Symfony</span>
            <span className='projects__summary__project__item'>Api Platform</span>
            <span className='projects__summary__project__item'>Github</span>
          </div>
        </div>

        <div className='projects__summary__project'>
          <div className='projects__summary__project__snapshot'>
            <img src={dashboard} alt='placeholder' />
          </div>
          <div className='projects__summary__project__title'>Tableau de bord</div>
          <div className='projects__summary__project__stack'>
            <span className='projects__summary__project__item'>React JS</span>
            <span className='projects__summary__project__item'>Symfony</span>
            <span className='projects__summary__project__item'>Api Platform</span>
            <span className='projects__summary__project__item'>Github</span>
          </div>
        </div>

        <div className='projects__summary__project'>
          <div className='projects__summary__project__snapshot'>
            <img src={dashboard} alt='placeholder' />
          </div>
          <div className='projects__summary__project__title'>Drive</div>
          <div className='projects__summary__project__stack'>
            <span className='projects__summary__project__item'>React JS</span>
            <span className='projects__summary__project__item'>Symfony</span>
            <span className='projects__summary__project__item'>Api Platform</span>
            <span className='projects__summary__project__item'>Github</span>
          </div>
        </div>
        <div className='projects__summary__project'>
          <div className='projects__summary__project__snapshot'>
            <img src={dashboard} alt='placeholder' />
          </div>
          <div className='projects__summary__project__title'>Drive</div>
          <div className='projects__summary__project__stack'>
            <span className='projects__summary__project__item'>React JS</span>
            <span className='projects__summary__project__item'>Symfony</span>
            <span className='projects__summary__project__item'>Api Platform</span>
            <span className='projects__summary__project__item'>Github</span>
          </div>
        </div>
        <div className='projects__summary__project'>
          <div className='projects__summary__project__snapshot'>
            <img src={dashboard} alt='placeholder' />
          </div>
          <div className='projects__summary__project__title'>Drive</div>
          <div className='projects__summary__project__stack'>
            <span className='projects__summary__project__item'>React JS</span>
            <span className='projects__summary__project__item'>Symfony</span>
            <span className='projects__summary__project__item'>Api Platform</span>
            <span className='projects__summary__project__item'>Github</span>
          </div>
        </div>
        <div className='projects__summary__project'>
          <div className='projects__summary__project__snapshot'>
            <img src={dashboard} alt='placeholder' />
          </div>
          <div className='projects__summary__project__title'>Drive</div>
          <div className='projects__summary__project__stack'>
            <span className='projects__summary__project__item'>React JS</span>
            <span className='projects__summary__project__item'>Symfony</span>
            <span className='projects__summary__project__item'>Api Platform</span>
            <span className='projects__summary__project__item'>Github</span>
          </div>
        </div>
      </div>
      {/* <h2>PROJETS</h2> */}
      <div className='projects__content'>

        <section className='projects__content__section'>
          <div className='projects__content__section__project'>

          </div>
          <div className='projects__content__section__title'>Gestion de stock</div>
          <div className='projects__content__section__description'>
          </div>
        </section>

        <section className='projects__content__section' style={{ backgroundColor: 'blue' }}>
          <div className='projects__content__section__title'>Tableau de bord</div>
          <div className='projects__content__section__description'>
          </div>
        </section>

        <section className='projects__content__section' style={{ backgroundColor: 'violet' }}>
          <div className='projects__content__section__title'>Application interne</div>
          <div className='projects__content__section__description'>
          </div>
        </section>

        <section className='projects__content__section' style={{ backgroundColor: 'black' }}>
          <div className='projects__content__section__title'>Drive</div>
          <div className='projects__content__section__description'>
          </div>
        </section>

        <section className='projects__content__section' style={{ backgroundColor: 'green' }}>
          <div className='projects__content__section__title'>Gestion de stock</div>
          <div className='projects__content__section__description'>
          </div>
        </section>

        <section className='projects__content__section' style={{ backgroundColor: 'yellow' }}>
          <div className='projects__content__section__title'>Gestion de stock</div>
          <div className='projects__content__section__description'>
          </div>
        </section>

        <Website url='https://powade-tech.com/' title='powade' />
        <Website url='https://www.backpower.com/' title='backpower' />
        <Website url='https://www.velobatterie.fr/' title='velobatterie' />
        <Website url='https://www.batteries-prod.fr/' title='batteries prod' />

      </div>
    </div>
  )
}

export default Projects