export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQDNwyDu7lGMpR8cMyafzBlDIlE1f9f9FtXn4baoFBC-awZSvY344OBpbRE5D0hybohuMYAL0mNOSwciDNEsDcsVd3dR9v2pVKXU1ampKu4NkMC4yw1lNcf0e2sAF_RVc4ipSz8lP_1Ycj8cxDhEeUedTVdlvNcUqgzh59VaUDVS046X85O-w1NlZFSTN25qWt_TEWq0FCqT4VbwupBy",
};

export const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};
