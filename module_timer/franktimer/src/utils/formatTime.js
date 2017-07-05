/**
 * Created by PPLU on 2017/7/5.
 */
const appendZero  = n => n.toLocaleString({},{minimumIntegerDigits:2});
export  default function(t = 0){
    const
    msec = appendZero(parseInt(t%100) ),
    sec = appendZero(parseInt((t/100)% 60)),
    min = appendZero(parseInt((t/6000)% 60)),
    hour = appendZero(parseInt(t/360000));
    return `${hour}:${min}:${sec}.${msec}`;
}
