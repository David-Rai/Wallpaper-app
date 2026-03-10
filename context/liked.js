import { create } from "zustand";

export const useLikedStore = create((set) => ({
  liked: [],
  addLiked: (link) =>
    set((state) => {
      const exist = state.liked.some((l) => l === link);
      if (exist) {
        return { liked: state.liked.filter((l) => l !== link) };
      }
      return { liked: [...state.liked, link] };
    }),
}));
