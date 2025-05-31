"use client";

import { cn } from "@/lib/utils";
import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
} from "framer-motion";
import {
  useState,
  createContext,
  useContext,
  type ReactNode,
  type MouseEvent,
  type TouchEvent,
} from "react";

const ContentComparisonContext = createContext<
  | {
      sliderPosition: number;
      setSliderPosition: (pos: number) => void;
      motionSliderPosition: MotionValue<number>;
    }
  | undefined
>(undefined);

type ContentComparisonProps = {
  children: ReactNode;
  className?: string;
  enableHover?: boolean;
  springOptions?: SpringOptions;
};

const DEFAULT_SPRING_OPTIONS = {
  bounce: 0,
  duration: 0,
};

function ContentComparison({
  children,
  className,
  enableHover,
  springOptions,
}: ContentComparisonProps) {
  const [isDragging, setIsDragging] = useState(false);
  const motionValue = useMotionValue(50);
  const motionSliderPosition = useSpring(
    motionValue,
    springOptions ?? DEFAULT_SPRING_OPTIONS
  );
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleDrag = (event: MouseEvent | TouchEvent) => {
    if (!isDragging && !enableHover) return;

    const containerRect = (
      event.currentTarget as HTMLElement
    ).getBoundingClientRect();

    const x =
      "touches" in event
        ? event.touches[0].clientX - containerRect.left
        : (event as MouseEvent).clientX - containerRect.left;

    const percentage = Math.min(
      Math.max((x / containerRect.width) * 100, 0),
      100
    );
    motionValue.set(percentage);
    setSliderPosition(percentage);
  };

  return (
    <ContentComparisonContext.Provider
      value={{ sliderPosition, setSliderPosition, motionSliderPosition }}
    >
      <div
        className={cn(
          "relative select-none overflow-hidden",
          enableHover && "cursor-ew-resize",
          className
        )}
        onMouseMove={handleDrag}
        onMouseDown={() => !enableHover && setIsDragging(true)}
        onMouseUp={() => !enableHover && setIsDragging(false)}
        onMouseLeave={() => !enableHover && setIsDragging(false)}
        onTouchMove={handleDrag}
        onTouchStart={() => !enableHover && setIsDragging(true)}
        onTouchEnd={() => !enableHover && setIsDragging(false)}
      >
        {children}
      </div>
    </ContentComparisonContext.Provider>
  );
}

const ContentComparisonPanel = ({
  className,
  children,
  position,
}: {
  className?: string;
  children: ReactNode;
  position: "left" | "right";
}) => {
  const { motionSliderPosition } = useContext(ContentComparisonContext)!;

  const leftClipPath = useTransform(
    motionSliderPosition,
    (value) => `inset(0 0 0 ${value}%)`
  );
  const rightClipPath = useTransform(
    motionSliderPosition,
    (value) => `inset(0 ${100 - value}% 0 0)`
  );

  return (
    <motion.div
      className={cn("absolute inset-0", className)}
      style={{
        clipPath: position === "left" ? leftClipPath : rightClipPath,
      }}
    >
      {children}
    </motion.div>
  );
};

const ContentComparisonSlider = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  const { motionSliderPosition } = useContext(ContentComparisonContext)!;
  const left = useTransform(motionSliderPosition, (value) => `${value}%`);

  return (
    <motion.div
      className={cn("absolute top-0 bottom-0 w-1 cursor-ew-resize", className)}
      style={{
        left,
      }}
    >
      {children ?? <div className="h-full w-1 bg-blue-500" />}
    </motion.div>
  );
};

export { ContentComparison, ContentComparisonPanel, ContentComparisonSlider };
