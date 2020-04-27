const initialState = {
  isSidebarOpen: false,
  editingPartialOrder: null,
  partialsInScene: [],
  templateParams: {
    utm_campaign: "template_campaign",
    utm_source: "template_source"
  }
};

export function partial(state = initialState, action) {
  switch (action.type) {
    case "RENDER_PARTIAL_PARAMS":
      return Object.assign({}, state, {
        isSidebarOpen: action.isSidebarOpen,
        editingPartialOrder: action.editingPartialOrder
      });

    case "PUT_TEMPLATE_PARAMS":
      return Object.assign({}, state, {
        templateParams: {
          utm_campaign: action.utm_campaign,
          utm_source: action.utm_source
        }
      });

    case "PUT_PARTIAL_PARAMS":
      return Object.assign({}, state, {
        isSidebarOpen: false,
        editingPartialOrder: null,
        partialsInScene: [...action.partials]
      });

    case "ADD_PARTIAL_TO_SCENE":
      return Object.assign({}, state, {
        partialsInScene: [
          ...state.partialsInScene,
          {
            ...action.partial,
            orderIndex: action.orderIndex
          }
        ]
      });

    case "EJECT_PARTIAL_FROM_SCENE":
      return Object.assign({}, state, {
        partialsInScene: [...action.restPartials],
        isSidebarOpen: false,
        editingPartialOrder: null
      });

    case "REORDER_SCENE":
      return Object.assign({}, state, {
        partialsInScene: [...action.newOrder],
        isSidebarOpen: false,
        editingPartialOrder: null
      });

    default:
      return state;
  }
}
