import Link from "next/link";


export default function Lateralheader() {
  return (
    <section className="border border  " >
            <div>
            <Link href={''}>
                <h1>Streamline. </h1>
                </Link>
            </div>
            <div>
            <Link href={'/'}> Home</Link>
            </div>
            <div>
            <Link href={'/'}> Search</Link>
            </div>
            


    </section>
  )
}