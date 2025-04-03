"use client";

import { useRef, useState, useEffect, JSX } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface Category {
  id: string;
  name: string;
}

interface CategoryPillsProps {
  categories: Category[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

const CategoryPills = ({
  categories,
  selectedCategory,
  onSelect,
}: CategoryPillsProps): JSX.Element => {
  const [showLeftButton, setShowLeftButton] = useState<boolean>(false);
  const [showRightButton, setShowRightButton] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollAmount = 200;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleResize = (): void => {
      checkScroll(container);
    };

    const checkScroll = (element: HTMLDivElement): void => {
      const { scrollLeft, scrollWidth, clientWidth } = element;

      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft + clientWidth < scrollWidth);
    };

    // Initial check
    checkScroll(container);

    // Add listener for window resize
    window.addEventListener("resize", handleResize);

    // Add scroll event listener
    container.addEventListener("scroll", () => checkScroll(container));

    return () => {
      window.removeEventListener("resize", handleResize);
      if (container) {
        container.removeEventListener("scroll", () => checkScroll(container));
      }
    };
  }, [categories]);

  const scroll = (direction: "left" | "right"): void => {
    const container = containerRef.current;
    if (!container) return;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      {/* Left scroll button */}
      {showLeftButton && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-0 bottom-0 flex items-center justify-center z-10 bg-gradient-to-r from-white dark:from-zinc-900 to-transparent pr-4 pl-1"
        >
          <div className="bg-white dark:bg-zinc-800 rounded-full p-1.5 shadow-md">
            <ChevronLeftIcon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          </div>
        </button>
      )}

      {/* Categories container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide py-2 px-2 -mx-2 snap-x"
      >
        {categories.map((category) => {
          const isSelected = category.name === selectedCategory;

          return (
            <button
              key={category.id || category.name}
              onClick={() => onSelect(category.name)}
              className={`flex-shrink-0 px-4 py-2 rounded-full mr-2 text-sm whitespace-nowrap transition-colors ${
                isSelected
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-zinc-700"
              }`}
            >
              {category.name}
            </button>
          );
        })}
      </div>

      {/* Right scroll button */}
      {showRightButton && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-0 bottom-0 flex items-center justify-center z-10 bg-gradient-to-l from-white dark:from-zinc-900 to-transparent pl-4 pr-1"
        >
          <div className="bg-white dark:bg-zinc-800 rounded-full p-1.5 shadow-md">
            <ChevronRightIcon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          </div>
        </button>
      )}
    </div>
  );
};

export default CategoryPills;
