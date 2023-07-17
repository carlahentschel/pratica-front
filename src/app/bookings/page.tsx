"use client"
import { useAppSelector } from "@/globalRedux/hooks";
import Card from "./card";
import { selectAll } from "@/globalRedux/modules/bookingsSlice";

export default function Bookings() {
  const bookings = useAppSelector(selectAll)
  return (
    <div className="grid grid-cols-1 md:grid-cols-[repeat(2,_minmax(420px,_1fr))] lg:grid-cols-3 gap-4">
      {bookings.map((item) => (
        <Card key={item.id} booking={item}></Card>
      ))}
    </div>
  );
}
