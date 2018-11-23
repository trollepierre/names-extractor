const { getFamilyNames, getFullNames } = require('../src/names-extractor');

const text = 'Jon Stark se promenait avec Arya Stark et Claude "Evil" Baratheon. En croisant Jean Targaryen et Christine Frey, ils s\'enquirent de l\'état de Bernard Martell, en convalescence chez Francis "Francis" Tyrell.\
  Arya Stark et Chrstine Frey repartirent vers Port-Royal tandis que Jean Targaryen resta discuter avec Jon "Sait-Rien" Stark.';

describe('name-extractor', () => {
  describe('getFamilyNames', () => {
    it('should return the uniq family names', () => {
      expect(getFamilyNames(text)).toEqual(['Stark', 'Baratheon', 'Targaryen', 'Frey', 'Martell', 'Tyrell']);
    });
  });

  describe('getFullNames', () => {
    it('should return uniq full names', () => {
      // When
      const selectedService = getFullNames(text);

      // Then
      expect(selectedService).toEqual(['Jon Stark', 'Arya Stark', 'Claude Baratheon', 'Jean Targaryen', 'Christine Frey', 'Bernard Martell', 'Francis Tyrell', 'Chrstine Frey']);
    });
  });
});
