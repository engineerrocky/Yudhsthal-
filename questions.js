const examData = {
    examName: "SSC JE 2025 3 DECEMBER SHIFT 1",
    timeInMinutes: 25,
    questions: [
  { 
    q: "In brick masonry, the frog of the brick is generally kept:", 
    opt: ["On the top face", "On the bottom face", "On the side face", "On the inner face"], 
    ans: 0, 
    sol: "The 'frog' is a depression on the brick's face used to form a mechanical bond (key) with mortar and is kept on the top face." 
  },
  { 
    q: "Which test is used to determine the hardness of stones?", 
    opt: ["Attrition test", "Crushing test", "Smith's test", "Brinell hardness test"], 
    ans: 0, 
    sol: "The Attrition test (Deval Attrition Test) determines the rate of wear or hardness of stones due to rubbing action." 
  },
  { 
    q: "The setting time of cement is tested using:", 
    opt: ["Le Chatelier apparatus", "Vicat apparatus", "Slump cone", "Rebound hammer"], 
    ans: 1, 
    sol: "The Vicat apparatus is the standard equipment used to determine the standard consistency, initial setting time, and final setting time of cement." 
  },
  { 
    q: "What is the standard nominal size (in cm) of modular bricks including mortar thickness?", 
    opt: ["20x10x10", "19x9x9", "19x9x4", "20x10x5"], 
    ans: 0, 
    sol: "Modular brick actual size is 19cm x 9cm x 9cm; adding 1cm mortar joints makes the nominal size 20cm x 10cm x 10cm." 
  },
  { 
    q: "Which rock is formed by the metamorphic action on limestone?", 
    opt: ["Marble", "Quartzite", "Slate", "Schist"], 
    ans: 0, 
    sol: "Limestone (sedimentary) undergoes recrystallization under intense heat and pressure to transform into Marble." 
  },
  { 
    q: "Timber should be seasoned before use in construction because:", 
    opt: ["It increases the specific gravity of the wood.", "It improves strength, durability, and reduces weight by removing moisture.", "It makes the wood fire-resistant.", "It changes the chemical composition of the wood fibers."], 
    ans: 1, 
    sol: "Seasoning reduces moisture content, making wood lighter, stronger, and more dimensionally stable." 
  },
  { 
    q: "In a structural wall requiring maximum lateral stability and uniform vertical load distribution, which bond is most effective?", 
    opt: ["Flemish bond", "Header bond", "Rat-trap bond", "English bond"], 
    ans: 3, 
    sol: "The English bond, consisting of alternating courses of headers and stretchers, is the structurally strongest masonry bond." 
  },
  { 
    q: "Which component of a tree is responsible for transporting water from the roots to the leaves?", 
    opt: ["Heartwood", "Phloem", "Xylem", "Cambium"], 
    ans: 2, 
    sol: "The Xylem tissue acts as the primary transport system for water and minerals from the roots to the leaves." 
  },
  { 
    q: "According to Abrams' Law, the strength of concrete is primarily a function of:", 
    opt: ["The amount of cement content", "The water-cement ratio", "The type of aggregate used", "The temperature during casting"], 
    ans: 1, 
    sol: "Abrams' Law establishes an inverse relationship between compressive strength and the water-cement (w/c) ratio." 
  },
  { 
    q: "Concrete is a material that performs best under which stress condition?", 
    opt: ["Tension", "Shear", "Compression", "Torsion"], 
    ans: 2, 
    sol: "Concrete is a brittle material with high compressive strength but very low tensile strength." 
  },
  { 
    q: "In chain surveying, what is the purpose of an 'Offset'?", 
    opt: ["To increase the length of the chain line", "To locate ground features relative to the main survey line", "To correct errors in measurement", "To align the chain with the North pole"], 
    ans: 1, 
    sol: "An offset is a short, lateral measurement from the main survey line to locate ground details like buildings or roads." 
  },
  { 
    q: "A 30-meter metric chain consists of how many links?", 
    opt: ["100 links", "150 links", "200 links", "120 links"], 
    ans: 1, 
    sol: "In a 30m chain, each link is 0.2m, so 30m / 0.2m = 150 links." 
  },
  { 
    q: "In plane table surveying, the 'Intersection Method' is primarily used for:", 
    opt: ["Detailed mapping of accessible areas", "Locating objects that are inaccessible", "Establishing the primary control stations", "Measuring horizontal angles only"], 
    ans: 1, 
    sol: "The intersection method is used to locate points that cannot be reached on the ground (e.g., across a river)." 
  },
  { 
    q: "What is the primary advantage of using a Plane Table for surveying?", 
    opt: ["It is faster than Theodolite surveying", "It allows for simultaneous observation and plotting", "It provides higher precision for long-distance measurements", "It is immune to weather conditions"], 
    ans: 1, 
    sol: "Plane table surveying allows the map to be drawn on-site, which eliminates the chance of omitting data." 
  },
  { 
    q: "Which of the following is the most suitable instrument for measuring both horizontal and vertical angles in surveying?", 
    opt: ["Dumpy Level", "Theodolite", "Plane Table", "Clinometer"], 
    ans: 1, 
    sol: "A Theodolite is a precision instrument designed specifically to measure both horizontal and vertical angles with high accuracy." 
  },
  { 
    q: "What is the primary purpose of adding Gypsum to cement during its manufacturing?", 
    opt: ["To increase the early strength of the cement", "To retard the initial setting time of the cement", "To improve the final compressive strength", "To change the color of the cement"], 
    ans: 1, 
    sol: "Gypsum acts as a retarder to delay the reaction of tricalcium aluminate, preventing 'flash set'." 
  },
  { 
    q: "Which of the following is considered an 'Igneous' rock?", 
    opt: ["Limestone", "Marble", "Granite", "Slate"], 
    ans: 2, 
    sol: "Granite is the most common intrusive igneous rock, formed by the slow cooling of magma beneath the Earth's surface." 
  },
  { 
    q: "In a leveling operation, what is the 'Backsight'?", 
    opt: ["The last reading taken from a station", "The first reading taken after setting up the instrument", "The reading taken at a point of unknown elevation", "The average of all readings taken"], 
    ans: 1, 
    sol: "A Backsight (BS) is the first staff reading taken on a point of known elevation after setting up the leveling instrument." 
  },
  { 
    q: "What is the definition of 'Contour Interval' in a topographic map?", 
    opt: ["The horizontal distance between two consecutive contour lines", "The vertical distance between two consecutive contour lines", "The slope angle between two contour lines", "The ratio of horizontal to vertical distance"], 
    ans: 1, 
    sol: "The contour interval is the constant vertical distance between two successive contour lines on a map." 
  },
  { 
    q: "In soil mechanics, the 'Void Ratio' is defined as the ratio of:", 
    opt: ["Volume of voids to total volume", "Volume of water to volume of solids", "Volume of voids to volume of solids", "Weight of water to weight of solids"], 
    ans: 2, 
    sol: "The void ratio (e) is defined as the ratio of the volume of voids (Vv) to the volume of solids (Vs)." 
  },
  { 
    q: "In the context of irrigation, what is 'Duty'?", 
    opt: ["The total volume of water required for a crop.", "The area of land irrigated per unit discharge of water.", "The time period between the first and last watering of a crop.", "The depth of water required for a crop."], 
    ans: 1, 
    sol: "Duty (D) represents the area of land (in hectares) that can be fully irrigated by a continuous supply of water at a rate of 1 cumec." 
  },
  { 
    q: "According to Kennedy's theory for the design of irrigation canals, what is the 'Critical Velocity'?", 
    opt: ["The velocity at which silting occurs.", "The velocity at which scouring occurs.", "The velocity at which there is neither silting nor scouring.", "The maximum velocity the canal can withstand."], 
    ans: 2, 
    sol: "Critical velocity (V0) is the mean velocity of flow that maintains the channel in a stable condition, preventing both silting and scouring." 
  },
  { 
    q: "Which phenomenon occurs when flow in an open channel changes from supercritical to subcritical?", 
    opt: ["Hydraulic Gradient", "Hydraulic Jump", "Laminar Flow", "Uniform Flow"], 
    ans: 1, 
    sol: "A hydraulic jump is a sudden rise in water level occurring when high-velocity supercritical flow meets slower-moving subcritical flow." 
  },
  { 
    q: "What does the 'BOD' (Biochemical Oxygen Demand) test measure in water quality analysis?", 
    opt: ["The total amount of oxygen present in the water.", "The amount of organic matter available for bacterial growth.", "The amount of dissolved oxygen required by microorganisms for aerobic decomposition of organic matter over a specific period.", "The chemical concentration of inorganic pollutants."], 
    ans: 2, 
    sol: "BOD measures the amount of dissolved oxygen consumed by aerobic microorganisms as they oxidize biodegradable organic matter." 
  },
  { 
    q: "In soil mechanics, the 'Plasticity Index' (Ip) indicates:", 
    opt: ["The range of water content over which the soil remains plastic.", "The total amount of clay present in the soil.", "The shrinkage limit of the soil.", "The permeability of the soil."], 
    ans: 0, 
    sol: "The Plasticity Index (Ip) is the numerical difference between the Liquid Limit and Plastic Limit, representing the range where soil behaves like a plastic material." 
  },
  { 
    q: "In concrete technology, what is the effect of 'Workability'?", 
    opt: ["It measures the strength of concrete.", "It defines the ease with which concrete can be mixed, placed, compacted, and finished without segregation.", "It is solely determined by the amount of aggregate used.", "It is a property that increases with the age of concrete."], 
    ans: 1, 
    sol: "Workability is a physical property defined by the ease with which concrete can be mixed, placed, compacted, and finished." 
  },
  { 
    q: "Which device is used to measure the 'discharge' in an open channel or pipe?", 
    opt: ["Pitot Tube", "Venturi Meter", "Manometer", "Hydrometer"], 
    ans: 1, 
    sol: "A Venturi meter works on Bernoulli's principle, measuring pressure differences to calculate the rate of discharge." 
  },
  { 
    q: "In surveying, what is 'Local Attraction'?", 
    opt: ["Attraction of the needle by the earth's magnetic field.", "Error in compass readings caused by magnetic substances near the instrument.", "The variation of the magnetic meridian over time.", "The effect of wind on the leveling staff."], 
    ans: 1, 
    sol: "Local attraction occurs when magnetic objects nearby deflect the compass needle, causing inaccurate bearing readings." 
  },
  { 
    q: "Which type of 'Bonds' in brickwork is considered to be the most aesthetic, showing both headers and stretchers in every course?", 
    opt: ["English Bond", "Flemish Bond", "Stretcher Bond", "Header Bond"], 
    ans: 1, 
    sol: "Flemish bond consists of alternating headers and stretchers in each course and is considered more visually appealing." 
  },
  { 
    q: "What is the 'Coefficient of Uniformity' (Cu) used for in soil classification?", 
    opt: ["To determine the soil's strength.", "To classify soil based on particle size distribution.", "To measure the permeability of soil.", "To define the soil's plastic range."], 
    ans: 1, 
    sol: "The Coefficient of Uniformity (Cu = D60/D10) measures how well-graded or poorly-graded a soil is." 
  }
]


};
