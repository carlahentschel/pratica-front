import Card from "./card";

export default function Bookings() {
  const bookings = [
    {
      date: new Date(),
      hour: "06:00 - 12:00",
      machine: "Machine 1",
      id: 1,
      numApto: "101",
      name: "Residente 1",
    },
    {
      date: new Date(),
      hour: "06:00 - 12:00",
      machine: "Machine 1",
      id: 2,
      numApto: "101",
      name: "Residente 1",
    },
    {
      date: new Date(),
      hour: "06:00 - 12:00",
      machine: "Machine 1",
      id: 3,
      numApto: "101",
      name: "Residente 1",
    },
    {
      date: new Date(2020, 3, 20),
      hour: "06:00 - 12:00",
      machine: "Machine 1",
      id: 4,
      numApto: "101",
      name: "Residente 1",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-[repeat(2,_minmax(420px,_1fr))] lg:grid-cols-3 gap-4">
      {bookings.map((item) => (
        <Card key={item.id} booking={item}></Card>
      ))}
    </div>
  );
}
