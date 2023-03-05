function validateForm(formData) {
  const errors = {};

  if (!formData.name) {
    errors.name = "Please enter a name";
  }

  if (!formData.email) {
    errors.email = "Please enter an email address";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!formData.date) {
    errors.date = "Please select a date!";
  }

  if (!formData.time) {
    errors.time = "Please select a time";
  } else if (formData.time === "---") {
    errors.time = "Please select a time";
  }

  if (!formData.people) {
    errors.people = "Please select people";
  } else if (formData.people > 10) {
    errors.people = "Please select valid people";
  }

  const isValid = Object.keys(errors).length === 0;

  return { errors, isValid };
}

export default validateForm;
