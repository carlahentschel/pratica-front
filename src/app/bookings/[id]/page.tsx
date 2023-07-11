import Image from "next/image";

export default async function BookingDetail(props: any) {
  const data = await fetch("https://randomuser.me/api?results=10");
  const { results: users } = await data.json();
  console.log(users);

  return (
    <div className="container mx-auto h-full bg-slate-200">
      <p>id: {props.params.id}</p>

      <Image
        src={users[0].picture.large}
        alt="pessoa"
        height={300}
        width={300}
        priority
      />

      <p>{users[0].name.first}</p>
    </div>
  );
}
