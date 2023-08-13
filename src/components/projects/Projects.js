import React, { useState } from 'react'
import './projects.scss'

import Website from '../website/Website';
import StackItem from '../stackItem/StackItem';

import dashboard from '../../assets/img/dashboard.png'
import powade from '../../assets/img/powade.png'
import backpower from '../../assets/img/backpower.png'
import velobatterie from '../../assets/img/velobatterie.png'
import provelobatterie from '../../assets/img/provelobatterie.png'
import placeholder from '../../assets/img/placeholder.jpg'

const Projects = () => {
  return (
    <div className="projects main">
      <div className="projects__sidebar">
        <div className="projects__sidebar__item stack_symfony">Symfony</div>
        <div className="projects__sidebar__item stack_react">React</div>
        <div className="projects__sidebar__item stack_prestashop">
          Prestashop
        </div>
        <div className="projects__sidebar__item stack_website">Sites</div>
      </div>

      <div className="projects__summary">
        <a className="projects__summary__project" href="#project-stock">
          <div className="projects__summary__project__snapshot">
            <img src={placeholder} alt="placeholder" />
          </div>
          <div className="projects__summary__project__title">
            Gestion de stock
          </div>
          <div className="projects__summary__project__stack">
            <StackItem title="React JS" />
            <StackItem title="Symfony" />
            <StackItem title="Api Platform" />
            <StackItem title="Github" />
          </div>
        </a>

        <a className="projects__summary__project" href="#project-dashboard">
          <div className="projects__summary__project__snapshot">
            <img src={dashboard} alt="placeholder" />
          </div>
          <div className="projects__summary__project__title">
            Tableau de bord
          </div>
          <div className="projects__summary__project__stack">
            <StackItem title="React JS" />
            <StackItem title="Symfony" />
            <StackItem title="Api Platform" />
            <StackItem title="Github" />
          </div>
        </a>

        <a className="projects__summary__project" href="#project-internalapp">
          <div className="projects__summary__project__snapshot">
            <img src={placeholder} alt="placeholder" />
          </div>
          <div className="projects__summary__project__title">
            Application interne
          </div>
          <div className="projects__summary__project__stack">
            <StackItem title="Symfony" />
            <StackItem title="Api Platform" />
            <StackItem title="React JS" />
            <StackItem title="Symfony UX" />
            <StackItem title="Github" />
          </div>
        </a>

        <a className="projects__summary__project" href="#project-drive">
          <div className="projects__summary__project__snapshot">
            <img src={placeholder} alt="placeholder" />
          </div>
          <div className="projects__summary__project__title">Drive</div>
          <div className="projects__summary__project__stack">
            <StackItem title="React JS" />
            <StackItem title="Symfony" />
            <StackItem title="Api Platform" />
            <StackItem title="Github" />
          </div>
        </a>

        <a className="projects__summary__project" href="#project-customerpro">
          <div className="projects__summary__project__snapshot">
            <img src={provelobatterie} alt="placeholder" />
          </div>
          <div className="projects__summary__project__title">
            Application clients professionnel
          </div>
          <div className="projects__summary__project__stack">
            <StackItem title="Prestashop 1.7" />
            <StackItem title="PHP" />
            <StackItem title="JavaScript" />
            <StackItem title="Github" />
          </div>
        </a>

        <a className="projects__summary__project" href="#project-powade">
          <div className="projects__summary__project__snapshot">
            <img src={powade} alt="placeholder" />
          </div>
          <div className="projects__summary__project__title">Powade</div>
          <div className="projects__summary__project__stack">
            <StackItem title="Prestashop 1.7" />
            <StackItem title="PHP" />
            <StackItem title="JavaScript" />
            <StackItem title="Github" />
          </div>
        </a>

        <a className="projects__summary__project" href="#project-backpower">
          <div className="projects__summary__project__snapshot">
            <img src={backpower} alt="placeholder" />
          </div>
          <div className="projects__summary__project__title">Backpower</div>
          <div className="projects__summary__project__stack">
            <StackItem title="Prestashop 1.7" />
            <StackItem title="PHP" />
            <StackItem title="JavaScript" />
            <StackItem title="Github" />
          </div>
        </a>

        <a className="projects__summary__project" href="#project-velobatterie">
          <div className="projects__summary__project__snapshot">
            <img src={velobatterie} alt="placeholder" />
          </div>
          <div className="projects__summary__project__title">Velobatterie</div>
          <div className="projects__summary__project__stack">
            <StackItem title="Prestashop 1.7" />
            <StackItem title="Prestashop 1.6" />
            <StackItem title="PHP" />
            <StackItem title="JavaScript" />
          </div>
        </a>

        <a className="projects__summary__project" href="#project-batteriesprod">
          <div className="projects__summary__project__snapshot">
            <img src={placeholder} alt="placeholder" />
          </div>
          <div className="projects__summary__project__title">
            Batteries Prod
          </div>
          <div className="projects__summary__project__stack">
            <StackItem title="Wordpress" />
          </div>
        </a>
      </div>
      {/* <h2>PROJETS</h2> */}
      <div className="projects__content">
        <section className="projects__content__section" id="project-stock">
          <div className="projects__content__section__project"></div>
          <div className="projects__content__section__title">
            Gestion de stock
          </div>
          <div className="projects__content__section__description"></div>
        </section>

        <section
          id="project-dashboard"
          className="projects__content__section"
          style={{ backgroundColor: "blue" }}
        >
          <div className="projects__content__section__title">
            Tableau de bord
          </div>
          <div className="projects__content__section__description"></div>
        </section>

        <section
          id="project-internalapp"
          className="projects__content__section"
          style={{ backgroundColor: "violet" }}
        >
          <div className="projects__content__section__title">
            Application interne
          </div>
          <div className="projects__content__section__description"></div>
        </section>

        <section
          id="project-drive"
          className="projects__content__section"
          style={{ backgroundColor: "black" }}
        >
          <div className="projects__content__section__title">Drive</div>
          <div className="projects__content__section__description"></div>
        </section>

        <section
          className="projects__content__section"
          style={{ backgroundColor: "green" }}
        >
          <div className="projects__content__section__title">
            Gestion de stock
          </div>
          <div className="projects__content__section__description"></div>
        </section>

        <section
          className="projects__content__section"
          style={{ backgroundColor: "yellow" }}
        >
          <div className="projects__content__section__title">
            Gestion de stock
          </div>
          <div className="projects__content__section__description"></div>
        </section>

        <Website
          url="https://powade-tech.com/"
          title="powade"
          id="project-powade"
        />
        <Website
          url="https://www.backpower.com/"
          title="backpower"
          id="project-backpower"
        />
        <Website
          url="https://www.velobatterie.fr/"
          title="velobatterie"
          id="project-velobatterie"
        />
        <Website
          url="https://www.batteries-prod.fr/"
          title="batteries prod"
          id="project-batteriesprod"
        />
      </div>
    </div>
  );
}

export default Projects