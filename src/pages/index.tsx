import Head from "next/head";
import ChatInterface from "@/components/chat/ChatInterface";
import { APP_CONSTANTS } from "@/lib/utils/constants";

export default function Home() {
  return (
    <>
      <Head>
        <title>{APP_CONSTANTS.PAGE_TITLE}</title>
        <meta name="description" content={APP_CONSTANTS.PAGE_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ChatInterface />
      </main>
    </>
  );
}
