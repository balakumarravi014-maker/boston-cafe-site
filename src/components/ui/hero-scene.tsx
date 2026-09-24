"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties, type PointerEvent } from "react";
import { CoffeeCupIcon } from "@/components/icons";

type HeroSceneProps = {
  main: string;
  latte: string;
  croissant: string;
  pour: string;
};

/**
 * Layered photo stack floating at different depths. The whole stage turns
 * toward the pointer, so nearer layers visibly slide past farther ones.
 */
export function HeroScene({ main, latte, croissant, pour }: HeroSceneProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  function tick() {
    const stage = stageRef.current;
    if (!stage) return;
    const c = current.current;
    const t = target.current;
    c.x += (t.x - c.x) * 0.08;
    c.y += (t.y - c.y) * 0.08;
    stage.style.transform = `rotateX(${c.y * -10}deg) rotateY(${c.x * 14}deg)`;
    if (Math.abs(t.x - c.x) > 0.001 || Math.abs(t.y - c.y) > 0.001) {
      frame.current = requestAnimationFrame(tick);
    } else {
      frame.current = null;
    }
  }

  function start() {
    if (frame.current === null) frame.current = requestAnimationFrame(tick);
  }

  function handleMove(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    target.current = {
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    };
    start();
  }

  function handleLeave() {
    target.current = { x: 0, y: 0 };
    start();
  }

  return (
    <div
      className="relative mx-auto aspect-[4/5] w-full max-w-[520px] [perspective:1600px]"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {/* warm glow behind the stack */}
      <div className="absolute inset-[10%] rounded-full bg-accent/25 blur-[90px]" aria-hidden="true" />

      <div ref={stageRef} className="relative h-full w-full [transform-style:preserve-3d]">
        {/* main photo */}
        <div className="absolute inset-[6%_10%_12%_8%] overflow-hidden rounded-[2rem] border border-fg/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] [transform:translateZ(0px)]">
          <Image src={main} alt="The counter at Drago's Corner Cup" fill preload sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
        </div>

        {/* latte, top-left, floating forward */}
        <div className="absolute left-0 top-[4%] w-[36%] [transform:translateZ(90px)]">
          <div className="animate-float relative aspect-square overflow-hidden rounded-2xl border-4 border-surface shadow-2xl shadow-black/25" style={{ "--r": "-6deg" } as CSSProperties}>
            <Image src={latte} alt="Latte art" fill sizes="200px" className="object-cover" />
          </div>
        </div>

        {/* croissant, bottom-right, nearest */}
        <div className="absolute bottom-[2%] right-0 w-[42%] [transform:translateZ(150px)]">
          <div
            className="animate-float relative aspect-[4/3] overflow-hidden rounded-2xl border-4 border-surface shadow-2xl shadow-black/25"
            style={{ "--r": "5deg", animationDelay: "-2s" } as CSSProperties}
          >
            <Image src={croissant} alt="Fresh croissants" fill sizes="240px" className="object-cover" />
          </div>
        </div>

        {/* pour-over, mid-left */}
        <div className="absolute bottom-[20%] left-[-4%] w-[28%] [transform:translateZ(60px)]">
          <div
            className="animate-float relative aspect-[3/4] overflow-hidden rounded-2xl border-4 border-surface shadow-2xl shadow-black/25"
            style={{ "--r": "-3deg", animationDelay: "-4s" } as CSSProperties}
          >
            <Image src={pour} alt="Pour-over brewing" fill sizes="160px" className="object-cover" />
          </div>
        </div>

        {/* spinning 3D coin badge */}
        <div className="absolute right-[4%] top-[2%] h-24 w-24 [transform:translateZ(190px)] sm:h-28 sm:w-28">
          <div className="animate-coin relative h-full w-full [transform-style:preserve-3d]">
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-full border-2 border-canvas/20 bg-accent text-canvas shadow-xl [backface-visibility:hidden]">
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.25em]">Est.</span>
              <span className="font-display text-2xl font-bold leading-none">2014</span>
              <span className="text-[0.55rem] font-bold uppercase tracking-[0.2em]">Boston</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center rounded-full border-2 border-accent/40 bg-sage text-fg shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <CoffeeCupIcon className="h-10 w-10" />
            </div>
          </div>
        </div>

        {/* rating chip */}
        <div className="glass absolute bottom-[14%] left-[18%] rounded-2xl px-4 py-3 shadow-2xl shadow-black/25 [transform:translateZ(220px)]">
          <p className="text-sm tracking-widest text-accent">★★★★★</p>
          <p className="mt-0.5 text-xs text-fg/70">4.8 from 1,200+ neighbors</p>
        </div>
      </div>
    </div>
  );
}
