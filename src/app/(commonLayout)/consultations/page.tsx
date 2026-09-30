import { dehydrate, HydrationBoundary, noop, QueryClient } from "@tanstack/react-query";
import { getDoctors } from "./_action";
import DoctorList from "@/components/modules/consultation/DoctorLists";

const ConsultationsPage = async() => {

    const queryClient = new QueryClient()

  await queryClient
    .query({
      queryKey: ['doctors'],
      queryFn: getDoctors,
    })
    .catch(noop)
    return (
    // Neat! Serialization is now as easy as passing props.
    // HydrationBoundary is a Client Component, so hydration will happen there.
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DoctorList />
    </HydrationBoundary>
  )
}

export default ConsultationsPage;