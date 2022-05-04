var data = {
  Category: [
    {
      id: "asdf-jkll-fdsa-1111",
      name: "First Category",
    },
    {
      id: "asdf-jkll-fdsa-2222",
      name: "Second Category",
    },
    {
      id: "asdf-jkll-fdsa-3333",
      name: "Third Category",
    },
    {
      id: "asdf-jkll-fdsa-4444",
      name: "Fourth Category",
    },
  ],
  Threads: [
    {
      id: "123abc1",
      category_id: "asdf-jkll-fdsa-1111",
      state: "RI",
      title: "Lets go ride dirt bikes.",
      body: "Yea man lets go ride our dirt bikes at the track at Hoolaman Jams",
      created_at: 123456,
      user: "asdf-unique-user-id-1234",
    },
    {
      id: "123abc2",
      category_id: "asdf-jkll-fdsa-1111",
      state: "CT",
      title: "Lets go mudding.",
      body: "Yea man lets go get our trucks stuck in the mud",
      created_at: 123456,
      user: "asdf-unique-user-id-1234",
    },
  ],
  Posts: [
    {
      thread_id: "123abc1",
      created_at: 123456,
      message: "That sounds cool",
      user: "asdf-unique-user2-id-4321",
    },
    {
      thread_id: "123abc1",
      created_at: 123456,
      message: "That sounds cool2",
      user: "asdf-unique-user3-id-4321",
    },
    {
      thread_id: "123abc1",
      created_at: 123456,
      message: "That sounds cool3",
      user: "asdf-unique-user4-id-4321",
    },
  ],
};
export default data;

export function getCategory(id) {
  return data.Category.find((cat) => cat.id === id);
}

export function getThreads(id) {
  return data.Threads.filter((thread) => thread.category_id === id);
}

export function getThread(id) {
  return data.Threads.find((thread) => thread.id === id);
}

export function getPosts(id) {
  return data.Posts.filter((post) => post.thread_id === id);
}

export function getPostCount(id) {
  return data.Posts.filter((post) => post.thread_id === id).length;
}

export function getStates() {
  return ["AL","AK","AZ","AR","AS","CA","CO","CT","DE","DC","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","CM","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","TT","UT","VT","VA","VI","WA","WV","WI","WY"];
}