/**
 * Interface tells us the shape of an object.
 * Interface can't have method implementation unlike Abstract classes
 */
interface Calendar {
    name: string;
    addEvent(): void;
    removeEvent(): void;
}

interface CloudCalendar extends Calendar {
    sync(): void;
}

class GoogleCalendar implements Calendar {
    
    constructor(public name: string) {}

    addEvent(): void {

    }

    removeEvent(): void {
        
    }
}