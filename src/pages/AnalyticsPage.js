import React from 'react'

import NavBar from '../components/Navbar'
import ResponsivePieChart from '../components/PieChart'


function AnalyticsPage() {

    const apiTodoData = [
        { type: "success", count: "15", color: "#2F80ED" },
        { type: "error", count: "5", color: "#F2C94C" },
        { type: "warning", count: "3", color: "#27AE60" },
    ];
    
    return (
        <div className="d-flex flex-wrap flex-lg-row main-container">
            <NavBar />
            <div className="flex-grow-1">
                <div id="tasks" className="container-fluid">
                    <div className="row py-2 border-bottom">
                        <div className="col p-2 d-flex justify-content-start">
                            <div className="col p-2 d-flex">
                                <a href='/' className="text-dark me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="30" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                                    </svg>
                                </a>
                                <h4>Analytics</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="pt-4 px-4">
                                <h3 className="text-center">Your Task Trends in the Week</h3>
                                <ResponsivePieChart 
                                    dataSet={apiTodoData}   
                                    revealDuration={3000} 
                                    sliceGrow={15}
                                    sliceMove={8}
                                    pieMAxSize={500}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnalyticsPage;