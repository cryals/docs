# Reducing Metagaming

| Designers | Implemented | GitHub Links |
|---|---|---|
| SlamBamActionman | :x: No | TBD |

## Overview

This proposal contains a list of design changes and features aiming to reduce the impact of metaknowledge in the game. While the proposal touches on several different issues the changes proposed affect each other and overlap, which is why they're all compiled here. The overarching theme is moving away from rule enforcement to mechanical enforcement, allowing crew players to possess general knowledge about antags but make it harder to apply it in a round without proper reasoning.

## Background

Right now there are several instances in the game where admins are expected to enforce rules related to metagaming. Some of these are related to the current round (e.g. using knowledge gained as a ghost after being revived), but there are also rules disallowing knowledge about the game in general. This mostly includes knowledge about antagonist items, behaviors and round events. This kind of "*metaknowledge*" rules are primarily restricted to Security and Command, and there are examples of metaknowledge that is allowed under the rules; knowing where maints loot spawns, secret Chemistry recipes and recognizing modifications to station layouts. 

There are two ways to reduce the impact of metaknowledge: allow it in the rules, or make it unviable to act upon it. Often this is done in combination; uplinks are an example of this. It's pretty much impossible to find out if a locked PDA is an uplink due to the high number of permutations in the lock. While it's technically possible for Security to confiscate every roundstart PDA and replace them with ones from the P-Tech vendor, it's simply not feasible in practice. This becomes more of an issue when a specific person has been suspected of being Syndicate (which is why we have stringent rules about PDA confiscating still) but it shows there are ways to design around metaknowledge.

The negative impact enforcement of metaknowledge is the following:
- Players need to self-assess what counts as abusing metaknowledge, possibly over-correcting as there's no ingame feedback.
- Disagreements about whether someone is abusing metaknowledge (e.g. a SecOff testing a pair of gloves for chameleon) can easily occur between players in a round, and is highly contextual.
- Admins need to put in time and resources enforcing these rules, which is always desirable to reduce.
- Players have to pretend they don't know about certain mechanics.

