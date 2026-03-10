import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useLikedStore = create(
  persist(
    (set, get) => ({
      liked: [],

      addLiked: (link) => {
        const exist = get().liked.includes(link);
        if (exist) {
          // remove link if it already exists
          set({ liked: get().liked.filter((l) => l !== link) });
        } else {
          // add new link
          set({ liked: [...get().liked, link] });
        }
      },
    }),
    {
      name: "liked-storage", // key in AsyncStorage
      storage: createJSONStorage(() => AsyncStorage), // where to save
    },
  ),
);
