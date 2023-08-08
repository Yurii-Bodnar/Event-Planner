export const validation = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Invalid title";
  }
  if (!values.title.match(/[a-zA-Zа-яА-Я]/g)) {
    errors.title = "Invalid title";
  }
  if (!values.description) {
    errors.description = "Invalid description";
  }

  if (!values.time) {
    errors.time = "Invalid time";
  }
  if (!values.location) {
    errors.location = "Invalid location";
  }
  if (!values.location.match(/[a-zA-Zа-яА-Я]/g)) {
    errors.location = "Invalid title";
  }

  if (!values.priority) {
    errors.priority = "Invalid priority";
  }
  return errors;
};
