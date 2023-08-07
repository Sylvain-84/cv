import React from 'react'
import './cv.scss'
import profile from '../../assets/img/profile.png'
import { AiOutlineLink } from 'react-icons/ai'
import { BiCalendar } from 'react-icons/bi'
import { IoLocationSharp } from 'react-icons/io5'
import { BsFillHouseFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { FaPhoneSquareAlt } from 'react-icons/fa'
import { FaRegAddressCard } from 'react-icons/fa'

import Pdf from '../../assets/pdf/cv.pdf'
const Cv = () => {
  return (
    <div className='cv main'>
      <div className='cv__pdf'>
        <a href={Pdf} target='_blank' rel='noreferrer'>Télécharger le CV</a>
      </div>
      <div className='cv__container'>
        <div className='cv__container__header'>
          <div className='cv__container__title'>
            <span>Sylvain Rivière</span>
            <span>Développeur Web Full Stack</span>
            <span>Symfony / React JS</span>
          </div>
          <div className='cv__container__catchphrase'>
            <div className='cv__container__catchphrase_square'></div>
            <span>Développeur passionné et expérimenté, spécialisé en Symfony et React JS.</span>
            <span>En quête de nouveaux défis à relever au sein d'une équipe dynamique et innovante.</span>
          </div>
        </div>
        <div className='cv__container__content'>
          <div className='cv__container__content__left'>
            {/* placeholder */}
            <img src={profile} alt='placeholder' width={150} />

            <div className='cv__container__content__left__infos'>
              <div>
                <AiOutlineLink />
                <a href='https://sylvainriviereweb.com' target='_blank' rel='noreferrer'>sylvainriviereweb.com</a>
              </div>
              <div>
                <BiCalendar />
                <span>25 ans</span>
              </div>
              <div>
                <IoLocationSharp />
                <span>Aix-en-Provence</span>
              </div>
              <div>
                <BsFillHouseFill />
                <span>Domicilié à Avignon</span>
              </div>
              <div>
                <GrMail />
                <a href='mailto:sylvainriviereweb@gmail.com'>sylvainriviereweb@gmail.com</a>
              </div>
              <div>
                <FaPhoneSquareAlt />
                <a href='tel:+33674760892'>06 74 76 08 92</a>
              </div>
              <div>
                <FaRegAddressCard />
                <span>Permis B</span>
              </div>
            </div>

            <div className='cv__container__content__left__stack'>
              <div className='cv__container__content__subtitle'>
                <div className='cv__container__content__subtitle_square'></div>
                <div className='cv__container__content__subtitle_text'>Stack</div>
              </div>
              <div className='cv__container__content__list'>
                <span>Symfony 5 & 6</span>
                <span>React JS 18</span>
                <span>Api Platform</span>
                <span>SQL</span>
                <span>Github</span>
                <span>Prestashop 1.6 - 8</span>
              </div>
            </div>
            <div className='cv__container__content__left__lang'>
              <div className='cv__container__content__subtitle'>
                <div className='cv__container__content__subtitle_square'></div>
                <div className='cv__container__content__subtitle_text'>Langues</div>
              </div>
              <div className='cv__container__content__list'>
                <span>Anglais</span>
                <li className='cv__container__content__sublist'>
                  Compréhension C1
                </li>
                <li className='cv__container__content__sublist'>
                  Expression B2
                </li>
              </div>
            </div>
            <div className='cv__container__content__left__skills'>
              <div className='cv__container__content__subtitle'>
                <div className='cv__container__content__subtitle_square'></div>
                <div className='cv__container__content__subtitle_text'>Atouts</div>
              </div>
              <div className='cv__container__content__list'>
                <span>Autonome</span>
                <span>Curieux</span>
                <span>Adaptable</span>
                <span>Persévérant</span>
                <span>Empathique</span>
              </div>
            </div>
            <div className='cv__container__content__left__hobbies'>
              <div className='cv__container__content__subtitle'>
                <div className='cv__container__content__subtitle_square'></div>
                <div className='cv__container__content__subtitle_text'>Centres d'intérêts</div>
              </div>
              <div className='cv__container__content__list'>
                <span>Lecture</span>
                <span>Nouvelles technologies</span>
                <span>Sport</span>
                <span>Reportages</span>
              </div>
            </div>
          </div>
          <div className='cv__container__content__right'>
            <div className='cv__container__content__right_career'>
              <div className='cv__container__content__subtitle'>
                <div className='cv__container__content__subtitle_square'></div>
                <div className='cv__container__content__subtitle_text'>Expériences professionnelles</div>
              </div>
              <div className='cv__container__content__right__blocks'>
                <div className='cv__container__content__right__block'>
                  <div className='black_dot'></div>
                  <div className='cv__container__content__right__block__title'>
                    Développeur & Responsable Web
                  </div>
                  <div className='cv__container__content__right__block__infos'>
                    Depuis avril 2022 Batteries Prod Monteux (84)
                  </div>
                  <ul className='cv__container__content__right__block__list'>
                    <li>Responsable de la gestion de projets et de l'équipe de développement, tout en conservant mes missions précédentes</li>
                  </ul>
                </div>
                <div className='cv__container__content__right__block'>
                  <div className='black_dot'></div>
                  <div className='cv__container__content__right__block__title'>
                    Développeur Web
                  </div>
                  <div className='cv__container__content__right__block__infos'>
                    De juin 2020 à avril 2022 Batteries Prod Monteux (84)
                  </div>
                  <ul className='cv__container__content__right__block__list'>
                    <li>Développement et maintenance des applications internes en <span className='bold'>Symfony, React JS, Api Platform</span></li>
                    <li>Migration des modules Prestashop sur une nouvelle application en <span className='bold'>Symfony</span></li>
                    <li>Développement de modules <span className='bold'>Prestashop 1.6 & 1.7</span></li>
                    <li>Développement, intégration, maintenance et référencement des sites e-commerces</li>
                  </ul>
                </div>
              </div>
            </div>


            <div className='cv__container__content__right_project'>
              <div className='cv__container__content__subtitle'>
                <div className='cv__container__content__subtitle_square'></div>
                <div className='cv__container__content__subtitle_text'>Projets</div>
              </div>
              <div className='cv__container__content__right__blocks'>
                <div className='cv__container__content__right__block'>
                  <div className='cv__container__content__right__block__title'>
                    Application : Gestion de stock
                  </div>
                  <ul className='cv__container__content__right__block__list'>
                    <li>Développement et gestion du projet d'une application de gestion de stock en <span className='bold'>React JS, Symfony 6 & Api Platform</span></li>
                  </ul>
                </div>
                <div className='cv__container__content__right__block'>
                  <div className='cv__container__content__right__block__title'>
                    Application : Tableau de bord des indicateurs
                  </div>
                  <ul className='cv__container__content__right__block__list'>
                    <li>Développement et gestion du projet d'une application tableau de bord en <span className='bold'>React JS, Symfony 6 & Api Platform</span></li>
                  </ul>
                </div>
                <div className='cv__container__content__right__block'>
                  <div className='cv__container__content__right__block__title'>
                    Application interne
                  </div>
                  <ul className='cv__container__content__right__block__list'>
                    <li>Développement d'une application interne contenant tous les outils informatiques de l'entreprise en <span className='bold'>Symfony 5 & Api Platform</span> <br />(Outils de productions, logistique, administration, stock, communication, QSE, RH)</li>
                  </ul>
                </div>
                <div className='cv__container__content__right__block'>
                  <div className='cv__container__content__right__block__title'>
                    Modules Prestashop
                  </div>
                  <ul className='cv__container__content__right__block__list'>
                    <li>Développement de modules Prestashop pour les sites e-commerce en <span className='bold'>Prestashop 1.6 - 1.7, Symfony</span></li>
                  </ul>
                </div>
                <div className='cv__container__content__right__block'>
                  <div className='cv__container__content__right__block__title'>
                    Sites e-commerce
                  </div>
                  <ul className='cv__container__content__right__block__list'>
                    <li>Développement et intégration de 3 sites e-commerces :</li>
                    <li className='cv__container__content__right__block__list__link'>
                      <a href='https://www.powade-tech.com' target='_blank' rel='noreferrer'>powade-tech.com</a>
                      <a href='https://www.backpower.com' target='_blank' rel='noreferrer'>backpower.com</a>
                      <a href='https://www.velobatterie.fr' target='_blank' rel='noreferrer'>velobatterie.fr</a></li>
                  </ul>
                </div>
              </div>
            </div>


            <div className='cv__container__content__right_qualification'>
              <div className='cv__container__content__subtitle'>
                <div className='cv__container__content__subtitle_square'></div>
                <div className='cv__container__content__subtitle_text'>Diplômes et Formations</div>
              </div>
              <div className='cv__container__content__right__blocks'>
                <div className='cv__container__content__right__block'>
                  <div className='black_dot'></div>
                  <div className='cv__container__content__right__block__title'>
                    Développeur Web & Web Mobile (Bac +2)
                  </div>
                  <div className='cv__container__content__right__block__infos'>
                    De mai 2019 à février 2020 Simplon  Avignon (84)
                  </div>
                </div>
                <div className='cv__container__content__right__block'>
                  <div className='black_dot'></div>
                  <div className='cv__container__content__right__block__title'>
                    Service Civique
                  </div>
                  <div className='cv__container__content__right__block__infos'>
                    De septembre 2017 à avril 2018  Germina Barcelone
                  </div>
                </div>
                <div className='cv__container__content__right__block'>
                  <div className='black_dot'></div>
                  <div className='cv__container__content__right__block__title'>
                    Baccalauréat SIN - Système d'Information et Numérique
                  </div>
                  <div className='cv__container__content__right__block__infos'>
                    De septembre 2012 à juillet 2015  Lycée Alphonse Benoit L'Isle-sur-la-Sorgue (84)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cv