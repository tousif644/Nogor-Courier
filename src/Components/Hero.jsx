import React from "react";
import deliveryMan from "../Lottie/Deliveryman.json";
import Lottie from "lottie-react";
function Hero() {
  return (
    <div className="hero min-h-screen items-center place-content-center align-middle">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Lottie
          animationData={deliveryMan}
          autoPlay
          className="w-auto"
        ></Lottie>
        <div className="w-9/12">
          <h1 className="text-5xl font-bold">নগর কুরিয়ার এখন আপনার কাছে</h1>
          <p className="py-6">
            দ্রুত এবং নির্ভরযোগ্য ডেলিভারি পরিষেবায় আপনার বিশ্বস্ত অংশীদার নোগর
            কুরিয়ারে স্বাগতম। একটি ক্রমবর্ধমান আন্তঃসংযুক্ত বিশ্বে, যেখানে
            সময়ের সারমর্ম, আমরা একটি বিরামবিহীন লজিস্টিক নেটওয়ার্কের গুরুত্ব
            বুঝতে পারি যা ব্যবসা এবং তাদের গ্রাহকদের মধ্যে ব্যবধান পূরণ করে।
            উৎকর্ষের উত্তরাধিকার এবং গ্রাহক সন্তুষ্টির প্রতিশ্রুতি নিয়ে, নোগর
            কুরিয়ার একটি নেতৃস্থানীয় কুরিয়ার পরিষেবা প্রদানকারী হিসাবে
            আবির্ভূত হয়েছে, বিভিন্ন শিল্পের জন্য এবং প্রতিটি ধাপে শ্রেষ্ঠত্ব
            প্রদান করছে।
          </p>
          <button className="btn btn-primary hero-btn">আপনার যাত্রা শুরু করুন</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
