import React from 'react'

const TechBanner = () => {
  return (
    <section className="mt-5 bg-gray-200 py-20 text-center dark:bg-gray-900 shadow-xl rounded-2xl overflow-hidden">
          <div className="mx-16">
            <h1 className="text-4xl py-2 text-slate-500 font-medium dark:text-white md:text-6xl text-center">
              Technical Skills
            </h1>
          </div>
          <div className="slider">
            <div className="slide">
              <Image src={css} alt="css" layout="responsive" priority={true} />
            </div>
            <div className="slide">
              <Image src={html} alt="css" layout="responsive" priority={true} />
            </div>
            <div className="slide">
              <Image src={psql} alt="css" layout="responsive" priority={true} />
            </div>
            <div className="slide">
              <Image
                src={darkMode ? expressLight : express}
                alt="css"
                layout="responsive"
                priority={true}
              />
            </div>
            <div className="slide">
              <Image
                src={react}
                alt="css"
                layout="responsive"
                priority={true}
              />
            </div>
            <div className="slide">
              <Image
                src={javascript}
                alt="css"
                layout="responsive"
                priority={true}
              />
            </div>
            <div className="slide">
              <Image
                src={node}
                alt="node"
                layout="responsive"
                priority={true}
              />
            </div>
            <div className="slide">
              <Image
                src={tailwindcss}
                alt="css"
                layout="responsive"
                priority={true}
              />
            </div>
            <div className="slide">
              <Image
                src={graphql}
                alt="css"
                layout="responsive"
                priority={true}
              />
            </div>
            <div className="slide">
              <Image
                src={mongo}
                alt="css"
                layout="responsive"
                priority={true}
              />
            </div>
            <div className="slide">
              <Image
                src={python}
                alt="css"
                layout="responsive"
                priority={true}
              />
            </div>
            <div className="slide">
              <Image
                src={matlab}
                alt="css"
                layout="responsive"
                priority={true}
              />
            </div>
          </div>
        </section>
  )
}

export default TechBanner