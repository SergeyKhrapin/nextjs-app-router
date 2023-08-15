"use client"
// import BackToHomeLink from "@/components/BackToHome"
import {useRouter, useParams} from 'next/navigation'

export default function Page(props) {
    const router = useRouter()
    const params = useParams()

    console.log("logs", {props, router, params})

    return (
        <>
            <h1>This is [...id].js</h1>
            {/* <h3>id { router.query.id }</h3> */}
            {/* <BackToHomeLink /> */}
        </>
    )
}
