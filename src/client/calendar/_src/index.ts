function getCurrentWeek(): string {
    const today: Date = new Date();
    const firstDayOfWeek: Date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 1);
    const lastDayOfWeek: Date = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);
    
    return `${firstDayOfWeek.toLocaleDateString()} - ${lastDayOfWeek.toLocaleDateString()}`;
  }
  
function updateCalendarOnLoad(): void {
    // update weekl
    const currentWeekElement: HTMLSpanElement | null = document.getElementById("current-week");
    const weekDayElements: NodeListOf<HTMLSpanElement> = document.querySelectorAll(".week-day");

    const today: Date = new Date();

    if (currentWeekElement) {
        currentWeekElement.innerHTML = getCurrentWeek();
    }

    const weekContainers: NodeListOf<HTMLDivElement> = document.querySelectorAll(".week-container .week");
    weekContainers.forEach((week, index) => {
        const currentDate: Date = new Date();
        currentDate.setDate(currentDate.getDate() - currentDate.getDay() + index + 1);

        const dayId: string = currentDate.toLocaleDateString().replace(/\./g, "-");
        week.id = dayId;

        const weekDaySpan: HTMLSpanElement | null = weekDayElements[index];
        if (weekDaySpan) {
        weekDaySpan.innerHTML = currentDate.toLocaleDateString();
        if (currentDate.toDateString() === today.toDateString()) {
            week.classList.add("current-day");
        }
        }
    });

    // update month
    const currentMonthElement: HTMLSpanElement | null = document.querySelector(".current-month");
    const monthContainers: NodeListOf<HTMLDivElement> = document.querySelectorAll(".month-container .month");

    const firstDayOfMonth: Date = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDayOfMonth: Date = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    if (currentMonthElement) {
        const monthName: string = today.toLocaleString('default', { month: 'long' });
        currentMonthElement.innerHTML = `${monthName}, ${today.getFullYear()}`;
    }

    monthContainers.forEach((month, index) => {
        const currentDate: Date = new Date(firstDayOfMonth);
        currentDate.setDate(currentDate.getDate() + index);

        const monthId: string = currentDate.toLocaleDateString().replace(/\./g, "-");
        month.id = monthId;

        if (index === today.getDate() - 1) {
        month.classList.add("current-day");
        }

        const monthDaySpan: HTMLSpanElement | null = month.querySelector(".month-header .month-day");
        if (monthDaySpan) {
        monthDaySpan.innerHTML = currentDate.toLocaleDateString();

        // day outside month
        if (currentDate < firstDayOfMonth || currentDate > lastDayOfMonth) {
            monthDaySpan.classList.add("not-month-day");
        }
        }
    });
}
  
window.onload = updateCalendarOnLoad;
  