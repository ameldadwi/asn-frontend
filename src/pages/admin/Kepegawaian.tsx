// src/pages/admin/Kepegawaian.tsx
import React, { useEffect, useState } from 'react';
import '../../styles/kepegawaian.css';

const Kepegawaian: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  const [days, setDays] = useState<JSX.Element[]>([]);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  useEffect(() => {
    updateCalendar();
  }, [currentMonth, currentYear]);

  const updateCalendar = () => {
    const daysGrid: JSX.Element[] = [];
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();
    const today = new Date();
    const isCurrentMonth = today.getMonth() === currentMonth && today.getFullYear() === currentYear;
    const todayDate = today.getDate();

    for (let i = firstDay - 1; i >= 0; i--) {
      daysGrid.push(
        <div className="day-cell other-month" key={`prev-${i}`}>
          <div className="day-number">{daysInPrevMonth - i}</div>
        </div>
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = isCurrentMonth && day === todayDate;
      daysGrid.push(
        <div
          className={`day-cell${isToday ? ' today' : ''}`}
          key={`current-${day}`}
          onClick={() => selectDay(day)}
        >
          <div className="day-number">{day}</div>
        </div>
      );
    }

    const remainingCells = 42 - daysGrid.length;
    for (let day = 1; day <= remainingCells; day++) {
      daysGrid.push(
        <div className="day-cell other-month" key={`next-${day}`}>
          <div className="day-number">{day}</div>
        </div>
      );
    }

    setDays(daysGrid);
  };

  const selectDay = (day: number) => {
    const newDays = days.map((el, index) => {
      const isSame = (el.props.className.includes('day-cell') && el.key?.includes(`current-${day}`));
      if (isSame) {
        return React.cloneElement(el, {
          className: `${el.props.className} selected`
        });
      }
      return el;
    });
    setDays(newDays);
  };

  const changeMonth = (dir: number) => {
    const newMonth = currentMonth + dir;
    if (newMonth > 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else if (newMonth < 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(newMonth);
    }
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div className="nav-buttons nav-prev">
          <button className="nav-button" onClick={() => changeMonth(-1)}>‹</button>
        </div>
        <div className="month-year">
          <span className="month-name">{monthNames[currentMonth]}</span>
          <span className="year">{currentYear}</span>
        </div>
        <div className="nav-buttons nav-next">
          <button className="nav-button" onClick={() => changeMonth(1)}>›</button>
        </div>
      </div>

      <div className="calendar-grid">
        <div className="weekday-header">
          {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((d) => (
            <div className="weekday" key={d}>{d}</div>
          ))}
        </div>
        <div className="days-grid">{days}</div>
      </div>

      <div className="events-section">
        <h2 className="events-title">EVENTS</h2>
        <div id="eventsContainer">
          <div className="event-item">
            <div className="event-date">January 15, 2025</div>
            <div className="event-title">Team Meeting</div>
            <div className="event-description">
              Weekly team sync to discuss project progress and upcoming milestones.
            </div>
          </div>
          <div className="event-item">
            <div className="event-date">January 22, 2025</div>
            <div className="event-title">Product Launch</div>
            <div className="event-description">
              Official launch of the new product line with marketing campaign kickoff.
            </div>
          </div>
          <div className="event-item">
            <div className="event-date">January 30, 2025</div>
            <div className="event-title">Workshop</div>
            <div className="event-description">
              Professional development workshop on modern web technologies.
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <p>&copy; 2025 Horizontal Calendar. Beautiful, responsive, and progressive design.</p>
      </div>
    </div>
  );
};

export default Kepegawaian;
