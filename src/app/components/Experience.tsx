import React from 'react'

const Experience = () => {
    return (
        <div>
            <section className="max-w-4xl mx-auto mb-20 px-4 font-ovo">
                <h1 className='text-center mb-2 text-lg font-ovo'>Career Highlights</h1>
                <h2 className='text-center text-5xl font-ovo'>Experience</h2>

                <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                    From professional employment to freelance work, my journey in tech has been shaped by diverse
                    projects and meaningful collaborations. Here&rsquo;s a look at the experience that defines my growth.
                </p>
                {/* Freelance Experience */}
                <div className='flex justify-between flex-col sm:flex-row'>
                    <h2 className="text-2xl font-semibold mb-2">Full Stack Web Developer Intern | Arkatama Multi Solusindo</h2>
                    <p className="text-sm text-gray-600 mb-1">Malang — February to July 2023</p>
                </div>
                <ul className="list-disc list-inside text-gray-800 space-y-2">
                    <li>Developed a fully functional e-commerce web application for a local retail client using <strong>Laravel</strong> and <strong>MySQL</strong>, including user authentication, product management, order tracking, and payment simulation features.</li>
                    <li>Built and optimized multiple responsive landing pages and internal tools using <strong>CodeIgniter</strong>, focusing on mobile-first design and cross-browser compatibility.</li>
                    <li>Integrated backend APIs and handled CRUD operations for various modules, improving system efficiency and reducing loading times by optimizing SQL queries and implementing caching strategies.</li>
                    <li>Collaborated in an Agile development environment, participated in regular stand-up meetings, and contributed to version control using Git and GitHub.</li>
                    <li>Conducted testing and debugging across various devices and browsers to ensure seamless user experience and functionality.</li>
                </ul>
            </section>
        </div>
    )
}

export default Experience
