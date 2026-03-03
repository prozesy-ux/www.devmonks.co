import { SectionHeader } from "@/components/SectionHeader";
import { ServiceGrid } from "@/sections/ServicesSection/components/ServiceGrid";

export const ServicesSection = () => {
  return (
    <section className="bg-white box-border caret-transparent">
      <div className="box-border caret-transparent px-4 md:px-5">
        <div className="border-b-zinc-50 border-l-neutral-200 border-r-neutral-200 border-t-zinc-50 box-border caret-transparent border-l border-r">
          <div className="box-border caret-transparent px-4 md:px-5">
            <div className="box-border caret-transparent py-[42px] md:py-[88px]">
              <div className="box-border caret-transparent max-w-screen-xl mx-auto before:accent-auto before:caret-transparent before:text-zinc-50 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[20.8px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:caret-transparent after:clear-both after:text-zinc-50 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[20.8px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter">
                <div className="box-border caret-transparent gap-x-8 flex flex-col gap-y-8 md:gap-x-14 md:gap-y-14">
                  <SectionHeader
                    containerVariant="gap-x-6 flex flex-col max-w-[636px] min-h-[auto] min-w-[auto] gap-y-6"
                    innerContainerVariant="gap-x-3 flex flex-col max-w-[829px] min-h-[auto] min-w-[auto] gap-y-3 md:gap-x-4 md:gap-y-4"
                    label="SERVICES"
                    labelClassName="text-orange-600 text-sm font-medium box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] uppercase font-space_grotesk"
                    title="AI-Powered Development Services We Offer"
                    titleClassName="text-neutral-950 text-2xl font-medium box-border caret-transparent tracking-[-0.24px] leading-6 min-h-[auto] min-w-[auto] uppercase font-space_grotesk md:text-[40px] md:tracking-[-0.4px] md:leading-10"
                  />
                  <ServiceGrid />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-200 box-border caret-transparent h-px w-full"></div>
      <div className="box-border caret-transparent px-4 md:px-5">
        <div className="border-b-zinc-50 border-l-neutral-200 border-r-neutral-200 border-t-zinc-50 box-border caret-transparent border-l border-r">
          <div className="box-border caret-transparent px-4 md:px-5">
            <div className="box-border caret-transparent py-[42px] md:py-[88px]">
              <div className="box-border caret-transparent max-w-screen-xl mx-auto before:accent-auto before:caret-transparent before:text-zinc-50 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[20.8px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:caret-transparent after:clear-both after:text-zinc-50 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[20.8px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter">
                <div className="box-border caret-transparent gap-x-3 flex flex-col gap-y-3 md:gap-x-4 md:gap-y-4">
                  <div className="box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] min-h-[auto] min-w-[auto] gap-y-8 md:gap-x-[86px] md:grid-cols-[1fr_1fr] md:gap-y-[86px]">
                    <div className="box-border caret-transparent gap-x-12 flex flex-col justify-between min-h-[auto] min-w-[auto] gap-y-12 md:gap-x-16 md:gap-y-16">
                      <div className="items-start box-border caret-transparent gap-x-8 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-8 md:gap-x-10 md:gap-y-10">
                        <div className="box-border caret-transparent gap-x-6 flex flex-col min-h-[auto] min-w-[auto] gap-y-6">
                          <div className="box-border caret-transparent gap-x-3 flex flex-col max-w-[800px] min-h-[auto] min-w-[auto] gap-y-3 md:gap-x-4 md:gap-y-4">
                            <p className="text-orange-600 text-sm font-medium box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] uppercase font-space_grotesk">
                              [ ABOUT US ]
                            </p>
                            <h2 className="text-neutral-950 text-2xl font-medium box-border caret-transparent tracking-[-0.24px] leading-6 min-h-[auto] min-w-[auto] uppercase font-space_grotesk md:text-[40px] md:tracking-[-0.4px] md:leading-10">
                              A Team Focused on{" "}
                              <br className="text-2xl box-border caret-transparent tracking-[-0.24px] leading-6 md:text-[40px] md:tracking-[-0.4px] md:leading-10" />
                              Building What Matters
                            </h2>
                          </div>
                          <p className="text-neutral-600 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[20.8px] max-w-[411px] min-h-[auto] min-w-[auto] md:text-lg md:tracking-[-0.36px] md:leading-[23.4px]">
                            We are a development team using AI to build scalable
                            software, focusing on product clarity, human needs,
                            and long-term reliability.
                          </p>
                        </div>
                        <a
                          href="https://www.devmonks.co/freecall"
                          className="items-center bg-orange-600 box-border caret-transparent gap-x-2.5 flex justify-center max-w-full min-h-[auto] min-w-[auto] gap-y-2.5 px-5 py-3 rounded-lg"
                        >
                          <div className="text-sm font-medium box-border caret-transparent tracking-[-0.28px] leading-[22.4px] min-h-[auto] min-w-[auto] uppercase font-space_grotesk">
                            Fix your Saas Product
                          </div>
                        </a>
                      </div>
                      <div className="box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4">
                        <p className="text-neutral-600 text-base font-medium box-border caret-transparent tracking-[-0.32px] leading-[20.8px] min-h-[auto] min-w-[auto] md:text-lg md:tracking-[-0.36px] md:leading-[23.4px]">
                          We worked with them
                        </p>
                        <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                          <div
                            role="list"
                            className="box-border caret-transparent gap-x-[7px] inline-flex flex-wrap max-w-[463px] gap-y-[7px]"
                          >
                            <div
                              role="listitem"
                              className="box-border caret-transparent min-h-[auto] min-w-[auto]"
                            >
                              <a
                                href="https://www.devmonks.co/"
                                className="text-neutral-950 box-border caret-transparent inline-block max-w-full border border-zinc-800/10 px-4 py-1 rounded-lg border-solid"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07c6f8ebcf174a6591198_Logo_compaies_color.svg"
                                  alt=""
                                  className="box-border caret-transparent inline-block h-[38px] max-w-full object-contain w-full"
                                />
                              </a>
                            </div>
                            <div
                              role="listitem"
                              className="box-border caret-transparent min-h-[auto] min-w-[auto]"
                            >
                              <a
                                href="https://www.devmonks.co/"
                                className="text-neutral-950 box-border caret-transparent inline-block max-w-full border border-zinc-800/10 px-4 py-1 rounded-lg border-solid"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07de759dd7464d10be512_Logo_3asafeer_color.svg"
                                  alt=""
                                  className="box-border caret-transparent inline-block h-[38px] max-w-full object-contain w-full"
                                />
                              </a>
                            </div>
                            <div
                              role="listitem"
                              className="box-border caret-transparent min-h-[auto] min-w-[auto]"
                            >
                              <a
                                href="https://www.devmonks.co/"
                                className="text-neutral-950 box-border caret-transparent inline-block max-w-full border border-zinc-800/10 px-4 py-1 rounded-lg border-solid"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07d2200b0aff0ad362e8b_Logo_Plentypay_color.svg"
                                  alt=""
                                  className="box-border caret-transparent inline-block h-[38px] max-w-full object-contain w-full"
                                />
                              </a>
                            </div>
                            <div
                              role="listitem"
                              className="box-border caret-transparent min-h-[auto] min-w-[auto]"
                            >
                              <a
                                href="https://www.devmonks.co/"
                                className="text-neutral-950 box-border caret-transparent inline-block max-w-full border border-zinc-800/10 px-4 py-1 rounded-lg border-solid"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07d6531ca360ba861d11e_Logo_Buttercup_color.svg"
                                  alt=""
                                  className="box-border caret-transparent inline-block h-[38px] max-w-full object-contain w-full"
                                />
                              </a>
                            </div>
                            <div
                              role="listitem"
                              className="box-border caret-transparent min-h-[auto] min-w-[auto]"
                            >
                              <a
                                href="https://www.devmonks.co/"
                                className="text-neutral-950 box-border caret-transparent inline-block max-w-full border border-zinc-800/10 px-4 py-1 rounded-lg border-solid"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07d50db05429345c6efb8_Logo_Clarity_color.svg"
                                  alt=""
                                  className="box-border caret-transparent inline-block h-[38px] max-w-full object-contain w-full"
                                />
                              </a>
                            </div>
                            <div
                              role="listitem"
                              className="box-border caret-transparent min-h-[auto] min-w-[auto]"
                            >
                              <a
                                href="https://www.devmonks.co/"
                                className="text-neutral-950 box-border caret-transparent inline-block max-w-full border border-zinc-800/10 px-4 py-1 rounded-lg border-solid"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07d0297102643ffe1cb80_Logo_Metal_ color.svg"
                                  alt=""
                                  className="box-border caret-transparent inline-block h-[38px] max-w-full object-contain w-full"
                                />
                              </a>
                            </div>
                            <div
                              role="listitem"
                              className="box-border caret-transparent min-h-[auto] min-w-[auto]"
                            >
                              <a
                                href="https://www.devmonks.co/"
                                className="text-neutral-950 box-border caret-transparent inline-block max-w-full border border-zinc-800/10 px-4 py-1 rounded-lg border-solid"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07ce41c99aba5ba89adec_Logo_AJC_ color.svg"
                                  alt=""
                                  className="box-border caret-transparent inline-block h-[38px] max-w-full object-contain w-full"
                                />
                              </a>
                            </div>
                            <div
                              role="listitem"
                              className="box-border caret-transparent min-h-[auto] min-w-[auto]"
                            >
                              <a
                                href="https://www.devmonks.co/"
                                className="text-neutral-950 box-border caret-transparent inline-block max-w-full border border-zinc-800/10 px-4 py-1 rounded-lg border-solid"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/699c4913b8031b1ce9551a17/69a07c4e54b8002e0397df27_Logo_Rob_ color.svg"
                                  alt=""
                                  className="box-border caret-transparent inline-block h-[38px] max-w-full object-contain w-full"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-border caret-transparent h-[340px] min-h-[auto] min-w-[auto] w-full overflow-hidden rounded-xl md:h-auto">
                      <img
                        src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699d123254d2e2908fb1af40_image hlder.png"
                        alt=""
                        className="aspect-[auto_597_/_504] box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
                      />
                    </div>
                  </div>
                  <div className="box-border caret-transparent gap-x-3 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] min-h-[auto] min-w-[auto] gap-y-3 md:gap-x-4 md:grid-cols-[1fr_1fr_1fr] md:gap-y-4">
                    <div className="items-center bg-gray-200 box-border caret-transparent gap-x-1 flex flex-col justify-center min-h-[auto] min-w-[auto] gap-y-1 p-4 rounded-xl md:px-6 md:py-5">
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                        <p className="text-orange-600 text-2xl font-medium box-border caret-transparent tracking-[-0.24px] leading-6 text-center uppercase font-space_grotesk md:text-[40px] md:tracking-[-0.4px] md:leading-10">
                          8+
                        </p>
                      </div>
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                        <p className="text-neutral-600 text-sm font-medium box-border caret-transparent leading-[21px] text-center uppercase font-space_grotesk">
                          Years of experience
                        </p>
                      </div>
                    </div>
                    <div className="items-center bg-gray-200 box-border caret-transparent gap-x-1 flex flex-col justify-center min-h-[auto] min-w-[auto] gap-y-1 p-4 rounded-xl md:px-6 md:py-5">
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                        <p className="text-orange-600 text-2xl font-medium box-border caret-transparent tracking-[-0.24px] leading-6 text-center uppercase font-space_grotesk md:text-[40px] md:tracking-[-0.4px] md:leading-10">
                          50+
                        </p>
                      </div>
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                        <p className="text-neutral-600 text-sm font-medium box-border caret-transparent leading-[21px] text-center uppercase font-space_grotesk">
                          Products Developed
                        </p>
                      </div>
                    </div>
                    <div className="items-center bg-gray-200 box-border caret-transparent gap-x-1 flex flex-col justify-center min-h-[auto] min-w-[auto] gap-y-1 p-4 rounded-xl md:px-6 md:py-5">
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                        <p className="text-orange-600 text-2xl font-medium box-border caret-transparent tracking-[-0.24px] leading-6 text-center uppercase font-space_grotesk md:text-[40px] md:tracking-[-0.4px] md:leading-10">
                          30+
                        </p>
                      </div>
                      <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                        <p className="text-neutral-600 text-sm font-medium box-border caret-transparent leading-[21px] text-center uppercase font-space_grotesk">
                          in-House Developers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-200 box-border caret-transparent h-px w-full"></div>
      <div className="box-border caret-transparent px-4 md:px-5">
        <div className="border-b-zinc-50 border-l-neutral-200 border-r-neutral-200 border-t-zinc-50 box-border caret-transparent border-l border-r">
          <div className="box-border caret-transparent px-4 md:px-5">
            <div className="box-border caret-transparent py-[42px] md:py-[88px]">
              <div className="box-border caret-transparent max-w-screen-xl mx-auto before:accent-auto before:caret-transparent before:text-zinc-50 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-[20.8px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:caret-transparent after:clear-both after:text-zinc-50 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-[20.8px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter">
                <div className="box-border caret-transparent gap-x-10 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-10 md:grid-cols-[1fr_1fr]">
                  <div className="box-border caret-transparent h-[340px] min-h-[auto] min-w-[auto] w-full overflow-hidden rounded-xl md:h-[632px]">
                    <img
                      src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699d1ac3da9a1ee8953ef95d_Content.jpg"
                      alt=""
                      className="aspect-[auto_620_/_632] box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
                    />
                  </div>
                  <div className="box-border caret-transparent gap-x-8 flex flex-col justify-between min-h-[auto] min-w-[auto] gap-y-8">
                    <div className="box-border caret-transparent gap-x-3 flex flex-col max-w-[800px] min-h-[auto] min-w-[auto] gap-y-3 md:gap-x-4 md:gap-y-4">
                            <p className="text-orange-600 text-sm font-medium box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] uppercase font-space_grotesk">
                              [ OUR PROCESS ]
                            </p>
                      <h2 className="text-neutral-950 text-2xl font-medium box-border caret-transparent tracking-[-0.24px] leading-6 min-h-[auto] min-w-[auto] uppercase font-space_grotesk md:text-[40px] md:tracking-[-0.4px] md:leading-10">
                        The Dev Monks{" "}
                        <br className="text-2xl box-border caret-transparent tracking-[-0.24px] leading-6 md:text-[40px] md:tracking-[-0.4px] md:leading-10" />
                        Development Journey
                      </h2>
                    </div>
                    <div className="relative box-border caret-transparent gap-x-9 flex flex-col min-h-[auto] min-w-[auto] gap-y-9 z-[1]">
                      <div className="items-start box-border caret-transparent gap-x-4 flex justify-start min-h-[auto] min-w-[auto] gap-y-4 md:gap-x-10 md:gap-y-10">
                        <div className="items-center bg-gray-200 box-border caret-transparent flex shrink-0 h-[46px] justify-center min-h-[auto] min-w-[auto] w-[46px] p-2.5 rounded-[100px] md:h-[50px] md:w-[50px]">
                          <p className="text-neutral-600 text-xs font-medium box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] uppercase font-space_grotesk md:text-sm md:leading-[21px]">
                            [ 1 ]
                          </p>
                        </div>
                        <div className="box-border caret-transparent gap-x-2 flex basis-[0%] flex-col grow min-h-[auto] min-w-[auto] gap-y-2">
                          <div className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] gap-y-2">
                            <img
                              src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699d1e53ba75a2072a270b84_iconamoon_discover-fill.svg"
                              alt=""
                              className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto]"
                            />
                            <h3 className="text-neutral-950 text-base font-medium box-border caret-transparent tracking-[-0.48px] leading-[19.2px] min-h-[auto] min-w-[auto] font-space_grotesk md:text-xl md:tracking-[-0.6px] md:leading-6">
                              Idea &amp; Requirements
                            </h3>
                          </div>
                          <p className="text-neutral-600 font-medium box-border caret-transparent tracking-[-0.16px] min-h-[auto] min-w-[auto]">
                            Understand project goals, user needs, &amp; desired
                            outcomes.
                          </p>
                        </div>
                      </div>
                      <div className="items-start box-border caret-transparent gap-x-4 flex justify-start min-h-[auto] min-w-[auto] gap-y-4 md:gap-x-10 md:gap-y-10">
                        <div className="items-center bg-gray-200 box-border caret-transparent flex shrink-0 h-[46px] justify-center min-h-[auto] min-w-[auto] w-[46px] p-2.5 rounded-[100px] md:h-[50px] md:w-[50px]">
                          <p className="text-neutral-600 text-xs font-medium box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] uppercase font-space_grotesk md:text-sm md:leading-[21px]">
                            [ 2 ]
                          </p>
                        </div>
                        <div className="box-border caret-transparent gap-x-2 flex basis-[0%] flex-col grow min-h-[auto] min-w-[auto] gap-y-2">
                          <div className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] gap-y-2">
                            <img
                              src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699d21faf85e06a8ce802074_icon-park-solid_graphic-design.svg"
                              alt=""
                              className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto]"
                            />
                            <h3 className="text-neutral-950 text-base font-medium box-border caret-transparent tracking-[-0.48px] leading-[19.2px] min-h-[auto] min-w-[auto] font-space_grotesk md:text-xl md:tracking-[-0.6px] md:leading-6">
                              AI-Enhanced Planning
                            </h3>
                          </div>
                          <p className="text-neutral-600 font-medium box-border caret-transparent tracking-[-0.16px] min-h-[auto] min-w-[auto]">
                            Using AI to optimize workflow, timelines, and
                            approach.
                          </p>
                        </div>
                      </div>
                      <div className="items-start box-border caret-transparent gap-x-4 flex justify-start min-h-[auto] min-w-[auto] gap-y-4 md:gap-x-10 md:gap-y-10">
                        <div className="items-center bg-gray-200 box-border caret-transparent flex shrink-0 h-[46px] justify-center min-h-[auto] min-w-[auto] w-[46px] p-2.5 rounded-[100px] md:h-[50px] md:w-[50px]">
                          <p className="text-neutral-600 text-xs font-medium box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] uppercase font-space_grotesk md:text-sm md:leading-[21px]">
                            [ 3 ]
                          </p>
                        </div>
                        <div className="box-border caret-transparent gap-x-2 flex basis-[0%] flex-col grow min-h-[auto] min-w-[auto] gap-y-2">
                          <div className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] gap-y-2">
                            <img
                              src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699d221a6ad1fdfbd0c36ae3_fluent_developer-board-24-filled.svg"
                              alt=""
                              className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto]"
                            />
                            <h3 className="text-neutral-950 text-base font-medium box-border caret-transparent tracking-[-0.48px] leading-[19.2px] min-h-[auto] min-w-[auto] font-space_grotesk md:text-xl md:tracking-[-0.6px] md:leading-6">
                              Development &amp; Engineering 
                            </h3>
                          </div>
                          <p className="text-neutral-600 font-medium box-border caret-transparent tracking-[-0.16px] min-h-[auto] min-w-[auto]">
                            Build scalable apps using production-ready AI-driven
                            methods.
                          </p>
                        </div>
                      </div>
                      <div className="items-start box-border caret-transparent gap-x-4 flex justify-start min-h-[auto] min-w-[auto] gap-y-4 md:gap-x-10 md:gap-y-10">
                        <div className="items-center bg-gray-200 box-border caret-transparent flex shrink-0 h-[46px] justify-center min-h-[auto] min-w-[auto] w-[46px] p-2.5 rounded-[100px] md:h-[50px] md:w-[50px]">
                          <p className="text-neutral-600 text-xs font-medium box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] uppercase font-space_grotesk md:text-sm md:leading-[21px]">
                            [ 4 ]
                          </p>
                        </div>
                        <div className="box-border caret-transparent gap-x-2 flex basis-[0%] flex-col grow min-h-[auto] min-w-[auto] gap-y-2">
                          <div className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] gap-y-2">
                            <img
                              src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699d2297afab459a7be595d9_Frame 2147257955.svg"
                              alt=""
                              className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto]"
                            />
                            <h3 className="text-neutral-950 text-base font-medium box-border caret-transparent tracking-[-0.48px] leading-[19.2px] min-h-[auto] min-w-[auto] font-space_grotesk md:text-xl md:tracking-[-0.6px] md:leading-6">
                              Testing &amp; QA 
                            </h3>
                          </div>
                          <p className="text-neutral-600 font-medium box-border caret-transparent tracking-[-0.16px] min-h-[auto] min-w-[auto]">
                            Ensuring reliability and bug-free software before
                            launch.
                          </p>
                        </div>
                      </div>
                      <div className="items-start box-border caret-transparent gap-x-4 flex justify-start min-h-[auto] min-w-[auto] gap-y-4 md:gap-x-10 md:gap-y-10">
                        <div className="items-center bg-gray-200 box-border caret-transparent flex shrink-0 h-[46px] justify-center min-h-[auto] min-w-[auto] w-[46px] p-2.5 rounded-[100px] md:h-[50px] md:w-[50px]">
                          <p className="text-neutral-600 text-xs font-medium box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] uppercase font-space_grotesk md:text-sm md:leading-[21px]">
                            [ 5 ]
                          </p>
                        </div>
                        <div className="box-border caret-transparent gap-x-2 flex basis-[0%] flex-col grow min-h-[auto] min-w-[auto] gap-y-2">
                          <div className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] gap-y-2">
                            <img
                              src="https://cdn.prod.website-files.com/6997a168b79763ca1bc62ee8/699d22bb618ef95ef56fddc0_Frame 2147257955 (1).svg"
                              alt=""
                              className="box-border caret-transparent max-w-full min-h-[auto] min-w-[auto]"
                            />
                            <h3 className="text-neutral-950 text-base font-medium box-border caret-transparent tracking-[-0.48px] leading-[19.2px] min-h-[auto] min-w-[auto] font-space_grotesk md:text-xl md:tracking-[-0.6px] md:leading-6">
                              Launch &amp; Iteration
                            </h3>
                          </div>
                          <p className="text-neutral-600 font-medium box-border caret-transparent tracking-[-0.16px] min-h-[auto] min-w-[auto]">
                            Deliver products and refine them with real-world
                            user feedback.
                          </p>
                        </div>
                      </div>
                      <div className="absolute box-border caret-transparent h-full w-1 z-[-1] left-[22px] top-[0%]">
                        <div className="bg-gray-200 box-border caret-transparent h-[95%] w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
