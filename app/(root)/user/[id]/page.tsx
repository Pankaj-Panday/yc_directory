import { auth } from "@/auth";
import { Skeleton } from "@/components/ui/skeleton";
import UserStartups from "@/components/UserStartups";
import { cn } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { AUTHOR_BY_ID_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";


export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const session = await auth();

  const user = await client.fetch(AUTHOR_BY_ID_QUERY, {id});
  if(!user) return notFound();
  return (
    <>
      <section className="profile_container">
        <div className="profile_card">
          <div className="profile_title">
            <h3 className="uppercase text-center text-24-black line-clamp-1">{user?.name}</h3>
          </div>

          <Image src={user?.image} alt={user?.name} width={220} height={220} className="profile_image" />

          <p className="text-30-extrabold mt-7 text-center">@{user?.username}</p>
          <p className="text-center mt-1 text-14-normal">{user?.bio}</p>
        </div>

        <div className="flex flex-col flex-1 gap-5 lg:-mt-5">
          <p className="text-30-bold">{session?.id === id ? "Your" : "All"} Startups</p>
          <ul className="card_grid-sm">
            <Suspense fallback={<StartupCardSkeleton />}>
              <UserStartups id={id} />
            </Suspense>
          </ul>
        </div>
      </section>
    </>
  );
}

export const StartupCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((i: number) => (<li key={cn("skeleton", i)}>
      <Skeleton className="startup-card_skeleton" />
    </li>))}
  </>
)

export default page