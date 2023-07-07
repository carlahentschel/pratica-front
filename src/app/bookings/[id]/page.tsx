import { useRouter } from "next/router";

export default function BookingDetail(props: any) {
    

    return (
        <p>id: {props.params.id}</p>
    )
}