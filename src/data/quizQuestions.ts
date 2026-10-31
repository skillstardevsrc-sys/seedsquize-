export type SkillDomain =
  | "Gross Motor"
  | "Fine Motor"
  | "Social Skills"
  | "Cognitive Skills"
  | "Speech & Language — Receptive"
  | "Speech & Language — Expressive"
  | "Sensory Processing"
  | "Behavioural Skills";

export interface Question {
  id: string;
  bandId: string;
  domain: SkillDomain;
  text: string;
}

export interface AgeBandInfo {
  id: string;
  label: string;
  shortLabel: string;
  sublabel: string;
  ageYears: number;
}

export const AGE_BANDS: AgeBandInfo[] = [
  { id: "band_1_2", label: "1–2 years (12–23 months)", shortLabel: "1–2 yrs", sublabel: "12–23 mos", ageYears: 1 },
  { id: "band_2_3", label: "2–3 years (24–35 months)", shortLabel: "2–3 yrs", sublabel: "24–35 mos", ageYears: 2 },
  { id: "band_3_4", label: "3–4 years (36–47 months)", shortLabel: "3–4 yrs", sublabel: "36–47 mos", ageYears: 3 },
  { id: "band_4_5", label: "4–5 years (48–59 months)", shortLabel: "4–5 yrs", sublabel: "48–59 mos", ageYears: 4 },
  { id: "band_5_6", label: "5–6 years (60–71 months)", shortLabel: "5–6 yrs", sublabel: "60–71 mos", ageYears: 5 },
  { id: "band_6_7", label: "6–7 years", shortLabel: "6–7 yrs", sublabel: "Class 1–2", ageYears: 6 },
  { id: "band_7_8", label: "7–8 years", shortLabel: "7–8 yrs", sublabel: "Class 2–3", ageYears: 7 },
  { id: "band_8_9", label: "8–9 years", shortLabel: "8–9 yrs", sublabel: "Class 3–4", ageYears: 8 },
  { id: "band_9_10", label: "9–10 years", shortLabel: "9–10 yrs", sublabel: "Class 4–5", ageYears: 9 },
];

export const DOMAIN_DESCRIPTIONS: Record<SkillDomain, { label: string; hint: string }> = {
  "Gross Motor": {
    label: "Gross Motor",
    hint: "Body balance, running, walking, jumping & movement coordination"
  },
  "Fine Motor": {
    label: "Fine Motor",
    hint: "Hand control, finger pinch, writing & tool handling"
  },
  "Social Skills": {
    label: "Social Skills",
    hint: "Peer interaction, turn taking, sharing & emotional connection"
  },
  "Cognitive Skills": {
    label: "Cognitive Skills",
    hint: "Problem solving, memory, puzzle completion & logic"
  },
  "Speech & Language — Receptive": {
    label: "Receptive Language",
    hint: "Understanding instructions, vocabulary & listening comprehension"
  },
  "Speech & Language — Expressive": {
    label: "Expressive Language",
    hint: "Expressing thoughts, sentences, speaking clarity & asking questions"
  },
  "Sensory Processing": {
    label: "Sensory Processing",
    hint: "Sound tolerance, texture sensitivity, body awareness & environment regulation"
  },
  "Behavioural Skills": {
    label: "Behavioural Skills",
    hint: "Emotional calming, following routines & managing frustration"
  }
};

