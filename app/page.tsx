import Image from "next/image";
import EmptyState from "./components/EmptyState";
import getListings from "@/app/actions/getListings";
import ListingCards from "./Listings/ListingCards";
import getCurrentUser from "./actions/getCurrentUsers";

export default async function Home() {
  const isEmpty = true;
  const Listing = await getListings();
  const currentUser = await getCurrentUser();

  if (Listing.length === 0) {
    return <EmptyState showReset />;
  }
  return (
    <div>
      <div className="sm:pl-10 mx-5 sm:mx-0 pt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {Listing.map((data) => {
            return (
              <ListingCards
                currentUser={currentUser}
                key={data.id}
                listing={data}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
