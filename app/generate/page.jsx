// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { ToastContainer, toast } from "react-toastify";
// import { useSearchParams } from "next/navigation";

// const Generate = () => {
//   const searchParams = useSearchParams();
//   const [links, setLinks] = useState([{ link: "", linktext: "" }]);
//   const [handle, sethandle] = useState(searchParams.get("handle"));
//   const [pic, setpic] = useState("");
//   const [desc, setdesc] = useState("");

//   const handleChange = (index, link, linktext) => {
//     setLinks((initialLinks) => {
//       return initialLinks.map((item, i) => {
//         if (i == index) {
//           return {
//             link,
//             linktext,
//           };
//         } else {
//           return item;
//         }
//       });
//     });
//   };

//   const addLink = () => {
//     setLinks(links.concat([{ link: "", linktext: "" }]));
//   };

//   const submitLinks = async () => {
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     const raw = JSON.stringify({
//       links: links,
//       handle: handle,
//       pic: pic,
//       desc: desc,
//     });

//     console.log(raw);

//     const requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: raw,
//       redirect: "follow",
//     };

//     const r = await fetch("http://localhost:3000/api/add", requestOptions);
//     const result = await r.json();
//     if (result.success) {
//       toast.success(result.message);
//       setLinks([]);
//       setpic("");
//       sethandle("");
//     } else {
//       toast.error(result.message);
//     }
//   };

//   return (
//     <>
//       <Link href={"/"}>
//         <img
//           className="h-8 top-10 left-20 cursor-pointer fixed"
//           src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
//           alt=""
//         />
//       </Link>
//       <ToastContainer />
//       <div className="bg-pink-100 min-h-screen grid grid-cols-2">
//         <div className="col1 flex flex-col justify-center items-center">
//           <div className="flex flex-col gap-5 my-8">
//             <h1 className="font-bold text-5xl my-10">Create your LinkTree</h1>
//             <div className="item">
//               <h2 className="font-semibold text-2xl">
//                 Step 1: Claim your handle
//               </h2>
//               <div className="mx-4">
//                 <input
//                   className="px-4 mx-2 py-2 my-2 focus:outline-pink-500 rounded-3xl bg-white"
//                   value={handle || ""}
//                   onChange={(e) => {
//                     sethandle(e.target.value);
//                   }}
//                   type="text"
//                   placeholder="Choose a handle"
//                 />
//               </div>
//             </div>
//             <div className="item">
//               <h2 className="font-semibold text-2xl">Step 2: Add your links</h2>
//               {links &&
//                 links.map((item, index) => {
//                   return (
//                     <div key={index} className="mx-4">
//                       <input
//                         value={item.linktext || ""}
//                         onChange={(e) => {
//                           handleChange(index, item.link, e.target.value);
//                         }}
//                         className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-3xl bg-white"
//                         type="text"
//                         placeholder="Enter Link text"
//                       />
//                       <input
//                         value={item.link || ""}
//                         onChange={(e) => {
//                           handleChange(index, e.target.value, item.linktext);
//                         }}
//                         className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-3xl bg-white"
//                         type="text"
//                         placeholder="Enter Link"
//                       />
//                     </div>
//                   );
//                 })}
//               <button
//                 onClick={() => addLink()}
//                 className="py-2 mx-7 mt-4 p-5 bg-black cursor-pointer text-white font-bold rounded-3xl"
//               >
//                 + Add Link
//               </button>
//             </div>

//             <div className="item">
//               <h2 className="font-semibold text-2xl">
//                 Step 3: Add Picture and Description
//               </h2>
//               <div className="mx-4 flex flex-col">
//                 <input
//                   value={pic || ""}
//                   onChange={(e) => {
//                     setpic(e.target.value);
//                   }}
//                   className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-3xl bg-white"
//                   type="text"
//                   placeholder="Add Image link"
//                 />
//                 <input
//                   value={desc || ""}
//                   onChange={(e) => {
//                     setdesc(e.target.value);
//                   }}
//                   className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-3xl bg-white"
//                   type="text"
//                   placeholder="Enter Description"
//                 />
//                 <button
//                   onClick={() => {
//                     submitLinks();
//                   }}
//                   disabled={
//                     pic == "" || handle == "" || links[0].linktext == ""
//                   }
//                   className="py-2 w-fit my-3 mx-2 p-5 bg-black cursor-pointer text-white font-bold rounded-3xl  disabled:cursor-not-allowed disabled:opacity-70"
//                 >
//                   Create Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col2 w-full h-screen">
//           <img
//             className="h-full w-full object-cover"
//             src="/ana1.jpg"
//             alt="ana"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Generate;

"use client";
import React, { useState, Suspense } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { useSearchParams } from "next/navigation";

// Separate component for the main functionality
const GenerateContent = () => {
  const searchParams = useSearchParams();
  const [links, setLinks] = useState([{ link: "", linktext: "" }]);
  const [handle, sethandle] = useState(searchParams.get("handle"));
  const [pic, setpic] = useState("");
  const [desc, setdesc] = useState("");

  const handleChange = (index, link, linktext) => {
    setLinks((initialLinks) => {
      return initialLinks.map((item, i) => {
        if (i == index) {
          return {
            link,
            linktext,
          };
        } else {
          return item;
        }
      });
    });
  };

  const addLink = () => {
    setLinks(links.concat([{ link: "", linktext: "" }]));
  };

  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      links: links,
      handle: handle,
      pic: pic,
      desc: desc,
    });

    console.log(raw);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    // Use relative URL instead of localhost for production
    const r = await fetch("/api/add", requestOptions);
    const result = await r.json();
    if (result.success) {
      toast.success(result.message);
      setLinks([]);
      setpic("");
      sethandle("");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <>
      <Link href={"/"}>
        <img
          className="h-8 top-10 left-20 cursor-pointer fixed"
          src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg"
          alt=""
        />
      </Link>
      <ToastContainer />
      <div className="bg-pink-100 min-h-screen grid grid-cols-2">
        <div className="col1 flex flex-col justify-center items-center">
          <div className="flex flex-col gap-5 my-8">
            <h1 className="font-bold text-5xl my-10">Create your LinkTree</h1>
            <div className="item">
              <h2 className="font-semibold text-2xl">
                Step 1: Claim your handle
              </h2>
              <div className="mx-4">
                <input
                  className="px-4 mx-2 py-2 my-2 focus:outline-pink-500 rounded-3xl bg-white"
                  value={handle || ""}
                  onChange={(e) => {
                    sethandle(e.target.value);
                  }}
                  type="text"
                  placeholder="Choose a handle"
                />
              </div>
            </div>
            <div className="item">
              <h2 className="font-semibold text-2xl">Step 2: Add your links</h2>
              {links &&
                links.map((item, index) => {
                  return (
                    <div key={index} className="mx-4">
                      <input
                        value={item.linktext || ""}
                        onChange={(e) => {
                          handleChange(index, item.link, e.target.value);
                        }}
                        className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-3xl bg-white"
                        type="text"
                        placeholder="Enter Link text"
                      />
                      <input
                        value={item.link || ""}
                        onChange={(e) => {
                          handleChange(index, e.target.value, item.linktext);
                        }}
                        className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-3xl bg-white"
                        type="text"
                        placeholder="Enter Link"
                      />
                    </div>
                  );
                })}
              <button
                onClick={() => addLink()}
                className="py-2 mx-7 mt-4 p-5 bg-black cursor-pointer text-white font-bold rounded-3xl"
              >
                + Add Link
              </button>
            </div>

            <div className="item">
              <h2 className="font-semibold text-2xl">
                Step 3: Add Picture and Description
              </h2>
              <div className="mx-4 flex flex-col">
                <input
                  value={pic || ""}
                  onChange={(e) => {
                    setpic(e.target.value);
                  }}
                  className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-3xl bg-white"
                  type="text"
                  placeholder="Add Image link"
                />
                <input
                  value={desc || ""}
                  onChange={(e) => {
                    setdesc(e.target.value);
                  }}
                  className="px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-3xl bg-white"
                  type="text"
                  placeholder="Enter Description"
                />
                <button
                  onClick={() => {
                    submitLinks();
                  }}
                  disabled={
                    pic == "" || handle == "" || links[0].linktext == ""
                  }
                  className="py-2 w-fit my-3 mx-2 p-5 bg-black cursor-pointer text-white font-bold rounded-3xl  disabled:cursor-not-allowed disabled:opacity-70"
                >
                  Create Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col2 w-full h-screen">
          <img
            className="h-full w-full object-cover"
            src="/ana1.jpg"
            alt="ana"
          />
        </div>
      </div>
    </>
  );
};

// Loading component
const Loading = () => {
  return (
    <div className="bg-pink-100 min-h-screen flex items-center justify-center">
      <div className="text-2xl font-semibold text-pink-600">Loading...</div>
    </div>
  );
};

// Main component with Suspense boundary
const Generate = () => {
  return (
    <Suspense fallback={<Loading />}>
      <GenerateContent />
    </Suspense>
  );
};

export default Generate;
