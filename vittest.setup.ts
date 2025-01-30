import "@testing-library/jest-dom/vitest";
import { server } from "./src/__tests__/mocks";
import { beforeAll, afterEach, afterAll } from "vitest";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
