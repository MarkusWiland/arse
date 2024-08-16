"use client";
import React, { useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
const arsenalFixtures = [
  {
    date: "2024-08-17",
    time: "16:00",
    homeAway: "Home",
    opponent: "Wolverhampton Wanderers",
    competition: "Premier League",
    broadcaster: "Viasat Premium",
  },
  {
    date: "2024-08-24",
    time: "18:30",
    homeAway: "Away",
    opponent: "Aston Villa",
    competition: "Premier League",
    broadcaster: "Viasat Premium",
  },
  {
    date: "2024-08-31",
    time: "13:30",
    homeAway: "Home",
    opponent: "Brighton & Hove Albion",
    competition: "Premier League",
    broadcaster: "Viasat Premium",
  },
  {
    date: "2024-09-15",
    time: "15:00",
    homeAway: "Away",
    opponent: "Tottenham Hotspur",
    competition: "Premier League",
  },
  {
    date: "2024-09-22",
    time: "17:30",
    homeAway: "Away",
    opponent: "Manchester City",
    competition: "Premier League",
    broadcaster: "Viasat Premium",
  },
  {
    date: "2024-09-28",
    time: "16:00",
    homeAway: "Home",
    opponent: "Leicester City",
    competition: "Premier League",
  },
  {
    date: "2024-10-05",
    time: "16:00",
    homeAway: "Home",
    opponent: "Southampton",
    competition: "Premier League",
  },
  {
    date: "2024-10-20",
    time: "15:00",
    homeAway: "Away",
    opponent: "AFC Bournemouth",
    competition: "Premier League",
  },
  {
    date: "2024-10-27",
    time: "17:30",
    homeAway: "Home",
    opponent: "Liverpool",
    competition: "Premier League",
    broadcaster: "Viasat Premium",
  },
  {
    date: "2024-11-02",
    time: "16:00",
    homeAway: "Away",
    opponent: "Newcastle United",
    competition: "Premier League",
  },
  {
    date: "2024-11-09",
    time: "16:00",
    homeAway: "Away",
    opponent: "Chelsea",
    competition: "Premier League",
  },
  {
    date: "2024-11-23",
    time: "16:00",
    homeAway: "Home",
    opponent: "Nottingham Forest",
    competition: "Premier League",
  },
  {
    date: "2024-11-30",
    time: "16:00",
    homeAway: "Away",
    opponent: "West Ham United",
    competition: "Premier League",
  },
  {
    date: "2024-12-03",
    time: "21:00",
    homeAway: "Home",
    opponent: "Manchester United",
    competition: "Premier League",
  },
  {
    date: "2024-12-07",
    time: "16:00",
    homeAway: "Away",
    opponent: "Fulham",
    competition: "Premier League",
  },
  {
    date: "2024-12-14",
    time: "16:00",
    homeAway: "Home",
    opponent: "Everton",
    competition: "Premier League",
  },
  {
    date: "2024-12-21",
    time: "16:00",
    homeAway: "Away",
    opponent: "Crystal Palace",
    competition: "Premier League",
  },
  {
    date: "2024-12-26",
    time: "16:00",
    homeAway: "Home",
    opponent: "Ipswich Town",
    competition: "Premier League",
  },
  {
    date: "2024-12-29",
    time: "16:00",
    homeAway: "Away",
    opponent: "Brentford",
    competition: "Premier League",
  },
  {
    date: "2025-01-04",
    time: "16:00",
    homeAway: "Away",
    opponent: "Brighton & Hove Albion",
    competition: "Premier League",
  },
  {
    date: "2025-01-14",
    time: "21:00",
    homeAway: "Home",
    opponent: "Tottenham Hotspur",
    competition: "Premier League",
  },
  {
    date: "2025-01-18",
    time: "16:00",
    homeAway: "Home",
    opponent: "Aston Villa",
    competition: "Premier League",
  },
  {
    date: "2025-01-25",
    time: "16:00",
    homeAway: "Away",
    opponent: "Wolverhampton Wanderers",
    competition: "Premier League",
  },
  {
    date: "2025-02-01",
    time: "16:00",
    homeAway: "Home",
    opponent: "Manchester City",
    competition: "Premier League",
  },
  {
    date: "2025-02-15",
    time: "16:00",
    homeAway: "Away",
    opponent: "Leicester City",
    competition: "Premier League",
  },
  {
    date: "2025-02-22",
    time: "16:00",
    homeAway: "Home",
    opponent: "West Ham United",
    competition: "Premier League",
  },
  {
    date: "2025-02-25",
    time: "21:00",
    homeAway: "Away",
    opponent: "Nottingham Forest",
    competition: "Premier League",
  },
  {
    date: "2025-03-08",
    time: "16:00",
    homeAway: "Away",
    opponent: "Manchester United",
    competition: "Premier League",
  },
  {
    date: "2025-03-15",
    time: "16:00",
    homeAway: "Home",
    opponent: "Chelsea",
    competition: "Premier League",
  },
  {
    date: "2025-04-01",
    time: "21:00",
    homeAway: "Home",
    opponent: "Fulham",
    competition: "Premier League",
  },
  {
    date: "2025-04-05",
    time: "16:00",
    homeAway: "Away",
    opponent: "Everton",
    competition: "Premier League",
  },
  {
    date: "2025-04-12",
    time: "16:00",
    homeAway: "Home",
    opponent: "Brentford",
    competition: "Premier League",
  },
  {
    date: "2025-04-19",
    time: "16:00",
    homeAway: "Away",
    opponent: "Ipswich Town",
    competition: "Premier League",
  },
  {
    date: "2025-04-26",
    time: "16:00",
    homeAway: "Home",
    opponent: "Crystal Palace",
    competition: "Premier League",
  },
  {
    date: "2025-05-03",
    time: "16:00",
    homeAway: "Home",
    opponent: "AFC Bournemouth",
    competition: "Premier League",
  },
  {
    date: "2025-05-10",
    time: "16:00",
    homeAway: "Away",
    opponent: "Liverpool",
    competition: "Premier League",
  },
  {
    date: "2025-05-18",
    time: "16:00",
    homeAway: "Home",
    opponent: "Newcastle United",
    competition: "Premier League",
  },
  {
    date: "2025-05-25",
    time: "16:00",
    homeAway: "Away",
    opponent: "Southampton",
    competition: "Premier League",
  },
];

export default function LogoTicker() {
  const controls = useAnimation();
  const x = useMotionValue(0);

  // Function to start the animation
  const startAnimation = () => {
    controls.start({
      x: "-50%",
      transition: {
        duration: 80, // För en mer smidig rörelse
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      },
    });
  };

  // Function to stop the animation
  const stopAnimation = () => {
    controls.stop();
  };

  useEffect(() => {
    startAnimation();
    return () => stopAnimation();
  }, []);
  return (
    <div className="bg-white text-black py-[72px] sm:py-8">
      <div className="container">
        <h2 className="text-2xl text-center text-black/70">Spelschema 2024/2025</h2>
      </div>
      <div className="flex overflow-hidden mt-9 before:content-[''] after:content-[''] before:z-10 before:absolute after:absolute before:h-full after:h-full before:w-12 after:w-12 relative   after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#fff,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#fff,rgb(0,0,0,0))]">
        <motion.div
          style={{ x }} // Bind the x motion value
          animate={controls}
          onHoverStart={stopAnimation}
          onHoverEnd={startAnimation}
          className="flex gap-8 whitespace-nowrap" // Hanterar överflöde och radbrytning
        >
          {arsenalFixtures.map((item, index) => (
            <div
              key={index}
              className="flex-none  border border-black/30 px-6 py-4 text-center rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold text-black">{item.date}</h3>
              <p className="text-md text-gray-300">{item.time}</p>
              <div className="mt-2">
                <p className="text-sm text-gray-400">{item.homeAway}</p>
                <p className="text-sm font-medium text-black">
                  {item.opponent}
                </p>
                <p className="text-sm text-gray-500">{item.competition}</p>
              </div>
            </div>
          ))}
          {arsenalFixtures.map((item, index) => (
            <div
              key={index}
              className="flex-none  border border-black/30 px-6 py-4 text-center rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold text-black">{item.date}</h3>
              <p className="text-md text-gray-300">{item.time}</p>
              <div className="mt-2">
                <p className="text-sm text-gray-400">{item.homeAway}</p>
                <p className="text-sm font-medium text-black">
                  {item.opponent}
                </p>
                <p className="text-sm text-gray-500">{item.competition}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
