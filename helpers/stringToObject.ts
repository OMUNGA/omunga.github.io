export default function stringToObject(data: string) {
  return Function(`'use strict'; return (${data})`)();
}
