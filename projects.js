// ============================================================
//  PROJECTS DATA — This is the ONLY file you need to edit!
// ============================================================
//
//  HOW TO ADD A NEW PROJECT:
//  1. Add your project images to "images/<project>/" (for example images/chessinator/)
//  2. Copy one of the project objects below
//  3. Paste it at the TOP of the array (so it shows first)
//  4. Fill in your details
//  5. Run:  python3 optimize-images.py
//     (builds the small WebP files the site actually loads)
//  6. Save and refresh your site — done!
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
//  FIXING A CROPPED / OFF-CENTER PHOTO:
//  Every image below is normally just a plain filename, e.g.:
//
//      thumbnail: "images/my-project-thumb.jpg"
//
//  Images get cropped to fit their box (thumbnails, hero photos, etc.),
//  and by default that crop is centered — which is why heads or subjects
//  can get cut off. If a specific photo needs adjusting, swap the plain
//  filename for an object with a "focus" point instead:
//
//      thumbnail: { src: "images/my-project-thumb.jpg", focus: "50% 20%" }
//
//  The focus is the point (as % from left, % from top) that the crop will
//  always keep visible. "50% 20%" keeps things centered horizontally but
//  biased toward the top of the photo, so a head near the top doesn't get
//  cut off. You can also use plain words: "top", "bottom", "top left", etc.
//
//  This works on ANY image field: thumbnail, heroImages, section images,
//  and carousel images.
//
//  IMAGE CAROUSEL:
//  Use "carousel" instead of "images" when a section should show one large
//  photo with a filmstrip of the rest underneath. The first item is the one
//  shown large. Nothing moves on its own — a visitor clicks a thumbnail, or
//  uses the left and right arrow keys, to change the photo.
//
//      carousel: [
//        "images/my-project/hero.jpg",
//        { src: "images/my-project/detail.jpg", focus: "50% 30%" }
//      ]
//
//  Don't want to guess the numbers? Open crop-helper.html in your browser,
//  drop the photo in, drag the crosshair to where you want the focus, and
//  it will show you a live preview plus the exact code to paste in.
//
// ============================================================

// Turns an image entry into the attributes the templates need.
// Accepts a filename ("images/x.jpg") or { src, focus }.
// If optimize-images.py has built a variant, the page requests that
// sized WebP instead of the original camera file.
function imgAttrs(entry, role) {
  var src = typeof entry === "string" ? entry : entry.src;
  var style = entry && entry.focus ? "object-position:" + entry.focus + ";" : "";
  var variants = (typeof OPTIMIZED !== "undefined" && OPTIMIZED[src]) || null;
  var eager = role === "hero";
  var sizes = role === "hero"
    ? "(max-width: 768px) 50vw, 280px"
    : role === "card"
      ? "(max-width: 768px) 100vw, 360px"
      : "(max-width: 768px) 100vw, 600px";
  var dims = role === "hero" ? [4, 5] : [16, 10];
  var out = {
    src: src,
    srcset: "",
    sizes: sizes,
    style: style,
    loading: eager ? "eager" : "lazy",
    fetchpriority: "auto",
    width: String(dims[0] * 100),
    height: String(dims[1] * 100)
  };
  if (variants && variants.length) {
    out.srcset = variants.map(function (v) { return v.src + " " + v.w + "w"; }).join(", ");
    var pick = variants[variants.length - 1];
    for (var i = 0; i < variants.length; i++) {
      if (variants[i].w >= 640) { pick = variants[i]; break; }
    }
    out.src = pick.src;
  }
  return out;
}

function imgTag(entry, role, alt, extraClass, highPriority) {
  var a = imgAttrs(entry, role);
  if (highPriority) a.fetchpriority = "high";
  var cls = extraClass ? ' class="' + extraClass + '"' : "";
  var srcset = a.srcset ? ' srcset="' + a.srcset + '" sizes="' + a.sizes + '"' : "";
  var pri = a.fetchpriority === "high" ? ' fetchpriority="high"' : "";
  return '<img' + cls + ' src="' + a.src + '"' + srcset +
    ' width="' + a.width + '" height="' + a.height + '"' +
    ' style="' + a.style + '" alt="' + alt + '"' +
    ' loading="' + a.loading + '" decoding="async"' + pri + '>';
}

