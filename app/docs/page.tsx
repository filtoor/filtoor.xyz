"use client";
import { RedocStandalone } from "redoc";

export default function Docs() {
  return (
    <RedocStandalone
      spec={{
        swagger: "2.0",
        info: {
          title: "api.filtoor.xyz",
          version: "v1",
        },
        paths: {
          "/classifyOne": {
            post: {
              operationId: "classifyOne",
              summary: "Classify a single cNFT",
              description:
                "Returns the classification of a single cNFT image as spam or ham.",
              requestBody: {
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        address: {
                          type: "string",
                          description: "On-chain address of the cNFT image",
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
                    "application/json": { classification: "spam" },
                  },
                },
              },
            },
          },
          "/classifyMany": {
            post: {
              operationId: "classifyMany",
              summary: "Classify many cNFTs",
              description:
                "Returns the classification of many cNFTs as an array.",
              requestBody: {
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        addresses: {
                          type: "array",
                          items: {
                            type: "string",
                          },
                          description: "On-chain addresses of the cNFT images",
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
                    "application/json": {
                      classifications: [
                        { address: "string", classification: "spam" },
                      ],
                    },
                  },
                },
              },
            },
          },
          "/classifyAccount": {
            post: {
              operationId: "classifyAccount",
              summary: "Classify all cNFTs in an account",
              description:
                "Returns the classification of all cNFTs in an account.",
              requestBody: {
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        address: {
                          type: "string",
                          description: "On-chain address of the account.",
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
                    "application/json": {
                      classifications: [
                        { address: "string", classification: "spam" },
                      ],
                    },
                  },
                },
              },
            },
          },
        },

        consumes: ["application/json"],
      }}
    />
  );
}
