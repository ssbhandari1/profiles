"use client";
import React from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
const Page = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      phone: e.target.phone.value,
      description: e.target.description.value,
    };
    console.log("handleSubmit", formData);
  };

  return (
    <div className="text-xs pr-6 pl-6 md:pr-20 md:pl-20 mb-10 pt-10 w-full h-full flex justify-center">
      <div className="w-full md:w-[60%] gap-6 bg-slate-200 rounded">
        <div className="p-3">
          <h1 className="text-sm sm:text-xl font-bold flex items-center space-x-2">
            <span className="flex items-center">Lets</span> 👋
            <span className="text-blue-500">Work</span>
            <span>Together</span>
          </h1>
          <p className="text-sm mt-4 text-gray-600">
            <b className="text-blue-500"> "Let&apos;s Build Something Amazing Together!"</b>{" "}
            feel free to reach out if you are looking for a passionate developer to bring your ideas to life.I&apos;m always excited to colliborate on meaningful Project.
          </p>
        </div>
        <div className="w-full bg-slate-200 rounded">
          <form
            onSubmit={handleSubmit}
            className="w-full p-4 flex items-center flex-col justify-center gap-4"
          >
            <div className="flex w-[90%] flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pt-3">
              <Input
                size={"lg"}
                type="text"
                label="Name"
                placeholder="Enter your name"
                name="name"
                required
              />
              <Input
                size={"lg"}
                type="email"
                label="Email"
                placeholder="Enter your email"
                name="email"
                required
              />
            </div>
            <div className="flex w-[90%] flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pt-3">
              <Input
                size={"lg"}
                type="text"
                label="Subject"
                placeholder="Subject"
                name="subject"
              />
              <Input
                size={"lg"}
                type="text"
                label="Phone"
                placeholder="Enter your Phone number"
                name="phone"
              />
            </div>
            <div className="flex w-[90%] flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pt-3">
              <Textarea
                label="Description"
                placeholder="Type details about your inquiry"
                name="description"
              />
            </div>
            <div className="flex w-[90%] flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pt-3">
              <Button
                color="primary"
                size="lg"
                className="w-full p-2"
                type="submit"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Page;
