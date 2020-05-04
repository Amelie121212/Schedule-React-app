import React from 'react';
import './App.css';
import { Inject,ScheduleComponent,Day,Week,WorkWeek,Month,Agenda } from "@syncfusion/ej2-react-schedule";


class App extends React.Component{
  public render () {
    return (
      <ScheduleComponent currentView="Month">
        <Inject services={[Day,Week,WorkWeek,Month,Agenda]}/>
      </ScheduleComponent>
    );

  } 
}

export default App;
