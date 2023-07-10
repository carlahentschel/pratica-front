import { Booking } from "@/globalRedux/modules/bookingsSlice";

interface CardProps{
  booking: Booking
}

export default function Card({booking}:CardProps){
    return(
        <div>
          <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">


  <div className="mt-2">
    <dl>
      <div>
        <dt className="sr-only">Morador e Nº Apt</dt>

        <dd className="font-medium">{booking.numApto}-{booking.name}</dd>
      </div>

    </dl>

    <div className="mt-6 flex items-center gap-8 text-xs">
      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
       
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-700" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" 
          d="M21 14c0 3.771 0 5.657-1.172 6.828C18.657 22 16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172C3 19.657 3 17.771 3 14v-4c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172C21 4.343 21 6.229 21 10">
            </path><path d="M17 14a5 5 0 1 1-10 0a5 5 0 0 1 10 0Z"></path>
            <path strokeLinecap="round" d="M16 6h-4M9 6H8m-.766 8.362c.855.428 1.833 1.159 3.49 1.457c2.362.426 2.126-1.648 4.488-1.223c.72.13 1.206.35 1.55.585"></path>
            </g></svg>
        <div className="mt-1.5 sm:mt-0">

          <p className="text-gray-500">Nº Máquina</p>

          <p className="font-medium">{booking.machine}</p>
        </div>
      </div>

      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-700" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-1.875 0-3.513-.713t-2.85-1.924q-1.212-1.213-1.924-2.85T3 13q0-1.875.713-3.513t1.924-2.85q1.213-1.212 2.85-1.924T12 4q1.875 0 3.513.713t2.85 1.925q1.212 1.212 1.925 2.85T21 13q0 1.875-.713 3.513t-1.924 2.85q-1.213 1.212-2.85 1.925T12 22Zm0-9Zm2.8 4.2l1.4-1.4l-3.2-3.2V8h-2v5.4l3.8 3.8ZM5.6 2.35L7 3.75L2.75 8l-1.4-1.4L5.6 2.35Zm12.8 0l4.25 4.25l-1.4 1.4L17 3.75l1.4-1.4ZM12 20q2.925 0 4.963-2.038T19 13q0-2.925-2.038-4.963T12 6Q9.075 6 7.037 8.038T5 13q0 2.925 2.038 4.963T12 20Z"></path></svg>

        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Horário de Reserva</p>

          <p className="font-medium">{booking.hour}</p>
        </div>
      </div>

      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        {'' ? (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-700" viewBox="0 0 24 24"><path fill="currentColor" d="M1 13.75v-2h4v2H1ZM6.35 8.5L3.5 5.675l1.425-1.4L7.75 7.1l-1.4 1.4ZM6 19q-.525 0-.887-.363t-.363-.887q0-.525.363-.888T6 16.5q.525 0 .888.363t.362.887q0 .525-.363.888T6 19Zm1-5.25v-1q0-2.075 1.463-3.538T12 7.75q2.075 0 3.538 1.463T17 12.75v1h-2v-1q0-1.25-.875-2.125T12 9.75q-1.25 0-2.125.875T9 12.75v1H7ZM9 23q-.525 0-.888-.363t-.362-.887q0-.525.363-.888T9 20.5q.525 0 .888.363t.362.887q0 .525-.363.888T9 23Zm3-4q-.525 0-.888-.363t-.362-.887q0-.525.363-.888T12 16.5q.525 0 .888.363t.362.887q0 .525-.363.888T12 19ZM11 5.75v-4h2v4h-2ZM15 23q-.525 0-.888-.363t-.362-.887q0-.525.363-.888T15 20.5q.525 0 .888.363t.362.887q0 .525-.363.888T15 23Zm2.65-14.5l-1.425-1.4l2.85-2.825l1.4 1.4L17.65 8.5ZM18 19q-.525 0-.888-.363t-.362-.887q0-.525.363-.888T18 16.5q.525 0 .888.363t.362.887q0 .525-.363.888T18 19Zm1-5.25v-2h4v2h-4Zm-7 0Z"></path></svg>) 
        : 
        (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-700" viewBox="0 0 24 24"><path fill="currentColor" d="M12 5q-.425 0-.713-.288T11 4V2q0-.425.288-.713T12 1q.425 0 .713.288T13 2v2q0 .425-.288.713T12 5Zm4.95 2.05q-.275-.275-.275-.687t.275-.713l1.4-1.425q.3-.3.712-.3t.713.3q.275.275.275.7t-.275.7L18.35 7.05q-.275.275-.7.275t-.7-.275ZM20 13q-.425 0-.713-.288T19 12q0-.425.288-.713T20 11h2q.425 0 .713.288T23 12q0 .425-.288.713T22 13h-2Zm-8 10q-.425 0-.713-.288T11 22v-2q0-.425.288-.713T12 19q.425 0 .713.288T13 20v2q0 .425-.288.713T12 23ZM5.65 7.05l-1.425-1.4q-.3-.3-.3-.725t.3-.7q.275-.275.7-.275t.7.275L7.05 5.65q.275.275.275.7t-.275.7q-.3.275-.7.275t-.7-.275Zm12.7 12.725l-1.4-1.425q-.275-.3-.275-.713t.275-.687q.275-.275.688-.275t.712.275l1.425 1.4q.3.275.288.7t-.288.725q-.3.3-.725.3t-.7-.3ZM2 13q-.425 0-.713-.288T1 12q0-.425.288-.713T2 11h2q.425 0 .713.288T5 12q0 .425-.288.713T4 13H2Zm2.225 6.775q-.275-.275-.275-.7t.275-.7L5.65 16.95q.275-.275.687-.275t.713.275q.3.3.3.713t-.3.712l-1.4 1.4q-.3.3-.725.3t-.7-.3ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Zm0-2q1.65 0 2.825-1.175T16 12q0-1.65-1.175-2.825T12 8q-1.65 0-2.825 1.175T8 12q0 1.65 1.175 2.825T12 16Zm0-4Z"></path></svg>)}

        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Dia Reservado</p>

          <p className="font-medium"> {Intl.DateTimeFormat("pt-br",{day:'2-digit', month:'2-digit', weekday:'long'}).format(booking.date)}</p>
        </div>
      </div>
    </div>
  </div>
</a>
        </div>
    )
}