import ReactPlayer from "react-player";
import { MdDateRange, MdLaunch, MdLocationOn, MdPeople } from "react-icons/md";
import { ButtonLink, ButtonGdg } from "@components/atoms";

export const About = () => {
  const CHAPTERS = [
    {
      name: "Bogor",
      icon: require("@assets/images/logo/gdg.svg").default,
      site: "https://gdg.community.dev/events/details/google-gdg-bogor-presents-devfest-bogor-2022/",
    },
    {
      name: "Depok",
      icon: require("@assets/images/logo/gdg.svg").default,
      site: "https://gdg.community.dev/events/details/google-gdg-depok-presents-devfest-depok-2022/",
    },
    {
      name: "Jakarta",
      icon: require("@assets/images/logo/gdg.svg").default,
      site: "https://gdg.community.dev/events/details/google-gdg-jakarta-presents-devfest-jakarta-2022/",
    },
    {
      name: "Medan",
      icon: require("@assets/images/logo/gdg.svg").default,
      site: "https://gdg.community.dev/events/details/google-gdg-medan-presents-devfest-medan-2022/",
    },
    {
      name: "Bandung",
      icon: require("@assets/images/logo/gdg.svg").default,
      site: "https://gdg.community.dev/events/details/google-gdg-bandung-presents-devfest-bandung-2022/",
    },
    {
      name: "Semarang",
      icon: require("@assets/images/logo/gdg.svg").default,
      site: "https://gdg.community.dev/events/details/google-gdg-semarang-presents-devfest-2022-semarang/",
    },
    {
      name: "Surabaya",
      icon: require("@assets/images/logo/gdg.svg").default,
      site: "https://gdg.community.dev/events/details/google-gdg-surabaya-presents-gdg-devfest-2022-surabaya/",
    },
    {
      name: "Makassar",
      icon: require("@assets/images/logo/gdg.svg").default,
      site: "https://gdg.community.dev/events/details/google-gdg-makassar-presents-devfest-makassar-2022/",
    },
    {
      name: "Bali",
      icon: require("@assets/images/logo/gdg.svg").default,
      site: "https://gdg.community.dev/events/details/google-gdg-bali-presents-devfest-bali-2022/",
    },
    {
      name: "Cloud Bdg",
      icon: require("@assets/images/logo/gdg.svg").default,
      site: "https://gdg.community.dev/events/details/google-gdg-cloud-bandung-presents-devfest-cloud-bandung-2022/",
    },
  ];

  return (
    <div className="space-y-24">
      <div className="space-y-8">
        <div className="space-y-3">
          <h1 className="text-4xl text-grey-700 font-display font-semibold"><span className="text-black font-bold">DevFest</span> Indonesia is here!</h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-20">
          <div className="w-full space-y-10">
            <p className="font-semibold">
            A local tech conference hosted by <a href="https://gdg.community.dev/" target="_blank" rel="noreferrer" className="text-blue-700 hover:text-blue-900 hover:underline text-bold">Google Developer Groups</a> around the world. 
            Whether it be through hands-on learning experiences, technical talks delivered in local languages by experts, 
            or by simply meeting fellow local developers.
              <br />
              <br />
            DevFest brings together thousands of developers globally for the largest virtual weekend of community-led
            technical learning and a shared passion for Google technologies on Oct-Dec. The magic of DevFest has always
            come from the people involved - developers from all different backgrounds and skill levels.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="flex justify-center">
                  <MdDateRange
                    className="w-9"
                    size={24}
                  />
                </div>
                <span className="text-base">Oct - Dec, 2022</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex justify-center">
                  <MdPeople
                    className="w-9"
                    size={24}
                  />
                </div>
                <span className="text-base">In-person / Hybrid</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6">
              <ButtonLink
                text="Find DevFest near you"
                className="w-full sm:w-5/6 md:w-auto justify-between"
                href="https://gdg.community.dev/events/"
                icon={<MdLaunch size={16} />}
              />
            </div>
          </div>
          <div className="w-full">
            <div className="rounded-lg overflow-hidden">
              <ReactPlayer
                width="100%"
                url="https://www.youtube.com/watch?v=K6W9Usve6hI"
                controls
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="space-y-5">
          <h1 className="text-3xl font-display font-bold">Find DevFest near in your city</h1>
        </div>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {CHAPTERS.map((chapter) => (
              <ButtonGdg
                text={`GDG ${chapter.name}`}
                className="w-full sm:w-5/6 md:w-auto justify-between"
                href={`${chapter.site}`}
                prefixIcon={<img src={chapter.icon} alt=""/>}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
