import Head from "next/head";
import Navbar from "@/components/navbar/navbar";
import Subtitle from "@/tipography/subtitle/subtitle";
import Container from "@/container/container";

export default function Home() {
  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta
          name="description"
          content="DevSteam: A sua loja online de games"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Container>
          <div>
            <Subtitle> Promocões </Subtitle>
          </div>
          <div>
            <Subtitle> Meus jogos </Subtitle>
          </div>
        </Container>
      </div>
    </>
  );
}
