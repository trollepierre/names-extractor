const { getFamilyNames, getFullNames } = require("../src/names-extractor");

const text = `Jon Stark se promenait avec Arya Stark et Claude "Evil" Orange Baratheon. En croisant Jean Targaryen et Christine Frey,
  ils s'enquirent de l'état de Bernard Martell, en convalescence chez Francis "Francis" Tyrell.
  Arya Stark et Chrstine Frey repartirent vers Port-Royal tandis que Jean Targaryen resta discuter avec Jon "Sait-Rien" Stark.
  Hi, I'm Pleşa. The store Junk Car Parts (they sell car parts). This is Joe Smith's car. The company is Cars and Trucks.
  The company has a Very Long Name
  Joe's Auto Works`;

describe("name-extractor", () => {
  describe("getFamilyNames", () => {
    it("should return the uniq family names", () => {
      expect(getFamilyNames(text)).toEqual([
        "Stark",
        "Baratheon",
        "Targaryen",
        "Frey",
        "Martell",
        "Tyrell",
        "Port-Royal",
        "Pleşa",
        "Parts",
        "Smith's",
        "Cars",
        "Trucks",
        "Name",
        "Works",
      ]);
    });
  });

  describe("getFullNames", () => {
    it("should return uniq full names", () => {
      // When
      const selectedService = getFullNames(text);

      // Then
      expect(selectedService).toEqual([
        "Jon Stark",
        "Arya Stark",
        "Claude Orange Baratheon",
        "Jean Targaryen",
        "Christine Frey",
        "Bernard Martell",
        "Francis Tyrell",
        "Chrstine Frey",
        "Port-Royal",
        "Pleşa",
        "Junk Car Parts",
        "Joe Smith",
        "Cars",
        "Trucks",
        "Long Name",
        "Joe's Auto Works"
      ]);
    });
  });
});
