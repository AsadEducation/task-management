import React from 'react';

const FAQ = () => {
    return (
        <section className="dark:bg-slate-500 rounded-lg dark:text-white">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl text-center">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 text-center dark:text-white">
                    Explore answers to the most common questions about our Community Food Sharing and Surplus Reduction Platform.
                </p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            What is the purpose of this platform?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-white">
                            Our platform connects individuals, businesses, and organizations to share surplus food, reducing waste and helping those in need.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            How does the food sharing process work?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-white">
                            Users can list surplus food items they wish to donate. Others can browse and request items, ensuring proper handling and safe distribution.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            Is there a cost to participate in food sharing?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-white">
                            No, our platform is completely free to use. It's designed to help reduce food waste and provide assistance to those in need.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            How do you ensure food safety during sharing?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-white">
                            We encourage users to follow proper food safety guidelines when donating and receiving food, ensuring quality and safety for all participants.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                            Can businesses or organizations participate in food sharing?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-white">
                            Yes, businesses and organizations are encouraged to donate surplus food through our platform to support the community and reduce waste.
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQ;