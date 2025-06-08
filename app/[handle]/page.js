import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import NotFound from "../not-found";

export default async function Page({ params }) {
  const { handle } = await params;
  const client = await clientPromise;
  const db = client.db("linktree");
  const collection = db.collection("links");

  const item = await collection.findOne({ handle: handle });
  if (!item) {
    return NotFound();
  }

  // const item2 = {
  //   _id: {
  //     $oid: "6843f33115b4bea6b23d8871",
  //   },
  //   links: [
  //     {
  //       link: "https://portfolio-react-sanjay.vercel.app/",
  //       linktext: "Portfolio",
  //     },
  //     {
  //       link: "https://github.com/Sanjaykanwasi",
  //       linktext: "Github",
  //     },
  //   ],
  //   handle: "codewithsanjay",
  //   pic: "https://yt3.ggpht.com/yti/ANjgQV8zJiWJHsQfIPGISJYaXZ95AFtBXxRqCB93xyw0tP-1Jb0=s720-c-k-c0x00ffffff-no-rj",
  // };

  return (
    <div className="flex min-h-screen bg-purple-300 justify-center items-start py-10">
      <Link href={"/"}>
        <img
          className="h-8 top-10 left-20 cursor-pointer fixed"
          src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
          alt=""
        />
      </Link>
      {item && (
        <div className="photo flex justify-center flex-col items-center gap-4">
          <img className="h-50 rounded-full" src={item.pic} alt="Img" />
          <span className="font-bold text-xl">@{item.handle}</span>
          <span className="desc w-80 text-center">{item.desc}</span>
          <div className="links">
            {item.links.map((item, index) => {
              return (
                <Link key={index} target="_blank" href={item.link}>
                  <div className="py-4 px-2 bg-white shadow-lg rounded-md my-3 min-w-lg flex justify-center">
                    {item.linktext}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
