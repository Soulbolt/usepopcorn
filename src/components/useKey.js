import { useEffect } from "react";

export function useKey(key, action) {
  // Effect to handle the keydown function when Esc Key is pressed
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", callback);

      // clean up
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
