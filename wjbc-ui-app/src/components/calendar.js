import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import timeGridPlugin from '@fullcalendar/timegrid';
import { GOOGLE_CAL_ID, GOOGLE_API_KEY } from '../helpers/cal_credentials';


import '../stylesheets/main.scss'; // webpack must be configured to do this

export default class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
        <FullCalendar
          defaultView="dayGridMonth"
          header={ {
            left: `prev,next today`,
            center: `title`,
            right: `dayGridMonth,timeGridWeek,timeGridDay,listWeek`
          } }
          plugins={ [dayGridPlugin, timeGridPlugin, googleCalendarPlugin] }
          googleCalendarApiKey={ GOOGLE_API_KEY }
          events={ {
            googleCalendarId: GOOGLE_CAL_ID
          } }
        />
      </div>
    );
  }
}