const PROJECTS = [
  // URL-friendly ID (no spaces, lowercase, used in the URL)

  {
    id: "treatturbine",
    title: "TreatTurbine",
    subtitle: "Open-source autonomous treat delivery drone for wildlife",
    thumbnail: "images/treatturbine/treatturbine-thumb.jpg",
    heroTitle: "TreatTurbine",
    sections: [
      {
        heading: "The Problem",
        text: "Alveus Sanctuary asked us to create a mechanism to let their livestream audience interact directly with their wolf dog hybrids. Specifically, they requested a system that a viewer could trigger with a donation to deliver treats by drone. Our team of five took this on as a two semester capstone project. The system needed to meet five requirements in order of priority: it had to be safe, reliable, easy to operate, capable of delivering multiple treats without intervention, and spectacular to watch on stream."
      },
      {
        heading: "The Solution",
        carousel: [
          "images/treatturbine/treatturbine-2.jpg",
          "images/treatturbine/treatturbine-drone-isometric.png",
          "images/treatturbine/treatturbine-isometric.png",
          "images/treatturbine/treatturbine-top-down.png",
          "images/treatturbine/treatturbine-drawing.png",
          "images/treatturbine/treatturbine-1.jpg"
        ]
      },
      {
        heading: "In Action",
        video: "https://www.youtube.com/watch?v=TzSdpMenv9s&"
      },
      {
        heading: "Design Challenges",
        text: "The treat-dispensing mechanism, which we named the TreatTurbine, is a partitioned drum with multiple compartments, paired with a TPU ring that can be swapped out as a wear item. A servo with a custom 3D printed arm strikes one tooth to advance the drum a single compartment, then winds back, slipping over the previous tooth to reset for the following strike. Even though the servo had closed-loop position feedback, we weren't able to make it advance exactly one compartment every time, and the drum would occasionally over or under rotate. We solved this by pausing the print partway through and embedding small magnets directly into the drum, letting the drum index itself magnetically instead of relying purely on commanded servo position. That one change made our indexing over 99% reliable in 500 ambient temperature cycles and showed no signs of degradation even after 4+ hours in a heated chamber.\n\nIn parallel, we built an open source drone frame (the S550 hexacopter) and outfitted it as a fully autonomous platform: a Pixhawk flight controller running ArduPilot, a GPS module, a video transmission system, and custom mounting rails to carry the TreatTurbine payload. Because the aircraft needed three independent radio links running simultaneously (manual flight control, telemetry, and live video) interference was a real risk. We split them across three separate bands: the manual radio controller ran at 2.4GHz, telemetry at 900MHz, and the Walksnail Avatar video transmitter at 5.8GHz, keeping all three clear of one another.\n\nThe last piece, still in development with Alveus as they build out the supporting infrastructure, is the audience-facing trigger: a livestream viewer will be able to make a donation through Twitch to autonomously launch a treat-drop mission and spectate in real time."
      },
      {
        heading: "Testing",
        text: "We tested the system in stages. First, we flew a fully autonomous mission in Boston to validate the GPS-guided flight plan and our airframe. Time constraints throughout the academic year pushed our testing into the middle of winter and hampered our testing efforts. However, when Spring came, we pulled all the independently verified components together and traveled to Alveus Sanctuary in Texas. Once there, we performed several shakedown flights in an open field, verifying autonomous flight, airborne treat dispensing, and even radio loss failsafe events. This was followed by a manual test flown with the sanctuary's animal care staff present to confirm not only the safety of the animals, but their comfort. The project culminated in three back-to-back autonomous treat-drop missions flown live on stream, where we were spectated by roughly 1,500 viewers.",
        carousel: [
          "images/treatturbine/treatturbine-4.jpg",
          "images/treatturbine/treatturbine-3.jpg"
        ]
      },
      {
        heading: "Outcome",
        text: "The TreatTurbine successfully and repeatably delivered treats to Awa and Akela in front of a live audience, meeting every requirement Alveus set out. It was safe, reliable, simple to operate, and spectacular to watch. The full project has been taken open source, including the mechanism design and drone build, on GitHub (github.com/skbecken/treatturbine) so other conservationists and hobbyists can build their own. The drone currently remains with Alveus while they finish building the Twitch donation integration that will let viewers trigger drops themselves. We're also hopeful that a system like ours can be used to empower conservationists in missions like vaccine delivery to remote animal populations.",
        images: [
          "images/treatturbine/treatturbine-5.jpg"
        ]
      }
    ]
  },
  {
    id: "coin-collector",

    // What shows on the project card on the home page
    title: "Coin Collecting Robot",
    subtitle: "Hackathon: 2nd Place Finish",
    thumbnail: { src: "images/coin-collector/coin-collector-2b.png", focus: "49% 63%" },

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
          { src: "images/coin-collector/coin-collector-1.jpg", focus: "32% 80%" },
          { src: "images/coin-collector/coin-collector-2b.png", focus: "49% 63%" }
        ]
      },
      {
        heading: "Competition Challenges",
        text: "Over the course of the week long construction phase, the design and prototype went through several iterations. Because of the thin profile of the coins, a mechanical grabbing mechanism would not have been feasible. Our initial design utilized an electromagnet, but the competition requirements mandated that we construct our own. After spending nearly the entire week prototyping the electromagnet alone, we produced a couple of models capable of lifting a maximum of 3 coins simultaneously. The night before the competition the call was made that the electromagnet would not be competition ready.\n\nThe team spent the entire night from 6pm until 8am the following morning designing and implementing a new conveyor based magnet system. While admittedly less interesting than a homemade electromagnet, the conveyor of magnets proved far more reliable. Additionally, the newly designed and 3D printed storage funnel could hold over a dozen coins in between drop off runs."
      },
      {
        heading: "Outcome",
        text: "After 8 rounds of competition, our team placed 2nd overall. Due to the last minute construction of the robot, reliability issues took us out of commission for the first couple of rounds. Significantly stronger performances in the later rounds made up for the lost points and allowed us to overtake our competitors.",
        images: ["images/coin-collector/coin-collector-outcome.jpg"]
      }
    ]
  },

  {
    id: "chessinator",
    title: "Chess-inator",
    subtitle: "Chess-playing robot with 2.5 DOF",
    thumbnail: "images/chessinator/chessinator-thumb.png",
    heroTitle: "Chess-inator",
    sections: [
      {
        heading: "The Problem",
        text: "For this school project, we were tasked with creating a system that used 2.5 degrees of freedom to accomplish an outcome of our choosing. My team decided to create a robot capable of manipulating chess pieces in 3D space. We named our robot the Chess-inator in an homage to Phineas and Ferb villain Dr Heinz Doofenshmirtz."
      },
      {
        heading: "The Solution",
        images: [
          "images/chessinator/chessinator-1.jpg",
          "images/chessinator/chessinator-2.png"
        ]
      },
      {
        heading: "In Action",
        video: "images/chessinator/chessinator-video.mov"
      },
      {
        heading: "Design Challenges",
        text: "This project had 3 primary components: The structure and layout, the electronics and integration, and the end effector including the Z axis.\n\nThe structure was fairly straightforward; we decided on aluminum extrusion construction and stepper motors with a belt to drive motion. The board itself was cut from a sheet of acrylic and engraved with a scaled image of a chessboard. Acrylic was chosen for its ease of workability and final surface quality.\n\nThe electronics were complicated because of our chosen manipulation method and control board. We elected to use an electromagnet to capture the piece and a servo driven Z axis to raise and lower the pieces. While the servo could be controlled directly by the MKS 3D printer board, there was no output for the electromagnet. We had originally planned to use the fan output as a switching 12V source, but were unable to validate that method. In the end I found that a motor output could be manipulated into outputting 12V across 2 of its 4 pins with a specific GCODE command. Using parts outside of their intended use case was the breakthrough needed to make this project possible.\n\nThe end effector was engineered with packaging as a priority. Lightweight was a necessity so that the system could make moves as fast as possible. It would have been easier and more precise to use a much larger stepper motor, but that would have raised the weight and size of the end effector unacceptably. Instead, a servo motor was chosen. The servo motor had adequate accuracy and power to move the weight of the electromagnet and a piece without being over-specced (and overweight) for the job."
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
    thumbnail: "images/flight-club/flight-club-thumb.jpg",
    heroTitle: "Center Console Fabrication",
    sections: [
      {
        heading: "The Problem",
        text: "The connectors for pilot and copilot headphones protruded from the manufacturer provided panel. This put undue stress on the expensive connectors leading to premature wear and took up too much room in an already cramped cockpit. Additionally, the pilot wanted the option to add USB charging capabilities to the panel."
      },
      {
        heading: "The Solution",
        images: [
          "images/flight-club/flight-club-1.jpg",
          "images/flight-club/flight-club-2.jpg"
        ]
      },
      {
        heading: "Outcome",
        text: "I created a system of interchangeable buckets that could support audio connectors, USB plugs, or any future expansion that could slot into cutouts in a carbon fiber plate. Carbon fiber was selected because of its high stiffness, light weight, and undeniable style. It was cut to size on a water jet cutter and the buckets were 3D printed and inserted.\n\nIn the end, the angled buckets provided the needed strain relief and routed the cables in such a manner to save crucial space in the cabin. The carbon fiber plate and 3D printed inserts remain in active use replacing the older compromised fiberglass. The modular design also allows later expansion as deemed necessary."
      }
    ]
  },

  {
    id: "formlabs",
    title: "Formlabs Design Work",
    subtitle: "R&D prototyping and sheet metal design",
    thumbnail: "images/formlabs/formlabs-thumb.jpg",
    heroTitle: "Formlabs",
    sections: [
      {
        heading: "Impact",
        text: "Over the course of my 8 weeks with Formlabs, I completed numerous projects advancing progress and removing roadblocks on our road to prototype 1 for the project that would eventually become the Fuse X1. My work included: working with suppliers to cut lead times and negotiate discounts, designing and implementing testing mechanisms for mission-critical parts, and designing peripheral systems to support prototype 1. Though my internship wasn't long enough to see the Fuse X1 to its release, it was hugely rewarding to work on a product so early in development."
      },
      {
        heading: "Sheet Metal Design",
        images: [
          "images/formlabs/formlabs-filter-box-cad-exploded.png",
          "images/formlabs/formlabs-heater-test-bench-at-furnace.jpg"
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
    thumbnail: "images/laser-communication/laser-comm-transmitter-render.png",
    heroTitle: "Laser Communication System",
    sections: [
      {
        heading: "The Problem",
        text: "In this school project, my team of four was tasked with creating a light transmitter capable of sending a numerical character to a receiver 5 feet away, anywhere within a 180° span. We were constrained to a $200 budget and the whole system had to fit within a shoe box."
      },
      {
        heading: "The Solution",
        images: [
          "images/laser-communication/laser-comm-turntable-render.png",
          "images/laser-communication/laser-comm-transmitter-render.png"
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
    thumbnail: { src: "images/model-plane/model-plane-cad-isometric.png", focus: "42% 50%" },
    heroTitle: "Model Plane Development",
    sections: [
      {
        heading: "The Challenge",
        text: "As a personal project, there were no externally set goals for my model plane, so I made some up. I wanted a plane that was capable of sustained flight (more than 7 minutes), cost effective (under $100), and most importantly, fun to fly. This challenge was taken on with the primary goal of expanding my skill set as a problem solver, maker, and engineer. The images below show (in chronological order) the first failed design, the first design that worked, and my plans for what will come next."
      },
      {
        heading: "The Product",
        carousel: [
          "images/model-plane/model-plane-cardboard-delta-crashed.jpg",
          "images/model-plane/model-plane-foam-with-radio.jpg",
          "images/model-plane/model-plane-foam-landing-gear.jpg",
          "images/model-plane/model-plane-cad-isometric.png",
          "images/model-plane/model-plane-cad-tail-rear.png",
          "images/model-plane/model-plane-twin-boom-cad.jpg"
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
    thumbnail: "images/protective-covers/covers-thumb.jpg",
    heroTitle: "3D Printed Protective Covers and Tools",
    sections: [
      {
        heading: "The Problem(s)",
        text: "In working for Pursuit Aerospace, one of the problems I was asked to solve is that many parts would be damaged in process and be written off entirely due to the strict quality standards necessitated by the aerospace industry. This meant that small nicks or dents could total a part costing tens of thousands of dollars. The proposed solution was to design and produce protective covers that would prevent some of the most common failure modes while the parts were in progress.\n\nI was also asked to assist in creating jigs that increase the efficiency of the various operators to streamline repetitive tasks. To do this, I took inspiration from the imperfect solutions they had already come up with. I then made them more ergonomically friendly and reproducible at a larger scale and removed the dependency on a single original by digitizing it."
      },
      {
        heading: "The Solution",
        images: [
          "images/protective-covers/covers-1.jpg",
          "images/protective-covers/covers-2.jpg"
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
  siteTitle: "Harrison Grant - Mechanical Engineer",
  linkedIn: "https://www.linkedin.com/in/harrisongrant04/",
  email: "hgrant@bu.edu",
  phone: "781-535-1233",
  resumeFile: "images/resume/resume.pdf",   // Put your resume PDF in the images folder
  aboutText: "I'm a mechanical engineer searching for my next challenge. I graduated from Boston University's Mechanical Engineering program with a concentration in robotics. I have industry experience in both the aerospace industry and product research and development. I have a wide breadth of experience in additive manufacturing, prototyping, electronics, and data analysis. ",
  heroImages: [
    "images/hero/hero-1.jpg",
    "images/hero/hero-2.jpg"
  ]
};
