import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export const dynamic = 'force-dynamic'

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="mx-auto overflow-hidden mt-10 shadow-lg mb-2 bg-gray-900 shadow-lg border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6">
      <div className="">
        <div className="pt-16 p-5 pb-0 text-white text-right text-3xl bg-gray-800">
          2000 + 100
        </div>
        <div className="p-5 text-white text-right text-3xl bg-gray-800">
          = <span className="text-orange-500">2100</span>
        </div>

        <div className="flex items-stretch bg-gray-900 h-24 mb-4">
          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-gray-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              M+
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-gray-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              M-
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-gray-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              MR
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-gray-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              MC
            </div>
          </div>
        </div>

        <div className="flex items-stretch bg-gray-900 h-24">
          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-gray-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              %
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-gray-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              √
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-gray-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              ^
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-gray-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              /
            </div>
          </div>
        </div>

        <div className="flex items-stretch bg-gray-900 h-24">
          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-gray-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              7
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-gray-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              8
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-gray-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              9
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-gray-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              ×
            </div>
          </div>
        </div>

        <div className="flex items-stretch bg-gray-900 h-24">
          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-gray-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              4
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-gray-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              5
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-gray-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              6
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-gray-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              -
            </div>
          </div>
        </div>

        <div className="flex items-stretch bg-gray-900 h-24">
          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-gray-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              1
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-gray-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              2
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-gray-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              3
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-gray-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              +
            </div>
          </div>
        </div>

        <div className="flex items-stretch bg-gray-900 h-24 mb-4">
          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-gray-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              <svg
                height="21px"
                version="1.1"
                viewBox="0 0 20 21"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <desc />
                <defs />
                <g
                  fill="none"
                  fillRule="evenodd"
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                >
                  <g
                    fill="white"
                    id="Core"
                    opacity="0.9"
                    transform="translate(-464.000000, -254.000000)"
                  >
                    <g
                      id="history"
                      transform="translate(464.000000, 254.500000)"
                    >
                      <path
                        d="M10.5,0 C7,0 3.9,1.9 2.3,4.8 L0,2.5 L0,9 L6.5,9 L3.7,6.2 C5,3.7 7.5,2 10.5,2 C14.6,2 18,5.4 18,9.5 C18,13.6 14.6,17 10.5,17 C7.2,17 4.5,14.9 3.4,12 L1.3,12 C2.4,16 6.1,19 10.5,19 C15.8,19 20,14.7 20,9.5 C20,4.3 15.7,0 10.5,0 L10.5,0 Z M9,5 L9,10.1 L13.7,12.9 L14.5,11.6 L10.5,9.2 L10.5,5 L9,5 L9,5 Z"
                        id="Shape"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-gray-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              0
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg border-2 border-gray-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              .
            </div>
          </div>

          <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <div className="rounded-full h-20 w-20 flex items-center bg-orange-500 justify-center shadow-lg border-2 border-gray-700 hover:border-2 hover:border-gray-500 focus:outline-none">
              =
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
