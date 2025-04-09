export default ({ env }) => ({
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: env("S3_ACCESS_KEY"),
            secretAccessKey: env("S3_SECRET_KEY"),
          },
          region: env("S3_REGION"),
          endpoint: env("S3_ENDPOINT"),
          params: {
            Bucket: env("S3_BUCKET_NAME"),
          },
        },
      },
      breakpoints: [480, 1024, 1920],
    },
  },
});
