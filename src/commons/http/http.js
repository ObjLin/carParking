export default class HttpClient {
  static Get(url, query, callback, loading, progress) {
    try {
      var request = new XMLHttpRequest()
      request.timeout = 30000
      if (progress) {
        request.onprogress = progress
      }
      url += url.indexOf('?') > 0 ? '&' : '?'
      for (var i in query) {
        url += i + '=' + query[i] + '&'
      }
      url += 't=' + Math.random()
      request.onreadystatechange = ev => {
        switch (request.readyState) {
          case 1: //OPENED
            //do something
            break
          case 2: //HEADERS_RECEIVED
            //do something
            break
          case 3: //LOADING
            if (loading) loading()
            break
          case 4: //DONE
            break
        }
      }
      request.onload = ev => {
        try {
          if (callback) callback(JSON.parse(request.responseText))
        } catch (e) {}
      }

      request.open('GET', url, true)
      request.send()
    } catch (e) {
      console.error(e)
    }
  }
  static Post(url, query, callback, loading, progress) {
    try {
      var request = new XMLHttpRequest()
      request.timeout = 30000
      if (progress) {
        request.onprogress = progress
      }
      var body = "";
      for (var i in query) {
        body += i + '=' + query[i] + '&'
      }
      request.onreadystatechange = ev => {
        switch (request.readyState) {
          case 1: //OPENED
            //do something
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
            break
          case 2: //HEADERS_RECEIVED
            //do something
            break
          case 3: //LOADING
            if (loading) loading(ev)
            break
          case 4: //DONE
            break
        }
      }
      request.onload = ev => {
        try {
          let jsonResult = JSON.parse(request.responseText)
          if (callback) callback(jsonResult)
        } catch (e) {}
      }
      console.log(body)
      request.open('POST', url, true)
      request.send(body)
    } catch (e) {
      console.error(e)
    }
  }
}
