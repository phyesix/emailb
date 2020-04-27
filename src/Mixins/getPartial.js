import Partials from "../Partials";

export default partialId => {
  let partial = Partials.filter(partial => partial.id === partialId);

  return partial !== [] ? partial[0] : console.log("No Partial Found");
};
