import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function FourOhFour({}) {
  const [redirectSeconds, setRedirectSeconds] = useState(5);
  const router = useRouter();
  useEffect(() => {
    if (redirectSeconds == 0) {
      router.push('/');
      return;
    }

    setTimeout(() => {
      console.log(redirectSeconds);
      setRedirectSeconds((redirectSeconds) => redirectSeconds - 1);
    }, 1000);
  }, [redirectSeconds]);
  return (
    <Layout title="Page not found">
      <h1
        style={{
          height: "92vh",
          fontSize: "4em",
          textAlign: "center",
          lineHeight: "92vh",
        }}
      >
        This site doesn&apos;t exist. Redirecting in {redirectSeconds}!
      </h1>
    </Layout>
  );
}
