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
}
