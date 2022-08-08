/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLastNamesAll = /* GraphQL */ `
  query GetLastNamesAll($id: ID!) {
    getLastNamesAll(id: $id) {
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
export const syncLastNamesAlls = /* GraphQL */ `
  query SyncLastNamesAlls(
    $filter: ModelLastNamesAllFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLastNamesAlls(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
export const getFirstNamesAll = /* GraphQL */ `
  query GetFirstNamesAll($id: ID!) {
    getFirstNamesAll(id: $id) {
      id
      all_first
      persian_last
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
        persian_last
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
export const syncFirstNamesAlls = /* GraphQL */ `
  query SyncFirstNamesAlls(
    $filter: ModelFirstNamesAllFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFirstNamesAlls(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        all_first
        persian_last
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
