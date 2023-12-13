// DateSessionSelector.jsx
import React from 'react';
import CustomDatePicker from './CustomDatePicker';
import {Button, Select} from "antd";

const DateSessionSelector = ({
                                 currentDate,
                                 currentSession,
                                 dateSession,
                                 handleDateChange,
                                 handleSessionChange,
                                 handleAllAttendance,
                                 handleSubmit
                             }) => {

    const index = Array.isArray(dateSession) ? dateSession.findIndex((date) => date.date === currentDate) : -1;

    console.log("=>(DateSessionSelector.jsx:17) index", index);
    return (
        <div className="sticky top-[50px] z-10 mb-4 ">
            <CustomDatePicker value={currentDate} onDateChange={handleDateChange}/>
            <Select onChange={handleSessionChange} value={currentSession} className="mb-4">
                {/*{dateSession[index].sessions.map((session, i) => (*/}
                {/*    <Select.Option key={i} value={session}>{session}</Select.Option>*/}
                {/*))}*/}
            </Select>
            <Button type={"primary"} onClick={handleAllAttendance}>모두 출석</Button>
            <Button type={"primary"} onClick={handleSubmit}>변경 사항 제출</Button>
        </div>
    );
};

export default DateSessionSelector;