import { Months } from '../types/utils.types'

export function getTimeInformation(unixTime: number, stringPrefix: string): string {
  const date = new Date(unixTime);
  const day = date.getDate();
  const month = Months[date.getMonth()];
  const year = date.getUTCFullYear();
  const hour = date.getUTCHours() > 9 ? date.getUTCHours() : `0${date.getUTCHours()}`;
  const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`

  return `${stringPrefix} ${day} ${month} ${year} at : ${hour}:${minutes}`;
}

export function getLeftTime(endTime: number): string {
  const leftTime = endTime - Date.now();
  const hours = Math.floor(leftTime / (1000 * 60 * 60));
  const minutes = Math.floor((leftTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((leftTime % (1000 * 60)) / 1000);

  if(hours < 0 || minutes < 0) {
    return 'Today is your deadline!'
  }
  
  return `Time left: ${hours > 9 ? hours : `0${hours}`}:${minutes > 0 ? minutes : `0${minutes}`}:${seconds > 0 ? seconds : 0+seconds}`;
}