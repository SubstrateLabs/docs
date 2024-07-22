"use client";
import { PopupButton } from "@typeform/embed-react";
/**
NOTE: This is a clone of site/components/MarketingFooter.tsx
If you edit this file, copy to that file.
*/
export default function MarketingFooter() {
  return (
    <div>
      {/* <div className="flex flex-col items-center bg-black text-white py-1">
        <PopupButton id="jPbEdcHO">
          <div className="px-32">{"Contact sales"}</div>
        </PopupButton>
      </div> */}
      <div className="grid grid-cols-2 lg:text-lg text-xs px-1 md:px-4 pt-16 pb-4 bg-white text-black bg-grid-small-black/[0.1]">
        <div className="flex flex-col gap-y-2 justify-end">
          <a href="https://substrate.run">
            <span className="tracking-tighter text-[14px]">
              {"© 2023-2024 Substrate Labs Inc."}
            </span>
          </a>
        </div>
        <div className="flex flex-col gap-y-2">
          <div>
            <div className="flex align-middle justify-end">
              <a
                href="https://x.com/substratelabs"
                className="flex items-center gap-x-1"
              >
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z"
                    />
                  </svg>
                </div>
                <div>{"Twitter"}</div>
              </a>
            </div>
          </div>
          <div>
            <div className="flex align-middle justify-end">
              <a
                href="https://www.linkedin.com/company/substratelabs"
                className="flex items-center gap-x-1"
              >
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0.88em"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3M135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5c0 21.3-17.2 38.5-38.5 38.5m282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7c-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5c67.2 0 79.7 44.3 79.7 101.9z"
                    />
                  </svg>
                </div>
                <div>{"LinkedIn"}</div>
              </a>
            </div>
          </div>
          <div className="">
            <div className="flex align-middle justify-end">
              <a
                href="https://join.slack.com/t/substratecommunity/shared_invite/zt-2jd8w6b7n-b0qE5QWV7rsClGglHeu_rA"
                className="flex gap-x-1 items-center"
              >
                <div className="pb-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="#e01e5a"
                      d="M53.841 161.32c0 14.832-11.987 26.82-26.819 26.82c-14.832 0-26.819-11.988-26.819-26.82c0-14.831 11.987-26.818 26.82-26.818H53.84zm13.41 0c0-14.831 11.987-26.818 26.819-26.818c14.832 0 26.819 11.987 26.819 26.819v67.047c0 14.832-11.987 26.82-26.82 26.82c-14.83 0-26.818-11.988-26.818-26.82z"
                    />
                    <path
                      fill="#36c5f0"
                      d="M94.07 53.638c-14.832 0-26.82-11.987-26.82-26.819C67.25 11.987 79.239 0 94.07 0s26.819 11.987 26.819 26.819v26.82zm0 13.613c14.832 0 26.819 11.987 26.819 26.819c0 14.832-11.987 26.819-26.82 26.819H26.82C11.987 120.889 0 108.902 0 94.069c0-14.83 11.987-26.818 26.819-26.818z"
                    />
                    <path
                      fill="#2eb67d"
                      d="M201.55 94.07c0-14.832 11.987-26.82 26.818-26.82c14.832 0 26.82 11.988 26.82 26.82s-11.988 26.819-26.82 26.819H201.55zm-13.41 0c0 14.832-11.988 26.819-26.82 26.819c-14.831 0-26.818-11.987-26.818-26.82V26.82C134.502 11.987 146.489 0 161.32 0c14.831 0 26.819 11.987 26.819 26.819z"
                    />
                    <path
                      fill="#ecb22e"
                      d="M161.32 201.55c14.832 0 26.82 11.987 26.82 26.818c0 14.832-11.988 26.82-26.82 26.82c-14.831 0-26.818-11.988-26.818-26.82V201.55zm0-13.41c-14.831 0-26.818-11.988-26.818-26.82c0-14.831 11.987-26.818 26.819-26.818h67.25c14.832 0 26.82 11.987 26.82 26.819c0 14.831-11.988 26.819-26.82 26.819z"
                    />
                  </svg>
                </div>
                <div className="">{"Slack Community"}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
