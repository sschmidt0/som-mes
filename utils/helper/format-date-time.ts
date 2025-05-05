export const formatDateTime = (date: Date) => {
  const optionsDate: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
  };
  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  const formattedDate = date.toLocaleDateString("ca-ES", optionsDate);
  const formattedTime = date.toLocaleTimeString("ca-ES", optionsTime);

  return `${formattedDate} a les ${formattedTime}h`;
};
