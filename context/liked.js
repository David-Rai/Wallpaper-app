import { create } from "zustand";

export const useLikedStore = create((set) => ({
  liked: [],
  addLiked: (link) =>
    set((state) => ({ liked: [...state.liked, link] })),
})); 