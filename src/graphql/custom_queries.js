export const filterFirstName = /* GraphQL */ `
query getFirstNameFilter($NameFilter: String!) {
  listFirstNamesAlls(filter: {all_first: {eq: $NameFilter}}) {
    items {
      id
      gender_first
      german_first
      kurmanji_first
      persian_first
      ukrainian_first
      turkish_first
      sorani_first
      pakistani_first
      arab_first
    }
  }
}
`;

export const listFirstNamesAlls = /* GraphQL */ `
  query ListFirstNamesAlls(
    $filter: ModelFirstNamesAllFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFirstNamesAlls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        all_first
        persian_first
        arab_first
        kurmanji_first
        pakistani_first
        sorani_first
        turkish_first
        ukrainian_first
        german_first
        gender_first
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;