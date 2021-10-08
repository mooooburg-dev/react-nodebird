export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "무벅이",
      },
      content: "첫 번째 게시글 #해시태그 #익스프레스",
      Images: [
        {
          src: "https://dummyimage.com/300x300/000/fff",
        },
        {
          src: "https://dummyimage.com/300x300/333/fff",
        },
        {
          src: "https://dummyimage.com/300x300/666/fff",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "neo",
          },
          content: "우와 오랜만이군요!",
        },
        {
          User: {
            nickname: "jun",
          },
          content: "화이팅입니다!",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  User: {
    id: 1,
    nickname: "무벅이2",
  },
  content: "더미데이터입니다.",
  Images: [],
  Comments: [],
  ImagePaths: [],
  postAdded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
