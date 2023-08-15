// "use client"

// import BackToHomeLink from "@/components/BackToHome"
// import {useParams} from 'next/navigation'
import Link from 'next/link'

export default function Page(props) {
    // const router = useRouter()
    // const params = useParams()

    console.log("logs", {props});

    return (
        <>
            <h1>This is [id].js</h1>
            <pre>{JSON.stringify(props, null, 2)}</pre>
            <div>
              <Link href="/articles">Go to articles</Link>
            </div>
        </>
    )
}

export async function generateStaticParams() {
  const data = await fetch(`https://restcountries.com/v2/name/uk`);
  const countries = await data.json();

  console.log("countries", countries);

  return countries.map((c) => ({
    id: c.alpha2Code
  }));
}
