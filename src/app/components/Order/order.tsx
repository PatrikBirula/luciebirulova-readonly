"use client";

import { useEffect } from "react";

interface Props {
  url: string;
}

const OrderForm = ({ url }: Props) => {
  useEffect(() => {
    const fapi = document.createElement("script");
    const wrapper = document.getElementById("order-form");
    if (!wrapper || wrapper.querySelector("*")) return;

    fapi.setAttribute("src", url);
    wrapper.appendChild(fapi);
  }, [url]);

  return <div id="order-form" className="container"></div>;
};

export default OrderForm;
