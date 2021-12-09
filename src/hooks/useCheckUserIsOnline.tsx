import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/userAuth";

interface useCheckUserIsOnlineProps {
  redirectTo: string;
  checkUserStatusType: "ONLINE" | "OFFLINE";
}

export const useCheckUserIsOnline = ({
  redirectTo,
  checkUserStatusType,
}: useCheckUserIsOnlineProps) => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (checkUserStatusType === "ONLINE") {
      if (!user) {
        router.push(`${redirectTo}`);
      }
    }
    if (checkUserStatusType === "OFFLINE") {
      if (user) {
        router.push(`${redirectTo}`);
      }
    }
  }, [user]);

  return { user };
};
