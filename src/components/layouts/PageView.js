"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import style from "./PageView.module.css";
import Row from "../elements/Row";
import { FaCalendarAlt } from "react-icons/fa";
import { GoShareAndroid } from "react-icons/go";
import { BiLike } from "react-icons/bi";

export default function PageView({ children }) {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-max w-[80%] md:p-10 p-5 m-16 bg-amber-100 rounded-md">
        <div className="absolute -top-5 left-0 right-0 z-5 flex justify-center">
          <h1 className=" bg-red-100 px-5 py-3 rounded-2xl text-center">
            Ikuti Kegiatan Kami
          </h1>
        </div>
        <div className={style.cardInformation}>
          <Swiper
            modules={[Autoplay, Controller, Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={50}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            slidesPerView={1}
            controller={{ control: controlledSwiper }}
            className="md:h-[calc(100vh-200px)] aspect-square w-full"
          >
            <SwiperSlide>
              <img
                src="/download.jpg"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/download (1).jpg"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/download (2).jpg"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
          <Swiper
            modules={[Autoplay, Controller]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            enabled={false}
            onSwiper={setControlledSwiper}
            className="h-max w-full content-center flex justify-center items-center"
          >
            <SwiperSlide>
              <div className="mt-4">
                <h1>Slide 1</h1>
                <h6>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptas laborum assumenda laboriosam incidunt ullam, sint
                  repudiandae minus magnam illum quis?
                </h6>
                <Row css="my-4 justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <Row css="items-center gap-3">
                      <span className="text-2xl">
                        <FaCalendarAlt />
                      </span>
                      <p className="font-[500]">20 Januari 2023</p>
                    </Row>
                    <p className="text-[14px]">Published by Admin</p>
                  </div>
                  <Row css="gap-3 text-2xl">
                    <div className="flex flex-col items-center">
                      <span className="cursor-pointer">
                        <BiLike />
                      </span>
                      <p className="text-[14px]">20</p>
                    </div>
                    <span className="cursor-pointer">
                      <GoShareAndroid />
                    </span>
                  </Row>
                </Row>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-4">
                <h1>Slide 2</h1>
                <h6>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptas laborum assumenda laboriosam incidunt ullam, sint
                  repudiandae minus magnam illum quis?
                </h6>
                <Row css="my-4 justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <Row css="items-center gap-3">
                      <span className="text-2xl">
                        <FaCalendarAlt />
                      </span>
                      <p className="font-[500]">20 Januari 2023</p>
                    </Row>
                    <p className="text-[14px]">Published by Admin</p>
                  </div>
                  <Row css="gap-3 text-2xl">
                    <div className="flex flex-col items-center">
                      <span className="cursor-pointer">
                        <BiLike />
                      </span>
                      <p className="text-[14px]">20</p>
                    </div>
                    <span className="cursor-pointer">
                      <GoShareAndroid />
                    </span>
                  </Row>
                </Row>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mt-4">
                <h1>Slide 3</h1>
                <h6>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptas laborum assumenda laboriosam incidunt ullam, sint
                  repudiandae minus magnam illum quis?
                </h6>
                <Row css="my-4 justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <Row css="items-center gap-3">
                      <span className="text-2xl">
                        <FaCalendarAlt />
                      </span>
                      <p className="font-[500]">20 Januari 2023</p>
                    </Row>
                    <p className="text-[14px]">Published by Admin</p>
                  </div>
                  <Row css="gap-3 text-2xl">
                    <div className="flex flex-col items-center">
                      <span className="cursor-pointer">
                        <BiLike />
                      </span>
                      <p className="text-[14px]">20</p>
                    </div>
                    <span className="cursor-pointer">
                      <GoShareAndroid />
                    </span>
                  </Row>
                </Row>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {children}
    </div>
  );
}
