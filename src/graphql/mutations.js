/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createThread = /* GraphQL */ `
  mutation CreateThread(
    $input: CreateThreadInput!
    $condition: ModelThreadConditionInput
  ) {
    createThread(input: $input, condition: $condition) {
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
export const updateThread = /* GraphQL */ `
  mutation UpdateThread(
    $input: UpdateThreadInput!
    $condition: ModelThreadConditionInput
  ) {
    updateThread(input: $input, condition: $condition) {
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
export const deleteThread = /* GraphQL */ `
  mutation DeleteThread(
    $input: DeleteThreadInput!
    $condition: ModelThreadConditionInput
  ) {
    deleteThread(input: $input, condition: $condition) {
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
export const createReply = /* GraphQL */ `
  mutation CreateReply(
    $input: CreateReplyInput!
    $condition: ModelReplyConditionInput
  ) {
    createReply(input: $input, condition: $condition) {
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
export const updateReply = /* GraphQL */ `
  mutation UpdateReply(
    $input: UpdateReplyInput!
    $condition: ModelReplyConditionInput
  ) {
    updateReply(input: $input, condition: $condition) {
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
export const deleteReply = /* GraphQL */ `
  mutation DeleteReply(
    $input: DeleteReplyInput!
    $condition: ModelReplyConditionInput
  ) {
    deleteReply(input: $input, condition: $condition) {
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
