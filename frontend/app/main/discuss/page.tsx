"use client";
import Image from "next/image";
import AddQuestion from "@/components/AddQuestion";
import { useState, useEffect } from "react";
import { getQues, createAnswer } from "@/services/Question";
import { useDispatch, useSelector } from "react-redux";
import AccordionItemOne from "@/components/AccordionItemOne"

const Discuss: React.FC = () => {
  const { questions } = useSelector((state: any) => state.question)
  console.log("questions", questions);
  const dispatch = useDispatch();
  //get all questions
  const [popupOpen, setPopupOpen] = useState(false)
  useEffect(() => {
    getQues(dispatch);
  }, [dispatch]);
  //show Answers
  const [active, setActive] = useState<string | null>(null);
  const handleToggle = (index: string) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-4 py-4 dark:border-strokewhite sm:px-6 xl:px-7.5">
        <h3 className="font-medium text-black dark:text-white">
          FAQ
        </h3>
        <div className='flex'>
          <button className="flex w-25 items-center gap-2 rounded-sm py-1.5 px-4 text-left text-sm hover:bg-gray dark:hover:bg-meta-4"
            onClick={() => setPopupOpen(true)}
          >
            <svg
              className="fill-current"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_62_9787)">
                <path
                  d="M15.55 2.97499C15.55 2.77499 15.475 2.57499 15.325 2.42499C15.025 2.12499 14.725 1.82499 14.45 1.52499C14.175 1.24999 13.925 0.974987 13.65 0.724987C13.525 0.574987 13.375 0.474986 13.175 0.449986C12.95 0.424986 12.75 0.474986 12.575 0.624987L10.875 2.32499H2.02495C1.17495 2.32499 0.449951 3.02499 0.449951 3.89999V14C0.449951 14.85 1.14995 15.575 2.02495 15.575H12.15C13 15.575 13.725 14.875 13.725 14V5.12499L15.35 3.49999C15.475 3.34999 15.55 3.17499 15.55 2.97499ZM8.19995 8.99999C8.17495 9.02499 8.17495 9.02499 8.14995 9.02499L6.34995 9.62499L6.94995 7.82499C6.94995 7.79999 6.97495 7.79999 6.97495 7.77499L11.475 3.27499L12.725 4.49999L8.19995 8.99999ZM12.575 14C12.575 14.25 12.375 14.45 12.125 14.45H2.02495C1.77495 14.45 1.57495 14.25 1.57495 14V3.87499C1.57495 3.62499 1.77495 3.42499 2.02495 3.42499H9.72495L6.17495 6.99999C6.04995 7.12499 5.92495 7.29999 5.87495 7.49999L4.94995 10.3C4.87495 10.5 4.92495 10.675 5.02495 10.85C5.09995 10.95 5.24995 11.1 5.52495 11.1H5.62495L8.49995 10.15C8.67495 10.1 8.84995 9.97499 8.97495 9.84999L12.575 6.24999V14ZM13.5 3.72499L12.25 2.49999L13.025 1.72499C13.225 1.92499 14.05 2.74999 14.25 2.97499L13.5 3.72499Z"
                  fill=""
                />
              </g>
              <defs>
                <clipPath id="clip0_62_9787">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Create
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-6 xl:p-12.5">
        <div className="grid grid-cols-1 gap-y-6 gap-x-4 md:gap-x-6 xl:grid-cols-2 xl:gap-x-7.5">
          <div className="flex flex-col gap-6">
            {questions.map((faq, key) => {
              if ((key + 1) % 2 !== 0) {
                return (
                  <AccordionItemOne
                    key={key + 1}
                    active={active}
                    handleToggle={handleToggle}
                    faq={faq}
                  />
                );
              }
              return null;
            })}
          </div>

          <div className="flex flex-col gap-6">
            {questions.map((faq, key) => {
              if ((key + 1) % 2 === 0) {
                return (
                  <AccordionItemOne
                    key={key + 1}
                    active={active}
                    handleToggle={handleToggle}
                    faq={faq}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
      <AddQuestion popupOpen={popupOpen} setPopupOpen={setPopupOpen}></AddQuestion>
    </div>
  );
};

export default Discuss;
