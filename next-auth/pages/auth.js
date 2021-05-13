import { Router, useRouter } from "next/router";
import { getSession } from "next-auth/client";
import { useEffect, useState } from "react";
import AuthForm from "../components/auth/auth-form";
import { route } from "next/dist/next-server/server/router";

function AuthPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/");
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return <AuthForm />;
}

// export async function getServerSideProps(context) {
//   const session = await getSession({ req: context.req });
//   if (session) {
//     return {
//       redirect: {
//         destination: "/",
//         permanet: false,
//       },
//     };
//   }

//   return {
//     props: {
//       session,
//     },
//   };
// }

export default AuthPage;