To find out where these problems lie, [I created a thread on the Discord](https://discord.com/channels/310555209753690112/1227226189358174209) to gather feedback from the playerbase where they have percieved metaknowledge abuse. This feedback is used as a basis for the changes and will be cited throughout the proposal.

The proposal will contain both mechanical design changes as well as rule changes. The rule changes are necessary as the goal of the PR is to reduce admin workload, and where it's not possible to eliminate them the goal will be to make them more clear and reduce grayzones. 

### Security & Resources

Other than explicit rules and Space Law, the main thing holding Security back is **time**, **materials**, **personnel** and **information**. Performing a search takes time, which holds up a SecOff that then becomes unable to respond or assist in other duties. Needing to utilize guns, stun batons and flashes means a SecOff must return to Sec to refill, and if materials are scarce this wait can be even longer. Similarly, health is a resource which will cause time and personnel loss from the SecOff needing to be treated.

Information helps mitigate these losses; knowing who to search, what materials to prepare and where to go. The more Security has of each resource the more effective it will be, and overabundance of one resource can make up for the lack of another. Some of these resources put strain on other departments however; materials may be necessary to craft or refill vital Security equipment, but those materials come from Cargo's work. Any rule change that relaxes the requirements on Security should instead impose a drain on its resources. For example, guessing uplink codes is usually too much of a timesink and takes up an officer's attention despite it being allowed by the rules, so it's rarely done.

## The Implant Problem

```admonish quote
Implant checking someone "just in case" after being arrested for some unrelated crime.
```

Implants are very useful to Syndicates since they allow direct access to certain functionality and are hidden by default. Security is unable to detect an implant unless it has been used, though it may be suspected through circumstantial evidence. The DNA Scrambler is a great example of this; if it's not witnessed being used, Security will first have to a) find the user, b) detect they are not on the manifest, c) make a determination whether a DNA implanter was used and/or find the used implanter. 

There is a big weakness to implants however. SecOffs can use an implanter to extract implants, and the mechanical limitation to this is relatively minor. Acquiring an implanter can be easily done via Medical, and while the doafter to use one is pretty long it's nothing compared to the brig times a suspected antag may have. This means they can be very easily taken away from the antag by any SecOff who wishes to do the procedure.

Strangely, implant searches are much more restrictive on MRP. To check, Security must have witnessed an implant being used, or any other explanation must be *extremely* unlikely. This requirement is held up to an almost absurd amount; you can't check for a Storage or Uplink implant if someone suddenly has a weapon in perma, because someone could have broken in, given them the gun and then left after repairing the hole. This means subtle implants or one-time use implants like the Storage Implant and DNA Scrambler are much more valuable on MRP since a suspicion is nowhere near enough to be allowed to implant check. 

### Proposed Solution

Security should not have any rule limitations on checking implants, but instead Security should be mechanically discouraged from performing random implant checks. I propose the following:
- Rule change: Security has knowledge of implants; that they exist, and what types the Syndicate have access to.
- Rule change: Security has no limitations on performing implant checks.
- Checks can only be performed with the new **Implant Extractor**, a device that can be printed in the Medfab.
- To extract, the Implant Extractor must be set to the specific type of implant to be extracted. A doafter is then performed.
   - If successful, the chosen implant gets extracted into the Implant Extractor similar to how an Implanter is done now.
   - If unsuccessful, no implant is extracted. The user that tried to use the Implant Extractor takes 45 Cellular damage, ignoring resistances, as the device backfires.
 
The main point is the damage taken by the Implant Extractor. Performing an implant check without sufficient suspicion and being wrong becomes a very high price to pay, encouraging Security to be sure of their search. Even a single failed search essentially requires the user to be sent to the medbay, and two puts them out of commission for a long time.

Note: The particulars of this suggestion may change as Newmed/Surgery gets implemented. The important part is that implant searching someone without being correct should punish Security by temporarily taking away a resource, in this case in the form of personnel. The exact nature of the damage and restriction on resources could change.

## The PDA / Uplink Problem

```admonish quote
Confiscating PDAs of anyone you suspect of being a traitor without proof.
```

Uplinks are in a kind of weird situation where it's one of the most powerful tools for a Traitor and in-universe a very well-hidden feature, but at the same time it's also one of the easiest metaknowledge items in the game. As soon as a player has been found using a traitor-exclusive item Security players have to pretend that the PDA isn't a high target to confiscate. The reason for this is because you generally want antags to be able to use all their TC during a round to make it interesting. As such, the PDA may only be confiscated for two reasons:
- Security finds an open uplink in the PDA.
- Security has previously found an open uplink in another PDA, and can thus pre-emptively confiscate any PDA they have reasonable suspicion of having an uplink.

Right now the rules are the main way of preventing overzealous Security confiscating PDAs. Traitors do have a gameplay option as well: The Uplink Implant. This implant does have the benefit of making PDA confiscating a non-issue, but the tradeoff is 2 less TC and an implanter that must be disposed of, and with the stringent rules on PDA confiscating it's unlikely to get any benefit from it. There's no reason to keep the uplink open after the implant is used, so you only get value if another uplink has been found. Additionally it suffers from the vulnerability of implant checks.

### Proposed Solution

The PDA is very easily the single point of failure with this problem, but it's also unique in its ringtone lock. Confiscating a PDA does come with some cost to Security in that they need to secure a replacement; worth it for a confirmed Syndie, but not viable for all arrests. If we were to remove the limitations on Security randomly confiscating PDAs there would need to be an equally effective method of eluding detection. It would also need to incur a cost for Security to confiscate. I propose the following:

- Rule change: Security has knowledge PDAs can contain Uplinks, and may confiscate them if they have a reason to believe it could contain one.
- Uplink Implanter cost is reduced to 1 TC, and changes proposed in "The Implant Problem" are also included.
- The Uplink Patch is a new device that can be bought from the Uplink for 1 TC.
  - The Uplink Patch can be attached to any object and turns it into an Uplink.
  - The Uplink can be locked and unlocked by saying one of the agent codewords while wearing/holding/carrying the object.
  - TC must be inserted into the object to purchase anything.

The Uplink Patch would turn any object into a possible Uplink, making the permutations for what to confiscate anything in the Syndie's inventory. Even if a SecOff would be overzealous and try to take everything, the uplink could be an implant as well. With the changes in the Implant Problem, this would require Security to have strong suspicion of where the uplink would be to actually catch it.

## The Thief Gloves Problem

```admonish quote
Checking black gloves without proper evidence leading to them
```
```admonish quote
Checking for Chameleon gear when there is no reason to suspect it feels kinda metagaming, yeah? Especially since you now have to put the items on to even check.
```

Thief gloves come in two varieties, each with their own problem. 

1. Normal Thief Gloves are indistuingishable from black gloves. The only way to know they have been used is if someone finds out an item on their person has been stolen, and even then Security are not allowed to know they must search for black gloves unless an uplink has been previously found. They also stand out for crew who don't normally wear black gloves, making overzealous SecOffs search and possibly even confiscate them.

2. Chameleon Thief Gloves mean to remedy this. However, as they leave holographic fibers on everything they touch it becomes very obvious whenever they have been used. It leads to a rather opaque and unintuitive game of trying to not wear the thief gloves except in the most critical of moments, making finding a spare pair of gloves in someone's bag highly suspicious. They're also trivial to check since it's just to put them on and check whether they allow Chameleon properties.

### Proposed Solution

- Thieving Gloves and Chameleon Thieving Gloves are merged into a single item: The Thief Glovebox.
  - When purchased/obtained, the user is given a box. Opening this box activates a UI similar to a Chameleon UI.
  - Once a glove design is chosen, the user is given a pair of thieving gloves with that design.
  - The gloves give off matching fibers. They are not Chameleon.
- Non-engineering insulated gloves/budget insulated gloves now come in 3 different colors with corresponding colored fibers. They are still called "Insulated Gloves"/"Budget Insulated Gloves". 
- Rule change: Security has knowledge of Thieving Gloves and may confiscate the gloves of anyone who has stolen or attempted to steal contraband.
- Rule change: An additional rule is added: Security may *not* test Thieving Gloves by putting them on and trying to steal an item off someone, as this would count as Security using antag items. *Note that this rule would not be necessary if the changes proposed in The Disguised Items Problem are implemented.*

This means that a thief is safe from having their gloves lost before committing a crime. Detectives can no longer use holofibers to confirm a Thief antag, but must instead rely on the fibers of the gloves around the crime scene. The addition of additional insuls colors means selecting yellow insulated gloves is no longer a safe option to blend in with all the other yellow gloves.

## The Thief Kit Problem

```admonish quote
Seeing someone having an omega soap and assuming they therefore have a storage and DNA scramble implant
```
```admonish quote
Seeing someone with a briefcase and concluding they are a thief
```
```admonish quote
Knowing what thieves have in each kit
```

This issue is quite apparent and probably one of the easier ones to catch, but that doesn't mean it's any less annoying for Security who have to pretend that the Thief they caught don't have certain items. This is mostly only relevant to some sets; finding out someone has a Chameleon jumpsuit makes it only natural to further investigate and find the other Chameleon clothing.

The kits that suffer the most from this issue are the following:
- Chemistry Set
  - Contains Omega Soap, Syringe, Ephedrine bottle. These could betray the Storage and DNA Scrambler Implants.
- Syndie Set
  - Contains Master At Arms hat and Interdyne Cigarettes. These could betray the Agent ID and Emag.
- Sleeper Set
  - Contains a Pyjama hat and Nitrous Oxide tank. These could betray the Hypopen. The jumpsuit isn't as big of an issue since it can be cut into cloth.
- Communicator Set
  - Contains a briefcase filled with a thief figurine, neck gater, tacticool jumpsuit and jensen coat. These could betray the Master Comms Key, CyberPen and Voicemask.

### Proposed Solution

Cull the unnecessary fluff items from the set and make them the same level of discoverability. If it's desirable to have the thief hide stuff, include that in the items being recieved; implants require the thief to hide the implanter for example. If the Communicator Set should require the thief to hide a fluff thief figurine for example, instead make the the Master Comms Key come in a box that needs to be hid. 

## The Disguised Items Problem

There are many items in the game that are explicitly designed to look like and sometimes even act like another object. The degree of how effective this is depends on the object. They come in the following categories (some job items not listed):

- Items that can't be found unless directly used
  - Conducting Gloves
  - Thieving Gloves
  - Hypodart
  - Decoy Nuclear Disk
  - Explosive Banana
  - Explosive Wet Floor Sign
 
- Items that can be found if worn
  - Voice Mask
  - Chameleon Kit
  - No-slip Shoes

- Items that can be found if held
  - Hypopen
  - Stimkit
  - Agent ID Card
  - Lobbying Bundle
  - Energy Dagger
  - Cane Sword

- Items that can be found if examined
  - Extra-Bright Lantern
  - Blue Boxing Gloves
  - Dehydrated Space Carp

There is a question to be made what the intended purpose of these disguises are. Something like the Extra-Bright Lantern can only survive a passing glance from crew, a cane sword may be found if an officer is searching thoroughly and a hypodart can't be determined to be a Syndicate object unless explicitly tested. The problem arises when Security is able to be too thorough with a search and find an item they aren't looking for, or when Security knows for certain an item is contraband but can't prove it.

There is also an issue where these disguised items are unknown to crew (until an uplink is found), while the other "obvious" antag items are not. So [crew can have full knowledge](https://forum.spacestation14.com/t/what-is-a-syndicate-item/5363) of emags, webvests, e-swords and northstars, but not about hypopens or thieving gloves. 

### Proposed Solution

This is probably the most comprehensive change and touches on things outside the stated problem above, in the interest of making a more streamlined system and help onboarding new players into contraband gameplay. My proposal is the following:

- Rule change: Crew have knowledge about stealth items.
- *Non-stealth* items can now be determined to be contraband upon being examined.
  - Improvised contraband (improvised weapons, shivs, makeshift cuffs etc.) have the following text added: "This item is minor contraband."
  - Items restricted to departments (insulated gloves, RCDs, scalpels, Security gear etc.) have the following text added: "This item is departmentally restricted."
  - Command items (HoS' secret orders, Captain's Sabre, Nuke Disk, CE's boots etc.) have the following text added: "This item is restricted to Command."
  - Syndicate items have the following text added: "This item is Syndicate contraband."
- Note that the change above does not change the crime definitions in Space Law.
- Most stealth items can now be locked to hide their functionality, making it act as a normal item. If the wearer/holder speaks a Traitor codeword, the functionality unlocks.
  - While locked, the contraband examine text is not shown. 
  - Thieves get a single codeword, not shared by other thieves or traitors.
  - Nukies get a set codeword "Syndicate".
  - Note that this is not applicable for all items. For example, the Extra-Bright Lantern can not be locked, allowing it to only pass inspection at a glance.
- Security has a new machine available roundstart, the **Contraband Scanner**.
 - The device acts like an airport x-ray scanner, able to find hidden compartments and technologies in otherwise mundane items. 
  - An item can be placed inside the scanner. After six minutes the item comes out; if the item is of Syndicate origin, it is marked as such when examined: "This item is disguised Syndicate contraband".
  - This mark can be cleaned off with soap.
- Rule change: Security can only confiscate non-contraband items that they can confirm was used in a crime. Security can not keep an item from being returned to a crewmate on suspicion of it being contraband. Normal rules on Captain outlawing a specific item still apply.
  - This is to ensure Security does not overextend and confiscate an unscanned stealth item.

These changes do introduce a new rule, however it is also one that is very easy to enforce and check. It also frees up crew to speak plainly about stealth items in the same manner crew are able to talk and discuss Emags. 

Additionally, this change helps new Sec players recognize contraband. Security still have discretion to not confiscate certain contraband such as insulated gloves and some contraband (e.g. drugs) can't be marked; this just assists in informing players and Security alike what counts.

## The Contraband Usage Problem

While not a metaknowledge issue and more a balancing question, this issue was raised in discussion around this PR and heavily ties into the proposed changes. 

Security and Command are restricted from using Syndicate equipment via admin ruling. This is due to the strength Syndicate items has and the use of them would give Security/Command too much of an advantage when engaging with other antags. There are exceptions to this rule: most notably is the use of Syndicate comms keys, but only if the use is to listen in Syndicate communication (e.g. you wouldn't be able to use the Syndicate channel to have a private "exclusive Sec channel"). There is also an exception made for when the use of a Syndicate item is a necessity for survival and no other options are available, though where that line is drawn is highly contextual. That means any Security/Command use of a Syndicate item should be scrutinized by an admin, which adds to the workload and may lead well-intentioned players to be punished for misjudging what constitutes valid use.

It's important to note that this limitation is only applied to Security and Command. Normal crew are allowed to use Syndicate items with no restrictions (self-antag rules still apply; having a C-20 does not mean you get to shoot your fellow crew with it). 

### Proposed Solution

To reduce admin burden and make this balance design mechanically enforced rather than via rules, I propose the following:

- Rule change: There is no rule limitation for Security/Command utilizing Syndicate equipment.
- If a character has a **Mindshield implant**, some Syndicate items no longer become usable or have decreased functionality. The specifics depend on the item:
  - Minor impact equipment like a Syndicate EVA suit or Jetpack could still be utilized by Mindshielded characters. These restriction-less items should have a crew equivalent or not provide any major benefit.
  - Restricted items should ideally be able to be turned off by mindshielded characters, but not turned on/utilized. Examples:
    - Emag: Unable to be used at all, all interactions providing a pop-up that the implant stops your character from using it.
    - C-20: Unable to be fired, though can still be reloaded/emptied of its mag. Trying to pull the trigger provides a pop-up that the implant stops your character from using it.
    - PDA Uplink: Can be opened and scrolled through, but all purchase buttons are grayed out. TC can still be removed/inserted.
    - Radio Jammer: Can be turned off but not turned on. Battery can be removed/replaced.
    - Stimpack / Combat Syringe: Can not be injected into or by a mindshielded character.
- Mindshield implants can not be removed from Security / Command crew (e.g. roundstart Mindshielded roles), but can be removed from normal crew/Syndicates who have been Mindshielded during the round. 
- There may be rules required that Security can not hand out Syndicate items to crew or have a crewmate use a Syndicate item on Security's command. This depends on whether abusing the items like this is feasible in practice.

Not only does this solution tie in to the existing Mindshield system, but also makes Mindshield implants relevant to be used on crew during non-Rev rounds. This does come with the added danger of mindshielded Syndicates being able to pass as Security / Command, but at the same time with the benefit of knowing anyone Mindshielded is limited in using Syndicate items.

## Other Problems that have PRs in the works

###  Roundtype problem
```admonish quote
Preparing for Nukies just because no antag activity has happened a while into the round.
```
```admonish quote
"Quiet shift today"
```
```admonish quote
"I found a cobra or some other syndicate tech on station/a syndicate has done something noticable. Main round antag is traitors."
```
```admonish quote
"It's been strangely quiet and nothing has really happened in the first 30 minutes. Probably nukies"
```
Can be solved by adding single Traitors to non-Traitor gamemodes: https://github.com/space-wizards/space-station-14/pull/27501

### Map loot problem
```admonish quote
Every instance of Gamer Loot in the walls
```
```admonish quote
Powergaming for maints loot
```
Can be solved by making map loot spawn randomly: https://github.com/space-wizards/space-station-14/pull/27082

### Overly suspicious players
```admonish quote
"I heard a flash somehwe near security, it must be revs! Cargo buy mindshields immediately"
```
```admonish quote
YOOOOOOO YA WANT A STAMP FOR SOMETING NOT THAT IMPORTANT?, YA GONNA USE CYBERSUN PEN FOR EDITING THE PAPER!!, KOS
```
Can be solved by having a non-antag role mimicing antag behavior: https://github.com/space-wizards/docs/pull/129

