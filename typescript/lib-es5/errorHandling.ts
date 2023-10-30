interface Axios {
  get(): void;
}

// interface CustomError extends Error {
//   response?: {
//     data: any;
//   };
// }
interface CustomError {
  name: string;
  message: string;
  stack?: string;
  response?: {
    data: any;
  };
}

declare const axios: Axios;

(async () => {
  try {
    await axios.get();
  } catch (error: unknown) {
    console.error((error as CustomError).response?.data);
  }
})();
