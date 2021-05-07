import React from 'react'
import NavBar from '../components/Navbar'

export default function AddTaskPage() {

    return (
        <div className="d-flex flex-wrap flex-lg-row main-container" id="createTask">
            <NavBar />
            <div className="flex-grow-1">
                <div id="tasks" className="container-fluid">
                    <div className="row py-2 border-bottom darker">
                        <div className="col p-2 d-flex justify-content-start">
                            <div className="col p-2 d-flex">
                                <a href='/' className="text-dark me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="30" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                                    </svg>
                                </a>
                                <h4>Create Task</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 col-xl-5 p-40">
                            <form>
                                <div className="form-group">
                                    <label className="text-black-50">Enter Task Name</label>
                                    <input type="text" className="form-control" placeholder="Task Name" />
                                </div>
                                <div className="form-group">
                                    <label className="text-black-50">Enter Description</label>
                                    <textarea className="form-control" placeholder="Description" rows="3"></textarea>
                                </div>
                            </form>
                            <div>
                                <div>Branch To</div>
                                <ul className="branch pagination">
                                    <li className="page-item"><span className="page-link">To Do</span></li>
                                    <li className="page-item"><span className="page-link">In Progress</span></li>
                                    <li className="page-item"><span className="page-link">Done</span></li>
                                </ul>
                            </div>
                            <br/>
                            <div className="d-flex justify-content-between">
                                <button type="button" className="btn btn-primary">Create</button>
                                <button type="button" className="btn btn-success">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}