export const CLINICAL_QUESTIONS: Record<string, Question[]> = {
  // AGE BAND: 1–2 years (12–23 months)
  band_1_2: [
    // Gross Motor
    { id: "b1_gm_1", bandId: "band_1_2", domain: "Gross Motor", text: "Does your child walk independently across a room without holding furniture or an adult?" },
    { id: "b1_gm_2", bandId: "band_1_2", domain: "Gross Motor", text: "Can your child squat to pick up a toy and return to standing without using their hands for support?" },
    { id: "b1_gm_3", bandId: "band_1_2", domain: "Gross Motor", text: "Can your child climb onto a low step or sofa with supervision?" },
    // Fine Motor
    { id: "b1_fm_1", bandId: "band_1_2", domain: "Fine Motor", text: "Can your child pick up small pieces of food using the thumb and fingertip?" },
    { id: "b1_fm_2", bandId: "band_1_2", domain: "Fine Motor", text: "Can your child place small toys into a container and take them back out?" },
    { id: "b1_fm_3", bandId: "band_1_2", domain: "Fine Motor", text: "Can your child make marks on paper with a crayon when it is offered?" },
    // Social Skills
    { id: "b1_ss_1", bandId: "band_1_2", domain: "Social Skills", text: "When you point to or show something interesting, does your child sometimes look toward the object and back to you?" },
    { id: "b1_ss_2", bandId: "band_1_2", domain: "Social Skills", text: "Does your child bring or show you an object to share interest, not only to get help?" },
    { id: "b1_ss_3", bandId: "band_1_2", domain: "Social Skills", text: "Does your child take part in simple back-and-forth social games with a familiar adult?" },
    // Cognitive Skills
    { id: "b1_cs_1", bandId: "band_1_2", domain: "Cognitive Skills", text: "Does your child look for a toy that is hidden under a cloth or placed out of sight nearby?" },
    { id: "b1_cs_2", bandId: "band_1_2", domain: "Cognitive Skills", text: "Can your child put a simple shape or object into a matching opening with trial and error?" },
    { id: "b1_cs_3", bandId: "band_1_2", domain: "Cognitive Skills", text: "Does your child imitate a familiar everyday action during play, such as pretending to brush hair?" },
    // Speech & Language — Receptive
    { id: "b1_slr_1", bandId: "band_1_2", domain: "Speech & Language — Receptive", text: "Does your child usually turn or respond when you call their name in a quiet familiar setting?" },
    { id: "b1_slr_2", bandId: "band_1_2", domain: "Speech & Language — Receptive", text: "Can your child follow a familiar one-step request, such as ‘give me the ball’?" },
    { id: "b1_slr_3", bandId: "band_1_2", domain: "Speech & Language — Receptive", text: "Can your child point to a familiar person or object when you name it?" },
    // Speech & Language — Expressive
    { id: "b1_sle_1", bandId: "band_1_2", domain: "Speech & Language — Expressive", text: "Does your child use meaningful words, sounds, or gestures to request familiar things?" },
    { id: "b1_sle_2", bandId: "band_1_2", domain: "Speech & Language — Expressive", text: "Does your child use a few meaningful words consistently, beyond names of familiar people?" },
    { id: "b1_sle_3", bandId: "band_1_2", domain: "Speech & Language — Expressive", text: "Does your child try to imitate sounds or words during everyday interaction?" },
    // Sensory Processing
    { id: "b1_sp_1", bandId: "band_1_2", domain: "Sensory Processing", text: "Does your child usually manage everyday sounds, touch, and movement without becoming very distressed?" },
    { id: "b1_sp_2", bandId: "band_1_2", domain: "Sensory Processing", text: "Can your child tolerate common care routines, such as washing hands or changing clothes, with age-appropriate help?" },
    { id: "b1_sp_3", bandId: "band_1_2", domain: "Sensory Processing", text: "Does your child seek movement in ways that can be kept safe with adult supervision?" },
    // Behavioural Skills
    { id: "b1_bs_1", bandId: "band_1_2", domain: "Behavioural Skills", text: "When upset, can your child settle with comfort from a familiar adult?" },
    { id: "b1_bs_2", bandId: "band_1_2", domain: "Behavioural Skills", text: "Can your child move away from a preferred activity with adult help?" },
    { id: "b1_bs_3", bandId: "band_1_2", domain: "Behavioural Skills", text: "Can your child communicate a basic need or discomfort through sounds, gestures, or words?" },
  ],

  // AGE BAND: 2–3 years (24–35 months)
  band_2_3: [
    // Gross Motor
    { id: "b2_gm_1", bandId: "band_2_3", domain: "Gross Motor", text: "Can your child run several steps without frequently falling?" },
    { id: "b2_gm_2", bandId: "band_2_3", domain: "Gross Motor", text: "Can your child kick a stationary ball forward?" },
    { id: "b2_gm_3", bandId: "band_2_3", domain: "Gross Motor", text: "Can your child walk up steps while holding an adult’s hand or a railing?" },
    // Fine Motor
    { id: "b2_fm_1", bandId: "band_2_3", domain: "Fine Motor", text: "Can your child stack at least 5–6 blocks or similar objects?" },
    { id: "b2_fm_2", bandId: "band_2_3", domain: "Fine Motor", text: "Can your child turn book pages one at a time most of the time?" },
    { id: "b2_fm_3", bandId: "band_2_3", domain: "Fine Motor", text: "Can your child use a spoon to bring food to the mouth, even if some spills occur?" },
    // Social Skills
    { id: "b2_ss_1", bandId: "band_2_3", domain: "Social Skills", text: "Does your child sometimes watch, approach, or imitate other children during play?" },
    { id: "b2_ss_2", bandId: "band_2_3", domain: "Social Skills", text: "Does your child show or give an object to another person during play?" },
    { id: "b2_ss_3", bandId: "band_2_3", domain: "Social Skills", text: "Does your child respond to familiar social gestures, such as waving bye-bye?" },
    // Cognitive Skills
    { id: "b2_cs_1", bandId: "band_2_3", domain: "Cognitive Skills", text: "Can your child complete a simple shape sorter or puzzle with a few large pieces?" },
    { id: "b2_cs_2", bandId: "band_2_3", domain: "Cognitive Skills", text: "Can your child follow a familiar one-step request without needing you to point?" },
    { id: "b2_cs_3", bandId: "band_2_3", domain: "Cognitive Skills", text: "Can your child match two objects or pictures that are the same?" },
    // Speech & Language — Receptive
    { id: "b2_slr_1", bandId: "band_2_3", domain: "Speech & Language — Receptive", text: "Can your child point to several familiar body parts or pictures when asked?" },
    { id: "b2_slr_2", bandId: "band_2_3", domain: "Speech & Language — Receptive", text: "Can your child follow a simple direction such as ‘get your shoes and bring them here’ with help as needed?" },
    { id: "b2_slr_3", bandId: "band_2_3", domain: "Speech & Language — Receptive", text: "Can your child understand common action words such as eat, drink, wash, and sleep?" },
    // Speech & Language — Expressive
    { id: "b2_sle_1", bandId: "band_2_3", domain: "Speech & Language — Expressive", text: "Does your child combine two or more words, such as ‘more water’ or ‘mummy come’?" },
    { id: "b2_sle_2", bandId: "band_2_3", domain: "Speech & Language — Expressive", text: "Can your child name familiar people, toys, foods, or body parts?" },
    { id: "b2_sle_3", bandId: "band_2_3", domain: "Speech & Language — Expressive", text: "Can your child use words or gestures to ask for help or tell you what they want?" },
    // Sensory Processing
    { id: "b2_sp_1", bandId: "band_2_3", domain: "Sensory Processing", text: "Can your child take part in common play textures, such as water or sand, without marked distress most of the time?" },
    { id: "b2_sp_2", bandId: "band_2_3", domain: "Sensory Processing", text: "Can your child manage ordinary household sounds without frequently covering their ears or trying to escape?" },
    { id: "b2_sp_3", bandId: "band_2_3", domain: "Sensory Processing", text: "Can your child tolerate common grooming and clothing routines with support?" },
    // Behavioural Skills
    { id: "b2_bs_1", bandId: "band_2_3", domain: "Behavioural Skills", text: "Can your child wait briefly for a desired item when an adult supports them?" },
    { id: "b2_bs_2", bandId: "band_2_3", domain: "Behavioural Skills", text: "Can your child move to a new activity when given a simple warning and help?" },
    { id: "b2_bs_3", bandId: "band_2_3", domain: "Behavioural Skills", text: "After a small frustration, can your child calm with adult comfort within a reasonable time?" },
  ],

  // AGE BAND: 3–4 years (36–47 months)
  band_3_4: [
    // Gross Motor
    { id: "b3_gm_1", bandId: "band_3_4", domain: "Gross Motor", text: "Can your child jump forward with both feet leaving the floor?" },
    { id: "b3_gm_2", bandId: "band_3_4", domain: "Gross Motor", text: "Can your child go up stairs placing one foot on each step, with a railing if needed?" },
    { id: "b3_gm_3", bandId: "band_3_4", domain: "Gross Motor", text: "Can your child throw a medium-sized ball toward a nearby adult?" },
    // Fine Motor
    { id: "b3_fm_1", bandId: "band_3_4", domain: "Fine Motor", text: "Can your child copy a vertical line after an adult demonstrates it?" },
    { id: "b3_fm_2", bandId: "band_3_4", domain: "Fine Motor", text: "Can your child complete a simple inset puzzle with a few pieces?" },
    { id: "b3_fm_3", bandId: "band_3_4", domain: "Fine Motor", text: "Can your child snip paper with child-safe scissors with adult assistance?" },
    // Social Skills
    { id: "b3_ss_1", bandId: "band_3_4", domain: "Social Skills", text: "Does your child take short turns in a simple game with adult support?" },
    { id: "b3_ss_2", bandId: "band_3_4", domain: "Social Skills", text: "Does your child join other children in play, even if they mostly play alongside them?" },
    { id: "b3_ss_3", bandId: "band_3_4", domain: "Social Skills", text: "Does your child use words, gestures, or facial expressions to share interest or ask for help?" },
    // Cognitive Skills
    { id: "b3_cs_1", bandId: "band_3_4", domain: "Cognitive Skills", text: "Can your child complete a simple puzzle with about 3–6 pieces?" },
    { id: "b3_cs_2", bandId: "band_3_4", domain: "Cognitive Skills", text: "Can your child sort a small group of objects by one feature, such as colour or shape?" },
    { id: "b3_cs_3", bandId: "band_3_4", domain: "Cognitive Skills", text: "When a toy or task does not work at first, does your child try another action to solve it?" },
    // Speech & Language — Receptive
    { id: "b3_slr_1", bandId: "band_3_4", domain: "Speech & Language — Receptive", text: "Can your child understand simple ‘who’, ‘what’, and ‘where’ questions?" },
    { id: "b3_slr_2", bandId: "band_3_4", domain: "Speech & Language — Receptive", text: "Can your child follow a two-part instruction such as ‘pick up the toy and put it in the box’?" },
    { id: "b3_slr_3", bandId: "band_3_4", domain: "Speech & Language — Receptive", text: "Can your child understand location words such as in, on, and under in everyday situations?" },
    // Speech & Language — Expressive
    { id: "b3_sle_1", bandId: "band_3_4", domain: "Speech & Language — Expressive", text: "Does your child use short sentences to talk about needs or experiences?" },
    { id: "b3_sle_2", bandId: "band_3_4", domain: "Speech & Language — Expressive", text: "Can your child answer simple ‘what’ and ‘where’ questions?" },
    { id: "b3_sle_3", bandId: "band_3_4", domain: "Speech & Language — Expressive", text: "Can your child name familiar actions, such as running, eating, or sleeping?" },
    // Sensory Processing
    { id: "b3_sp_1", bandId: "band_3_4", domain: "Sensory Processing", text: "Can your child participate in messy play or craft materials without consistently avoiding the activity?" },
    { id: "b3_sp_2", bandId: "band_3_4", domain: "Sensory Processing", text: "Can your child remain in a typical play environment with everyday background noise?" },
    { id: "b3_sp_3", bandId: "band_3_4", domain: "Sensory Processing", text: "Does your child notice obstacles and move around people or objects without frequent collisions?" },
    // Behavioural Skills
    { id: "b3_bs_1", bandId: "band_3_4", domain: "Behavioural Skills", text: "Can your child follow a familiar daily routine with reminders?" },
    { id: "b3_bs_2", bandId: "band_3_4", domain: "Behavioural Skills", text: "Can your child transition between activities with warning and support?" },
    { id: "b3_bs_3", bandId: "band_3_4", domain: "Behavioural Skills", text: "When frustrated, can your child sometimes use a gesture or word instead of hitting, biting, or throwing?" },
  ],

  // AGE BAND: 4–5 years (48–59 months)
  band_4_5: [
    // Gross Motor
    { id: "b4_gm_1", bandId: "band_4_5", domain: "Gross Motor", text: "Can your child stand on one foot briefly without holding onto anything?" },
    { id: "b4_gm_2", bandId: "band_4_5", domain: "Gross Motor", text: "Can your child catch a large ball from a short distance using both hands or arms?" },
    { id: "b4_gm_3", bandId: "band_4_5", domain: "Gross Motor", text: "Can your child hop forward on one foot at least once?" },
    // Fine Motor
    { id: "b4_fm_1", bandId: "band_4_5", domain: "Fine Motor", text: "Can your child copy a circle after seeing a model?" },
    { id: "b4_fm_2", bandId: "band_4_5", domain: "Fine Motor", text: "Can your child cut across a short straight line with child-safe scissors?" },
    { id: "b4_fm_3", bandId: "band_4_5", domain: "Fine Motor", text: "Can your child draw a person with at least a few recognisable body parts?" },
    // Social Skills
    { id: "b4_ss_1", bandId: "band_4_5", domain: "Social Skills", text: "Does your child join pretend play with another person, such as taking turns being a shopkeeper or customer?" },
    { id: "b4_ss_2", bandId: "band_4_5", domain: "Social Skills", text: "Can your child wait for a turn in a simple game with reminders?" },
    { id: "b4_ss_3", bandId: "band_4_5", domain: "Social Skills", text: "Does your child notice when another person is upset and respond in a simple way?" },
    // Cognitive Skills
    { id: "b4_cs_1", bandId: "band_4_5", domain: "Cognitive Skills", text: "Can your child sort objects by colour, shape, or size when asked?" },
    { id: "b4_cs_2", bandId: "band_4_5", domain: "Cognitive Skills", text: "Can your child follow a familiar two-step instruction in the correct order?" },
    { id: "b4_cs_3", bandId: "band_4_5", domain: "Cognitive Skills", text: "Can your child count a small group of objects one by one with reasonable accuracy for their age?" },
    // Speech & Language — Receptive
    { id: "b4_slr_1", bandId: "band_4_5", domain: "Speech & Language — Receptive", text: "Can your child understand simple questions about a short story or picture?" },
    { id: "b4_slr_2", bandId: "band_4_5", domain: "Speech & Language — Receptive", text: "Can your child follow two related instructions without needing each step repeated separately?" },
    { id: "b4_slr_3", bandId: "band_4_5", domain: "Speech & Language — Receptive", text: "Can your child understand basic describing words such as big/small and hot/cold?" },
    // Speech & Language — Expressive
    { id: "b4_sle_1", bandId: "band_4_5", domain: "Speech & Language — Expressive", text: "Can your child describe a recent event using a few connected sentences?" },
    { id: "b4_sle_2", bandId: "band_4_5", domain: "Speech & Language — Expressive", text: "Can your child answer and ask simple questions during a conversation?" },
    { id: "b4_sle_3", bandId: "band_4_5", domain: "Speech & Language — Expressive", text: "Can your child describe an object using details such as colour, size, or what it does?" },
    // Sensory Processing
    { id: "b4_sp_1", bandId: "band_4_5", domain: "Sensory Processing", text: "Can your child manage common clothing, grooming, and mealtime sensations well enough for daily routines?" },
    { id: "b4_sp_2", bandId: "band_4_5", domain: "Sensory Processing", text: "Can your child participate in a busy play setting for a short period with support if needed?" },
    { id: "b4_sp_3", bandId: "band_4_5", domain: "Sensory Processing", text: "After exciting movement play, can your child settle enough to move to the next activity with help?" },
    // Behavioural Skills
    { id: "b4_bs_1", bandId: "band_4_5", domain: "Behavioural Skills", text: "Can your child wait for a short turn in a game with reminders?" },
    { id: "b4_bs_2", bandId: "band_4_5", domain: "Behavioural Skills", text: "Can your child manage a small change in routine when an adult explains it?" },
    { id: "b4_bs_3", bandId: "band_4_5", domain: "Behavioural Skills", text: "Can your child follow familiar safety rules with reminders?" },
  ],

  // AGE BAND: 5–6 years (60–71 months)
  band_5_6: [
    // Gross Motor
    { id: "b5_gm_1", bandId: "band_5_6", domain: "Gross Motor", text: "Can your child hop on one foot several times in a row?" },
    { id: "b5_gm_2", bandId: "band_5_6", domain: "Gross Motor", text: "Can your child catch a ball thrown gently from about 1.5–2 metres away?" },
    { id: "b5_gm_3", bandId: "band_5_6", domain: "Gross Motor", text: "Can your child run, stop, and change direction during playground games without frequent loss of balance?" },
    // Fine Motor
    { id: "b5_fm_1", bandId: "band_5_6", domain: "Fine Motor", text: "Can your child copy a cross and a square after seeing a model?" },
    { id: "b5_fm_2", bandId: "band_5_6", domain: "Fine Motor", text: "Can your child cut around a simple shape while staying near the outline?" },
    { id: "b5_fm_3", bandId: "band_5_6", domain: "Fine Motor", text: "Can your child manage common clothing fasteners, such as large buttons or a zip, with little help?" },
    // Social Skills
    { id: "b5_ss_1", bandId: "band_5_6", domain: "Social Skills", text: "Can your child take part in cooperative play with other children for several minutes?" },
    { id: "b5_ss_2", bandId: "band_5_6", domain: "Social Skills", text: "Can your child follow simple group-game rules with occasional reminders?" },
    { id: "b5_ss_3", bandId: "band_5_6", domain: "Social Skills", text: "Can your child ask for help or use words to resolve a small disagreement with support?" },
    // Cognitive Skills
    { id: "b5_cs_1", bandId: "band_5_6", domain: "Cognitive Skills", text: "Can your child follow a familiar three-step routine, such as get a book, sit down, and open it?" },
    { id: "b5_cs_2", bandId: "band_5_6", domain: "Cognitive Skills", text: "Can your child continue a simple repeating pattern, such as red-blue-red-blue?" },
    { id: "b5_cs_3", bandId: "band_5_6", domain: "Cognitive Skills", text: "Can your child answer simple questions about the main events in a story just heard?" },
    // Speech & Language — Receptive
    { id: "b5_slr_1", bandId: "band_5_6", domain: "Speech & Language — Receptive", text: "Can your child listen to a short story and answer questions about what happened?" },
    { id: "b5_slr_2", bandId: "band_5_6", domain: "Speech & Language — Receptive", text: "Can your child follow a three-step familiar instruction in the correct order?" },
    { id: "b5_slr_3", bandId: "band_5_6", domain: "Speech & Language — Receptive", text: "Can your child understand sequence words such as first, next, and last?" },
    // Speech & Language — Expressive
    { id: "b5_sle_1", bandId: "band_5_6", domain: "Speech & Language — Expressive", text: "Can your child retell a simple story or event in a mostly understandable order?" },
    { id: "b5_sle_2", bandId: "band_5_6", domain: "Speech & Language — Expressive", text: "Can unfamiliar adults usually understand what your child says?" },
    { id: "b5_sle_3", bandId: "band_5_6", domain: "Speech & Language — Expressive", text: "Can your child describe a picture or experience using several relevant details?" },
    // Sensory Processing
    { id: "b5_sp_1", bandId: "band_5_6", domain: "Sensory Processing", text: "Can your child participate in classroom activities despite ordinary background sounds?" },
    { id: "b5_sp_2", bandId: "band_5_6", domain: "Sensory Processing", text: "Can your child tolerate a range of familiar clothing and self-care sensations without frequent distress?" },
    { id: "b5_sp_3", bandId: "band_5_6", domain: "Sensory Processing", text: "Can your child tell or show an adult when noise, touch, or movement feels uncomfortable?" },
    // Behavioural Skills
    { id: "b5_bs_1", bandId: "band_5_6", domain: "Behavioural Skills", text: "Can your child use words or a taught strategy to express frustration with support?" },
    { id: "b5_bs_2", bandId: "band_5_6", domain: "Behavioural Skills", text: "Can your child stop one activity and begin the next after a reminder?" },
    { id: "b5_bs_3", bandId: "band_5_6", domain: "Behavioural Skills", text: "Can your child follow familiar home or classroom rules most of the time with occasional reminders?" },
  ],

  // AGE BAND: 6–7 years
  band_6_7: [
    // Gross Motor
    { id: "b6_gm_1", bandId: "band_6_7", domain: "Gross Motor", text: "Can your child balance on one foot for about 10 seconds?" },
    { id: "b6_gm_2", bandId: "band_6_7", domain: "Gross Motor", text: "Can your child skip or perform a similar coordinated step-hop pattern?" },
    { id: "b6_gm_3", bandId: "band_6_7", domain: "Gross Motor", text: "Can your child throw and catch a ball with a partner several times?" },
    // Fine Motor
    { id: "b6_fm_1", bandId: "band_6_7", domain: "Fine Motor", text: "Can your child write or copy their first name so that most letters are recognisable, if taught?" },
    { id: "b6_fm_2", bandId: "band_6_7", domain: "Fine Motor", text: "Can your child copy basic shapes and simple patterns with a pencil?" },
    { id: "b6_fm_3", bandId: "band_6_7", domain: "Fine Motor", text: "Can your child use scissors and glue to complete a simple craft with controlled placement?" },
    // Social Skills
    { id: "b6_ss_1", bandId: "band_6_7", domain: "Social Skills", text: "Can your child join a group activity and wait for their turn with limited reminders?" },
    { id: "b6_ss_2", bandId: "band_6_7", domain: "Social Skills", text: "Can your child work with a peer toward a shared goal, such as building something together?" },
    { id: "b6_ss_3", bandId: "band_6_7", domain: "Social Skills", text: "Can your child explain to an adult what happened when a peer problem occurs?" },
    // Cognitive Skills
    { id: "b6_cs_1", bandId: "band_6_7", domain: "Cognitive Skills", text: "Can your child group items into categories, such as animals, foods, or vehicles?" },
    { id: "b6_cs_2", bandId: "band_6_7", domain: "Cognitive Skills", text: "Can your child follow classroom directions with two or three steps when paying attention?" },
    { id: "b6_cs_3", bandId: "band_6_7", domain: "Cognitive Skills", text: "Can your child explain a simple reason for an answer or choice?" },
    // Speech & Language — Receptive
    { id: "b6_slr_1", bandId: "band_6_7", domain: "Speech & Language — Receptive", text: "Can your child understand classroom instructions containing several steps?" },
    { id: "b6_slr_2", bandId: "band_6_7", domain: "Speech & Language — Receptive", text: "Can your child understand simple explanations of why something happened?" },
    { id: "b6_slr_3", bandId: "band_6_7", domain: "Speech & Language — Receptive", text: "Can your child understand time words such as yesterday, today, and tomorrow in context?" },
    // Speech & Language — Expressive
    { id: "b6_sle_1", bandId: "band_6_7", domain: "Speech & Language — Expressive", text: "Can your child explain an experience with a clear sequence of events?" },
    { id: "b6_sle_2", bandId: "band_6_7", domain: "Speech & Language — Expressive", text: "Can your child answer simple ‘why’ and ‘how’ questions in conversation?" },
    { id: "b6_sle_3", bandId: "band_6_7", domain: "Speech & Language — Expressive", text: "Can your child explain their needs or a misunderstanding using words?" },
    // Sensory Processing
    { id: "b6_sp_1", bandId: "band_6_7", domain: "Sensory Processing", text: "Can your child stay with a classroom task when there are typical sights and sounds around them?" },
    { id: "b6_sp_2", bandId: "band_6_7", domain: "Sensory Processing", text: "Can your child use a familiar strategy, such as asking for a quiet break, when overwhelmed?" },
    { id: "b6_sp_3", bandId: "band_6_7", domain: "Sensory Processing", text: "Can your child participate in common movement activities without marked fear or distress?" },
    // Behavioural Skills
    { id: "b6_bs_1", bandId: "band_6_7", domain: "Behavioural Skills", text: "Can your child use a taught calming strategy, such as asking for help or taking a break, with prompts?" },
    { id: "b6_bs_2", bandId: "band_6_7", domain: "Behavioural Skills", text: "Can your child stay with a non-preferred age-appropriate task for a short period with support?" },
    { id: "b6_bs_3", bandId: "band_6_7", domain: "Behavioural Skills", text: "Can your child cope with losing a game or receiving correction with adult guidance?" },
  ],

  // AGE BAND: 7–8 years
  band_7_8: [
    // Gross Motor
    { id: "b7_gm_1", bandId: "band_7_8", domain: "Gross Motor", text: "Can your child coordinate running, stopping, and changing direction in a group game?" },
    { id: "b7_gm_2", bandId: "band_7_8", domain: "Gross Motor", text: "Can your child ride a bicycle or scooter appropriate to their skill level while following safety rules?" },
    { id: "b7_gm_3", bandId: "band_7_8", domain: "Gross Motor", text: "Can your child perform a familiar sequence of movements in a game or sport?" },
    // Fine Motor
    { id: "b7_fm_1", bandId: "band_7_8", domain: "Fine Motor", text: "Can your child write a short sentence with letters generally aligned on the line?" },
    { id: "b7_fm_2", bandId: "band_7_8", domain: "Fine Motor", text: "Can your child copy a simple drawing or pattern while including the main parts?" },
    { id: "b7_fm_3", bandId: "band_7_8", domain: "Fine Motor", text: "Can your child organise and manipulate small school materials without frequent dropping or difficulty?" },
    // Social Skills
    { id: "b7_ss_1", bandId: "band_7_8", domain: "Social Skills", text: "Does your child maintain contact with peers through shared activities or friendship choices?" },
    { id: "b7_ss_2", bandId: "band_7_8", domain: "Social Skills", text: "Can your child follow rules in group games and recognise when a rule applies to everyone?" },
    { id: "b7_ss_3", bandId: "band_7_8", domain: "Social Skills", text: "Can your child consider another person’s feelings or point of view with some guidance?" },
    // Cognitive Skills
    { id: "b7_cs_1", bandId: "band_7_8", domain: "Cognitive Skills", text: "Can your child plan the steps needed to complete a familiar school task?" },
    { id: "b7_cs_2", bandId: "band_7_8", domain: "Cognitive Skills", text: "Can your child remember and retell the main events of a short story or experience in order?" },
    { id: "b7_cs_3", bandId: "band_7_8", domain: "Cognitive Skills", text: "Can your child compare two objects or ideas and tell one similarity or difference?" },
    // Speech & Language — Receptive
    { id: "b7_slr_1", bandId: "band_7_8", domain: "Speech & Language — Receptive", text: "Can your child identify the main idea of a short spoken explanation?" },
    { id: "b7_slr_2", bandId: "band_7_8", domain: "Speech & Language — Receptive", text: "Can your child follow directions that include before/after or left/right?" },
    { id: "b7_slr_3", bandId: "band_7_8", domain: "Speech & Language — Receptive", text: "Can your child understand a teacher’s oral explanation without needing frequent repetition?" },
    // Speech & Language — Expressive
    { id: "b7_sle_1", bandId: "band_7_8", domain: "Speech & Language — Expressive", text: "Can your child explain how to do a familiar activity in a clear order?" },
    { id: "b7_sle_2", bandId: "band_7_8", domain: "Speech & Language — Expressive", text: "Can your child retell the main events of a story without leaving out most key details?" },
    { id: "b7_sle_3", bandId: "band_7_8", domain: "Speech & Language — Expressive", text: "Can your child express feelings and opinions using words in everyday situations?" },
    // Sensory Processing
    { id: "b7_sp_1", bandId: "band_7_8", domain: "Sensory Processing", text: "Can your child recognise when noise, light, touch, or movement is distracting them?" },
    { id: "b7_sp_2", bandId: "band_7_8", domain: "Sensory Processing", text: "Can your child use an agreed strategy, such as a movement break or quieter space, with reminders?" },
    { id: "b7_sp_3", bandId: "band_7_8", domain: "Sensory Processing", text: "Can your child return to a task after a planned sensory or movement break?" },
    // Behavioural Skills
    { id: "b7_bs_1", bandId: "band_7_8", domain: "Behavioural Skills", text: "Can your child manage common disappointments without a prolonged upset most of the time?" },
    { id: "b7_bs_2", bandId: "band_7_8", domain: "Behavioural Skills", text: "Can your child start familiar daily tasks with fewer reminders than before?" },
    { id: "b7_bs_3", bandId: "band_7_8", domain: "Behavioural Skills", text: "Can your child follow agreed rules when an adult is not prompting every step?" },
  ],

  // AGE BAND: 8–9 years
  band_8_9: [
    // Gross Motor
    { id: "b8_gm_1", bandId: "band_8_9", domain: "Gross Motor", text: "Can your child jump forward and land on both feet while maintaining balance?" },
    { id: "b8_gm_2", bandId: "band_8_9", domain: "Gross Motor", text: "Can your child follow movement sequences with several steps during PE or play?" },
    { id: "b8_gm_3", bandId: "band_8_9", domain: "Gross Motor", text: "Can your child participate in age-appropriate ball games while coordinating movement with other players?" },
    // Fine Motor
    { id: "b8_fm_1", bandId: "band_8_9", domain: "Fine Motor", text: "Can your child write several connected sentences that are readable to a familiar adult?" },
    { id: "b8_fm_2", bandId: "band_8_9", domain: "Fine Motor", text: "Can your child complete a craft requiring cutting, folding, and joining small pieces?" },
    { id: "b8_fm_3", bandId: "band_8_9", domain: "Fine Motor", text: "Can your child use a ruler to draw a straight line and manage school tools accurately?" },
    // Social Skills
    { id: "b8_ss_1", bandId: "band_8_9", domain: "Social Skills", text: "Can your child cooperate with peers by sharing materials and negotiating roles?" },
    { id: "b8_ss_2", bandId: "band_8_9", domain: "Social Skills", text: "Can your child cope with winning or losing a game without needing prolonged adult support most of the time?" },
    { id: "b8_ss_3", bandId: "band_8_9", domain: "Social Skills", text: "Can your child recognise when a comment may upset someone and adjust it with guidance?" },
    // Cognitive Skills
    { id: "b8_cs_1", bandId: "band_8_9", domain: "Cognitive Skills", text: "Can your child choose and use a strategy to solve a familiar age-appropriate problem?" },
    { id: "b8_cs_2", bandId: "band_8_9", domain: "Cognitive Skills", text: "Can your child organise school materials and work steps with occasional reminders?" },
    { id: "b8_cs_3", bandId: "band_8_9", domain: "Cognitive Skills", text: "Can your child use information learned earlier to solve a similar new problem?" },
    // Speech & Language — Receptive
    { id: "b8_slr_1", bandId: "band_8_9", domain: "Speech & Language — Receptive", text: "Can your child remember important details from a longer spoken message?" },
    { id: "b8_slr_2", bandId: "band_8_9", domain: "Speech & Language — Receptive", text: "Can your child follow multi-step directions and complete them in order?" },
    { id: "b8_slr_3", bandId: "band_8_9", domain: "Speech & Language — Receptive", text: "Can your child ask for clarification when they do not understand spoken information?" },
    // Speech & Language — Expressive
    { id: "b8_sle_1", bandId: "band_8_9", domain: "Speech & Language — Expressive", text: "Can your child summarise a short story or event and include important details?" },
    { id: "b8_sle_2", bandId: "band_8_9", domain: "Speech & Language — Expressive", text: "Can your child explain the steps they used to solve a familiar problem?" },
    { id: "b8_sle_3", bandId: "band_8_9", domain: "Speech & Language — Expressive", text: "Can your child maintain a back-and-forth conversation on a shared topic?" },
    // Sensory Processing
    { id: "b8_sp_1", bandId: "band_8_9", domain: "Sensory Processing", text: "Can your child manage common busy settings, such as a shop or assembly, with reasonable support?" },
    { id: "b8_sp_2", bandId: "band_8_9", domain: "Sensory Processing", text: "Can your child communicate which everyday sensory experiences are uncomfortable?" },
    { id: "b8_sp_3", bandId: "band_8_9", domain: "Sensory Processing", text: "Can your child use a suitable strategy to rejoin an activity after sensory overload?" },
    // Behavioural Skills
    { id: "b8_bs_1", bandId: "band_8_9", domain: "Behavioural Skills", text: "Can your child identify or describe feelings before behaviour escalates, with support if needed?" },
    { id: "b8_bs_2", bandId: "band_8_9", domain: "Behavioural Skills", text: "Can your child manage a change of plan after an explanation and time to adjust?" },
    { id: "b8_bs_3", bandId: "band_8_9", domain: "Behavioural Skills", text: "Can your child return to a task after distraction or frustration with limited prompting?" },
  ],

  // AGE BAND: 9–10 years
  band_9_10: [
    // Gross Motor
    { id: "b9_gm_1", bandId: "band_9_10", domain: "Gross Motor", text: "Can your child maintain balance when starting, stopping, and changing direction during sports or playground games?" },
    { id: "b9_gm_2", bandId: "band_9_10", domain: "Gross Motor", text: "Can your child learn and repeat a new age-appropriate movement sequence after demonstration?" },
    { id: "b9_gm_3", bandId: "band_9_10", domain: "Gross Motor", text: "Can your child coordinate whole-body movements in a familiar sport or active game?" },
    // Fine Motor
    { id: "b9_fm_1", bandId: "band_9_10", domain: "Fine Motor", text: "Can your child write a short paragraph that is readable without frequent prompting to slow down?" },
    { id: "b9_fm_2", bandId: "band_9_10", domain: "Fine Motor", text: "Can your child plan and assemble a multi-step craft using both hands together?" },
    { id: "b9_fm_3", bandId: "band_9_10", domain: "Fine Motor", text: "Can your child manage everyday school tools, fasteners, and small materials independently and safely?" },
    // Social Skills
    { id: "b9_ss_1", bandId: "band_9_10", domain: "Social Skills", text: "Can your child discuss and resolve everyday peer disagreements with limited adult help?" },
    { id: "b9_ss_2", bandId: "band_9_10", domain: "Social Skills", text: "Can your child adjust how they communicate with peers, teachers, and unfamiliar people in familiar settings?" },
    { id: "b9_ss_3", bandId: "band_9_10", domain: "Social Skills", text: "Can your child share responsibilities and contribute to a group task?" },
    // Cognitive Skills
    { id: "b9_cs_1", bandId: "band_9_10", domain: "Cognitive Skills", text: "Can your child plan and complete a multi-step school or home project with some independence?" },
    { id: "b9_cs_2", bandId: "band_9_10", domain: "Cognitive Skills", text: "Can your child explain how they reached an answer or solved a problem?" },
    { id: "b9_cs_3", bandId: "band_9_10", domain: "Cognitive Skills", text: "Can your child identify an error in their work and try to correct it?" },
    // Speech & Language — Receptive
    { id: "b9_slr_1", bandId: "band_9_10", domain: "Speech & Language — Receptive", text: "Can your child understand age-appropriate classroom discussion and spoken explanations?" },
    { id: "b9_slr_2", bandId: "band_9_10", domain: "Speech & Language — Receptive", text: "Can your child follow multi-step directions while keeping track of the materials needed?" },
    { id: "b9_slr_3", bandId: "band_9_10", domain: "Speech & Language — Receptive", text: "Can your child understand implied meaning in familiar conversations when the context is clear?" },
    // Speech & Language — Expressive
    { id: "b9_sle_1", bandId: "band_9_10", domain: "Speech & Language — Expressive", text: "Can your child give an organised oral explanation for a school task or project?" },
    { id: "b9_sle_2", bandId: "band_9_10", domain: "Speech & Language — Expressive", text: "Can your child add enough detail for a listener who does not already know the situation?" },
    { id: "b9_sle_3", bandId: "band_9_10", domain: "Speech & Language — Expressive", text: "Can your child state an opinion and support it with a relevant reason or example?" },
    // Sensory Processing
    { id: "b9_sp_1", bandId: "band_9_10", domain: "Sensory Processing", text: "Can your child choose or request a helpful strategy when everyday sensory input feels overwhelming?" },
    { id: "b9_sp_2", bandId: "band_9_10", domain: "Sensory Processing", text: "Can your child participate in typical school and community settings with reasonable support?" },
    { id: "b9_sp_3", bandId: "band_9_10", domain: "Sensory Processing", text: "Do sensory responses usually allow your child to manage daily routines such as dressing, grooming, meals, and learning?" },
    // Behavioural Skills
    { id: "b9_bs_1", bandId: "band_9_10", domain: "Behavioural Skills", text: "Can your child choose a suitable strategy to manage strong feelings in common situations?" },
    { id: "b9_bs_2", bandId: "band_9_10", domain: "Behavioural Skills", text: "Can your child organise behaviour for homework or routines with reasonable reminders?" },
    { id: "b9_bs_3", bandId: "band_9_10", domain: "Behavioural Skills", text: "Can your child resolve everyday disagreements without unsafe behaviour most of the time?" },
  ]
};

