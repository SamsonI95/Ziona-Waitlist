import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import image108 from "@/assets/image 108.png"
import image107 from "@/assets/image 107.png"
import image96 from "@/assets/image 96.png"

const Support = () => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-15 lg:pt-20 mt-5 lg:mt-0">
        <section className="flex flex-col lg:flex-row items-center justify-center px-4 lg:px-20 gap-6">
          <div className="flex flex-col gap-6">
            <h3 className="text-center lg:text-left text-[#1a131c] text-4xl lg:text-6xl font-normal font-bree">Grow Something Meaningful Together</h3>
            <p className="text-center lg:text-left text-[#423348] text-2xl font-normal">Ziona is built to be a space where faith, connection, and encouragement can thrive—freely and openly for everyone. Your support helps us keep it that way, while building new ways for people to grow in faith and community.</p>
            <Button type="button" variant="navbarCta" className="mt-6 w-full lg:w-[438px]">
              Support team
            </Button>
          </div>
          <img src={image107} alt="sample-image" />
        </section>
        <section className="mt-[60px] px-4 lg:px-16 py-24 bg-gradient-to-b from-[#faf2e5] from 20% to-[#fdf5ef] inline-flex flex-col justify-start items-start gap-10 overflow-hidden">
          <h3 className="self-stretch justify-start text-[#1a131c] text-4xl lg:text-6xl font-normal font-bree">Build With Us, Keep It Free for Everyone</h3>
          <p className="self-stretch justify-start text-[#423348] text-sm lg:text-2xl font-normal">We’ve chosen to keep Ziona free so anyone, anywhere, can access a positive Christian community. No subscriptions. No locked features. Just a space to connect and grow in faith.</p>
          <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-[38px]">
            <img src={image96} alt="sample-support-image" className="rounded-3xl" />
            <div className="space-y-[14px]">
              <p className="w-auto lg:w-96 justify-start text-black text-sm lg:text-2xl font-normal">But building and maintaining this kind of platform takes time, care, and resources.</p>
              <p className="w-auto lg:w-96 justify-start text-black text-sm lg:text-2xl font-semibold">That’s where you come in.</p>
            </div>
          </div>
        </section>
        <section className="mt-[60px] px-4 lg:px-16 inline-flex flex-col justify-start items-start gap-10 overflow-hidden">
          <div className="flex flex-col-reverse lg:flex-row lg:justify-between gap-8 lg:gap-[38px]">
            <img src={image108} alt="sample-image" className="rounded-3xl" />
            <div className="">
              <h3 className="self-stretch justify-center lg:justify-start text-[#1a131c] text-3xl lg:text-6xl font-normal font-bree">Why your support matters</h3>
              <div className="p-0 lg:px-8 lg:py-5">
                <p className="self-stretch justify-start text-[#1a131c] text-xl font-normal font-bree mt-5 lg:mt-9">Your support helps us:</p>
                <ul className="gap-2 list-disc mt-4 ml-9">
                  <li>Keep Ziona free and accessible to everyone</li>
                  <li>Build new features that deepen faith-based experiences</li>
                  <li>Improve the platform for better connection and engagement</li>
                  <li>Grow a safe, uplifting digital community</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center px-4 lg:px-16 mt-[91px] lg:mt-[113px]">
          <h3 className="self-stretch text-center text-[#1a131c] text-3xl lg:text-6xl font-normal font-bree">Choose How You’d Like to Support</h3>
          <div className="mt-8 lg:mt-[56px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-[30px] lg:gap-[23px]">
            <div className="w-80 h-[218px] lg:h-[322px] self-stretch rounded-xl bg-[var(--primary-brand)] px-6 py-5 inline-flex flex-col items-start">
              <div className="self-stretch flex flex-col gap-4">
                <h3 className=" justify-start items-start text-white text-2xl font-normal">One time suport</h3>
                <p className=" text-white text-base font-normal">A simple way to contribute whenever you feel led.</p>
              </div>
              <Button
                type="button"
                variant="navbarCta"
                className="mt-6 w-full bg-white text-black hover:bg-white/90 lg:mt-auto"
                onClick={() => setIsSuccessModalOpen(true)}
              >
                Support once
              </Button>
            </div>
            <div className="w-80 h-[218px] lg:h-[322px] self-stretch rounded-xl bg-[var(--primary-brand)] px-6 py-5 inline-flex flex-col items-start">
              <div className="self-stretch flex flex-col gap-4">
                <h3 className=" justify-start items-start text-white text-2xl font-normal">Monthly suport</h3>
                <p className=" text-white text-base font-normal">Support consistently and help us plan, build, and grow with stability.</p>
              </div>
              <Button
                type="button"
                variant="navbarCta"
                className="mt-6 w-full bg-white text-black hover:bg-white/90 lg:mt-auto"
                onClick={() => setIsSuccessModalOpen(true)}
              >
                Support monthly
              </Button>
            </div>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row mt-[43px] lg:mt-[86px] bg-gradient-to-b from-[#faf2e5] from 20% to-[#fdf5ef] px-4 py-8 lg:px-16 lg:py-24 gap-12 lg:gap-8">
          <div className="max-w-auto lg:max-w-[650px] lg:h-80 px-8 py-5 bg-white rounded-xl inline-flex flex-col justify-start gap-4">
            <h3 className="justify-start text-[#1a131c] text-3xl lg:text-6xl font-normal font-bree">For Early Supporters</h3>
            <p className="self-stretch justify-start text-[#1a131c] text-base lg:text-lg font-normal">If you choose to support Ziona, you’re not just contributing—you’re helping shape what it becomes.</p>
          </div>
          <div className="p-0 lg:py-5 lg:px-8">
            <h3 className="justify-start text-[#1a131c] text-xl font-normal font-bree">As a supporter, you’ll receive:</h3>
            <ul className="space-y-2 list-disc ml-6 my-4">
              <li>Early access to new features</li>
              <li>Priority access as we release updates</li>
              <li>Improve the platform for better connection and engagement</li>
            </ul>
            <p className="self-stretch justify-start text-black text-sm lg:text-xl font-normal">We’re building this together, and your support places you at the center of that journey.</p>
          </div>
        </section>

        <Dialog open={isSuccessModalOpen} onOpenChange={setIsSuccessModalOpen}>
          <DialogContent className="w-[calc(100%-2rem)] max-w-4xl rounded-[2rem] border-none bg-white px-5 py-12 text-center shadow-2xl sm:px-8 lg:px-16 lg:py-16">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 lg:gap-6">
              <DialogTitle className="text-center font-bree text-3xl font-normal leading-tight text-black sm:text-4xl lg:text-6xl">
                Thank You for Supporting Ziona
              </DialogTitle>
              <DialogDescription className="text-center text-base leading-7 text-black sm:text-lg lg:text-xl lg:leading-8">
                Your support helps us continue building a positive Christian community and keeps Ziona free for
                everyone.
              </DialogDescription>
              <p className="max-w-2xl text-center text-base leading-7 text-black lg:text-lg">
                We&rsquo;re grateful to have you as part of this journey.
              </p>
              <DialogClose asChild>
                <Button type="button" variant="navbarCta" className="mt-2 min-w-44 px-8">
                  Continue to app
                </Button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default Support;
