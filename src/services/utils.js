import { useEffect } from "react";

export function componentDidMount(handler) {
  return useEffect(() => {
    return handler();
  }, []);
};
