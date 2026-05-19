// ============================================================
//  PROJECTS DATA — This is the ONLY file you need to edit!
// ============================================================
//
//  HOW TO ADD A NEW PROJECT:
//  1. Add your project images to the "images/" folder
//  2. Copy one of the project objects below
//  3. Paste it at the TOP of the array (so it shows first)
//  4. Fill in your details
//  5. Save and refresh your site — done!
//
//  HOW TO EDIT A PROJECT:
//  Just change the text below and save.
//
//  HOW TO REMOVE A PROJECT:
//  Delete everything between its { and }, including the comma after.
//
//  HOW TO REORDER PROJECTS:
//  Cut and paste a whole { ... }, block to move it up or down.
//
// ============================================================

const PROJECTS = [
  {
    // URL-friendly ID (no spaces, lowercase, used in the URL)
    id: "coin-collector",

    // What shows on the project card on the home page
    title: "Coin Collecting Robot",
    subtitle: "Hackathon — 2nd Place",
    thumbnail: "images/coin-collector-thumb.jpg",

    // Full project page content
    heroTitle: "The Coin Collector",
    sections: [
      {
        heading: "The Competition",
        text: "This one week long competition required the competitors to devise, design, and construct a robot capable of driving around an arena, picking up flat coins, and placing them in a small slot in an elevated box under a 3 minute time crunch. Out of a total of 7 teams of 4, ours placed 2nd even after a few critical malfunctions in the early rounds."
      },
      {
        heading: "The Robot",
        images: [
          "images/coin-collector-1.jpg",
          "images/coin-collector-2.jpg"
        ]
      },
      {
        heading: "Competition Challenges",
        text: "Over the course of the week long construction phase, the design and prototype went through several iterations. Because of the thin profile of the coins, a mechanical grabbing mechanism would not have been feasible. Our initial design utilized an electromagnet, but the competition requirements mandated that we construct our own. After spending nearly the entire week prototyping the electromagnet alone, we produced a couple of models capable of lifting a maximum of 3 coins simultaneously. The night before the competition the call was made that the electromagnet would not be competition ready.\n\nThe team spent the entire night from 6pm until 8am the following morning designing and implementing a new conveyor based magnet system. While admittedly less interesting than a homemade electromagnet, the conveyor of magnets proved far more reliable. Additionally, the newly designed and 3D printed storage funnel could hold over a dozen coins in between drop off runs."
      },
      {
        heading: "Outcome",
        text: "After 8 rounds of competition, our team placed 2nd overall. Due to the last minute construction of the robot, reliability issues took us out of commission for the first couple of rounds. Significantly stronger performances in the later rounds made up for the lost points and allowed us to overtake our competitors.",
        images: ["images/coin-collector-outcome.jpg"]
      }
    ]
  },

  {
    id: "chessinator",
    title: "Chess-inator",
    subtitle: "Chess-playing robot with 2.5 DOF",
    thumbnail: "images/chessinator-thumb.png",
    heroTitle: "Chess-inator",
    sections: [
      {
        heading: "The Problem",
        text: "For this school project, we were tasked with creating a system that used 2.5 degrees of freedom to accomplish an outcome of our choosing. My team decided to create a robot capable of manipulating chess pieces in 3D space. We named our robot the Chess-inator in an homage to Phineas and Ferb villain Dr Heinz Doofenshmirtz."
      },
      {
        heading: "The Solution",
        images: [
          "images/chessinator-1.jpg",
          "images/chessinator-2.png"
        ]
      },
      {
        heading: "Design Challenges",
        text: "This project had 3 primary components: The structure and layout, the electronics and integration, and the end effector including the Z axis.\n\nThe structure was fairly straightforward — we decided on aluminum extrusion construction and stepper motors with a belt to drive motion. The board itself was cut from a sheet of acrylic and engraved with a scaled image of a chessboard. Acrylic was chosen for its ease of workability and final surface quality.\n\nThe electronics were complicated because of our chosen manipulation method and control board. We elected to use an electromagnet to capture the piece and a servo driven Z axis to raise and lower the pieces. While the servo could be controlled directly by the MKS 3D printer board, there was no output for the electromagnet. We had originally planned to use the fan output as a switching 12V source, but were unable to validate that method. In the end I found that a motor output could be manipulated into outputting 12V across 2 of its 4 pins with a specific GCODE command. Using parts outside of their intended use case was the breakthrough needed to make this project possible.\n\nThe end effector was engineered with packaging as a priority. Lightweight was a necessity so that the system could make moves as fast as possible. It would have been easier and more precise to use a much larger stepper motor, but that would have raised the weight and size of the end effector unacceptably. Instead, a servo motor was chosen. The servo motor had adequate accuracy and power to move the weight of the electromagnet and a piece without being over-specced (and overweight) for the job."
      },
      {
        heading: "Outcome",
        text: "In the end, our team created a robotic system capable of consistently moving chess pieces around the chess board. The system was reliable enough to play through an entire game without misplacing pieces or losing its spatial calibration."
      }
    ]
  },

  {
    id: "flight-club",
    title: "BU Flight Club",
    subtitle: "Center console design for airplane interior",
    thumbnail: "images/flight-club-thumb.jpg",
    heroTitle: "Center Console Fabrication",
    sections: [
      {
        heading: "The Problem",
        text: "The connectors for pilot and copilot headphones protruded from the manufacturer provided panel. This put undue stress on the expensive connectors leading to premature wear and took up too much room in an already cramped cockpit. Additionally, the pilot wanted the option to add USB charging capabilities to the panel."
      },
      {
        heading: "The Solution",
        images: [
          "images/flight-club-1.jpg",
          "images/flight-club-2.png"
        ]
      },
      {
        heading: "Outcome",
        text: "I created a system of interchangeable buckets that could support audio connectors, USB plugs, or any future expansion that could slot into cutouts in a carbon fiber plate. Carbon fiber was selected because of its high stiffness, light weight, and undeniable style. It was cut to size on a water jet cutter and the buckets were 3D printed and inserted.\n\nIn the end, the angled buckets provided the needed strain relief and routed the cables in such a manner to save crucial space in the cabin. The carbon fiber and 3D printed plate remains in active use replacing the older compromised fiberglass. The modular design also allows later expansion as deemed necessary."
      }
    ]
  },

  {
    id: "formlabs",
    title: "Formlabs Design Work",
    subtitle: "R&D prototyping and sheet metal design",
    thumbnail: "images/formlabs-thumb.jpg",
    heroTitle: "Formlabs",
    sections: [
      {
        heading: "Impact",
        text: "Over the course of my 8 weeks with Formlabs, I completed numerous projects advancing progress and removing roadblocks on our road to prototype 1. Because of the nature of R&D work, details are bounded by concerns about intellectual property, but my work included: working with suppliers to cut lead times and negotiate discounts, designing and implementing testing mechanisms for mission-critical parts, and designing peripheral systems to support prototype 1."
      },
      {
        heading: "Sheet Metal Design",
        images: [
          "images/formlabs-1.jpg",
          "images/formlabs-2.png"
        ]
      },
      {
        heading: "Design Choices and Challenges",
        text: "The above photos show three projects that I completed during my tenure. The first and most complicated was a sheet metal box to hold a HEPA grade air filter. The main challenge was that the filter box needed to be air tight but also serviceable. I needed to design a mating interface that could be opened to replace the filter, then reliably resealed. This was the driving force in the abundance of bolts around the mating face and the rivets sealing the non serviceable interfaces. Mating surfaces were sealed with gaskets and gaps were filled with RTV sealant.\n\nThe second project shown is a test bench for a series of air heaters of varying sizes. While I would have preferred to print the stands, the extreme heat required that sheet metal be used. Other design constraints included designing something I could manufacture myself with basic sheet metal techniques. This project was particularly rewarding because I took it from conception through design, DFM, manufacturing, assembly, and implementation."
      }
    ]
  },

  {
    id: "laser-communication",
    title: "Laser Communication System",
    subtitle: "Light-based data transmission system",
    thumbnail: "images/laser-thumb.png",
    heroTitle: "Laser Communication System",
    sections: [
      {
        heading: "The Problem",
        text: "In this school project, my team of four was tasked with creating a light transmitter capable of sending a numerical character to a receiver 5 feet away, anywhere within a 180° span. We were constrained to a $200 budget and the whole system had to fit within a shoe box."
      },
      {
        heading: "The Solution",
        images: [
          "images/laser-1.png",
          "images/laser-2.png"
        ]
      },
      {
        heading: "Outcome",
        text: "Our project was a success across the board, exceeding all client requirements. We were able to create a system capable of rapidly transmitting (5 bit/sec) 5 character messages over 70 feet all while under budget. We elected to use an Arduino microcontroller to handle processing on either side, and a red laser for our light medium.\n\nI was primarily responsible for the laser aiming turntable, transmitter software, acrylic enclosure, and all 3D printed fixtures. The turntable in particular required a lot of development including multiple physical prototypes in addition to the detailed and kinematically accurate CAD model. I decided to power it using a continuous rotation PWM servo motor with 3D printed gears. I also included a slip ring to enable 360° continuous rotation, more than the client minimum of 180°."
      }
    ]
  },

  {
    id: "model-plane",
    title: "Model Plane Development",
    subtitle: "Ongoing RC airplane design and iteration",
    thumbnail: "images/plane-thumb.png",
    heroTitle: "Model Plane Development",
    sections: [
      {
        heading: "The Challenge",
        text: "As a personal project, there were no externally set goals for my model plane, so I made some up. I wanted a plane that was capable of sustained flight (more than 7 minutes), cost effective (under $100), and most importantly, fun to fly. This challenge was taken on with the primary goal of expanding my skill set as a problem solver, maker, and engineer. The images below show (in chronological order) the first failed design, the first design that worked, and my plans for what will come next."
      },
      {
        heading: "The Product",
        images: [
          "images/plane-1.jpg",
          "images/plane-2.jpg"
        ]
      },
      {
        heading: "Outcome",
        text: "As an ongoing project I have seen several important milestones throughout development. From the first delta shaped airframe to the first successful prototype with a traditional airframe, I have learned a lot about problem solving in addition to the specifics of flight. I am now carrying on those lessons to the design I have spent the last several months working on. From the asymmetrical airfoil selection to the servo motors and control surfaces, each design choice made was informed by various successes and failures."
      }
    ]
  },

  {
    id: "protective-covers",
    title: "3D Printed Protective Covers",
    subtitle: "In-process manufacturing protection at Pursuit Aerospace",
    thumbnail: "images/covers-thumb.jpg",
    heroTitle: "3D Printed Protective Covers and Tools",
    sections: [
      {
        heading: "The Problem(s)",
        text: "In working for Pursuit Aerospace, one of the problems I was asked to solve is that many parts would be damaged in process and be written off entirely due to the strict quality standards necessitated by the aerospace industry. This meant that small nicks or dents could total a part costing tens of thousands of dollars. The proposed solution was to design and produce protective covers that would prevent some of the most common failure modes while the parts were in progress.\n\nI was also asked to assist in creating jigs that increase the efficiency of the various operators to streamline repetitive tasks. To do this, I took inspiration from the imperfect solutions they had already come up with. I then made them more ergonomically friendly and reproducible at a larger scale and removed the dependency on a single original by digitizing it."
      },
      {
        heading: "The Solution",
        images: [
          "images/covers-1.jpg",
          "images/covers-2.jpg"
        ]
      },
      {
        heading: "Outcome",
        text: "I created various covers for different parts resulting in a decrease in the in-process failures. These covers were printed out of TPU for its flexibility which allowed an easy (and satisfying) snap on fit. TPU's soft protective texture kept both the machine operators and the valuable parts safe. I also produced 3D printing profiles and a detailed guide on the production of these pieces to ensure that they remained useful after my departure.\n\nI also created tools for improving efficiency at various points in the process like templates for marking parts or caps that prevent hardware from falling into hard to reach crevices. Creating templates was accomplished by taking the existing handmade templates used by the operators and digitizing then 3D printing them with improved consistency and ergonomics. These were printed out of PLA for its consistent rigidity."
      }
    ]
  }
];

// ============================================================
//  SITE SETTINGS — Edit these to change global site info
// ============================================================

const SITE_CONFIG = {
  name: "Harrison Grant",
  siteTitle: "Engineering Portfolio",
  linkedIn: "https://www.linkedin.com/in/harrisongrant04/",
  email: "hgrant@bu.edu",
  phone: "781-535-1233",
  resumeFile: "images/resume.pdf",   // Put your resume PDF in the images folder
  aboutText: "I'm a mechanical engineer from Boston University graduating in 2026. I have industry experience from Pursuit Aerospace in Malden, MA, Inventia Life Sciences in Sydney, Australia, and Formlabs in Somerville, MA. I have a wide breadth of experience in additive manufacturing, prototyping, electronics, and data analysis. My most developed skills include CAD (Onshape, Fusion360, and Solidworks) and 3D printing (FDM, SLA, and SLS). Those are my go-to tools when presented with a new challenge, though I also have familiarity with metal fabrication (sheet metal, machining, CNC) and other forms of manufacturing.",
  heroImages: [
    "images/hero-1.jpg",
    "images/hero-2.jpg"
  ]
};
