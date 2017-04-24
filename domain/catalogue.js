export class Catalogue {
  addBeer(beer){
    if(this.list)
      this.list.push(beer);
    else
      this.list = [beer];
  }

  forEach(fun){
    
    for (var i = 0; i < this.list.length; i++) {
      fun(this.list[i],i);
    }
  }

}
