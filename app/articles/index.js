import {useState} from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import BackToHomeLink from "@/components/BackToHome"

export default function Article(props) {
  const [count, setCount] = useState(0)
  const router = useRouter()

  console.log("props", props);
  console.log("router", router);

  return (
    <>
      <h1>This is index.js</h1>
      <h3>id {router.query.id}</h3>
      <BackToHomeLink />

      <div>
        Counter - {count}
        <button class="w-24 m-2 bg-amber-200 rounded" onClick={() => setCount(val => ++val)}>+</button>
        <button class="w-24 bg-amber-200 rounded" onClick={() => setCount(val => --val)}>-</button>
      </div>

      <Link href="./articles/1">Article 1</Link>
    </>
  )
}