export function getQuestionsForAgeBand(bandId: string): Question[] {
  return CLINICAL_QUESTIONS[bandId] || CLINICAL_QUESTIONS["band_3_4"];
}

export interface DomainScore {
  domain: SkillDomain;
  label: string;
  score: number;
  maxScore: number;
  percentage: number;
  badge: string;
  colorClass: string;
}

export type OutcomeType = "excellent" | "attend_session" | "consult_doctor";

export interface OverallAssessmentResult {
  totalScore: number;
  maxScore: number;
  percentage: number;
  outcomeType: OutcomeType;
  yesCount: number;
  sometimesCount: number;
  noCount: number;
  title: string;
  badge: string;
  toneSummary: string;
  reassurance: string;
  recommendedAction: string;
  domainScores: DomainScore[];
  strongestDomains: string[];
  focusDomains: string[];
}

export function calculateClinicalScore(
  answers: Record<string, number>,
  bandId: string,
  childName: string
): OverallAssessmentResult {
  const name = childName.trim() || "Your child";
  const questions = getQuestionsForAgeBand(bandId);

  // Yes = 2 pts, Sometimes = 1 pt, No / Not yet = 0 pts
  let yesCount = 0;
  let sometimesCount = 0;
  let noCount = 0;

  questions.forEach((q) => {
    const val = answers[q.id];
    if (val === 2) yesCount++;
    else if (val === 1) sometimesCount++;
    else if (val === 0) noCount++;
  });

  const domains: SkillDomain[] = [
    "Gross Motor",
    "Fine Motor",
    "Social Skills",
    "Cognitive Skills",
    "Speech & Language — Receptive",
    "Speech & Language — Expressive",
    "Sensory Processing",
    "Behavioural Skills"
  ];

  const domainScores: DomainScore[] = domains.map((domain) => {
    const domainQs = questions.filter((q) => q.domain === domain);
    const score = domainQs.reduce((acc, q) => acc + (answers[q.id] ?? 0), 0);
    const maxScore = domainQs.length * 2; // 3 * 2 = 6
    const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;

    let badge = "On Track";
    let colorClass = "text-emerald-700 bg-emerald-50 border-emerald-200";

    if (percentage >= 80) {
      badge = "Confident Strength";
      colorClass = "text-emerald-700 bg-emerald-50 border-emerald-200";
    } else if (percentage >= 50) {
      badge = "Emerging & Practicing";
      colorClass = "text-amber-800 bg-amber-50 border-amber-200";
    } else {
      badge = "Enrichment Needed";
      colorClass = "text-rose-800 bg-rose-50 border-rose-200";
    }

    return {
      domain,
      label: DOMAIN_DESCRIPTIONS[domain]?.label || domain,
      score,
      maxScore,
      percentage,
      badge,
      colorClass
    };
  });

  const totalScore = domainScores.reduce((acc, d) => acc + d.score, 0);
  const maxScore = 48; // 24 * 2
  const percentage = Math.round((totalScore / maxScore) * 100);

  const strongestDomains = domainScores
    .filter((d) => d.percentage >= 70)
    .map((d) => d.label);

  const focusDomains = domainScores
    .filter((d) => d.percentage < 70)
    .map((d) => d.label);

  // DECISION LOGIC:
  // 1. If Yes answer is high -> Child is Excellent
  // 2. If No answer is high -> Attend One Session
  // 3. If Sometimes is high -> Concern a Doctor / Specialist
  let outcomeType: OutcomeType = "excellent";
  let title = "";
  let badge = "";
  let toneSummary = "";
  let reassurance = "";
  let recommendedAction = "";

  if (noCount > yesCount && noCount >= sometimesCount) {
    outcomeType = "attend_session";
    title = `Attend One Session at SEEDS Therapy Center`;
    badge = "🌱 Attend One Session";
    toneSummary = `${name} has ${noCount} milestones marked as "No / Not yet" out of 24. Early childhood is the most responsive window for growth, and attending one guided session will lovingly support their development.`;
    reassurance = "Please take heart — young brains are remarkably adaptable! Gentle, early structured guidance and tailored activities make milestone progress smooth and joyful.";
    recommendedAction = `We recommend bringing ${name} to attend 1 personalized observation and assessment session with our child specialists.`;
  } else if (sometimesCount > yesCount && sometimesCount >= noCount) {
    outcomeType = "consult_doctor";
    title = `Concern a Doctor / Specialist Consultation`;
    badge = "🩺 Concern a Doctor";
    toneSummary = `${name} has ${sometimesCount} milestones marked as "Sometimes" and ${yesCount} as "Yes" out of 24. These skills are currently emerging and would greatly benefit from expert clinical observation.`;
    reassurance = "It is completely normal for skills to be in an emerging stage. Consulting a child development specialist or doctor gives you clear, proven home activities to turn these into solid milestones.";
    recommendedAction = `We suggest scheduling a consultation with our developmental doctors and therapists to review ${name}'s emerging milestones.`;
  } else {
    // Yes is high / dominant
    outcomeType = "excellent";
    title = `${name} is Excellent & Developing Brilliantly!`;
    badge = "🌟 Child is Excellent";
    toneSummary = `Wonderful news! Out of 24 developmental questions, ${name} achieved "Yes" on ${yesCount} milestones. Their motor, speech, cognitive, and social milestones are progressing excellently for their age!`;
    reassurance = "Every child blooms uniquely. Continuing warm everyday interactions, positive playtime, and engaging conversations will keep their milestones flourishing.";
    recommendedAction = `Keep up the wonderful support at home! You are always welcome to connect with us anytime for friendly developmental celebrations.`;
  }

  return {
    totalScore,
    maxScore,
    percentage,
    outcomeType,
    yesCount,
    sometimesCount,
    noCount,
    title,
    badge,
    toneSummary,
    reassurance,
    recommendedAction,
    domainScores,
    strongestDomains,
    focusDomains
  };
}
