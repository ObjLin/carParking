export function formatDate(date, fmt) {
    if (!date || date === null) return '';
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + ''
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
        }
    }
    return fmt
}

function padLeftZero(str) {
    return ('00' + str).substr(str.length)
}

//剩余时间
export function dateCount(endTime, datetype) {
    endTime = endTime && endTime.replace(/-/g, "/"); // safari 浏览器兼容
    if (!endTime || endTime === null) return '截止时间无限制';
    var date = new Date();

    var until = new Date(endTime);
    var days = (until - date) / 1000 / 3600 / 24;
    var day = Math.floor(days);
    var hours = (days - day) * 24;
    var hour = Math.floor(hours);

    if (datetype == 'day') {
        // console.log(day);
        // console.log(hour+"测试"+date.getHours());

        if (hour + date.getHours() >= 24) {
            //console.log(Math.abs(day)-1);
            return Math.abs(day) - 1;
        } else {
            return Math.abs(day);
        }

    }
    else if (day >= 0 && day <= 3) {

        return "剩余" + day + "天" + hour + "小时";
    } if (day > 3) {
        return endTime;
    }
    else {
        // console.log(day);
        // return hour;
        var syday = Math.abs(day) - 1;
        var syhour = 24 - hour;
        return "已过期" + syday + "天" + syhour + "小时";
    }
}

// 剩余小时
export function hourCount(endTime) {
    endTime = endTime && endTime.replace(/-/g, "/"); // safari 浏览器兼容
    if (!endTime || endTime === null) return false;
    var date = new Date();
    var until = new Date(endTime);
    var days = (until - date) / 1000 / 3600 / 24;
    var day = Math.floor(days);
    var hours = (days - day) * 24;
    var hour = Math.floor(hours);
    if (day ==0 && hour<=24) {
        return true;
    }
    else {
        return false;
    }
}

//时间显示（今天、昨天）
export function getTimeText(argument, type) {
    argument = argument && argument.replace(/-/g, "/"); // safari 浏览器兼容
    if (!argument || argument === null) return '';
    var timeS = argument;
    var todayT = ''; //
    var yestodayT = '';
    var timeCha = getTimeS(timeS);
    timeS = timeS.slice(-8);
    todayT = new Date().getHours() * 60 * 60 * 1000 + new Date().getMinutes() * 60 * 1000 + new Date().getSeconds() * 1000;
    yestodayT = todayT + 24 * 60 * 60 * 1000;
    if (timeCha > yestodayT) {
        return argument.slice(0, 11);
    }
    if (timeCha > todayT && timeCha < yestodayT) {
        if (type == '1') {
            return '昨天'
        }
        else if (type == '2') {
            return timeS.slice(0, 2) > 12 ? '昨天 ' + (timeS.slice(0, 2) == 12 ? 12 : timeS.slice(0, 2)) + timeS.slice(2, 5) : '昨天 ' + timeS.slice(0, 5);
        }
    }
    if (timeCha < todayT) {
        if (type == '1') {
            return '今天'
        }
        else if (type == '2') {
            return timeS.slice(0, 2) >= 12 ? '下午 ' + (timeS.slice(0, 2) == 12 ? 12 : timeS.slice(0, 2) - 12) + timeS.slice(2, 5) : '上午 ' + timeS.slice(0, 5);
        }
    }
}
// 时间戳获取
function getTimeS(argument) {
    var timeS = argument;
    timeS = timeS.replace(/[年月]/g, '/').replace(/[日]/, '');
    return new Date().getTime() - new Date(timeS).getTime() - 1000;

}
//获取字典对象的文本(元数据)
export function getDictText(obj, value) {
    for (var key in obj) {
        if (obj[key] == value) {
            return key;
        }
    }
}
