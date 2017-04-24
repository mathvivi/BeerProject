import { User }	from '../domain/user';
import { Beer }	from '../domain/beer';
import { Catalogue }	from '../domain/catalogue';

describe('User', function() {
  let user;

  beforeEach(()	=> {
    user = new User();
    user.setName("yolo");
  });

  it("has a name", function() {
    expect(user.name).toBeDefined();
  });

  it("has a login", function() {
    expect(user.login).toBeDefined();
  });

  it("has a password", function() {
    expect(user.password).toBeDefined();
  });
});
describe('Beer', function() {
  let beer;
  let listcomment;
  let listrating;

  beforeEach(()	=> {
    beer = new Beer();
  });

  it("has a name", function() {
    expect(beer.name).toBeDefined();
  });

  it("has a description", function() {
    expect(beer.description).toBeDefined();
  });

  it("has a list of comments", function() {
    expect(beer.listcomment).tobeDefined();
  });

  it("has a list of ratings", function() {
    expect(beer.listrating).tobeDefined();
  });
});
  describe('Catalogue', function() {
    let catalogue = new Catalogue();
    let beer = new Beer();
    beer.setName("Chimay");
    catalogue.addBeer(beer);
    // init catalogue
    Given("Catalogue contenant l'ensemble des bières belges", function() {
      catalogue.forEach((beer,i) => {
        if(i==0)
          beer.name.should.equal("Chimay");
        else
          fail();
        });
      });

    When("$user recherche $beer", function() {
      this.user.isAuthentificated; //module pour authentificated
      var result = this.catalogue.recherche(beer.name);
      result.should.equal(beer);
    });

    Then("La description de $beer est affichée", function() {
      beer.getHtml().should.equal(beer.description);
    });
  });
