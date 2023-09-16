class UtilDB{
  constructor(key, id){
    this.key = key;
    this.id = id;
    this.db;
  }
  get(callback=false){
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        let d = JSON.parse(req.responseText);
        if(callback){
          callback(d)
        }
        this.db = d;
      }
    };
    
    req.open("GET", "https://api.jsonbin.io/v3/b/" + this.id + "?meta=false", true);
    req.setRequestHeader("X-Master-Key", this.key);
    req.send();
  }
  set(newd){
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        this.get()
      }
    };
    
    req.open("PUT", "https://api.jsonbin.io/v3/b/" + this.id + "?meta=false", true);
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("X-Master-Key", this.key);
    req.send(JSON.stringify(newd));
  }
}

class UtilImport{
  constructor(url){
    return fetch('https://raw.githubusercontent.com/roger-padrell/util-r/main/main.js', {
        method: 'GET',
      })
      .then(function(response) {
        return response.text();
      })
      .then(function(text) {
        var userid = text;
        this.after(userid);
        return userid;
      })
  }

  after(q){
    console.log(q.replaceAll("\n", " "))
  }
}
