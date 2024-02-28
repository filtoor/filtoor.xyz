"use client";
import { useState, useEffect } from "react";

async function getAssetsForWallet(page) {
  const request = await fetch(
    "https://donnie-bx0ny6-fast-mainnet.helius-rpc.com/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: "string",
        method: "getAssetsByOwner",
        params: {
          ownerAddress: "BAVjpySHMMGDpq3whU7qaqCCRE8ksCeGwxa53Qv2i8jS",
          page: page,
          limit: 10,
          sortBy: {
            sortBy: "created",
            sortDirection: "asc",
          },
        },
      }),
    }
  );
  const response = await request.json();

  return response.result.items;
}

async function getClassification(ids) {
  try {
    const response = await fetch(`https://api.filtoor.xyz/classify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ids: ids,
      }),
    });
    const data = await response.json();

    return data;
  } catch (e) {
    return "error";
  }
}

export default function Wallet() {
  const [page, setPage] = useState(1);
  const [assets, setAssets] = useState([]);
  const [classifications, setClassifications] = useState([]);

  useEffect(() => {
    getAssetsForWallet(page).then((response) => {
      setAssets(response);
    });
  }, [page]);

  const clickHandler = async () => {
    const classifications = await getClassification(
      assets.map((asset) => asset.id)
    );
    console.log(classifications);
    setClassifications(classifications);
  };

  const borderColor = (i) => {
    const classification = classifications[i];
    if (!classification) return "";
    if (classification === "ham") {
      return "border-4 border-green-500";
    } else if (classification === "spam") {
      return "border-4 border-red-500";
    }
    return "";
  };

  return (
    <div className="flex flex-col gap-2">
      <h1>Wallet</h1>

      <div className="flex flex-wrap w-full gap-2 justify-center">
        {assets.map((asset, i) => (
          <img
            src={asset.content.links.image}
            key={asset.id}
            className={`w-24 aspect-square rounded-md shadow-md ${borderColor(
              i
            )}`}
          />
        ))}
      </div>
      <button
        onClick={clickHandler}
        className="rounded-md bg-zinc-700 px-4 py-2 hover:bg-zinc-600 cursor-pointer"
      >
        Classify
      </button>
      <div className="flex gap-2">
        <button
          className="rounded-md bg-zinc-700 px-4 py-2 hover:bg-zinc-600 cursor-pointer w-1/2"
          onClick={() => {
            setPage(page - 1);
            setClassifications([]);
          }}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className="rounded-md bg-zinc-700 px-4 py-2 hover:bg-zinc-600 cursor-pointer w-1/2"
          onClick={() => {
            setPage(page + 1);
            setClassifications([]);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
