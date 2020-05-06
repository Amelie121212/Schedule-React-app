import React from 'react';
import './App.css';
import { Inject,ScheduleComponent,Day,Week,WorkWeek,Month, ViewDirective } from "@syncfusion/ej2-react-schedule";



export default class App extends React.Component<{}, {}> {
  private localData = [
    {
      Id:1,
      Subject: "Meditation Time",
      StartTime: new Date(2019,4,7,6,0),
      EndTime: new Date(2019,4,7,6,30),
      Location: "Yoga Center"
    },
    {
      Id: 2,
      Subject: "Skating Class",
      StartTime: new Date(2020,5,6,7,30),
      EndTime: new Date(2020,5,6,8,0),
      Location: "Tower park"
    }
  ];
  private eventTemplate(props:{[key:string]:Object}): JSX.Element {
    return(<div className="month-template-wrap">{props.Location}</div>);
  }
  private weekEventTemplate(props:{[key:string]:Object}): JSX.Element {
    return(<div className="template-wrap">{props.Subject}</div>);
  }
  public render () {
    return (
      <ScheduleComponent width="100%" height="550px" selectedDate={new Date(2020,5,6)}  eventSettings={{dataSource: this.localData }} >
        <ViewDirective>
          <ViewDirective option="Day"/>
          <ViewDirective option="Week" eventTemplate={this.weekEventTemplate.bind(this)}/>
          <ViewDirective option="WorkWeek"/>
          <ViewDirective option="Month" eventTemplate={this.eventTemplate.bind(this)}/>
        </ViewDirective>
        <Inject services={[Day,Week,WorkWeek,Month]}/>
      </ScheduleComponent>
    );
  }
}