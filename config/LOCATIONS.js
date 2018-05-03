const LOCATIONS = [
  {
    name: 'NYC',
    stations: [
      'Grand Central Terminal',
      'Penn Station',
      '000'
    ]
  },
  {
    name: 'A',
    stations: [
      'A',
      'Albertson',
      'Amagansett',
      'Amityville',
      'Ansonia',
      'Appalachian Trail',
      'Ardsley on Hudson',
      'Atlantic Terminal',
      'Auburndale',
    ]
  },
  {
    name: 'B',
    stations: [
      'B',
      'Babylon',
      'Baldwin',
      'Bay Shore',
      'Bayside',
      'Beacon',
      'Beacon-Falls',
      'Beadford Hills',
      'Bellrose',
      'Bellmore',
      'Bellport',
      'Bethel',
      'Bethpage',
      'Botanical Garden',
      'Branchville',
      'Breakneck Ridge',
      'Brentwood',
      'Brewster',
      'Bridgehampton',
      'Bridgeport',
      'Broadway',
      'Bronxville',
    ]
  },
  {
    name: 'C',
    stations: [
      'C',
      'Cannondale',
      'Carle Place',
      'Cedarhurst',
      'Central Islip',
      'Centre Avenue',
      'Chappaqua',
      'Cold Spring',
      'Cold Spring Harbor',
      'Copiague',
      'Cortlandt',
      'Cos Cob',
      'Country Life Press',
      'Crestwood',
      'Croton Falls',
      'Corton-Harmon',
    ]
  },
  {
    name: 'D',
    stations: [
      'D',
      'Danbury',
      'Darien',
      'Deer Park',
      'Derby-Shelton',
      'Dobbs Ferry',
      'Douglaston',
      'Dover Plains',
    ]
  },
  {
    name: 'E',
    stations: [
      'E',
      'East Hampton',
      'East New York',
      'East Norwalk',
      'East Rockaway',
      'East Wiliston',
    ]
  },
  {
    name: 'F',
    stations: [
      'F',
      'Fairfield',
      'Fairfield Metro',
      'Far Rockaway',
      'Farmingdale',
      'Fleetwood',
      'Floral Park',
      'Flushing Main Street',
      'Fordham',
      'Forest Hills',
      'Freeport',
    ]
  },
  {
    name: 'G',
    stations: [
      'G',
      'Garden City',
      'Garrison',
      'Gibson',
      'Glen Cove',
      'Glen Head',
      'Geln Street',
      'Glenbrook',
      'Glenwood',
      'Goldens Bridge',
      'Great Neck',
      'Great River',
      "Green's Farms",
      'Greenlawn',
      'Greenvale',
      'Greenwich',
      'Greystone',
    ]
  },
  {
    name: 'H',
    stations: [
      'H',
      'Hampton Bays',
      'Harlem - 125th Street',
      'Harlem Valley - Wingdale',
      'Harrison',
      'Hartsdale',
      'Hawthorne',
      'Hempstead',
      'Hempstead Gardens',
      'Hewlett',
      'Hicksville',
      'Hollis',
      'Hunterspoint Avenue',
      'Huntington',
    ]
  },
  {
    name: 'I',
    stations: [
      'I',
      'Inwood',
      'Irvington',
      'Island Park',
      'Islip',
    ]
  },
  {
    name: 'J',
    stations: [
      'J',
      'Jamaica',
    ]
  },
  {
    name: 'K',
    stations: [
      'K',
      'Katonah',
      'Kew Gardens',
      'Kings Park',
    ]
  },
  {
    name: 'L',
    stations: [
      'L',
      'Lakeview',
      'Larchmont',
      'Laurelton',
      'Lawrence',
      'Lindenhurst',
      'Little Neck',
      'Locust Manor',
      'Long Beach',
      'Long Island City',
      'Ludlow',
      'Lynbrook',
    ]
  },
  {
    name: 'M',
    stations: [
      'M',
      'Malverne',
      'Mamaroneck',
      'Manhasset',
      'Manitou',
      'Marble Hill',
      'Massapequa',
      'Massapequa Park',
      'Mastic-Shriley',
      'Mattituck',
      'Medford',
      'Melrose',
      'Merillon Avenue',
      'Merrick',
      'Merrit 7',
      'Mets - Willets Point',
      'Milford',
      'Mineola',
      'Montauk',
      'Morris Heights',
      'Mount Kisco',
      'Mount Pleasant',
      'Mount Vernon East',
      'Mount Vernon West',
      'Murray Hill',
    ]
  },
  {
    name: 'N',
    stations: [
      'NH State St',
      'Nassau Boulevard',
      'Naugatuck',
      'New Canaan',
      'New Hamburg',
      'New Haven',
      'New Hyde Park',
      'New Rochelle',
      'Noroton Heights',
      'North White Plains',
      'Northport',
      'Nostrand Avenue',
    ]
  },
  {
    name: 'O',
    stations: [
      'Oakdale',
      'Oceanside',
      'Old Greenwich',
      'Ossining',
      'Oyster Bay',
    ]
  },
  {
    name: 'P',
    stations: [
      'Patchogue',
      'Patterson',
      'Pawling',
      'Peekskill',
      'Pelham',
      'Philipse Manor',
      'Pinelawn',
      'Plandome',
      'Pleasantville',
      'Port Chester',
      'Port Jefferson',
      'Port Washington',
      'Poughkeepsie',
      "Purdy's",
    ]
  },
  {
    name: 'Q',
    stations: [
      'Queens Village',
    ]
  },
  {
    name: 'R',
    stations: [
      'Redding',
      'Riverdale',
      'Riverhead',
      'Riverside',
      'Rockville Centre',
      'Ronkonkoma',
      'Rosedale',
      'Roslyn',
      'Rowayton',
      'Rye',
    ]
  },
  {
    name: 'S',
    stations: [
      'Saint Albans',
      'Saint James',
      'Sayville',
      'Scarborough',
      'Scarsdale',
      'Sea Cliff',
      'Seaford',
      'Seymour',
      'Smithtown',
      'South Norwalk',
      'Southampton',
      'Southeast',
      'Southold',
      'Southport',
      'Speonk',
      'Springdale',
      'Spuyten Duyvil',
      'Stamford',
      'Stewart Manor',
      'Stony Brook',
      'Stratford',
    ]
  },
  {
    name: 'T',
    stations: [
      'Talmadge Hill',
      'Tarrytown',
      'Tenmile River',
      'Tremont',
      'Tuckahoe',
    ]
  },
  {
    name: 'U',
    stations: [
      'University Heights',
    ]
  },
  {
    name: 'V',
    stations: [
      'Valhalla',
      'Valley Stream',
    ]
  },
  {
    name: 'W',
    stations: [
      'Wakefield',
      'Wantagh',
      'Wassaic',
      'Waterbury',
      'West Haven',
      'West Hempstead',
      'Westbury',
      'Westhampton',
      'Westport',
      'Westwood',
      'White Plains',
      'Williams Bridge',
      'Wilton',
      'Woodlawn',
      'Woodmere',
      'Woodside',
      'Wyandanch',
    ]
  },
  {
    name: 'X',
    stations: [

    ]
  },
  {
    name: 'Y',
    stations: [
      'Yankees - E. 153rd Street',
      'Yaphank',
      'Yonkers',
    ]
  },
  {
    name: 'Z',
    stations: [

    ]
  },
]

export default LOCATIONS;