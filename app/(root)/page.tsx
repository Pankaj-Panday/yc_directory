import SearchForm from "../../components/SearchForm";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { auth } from "@/auth";
import { client } from "@/sanity/lib/client";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;
  const params = { search: query || null }
  const { data: posts } = await client.fetch(STARTUPS_QUERY, params, {
    next: { revalidate: 0 }, // or no-store if you're using fetch directly
  });

  const session = await auth();

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup, <br /> Connect with enterpreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">{query ? `Search results for "${query}"` : "All startups"}</p>

        <ul className="card_grid mt-7">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => <StartupCard key={post?._id} post={post} />)
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
