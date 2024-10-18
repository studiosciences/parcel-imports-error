module.exports = {
  sundeck: {
    output: {
      mode: "tags-split",
      target: "src/api/generated",
      schemas: "src/api/generated/models",
      client: "react-query",
      mock: false,
      urlEncodeParameters: true,
      override: {
        mutator: {
          path: "src/api/callAPI.ts",
          name: "callAPI",
        },
        query: {
          useQuery: true,
          signal: false,
        },
      },
    },
    hooks: {
      // By default, prettier does not formated files that are ignored by git. This runs prettier only using the .prettierignore
      afterAllFilesWrite:
        "yarn prettier --write --ignore-path ./.prettierignore",
    },
    input: {
      target: "../../openapi/support/swagger.yaml",
    },
  },
};
