export const renderPartialParams = (isSidebarOpen, editingPartialOrder) => {
  return {
    type: "RENDER_PARTIAL_PARAMS",
    isSidebarOpen,
    editingPartialOrder
  };
};

export const putTemplateParams = (utm_campaign, utm_source) => {
  return {
    type: "PUT_TEMPLATE_PARAMS",
    utm_campaign,
    utm_source
  };
};

export const putPartialParams = (orderIndex, partials) => {
  return {
    type: "PUT_PARTIAL_PARAMS",
    orderIndex,
    partials
  };
};

export const addPartialToScene = (partial, orderIndex) => {
  return {
    type: "ADD_PARTIAL_TO_SCENE",
    partial,
    orderIndex
  };
};

export const ejectPartialFromScene = restPartials => {
  return {
    type: "EJECT_PARTIAL_FROM_SCENE",
    restPartials
  };
};

export const reorderScene = newOrder => {
  return {
    type: "REORDER_SCENE",
    newOrder
  };
};
