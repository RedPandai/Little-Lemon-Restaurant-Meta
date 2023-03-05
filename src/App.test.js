import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingPage from "./components/pages/BookingPage";

test("Should find the submit button", () => {
  render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
  );
  const bookingElement = screen.getByLabelText("Submit Button");
  expect(bookingElement).toBeInTheDocument();
});

test("Should update the name input correctly", () => {
  render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
  );
  const nameInputEl = screen.getByRole("textbox", { name: /name/i });
  const testValue = "Max";

  fireEvent.change(nameInputEl, { target: { value: testValue } });
  expect(nameInputEl.value).toBe("Max");
});

test("Should update the date data correctly", () => {
  render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
  );
  const dateInputEl = screen.getByLabelText("Choose date");
  const testValue = "2023-03-10";

  fireEvent.change(dateInputEl, { target: { value: testValue } });
  expect(dateInputEl.value).toBe("2023-03-10");
});

test("Should update the time data fetch correctly", async () => {
  render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
  );
  const dateInputEl = screen.getByLabelText("Choose date");
  const select = screen.getByLabelText("Choose time");

  const testValue = "2023-03-10";

  fireEvent.change(dateInputEl, { target: { value: testValue } });
  fireEvent.change(select, { target: { value: "19:00" } });
  await waitFor(() => expect(select.value.length).not.toBe(1));
  expect(select.value).toBe("19:00");
});

test("should able to submit a form with valid inputs", () => {
  const name = "Max";
  const people = 3;
  const date = "2023-03-10";
  const time = "19:00";
  const email = "test@mail.com";
  const occasion = "Birthday";
  const phone = "12345678910";
  const message = "No added Sugar";

  const handleSubmit = jest.fn();
  render(
    <MemoryRouter>
      <BookingPage handleSubmit={handleSubmit} />
    </MemoryRouter>
  );

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  fireEvent.change(nameInput, { target: { value: name } });

  const peopleInput = screen.getByLabelText("Number of guests");
  fireEvent.change(peopleInput, { target: { value: people } });

  const dateInput = screen.getByLabelText("Choose date");
  fireEvent.change(dateInput, { target: { value: date } });

  const timeInput = screen.getByLabelText("Choose time");
  fireEvent.change(timeInput, { target: { value: time } });

  const occasionInput = screen.getByRole("combobox", { name: /occasion/i });
  fireEvent.change(occasionInput, { target: { value: occasion } });

  const emailInput = screen.getByLabelText("E-mail");
  fireEvent.change(emailInput, { target: { value: email } });

  const phoneInput = screen.getByLabelText("phone");
  fireEvent.change(phoneInput, { target: { value: phone } });

  const messageInput = screen.getByLabelText("special requirement messages");
  fireEvent.change(messageInput, { target: { value: message } });

  const submitButton = screen.getByLabelText("Submit Button");
  fireEvent.click(submitButton);

  expect(submitButton).not.toBeDisabled();
  //here cannot use handleSubmit and toHaveBeenCalledWith because I did not write the handleSubmit function as the bookingpages's props and put it in the parent component, thus use this button test instead.If you want to insist to test by using jest.fn(), then remeber to adjut the code structure and put the handle submit function in the App component and pass it to the child(Bookingpage component);
});
