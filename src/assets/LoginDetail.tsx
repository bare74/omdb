const LoginDetail = async (creds: {
  username: string;
  password: string;
}): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (creds.username === "admin" && creds.password === "admin") {
        resolve();
        localStorage.setItem("user", JSON.stringify(creds.username));
      } else {
        reject();
      }
    }, 1000);
  });
};

export default LoginDetail;
