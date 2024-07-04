import React from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NewTour from "@/components/NewTour";

interface NewTourPageProps {}

const NewTourPage = ({}: NewTourPageProps) => {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NewTour />
    </HydrationBoundary>
  );
};

export default NewTourPage;
