/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateThread = /* GraphQL */ `
  subscription OnCreateThread($owner: String) {
    onCreateThread(owner: $owner) {
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
export const onUpdateThread = /* GraphQL */ `
  subscription OnUpdateThread($owner: String) {
    onUpdateThread(owner: $owner) {
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
export const onDeleteThread = /* GraphQL */ `
  subscription OnDeleteThread($owner: String) {
    onDeleteThread(owner: $owner) {
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
export const onCreateReply = /* GraphQL */ `
  subscription OnCreateReply($owner: String) {
    onCreateReply(owner: $owner) {
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
export const onUpdateReply = /* GraphQL */ `
  subscription OnUpdateReply($owner: String) {
    onUpdateReply(owner: $owner) {
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
export const onDeleteReply = /* GraphQL */ `
  subscription OnDeleteReply($owner: String) {
    onDeleteReply(owner: $owner) {
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
