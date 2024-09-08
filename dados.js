let dados = [ // Base de dados. As partes titulo, descricao, requisite, benefit e house são elementos que fazem parte do corpo de definição do talento de pathfinder e suas regras.
    {
        titulo: "Spell Focus", //Nome
        requisite:"", // Pre-requisitos
        descricao: "Choose a school of magic. Any spells you cast of that school are more difficult to resist.", // Flavor Text
        benefit:"Add +1 to the Difficulty Class for all saving throws against spells from the school of magic you select. Special: You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new school of magic.", // Benefícios mecânicos e regras do sistema.
        link: 'https://www.d20pfsrd.com/feats/general-feats/spell-focus', // Link para a srd.
        house: "It inherited Greater Spell Focus and Spell Specialization and works as pre-requisite for everything that asks for them. Benefit: +1 DC to a chosen school and choose one spell within that school to gain +2 CL. Bonus increases to +2 DC and +4 CL at Character Level 8.", // Regras da casa, ou house rules e homebrews.
        tags: "general" // Palavras-chave não inclusas nos outros elementos para facilitar busca.
    },
    {
        titulo: "Power Attack (Combat)",
        requisite:"",
        descricao: "Increase the damage of your melee attacks at the expense of your accuracy.",
        benefit:"You can choose to take a -1 penalty on your attack roll to gain a +2 bonus to your damage roll. You increase the penalty to your attack roll and the bonus to your damage roll for every 4 of bab.  Special: You can use Power Attack with any weapon that you are proficient in.",
        link: 'https://www.d20pfsrd.com/feats/combat-feats/power-attack-combat',
        house: "Baseline for everyone. Feats that requires it, requires nothing instead.",
        tags: ""
      },
      {
        titulo: "Weapon Focus (Combat)",
        requisite:"",
        descricao: "Gain a bonus to attack rolls made with a specific weapon.",
        benefit:"You gain a +1 bonus on attack rolls made with all weapons of your chosen type (simple or martial). Special: You can take this feat multiple times. Its effects stack. Each time you take the feat, you can choose a new weapon type to gain a +1 bonus on attack rolls with.",
        link: 'https://www.d20pfsrd.com/feats/combat-feats/weapon-focus-combat',
        house:"Applies to an entire weapon group. Bonus is 1 + 1 per 6 character levels.",
        tags: ""
      },
      {
        titulo: "Martial Power (Combat)",
        requisite:"Prerequisite(s): Constitution 13, knowledge of at least one maneuver or stance.",
        descricao: "You are able to instinctively call upon reserves of untapped power within yourself to defend yourself.",
        benefit:"You can choose to take a -1 penalty on attack rolls and combat maneuver checks to gain 2 temporary hit points. This bonus is increased by half (50%) when you are using a shield of any kind. When your base attack bonus reaches +3 and every +2 thereafter, the penalty increases by -1 and the temporary hit point bonus increases by 2. You can only choose to use this feat when you declare that you are making an attack or a full-attack action with a melee weapon, or when you are initiating a maneuver. The penalty to attack rolls and temporary hit points gained from use of this feat last until the start of your next turn.",
        link: 'https://www.d20pfsrd.com/alternative-rule-systems/path-of-war/feats/martial-power-combat/',
        house:"Baseline for everyone, requires nothing. Feats that require it require nothing instead.",
        tags: ""
      },
      {
        titulo: "Combat Expertise (Combat)",
        requisite:"Prerequisite: Int 13.",
        descricao: "You can increase your defense at the expense of your accuracy.",
        benefit:"You can choose to take a –1 penalty on melee attack rolls and combat maneuver checks to gain a +1 dodge bonus to your Armor Class. When your base attack bonus reaches +4, and every +4 thereafter, the penalty increases by –1 and the dodge bonus increases by +1. You can only choose to use this feat when you declare that you are making an attack or a full-attack action with a melee weapon. The effects of this feat last until your next turn.",
        link: 'https://www.d20pfsrd.com/feats/combat-feats/combat-expertise-combat/',
        house:"Baseline for everyone, requires nothing. Feats that require it require nothing instead.",
        tags: ""
      },
      {
        titulo: "Deadly Aim (Combat)",
        requisite:"Prerequisites: Dex 13, base attack bonus +1.",
        descricao: "You can make exceptionally deadly ranged attacks by pinpointing a foe’s weak spot, at the expense of making the attack less likely to succeed.",
        benefit:"You can choose to take a –1 penalty on all ranged attack rolls to gain a +2 bonus on all ranged damage rolls. When your base attack bonus reaches +4, and every +4 thereafter, the penalty increases by –1 and the bonus to damage increases by +2. You must choose to use this feat before making an attack roll and its effects last until your next turn. The bonus damage does not apply to touch attacks or effects that do not deal hit point damage.",
        link: 'https://www.d20pfsrd.com/feats/combat-feats/deadly-aim-combat/',
        house:"Baseline for everyone, requires nothing. Feats that require it require nothing instead.",
        tags: ""
      },
      {
        titulo: "Piranha Strike (Combat)",
        requisite:"Prerequisites: Weapon Finesse, base attack bonus +1.",
        descricao: "You make a combination of quick strikes, sacrificing accuracy for multiple, minor wounds that prove exceptionally deadly.",
        benefit:"When wielding a light weapon, you can choose to take a -1 penalty on all melee attack rolls and combat maneuver checks to gain a +2 bonus on all melee damage rolls. This bonus to damage is halved (-50%) if you are making an attack with an off-hand weapon or secondary natural weapon. When your base attack bonus reaches +4, and for every 4 points thereafter, the penalty increases by -1 and the bonus on damage rolls increases by +2. You must choose to use this feat before the attack roll, and its effects last until your next turn. The bonus damage does not apply to touch attacks or effects that do not deal hit point damage. This feat cannot be used in conjunction with the Power Attack feat.",
        link: 'https://www.d20pfsrd.com/feats/combat-feats/piranha-strike-combat/',
        house:"Baseline for everyone, requires nothing. Feats that require it require nothing instead.",
        tags: ""
      },
      {
        titulo: "Improved Unarmed Strike (Combat)",
        requisite:"",
        descricao: "You are skilled at fighting while unarmed.",
        benefit:"You are considered to be armed even when unarmed—you do not provoke attacks of opportunity when you attack foes while unarmed. Your unarmed strikes can deal lethal or nonlethal damage, at your choice. Normal: Without this feat, you are considered unarmed when attacking with an unarmed strike, and you can deal only nonlethal damage with such an attack.",
        link: 'https://www.d20pfsrd.com/feats/combat-feats/improved-unarmed-strike-combat/',
        house:"Baseline for everyone with at least 1 BAB. Feats that require it require BAB 1+.",
        tags: ""
      },
      {
        titulo: "Weapon Finesse (Combat)",
        requisite:"",
        descricao: "You are trained in using your agility in melee combat, as opposed to brute strength.",
        benefit:"With a light weapon, elven curve blade, rapier, whip, or spiked chain made for a creature of your size category, you may use your Dexterity modifier instead of your Strength modifier on attack rolls. If you carry a shield, its armor check penalty applies to your attack rolls. Special: Natural weapons are considered light weapons.",
        link: 'https://www.d20pfsrd.com/feats/combat-feats/weapon-finesse-combat/',
        house:"Baseline, you choose. Feats that require it require nothing instead.",
        tags: ""
      },
      {
        titulo: "Two-Weapon Fighting (Combat)",
        requisite:"Prerequisite: Dex 15.",
        descricao: "You can fight with a weapon wielded in each of your hands. You can make one extra attack each round with the secondary weapon.",
        benefit:"Your penalties on attack rolls for fighting with two weapons are reduced. The penalty for your primary hand lessens by 2 and the one for your off hand lessens by 6. See Two-Weapon Fighting. Normal: If you wield a second weapon in your off hand, you can get one extra attack per round with that weapon. When fighting in this way you suffer a –6 penalty with your regular attack or attacks with your primary hand and a –10 penalty to the attack with your off hand. If your off-hand weapon is light, the penalties are reduced by 2 each. An unarmed strike is always considered light.",
        link: 'https://www.d20pfsrd.com/feats/combat-feats/two-weapon-fighting-combat/',
        house:" Baseline, it also fulfill the requisites if needed.",
        tags: ""
      },
      {
        titulo: "Advanced Two-Weapon Fighting (Combat)",
        requisite:"",
        descricao: "Homebrew feat. Substitute Improved and Greater Two-Weapon Fighting with one talent. Gives iterative attacks for every attack based on bab",
        benefit:"You can make one extra attack each round with the secondary weapon for each attack you make in a full-attack action based on bab with the same bonus each. All attacks receive a -4 penalty, or -2 if off-hand is a light weapon",
        link: '#',
        house:"",
        tags: ""
      {
        titulo: "Powerful Strikes (Combat) ",
        requisite:"",
        descricao: "Homebrew feat. Compacted Improved Sunder, Overrun and Bull Rush into one feat.",
        benefit:"Can perform Bull Rush, Overrun and Sunder maneuvers without provoking Attacks of Opportunity. Receive +2 bonus to CMB and CMD related to Bull Rush, Overrun and Sunder.",
        link: '#',
        house:"",
        tags: "house rules homebrew"
      },
      {
        titulo: "Clever Misdirections (Combat)",
        requisite:"",
        descricao: "Homebrew feat. Compacted Improved Dirty Trick, Feint and Steal into one feat.",
        benefit:"Can perform Dirty Trick and Steal combat maneuvers without provoking Attacks of Opportunity, and at a +2 bonus to CMB and CMD. Feints can be performed as a move action.",
        link: '#',
        house:"",
        tags: "house rules homebrew"
      },
      {
        titulo: "Unreleting Attacks (Combat)",
        requisite:"",
        descricao: "Homebrew feat. Compacted Improved Reposition, Drag and Grapple feats into one.",
        benefit:" Can perform Reposition, Drag and Grapple combat maneuvers without provoking Attacks of Opportunity, and at a +2 bonus to CMB and CMD.",
        link: '#',
        house:"",
        tags: "house rules homebrew"
      },
      {
        titulo: "Deft Maneuvers (Combat)",
        requisite:"",
        descricao: "Homebrew Feat. Compacted Improved Trip and Disarm into one feat.",
        benefit:"Can perform Disarm and Trip combat maneuvers without provoking Attacks of Opportunity, and at a +2 bonus to CMB and CMD.",
        link: '#',
        house:"",
        tags: "house rules homebrew"
      },
      {
        titulo: "Weapon Specialization (Combat)",
        requisite:"Prerequisites: Proficiency with selected weapon, Weapon Focus with selected weapon, fighter level 4th.",
        descricao: "You are skilled at dealing damage with one weapon. Choose one type of weapon (including unarmed strike or grapple) for which you have already selected the Weapon Focus feat. You deal extra damage when using this weapon.",
        benefit:"You gain a +2 bonus on all damage rolls you make using the selected weapon. Special: You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new type of weapon.",
        link: 'https://www.d20pfsrd.com/feats/combat-feats/weapon-specialization-combat/',
        house:"Applies to an entire weapon group. Bonus is 2 + 1 per 3 character levels.",
        tags: ""
      },
      {
        titulo: "Spell Penetration",
        requisite:"",
        descricao: "Your spells break through spell resistance more easily than most.",
        benefit:"You get a +2 bonus on caster level checks (1d20 + caster level) made to overcome a creature’s spell resistance.",
        link: 'https://www.d20pfsrd.com/feats/general-feats/spell-penetration',
        house:"It inherited Greater Spell Penetration and works as requisite in its place. +2 CL to overcome Spell Resistance, increases to +4 CL at Character Level 8.",
        tags: "magic"
      },
      {
        titulo: "Armor Focus (Combat)",
        requisite:"Prerequisite(s): Base attack bonus +1, proficiency with selected armor.",
        descricao: "Your familiarity with a specific type of armor increases the amount of protection you receive from it.",
        benefit:"Select one type of armor, such as chain shirt or splint mail. The AC bonus granted by the selected armor increases by 1. Special: You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new type of armor. The Armor Focus feat counts as the armor training class feature for the purpose of armor mastery feat prerequisites and determines what types of armor you can use with armor mastery feats.",
        link: 'https://www.d20pfsrd.com/feats/combat-feats/armor-focus-combat/',
        house:"Choose a category, Light, Medium or Heavy. The chosen armor category provides +1 AC, +1 to Maximum Dexterity allowed and its penalties to skill checks is reduced by 1.",
        tags: ""
      },
      {
        titulo: "Precise Shot (Combat)",
        requisite:"Prerequisite: Point-Blank Shot.",
        descricao: "You are adept at firing ranged attacks into melee.",
        benefit:"You can shoot or throw ranged weapons at an opponent engaged in melee without taking the standard –4 penalty on your attack roll. Note: Two characters are engaged in melee if they are enemies of each other and either threatens the other.",
        link: 'https://www.d20pfsrd.com/feats/combat-feats/precise-shot-combat/',
        house:"Precise Shot and Improved Precise Shot are merged. All effects come from purchasing Precise Shot.",
        tags: ""
      },
      {
        titulo: "Improved Precise Shot (Combat)",
        requisite:"Prerequisite: Point-Blank Shot.",
        descricao: "You are adept at firing ranged attacks into melee.",
        benefit:"You can shoot or throw ranged weapons at an opponent engaged in melee without taking the standard –4 penalty on your attack roll. Note: Two characters are engaged in melee if they are enemies of each other and either threatens the other.",
        link: 'https://www.d20pfsrd.com/feats/combat-feats/improved-precise-shot-combat/',
        house:"Precise Shot and Improved Precise Shot are merged. All effects come from purchasing Precise Shot.",
        tags: ""
      },
      {
        titulo: "Point-Blank Shot (Combat)",
        requisite:"",
        descricao: "You are especially accurate when making ranged attacks against close targets.",
        benefit:"You get a +1 bonus on attack and damage rolls with ranged weapons at ranges of up to 30 feet.",
        link: 'https://www.d20pfsrd.com/feats/combat-feats/point-blank-shot-combat/',
        house:"Gone. Nothing occupies this niche. Anything that required it requires nothing instead.",
        tags: ""
      },
      {
        titulo: "Improved Bull Rush (Combat)",
        requisite:"Prerequisite: Str 13, Power Attack, base attack bonus +1.",
        descricao: "",
        benefit:"You do not provoke an attack of opportunity when performing a bull rush combat maneuver. In addition, you receive a +2 bonus on checks made to bull rush a foe. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to bull rush you. Normal: You provoke an attack of opportunity when performing a bull rush combat maneuver.",
        link: 'https://www.d20pfsrd.com/feats/combat-feats/improved-bull-rush-combat/',
        house:"Compacted into Powerful Strikes.",
        tags: ""
      },
      {
        titulo: "Improved Overrun (Combat)",
        requisite:"Prerequisite: Str 13, Power Attack, base attack bonus +1.",
        descricao: "You are skilled at running down your foes.",
        benefit:"You do not provoke an attack of opportunity when performing an overrun combat maneuver. In addition, you receive a +2 bonus on checks made to overrun a foe. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to overrun you. Targets of your overrun attempt may not chose to avoid you. Normal: You provoke an attack of opportunity when performing an overrun combat maneuver.",
        link: 'https://www.d20pfsrd.com/feats/combat-feats/improved-overrun-combat/',
        house:"Compacted into Powerful Strikes.",
        tags: ""
      },
      {
        titulo: "Improved Sunder (Combat)",
        requisite:"Prerequisite: Str 13, Power Attack, base attack bonus +1.",
        descricao: "You are skilled at damaging your foes’ weapons and armor.",
        benefit:"You do not provoke an attack of opportunity when performing a sunder combat maneuver. In addition, you receive a +2 bonus on checks made to sunder an item. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to sunder your gear. Normal: You provoke an attack of opportunity when performing a sunder combat maneuver.",
        link: 'https://www.d20pfsrd.com/feats/combat-feats/improved-sunder-combat/',
        house:"Compacted into Powerful Strikes.",
        tags: ""
      }
];
