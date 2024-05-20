export function getConsiderationStatusColor(value: string): string {
    switch (value) {
      case "Unclear":
        return "#404040";
      case "Present":
        return "#2A7410";
      default:
        return "#000000"; // Default color if none of the cases match
    }
  }