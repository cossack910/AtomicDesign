export const TestData = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `test1${val}`,
    image: "https://source.unsplash.com/Sg3XwuEpybU",
    email: "aaa@aaa.com",
    phone: "090-8888-7777",
    company: { name: "aaaaa" },
    website: "test@kaisya.com",
  };
});

export default TestData;
