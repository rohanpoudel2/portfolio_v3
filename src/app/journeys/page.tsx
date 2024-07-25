import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import { SimpleLayout } from "@/components/SimpleLayout";

const TravelledLocation = () => {
  const TravelledLocationMap = dynamic(
    () => import("@/components/TravelledLocationsMap"),
    { ssr: false }
  );
  return (
    // and the stories behind each location (To add story feature)
    <SimpleLayout
      title="Mapping My Adventures"
      intro={
        <>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Discover the places I&apos;ve traveled to.
          </p>
          <hr className="border-zinc-400 my-5" />
          <ul className="space-y-5">
            <li className="bg-gray-50 dark:bg-zinc-800/50 px-4 rounded-xl">
              <div className="flex items-center justify-start gap-2">
                <Image
                  src="https://img.icons8.com/?size=100&id=15130&format=png&color=000000"
                  width={40}
                  height={40}
                  alt="Motorbike"
                />
                <span className="font-mono">:</span>
                <span className="font-mono text-sm text-zinc-600 dark:text-zinc-400">
                  Destinations I have explored on my motorbike.
                </span>
              </div>
            </li>
            <li className="bg-gray-50 dark:bg-zinc-800/50 px-4 rounded-xl">
              <div className="flex items-center justify-start gap-3">
                <Image
                  src="https://img.icons8.com/?size=100&id=36738&format=png&color=000000"
                  width={40}
                  height={40}
                  alt="Car"
                />
                <span className="font-mono">:</span>
                <span className="font-mono text-sm text-zinc-600 dark:text-zinc-400">
                  Destinations I have explored by car.
                </span>
              </div>
            </li>
            <li className="bg-gray-50 dark:bg-zinc-800/50 px-4 rounded-xl">
              <div className="flex items-center justify-start gap-3">
                <Image
                  src="https://img.icons8.com/?size=100&id=16958&format=png&color=000000"
                  width={40}
                  height={40}
                  alt="Car"
                />
                <span className="font-mono">:</span>
                <span className="font-mono text-sm text-zinc-600 dark:text-zinc-400">
                  Destinations I have trekked.
                </span>
              </div>
            </li>
          </ul>
        </>
      }
    >
      <TravelledLocationMap />
    </SimpleLayout>
  );
};

export default TravelledLocation;
