# Names Extractor

> A library to extract Family Names and Full Names given a text   

## Install
``` sh
yarn add @pierretrolle/names-extractor
```

## Usage

getFamilyNames:
```js
var { getFamilyNames } = require('@pierretrolle/names-extractor');

getFamilyNames('Jon Stark se promenait avec Arya Stark et Claude "Evil" Baratheon. En croisant Jean Targaryen et Christine Frey, ils s\'enquirent de l\'état de Bernard Martell, en convalescence chez Francis "Francis" Tyrell.\
                 Arya Stark et Chrstine Frey repartirent vers Port-Royal tandis que Jean Targaryen resta discuter avec Jon "Sait-Rien" Stark.');
```

Results:
```
  ['Stark', 'Baratheon', 'Targaryen', 'Frey', 'Martell', 'Tyrell']
``` 

getFullNames:
```js
var { getFullNames } = require('@pierretrolle/names-extractor');

getFullNames('Jon Stark se promenait avec Arya Stark et Claude "Evil" Baratheon. En croisant Jean Targaryen et Christine Frey, ils s\'enquirent de l\'état de Bernard Martell, en convalescence chez Francis "Francis" Tyrell.\
                 Arya Stark et Chrstine Frey repartirent vers Port-Royal tandis que Jean Targaryen resta discuter avec Jon "Sait-Rien" Stark.');
```

Results:
```
  ['Jon Stark', 'Arya Stark', 'Claude Baratheon', 'Jean Targaryen', 'Christine Frey', 'Bernard Martell', 'Francis Tyrell', 'Chrstine Frey']
``` 

## Init environment for development

``` bash
# install Yarn
npm install -g yarn
```

## Build Setup

``` bash
# install dependencies
yarn
```

## Lint and Test
```
# start linter
yarn lint

# fix linter errors
yarn lint:fix

# run all tests
yarn test

# run all tests in watch mode
yarn test:watch
```
