import Link from "next/link";


export default function Lateralheader() {
  return (
    <section className="border border-border h-screen w-1/6  flex flex-col items-center gap-4 text-secondary-foreground
      " >
            <div className=" h-20 flex flex-col items-center justify-center " >
            <Link href={''}>
                <h1>Streamline. </h1>
                </Link>
            </div>
            <div>
                <div>

                </div>
            <Link href={'/'}> Home</Link>
            </div>
            <div>
                <div>

                </div>
            <Link href={'/'}> Search</Link>
            </div>
            


    </section>
  )
}