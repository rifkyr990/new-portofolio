import React from 'react'

const Experience = () => {
    return (
        <div>
            <section className="max-w-4xl mx-auto mb-20 px-4 font-ovo">
                <h4 className='text-center mb-2 text-lg font-ovo'>Career Highlights</h4>
                <h2 className='text-center text-5xl font-ovo'>Experience</h2>

                <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                    From professional employment to freelance work, my journey in tech has been shaped by diverse
                    projects and meaningful collaborations. Here&rsquo;s a look at the experience that defines my growth.
                </p>

                {/* Full-time Relevant Experience */}
                <div className="mb-12">
                    <div className='flex justify-between'>
                        <h4 className="text-2xl font-semibold mb-2">Freelance Project</h4>
                        <p className="text-sm text-gray-600 mb-1">Yogyakarta — August 2023 to Present</p>
                    </div>
                    <p className="text-gray-800 mb-2">
                        In addition to my full-time role, I have successfully completed various freelance projects
                        involving web development, UI/UX design, and custom software solutions tailored to client needs.
                    </p>
                    <ul className="list-disc list-inside text-gray-800">
                        <li>Developed and maintained scalable web applications using React and Node.js or Laravel.</li>
                        <li>Collaborated with cross-functional teams to deliver high-quality software solutions.</li>
                        <li>Implemented CI/CD pipelines to improve deployment efficiency by 30%.</li>
                    </ul>
                </div>

                {/* Freelance Experience */}
                <div>
                    <div className='flex justify-between'>
                        <h4 className="text-2xl font-semibold mb-2">Software Engineer | Arkatama Multi Solusino</h4>
                        <p className="text-sm text-gray-600 mb-1">Malang — February to July 2023</p>
                    </div>
                    <ul className="list-disc list-inside text-gray-800">
                        <li>Developed an e-commerce platform for a local retailer using Next.js and Stripe API
                            integration.</li>
                        <li>Created responsive landing pages and marketing sites for startups.</li>
                        <li>Provided ongoing maintenance and feature enhancements for small business clients.</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Experience
