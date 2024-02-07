"use client";
import { useMemo, useState } from "react";

async function getImage(address) {
  const url = "https://donnie-bx0ny6-fast-mainnet.helius-rpc.com/";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: address,
        method: "getAsset",
        params: {
          id: address,
        },
      }),
    });
    const data = await response.json();

    return data.result.content.links.image;
  } catch (e) {
    return null;
  }
}

async function getClassification(address) {
  try {
    const response = await fetch(
      `https://api.filtoor.xyz/classify?address=${address}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    return data.classification;
  } catch (e) {
    return "error";
  }
}

export default function Form() {
  const [address, setAddress] = useState(
    "A1xhLVywcq6SeZnmRG1pUzoSWxVMpS6J5ShEbt3smQJr"
  );
  const [image, setImage] = useState(
    "https://nftstorage.link/ipfs/bafybeih3w6jc3tnw4lrok5ewtgcnoxer76ef5tdxkj773fyhzvyk2x3tgq/5525.png"
  );
  const [loading, setLoading] = useState(false);
  const [classification, setClassification] = useState("ham");

  const handleUpdate = async (e) => {
    setClassification("none");
    setAddress(e.target.value);
    setImage(null);
    setLoading(true);
    const new_image = await getImage(e.target.value);
    setImage(new_image);
    setLoading(false);
  };

  const handleClick = async () => {
    setClassification("loading");
    setLoading(true);
    const response = await getClassification(address);
    setLoading(false);
    setClassification(response);
  };

  const buttonDisabled = useMemo(() => !image || loading, [image, loading]);

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="rounded-md bg-zinc-700 w-full aspect-square">
        {!!image && (
          <img
            src={image}
            alt="cnft"
            className={`w-full h-full aspect-square rounded-md border-8 ${
              classification === "spam"
                ? "border-red-500"
                : classification === "ham"
                ? "border-green-500"
                : ""
            }`}
          />
        )}
      </div>

      <span className="font-medium">
        classification:{" "}
        <span
          className={`${
            classification === "spam"
              ? "text-red-500"
              : classification === "ham"
              ? "text-green-500"
              : ""
          }`}
        >
          {classification}
        </span>
      </span>

      <div className="flex gap-4">
        <input
          type="text"
          className="rounded-md bg-zinc-700 p-4 w-full"
          onChange={handleUpdate}
          value={address}
        />
        <button
          className={`rounded-md bg-zinc-700 p-4 ${
            buttonDisabled ? "opacity-50" : "cursor-pointer hover:bg-zinc-600"
          }`}
          disabled={buttonDisabled}
          onClick={handleClick}
        >
          classify
        </button>
      </div>
    </div>
  );
}
