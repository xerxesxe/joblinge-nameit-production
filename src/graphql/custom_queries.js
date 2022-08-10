export const searchQuery = /* GraphQL */ `
query MySearchQuery($FirstNameFilter: SearchableFirstNamesAllFilterInput)
{
  searchFirstNamesAlls(
    filter: {all_first: {eq: $FirstNameFilter}}) 
    
    {
    items {
      ukrainian_first
      turkish_first
      sorani_first
      persian_first
      pakistani_first
      kurmanji_first
      german_first
      gender_first
      arab_first
      all_first
      id
      _deleted
    }
  }
  }
`;

export const searchFirstNamesAlls = /* GraphQL */ `
  query SearchFirstNamesAlls(
    $filter: SearchableFirstNamesAllFilterInput
    $sort: [SearchableFirstNamesAllSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableFirstNamesAllAggregationInput]
  ) {
    searchFirstNamesAlls(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
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
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;

export const filterLastName = /* GraphQL */ `
query getLastNameFilter($LastNameFilter: String!) {
  listLastNamesAlls(filter: {all_last: {eq: $LastNameFilter}}) {
    items {
      id
      german_last
      kurmanji_last
      persian_last
      ukrainian_last
      turkish_last
      sorani_last
      pakistani_last
      arab_last
    }
  }
}
`;

export const filterFirstName = /* GraphQL */ `
query getFirstNameFilter($FirstNameFilter: String!) {
  listFirstNamesAlls(filter: {all_first: {eq: $FirstNameFilter}}, limit: 4500) {
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
export const listLastNamesAlls = /* GraphQL */ `
  query ListLastNamesAlls(
    $filter: ModelLastNamesAllFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLastNamesAlls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        all_last
        persian_last
        arab_last
        kurmanji_last
        pakistani_last
        sorani_last
        turkish_last
        ukrainian_last
        german_last
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