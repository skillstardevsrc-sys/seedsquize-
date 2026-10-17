export interface TherapyArea {
  title: string;
  desc: string;
  iconName: string;
  points: string[];
}

export interface TherapyStep {
  step: string;
  title: string;
  desc: string;
}

export interface TherapyFaq {
  question: string;
  answer: string;
}

export interface TherapyData {
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string[];
  shortTitle: string;
  badge: string;
  tagline: string;
  heroHighlight: string;
  heroDescription: string;
  heroImage?: string;
  heroImageAlt?: string;
  overviewHeading: string;
  overviewSubtitle?: string;
  overviewParagraphs: string[];
  overviewPhilosophy?: {
    title: string;
    desc: string;
  };
  overviewSideCard?: {
    title: string;
    subtitle: string;
    description: string;
    points: string[];
    btnText?: string;
  };
  quickStats: { label: string; value: string; desc: string }[];
  howItHelps?: {
    title: string;
    subtitle: string;
    description: string;
    points: string[];
  };
  whoIsItFor: {
    heading: string;
    subtitle?: string;
    description: string;
    signs: string[];
    reassurance?: string;
    ctaText?: string;
    ctaLink?: string;
  };
  coreAreasHeading: string;
  coreAreasSubtitle?: string;
  coreAreasDescription: string;
  coreAreas: TherapyArea[];
  ourApproachHeading: string;
  ourApproachSubtitle?: string;
  ourApproachDescription: string;
  ourApproachSteps: TherapyStep[];
  autismSection?: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    ctaText?: string;
    ctaLink?: string;
  };
  adhdSection?: {
    title: string;
    subtitle: string;
    paragraphs: string[];
  };
  whyChooseSection?: {
    title: string;
    subtitle: string;
    description: string;
    points: string[];
  };
  bestCenterSection?: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    ctaText?: string;
    ctaLink?: string;
  };
  specializedFacilities: {
    title: string;
    items: { name: string; desc: string; iconName: string }[];
  };
  benefits: {
    title: string;
    items: string[];
  };
  supportedConditions: string[];
  faqs: TherapyFaq[];
  finalCta?: {
    title: string;
    paragraphs: string[];
    primaryBtn: string;
    secondaryBtn: string;
  };
  relatedTherapies: {
    slug: string;
    title: string;
    desc: string;
    badge: string;
  }[];
}

