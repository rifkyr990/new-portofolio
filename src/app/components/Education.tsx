import React from 'react';

const Education = () => {
    return (
        <div id="education" className="w-full max-w-screen-xl mx-auto py-10 scroll-mt-20">
            <h1 className="text-center mb-2 text-lg font-ovo">My Academic Journey</h1>
            <h2 className="text-center text-5xl font-ovo">Education</h2>
            <p className="text-center font-ovo max-w-2xl mx-auto mb-10 mt-5">
                A strong foundation in Information Systems and hands-on experience in full stack development.
            </p>

            <div className="space-y-10">
                {/* UAD */}
                <div className="border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    <h3 className="text-xl font-semibold text-gray-800">Universitas Ahmad Dahlan (UAD)</h3>
                    <p className="text-sm text-gray-600 mb-2">Yogyakarta — Bachelor’s Degree in Information Systems</p>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                        <li>Focused on software engineering, databases, and IT project management.</li>
                        <li>Developed several academic and real-world web applications as part of coursework.</li>
                        <li>Graduated with solid understanding of systems analysis, design, and data modeling.</li>
                    </ul>
                </div>

                {/* Purwadhika */}
                <div className="border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    <h3 className="text-xl font-semibold text-gray-800">Purwadhika Digital Technology School</h3>
                    <p className="text-sm text-gray-600 mb-2">Remote / Jakarta — Full Stack Web Developer Bootcamp</p>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                        <li>Completed intensive bootcamp covering front-end (HTML, CSS, JavaScript, React.js) and back-end (Node.js, Express, MySQL).</li>
                        <li>Built real-world projects including authentication systems, e-commerce sites, and RESTful APIs.</li>
                        <li>Learned version control, deployment, debugging, and Agile development workflows.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Education;
