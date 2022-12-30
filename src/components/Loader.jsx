import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./moviecard/moviecard.css";

export default function Loader() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Skeleton className="movieblock" duration={1.5}/>
    </SkeletonTheme>

    // <Skeleton className='movieblock' />
  );
}
