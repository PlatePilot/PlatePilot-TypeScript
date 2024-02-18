// Function to calculate the current week (Monday to Sunday)
function getCurrentWeek(): { firstDay: Date; lastDay: Date } {
    const today = new Date();
    // Adjust for ISO weekday offset (Monday is 0)
    const dayOfWeek = (today.getDay() + 6) % 7;
  
    const firstDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - dayOfWeek
    );
    const lastDay = new Date(firstDay);
    lastDay.setDate(lastDay.getDate() + 6);
  
    return { firstDay, lastDay };
  }
  
  // Function to format date strings without weekday name
  function formatDate(date: Date): string {
    return date.toLocaleDateString('default', { year: 'numeric', month: 'numeric', day: 'numeric' });
  }
  
  // Function to update the calendar on page load
  function updateCalendarOnLoad(): void {
    // Get elements
    const currentWeekElement = document.getElementById("current-week");
    const weekDayElements = document.querySelectorAll(".week-day");
    const weekContainers = document.querySelectorAll(".week-container .week");
    const currentMonthElement = document.querySelector(".current-month");
    const monthContainers = document.querySelectorAll(".month-container .month");
  
    // Calculate current week and month
    const { firstDay, lastDay } = getCurrentWeek();
    const today = new Date();
    const currentMonth = today.getMonth();
  
    // Update current week display
    if (currentWeekElement) {
      currentWeekElement.textContent = `${formatDate(firstDay)} - ${formatDate(lastDay)}`;
    }
  
    // Update week containers
    weekContainers.forEach((week, index) => {
      const day = new Date(firstDay);
      day.setDate(day.getDate() + index);
  
      week.id = day.toLocaleDateString().replace(/\./g, "-");
  
      const weekDaySpan = weekDayElements[index];
      if (weekDaySpan) {
        weekDaySpan.textContent = formatDate(day);
  
        // Maintain highlighting for current day in week container
        if (day.toDateString() === new Date().toDateString()) {
          week.classList.add("current-day");
        }
  
        // Add class for days outside current month
        if (day.getMonth() !== currentMonth) {
          weekDaySpan.classList.add("not-month-day");
        }
      }
    });
  
    // Update current month display
    if (currentMonthElement) {
      const monthName = today.toLocaleString('default', { month: 'long' });
      currentMonthElement.textContent = `${monthName}, ${today.getFullYear()}`;
    }
  
    // Update month containers
    monthContainers.forEach((month, index) => {
      const day = new Date(today.getFullYear(), today.getMonth(), 1);
      day.setDate(day.getDate() + index);
  
      month.id = day.toLocaleDateString().replace(/\./g, "-");
  
      if (day.getDate() === today.getDate()) {
        month.classList.add("current-day"); // Highlight current day in month container
      }
  
      const monthDaySpan = month.querySelector(".month-header .month-day");
      if (monthDaySpan) {
        monthDaySpan.textContent = formatDate(day);
      }
    });
  }
  
  // Run calendar update on page load
  window.onload = updateCalendarOnLoad;  