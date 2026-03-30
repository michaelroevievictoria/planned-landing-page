"use client";
import HeaderMenu from "../HeaderMenu";
import { Button } from "antd";
import Image from "next/image"; // Import Next.js Image component
import drawingCircle from "../../../../public/drawing-circle.png";
import taskIcon from "../../../../public/task-icon.svg";
import plannedLogo from "../../../../public/cart-outline.svg";
import foodIcon from "../../../../public/food-icon.svg";
import importIcon from "../../../../public/import-icon.svg";
import BlackFridayBanner from "@/components/BlackFriday/BlackFridayBanner";

const scrollToJoinNow = () => {
  const targetElement = document.getElementById("join-now");
  if (!targetElement) return;

  const startPosition = window.pageYOffset;
  const targetPosition =
    targetElement.getBoundingClientRect().top + startPosition;
  const distance = targetPosition - startPosition;
  const duration = 1000; // Duration in milliseconds (1 second)
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const scrollProgress = easeInOutQuad(
      timeElapsed,
      startPosition,
      distance,
      duration
    );

    window.scrollTo(0, scrollProgress);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  // Easing function for smoother scroll animation
  function easeInOutQuad(t: number, b: number, c: number, d: number) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
};
const HeroSection: React.FC = () => {
  const classNameForText =
    "text-[#1E4D38] font-poppins lg:text-md font-semibold hidden lg:block";
  const classNameForTheIcon = "w-10 h-10 md:w-20 md:h-20";
  return (
    <>
      <section className="bg-[#ffff] overflow-hidden w-full max-w-[100vw] min-h-[100svh] md:min-h-[100svh] relative max-lg:h-auto bg-hero md:bg-center md:bg-[position-right_-70px_top_-50px] bg-no-repeat bg-cover h-fit sm:bg-[position-right_-40px_top_-43px] bg-[left_-190px_top_-12px] ">
        <div>
          <HeaderMenu />
          {/* <SpringBonusBanner /> */}
          {/* <BlackFridayBanner/> */}
        </div>
        <div className="flex flex-col items-center justify-center min-h-[calc(48vh)] md:min-h-[calc(100svh)]  lg:min-h-[calc(75vh)] text-center">
          <div className="mb-4 mt">
            <p className="text-4xl sm:text5xl md:text-6xl lg:text-7xl font-bold text-[#1E4D38] z-50 relative">
              Healthy eating
            </p>
            <div className="relative inline-block">
              {/* lg and up */}
              <Image
                src={drawingCircle}
                alt="circle"
                layout="intrinsic"
                className="hidden lg:block absolute top-[-50px] right-[-70px] sm:top-[-27px] sm:right-[-46px] w-[270px] h-auto pointer-events-none"
              />
              {/* lg and down */}
              <Image
                src={drawingCircle}
                alt="circle"
                layout="intrinsic"
                className="lg:hidden absolute top-[-14px] right-[-27px] sm:top-[-13px] sm:right-[-26px] h-auto pointer-events-none !w-[142px] sm:!w-[215px]"
              />
              <p className="z-10 inline-block text-4xl sm:text5xl  md:text-6xl lg:text-7xl font-bold text-[#1E4D38] relative">
                made easy.
              </p>
            </div>
          </div>
          <div className="">
            <p className="text-xs md:text-3xl font-bold text-[#1E4D38]">
              Plan your week in minutes, enjoy delicious
            </p>
           
            <p className="text-xs md:text-3xl font-bold text-[#1E4D38]">
                healthy meals, and save time & money on groceries.
            </p>
          </div>

          <Button
            onClick={scrollToJoinNow}
            href="#join-now"
            className="!bg-[#1E4D38] !text-[#fff] !rounded-3xl !px-10 !py-6 !font-poppins !text-xl md:!text-[27px] font-bold mt-[2.1875rem]"
          >
            Get Started
          </Button>
        </div>

        <section className="bg-[#E1E6C8] py-4 w-full absolute bottom-0 left-0">
          <div className="grid grid-cols-4 gap-6 text-center">
            {/* Item 1 */}
            <div className="flex flex-col items-center justify-center">
              <div className="text-[#1E4D38] mb-4">
                <Image
                  src={taskIcon}
                  alt="task-icon"
                  className={classNameForTheIcon}
                />
              </div>
              <p className="text-[#1E4D38] font-poppins text-xl lg:text-md font-semibold hidden lg:block">
                Healthy recipes
              </p>
              {/* For md and down */}
              <p className="text-[#1E4D38] font-poppins text-xs sm:text-sm lg:text-xl font-semibold md:block lg:hidden">
                Healthy <br /> recipes
              </p>

              <p className={classNameForText}>
                Use the planned-for-you weekly <br /> meal plan or build your
                own
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl text-[#1E4D38] mb-4">
                <Image
                  src={importIcon}
                  alt="import-icon"
                  className={classNameForTheIcon}
                />
              </div>
              <p className="text-[#1E4D38] font-poppins text-xl font-semibold hidden lg:block">
                Import Any Recipe
              </p>
              {/* For md and down */}
              <p className="text-[#1E4D38] font-poppins text-xs sm:text-sm lg:text-xl font-semibold md:block lg:hidden">
                Import Any<br /> Recipe
              </p>
              <p className={classNameForText}>
                Save recipes from websites or <br /> social media with a
                tap
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl text-[#1E4D38] mb-4">
                <Image
                  src={plannedLogo}
                  alt="planned-logo"
                  className={classNameForTheIcon}
                />
              </div>
              <p className="text-[#1E4D38] font-poppins text-xl font-semibold hidden lg:block">
                Meal planning
              </p>
              {/* For md and down */}
              <p className="text-[#1E4D38] font-poppins text-xs sm:text-sm lg:text-xl font-semibold md:block lg:hidden">
                Meal <br /> planning
              </p>
              <p className={classNameForText}>
                Automatically generate your weekly <br /> grocery list & shop
                online or in store
              </p>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl text-[#1E4D38] mb-4">
                <Image
                  src={foodIcon}
                  alt="food-icon"
                  className={classNameForTheIcon}
                />
              </div>
              <p className="text-[#1E4D38] font-poppins text-xl font-semibold hidden lg:block">
                Grocery shopping
              </p>
              {/* For md and down */}
              <p className="text-[#1E4D38] font-poppins text-xs sm:text-sm lg:text-xl font-semibold md:block lg:hidden">
                Grocery <br /> shopping
              </p>
              <p className={classNameForText}>
                Access to 250+ healthy recipes <br /> that the whole family will
                love
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default HeroSection;
