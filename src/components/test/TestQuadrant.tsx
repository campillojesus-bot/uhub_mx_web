"use client";

import { useState } from "react";
import { IntroScreen } from "./IntroScreen";
import { QuizScreen } from "./QuizScreen";
import { CaptureScreen } from "./CaptureScreen";
import { ResultScreen } from "./ResultScreen";
import { PROFILES, QUESTIONS, resolveProfileKey, type Profile } from "@/lib/testProfiles";

type ScreenName = "intro" | "quiz" | "capture" | "result";

function emptyAnswers(): (number | undefined)[] {
  return new Array(QUESTIONS.length).fill(undefined);
}

export function TestQuadrant() {
  const [screen, setScreen] = useState<ScreenName>("intro");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(number | undefined)[]>(emptyAnswers());
  const [profile, setProfile] = useState<Profile | null>(null);

  function computeProfile(finalAnswers: (number | undefined)[]): Profile {
    let scoreI = 0;
    let scoreL = 0;
    finalAnswers.forEach((ai, qi) => {
      if (ai == null) return;
      const opt = QUESTIONS[qi].opts[ai];
      scoreI += opt.i;
      scoreL += opt.l;
    });
    return PROFILES[resolveProfileKey(scoreI, scoreL)];
  }

  function handleAnswer(optionIndex: number) {
    const next = [...answers];
    next[step] = optionIndex;
    setAnswers(next);

    setTimeout(() => {
      if (step < QUESTIONS.length - 1) {
        setStep(step + 1);
      } else {
        setProfile(computeProfile(next));
        setScreen("capture");
      }
    }, 260);
  }

  function handleRestart() {
    setStep(0);
    setAnswers(emptyAnswers());
    setProfile(null);
    setScreen("intro");
  }

  return (
    <div className="mx-auto max-w-[780px] px-5 py-8 sm:py-10">
      {screen === "intro" && <IntroScreen onStart={() => setScreen("quiz")} />}

      {screen === "quiz" && (
        <QuizScreen
          step={step}
          answers={answers}
          onAnswer={handleAnswer}
          onBack={() => setStep((s) => Math.max(0, s - 1))}
        />
      )}

      {screen === "capture" && profile && (
        <CaptureScreen profile={profile} onComplete={() => setScreen("result")} />
      )}

      {screen === "result" && profile && (
        <ResultScreen profile={profile} onRestart={handleRestart} />
      )}
    </div>
  );
}