export const therapiesData: Record<string, TherapyData> = {
  "occupational-therapy": {
    slug: "occupational-therapy",
    title: "Best Pediatric Occupational Therapy Center in Coimbatore",
    metaTitle: "Occupational Therapy for Children in Coimbatore | Seeds Therapy",
    metaDescription:
      "Occupational Therapy for Children in Coimbatore supports sensory, motor, and daily living skills, helping children build confidence and independence.",
    metaKeywords: [
      "Occupational Therapy for Children in Coimbatore",
      "Best Pediatric Occupational Therapy Center in Coimbatore",
      "occupational therapy in Coimbatore",
      "occupational therapy for children",
      "occupational therapy for children in coimbatore",
      "Best occupational therapist in Coimbatore",
      "occupational therapist in Coimbatore",
      "occupational therapist for children",
      "occupational therapy for kids",
      "occupational therapy for kids in coimbatore",
      "Seeds Therapy Center Coimbatore",
      "sensory integration therapy Coimbatore",
    ],
    shortTitle: "Occupational Therapy",
    badge: "Pediatric Care",
    tagline: "Helping Children Grow, Learn, Play & Become More Independent",
    heroHighlight: "Helping Children Grow, Learn, Play & Become More Independent",
    heroDescription:
      "Seeds Therapy Center provides personalized pediatric occupational therapy in Coimbatore to support children with sensory, motor, attention, coordination, self-care and everyday developmental challenges. Our child-focused approach is designed around each child's individual strengths, needs and goals.",
    heroImage: "/image.png",
    heroImageAlt: "Best Pediatric Occupational Therapy Center in Coimbatore - Seeds Therapy",
    overviewHeading: "What Is Pediatric Occupational Therapy?",
    overviewSubtitle: "Understanding Occupational Therapy for Children",
    overviewParagraphs: [
      "Pediatric occupational therapy helps children develop the skills they need to participate more confidently in everyday activities at home, school and in their community.",
      "At Seeds Therapy Center, our occupational therapy programs focus on helping children build practical skills through individualized, age-appropriate activities. Therapy may support areas such as fine motor development, sensory processing, coordination, attention, self-care and school-related skills.",
    ],
    quickStats: [
      { label: "1-on-1", value: "Child-Focused", desc: "Tailored to child's strengths & goals" },
      { label: "100%", value: "Engaging Activities", desc: "Age-appropriate developmental play" },
      { label: "Family", value: "Guidance", desc: "Regular parent communication & home support" },
      { label: "Holistic", value: "Everyday Skills", desc: "Motor, sensory, attention & independence" },
    ],
    howItHelps: {
      title: "How Occupational Therapy Helps Children",
      subtitle: "Supporting Skills for Everyday Life",
      description:
        "Every child has different strengths and challenges. Occupational therapy can help children develop skills that support their participation in daily routines and activities. Our therapy may focus on:",
      points: [
        "Fine motor skills and hand coordination",
        "Gross motor coordination",
        "Sensory processing and regulation",
        "Attention and concentration",
        "Handwriting and pre-writing skills",
        "Self-care and daily living skills",
        "Dressing, feeding and personal-care skills",
        "Play and social participation",
        "School readiness skills",
        "Motor planning and coordination",
      ],
    },
    whoIsItFor: {
      heading: "Signs Your Child May Benefit From Occupational Therapy",
      subtitle: "Does Your Child Have Difficulty With Everyday Activities?",
      description:
        "Parents may consider an occupational therapy assessment when a child experiences ongoing difficulties with activities such as:",
      signs: [
        "Holding or using a pencil",
        "Writing or drawing",
        "Using scissors or other classroom tools",
        "Coordinating movements",
        "Sitting and participating in activities",
        "Staying focused on age-appropriate tasks",
        "Managing certain sounds, textures or movements",
        "Dressing or other self-care activities",
        "Participating in play",
        "Performing everyday activities independently",
      ],
      reassurance:
        "If you have concerns about your child's development or everyday skills, an assessment can help identify areas where additional support may be beneficial.",
      ctaText: "Talk to Our Therapist",
      ctaLink: "/contact",
    },
    ourApproachHeading: "Our Occupational Therapy Approach",
    ourApproachSubtitle: "Personalized Therapy for Every Child",
    ourApproachDescription:
      "At Seeds Therapy Center, we understand that no two children develop in exactly the same way. Our pediatric occupational therapy approach begins by understanding the child's individual strengths, challenges and goals.",
    ourApproachSteps: [
      {
        step: "1",
        title: "Understand",
        desc: "We listen to parents and understand the child's developmental and everyday challenges.",
      },
      {
        step: "2",
        title: "Assess",
        desc: "Appropriate assessment helps identify areas of strength and areas that may need additional support.",
      },
      {
        step: "3",
        title: "Plan",
        desc: "An individualized therapy plan is developed according to the child's needs and goals.",
      },
      {
        step: "4",
        title: "Support",
        desc: "Therapy sessions use engaging, child-friendly activities to work on targeted skills.",
      },
      {
        step: "5",
        title: "Monitor",
        desc: "Progress is observed over time and therapy goals can be adjusted according to the child's development.",
      },
    ],
    coreAreasHeading: "Areas We Support",
    coreAreasSubtitle: "Occupational Therapy for Children's Development",
    coreAreasDescription:
      "Our occupational therapy programs may support children with difficulties related to:",
    coreAreas: [
      {
        title: "Fine Motor Skills",
        desc: "Activities that support hand strength, coordination, grasping, drawing, writing and other hand-based skills.",
        iconName: "Pencil",
        points: ["Hand strength & grip", "Grasping & pinch precision", "Drawing & pre-writing", "Tool & scissor usage"],
      },
      {
        title: "Sensory Processing",
        desc: "Support for children who experience difficulties responding to or managing sensory experiences.",
        iconName: "Sparkles",
        points: ["Tactile & auditory regulation", "Movement & balance control", "Sensory calming routines", "Environmental adaptation"],
      },
      {
        title: "Attention & Concentration",
        desc: "Activities designed to support participation, attention and engagement in age-appropriate tasks.",
        iconName: "Target",
        points: ["Task engagement", "Sitting endurance", "Impulse management", "Focus & active participation"],
      },
      {
        title: "Coordination & Motor Planning",
        desc: "Support for children who experience difficulty coordinating movements or planning physical activities.",
        iconName: "Activity",
        points: ["Bilateral coordination", "Body awareness in space", "Motor sequencing & agility", "Balance & postural stability"],
      },
      {
        title: "Self-Care Skills",
        desc: "Helping children work toward greater independence in everyday activities such as dressing, grooming and other routines.",
        iconName: "Shirt",
        points: ["Independent dressing", "Self-feeding & utensil use", "Personal hygiene & brushing", "Daily morning routines"],
      },
      {
        title: "School Readiness",
        desc: "Supporting foundational skills needed for participation in classroom and school activities.",
        iconName: "GraduationCap",
        points: ["Desk sitting posture", "Following teacher instructions", "Classroom material handling", "Peer play & collaboration"],
      },
    ],
    autismSection: {
      title: "Occupational Therapy for Autism",
      subtitle: "Supporting Children With Autism Through Occupational Therapy",
      paragraphs: [
        "Children with autism may experience differences in sensory processing, motor coordination, attention, self-care or participation in everyday activities. Occupational therapy can support these functional skills based on each child's individual needs.",
        "At Seeds Therapy Center, therapy goals are personalized to the child's developmental profile and everyday challenges.",
      ],
      ctaText: "Learn More About Our Child Therapy Services",
      ctaLink: "/therapies",
    },
    adhdSection: {
      title: "Occupational Therapy for ADHD",
      subtitle: "Can Occupational Therapy Help Children With ADHD?",
      paragraphs: [
        "Children with ADHD may experience challenges related to attention, activity levels, organization, sensory processing or participation in everyday routines.",
        "Occupational therapy may support functional skills such as attention, task participation, coordination and daily routines based on the child's individual needs.",
        "If your child has attention or developmental concerns, professional assessment can help determine what type of support may be appropriate.",
      ],
    },
    whyChooseSection: {
      title: "Why Choose Seeds Therapy Center?",
      subtitle: "A Child-Centered Approach to Therapy",
      description:
        "Choosing the right occupational therapy center is an important decision for parents. At Seeds Therapy Center, we focus on creating a supportive environment where children can work toward meaningful developmental and everyday goals.",
      points: [
        "Child-focused therapy",
        "Individualized therapy planning",
        "Developmentally appropriate activities",
        "Focus on practical everyday skills",
        "Parent communication and guidance",
        "Progress-focused approach",
        "Supportive and welcoming environment",
      ],
    },
    bestCenterSection: {
      title: "Best Occupational Therapy Center in Coimbatore",
      subtitle: "Looking for Pediatric Occupational Therapy in Coimbatore?",
      paragraphs: [
        "Finding the right occupational therapy center for your child involves looking beyond a service name. Parents often consider the therapist's experience, the therapy approach, child-friendly environment, individualized goals and communication with families.",
        "Seeds Therapy Center provides pediatric occupational therapy in Coimbatore with a child-focused approach designed to support individual developmental and everyday needs.",
        "Whether you are looking for support with sensory processing, fine motor skills, attention, coordination, self-care or school readiness, our team can help you understand your child's needs and explore appropriate therapy options.",
      ],
      ctaText: "Book an Occupational Therapy Assessment",
      ctaLink: "/contact",
    },
    specializedFacilities: {
      title: "Our Specialized Pediatric Setup & Sensory Environment",
      items: [
        {
          name: "Sensory Integration Swings",
          desc: "Bolster swings, platform swings, and hammock cocoons that stimulate vestibular and calming balance systems.",
          iconName: "Compass",
        },
        {
          name: "Tactile & Fine Motor Stations",
          desc: "Therapy putty, textured tactile bins, pegboards, and adaptive grip tools for hand strength.",
          iconName: "Wrench",
        },
        {
          name: "Dynamic Obstacle Courses",
          desc: "Balance beams, crash pads, climbing ladders, and tunnels to develop gross motor coordination.",
          iconName: "ShieldCheck",
        },
        {
          name: "Quiet Calming Corners",
          desc: "Soft lighting, weighted blankets, and regulation tools for children needing downtime and relaxation.",
          iconName: "HeartHandshake",
        },
      ],
    },
    benefits: {
      title: "The Transformative Benefits for Your Child",
      items: [
        "Greater independence in getting dressed, eating, and managing daily self-care",
        "Significantly improved handwriting, drawing control, and classroom sitting endurance",
        "Better sensory balance with reduced meltdowns from loud sounds, bright lights, or textures",
        "Enhanced motor coordination, playground confidence, and peer social play",
        "Increased focus, organization, and smoother transitions between home and school tasks",
        "A happier, more resilient, and self-assured child who feels capable every day",
      ],
    },
    supportedConditions: [
      "Autism Spectrum Disorder (ASD)",
      "Attention Deficit Hyperactivity Disorder (ADHD)",
      "Sensory Processing Disorder (SPD)",
      "Developmental Coordination Disorder (Dyspraxia)",
      "Global Developmental Delays (GDD)",
      "Cerebral Palsy & Motor Impairments",
      "Down Syndrome & Genetic Conditions",
      "Handwriting & Fine Motor Difficulties",
    ],
    faqs: [
      {
        question: "What is pediatric occupational therapy?",
        answer:
          "Pediatric occupational therapy helps children develop skills needed for everyday activities, learning, play, self-care and participation at home and school.",
      },
      {
        question: "When should a child see an occupational therapist?",
        answer:
          "A child may benefit from an occupational therapy assessment when they experience persistent difficulties with fine motor skills, sensory processing, coordination, attention, self-care, handwriting or everyday activities.",
      },
      {
        question: "Does my child need occupational therapy?",
        answer:
          "If your child is having difficulty with everyday activities, motor skills, sensory experiences, attention or independence, an occupational therapy assessment may help identify their individual needs.",
      },
      {
        question: "Can occupational therapy help with sensory issues?",
        answer:
          "Occupational therapy may support children who experience difficulties with sensory processing. The appropriate approach depends on the child's individual needs and assessment.",
      },
      {
        question: "Can occupational therapy help children with ADHD?",
        answer:
          "Occupational therapy may support functional areas such as attention, task participation, organization, coordination and daily routines depending on the child's individual needs.",
      },
      {
        question: "Can occupational therapy help children with autism?",
        answer:
          "Occupational therapy may support areas such as sensory processing, motor skills, self-care, attention and participation in everyday activities for children with autism.",
      },
      {
        question: "At what age can a child start occupational therapy?",
        answer:
          "Children can receive pediatric occupational therapy when there are developmental or functional concerns. The appropriate type of support depends on the child's age, needs and assessment.",
      },
      {
        question: "What does a pediatric occupational therapist do?",
        answer:
          "A pediatric occupational therapist works with children to support skills needed for everyday activities, learning, play, self-care, motor development and participation.",
      },
      {
        question: "How long does occupational therapy take?",
        answer:
          "The duration and frequency of therapy varies from child to child depending on their needs, goals, progress and recommended therapy plan.",
      },
      {
        question: "Where can I find occupational therapy for children in Coimbatore?",
        answer:
          "Seeds Therapy Center provides child-focused occupational therapy in Coimbatore. Parents can contact the center to learn more about assessment and available therapy services.",
      },
    ],
    finalCta: {
      title: "Help Your Child Take the Next Step",
      paragraphs: [
        "Every child has their own strengths, abilities and pace of development. With the right support, children can work toward greater confidence and independence in everyday activities.",
        "If you have concerns about your child's motor skills, sensory processing, attention, coordination or daily activities, connect with Seeds Therapy Center to discuss your child's needs.",
      ],
      primaryBtn: "Book an Assessment",
      secondaryBtn: "Contact Seeds Therapy Center",
    },
    relatedTherapies: [
      {
        slug: "neuro-occupational-therapy",
        title: "Neuro Occupational Therapy",
        desc: "Specialized neuromuscular, tone regulation, and reflex integration therapy.",
        badge: "Neuromotor",
      },
      {
        slug: "speech-therapy",
        title: "Speech & Language Therapy",
        desc: "Supporting clear articulation, vocabulary, expressive communication, and social connection.",
        badge: "Communication",
      },
      {
        slug: "behavioral-therapy",
        title: "Behavioral Therapy",
        desc: "Building emotional regulation, positive habits, social interaction, and routine adaptation.",
        badge: "Emotional Growth",
      },
      {
        slug: "early-intervention",
        title: "Early Intervention",
        desc: "Nurturing developmental growth, motor skills, and communication in early childhood.",
        badge: "Early Years",
      },
    ],
  },

  "neuro-occupational-therapy": {
    slug: "neuro-occupational-therapy",
    title: "Neuro Occupational Therapy in Coimbatore",
    metaTitle: "Neuro Occupational Therapy in Coimbatore | Seeds Therapy",
    metaDescription:
      "Discover Neuro Occupational Therapy in Coimbatore at Seeds Therapy. Helping adults improve functional skills, regain independence, and enjoy a better quality of life.",
    metaKeywords: [
      "Neuro Occupational Therapy in Coimbatore",
      "Neuro Occupational Therapy Coimbatore",
      "Adult Neuro Occupational Therapy Coimbatore",
      "Stroke Rehabilitation Coimbatore",
      "Brain Injury Rehabilitation Coimbatore",
      "Occupational Therapy for Adults in Coimbatore",
      "Seeds Therapy Center Coimbatore",
      "Upper Limb Rehabilitation Coimbatore",
      "ADL Training Coimbatore",
      "Hand Function Therapy Coimbatore",
    ],
    shortTitle: "Neuro Occupational Therapy",
    badge: "Neurological Rehabilitation",
    tagline: "Helping Adults Regain Independence and Improve Everyday Life",
    heroHighlight: "Helping Adults Regain Independence and Improve Everyday Life",
    heroDescription:
      "Neuro Occupational Therapy helps adults improve their ability to perform everyday activities after a neurological condition, injury, or illness. We offer customized occupational therapy services at Seeds Therapy Center to help with movement, coordination, hand function, cognition and daily living activities. Our aim is to enable people to become functional, confident and independent in their lives. Each therapy program is planned according to the person's needs, abilities, and rehabilitation goals, with guidance and support for families throughout the recovery journey.",
    overviewHeading: "What Is Neuro Occupational Therapy?",
    overviewSubtitle: "Comprehensive Neurological Care & Rehabilitation",
    overviewParagraphs: [
      "Neuro Occupational Therapy is a specialized therapy that helps children and adults with neurological conditions improve their daily living skills, coordination, sensory processing, and independence.",
      "It can be used for persons with autism, cerebral palsy, developmental delays, stroke, and brain injuries. Therapy sessions include fine motor skill development, hand-eye coordination, attention, motor planning and self-care activities including eating, dressing, writing, and playing.",
      "An occupational therapist provides individual treatment plans based on the person's needs and abilities. This is primarily aimed at improving functional skills, developing independence and supporting the individual to become more confident to engage more effectively in his or her daily activities at school, home, and work.",
    ],
    overviewPhilosophy: {
      title: "Our Person-Centered Philosophy",
      desc: "Our aim is to enable people to become functional, confident, and independent in their lives. Each therapy program is planned according to individual needs, abilities, and rehabilitation goals, with guidance and support for families throughout the recovery journey.",
    },
    overviewSideCard: {
      title: "Neuro Rehab in Coimbatore",
      subtitle: "Regaining Independence & Quality of Life",
      description:
        "Our adult Neuro Occupational Therapy programs focus on improving daily functioning, restoring practical skills, and supporting greater independence after neurological conditions or injuries.",
      points: [
        "Upper limb & hand function rehabilitation",
        "Activities of Daily Living (ADL) independence",
        "Stroke & brain injury movement retraining",
      ],
    },
    quickStats: [
      { label: "1-on-1", value: "Personalized Care", desc: "Tailored to individual rehabilitation goals" },
      { label: "Functional", value: "Everyday Skills", desc: "Upper limb mobility, hand function & ADL" },
      { label: "Recovery", value: "Neuroplasticity", desc: "Targeted stroke & injury rehabilitation" },
      { label: "Family", value: "Support & Guidance", desc: "Caregiver education for home practice" },
    ],
    howItHelps: {
      title: "How Neuro Occupational Therapy Can Help Adults",
      subtitle: "Restoring Everyday Abilities & Independence",
      description:
        "Neuro Occupational Therapy supports adults in regaining functional movement, cognitive clarity, and daily autonomy through targeted rehabilitation:",
      points: [
        "Improve arm and hand function",
        "Regain independence in daily activities",
        "Improve fine motor skills and coordination",
        "Support recovery after a stroke",
        "Develop balance and movement control",
        "Improve dressing, bathing, and grooming skills",
        "Strengthen functional movement abilities",
        "Improve memory, attention, and problem-solving",
        "Perform household activities more independently",
        "Learn adaptive techniques for everyday tasks",
      ],
    },
    whoIsItFor: {
      heading: "Signs Adults May Benefit From Neuro Occupational Therapy",
      subtitle: "Recognizing When Neuro Occupational Therapy Can Help",
      description:
        "Neuro occupational therapy helps adults improve their functional abilities and manage everyday activities after neurological conditions or injuries.",
      signs: [
        "Difficulty using your arms or hands",
        "Trouble performing daily activities independently",
        "Weakness or reduced coordination after a stroke",
        "Difficulty dressing, bathing, or grooming",
        "Problems with balance and body control",
        "Difficulty holding objects or performing fine motor tasks",
        "Memory, attention, or problem-solving difficulties",
        "Challenges returning to household or work activities",
        "Difficulty managing everyday tasks after a brain injury",
        "Reduced independence due to neurological conditions",
      ],
      reassurance:
        "If you or a loved one are experiencing functional limitations following a stroke, injury, or neurological diagnosis, a comprehensive occupational therapy evaluation can help chart the path toward independence.",
      ctaText: "Consult Our Neuro OT Specialist",
      ctaLink: "/contact",
    },
    ourApproachHeading: "Specialized Neuro Rehabilitation Areas We Focus On",
    ourApproachSubtitle: "Our Structured 6-Step Rehabilitation Process",
    ourApproachDescription:
      "Our adult Neuro Occupational Therapy programs focus on improving daily functioning, restoring practical skills, and supporting greater independence after neurological conditions or injuries.",
    ourApproachSteps: [
      {
        step: "1",
        title: "Understand",
        desc: "We understand the adult’s medical history, daily challenges, functional difficulties, and rehabilitation goals.",
      },
      {
        step: "2",
        title: "Assess",
        desc: "We evaluate hand function, coordination, movement, cognitive skills, and the ability to perform everyday activities.",
      },
      {
        step: "3",
        title: "Plan",
        desc: "A personalized therapy plan is developed based on individual needs, abilities, and functional goals.",
      },
      {
        step: "4",
        title: "Practice",
        desc: "Adults participate in structured activities to improve movement, coordination, self-care, and daily living skills.",
      },
      {
        step: "5",
        title: "Support",
        desc: "Families and caregivers receive guidance on supporting independence and practicing functional skills at home.",
      },
      {
        step: "6",
        title: "Monitor Progress",
        desc: "Progress is reviewed regularly, and therapy goals are adjusted according to the adult’s improvement and changing needs.",
      },
    ],
    coreAreasHeading: "Specialized Occupational Therapy for Neurological Recovery",
    coreAreasSubtitle: "Core Clinical Focus Areas",
    coreAreasDescription:
      "Our personalized therapy sessions focus on improving movement, coordination, cognitive skills, and everyday functioning to help adults achieve greater independence.",
    coreAreas: [
      {
        title: "Upper Limb & Hand Rehabilitation",
        desc: "Focuses on improving arm movement, hand function, and control for everyday activities.",
        iconName: "Activity",
        points: [
          "Arm and hand mobility",
          "Grip strength improvement",
          "Grasping and releasing objects",
          "Functional hand coordination",
        ],
      },
      {
        title: "Activities of Daily Living (ADL) Training",
        desc: "Helps adults develop practical skills to manage personal care and everyday routines independently.",
        iconName: "Shirt",
        points: [
          "Dressing and grooming",
          "Bathing and personal hygiene",
          "Eating and feeding skills",
          "Independent daily routines",
        ],
      },
      {
        title: "Fine Motor Skills & Coordination",
        desc: "Improves precise hand movements and coordination needed for practical daily tasks.",
        iconName: "Pencil",
        points: [
          "Finger coordination",
          "Hand dexterity",
          "Object handling",
          "Eye-hand coordination",
        ],
      },
      {
        title: "Stroke & Brain Injury Rehabilitation",
        desc: "Supports functional recovery and helps adults adapt to physical and cognitive challenges following neurological injuries.",
        iconName: "BrainCircuit",
        points: [
          "Functional movement practice",
          "Upper limb rehabilitation",
          "Everyday task retraining",
          "Independence-focused activities",
        ],
      },
      {
        title: "Cognitive & Perceptual Rehabilitation",
        desc: "Helps adults improve thinking skills needed to manage daily activities and routines.",
        iconName: "Lightbulb",
        points: [
          "Attention and concentration",
          "Memory strategies",
          "Problem-solving skills",
          "Planning and task sequencing",
        ],
      },
      {
        title: "Adaptive Equipment & Independent Living",
        desc: "Guides adults in using practical techniques and adaptive tools to make daily activities easier and safer.",
        iconName: "Wrench",
        points: [
          "Adaptive equipment guidance",
          "Modified daily living techniques",
          "Safe task performance",
          "Caregiver education",
        ],
      },
    ],
    whyChooseSection: {
      title: "Why Choose Seeds Therapy Center for Neuro Occupational Therapy?",
      subtitle: "Dedicated Neurological Rehabilitation in Coimbatore",
      description:
        "Neurological recovery requires specialized clinical expertise, personalized planning, and compassionate support. At Seeds Therapy Center in Coimbatore, we provide:",
      points: [
        "Qualified occupational therapists experienced in adult neurological rehabilitation",
        "Personalized 1-on-1 programs tailored to your abilities and functional goals",
        "Targeted upper limb recovery, grip strengthening, and hand dexterity exercises",
        "Activities of Daily Living (ADL) training for independent dressing, grooming, and self-care",
        "Comprehensive stroke and traumatic brain injury functional recovery plans",
        "Cognitive retraining, memory strategies, and problem-solving exercises",
        "Practical adaptive equipment training and home task modifications",
        "Empowering guidance and support for families and caregivers at every step",
      ],
    },
    bestCenterSection: {
      title: "Best Neuro Occupational Therapy Center in Coimbatore",
      subtitle: "Restoring Everyday Abilities & Independence",
      paragraphs: [
        "When recovering from a neurological condition, injury, or stroke, selecting a therapy center with dedicated clinical expertise and individualized care is crucial for lasting recovery.",
        "Seeds Therapy Center in Siddhapudur, Coimbatore offers comprehensive Neuro Occupational Therapy services designed to help adults rebuild functional movement, regain personal independence, and resume daily life activities.",
        "Our therapists partner closely with clients and their families to build practical skills, regain confidence, and achieve measurable milestones throughout the recovery journey.",
      ],
      ctaText: "Book an Assessment",
      ctaLink: "/contact",
    },
    specializedFacilities: {
      title: "Our Specialized Neuro Rehabilitation Setup & Equipment",
      items: [
        {
          name: "Upper Limb & Hand Rehab Station",
          desc: "Targeted resistance apparatus, grip dynamometers, pinch exercisers, and fine motor tools for hand recovery.",
          iconName: "Activity",
        },
        {
          name: "Activities of Daily Living (ADL) Suite",
          desc: "Dedicated setup to practice dressing, grooming, meal handling, and personal hygiene techniques safely.",
          iconName: "Shirt",
        },
        {
          name: "Cognitive & Perceptual Tools",
          desc: "Structured cognitive modules, task-sequencing materials, and memory exercises to rebuild thinking skills.",
          iconName: "BrainCircuit",
        },
        {
          name: "Adaptive Equipment Guidance",
          desc: "Ergonomic aids, modified handles, assistive grabbers, and positioning tools for greater safety and autonomy.",
          iconName: "Wrench",
        },
      ],
    },
    benefits: {
      title: "Transformative Benefits of Neuro Occupational Therapy",
      items: [
        "Improved arm and hand function, strength, and range of movement",
        "Regained independence in dressing, bathing, grooming, and mealtime",
        "Enhanced fine motor dexterity and coordination for daily activities",
        "Accelerated functional recovery following a stroke or brain injury",
        "Better balance, body control, and movement confidence",
        "Sharpened memory, attention, problem-solving, and sequencing skills",
        "Empowerment for families and caregivers with effective home strategies",
      ],
    },
    supportedConditions: [
      "Stroke Recovery & Post-Stroke Hemiparesis",
      "Traumatic Brain Injury (TBI) Rehabilitation",
      "Cerebral Palsy in Teens & Adults",
      "Parkinson's Disease & Movement Disorders",
      "Spinal Cord Injury Functional Recovery",
      "Peripheral Nerve Injuries & Neuropathy",
      "Multiple Sclerosis (MS) Functional Maintenance",
      "Cognitive & Perceptual Challenges After Illness or Injury",
    ],
    faqs: [
      {
        question: "What is Neuro Occupational Therapy?",
        answer:
          "Neuro Occupational Therapy is a specialized therapy that helps children and adults with neurological conditions improve their daily living skills, coordination, sensory processing, and independence after an injury, stroke, illness, or neurological diagnosis.",
      },
      {
        question: "How does Neuro Occupational Therapy help stroke survivors?",
        answer:
          "For stroke survivors, therapy focuses on improving arm and hand function, retraining self-care tasks (such as dressing, eating, and bathing), restoring movement coordination, and introducing adaptive techniques to rebuild functional independence.",
      },
      {
        question: "What are Activities of Daily Living (ADL) training?",
        answer:
          "ADL training helps adults develop practical skills to manage personal care and everyday routines independently, including dressing, bathing, grooming, eating, and managing household or work activities safely.",
      },
      {
        question: "Can Neuro OT help with hand weakness and fine motor coordination?",
        answer:
          "Yes. Upper limb and hand rehabilitation is a core focus. Therapists provide targeted exercises to improve grip strength, finger dexterity, grasping and releasing objects, and coordination for precise tasks.",
      },
      {
        question: "How does therapy address cognitive and memory difficulties?",
        answer:
          "Sessions include cognitive and perceptual rehabilitation focusing on attention, memory strategies, problem-solving, and task sequencing to help individuals manage daily routines and responsibilities effectively.",
      },
      {
        question: "Are families and caregivers involved in the rehabilitation program?",
        answer:
          "Yes. Families and caregivers receive guidance and support on helping their loved one practice functional skills and safe adaptive techniques at home throughout the recovery journey.",
      },
      {
        question: "How do I know if an adult needs Neuro Occupational Therapy?",
        answer:
          "If an adult experiences difficulty using arms or hands, trouble performing daily activities independently, weakness or reduced coordination after a stroke or brain injury, or reduced independence due to neurological conditions, a therapy evaluation is recommended.",
      },
      {
        question: "Where can I find Neuro Occupational Therapy in Coimbatore?",
        answer:
          "Seeds Therapy Center in Siddhapudur, Coimbatore offers comprehensive Neuro Occupational Therapy services. Contact us at +91 95974 69409 or through our website to book an assessment.",
      },
    ],
    finalCta: {
      title: "Helping Adults Regain Independence and Everyday Confidence",
      paragraphs: [
        "Each therapy program at Seeds Therapy Center is planned according to the person's needs, abilities, and rehabilitation goals, with guidance and support for families throughout the recovery journey.",
        "Looking for Neuro Occupational Therapy in Coimbatore? Reach out to Seeds Therapy Center today to schedule an assessment.",
      ],
      primaryBtn: "Book an Assessment",
      secondaryBtn: "Contact Seeds Therapy Center",
    },
    relatedTherapies: [
      {
        slug: "occupational-therapy",
        title: "Occupational Therapy",
        desc: "Sensory regulation, motor skills, and independent daily living habits.",
        badge: "Physical & Sensory",
      },
      {
        slug: "speech-therapy",
        title: "Speech & Language Therapy",
        desc: "Supporting clear articulation, vocabulary, expressive communication, and social connection.",
        badge: "Communication",
      },
      {
        slug: "behavioral-therapy",
        title: "Behavioral Therapy",
        desc: "Building emotional regulation, positive habits, social interaction, and routine adaptation.",
        badge: "Emotional Growth",
      },
      {
        slug: "early-intervention",
        title: "Early Intervention",
        desc: "Nurturing developmental growth, motor skills, and communication in early childhood.",
        badge: "Early Years",
      },
    ],
  },
  "neuro-occupational-therapy-coimbatore": {
    slug: "neuro-occupational-therapy-coimbatore",
    title: "Neuro Occupational Therapy in Coimbatore",
    metaTitle: "Neuro Occupational Therapy in Coimbatore | Seeds Therapy",
    metaDescription:
      "Discover Neuro Occupational Therapy in Coimbatore at Seeds Therapy. Helping adults improve functional skills, regain independence, and enjoy a better quality of life.",
    metaKeywords: [
      "Neuro Occupational Therapy in Coimbatore",
      "Neuro Occupational Therapy Coimbatore",
      "Adult Neuro Occupational Therapy Coimbatore",
      "Stroke Rehabilitation Coimbatore",
      "Brain Injury Rehabilitation Coimbatore",
      "Occupational Therapy for Adults in Coimbatore",
      "Seeds Therapy Center Coimbatore",
      "Upper Limb Rehabilitation Coimbatore",
      "ADL Training Coimbatore",
      "Hand Function Therapy Coimbatore",
    ],
    shortTitle: "Neuro Occupational Therapy",
    badge: "Neurological Rehabilitation",
    tagline: "Helping Adults Regain Independence and Improve Everyday Life",
    heroHighlight: "Helping Adults Regain Independence and Improve Everyday Life",
    heroDescription:
      "Neuro Occupational Therapy helps adults improve their ability to perform everyday activities after a neurological condition, injury, or illness. We offer customized occupational therapy services at Seeds Therapy Center to help with movement, coordination, hand function, cognition and daily living activities. Our aim is to enable people to become functional, confident and independent in their lives. Each therapy program is planned according to the person's needs, abilities, and rehabilitation goals, with guidance and support for families throughout the recovery journey.",
    overviewHeading: "What Is Neuro Occupational Therapy?",
    overviewSubtitle: "Comprehensive Neurological Care & Rehabilitation",
    overviewParagraphs: [
      "Neuro Occupational Therapy is a specialized therapy that helps children and adults with neurological conditions improve their daily living skills, coordination, sensory processing, and independence.",
      "It can be used for persons with autism, cerebral palsy, developmental delays, stroke, and brain injuries. Therapy sessions include fine motor skill development, hand-eye coordination, attention, motor planning and self-care activities including eating, dressing, writing, and playing.",
      "An occupational therapist provides individual treatment plans based on the person's needs and abilities. This is primarily aimed at improving functional skills, developing independence and supporting the individual to become more confident to engage more effectively in his or her daily activities at school, home, and work.",
    ],
    overviewPhilosophy: {
      title: "Our Person-Centered Philosophy",
      desc: "Our aim is to enable people to become functional, confident, and independent in their lives. Each therapy program is planned according to individual needs, abilities, and rehabilitation goals, with guidance and support for families throughout the recovery journey.",
    },
    overviewSideCard: {
      title: "Neuro Rehab in Coimbatore",
      subtitle: "Regaining Independence & Quality of Life",
      description:
        "Our adult Neuro Occupational Therapy programs focus on improving daily functioning, restoring practical skills, and supporting greater independence after neurological conditions or injuries.",
      points: [
        "Upper limb & hand function rehabilitation",
        "Activities of Daily Living (ADL) independence",
        "Stroke & brain injury movement retraining",
      ],
    },
    quickStats: [
      { label: "1-on-1", value: "Personalized Care", desc: "Tailored to individual rehabilitation goals" },
      { label: "Functional", value: "Everyday Skills", desc: "Upper limb mobility, hand function & ADL" },
      { label: "Recovery", value: "Neuroplasticity", desc: "Targeted stroke & injury rehabilitation" },
      { label: "Family", value: "Support & Guidance", desc: "Caregiver education for home practice" },
    ],
    howItHelps: {
      title: "How Neuro Occupational Therapy Can Help Adults",
      subtitle: "Restoring Everyday Abilities & Independence",
      description:
        "Neuro Occupational Therapy supports adults in regaining functional movement, cognitive clarity, and daily autonomy through targeted rehabilitation:",
      points: [
        "Improve arm and hand function",
        "Regain independence in daily activities",
        "Improve fine motor skills and coordination",
        "Support recovery after a stroke",
        "Develop balance and movement control",
        "Improve dressing, bathing, and grooming skills",
        "Strengthen functional movement abilities",
        "Improve memory, attention, and problem-solving",
        "Perform household activities more independently",
        "Learn adaptive techniques for everyday tasks",
      ],
    },
    whoIsItFor: {
      heading: "Signs Adults May Benefit From Neuro Occupational Therapy",
      subtitle: "Recognizing When Neuro Occupational Therapy Can Help",
      description:
        "Neuro occupational therapy helps adults improve their functional abilities and manage everyday activities after neurological conditions or injuries.",
      signs: [
        "Difficulty using your arms or hands",
        "Trouble performing daily activities independently",
        "Weakness or reduced coordination after a stroke",
        "Difficulty dressing, bathing, or grooming",
        "Problems with balance and body control",
        "Difficulty holding objects or performing fine motor tasks",
        "Memory, attention, or problem-solving difficulties",
        "Challenges returning to household or work activities",
        "Difficulty managing everyday tasks after a brain injury",
        "Reduced independence due to neurological conditions",
      ],
      reassurance:
        "If you or a loved one are experiencing functional limitations following a stroke, injury, or neurological diagnosis, a comprehensive occupational therapy evaluation can help chart the path toward independence.",
      ctaText: "Consult Our Neuro OT Specialist",
      ctaLink: "/contact",
    },
    ourApproachHeading: "Specialized Neuro Rehabilitation Areas We Focus On",
    ourApproachSubtitle: "Our Structured 6-Step Rehabilitation Process",
    ourApproachDescription:
      "Our adult Neuro Occupational Therapy programs focus on improving daily functioning, restoring practical skills, and supporting greater independence after neurological conditions or injuries.",
    ourApproachSteps: [
      {
        step: "1",
        title: "Understand",
        desc: "We understand the adult’s medical history, daily challenges, functional difficulties, and rehabilitation goals.",
      },
      {
        step: "2",
        title: "Assess",
        desc: "We evaluate hand function, coordination, movement, cognitive skills, and the ability to perform everyday activities.",
      },
      {
        step: "3",
        title: "Plan",
        desc: "A personalized therapy plan is developed based on individual needs, abilities, and functional goals.",
      },
      {
        step: "4",
        title: "Practice",
        desc: "Adults participate in structured activities to improve movement, coordination, self-care, and daily living skills.",
      },
      {
        step: "5",
        title: "Support",
        desc: "Families and caregivers receive guidance on supporting independence and practicing functional skills at home.",
      },
      {
        step: "6",
        title: "Monitor Progress",
        desc: "Progress is reviewed regularly, and therapy goals are adjusted according to the adult’s improvement and changing needs.",
      },
    ],
    coreAreasHeading: "Specialized Occupational Therapy for Neurological Recovery",
    coreAreasSubtitle: "Core Clinical Focus Areas",
    coreAreasDescription:
      "Our personalized therapy sessions focus on improving movement, coordination, cognitive skills, and everyday functioning to help adults achieve greater independence.",
    coreAreas: [
      {
        title: "Upper Limb & Hand Rehabilitation",
        desc: "Focuses on improving arm movement, hand function, and control for everyday activities.",
        iconName: "Activity",
        points: [
          "Arm and hand mobility",
          "Grip strength improvement",
          "Grasping and releasing objects",
          "Functional hand coordination",
        ],
      },
      {
        title: "Activities of Daily Living (ADL) Training",
        desc: "Helps adults develop practical skills to manage personal care and everyday routines independently.",
        iconName: "Shirt",
        points: [
          "Dressing and grooming",
          "Bathing and personal hygiene",
          "Eating and feeding skills",
          "Independent daily routines",
        ],
      },
      {
        title: "Fine Motor Skills & Coordination",
        desc: "Improves precise hand movements and coordination needed for practical daily tasks.",
        iconName: "Pencil",
        points: [
          "Finger coordination",
          "Hand dexterity",
          "Object handling",
          "Eye-hand coordination",
        ],
      },
      {
        title: "Stroke & Brain Injury Rehabilitation",
        desc: "Supports functional recovery and helps adults adapt to physical and cognitive challenges following neurological injuries.",
        iconName: "BrainCircuit",
        points: [
          "Functional movement practice",
          "Upper limb rehabilitation",
          "Everyday task retraining",
          "Independence-focused activities",
        ],
      },
      {
        title: "Cognitive & Perceptual Rehabilitation",
        desc: "Helps adults improve thinking skills needed to manage daily activities and routines.",
        iconName: "Lightbulb",
        points: [
          "Attention and concentration",
          "Memory strategies",
          "Problem-solving skills",
          "Planning and task sequencing",
        ],
      },
      {
        title: "Adaptive Equipment & Independent Living",
        desc: "Guides adults in using practical techniques and adaptive tools to make daily activities easier and safer.",
        iconName: "Wrench",
        points: [
          "Adaptive equipment guidance",
          "Modified daily living techniques",
          "Safe task performance",
          "Caregiver education",
        ],
      },
    ],
    whyChooseSection: {
      title: "Why Choose Seeds Therapy Center for Neuro Occupational Therapy?",
      subtitle: "Dedicated Neurological Rehabilitation in Coimbatore",
      description:
        "Neurological recovery requires specialized clinical expertise, personalized planning, and compassionate support. At Seeds Therapy Center in Coimbatore, we provide:",
      points: [
        "Qualified occupational therapists experienced in adult neurological rehabilitation",
        "Personalized 1-on-1 programs tailored to your abilities and functional goals",
        "Targeted upper limb recovery, grip strengthening, and hand dexterity exercises",
        "Activities of Daily Living (ADL) training for independent dressing, grooming, and self-care",
        "Comprehensive stroke and traumatic brain injury functional recovery plans",
        "Cognitive retraining, memory strategies, and problem-solving exercises",
        "Practical adaptive equipment training and home task modifications",
        "Empowering guidance and support for families and caregivers at every step",
      ],
    },
    bestCenterSection: {
      title: "Best Neuro Occupational Therapy Center in Coimbatore",
      subtitle: "Restoring Everyday Abilities & Independence",
      paragraphs: [
        "When recovering from a neurological condition, injury, or stroke, selecting a therapy center with dedicated clinical expertise and individualized care is crucial for lasting recovery.",
        "Seeds Therapy Center in Siddhapudur, Coimbatore offers comprehensive Neuro Occupational Therapy services designed to help adults rebuild functional movement, regain personal independence, and resume daily life activities.",
        "Our therapists partner closely with clients and their families to build practical skills, regain confidence, and achieve measurable milestones throughout the recovery journey.",
      ],
      ctaText: "Book an Assessment",
      ctaLink: "/contact",
    },
    specializedFacilities: {
      title: "Our Specialized Neuro Rehabilitation Setup & Equipment",
      items: [
        {
          name: "Upper Limb & Hand Rehab Station",
          desc: "Targeted resistance apparatus, grip dynamometers, pinch exercisers, and fine motor tools for hand recovery.",
          iconName: "Activity",
        },
        {
          name: "Activities of Daily Living (ADL) Suite",
          desc: "Dedicated setup to practice dressing, grooming, meal handling, and personal hygiene techniques safely.",
          iconName: "Shirt",
        },
        {
          name: "Cognitive & Perceptual Tools",
          desc: "Structured cognitive modules, task-sequencing materials, and memory exercises to rebuild thinking skills.",
          iconName: "BrainCircuit",
        },
        {
          name: "Adaptive Equipment Guidance",
          desc: "Ergonomic aids, modified handles, assistive grabbers, and positioning tools for greater safety and autonomy.",
          iconName: "Wrench",
        },
      ],
    },
    benefits: {
      title: "Transformative Benefits of Neuro Occupational Therapy",
      items: [
        "Improved arm and hand function, strength, and range of movement",
        "Regained independence in dressing, bathing, grooming, and mealtime",
        "Enhanced fine motor dexterity and coordination for daily activities",
        "Accelerated functional recovery following a stroke or brain injury",
        "Better balance, body control, and movement confidence",
        "Sharpened memory, attention, problem-solving, and sequencing skills",
        "Empowerment for families and caregivers with effective home strategies",
      ],
    },
    supportedConditions: [
      "Stroke Recovery & Post-Stroke Hemiparesis",
      "Traumatic Brain Injury (TBI) Rehabilitation",
      "Cerebral Palsy in Teens & Adults",
      "Parkinson's Disease & Movement Disorders",
      "Spinal Cord Injury Functional Recovery",
      "Peripheral Nerve Injuries & Neuropathy",
      "Multiple Sclerosis (MS) Functional Maintenance",
      "Cognitive & Perceptual Challenges After Illness or Injury",
    ],
    faqs: [
      {
        question: "What is Neuro Occupational Therapy?",
        answer:
          "Neuro Occupational Therapy is a specialized therapy that helps children and adults with neurological conditions improve their daily living skills, coordination, sensory processing, and independence after an injury, stroke, illness, or neurological diagnosis.",
      },
      {
        question: "How does Neuro Occupational Therapy help stroke survivors?",
        answer:
          "For stroke survivors, therapy focuses on improving arm and hand function, retraining self-care tasks (such as dressing, eating, and bathing), restoring movement coordination, and introducing adaptive techniques to rebuild functional independence.",
      },
      {
        question: "What are Activities of Daily Living (ADL) training?",
        answer:
          "ADL training helps adults develop practical skills to manage personal care and everyday routines independently, including dressing, bathing, grooming, eating, and managing household or work activities safely.",
      },
      {
        question: "Can Neuro OT help with hand weakness and fine motor coordination?",
        answer:
          "Yes. Upper limb and hand rehabilitation is a core focus. Therapists provide targeted exercises to improve grip strength, finger dexterity, grasping and releasing objects, and coordination for precise tasks.",
      },
      {
        question: "How does therapy address cognitive and memory difficulties?",
        answer:
          "Sessions include cognitive and perceptual rehabilitation focusing on attention, memory strategies, problem-solving, and task sequencing to help individuals manage daily routines and responsibilities effectively.",
      },
      {
        question: "Are families and caregivers involved in the rehabilitation program?",
        answer:
          "Yes. Families and caregivers receive guidance and support on helping their loved one practice functional skills and safe adaptive techniques at home throughout the recovery journey.",
      },
      {
        question: "How do I know if an adult needs Neuro Occupational Therapy?",
        answer:
          "If an adult experiences difficulty using arms or hands, trouble performing daily activities independently, weakness or reduced coordination after a stroke or brain injury, or reduced independence due to neurological conditions, a therapy evaluation is recommended.",
      },
      {
        question: "Where can I find Neuro Occupational Therapy in Coimbatore?",
        answer:
          "Seeds Therapy Center in Siddhapudur, Coimbatore offers comprehensive Neuro Occupational Therapy services. Contact us at +91 95974 69409 or through our website to book an assessment.",
      },
    ],
    finalCta: {
      title: "Helping Adults Regain Independence and Everyday Confidence",
      paragraphs: [
        "Each therapy program at Seeds Therapy Center is planned according to the person's needs, abilities, and rehabilitation goals, with guidance and support for families throughout the recovery journey.",
        "Looking for Neuro Occupational Therapy in Coimbatore? Reach out to Seeds Therapy Center today to schedule an assessment.",
      ],
      primaryBtn: "Book an Assessment",
      secondaryBtn: "Contact Seeds Therapy Center",
    },
    relatedTherapies: [
      {
        slug: "occupational-therapy",
        title: "Occupational Therapy",
        desc: "Sensory regulation, motor skills, and independent daily living habits.",
        badge: "Physical & Sensory",
      },
      {
        slug: "speech-therapy",
        title: "Speech & Language Therapy",
        desc: "Supporting clear articulation, vocabulary, expressive communication, and social connection.",
        badge: "Communication",
      },
      {
        slug: "behavioral-therapy",
        title: "Behavioral Therapy",
        desc: "Building emotional regulation, positive habits, social interaction, and routine adaptation.",
        badge: "Emotional Growth",
      },
      {
        slug: "early-intervention",
        title: "Early Intervention",
        desc: "Nurturing developmental growth, motor skills, and communication in early childhood.",
        badge: "Early Years",
      },
    ],
  },

  "speech-therapy": {
    slug: "speech-therapy",
    title: "Speech Therapy for Children in Coimbatore",
    metaTitle: "Best Speech Therapy for Children in Coimbatore | Seeds Therapy Center",
    metaDescription:
      "At Seeds Therapy Center, we provide personalized Best Speech Therapy for Children in Coimbatore to support speech, language, communication, social interaction, and confidence.",
    metaKeywords: [
      "speech therapy in Coimbatore",
      "speech therapy for children in Coimbatore",
      "speech delay therapy",
      "speech delay therapy in Coimbatore",
      "speech therapist in Coimbatore",
      "speech therapist for children",
      "speech therapist for children in Coimbatore",
      "best speech therapist in Coimbatore",
      "best speech therapy in Coimbatore",
      "Speech Therapy for Children in Coimbatore",
      "Best Speech Therapist in Coimbatore",
      "Child speech delay therapy Coimbatore",
      "Autism speech therapy Coimbatore",
      "Seeds Therapy Center Coimbatore",
      "pediatric speech therapy Coimbatore",
    ],
    shortTitle: "Speech Therapy",
    badge: "Communication, Language & Fluency",
    tagline: "Helping Children Communicate Clearly, Confidently & Effectively",
    heroHighlight: "Helping Children Communicate Clearly, Confidently & Effectively",
    heroDescription:
      "At Seeds Therapy Center, we provide personalized Best Speech Therapy for Children in Coimbatore to support speech, language, communication, social interaction, and confidence. Our therapy approach is based on each child's individual developmental needs, strengths, challenges, and communication goals. Whether a child has a speech delay, language delay, pronunciation difficulty, limited vocabulary, difficulty expressing needs, or social communication challenges, our goal is to help them develop practical communication skills for home, school, and everyday life.",
    overviewHeading: "What Is Speech Therapy for Children?",
    overviewSubtitle: "Understanding Speech Therapy for Children",
    overviewParagraphs: [
      "Pediatric speech therapy helps children develop the skills they need to understand language, communicate their thoughts and needs, speak more clearly, and interact effectively with others.",
      "Speech therapy may support children who have difficulty with speech development, language development, pronunciation and articulation, vocabulary development, understanding and using language, expressing needs and thoughts, social communication, fluency, and everyday communication skills.",
      "Every child develops communication skills at a different pace. If you are concerned about your child's speech or language development, a professional assessment can help identify their individual needs.",
    ],
    quickStats: [
      { label: "1-on-1", value: "Speech Coaching", desc: "Targeted articulation & vocabulary focus" },
      { label: "100%", value: "Child-Centered", desc: "Engaging, structured speech practice" },
      { label: "Family", value: "Guidance", desc: "Everyday home language stimulation" },
      { label: "Holistic", value: "Expression", desc: "Clarity, comprehension & social pragmatics" },
    ],
    howItHelps: {
      title: "How Speech Therapy Can Help Children",
      subtitle: "Functional Communication for Everyday Life",
      description:
        "Our pediatric speech therapy sessions focus on functional communication skills that children can use in their everyday lives. Therapy may help children:",
      points: [
        "Improve speech clarity",
        "Develop age-appropriate vocabulary",
        "Express wants, needs, thoughts, and feelings",
        "Improve understanding of spoken language",
        "Build sentence formation skills",
        "Improve pronunciation of sounds",
        "Develop listening and communication skills",
        "Improve social interaction",
        "Build confidence while communicating",
        "Participate more comfortably in school and everyday activities",
      ],
    },
    whoIsItFor: {
      heading: "Signs Your Child May Benefit From Speech Therapy",
      subtitle: "Early Signs & Communication Milestones",
      description:
        "Parents may consider a speech and language assessment if their child:",
      signs: [
        "Is not speaking as expected for their age",
        "Uses very few words",
        "Has difficulty forming sentences",
        "Is difficult for others to understand",
        "Has difficulty pronouncing certain sounds",
        "Struggles to understand simple instructions",
        "Has difficulty expressing wants or needs",
        "Repeats words or phrases frequently",
        "Has difficulty communicating with other children",
        "Avoids or struggles with social interaction",
        "Shows concerns related to speech or language development",
      ],
      reassurance:
        "A speech delay does not always mean that a child has a serious problem. However, identifying communication difficulties early can help children receive appropriate support when needed.",
      ctaText: "Talk to Our Speech Therapist",
      ctaLink: "/contact",
    },
    ourApproachHeading: "Our Pediatric Speech Therapy Approach",
    ourApproachSubtitle: "Personalized Therapy for Every Child",
    ourApproachDescription:
      "At Seeds Therapy Center, our approach focuses on understanding the child first and then developing therapy goals based on their individual needs.",
    ourApproachSteps: [
      {
        step: "1",
        title: "Understand",
        desc: "We understand the child's communication concerns, developmental history, strengths, and everyday challenges.",
      },
      {
        step: "2",
        title: "Assess",
        desc: "The child's speech, language, communication, and interaction skills are evaluated based on their individual needs.",
      },
      {
        step: "3",
        title: "Plan",
        desc: "Personalized therapy goals are created according to the child's developmental level and communication requirements.",
      },
      {
        step: "4",
        title: "Practice",
        desc: "Children participate in engaging, structured activities designed to encourage communication and skill development.",
      },
      {
        step: "5",
        title: "Support",
        desc: "Parents can be guided on ways to encourage communication and practice appropriate skills in everyday situations.",
      },
      {
        step: "6",
        title: "Monitor Progress",
        desc: "Progress can be reviewed regularly and therapy goals can be adjusted according to the child's development and changing needs.",
      },
    ],
    coreAreasHeading: "Specialized Speech & Language Areas We Support",
    coreAreasSubtitle: "Key Clinical Focus Areas",
    coreAreasDescription:
      "Our certified therapists provide targeted intervention for various speech, language, and communication needs:",
    coreAreas: [
      {
        title: "Speech Therapy for Speech Delay",
        desc: "Focuses on understanding current abilities and creating suitable goals for vocabulary, sentence development, speech sounds, and functional communication.",
        iconName: "MessageSquare",
        points: ["Vocabulary expansion", "Sentence development", "Speech sounds", "Functional requesting"],
      },
      {
        title: "Speech Therapy for Language Delay",
        desc: "Strengthening receptive and expressive communication through structured and child-friendly activities.",
        iconName: "BookOpenCheck",
        points: ["Understanding instructions", "Learning new words", "Answering questions", "Describing objects & events"],
      },
      {
        title: "Pronunciation & Articulation Difficulties",
        desc: "Identifying challenging sounds and working on clearer speech production through age-appropriate activities.",
        iconName: "Mic",
        points: ["Sound substitution correction", "Phonological clarity", "Tongue & lip positioning", "Speech clarity & fluency"],
      },
      {
        title: "Speech Therapy for Social Communication",
        desc: "Helping children start and maintain interactions, take turns, understand social cues, and communicate with peers.",
        iconName: "Users",
        points: ["Conversational turn-taking", "Social cue recognition", "Peer interaction", "Expressing emotions"],
      },
      {
        title: "Vocabulary & Sentence Formation",
        desc: "Guiding children to formulate complete sentences, express desires, and communicate with confidence.",
        iconName: "BookOpen",
        points: ["Grammar structuring", "Expressing thoughts", "Story narration", "Listening comprehension"],
      },
      {
        title: "Augmentative & Alternative Communication (AAC)",
        desc: "Empowering non-verbal or minimally verbal children with visual picture exchange (PECS) and digital communication boards.",
        iconName: "TabletSmartphone",
        points: ["PECS visual cards", "Choice boards", "Digital communication tools", "Non-verbal interaction"],
      },
    ],
    autismSection: {
      title: "Speech Therapy for Children With Autism",
      subtitle: "Supporting Children With Autism Through Speech & Language Therapy",
      paragraphs: [
        "Children with autism may have different communication needs. Some children may have limited verbal communication, while others may speak but experience difficulties with conversation, social communication, or understanding language.",
        "Speech therapy can be individualized according to the child's communication abilities and goals. Depending on the child's needs, therapy may support functional communication, understanding and using language, vocabulary development, social communication, conversation skills, expressing wants and needs, and communication with family and peers.",
      ],
      ctaText: "Learn More About Our Child Therapy Services",
      ctaLink: "/therapies",
    },
    adhdSection: {
      title: "Speech Therapy for Children With ADHD",
      subtitle: "Can Children With ADHD Benefit From Speech Therapy?",
      paragraphs: [
        "Children with ADHD may experience challenges related to attention, listening, following instructions, organizing thoughts, or participating effectively in conversations.",
        "When communication difficulties are present, speech and language support may focus on areas such as listening skills, following verbal instructions, expressing thoughts clearly, conversation skills, language organization, and functional communication.",
        "The child's individual needs should be assessed before deciding on an appropriate therapy plan.",
      ],
    },
    whyChooseSection: {
      title: "Why Choose Seeds Therapy Center for Speech Therapy in Coimbatore?",
      subtitle: "A Child-Centered Approach to Speech & Communication",
      description:
        "Seeds Therapy Center focuses on providing child-centered speech and language support in a comfortable and supportive environment.",
      points: [
        "Personalized therapy goals",
        "Child-friendly sessions",
        "Individual developmental needs",
        "Speech and language development",
        "Functional everyday communication",
        "Social communication skills",
        "Parent involvement",
        "Progress-focused support",
      ],
    },
    bestCenterSection: {
      title: "Speech Therapy Center in Coimbatore",
      subtitle: "Looking for Pediatric Speech Therapy in Coimbatore?",
      paragraphs: [
        "If you are searching for speech therapy for children in Coimbatore, speech therapy for speech delay, or a pediatric speech therapist in Coimbatore, Seeds Therapy Center provides personalized support based on each child's communication needs.",
        "Our focus is not simply on helping a child speak more words, but on helping them understand, express, interact, and communicate more effectively in everyday life.",
      ],
      ctaText: "Book a Speech Therapy Assessment",
      ctaLink: "/contact",
    },
    specializedFacilities: {
      title: "Tools & Resources in Our Speech Therapy Suite",
      items: [
        {
          name: "Oral Motor & Phonetic Tools",
          desc: "Specialized mirrors, straws, vibrating tools, and blowing toys for lip, tongue, and jaw strengthening.",
          iconName: "Sparkles",
        },
        {
          name: "Interactive Flashcards & Story Boards",
          desc: "Vibrant visual flashcards, sequencing cards, and felt stories to stimulate expressive dialogue.",
          iconName: "BookOpen",
        },
        {
          name: "AAC & Visual Schedule Kits",
          desc: "Picture Exchange Communication (PECS) boards and AAC devices for non-verbal learners.",
          iconName: "Grid",
        },
        {
          name: "Sound & Acoustic Feedback Software",
          desc: "Engaging digital audio-visual games that reward correct vocalizations and pitch control.",
          iconName: "Volume2",
        },
      ],
    },
    benefits: {
      title: "Transformations You Will Notice",
      items: [
        "Clearer speech that friends, teachers, and grandparents can easily understand",
        "Expansion of vocabulary and spontaneous expressive sentences",
        "Drastic reduction in frustration and crying tantrums caused by communication barriers",
        "Ability to follow multi-step school and home instructions without confusion",
        "Increased confidence in answering questions, making friends, and participating in class",
        "Meaningful emotional bonding and conversations with parents and siblings",
      ],
    },
    supportedConditions: [
      "Speech Delay & Language Delay",
      "Articulation & Phonological Disorders",
      "Autism Spectrum Disorder (ASD)",
      "Childhood Apraxia of Speech (CAS)",
      "Stuttering & Fluency Challenges",
      "Receptive-Expressive Language Disorders",
      "Hearing Impairment & Cochlear Implant Rehab",
      "Social Communication / Pragmatic Language Disorder",
    ],
    faqs: [
      {
        question: "What is speech therapy for children?",
        answer:
          "Speech therapy for children helps develop speech, language, communication, pronunciation, and social communication skills according to the child's individual needs.",
      },
      {
        question: "When should a child see a speech therapist?",
        answer:
          "A child may benefit from a speech and language assessment when parents notice concerns with speaking, understanding language, pronunciation, vocabulary, sentence development, or social communication.",
      },
      {
        question: "How do I know if my child has a speech delay?",
        answer:
          "If your child's speech or language development seems significantly different from what is expected for their age, or if they have difficulty communicating their needs and thoughts, a professional assessment can help identify whether additional support is appropriate.",
      },
      {
        question: "Can speech therapy help a child who is not talking?",
        answer:
          "Speech therapy can support children with limited or delayed verbal communication by identifying their communication needs and developing appropriate goals. The type of support depends on the individual child.",
      },
      {
        question: "Can speech therapy improve pronunciation?",
        answer:
          "Yes. Speech therapy can help children who have difficulty producing certain speech sounds by working on speech sound production and clearer communication.",
      },
      {
        question: "Can speech therapy help with language delay?",
        answer:
          "Yes. Speech and language therapy may support vocabulary, understanding language, sentence formation, answering questions, expressing thoughts, and everyday communication.",
      },
      {
        question: "Can speech therapy help children with autism?",
        answer:
          "Speech therapy can support communication and social communication skills in children with autism. Therapy goals depend on each child's individual communication profile.",
      },
      {
        question: "Can children with ADHD benefit from speech therapy?",
        answer:
          "When a child with ADHD also has communication or language-related difficulties, speech therapy may support areas such as listening, following instructions, language organization, and communication skills.",
      },
      {
        question: "At what age can a child start speech therapy?",
        answer:
          "Speech therapy can be considered during early childhood when communication concerns are identified. There is no single age that applies to every child; an assessment can help determine the appropriate support.",
      },
      {
        question: "How long does speech therapy take for children?",
        answer:
          "The duration of speech therapy varies depending on the child's communication needs, goals, developmental level, and progress. A therapist can recommend an appropriate therapy plan after assessment.",
      },
      {
        question: "Where can I find speech therapy for children in Coimbatore?",
        answer:
          "Parents looking for speech therapy for children in Coimbatore can contact Seeds Therapy Center to discuss their child's communication concerns and understand the available therapy support.",
      },
    ],
    finalCta: {
      title: "Help Your Child Communicate With Confidence",
      paragraphs: [
        "Every child's communication journey is different. With the right support, consistent practice, and a child-focused approach, children can develop communication skills that help them participate more confidently at home, in school, and in everyday life.",
        "Looking for Speech Therapy for Children in Coimbatore? Contact Seeds Therapy Center to discuss your child's communication needs.",
      ],
      primaryBtn: "Book an Assessment",
      secondaryBtn: "Contact Seeds Therapy Center",
    },
    relatedTherapies: [
      {
        slug: "occupational-therapy",
        title: "Occupational Therapy",
        desc: "Developing fine motor skills, sensory processing, and daily self-care independence.",
        badge: "Physical & Sensory",
      },
      {
        slug: "behavioral-therapy",
        title: "Behavioral Therapy",
        desc: "Managing emotional meltdowns, building positive habits, and expanding attention span.",
        badge: "Behavioral Growth",
      },
      {
        slug: "early-intervention",
        title: "Early Intervention",
        desc: "Nurturing developmental growth, motor skills, and communication in early childhood.",
        badge: "Early Years",
      },
    ],
  },

  "behavioral-therapy": {
    slug: "behavioral-therapy",
    title: "Behavioral Therapy for Children in Coimbatore",
    metaTitle: "Best Behavioral Therapy for Children in Coimbatore | Seeds Therapy Center",
    metaDescription:
      "At Seeds Therapy Center, we provide personalized Best Behavioral Therapy for Children in Coimbatore to support positive behavior, emotional regulation, social interaction, attention, communication, and everyday routines.",
    metaKeywords: [
      "Behavioral Therapy for Children in Coimbatore",
      "Best Child Behavior Therapy Center in Coimbatore",
      "ADHD behavioral therapy Coimbatore",
      "behavioral therapy in Coimbatore",
      "behavioral therapy for children",
      "behavioral therapist in Coimbatore",
      "behavior therapy for kids",
      "Best behavioral therapy in Coimbatore",
      "Best behavior therapy for kids",
      "Best behavioral therapist in Coimbatore",
      "Best behavioral therapist",
      "child behavioral therapy Coimbatore",
      "Seeds Therapy Center Coimbatore",
    ],
    shortTitle: "Behavioral Therapy",
    badge: "Positive Habits, Emotional Skills & Routines",
    tagline: "Helping Children Build Positive Behaviors, Emotional Skills & Confidence",
    heroHighlight: "Helping Children Build Positive Behaviors, Emotional Skills & Confidence",
    heroDescription:
      "At Seeds Therapy Center, we provide personalized Best Behavioral Therapy for Children in Coimbatore to support positive behavior, emotional regulation, social interaction, attention, communication, and everyday routines. Our child-focused approach is designed around each child's individual strengths, challenges, developmental needs, and therapy goals. Behavioral therapy can support children who experience challenging behavior, emotional outbursts, difficulty following routines, attention difficulties, impulsive behavior, social interaction challenges, or difficulty adapting to changes and transitions. Our goal is to help children develop practical emotional and behavioral skills that can support participation at home, school, and in everyday social situations.",
    overviewHeading: "What Is Behavioral Therapy for Children?",
    overviewSubtitle: "Understanding Behavioral Therapy for Children",
    overviewParagraphs: [
      "Behavioral Therapy for children focuses on understanding behaviors, identifying the factors that may influence them, and developing appropriate strategies to encourage positive and functional behaviors.",
      "For children, therapy may focus on emotional regulation, positive behavior development, attention and participation, social skills, impulse control, following routines, managing transitions, communication-related behaviors, developing independence, and adapting to everyday situations.",
      "Every child's behavior is different. A personalized approach helps identify the child's individual needs and develop suitable therapy goals.",
    ],
    quickStats: [
      { label: "Personalized", value: "Goals", desc: "Child-centered behavior plans" },
      { label: "Positive", value: "Reinforcement", desc: "Encouraging constructive habits & routines" },
      { label: "Parent", value: "Partnership", desc: "Guidance for home consistency" },
      { label: "Emotional", value: "Regulation", desc: "Self-coping skills for life" },
    ],
    howItHelps: {
      title: "How Behavioral Therapy Can Help Children",
      subtitle: "Practical Skills for Daily Life & School",
      description:
        "Behavioral therapy may help children develop skills that make everyday activities easier to manage. Depending on the child's needs, therapy may support:",
      points: [
        "Managing emotional outbursts",
        "Developing emotional regulation skills",
        "Improving attention and participation",
        "Following instructions and routines",
        "Developing positive behavior patterns",
        "Improving social interaction",
        "Managing impulsive behavior",
        "Coping with changes and transitions",
        "Developing independence",
        "Building confidence in everyday situations",
      ],
    },
    whoIsItFor: {
      heading: "Signs Your Child May Benefit From Behavioral Therapy",
      subtitle: "Understanding When to Seek Support",
      description:
        "Parents may consider behavioral support if their child frequently experiences:",
      signs: [
        "Emotional outbursts or tantrums",
        "Difficulty managing frustration",
        "Trouble following everyday routines",
        "Difficulty transitioning between activities",
        "Attention or participation difficulties",
        "Impulsive behavior",
        "Difficulty following instructions",
        "Challenges interacting with other children",
        "Difficulty sharing or taking turns",
        "Resistance to changes in routine",
        "Difficulty expressing emotions appropriately",
        "Behaviors that interfere with home or school activities",
      ],
      reassurance:
        "These behaviors can have many different causes. A professional assessment can help understand the child's needs before developing an appropriate therapy plan.",
      ctaText: "Talk to Our Behavioral Therapist",
      ctaLink: "/contact",
    },
    coreAreasHeading: "Key Areas We Develop in Behavioral Therapy",
    coreAreasSubtitle: "Comprehensive Behavioral & Emotional Support",
    coreAreasDescription:
      "Our therapy programs target key developmental and behavioral areas to support independence, emotional well-being, and social harmony.",
    coreAreas: [
      {
        title: "Behavioral Therapy for Emotional Regulation",
        desc: "Emotional regulation is an important skill that helps children understand, express, and manage their emotions when facing frustration, disappointment, excitement, anger, or changes in their environment.",
        iconName: "HeartPulse",
        points: [
          "Recognize emotions",
          "Express feelings appropriately",
          "Manage frustration",
          "Respond to challenging situations",
          "Improve coping skills",
          "Reduce behaviors that interfere with daily activities",
          "Build confidence in handling everyday situations",
        ],
      },
      {
        title: "Behavioral Therapy for Challenging Behavior",
        desc: "Focusing on understanding why behaviors occur and identifying supportive strategies that encourage more appropriate, functional responses rather than just stopping actions.",
        iconName: "ThumbsUp",
        points: [
          "Understanding the triggers behind behaviors",
          "Addressing frequent tantrums, refusal, or aggression",
          "Managing impulsive actions and routine resistance",
          "Teaching positive replacement behaviors",
          "Building functional communication of needs",
          "Supporting successful family and school participation",
        ],
      },
      {
        title: "Behavioral Therapy for Attention Difficulties",
        desc: "Supporting children who experience difficulty staying focused, completing activities, following instructions, or participating in structured tasks.",
        iconName: "Target",
        points: [
          "Improving attention span and focus",
          "Enhancing task participation and completion",
          "Following multi-step instructions",
          "Practicing waiting and turn-taking",
          "Managing distractions in classroom settings",
          "Staying engaged in age-appropriate activities",
        ],
      },
      {
        title: "Behavioral Therapy for Social Skills",
        desc: "Helping children build positive relationships with parents, teachers, siblings, and peers in school and everyday social environments.",
        iconName: "Smile",
        points: [
          "Taking turns, sharing, and waiting",
          "Following social rules and conversational etiquette",
          "Responding to others and initiating interactions",
          "Participating constructively in group activities",
          "Managing emotions during social situations",
          "Developing appropriate communication behaviors",
        ],
      },
      {
        title: "Behavioral Therapy for Routine & Transitions",
        desc: "Supporting children in developing flexibility and coping strategies for everyday transitions between activities, settings, or schedule changes.",
        iconName: "CalendarClock",
        points: [
          "Coping when a preferred activity ends",
          "Adapting smoothly when daily routines change",
          "Moving from one activity to another with ease",
          "Adjusting comfortably to new environments",
          "Responding flexibly when expectations change",
          "Participating in daily routines with greater confidence",
        ],
      },
      {
        title: "Positive Behavior & Functional Independence",
        desc: "Fostering self-help skills, proactive problem-solving, and positive daily habits that empower children at home, school, and in the community.",
        iconName: "Sparkles",
        points: [
          "Positive reinforcement and motivational systems",
          "Visual schedules and first-then boards",
          "Self-direction and independent task initiation",
          "Classroom etiquette and cooperation skills",
        ],
      },
    ],
    autismSection: {
      title: "Behavioral Therapy for Children With Autism",
      subtitle: "Individualized Support for Communication, Regulation & Routines",
      paragraphs: [
        "Children with autism may have individual behavioral, emotional, communication, social, and sensory needs.",
        "Behavioral support can be individualized to help children develop practical skills related to communication, social interaction, emotional regulation, following routines, transitions, attention and participation, independence, and everyday functional behaviors.",
        "Therapy goals are based on the individual child's strengths, needs, developmental level, and family priorities.",
      ],
      ctaText: "Talk to Our Specialists About Autism Support",
      ctaLink: "/contact",
    },
    adhdSection: {
      title: "Behavioral Therapy for Children With ADHD",
      subtitle: "Impulse Control, Focus & Routine Management",
      paragraphs: [
        "Children with ADHD may experience challenges with attention, impulsivity, emotional regulation, following routines, or completing everyday activities.",
        "When behavioral support is appropriate, therapy may focus on skills such as attention and participation, impulse control, following instructions, managing emotions, completing tasks, waiting and taking turns, following home and school routines, and developing positive behavior patterns.",
        "An individualized assessment can help determine which areas require support.",
      ],
    },
    ourApproachHeading: "Our Child-Focused Behavioral Therapy Approach",
    ourApproachSubtitle: "Structured, Compassionate 6-Step Pathway",
    ourApproachDescription:
      "At Seeds Therapy Center, we focus on understanding the child and the situations in which behavioral challenges occur.",
    ourApproachSteps: [
      {
        step: "01",
        title: "1. Understand",
        desc: "We learn about the child's behavior, communication, routines, strengths, challenges, and everyday environment.",
      },
      {
        step: "02",
        title: "2. Assess",
        desc: "The child's behavioral and developmental needs are considered to identify areas that may benefit from support.",
      },
      {
        step: "03",
        title: "3. Set Goals",
        desc: "Individual therapy goals are developed based on the child's needs and everyday functional requirements.",
      },
      {
        step: "04",
        title: "4. Build Skills",
        desc: "Children participate in structured and age-appropriate activities designed to encourage positive behaviors and develop practical skills.",
      },
      {
        step: "05",
        title: "5. Support Everyday Routines",
        desc: "Strategies can be used to help children participate more successfully in home, school, and social environments.",
      },
      {
        step: "06",
        title: "6. Monitor Progress",
        desc: "Progress can be reviewed regularly and therapy goals can be adjusted according to the child's development and changing needs.",
      },
    ],
    whyChooseSection: {
      title: "Why Choose Seeds Therapy Center for Behavioral Therapy in Coimbatore?",
      subtitle: "Dedicated, Child-Centered Behavioral Support",
      description:
        "Seeds Therapy Center provides a child-focused environment where behavioral goals are developed according to each child's individual needs. Our approach emphasizes:",
      points: [
        "Personalized therapy goals",
        "Child-friendly sessions",
        "Individual developmental needs",
        "Emotional and behavioral skill development",
        "Social skill development",
        "Practical everyday skills",
        "Parent involvement",
        "Progress-focused support",
      ],
    },
    bestCenterSection: {
      title: "Behavioral Therapy Center in Coimbatore",
      subtitle: "Empowering Children and Guiding Families",
      paragraphs: [
        "If you are searching for Behavioral Therapy for Children in Coimbatore, child behavior therapy in Coimbatore, or support for emotional regulation, social skills, attention, routines, or challenging behavior, Seeds Therapy Center provides personalized support based on each child's individual needs.",
        "Our focus is to help children develop practical skills that support positive behavior, emotional well-being, social participation, independence, and confidence in everyday life.",
      ],
      ctaText: "Book a Behavioral Therapy Assessment",
      ctaLink: "/contact",
    },
    specializedFacilities: {
      title: "Supportive Behavioral Tools & Environments",
      items: [
        {
          name: "Visual Schedules & First-Then Boards",
          desc: "Structured pictorial timelines that eliminate anxiety and make daily expectations clear and predictable.",
          iconName: "LayoutList",
        },
        {
          name: "Calming Regulation Sensory Corners",
          desc: "Dedicated safe spaces with sensory calm-down tools, tactile textures, and weighted items for self-soothing.",
          iconName: "Shield",
        },
        {
          name: "Emotion Thermometers & Feelings Cards",
          desc: "Interactive visual meters that help children rate their emotional intensity and choose appropriate coping tools.",
          iconName: "Thermometer",
        },
        {
          name: "Token Economy & Motivational Trackers",
          desc: "Engaging positive reward systems that celebrate good choices, patience, and effort.",
          iconName: "Award",
        },
      ],
    },
    benefits: {
      title: "Positive Outcomes for Your Child and Family",
      items: [
        "Significant improvement in emotional self-regulation and coping strategies",
        "Reduced frequency and intensity of tantrums and meltdowns",
        "Better attention, focus, and classroom participation",
        "Smooth transitions between activities and daily routines",
        "Stronger social interaction, sharing, and peer relationship skills",
        "More peaceful, harmonious home environment with empowered parent guidance",
      ],
    },
    supportedConditions: [
      "Emotional Dysregulation & Frequent Meltdowns",
      "Attention Deficit Hyperactivity Disorder (ADHD)",
      "Autism Spectrum Disorder (ASD)",
      "Challenging & Oppositional Behaviors",
      "Difficulty with Routines & Transitions",
      "Impulsivity & Poor Focus",
      "Social Interaction & Peer Difficulties",
      "Early Childhood Behavioral Challenges",
    ],
    faqs: [
      {
        question: "What is behavioral therapy for children?",
        answer:
          "Behavioral therapy for children focuses on understanding behaviors and developing appropriate strategies and skills to support positive behavior, emotional regulation, social interaction, attention, routines, and everyday participation.",
      },
      {
        question: "When should a child see a behavioral therapist?",
        answer:
          "Parents may consider behavioral support when a child's emotional or behavioral difficulties regularly affect home, school, social interaction, routines, or everyday activities.",
      },
      {
        question: "How do I know if my child needs behavioral therapy?",
        answer:
          "If your child frequently experiences challenging behavior, emotional outbursts, difficulty following routines, attention difficulties, impulsive behavior, or social interaction challenges, a professional assessment can help determine whether behavioral support may be appropriate.",
      },
      {
        question: "Can behavioral therapy help with tantrums and emotional outbursts?",
        answer:
          "Behavioral therapy may help children develop emotional regulation and coping skills that can make it easier to respond to frustration and challenging situations.",
      },
      {
        question: "Can behavioral therapy improve social skills?",
        answer:
          "Yes. Behavioral support can help children develop practical social skills such as taking turns, sharing, waiting, responding to others, following social rules, and participating in interactions.",
      },
      {
        question: "Can behavioral therapy help children with autism?",
        answer:
          "Behavioral therapy can support some children with autism in developing functional skills related to communication, social interaction, routines, emotional regulation, attention, transitions, and independence. Goals should be individualized for each child.",
      },
      {
        question: "Can behavioral therapy help children with ADHD?",
        answer:
          "Behavioral support may help children with ADHD develop skills related to attention, impulse control, emotional regulation, following instructions, routines, and task participation.",
      },
      {
        question: "Can behavioral therapy help with attention difficulties?",
        answer:
          "Behavioral strategies can support children who experience difficulties with attention and participation by developing age-appropriate skills for following instructions, staying engaged, and completing activities.",
      },
      {
        question: "Can behavioral therapy help a child who does not follow routines?",
        answer:
          "Behavioral therapy may help children understand and participate in everyday routines by developing predictable strategies, transition skills, and appropriate responses to routine changes.",
      },
      {
        question: "How does behavioral therapy help with transitions?",
        answer:
          "Therapy can help children gradually develop coping and flexibility skills for moving between activities, environments, or changes in daily routines.",
      },
      {
        question: "At what age can a child start behavioral therapy?",
        answer:
          "Behavioral support can be considered during early childhood when concerns are identified. The appropriate approach depends on the child's developmental stage, individual needs, and therapy goals.",
      },
      {
        question: "How long does behavioral therapy take?",
        answer:
          "The duration of behavioral therapy varies from child to child. It depends on the child's needs, therapy goals, developmental level, participation, and progress.",
      },
      {
        question: "Where can I find behavioral therapy for children in Coimbatore?",
        answer:
          "Parents searching for behavioral therapy for children in Coimbatore can contact Seeds Therapy Center to discuss their child's behavioral, emotional, social, or developmental concerns and understand the available support.",
      },
    ],
    finalCta: {
      title: "Help Your Child Build Positive Skills",
      paragraphs: [
        "Every child has different strengths, needs, and ways of responding to the world. With individualized support and consistent guidance, children can develop skills that help them manage emotions, participate in routines, interact with others, and become more confident in everyday situations.",
        "Looking for Behavioral Therapy for Children in Coimbatore? Contact Seeds Therapy Center to discuss your child's needs.",
      ],
      primaryBtn: "Book an Assessment",
      secondaryBtn: "Contact Seeds Therapy Center",
    },
    relatedTherapies: [
      {
        slug: "occupational-therapy",
        title: "Occupational Therapy",
        desc: "Sensory regulation, fine motor skills, and independent daily life habits.",
        badge: "Sensory & Physical",
      },
      {
        slug: "speech-therapy",
        title: "Speech & Language Therapy",
        desc: "Enhancing verbal expression, listening comprehension, and social pragmatics.",
        badge: "Communication",
      },
      {
        slug: "early-intervention",
        title: "Early Intervention Therapy",
        desc: "Nurturing developmental growth, motor skills, and communication in early years.",
        badge: "Early Years",
      },
    ],
  },

  "early-intervention": {
    slug: "early-intervention",
    title: "Early Intervention Therapy for Children in Coimbatore",
    metaTitle: "Early Intervention Therapy for Children in Coimbatore | Seeds Therapy",
    metaDescription:
      "Early Intervention Therapy for Children in Coimbatore supports developmental growth, communication, learning, and essential skills through personalized child-focused care.",
    metaKeywords: [
      "Early Intervention Therapy for Children in Coimbatore",
      "Early intervention center in Coimbatore",
      "Early intervention therapy in Coimbatore",
      "Early intervention for toddlers Coimbatore",
      "Child early intervention therapy Coimbatore",
      "Developmental therapy for children Coimbatore",
      "Early childhood intervention Coimbatore",
      "Autism early intervention Coimbatore",
      "Speech and motor early intervention",
      "Seeds Therapy Center Coimbatore",
    ],
    shortTitle: "Early Intervention",
    badge: "Early Developmental Care",
    tagline: "Early Support for Essential Developmental Growth, Learning & Communication",
    heroHighlight: "Supporting Developmental Growth, Communication & Essential Skills in Early Years",
    heroDescription:
      "Early Intervention Therapy provides children with the right support during their early years to help them learn, grow, and develop essential skills. At Seeds Therapy Center, we offer personalized therapy based on each child's unique needs, strengths, and developmental goals.",
    overviewHeading: "What Is Early Intervention Therapy?",
    overviewSubtitle: "Understanding Early Intervention for Children",
    overviewParagraphs: [
      "Early Intervention Therapy provides children with the right support during their early years to help them learn, grow, and develop essential skills. At Seeds Therapy Center, we offer personalized therapy based on each child's unique needs, strengths, and developmental goals.",
      "Early Intervention Therapy for Children in Coimbatore can support children who may have difficulties with communication, motor skills, learning, behavior, social interaction, sensory processing, or daily activities. Starting support early can help children build important skills and make everyday activities easier.",
      "Our therapists work closely with children and families to create a comfortable and child-friendly therapy experience. Through engaging activities and personalized support, children are encouraged to develop skills at their own pace.",
    ],
    quickStats: [
      { label: "Early", value: "Milestones", desc: "Timely developmental support" },
      { label: "Personalized", value: "Care", desc: "Tailored to child's unique pace" },
      { label: "Parent", value: "Involvement", desc: "Guidance and family empowerment" },
      { label: "Holistic", value: "Growth", desc: "Speech, motor, sensory & social skills" },
    ],
    howItHelps: {
      title: "How Early Intervention Therapy Helps Children",
      subtitle: "Building Foundations for Lifelong Learning & Independence",
      description:
        "Starting support early can help children build important skills and make everyday activities easier. Depending on the child's needs, therapy supports:",
      points: [
        "Communication and language development",
        "Motor skills and physical coordination",
        "Learning and cognitive readiness",
        "Social interaction and play skills",
        "Emotional regulation and positive behavior",
        "Sensory processing and adaptation",
        "Daily living and self-care skills",
        "Confidence and independence in daily activities",
      ],
    },
    whoIsItFor: {
      heading: "Signs Your Child May Benefit From Early Intervention",
      subtitle: "Early Developmental Indicators",
      description:
        "Parents may consider early intervention support if their child experiences delays or difficulties with:",
      signs: [
        "Speech and language milestone delays (few words, limited responses)",
        "Difficulty with fine motor or gross motor movements (crawling, grasping, walking)",
        "Challenges with eye contact, pointing, or joint attention",
        "Difficulty responding to name or following simple directions",
        "Sensory sensitivities to sound, light, texture, or touch",
        "Challenges interacting or playing with peers and family members",
        "Frequent tantrums or difficulties with emotional regulation",
        "Difficulty adapting to daily routines or changes in environment",
      ],
      reassurance:
        "At Seeds Therapy Center, we believe every child develops in their own way. With early support, encouragement, and the right guidance, children can build confidence, become more independent, and enjoy learning and interacting with the world around them.",
      ctaText: "Talk to Our Early Intervention Specialist",
      ctaLink: "/contact",
    },
    coreAreasHeading: "Key Developmental Areas We Support",
    coreAreasSubtitle: "Comprehensive Early Childhood Support",
    coreAreasDescription:
      "Our early intervention programs address all critical developmental domains to nurture well-rounded growth.",
    coreAreas: [
      {
        title: "Communication & Language Development",
        desc: "Supporting early vocalizations, first words, sentence formation, and interactive communication through playful, engaging activities.",
        iconName: "Speech",
        points: [
          "Building expressive and receptive language",
          "Encouraging gestures, pointing, and eye contact",
          "Enhancing vocabulary and sentence structure",
          "Fostering joyful social communication",
        ],
      },
      {
        title: "Motor Skills & Physical Development",
        desc: "Strengthening fine motor control for grasping, hand-eye coordination, and gross motor balance for crawling, standing, and walking.",
        iconName: "Activity",
        points: [
          "Fine motor grasping and object manipulation",
          "Balance, coordination, and posture support",
          "Bilateral coordination and movement planning",
          "Early self-help skills (feeding, dressing)",
        ],
      },
      {
        title: "Sensory & Cognitive Learning Support",
        desc: "Helping young children process sensory inputs comfortably while boosting curiosity, problem-solving, and pre-academic readiness.",
        iconName: "Sparkles",
        points: [
          "Sensory exploration and regulation",
          "Attention span and focus during activities",
          "Cause-and-effect learning through play",
          "Visual-spatial awareness and memory",
        ],
      },
      {
        title: "Social & Behavioral Development",
        desc: "Guiding children to engage warmly with family and peers, share attention, manage big emotions, and adapt smoothly to daily routines.",
        iconName: "Smile",
        points: [
          "Shared play and turn-taking skills",
          "Emotional regulation and calming strategies",
          "Smooth transitions between activities",
          "Positive behavioral habits at home and preschool",
        ],
      },
    ],
    ourApproachHeading: "Our Early Intervention Approach",
    ourApproachSubtitle: "Child-Focused, Family-Centered Pathway",
    ourApproachDescription:
      "At Seeds Therapy Center, we tailor therapy to each child's developmental profile and family priorities.",
    ourApproachSteps: [
      {
        step: "01",
        title: "1. Understand & Assess",
        desc: "Personalized therapy based on the child's needs, developmental milestones, strengths, and home environment.",
      },
      {
        step: "02",
        title: "2. Communication & Language Development",
        desc: "Support for communication, understanding, and early expressive language through rich interactive play.",
      },
      {
        step: "03",
        title: "3. Motor & Daily Living Skills",
        desc: "Activities to improve fine motor precision, gross motor stability, and early daily self-care routines.",
      },
      {
        step: "04",
        title: "4. Social & Behavioral Development",
        desc: "Support for emotional regulation, positive behaviors, shared attention, and joyful social interactions.",
      },
      {
        step: "05",
        title: "5. Sensory & Learning Support",
        desc: "Multi-sensory engagement and cognitive play that sparks curiosity and preschool learning readiness.",
      },
      {
        step: "06",
        title: "6. Parent Guidance & Family Partnership",
        desc: "Guidance and continuous involvement for parents to extend developmental progress naturally into everyday life.",
      },
    ],
    whyChooseSection: {
      title: "Why Choose Seeds Therapy Center for Early Intervention in Coimbatore?",
      subtitle: "Nurturing Early Potential with Compassionate Care",
      description:
        "Seeds Therapy Center provides a child-focused environment where early developmental goals are personalized to each child's needs. Our approach emphasizes:",
      points: [
        "Personalized therapy based on the child's needs",
        "Support for communication and language development",
        "Activities to improve motor and daily living skills",
        "Support for social and behavioral development",
        "Sensory and learning support",
        "Guidance and involvement for parents and families",
        "Child-friendly and comfortable environment",
        "Progress-focused developmental monitoring",
      ],
    },
    bestCenterSection: {
      title: "Early Intervention Center in Coimbatore",
      subtitle: "Giving Your Child the Best Start in Life",
      paragraphs: [
        "If you are searching for Early Intervention Therapy for Children in Coimbatore, developmental therapy, or early support for communication, motor skills, sensory processing, and behavior, Seeds Therapy Center provides personalized care based on each child's individual needs.",
        "Starting support early helps children build vital skills, gain confidence, and transition smoothly into preschool and everyday social environments.",
      ],
      ctaText: "Book an Early Intervention Assessment",
      ctaLink: "/contact",
    },
    specializedFacilities: {
      title: "Early Intervention Learning & Play Spaces",
      items: [
        {
          name: "Child-Friendly Play Therapy Rooms",
          desc: "Safe, engaging, and interactive play spaces designed specifically for young children.",
          iconName: "Sparkles",
        },
        {
          name: "Sensory Exploration Tools",
          desc: "Age-appropriate sensory toys, tactile mats, and calming items for sensory integration.",
          iconName: "Shield",
        },
        {
          name: "Early Communication Aids",
          desc: "Visual cards, interactive books, and toys that stimulate language, gestures, and sounds.",
          iconName: "Speech",
        },
        {
          name: "Motor Development Equipment",
          desc: "Soft climbers, balance stepping stones, and fine-motor manipulative tools.",
          iconName: "Activity",
        },
      ],
    },
    benefits: {
      title: "Benefits of Early Intervention for Your Child",
      items: [
        "Accelerated development of communication and speech skills",
        "Improved physical coordination and fine motor control",
        "Better emotional regulation and fewer behavioral frustrations",
        "Enhanced readiness for preschool and group learning environments",
        "Greater confidence, self-help independence, and curiosity",
        "Clarity and empowered guidance for parents throughout the journey",
      ],
    },
    supportedConditions: [
      "Developmental Delays in Early Childhood",
      "Speech & Language Delays",
      "Motor Coordination Difficulties",
      "Sensory Processing Sensitivities",
      "Early Behavioral & Emotional Regulation Challenges",
      "Social Interaction & Communication Delays",
      "Autism Spectrum & Early Intervention Needs",
      "Preschool Readiness Support",
    ],
    faqs: [
      {
        question: "What is Early Intervention Therapy?",
        answer:
          "Early Intervention Therapy provides young children with specialized developmental support during their early years to help them learn, grow, and develop essential communication, motor, sensory, behavioral, and daily living skills.",
      },
      {
        question: "Why is starting therapy early so important?",
        answer:
          "During the first few years of life, a child's brain develops rapidly. Early intervention takes advantage of this crucial window of neuroplasticity, helping children learn essential skills faster and preventing developmental gaps from widening.",
      },
      {
        question: "At what age can a child start Early Intervention?",
        answer:
          "Children can begin early intervention as early as infancy through preschool age (typically 0 to 6 years) whenever parents, doctors, or caregivers notice developmental delays or concerns.",
      },
      {
        question: "How are parents involved in Early Intervention?",
        answer:
          "Parents are our most valued partners. Our therapists provide regular guidance, demonstration, and home strategies so that developmental learning continues naturally in daily routines at home.",
      },
      {
        question: "Where can I find Early Intervention therapy in Coimbatore?",
        answer:
          "Seeds Therapy Center in Siddhapudur, Coimbatore provides individualized Early Intervention Therapy for children across speech, motor, sensory, and behavioral domains.",
      },
    ],
    finalCta: {
      title: "Give Your Child the Right Early Support",
      paragraphs: [
        "With early support, encouragement, and the right guidance, children can build confidence, become more independent, and enjoy learning and interacting with the world around them.",
        "Looking for Early Intervention Therapy for Children in Coimbatore? Contact Seeds Therapy Center today to discuss your child's needs.",
      ],
      primaryBtn: "Book an Assessment",
      secondaryBtn: "Contact Seeds Therapy Center",
    },
    relatedTherapies: [
      {
        slug: "occupational-therapy",
        title: "Occupational Therapy",
        desc: "Sensory regulation, fine motor skills, and independent daily life habits.",
        badge: "Sensory & Physical",
      },
      {
        slug: "speech-therapy",
        title: "Speech & Language Therapy",
        desc: "Enhancing verbal expression, listening comprehension, and social pragmatics.",
        badge: "Communication",
      },
      {
        slug: "behavioral-therapy",
        title: "Behavioral Therapy",
        desc: "Building positive habits, emotional regulation, and attention span.",
        badge: "Emotional Growth",
      },
    ],
  },
};

export const allTherapiesList = Object.values(therapiesData);
