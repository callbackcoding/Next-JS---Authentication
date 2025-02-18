import { useSession } from "next-auth/react";

export function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const { data: session, status } = useSession();
    console.log("Status: ", status);
    if (status === "loading") {
      return <p>Loading...</p>;
    }
    if (session) {
      return <Component {...props} />;
    }
    return <p className="text-white text-2xl">Error Page</p>; // or any custom error page
  };
}
