import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

const dummyData = [
  {
    id: "123",
    title: "This",
    artist: "Is",
    genre: "Rock",
    duration: 456,
  },
  {
    id: "124",
    title: "Jambi",
    artist: "Tool",
    genre: "Metal",
    duration: 456,
  },
  {
    id: "125",
    title: "Flying Whales",
    artist: "Gojira",
    genre: "Metal",
    duration: 456,
  },
  {
    id: "126",
    title: "Los Angeles",
    artist: "The Midnight",
    genre: "Synthwave",
    duration: 456,
  },
  {
    id: "127",
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    genre: "Rock",
    duration: 456,
  },
  {
    id: "128",
    title: "Yesterday",
    artist: "The Beatles",
    genre: "Pop",
    duration: 456,
  },
  {
    id: "129",
    title: "Crazy",
    artist: "Gnarls Barkley",
    genre: "Dunno",
    duration: 456,
  },
  {
    id: "130",
    title: "Mr. Brightside",
    artist: "The Killers",
    genre: "Rock",
    duration: 456,
  },
];

export const handlers = [
  http.get("/api/v1/playlist", () => {
    return HttpResponse.json(dummyData);
  }),
];

export const server = setupServer(...handlers);
