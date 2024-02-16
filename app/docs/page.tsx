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
            "/classify": {
              post: {
                operationId: "classify",
                summary: "Classify NFTs as spam/ham",
                description: "Classifies NFTs as either spam or ham.",
                requestBody: {
                  content: {
                    "application/json": {
                      schema: {
                        type: "object",
                        properties: {
                          ids: {
                            type: "string[]",
                            description: "The ids of the cNFTs to classify",
                            example: [
                              "5hwBHvZS1QHrRRUmiWqJEKxGM8or88WGX8fbzyYxqZxS",
                              "8u4TKYfDYbuXY3HKZQxfxhgEfKBD3gvmWe9q5XAuYYf1",
                            ],
                          },
                        },
                      },
                    },
                  },
                },
                produces: ["application/json"],
                responses: {
                  "200": {
                    description: "200 response",
                    examples: {
                      "application/json": ["spam", "ham"],
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
