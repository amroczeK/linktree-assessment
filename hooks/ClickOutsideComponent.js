import { useEffect } from "react";

/**
 * @TODO
 * Fix Shows dropdown not opening when Music dropdown open and you click outside of music dropdown container/reference
 * onto the Shows link button to open shows dropdown. 
 * NOTE: Works in reverse, e.g. Shows dropdown open and you click on Music button.
 */
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
        console.log(ref.current);
        console.log(event.target.parentElement);
        console.log(event.target.classList)
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
