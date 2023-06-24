
import plusIcon from "./assets/plus-frame-svgrepo-com.svg";
import "./App.css";




const App = () => {
    return (
        <div id="Document" className="w-4/5 m-auto mt-8 bg-slate-100 grid grid-cols-12 h-full auto-rows-min rounded-xl shadow-2xl">
            <h1 className="col-span-full justify-center font-bold text-8xl h-24 text-center m-8">Andrew Cichewicz</h1>
            <div id="contact-info" className="col-start-4 col-end-10 flex justify-center">
                <p className="text-center font-semibold text-lg">AndrewPaulCichewicz@gmail.com | (610) 955-5425 | Lansdowne, Pa 19050 | https://github.com/APCichewicz</p>    
            </div>

            <div id="projects"className="row-start-3 col-span-full bg-blue-400 h-16 my-4 rounded-2xl mx-4 shadow-lg">
                    <div className="flex justify-between">
                        <h2 className="text-4xl font-semibold text-start mx-6 mt-3">Projects</h2>
                        <div className="mx-6 h-16 w-16 items-center justify-center flex">
                            <img className="h-12 w-12" src={plusIcon} alt="" />
                        </div>
                    </div>
            </div>
            <div id="certifications" className="row-start-4 col-span-full bg-blue-400 h-16 my-4 rounded-2xl mx-4 shadow-lg">
                    <div className="flex justify-between">
                        <h2 className="text-4xl font-semibold text-start mx-6 mt-3">Certifications</h2>
                        <div className="mx-6 h-16 w-16 items-center justify-center flex">
                            <img className="h-12 w-12" src={plusIcon} alt="" />
                        </div>
                    </div>
            </div>
            <div id="workexperience" className="row-start-5 col-span-full bg-blue-400 h-16 my-4 rounded-2xl mx-4 shadow-lg">
                    <div className="flex justify-between">
                        <h2 className="text-4xl font-semibold text-start mx-6 mt-3">Work Experience</h2>
                        <div className="mx-6 h-16 w-16 items-center justify-center flex">
                            <img className="h-12 w-12" src={plusIcon} alt="" />
                        </div>
                    </div>
            </div>
            <div id="skills" className="row-start-6 col-span-full bg-blue-400 h-16 my-4 rounded-2xl mx-4 shadow-lg">
                    <div className="flex justify-between">
                        <h2 className="text-4xl font-semibold text-start mx-6 mt-3">Skills</h2>
                        <div className="mx-6 h-16 w-16 items-center justify-center flex">
                            <img className="h-12 w-12" src={plusIcon} alt="" />
                        </div>
                    </div>
            </div>
            <div id="education" className="row-start-7 col-span-full bg-blue-400 h-16 my-4 rounded-2xl mx-4 shadow-lg">
                    <div className="flex justify-between">
                        <h2 className="text-4xl font-semibold text-start mx-6 mt-3">Education</h2>
                        <div className="mx-6 h-16 w-16 items-center justify-center flex">
                            <img className="h-12 w-12" src={plusIcon} alt="" />
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default App;