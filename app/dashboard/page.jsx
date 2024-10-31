import Link from "next/link";

export default  function Page(){
    return(
        <main className="p-10">
            <h1>
                Comrade
            </h1>
            <Link href={"/admin"}>Admin Panel</Link>
        </main>
    )
}