import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export function formatWeekday() {
  const days = dayjs().locale("pt-br").format("dddd, DD/MM");
  return days[0].toUpperCase() + days.substring(1);
}
