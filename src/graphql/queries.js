/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      threads {
        items {
          id
          title
          message
          state
          createdAt
          updatedAt
          categoryThreadsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        threads {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getThread = /* GraphQL */ `
  query GetThread($id: ID!) {
    getThread(id: $id) {
      id
      title
      message
      state
      category {
        id
        name
        threads {
          nextToken
        }
        createdAt
        updatedAt
      }
      replies {
        items {
          id
          message
          threadID
          createdAt
          updatedAt
          threadRepliesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      categoryThreadsId
      owner
    }
  }
`;
export const listThreads = /* GraphQL */ `
  query ListThreads(
    $filter: ModelThreadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listThreads(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        message
        state
        category {
          id
          name
          createdAt
          updatedAt
        }
        replies {
          nextToken
        }
        createdAt
        updatedAt
        categoryThreadsId
        owner
      }
      nextToken
    }
  }
`;
export const getReply = /* GraphQL */ `
  query GetReply($id: ID!) {
    getReply(id: $id) {
      id
      message
      threadID
      thread {
        id
        title
        message
        state
        category {
          id
          name
          createdAt
          updatedAt
        }
        replies {
          nextToken
        }
        createdAt
        updatedAt
        categoryThreadsId
        owner
      }
      createdAt
      updatedAt
      threadRepliesId
      owner
    }
  }
`;
export const listReplies = /* GraphQL */ `
  query ListReplies(
    $filter: ModelReplyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReplies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message
        threadID
        thread {
          id
          title
          message
          state
          createdAt
          updatedAt
          categoryThreadsId
          owner
        }
        createdAt
        updatedAt
        threadRepliesId
        owner
      }
      nextToken
    }
  }
`;
