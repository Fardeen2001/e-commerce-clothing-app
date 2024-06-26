import Card from "@/Components/Card";
const GetDataFunction = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/tshirts`, {
      next: { revalidate: 0 },
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("invalid while fetching");
    }
    return await res.json();
  } catch (error) {
    console.error(error.message);
  }
};

const Tshirts = async () => {
  const Data = await GetDataFunction();

  return <Card Data={Data} />;
};

export default Tshirts;
