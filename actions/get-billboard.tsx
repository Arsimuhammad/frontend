import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getLatestBillboard = async (): Promise<Billboard> => {
  const res = await fetch(URL);
  // console.log("asdassadd", res);
  const data = await res.json();
  const latestBillboard = data[0]; // Get the latest billboard from the array
  // console.log("latestBillboard", latestBillboard)
  return latestBillboard;
};

export default getLatestBillboard;