"use client";
import { ReactNode, useEffect, useState } from "react";

export default function Hydration({ children }: { children: ReactNode }) {
  const [isHydrdated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <>
      {isHydrdated ? (
        <>{children}</>
      ) : (
        <div className="h-screen flex items-center justify-center mx-0">
          <h1 className="text-3xl font-bold text-primary">Loading...</h1>
        </div>
      )}
    </>
  );
}
