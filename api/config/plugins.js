module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-ipfs-storage",
      providerOptions: {
        defaultStorage: "pinata",
        pinata: {
          jwt: env("PINATA_JWT"),
        },
      },
    },
  },
});
