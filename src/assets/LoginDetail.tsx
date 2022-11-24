const LoginDetail = async (creds: {
  username: string;
  password: string;
}): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (creds.username === "GA" && creds.password === "dawood") {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
};

export default LoginDetail;
