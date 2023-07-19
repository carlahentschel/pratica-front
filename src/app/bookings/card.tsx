import IconClock from "@/components/icons/icon_clock";
import IconMachine from "@/components/icons/icon_machine";
import IconSun from "@/components/icons/icon_sun";
import IconSunRising from "@/components/icons/icon_sun_rising";
import { Booking } from "@/globalRedux/modules/bookingsSlice";
import Link from "next/link";

interface CardProps {
  booking: Booking;
}

export default function Card({ booking }: CardProps) {
  return (
    <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100 bg-white" >
      <Link
        href={`/bookings/${booking.id}`}
      >
        <div className="mt-2">
          <dl>
            <div>
              <dt className="sr-only">Morador e Nº Apt</dt>

              <dd className="font-medium">
                {booking.numApto}-{booking.name}
              </dd>
            </div>
          </dl>

          <div className="mt-6 flex items-center gap-8 text-xs">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <IconMachine className="h-6 w-6 text-indigo-700"/>
              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Nº Máquina</p>

                <p className="font-medium">{booking.machine}</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <IconClock className="h-6 w-6 text-indigo-700"/>
              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Horário de Reserva</p>

                <p className="font-medium">{booking.hour}</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              {"" ? (
                <IconSunRising className="h-6 w-6 text-indigo-700"/>
              ) : (
                <IconSun className="h-6 w-6 text-indigo-700" />
              )}

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Dia Reservado</p>

                <p className="font-medium">
                  {" "}
                  {Intl.DateTimeFormat("pt-br", {
                    day: "2-digit",
                    month: "2-digit",
                    weekday: "long",
                  }).format(booking.date)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
