import Head from "next/head";
import Input from "../components/Input";
import LeftSidebar from "../components/LeftSidebar";
import Posts from "../components/Posts";
import RightSidebar from "../components/RightSidebar";
import Stories from "../components/Stories";
export default function App({ user }) {
  return (
    <>
      <Head>
        <title>Facebook</title>
      </Head>
      <div className="w-full h-full flex mt-16 relative">
        <LeftSidebar user={user} />
        {/* middle posts */}
        <div className="w-9/12 xxs:w-10/12 h-full  sm:w-9/12 md:w-[600px] relative mx-auto flex flex-col items-center  space-y-5 px-5">
          <Stories user={user} />
          <Input user={user} />
          <Posts />
        </div>
        {/* right sidebar */}
        <RightSidebar user={user} />
      </div>
    </>
  )
}
