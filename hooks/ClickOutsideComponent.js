import { useEffect } from "react";

export function useClickOutsideComponent(
  ref,
  id,
  open = false,
  onClickHandler = () => {}
) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        open &&
        ref.current &&
        !ref.current.contains(event.target) &&
        !event.target.parentElement.classList.contains(id) &&
        !event.target.classList.contains(id)
      ) {
        onClickHandler();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, open, id, onClickHandler]);
}
