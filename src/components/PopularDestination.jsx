import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const PopularDestination = () => (
  <div className="my-36 relative ">
    {/* Container */}
    <div className="max-w-screen-xl mx-auto px-4">
      {/* Layout */}
      <div className="">
        {/* Title */}
        <div className="mb-20">
          <h2 className="text-5xl text-black">Popular Destinations</h2>
          <div className=" border-b-4 border-orange-400 sm:w-[330px]"></div>
          <p className="text-gray-300 mt-4 text-lg md:text-2xl">
            Most popular destinations around the world, from historical places
            to natural wonders.
          </p>
        </div>
        {/* Info */}
        <div className="">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative pb-4">
              <img
                className="rounded-lg lg:h-[400px]"
                src="https://s3-alpha-sig.figma.com/img/4459/b16d/92fe37f01fbd24ba59e39ee98303f766?Expires=1673827200&Signature=EfVaFYBCeUKt4zrkHAN6KDWdrtS055xLFjFyjA~b-XyqlFt9~60BKNuub5tRfWy2XbOCwWWIRpMyuA1~~aFJyp0hs4JOfX1srd6N9pd3OJK~sQGPAwTUH2g6xRcCrrSDOVsw-0nE6PzbKO0ZlJlZie4fyUWkYLPusbyPh7pe8AF1NX-oTTNKbrcnEjd44WiYdgFvwCYxIRB91OfaN1ZDjZw4nm2-~gRxag~PNZwx1jv033Towka05gPk4NKteraMZ5hNXuzN2OJWfw~v2nxYW9ELan9hJm72QXaAfYnFvURgj8YMQ-48Ryh0vn~mu1e10xJKmMZrlZMR-xYUpeZMYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
              <div className="absolute bottom-10 left-10 text-lg text-white">
                <h5>Monument of Berlin</h5>
                <div className="flex items-center">
                  <CiLocationOn />
                  <p>Berlin, Germany</p>
                </div>
              </div>
            </div>
            <div className="relative pb-4">
              <img
                className="rounded-lg lg:h-[400px]"
                src="https://s3-alpha-sig.figma.com/img/8b6c/a606/57afa880580875c7a29e7ffc92950e01?Expires=1673827200&Signature=d4jEt20aO778tkXJhuVGUDucEeG6njEFdJl-H7~cMXhBYmAn0-PPHIxOsgDR6bj52ijLqflyH8cSYCZfzNVMs--tb8t98CGwCyDsqasV0lZ86NT7oyMbpVai57HpwLMRuJicaox9AY~NsHNkP55eKhoN4pZDFOLwsZImZGGRiCLTekNxDhzznvJGcCZbLEwguMaTJL2cqXXwiQ3q3rJvneSDIy94Ev2cyDG2aEIz3m4mbi5rqqi8buL5slkjDjSx1fEiuDVW-nVxjElbU3u6htwFXEpBtqkRvZgLFUzzcR4ZEseGpTeVso6GVtcASRbQce5JirAoDL0uDRbjIEnt2Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
              <div className="absolute bottom-10 left-10 text-lg text-white">
                <h5>Millennium Bridge</h5>
                <div className="flex items-center">
                  <CiLocationOn />
                  <p>London, United Kingdom</p>
                </div>
              </div>
            </div>
            <div className="relative pb-4">
              <img
                className="rounded-lg lg:h-[400px]"
                src="https://s3-alpha-sig.figma.com/img/f013/c081/955ac5e5616c2d02f606d78ccf514d61?Expires=1673827200&Signature=G42QbRz~qnmSNunkkfJkFXlOnRoLlCwgndAulgJMcvXCZxNtC26xS3lOIErnb8WTePcmwKN5WNP2FbP7Uh7RNH3LpapGZU-iNM1iHJsw7F-y1QwQ5LoBTHUKySWEyTzvJFLuecU6Kb2cHikT8x9EtxcrC4q8eiaIz7ckNkqO6P3nqV3Kj1UQdXiwQKSn5ypwZouY3-js5csgti2foxz4hI~Ro33ezhdyv2Wflyyn-MwVw3cgtxm36PuGEXkl~lWCqO9Hl26JCka10u2FRcx0jwI4jCPrVWs-3YzdzzWctT-LcPXs0EtKFwVK4mSBOAHBt5xNZnDAmBJGeo~adRlHgw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
              <div className="absolute bottom-10 left-10 text-lg text-white">
                <h5>Rialto Bridge</h5>
                <div className="flex items-center">
                  <CiLocationOn />
                  <p>Venice, Italy</p>
                </div>
              </div>
            </div>
            <div className="relative pb-4">
              <img
                className="rounded-lg lg:h-[400px]"
                src="https://s3-alpha-sig.figma.com/img/6fc8/8ed3/ed530747d1fcd6fa25ce5e5c32d65fc1?Expires=1673827200&Signature=IUMFpjaK6TSODiFpCyBWQn~2EPI8MSXNnpTMc0~WL9ztb3-dUBfjv-GaGv4vse0833jh-Gy62ZUldVHYT8JDXvz909nGN32z15e9APS7fmOJv7OSh2uncmLOcXbRRwYGbqX-HcUet7PoAPaXBmMyQxF6Z4RI2~5lvmr-aIaagWQnNyx-5OiDITwRLr5ljS4yS5xEX8~AfaA0qUdR8YdEFrZLgCbtYGEGWRIB7LziOZt4sqqTq6f3IkMTdufQeeFgzYolKu27f16FYK~S3tsk4vBADEp7eGyuh09QdRSF3Y6HV5xqye0lQGZxIdTSycglyGEpvoI6seQzofAWCTM4Mw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
              />
              <div className="absolute bottom-10 left-10 text-lg text-white">
                <h5>Sea of Orange Tiles</h5>
                <div className="flex items-center">
                  <CiLocationOn />
                  <p>Lisbon, Portugal</p>
                </div>
              </div>
            </div>
          </div>
          {/* Button */}
          <div className="mt-20 flex gap-6 items-center justify-center text-white md:absolute top-0 right-36">
            <button className="bg-black p-4 rounded-md">
              <IoIosArrowBack />
            </button>
            <button className="bg-orange-400 p-4 rounded-md">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PopularDestination;
