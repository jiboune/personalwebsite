import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';


// Import Swiper React components
import { Swiper, SwiperSlide, Mousewheel } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/free-mode';


export default function Home() {

    const [open, setOpen] = useState(false);

    const params = {
        spaceBetween: 0,
        slidesPerView: 1,
        freeMode: true,
        mousewheel: true,
        mousewheelControl: true,
        breakpoints: {
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 1.75,
                spaceBetween: 40
            }
        }
    };


    return (
        <div >
            <Head>
                <title>JBM - Développeur web freelance </title>
                <meta name="description" content="Jean-Baptiste Matte, Développeur web freelance sur Aix-Marseille" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;400&family=PT+Serif:ital@0;1&family=Work+Sans:ital,wght@0,300;0,400;0,600;0,800;1,300&display=swap" rel="stylesheet" />


                <meta name="twitter:card" content="summary_large_image" />

                <meta property="og:site_name" content="Jean-Baptiste Matte - Développer web full-stack" />
                <meta property="og:title" content="Jean-Baptiste Matte - Développer web full-stack" />
                <meta property="description" content="Développeur web freelance et créateur de site internet depuis 2014. Développement web, création ou refonte de site internet, e-commerce, référencement" />
                <meta property="og:image" itemProp="image" content="https://www.jeanbaptistematte.com/preview.jpg" />
                <meta property="og:type" content="website" />
                <meta property="og:updated_time" content="1643278539" />
                <meta property="og:locale:alternate" content="fr_FR" />



            </Head>

            <main className="h-full ">

                <div className="h-screen overflow-hidden">

                    <div id="sidebar" className="bg-med-blue absolute h-full w-12 bg-med-blue z-30 fixed border-r border-deep-blue box-content">
                        <div className="text-white rotate-[180deg] mx-auto mt-6 sideText text-lg font-work tracking-wider"><h2>Jean-Baptiste Matte</h2></div>
                        <div className="absolute top-1/2 translate-y-[-50%] ml-1">
                            <nav>
                                <button
                                    className=" w-10 h-10 text-gray-500 rounded-sm focus:outline-none"
                                    onClick={() => setOpen(!open)}>
                                    <div className="absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                                        <span
                                            aria-hidden="true"
                                            className={`block absolute h-0.5 w-5 bg-indigo-600  transform transition duration-500 ease-in-out ${open ? "rotate-45" : "-translate-y-1.5"}`}></span>
                                        <span
                                            aria-hidden="true"
                                            className={`block absolute  h-0.5 w-5 bg-indigo-600 transform transition duration-500 ease-in-out ${open && "opacity-0"}`}></span>
                                        <span
                                            aria-hidden="true"
                                            className={`block absolute  h-0.5 w-5 bg-indigo-600  transform  transition duration-500 ease-in-out ${open ? "-rotate-45" : "translate-y-1.5"}`}></span>
                                    </div>
                                </button>
                            </nav>

                        </div>
                    </div>


                    <div id="menu-content" className={`h-full p-8 pl-20 absolute bg-med-blue z-20 ease-out transition-all overflow-hidden duration-700 ${open ? 'w-[80%] sm:w-full' : 'w-0 p-0 pl-0'}`}>

                        <div className={`flex flex-col min-h-full justify-between opacity-0 ${open ? ' transition-opacity opacity-100 duration-700 delay-700' : ''}`}>

                            <div><a href="https://www.linkedin.com/in/jeanbaptiste-matte/" target="_blank"  rel="noreferrer" className="text-white tracking-wider text-indigo-600">Linkedin</a></div>
                            <div>
                                <div className="text-white text-xl sm:text-2xl font-work">Vous souhaitez <strong className="font-normal">renforcer votre présence digitale</strong> ou <strong className="font-normal">lancer votre activité en ligne</strong> ?</div>
                                <div className="text-white text-xl sm:text-2xl font-work mt-8">Vous recherchez une solution clée en main ?</div>
                                <div className="text-white text-xl sm:text-2xl font-work mt-8">Vous cherchez un <strong className="font-normal">développeur web</strong>/full stack pour un client ?</div>
                                <div className="text-white text-xl sm:text-2xl font-work mt-8 font-semibold underline underline-offset-4">Vous êtes au bon endroit.</div>
                            </div>
                            <div>
                                <div className="rounded-md mb-3">
                                    <a
                                        href="https://calendly.com/jeanbaptiste-matte/creation-site-internet" target="_blank" rel="noreferrer"
                                        className="w-full md:w-fit text-xs flex items-center justify-center px-2 sm:px-8 py-2 sm:py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-2 md:text-lg md:px-10 font-work"
                                    >
                                        Prendre rendez-vous 15min
                                    </a>
                                </div>
                                <p className="text-med-gray text-xs">2022 Jean-Baptiste Matte, Tout droits réservés.</p>
                                <p className="text-med-gray text-xs">Made with ♡ à Marseille</p>
                            </div>
                        </div>
                    </div>


                    <div id="site-content" className={`h-full ttransition-all	duration-700 relative z-10 ${open ? 'translate-x-full' : ''}`}>
                        <Swiper
                            {...params}
                            className="h-full relative z-10"
                        >
                            <SwiperSlide className="bg-deep-blue min-h-full relative">

                                <div className="p-8 pl-20 flex flex-col min-h-full justify-between">

                                    <div className="absolute inset-y-1/2 right-0" >
                                        <span className="text-white font-xs relative right-3 tracking-wider font-work">Swipe</span>
                                        <hr className="mt-3 w-13 bg-indigo-600 border-indigo-600"></hr>
                                    </div>

                                    <div>
                                        <Image src="/pp.jpg" alt="Jean-Baptiste matte" width={70} height={70} className="rounded-full" />
                                        <div className="mt-2">
                                            <h2 className="text-white text-xs  font-work">Création de site internet</h2>
                                            <h2 className="text-white text-xs  font-work">Création de site e-commerce</h2>
                                            <h2 className="text-white text-xs  font-work">Création d&apos;pplication mobile</h2>
                                        </div>
                                    </div>

                                    <div>
                                        <h1 className="text-white text-3xl font-work mr-10 max-w-[390px]">Développeur web Freelance sur Aix-Marseille</h1>
                                    </div>

                                    <div>
                                        <p className="text-white text-sm mb-4  font-work">Conception de solutions digitales depuis 2014. De l&apos;idée à la mise en ligne, je vous accompagne de A à Z pour que <span className="font-semibold">votre projet soit un succès</span>.</p>
                                        <div className="rounded-md shadow">
                                            <a
                                                href="https://calendly.com/jeanbaptiste-matte/creation-site-internet" target="_blank" rel="noreferrer"
                                                className="w-full md:w-fit flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-2 md:text-lg md:px-10 font-work"
                                            >
                                                Prendre rendez-vous
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="bg-deep-blue min-h-screen">

                                <div className="p-8 pl-20 min-h-screen ">

                                    <div className="text-white text-5xl font-semibold  font-work">01</div>
                                    <h3 className="text-white uppercase mt-2 tracking-wider text-xs font-work">Domaine d&apos;expertise</h3>

                                    <section className="mt-6 sm:mt-20">
                                        <h4 className="text-white text-2xl font-semibold  font-work">Site web</h4>
                                        <p className="text-white text-sm font-work">CMS : Wordpress, Webflow</p>
                                        <p className="text-white text-sm font-work">Front : Angular, React, NextJS (AMP)</p>
                                        <p className="text-white text-sm font-work">Back : Nginx, NodeJS, PHP, NestJS</p>
                                        <p className="text-white text-sm font-work">DevOps : Git, Docker, Vercel</p>
                                    </section>

                                    <section className="mt-4">
                                        <h4 className="text-white text-2xl font-semibold font-work">Boutique en ligne</h4>
                                        <p className="text-white text-sm font-work ">Woocommerce, Prestashop, Shopify</p>
                                        <p className="text-white italic text-sm font-work">Installation, configuration, dev. modules</p>
                                    </section>

                                    <section className="mt-4">
                                        <h4 className="text-white text-2xl font-semibold font-work">Applications mobiles</h4>
                                        <p className="text-white text-sm font-work">Progressive Web Apps : Ionic</p>
                                        <p className="text-white text-sm font-work">Natives : iOS - Swift</p>
                                    </section>

                                    <section className="mt-4">
                                        <h4 className="text-white text-2xl font-semibold font-work">Design</h4>
                                        <p className="text-white text-sm font-work">Création d&apos;identité visuelle/branding, Refonte UX, Création UI (Figma, Sketch, Suite Adobe)</p>

                                    </section>

                                    <section className="mt-4">
                                        <h4 className="text-white text-2xl font-semibold font-work">Marketing</h4>
                                        <p className="text-white text-sm font-work">GA, GTM, Facebook Pixel, Conversion API (Server-Side), Growth Hacking (Instagram/Twitter)</p>
                                    </section>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="bg-deep-blue min-h-screen">

                                <div className="p-8 pl-20 min-h-screen ">

                                    <div className="text-white text-5xl font-bold">02</div>
                                    <h3 className="text-white uppercase mt-2 tracking-wider text-xs font-work">Clients</h3>

                                    <section className="">

                                        <div>
                                            <div className="w-full block align-middle text-center mt-12"><Image src="/logo/logo_enovap.svg" alt="enovap" width={130} height={30} className="w-full" /></div>
                                            <div className="w-full block align-middle text-center mt-12"><Image src="/logo/logo-hervet.png" alt="hervet manufacturier" width={140} height={30} /></div>
                                        </div>

                                        <div className="">
                                            <div className="w-full block align-middle text-center mt-12"><Image src="/logo/police-logo.png" alt="policestudio" width={155} height={19} /></div>
                                            <div className="w-full block align-middle text-center mt-12"><Image src="/logo/logo_us.svg" alt="union school" width={130} height={35} /></div>
                                        </div>

                                        <div className="">
                                            <div className="w-full block align-middle text-center mt-12"><Image src="/logo/logo_dlva.svg" alt="dlva" width={130} height={80} /></div>
                                            <div className="w-full block align-middle text-center mt-12"><Image src="/logo/logo_demeter.svg" alt="demeter" width={130} height={19} /></div>
                                        </div>

                                    </section>

                                </div>
                            </SwiperSlide>
                            {/* <SwiperSlide className="bg-deep-blue min-h-screen">
                                <div className="p-8 pl-20 min-h-screen ">

                                    <div className="text-white text-5xl font-bold">03</div>
                                    <h3 className="text-white uppercase mt-2 tracking-wider text-xs font-work">Témoignages</h3>

                                    <section className="mt-6">

                                        <div className="relative text-white font-work ml-2">
                                            <div className="absolute text-indigo-600 text-8xl -left-4 opacity-40 -top-6 z-10">"</div>
                                            <div className="relative z-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id posuere massa. Vivamus fringilla lorem enim, faucibus porta augue tempus ac.</div>
                                            <div className="text-sm mt-1"><span className="font-semibold">Arthur</span> - <span className="italic">Président groupe DEMETER</span></div>
                                        </div>

                                        <div className="relative text-white font-work ml-2 mt-10">
                                            <div className="absolute text-indigo-600 text-8xl -left-4 opacity-40 -top-6 z-10">"</div>
                                            <div className="relative z-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id posuere massa. Vivamus fringilla lorem enim, faucibus porta augue tempus ac. </div>
                                            <div className="text-sm mt-1"><span className="font-semibold">Arthur</span> - <span className="italic">Président groupe DEMETER</span></div>
                                        </div>

                                        <div className="relative text-white font-work ml-2 mt-8">
                                            <div className="absolute text-indigo-600 text-8xl -left-4 opacity-40 -top-6 z-10">"</div>
                                            <div className="relative z-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id posuere massa. Vivamus fringilla lorem enim, faucibus porta augue tempus ac.</div>
                                            <div className="text-sm mt-1"><span className="font-semibold">Arthur</span> - <span className="italic">Président groupe DEMETER</span></div>
                                        </div>

                                    </section>

                                </div>
                            </SwiperSlide> */}
                            <SwiperSlide className="bg-light-gray min-h-screen">
                                <div className="p-8 pl-20 flex flex-col h-full min-h-screen justify-between">

                                    <div className="text-deep-blue text-5xl font-bold">☀️</div>
                                    <div>
                                        <div className="text-deep-blue text-3xl mt-2">Quel est votre projet ? </div>
                                        <p className="text-med-gray mt-4">Vous vous demandez <strong>comment créer un site internet ?</strong> ou <strong>comment lancer sa boutique en ligne</strong> ? Choisissez un créneau et discutons en 15 minutes par téléphone ou visio.</p>
                                    </div>
                                    {/* <div>
                                        <p className="text-deep-blue">Mardi, Mercredi</p>
                                        <p className="text-deep-blue font-bold">Spaces Coworking</p>
                                        <p className="text-deep-blue">132 Bd Michelet</p>
                                        <p className="text-deep-blue">13008 Marseille</p>
                                    </div> */}



                                    <div>
                                        <div className="rounded-md mb-5">
                                            <a
                                                href="https://calendly.com/jeanbaptiste-matte/creation-site-internet" target="_blank" rel="noreferrer"
                                                className="w-full md:w-fit flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-2 md:text-lg md:px-10 font-work"
                                            >
                                                Prendre rendez-vous
                                            </a>
                                        </div>
                                        <p className="text-med-gray text-xs">2022 Jean-Baptiste Matte, Tout droits réservés.</p>
                                        <p className="text-med-gray text-xs">Made with ♡ à Marseille</p>
                                        {/* <p className="text-deep-blue mt-2 text-xs">Mention Légales</p> */}
                                    </div>

                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>


            </main>


        </div >
    )
}
