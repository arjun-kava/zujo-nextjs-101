export default (req, res) => {
  res.status(200).json({
    user: {
      name: "Arjun Kava",
      designation: "co-founder at Zujo",
      linkedin: "https://www.linkedin.com/in/arjun-kava",
      twitter: "https://twitter.com/Arjun_Kava",
    },
  });
};
