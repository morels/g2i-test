import axios from "axios";
import { TriviaAPI } from "../api";

jest.mock("axios");

describe("TriviaAPI", () => {
  describe("getQuestions", () => {
    it("When method is called, then fetch is performed", () => {
      axios.get = jest.fn().mockImplementationOnce(
        () => Promise.resolve({ data: { questions: [] } }),
      );

      TriviaAPI.getQuestions();
      expect(axios.get).toBeCalled();
    });
    it("When method is called, then the given url is fetched", () => {
      axios.get = jest.fn().mockImplementationOnce(
        () => Promise.resolve({ data: { questions: [] } }),
      );

      TriviaAPI.getQuestions();
      expect(axios.get).toBeCalledWith("/api/questions?amount=10&difficulty=hard&type=boolean");
    });
  });
});
