import Head from "next/head";

export default function Home(){

    return (
        <div className="bg-gray-100 p-4">
            <Head>
                <title>Confidentiality Policy for Pinterest API Access</title>
            </Head>
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded p-6 mt-6">
                <h1 className="text-xl font-bold mb-4">Confidentiality Policy for Access to Pinterest API</h1>
                <section className="mb-6">
                    <h2 className="font-semibold text-lg mb-2">Introduction</h2>
                    <p>This Confidentiality Policy governs the access and use of the Pinterest API provided by [Your Company/Name]. This policy is designed to ensure the privacy and security of the data accessed through the Pinterest API.</p>
                </section>
                {/* Repeat for other sections */}
                <section className="mb-6">
                    <h2 className="font-semibold text-lg mb-2">Data Access and Usage</h2>
                    {/* Content */}
                </section>
                <section className="mb-6">
                    <h2 className="font-semibold text-lg mb-2">Data Security</h2>
                    {/* Content */}
                </section>
                {/* ... add more sections as needed */}
            </div>
        </div>
    );
};
