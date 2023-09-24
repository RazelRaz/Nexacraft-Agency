async function getData(){
    let res = await fetch(process.env.BASE_URL+"api/AllProject")

    if(!res.ok){
        throw new Error("All Project Calling Failed")
    }
    return res.json();
}



const AllProject = async () => {


    const data = await getData()
    console.log(data);

    return (
        <section>
            <div className="skew skew-top mr-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 0 10 10 0 10" />
                </svg>
            </div>
            <div className="skew skew-top ml-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 10 10 0 10 10" />
                </svg>
            </div>
            <div className="py-20 bg-gray-50 radius-for-skewed">
                <div className="container px-4 mx-auto">
                    <div className="mb-16 flex flex-wrap justify-center md:justify-center items-center">
                        <div className="text-center lg:text-center">
                            <span className="text-green-600 font-bold">
                            Dolor sit amet consectutar
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                                All Projects
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4 mb-4">
                        {/* <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
                            <a href="#">
                                <img className="h-80 w-full mx-auto object-cover rounded" src="https://static.shuffle.dev/uploads/files/36/368971920a7783ddacbdc0de43a17896c8faed5f/hub-01-18-projectmanagement-Hero-1200x900-software-tips.jpg" alt=""/>
                            </a>
                        </div> */}

                        {
                            data.map((singleData, i) => {
                                return(
                                    <div key={i} className="relative mb-4 w-full md:w-1/2 lg:w-1/3 px-4">
                                        <div className="relative h-80 mb-5 mx-auto rounded-lg">
                                            <img className="h-80 w-full relative h-full rounded-lg object-cover" src={singleData['image']} alt=""/>
                                            <div className="absolute inset-0 bg-gray-900 opacity-75 rounded-lg" />
                                            <div className="absolute inset-0 p-6 flex flex-col items-start">
                                                <span className="text-gray-400">2021</span>
                                                <p className="mb-auto text-xl lg:text-2xl text-white font-bold">
                                                    {singleData['title']}
                                                </p>
                                                <a className="inline-block py-2 px-4 border-2 border-gray-400 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose" href="#">
                                                    View Project
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        



                        
                    </div>
                    <div className="text-center">
                        <a className="md:hidden inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200" href="#">
                            View More Projects
                        </a>
                    </div>
                </div>
            </div>
            <div className="skew skew-bottom mr-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 0 10 0 0 10" />
                </svg>
            </div>
            <div className="skew skew-bottom ml-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 0 10 0 10 10" />
                </svg>
            </div>
        </section>
    );
};

export default AllProject;