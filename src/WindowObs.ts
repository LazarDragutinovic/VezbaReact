import { debounceTime, fromEvent, map, sampleTime } from "rxjs";




const windowResizeObs = fromEvent(window,"resize").pipe(sampleTime(500));



export {windowResizeObs}
