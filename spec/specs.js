describe('bottles', function() {

  it("is a valid number of bottles to sing about", function() {
    expect(bottles(isValidInput)).to.equal(true);
  });

  it("is currently singing chorus as there are still bottles left to sing about", function() {
    expect(bottles(bottlesAreLeft)).to.equal(true);
  });

  it ("has finished singing about the last bottle, and ends the song with the last lyric", function() {
    expect(bottles(bottlesLeft)).to.equal(0);
  });

});
