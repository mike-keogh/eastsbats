import request from "superagent";

export const receiveImageAction = images => {
  return {
    type: "RECEIVE_IMAGES",
    images
  };
};

export function getImages() {
  return dispatch => {
    request.get("/v1/images").end((err, res) => {
      if (err) {
        console.log(err.message);
        return;
      }
      dispatch(receiveImageAction(res.body));
    });
  };
}
