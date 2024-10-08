

let Blog = () => {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-black ">
            {/* Title */}
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-white">Moonred Insights</h2>
                <p className="mt-1 text-gray-400">Explore the latest trends and insights in AI chatbots and conversational technology.</p>
            </div>
            {/* End Title */}

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card */}
                <a className="group flex flex-col focus:outline-none" href="#">
                    <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                        <img
                            className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                            src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                            alt="AI Chatbot Insights"
                        />
                        <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3">
                            Featured
                        </span>
                    </div>

                    <div className="mt-7">
                        <h3 className="text-xl font-semibold text-gray-300 group-hover:text-white">
                            Enhancing Chatbot Interactions
                        </h3>
                        <p className="mt-3 text-gray-400">
                            Discover how Moonred's advanced features are transforming user interactions with AI chatbots.
                        </p>
                        <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-500 decoration-2 group-hover:underline group-focus:underline font-medium">
                            Read more
                            <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </p>
                    </div>
                </a>
                {/* End Card */}

                {/* Card */}
                <a className="group flex flex-col focus:outline-none" href="#">
                    <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                        <img
                            className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                            src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                            alt="Chatbot Development"
                        />
                    </div>

                    <div className="mt-7">
                        <h3 className="text-xl font-semibold text-gray-300 group-hover:text-white">
                            Future of AI Conversations
                        </h3>
                        <p className="mt-3 text-gray-400">
                            Insights into the evolving landscape of AI chatbots and their impact on communication.
                        </p>
                        <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-500 decoration-2 group-hover:underline group-focus:underline font-medium">
                            Read more
                            <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </p>
                    </div>
                </a>
                {/* End Card */}

                {/* Card */}
                <a
                    className="group relative flex flex-col w-full min-h-60 bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80')] bg-center bg-cover rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg transition"
                    href="#"
                >
                    <div className="flex-auto p-4 md:p-6">
                        <h3 className="text-xl text-white/90 group-hover:text-white">
                            Moonred's Latest Developments
                        </h3>
                    </div>
                    <div className="pt-0 p-4 md:p-6">
                        <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70 group-focus:text-white/70">
                            Visit the blog
                            <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </div>
                    </div>
                </a>
                {/* End Card */}
            </div>
            {/* End Grid */}
        </div>
    );
}

export default Blog;
