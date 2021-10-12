import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{ format(date, 'yyyy年 MM月 dd日')}</time>
}