import { IntakeCall } from "../services/types/client-intake-types";

export function formatCallDuration(intakeCall: IntakeCall): string {
    const { start_timestamp, end_timestamp } = intakeCall;
    
    const startTime = new Date(start_timestamp).getTime();
    const endTime = new Date(end_timestamp).getTime();
    
    const durationMs = endTime - startTime;
    const durationSeconds = Math.floor(durationMs / 1000);
    
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = durationSeconds % 60;
    
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    
    return `${formattedMinutes}:${formattedSeconds}`;
}
