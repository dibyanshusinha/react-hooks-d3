import React, {useState, useEffect} from 'react'
import { DragDropContext } from "react-beautiful-dnd";

import Column from '../components/Column'
import NavBar from '../components/Navbar'

export default function TaskListPage() {

    const [columns, setcolumns] = useState([
        {
            id:"todo",
            name: "To DO",
            priority: 1,
            tasks: []
        },{
            id:"inprogress",
            name: "In Progress",
            priority: 2,
            tasks: []
        },{
            id:"done",
            name: "Done",
            priority: 3,
            tasks: []
        }
    ]);

    useEffect(() => {
        setcolumns([
            {
                id:"todo",
                name: "To Do",
                tasks: [
                    {id: "asdf0", priority: 1, title: "Task Zero", subtitle: "Description", desc: "Random description"}
                ]
            },{
                id:"inprogress",
                name: "In Progress",
                tasks: [
                    {id: "asdf2", priority: 1, title: "Task One", subtitle: "Description", desc: "Random description"}, 
                    {id: "asdf3", priority: 2, title: "Task Two", subtitle: "Description", desc: "Random description"}, 
                    {id: "asdf4", priority: 2, title: "Task Three", subtitle: "Description", desc: "Random description"}, 
                ]
            },{
                id:"done",
                name: "Done",
                tasks: [
                    {id: "asdf5", priority: 1, title: "Task Four", subtitle: "Description1", desc: "Random description"}, 
                    {id: "asdf6", priority: 1, title: "Task Five", subtitle: "Description2", desc: "Random description"}, 
                    {id: "asdf7", priority: 3, title: "Task Six", subtitle: "Description3", desc: "Random description"}, 
                ]
            }
        ]);
        return () => {
            // do cleanup if needed
        }
    }, [])

    const onDragEnd = result => {
        // return if item was dropped outside
        if (!result.destination) return;
        // return if the item was dropped in the same place
        if (
        result.source.droppableId === result.destination.droppableId &&
        result.source.index === result.destination.index
        ) return;

        const newColumns = JSON.parse(JSON.stringify(columns));
        const droppedFrom = newColumns.findIndex(col => col.id === result.source.droppableId);
        const droppedInto = newColumns.findIndex(col => col.id === result.destination.droppableId);
        const draggedItem = newColumns[droppedFrom].tasks[result.source.index];
        //Delete Item in source
        newColumns[droppedFrom].tasks.splice(result.source.index, 1);
        //Update Item in Destination
        newColumns[droppedInto].tasks.splice(result.destination.index, 0, draggedItem);
        setcolumns(newColumns);
    };

    return (
        <div className="d-flex flex-wrap h-100 flex-lg-row flex-sm-col">
            <NavBar showMobileMenu/>
            <div className="flex-grow-1">
                <div id="tasks" className="container-fluid">
                    <div className="row py-2 bg-light-grey d-none d-lg-block">
                        <div className="col p-2 d-flex justify-content-end">
                            <a href="/create" type="button" className="btn text-white bg-green btn-sm">Add Task</a>
                        </div>
                    </div>
                    <div className="row pt-4 px-2">
                        <DragDropContext onDragEnd={onDragEnd}>
                            {columns.map(col=><Column key={"col"+col.id} {...col} />)}
                        </DragDropContext>
                    </div>
                </div>
            </div>
        </div>

    )
}