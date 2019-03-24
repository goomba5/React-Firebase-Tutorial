const initState = {
  projects: [
    { id: 1, title: "Help Me Find Peach", content: "Where is Mario?!?!" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT": {
      console.log("create project", action.project);
    }
  }
  return state;
};

export default projectReducer;
