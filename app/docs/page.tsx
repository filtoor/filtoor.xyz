"use client";
import { RedocStandalone } from "redoc";
import { useState } from "react";

export default function Docs() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <div className="h-lvh w-lvw fixed z-20 bg-zinc-800 flex items-center justify-center top-0 left-0 text-slate-200 font-bold overflow-hidden">
          Loading...
        </div>
      )}

      <RedocStandalone
        options={{ hideLoading: true }}
        onLoaded={() => setIsLoading(false)}
        spec={{
          swagger: "2.0",
          info: {
            title: "api.filtoor.xyz",
            version: "v1",
          },
          paths: {
            "/classify?address={address}": {
              get: {
                operationId: "classify?address={address}",
                summary: "Classify a cNFT as spam/ham",
                description:
                  "Returns the classification of a single cNFT image as spam or ham.",
                parameters: [
                  {
                    in: "query",
                    name: "address",
                    required: true,
                    description: "The on-chain address of the cNFT to classify",
                    type: "string",
                  },
                ],
                produces: ["application/json"],
                responses: {
                  "200": {
                    description: "200 response",
                    examples: {
                      "application/json": { classification: "spam" },
                    },
                  },
                },
              },
            },
          },

          consumes: ["application/json"],
        }}
      />
    </>
  );
}
