import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

function HeroComp() {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-50 lg:py-30 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-bold">
              Start Coding. <br /> Build Real Apps. <br />
              Shape Your Future.
            </h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Master real-world coding skills from scratch — designed for
              students from 8th grade to college beginners. Learn to code,
              create projects, and kickstart your freelancing or tech career
              with confidence.
            </p>
          </div>

          <div className="flex flex-row gap-3">
            <Button
              size="lg"
              className="gap-4"
              variant="outline"
              onClick={() =>
                (window.location.href = "https://wa.me/919888266339")
              }
            >
              Jump on a chat <PhoneCall className="w-4 h-4" />
            </Button>
            {/* <Button size="lg" className="gap-4">
              Sign up here <MoveRight className="w-4 h-4" />
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export { HeroComp };
