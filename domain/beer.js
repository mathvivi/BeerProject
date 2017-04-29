export class Beer {

var name;
var descr;
var cote = [];
var degree;

  setName(same) {
    this.name = name;
}

  setDescr(descr) {
    this.descr = descr;
}

  addCote(nmber) {
    cote.push(nmber);
}

  meanCote() {
    for (var i=0; i<this.cote.length; i++){
      total += this.cote[i];
    }
    return total/this.cote.length;
}

  setDegree(){
    this.degree = degree;
}

  getName(){
    return name;
}

  getDescr(){
  return descr;
}

  getDegree(){
  return degree;
}

}
