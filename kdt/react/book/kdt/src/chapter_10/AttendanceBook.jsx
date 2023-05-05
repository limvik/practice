import React from 'react';

const students =[
    {
        id:1,
        name:'Rahul',
    },
    {
        id:2,
        name:'Sonam',
    },
    {
        id:3,
        name:'Sumit',
    },
    {
        id:4,
        name:'Raj',
    }
];

function AttendanceBook(props) {
    return (
        <ul>
            {
                students.map(student => {
                    return <li key={student.id}>{student.name}</li>
                })
            }
        </ul>
    );
}

export default AttendanceBook;