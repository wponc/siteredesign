import WritingScene from "../scenes/WritingScene"
import { Canvas } from "@react-three/fiber"
import styles from "../styles/Writing.module.css"
import { useState, useEffect, useRef } from "react"

const entries = [
  {
    text: (
      <>
        <p>Sleepwalking through the days on some trumped up charge of killing time. In the summer, in the absence of things, the days were hot and long and I'd come home from work pretty spent. The gym was treating me well, progress was progress undeniable, but I couldn’t deny a void in so much of what I lived and felt. In lack of strong vices or even the money to spend on such things, I’d daydream while the sun was still out, riding bikes and walking trails aimlessly until dark, convinced I'd find an answer between the cedars and sycamores for whatever I was even looking for.  Nights I’d lie tiger-striped by the moonlight running through my window, too much to consider to sleep. Rain here and there to break up the monotony, summer games here and there to mark the passage of time.
        <br /><br /> Days passed, weeks passed, looking much the same. All I remember is I picked my head up after looking down for a long time, the longest time, <i>and I saw you.</i>
        </p>
      </>
    ),
    image: 'images/19.jpg',
  },
  {
    text: (
      <>
        <p>Be it their color, their shine, or the arrangement of it all I couldn’t tell you,<br />but there was something in her hair and her eyes that made my heart stop in an instant. Honestly. <br />I’d trudge home in the pouring rain after class, no hood, water dripping onto my face, unsure whether any of it was real or if I’d simply imagined it in a moment of madness.
        </p>
      </>
    ),
    image: 'images/27.jpg',
  },
  {
    text: (
      <>
        <p>I had a jacket that I wore often, a slim bomber of acid-washed navy blue. I’d gotten it in college<span>&#8212;</span>rather severe for my tastes at the time but a cure for colder days<span>&#8212;</span>and I’d grown to rely on it, carrying me with a moderately professional sense of fashion through many years. When I felt heavy at heart I’d walk around the office park with my hands tucked in its pockets, if for no other reason than to call back earlier times when I’d done much the same, and to string together some commonality between so many days without register. I’d thought of my life as merely a series of walks during which I’d exhume from the tombs of repressed memory my mistakes long past, and my affections far misplaced.
        </p>
      </>
    ),
    image: 'images/58.jpg',
  },
  {
    text: (
      <>
        <p>I could feel the heat rising inside me, a wave swelling over every ounce of better judgement I had to just stay silent. I had to ask, “do we know each other?” 
        <br /><br /><i>No, </i>she said, <i>I just see you everywhere.
        <br /><br /></i>And there it was, our first words to each other pushed out into existence before over-calculation could prevent what was yet to be.
        </p>
      </>
    ),
    image: 'images/49.JPG',
  },
  {
    text: (
      <>
        <p>And I guess there were versions of me that lived on in others I wasn’t so proud of: those I wish I could change. But if nothing else, past few years have taught me that for better or worse I can’t pick and choose, I’m either all here or I’m all gone. 
        </p>
      </>
    ),
    image: 'images/51.JPG',
  },
  {
    text: (
      <>
        <p>DeLillo said that longing on a large scale makes history. I would qualify that further, in that a man needs to long for <span>some<i>thing</i></span>, that much is good for technology. But, a man needs to long for <span>some<i>one</i></span>, that much is good for art. Guess that’s the struggle, balancing both without tearing down institutions or getting anyone hurt.
        </p>
      </>
    ),
    image: 'images/IMG_7437.PNG',
  },
  {
    text: (
      <>
        <p>She let me borrow a book, and I couldn’t believe it, but it smelled like her. Funnily enough, up until that point I hadn’t attributed a scent to her, not until the moment I actually held it in my hands, and the physical sensation of leafing through those pages recalled the times we spent in close proximity (in the car, eating lunch together), with each page offering an exhalation of her until I‘d mainlined an intoxicating dose. This woman, this witch, had cast her spell on me, black magic of an archaic origin. By the point in which the scent had faded completely, by god, I was hooked. Though some small part of me felt I had the right to be offended in some way at fighting dirty, I was far too interested to feel like I’d been made a fool. Love and war, I guess; all was fair.
        </p>
      </>
    ),
    image: 'images/54.JPG',
  },
  {
    text: (
      <>
        <p>I spent much of grad school—at least, that of it which I care to recall—in dual courtship of work and survey. I was content to burn the candle at both ends with whatever occupied my focus at the time: grant submissions, class assignments, or research progression. Convinced that in doing so, I’d earn the coveted (yet, ubiquitous within my cohort of exceptional individuals) moniker of a “hard worker”. As if foregoing the socially accepted extracurriculars of an able-bodied man in his early 20s was somehow honorable, and would qualify me (to quote Murnane) “as a man who saw further than others”, one who could sacrifice immediate pleasures, and would go on to achieve <span>some<i>thing</i></span> <span>some<i>day.</i></span> What a load of garbage.
        <br /><br />Conversely, I spent considerable time in trance-like observation of the world surrounding, neither working nor asleep, but in the vast stretches of mental processing which filled the expanse between the two extremes. I idly roamed the dense forest of books in the library's subfloor archives; I watched the trees move beyond the window from my desk; I tracked the diminishing warmth of a fading autumn from a bench behind my duplex. Even activities of supposed “productivity” like going to the local gym were in reality a means to an end to kill time—and people watch, can’t deny my love for that.
        <br /><br />I wavered between thinking that 1) I had squandered prime years of early adulthood in the throes of habits fit for a retiree, and that 2) time spent doing what I chose, however banal, was time not wasted, as the freedom to choose how I spent my time was a privilege of its own regard, one not to be taken lightly. It amazed me, truly, <i>just how much time</i> I could burn through when of a certain disposition. Lately, old habits have crept up again, and I’ve been a subscriber of a little more survey and a little less work.
        </p>  
      </>
    ),
    image: 'images/48.JPG',
  },
  {
    text: (
      <>
        <p>We moved toward a collision of hypermassive desire; temperature and timing conspired in pure electrochemico reactivity.
        </p>
      </>
    ),
    image: 'images/41.jpg',
  },
  {
    text: (
      <>
        <p>Where I’d met her wasn’t where she’d met me. The paths of our lives, routes respective, had paralleled and converged in passing without any registration to memory. In a way, our introduction was a reunion, the reassembly of past parts collective, and with that an air of familiarity and the comfort of a foundation previously laid. So, we skipped the eternally uncomfortable interrogation of each other's histories, talking, laughing, converging over things most trivial. <br /><br />I was smitten, head-tumbling-heels beyond any possibility of landing upright. Her gaze carried a charge, plug-powered and prickling, and sometimes I swear she held it just to mess with me, knowing my sorry ass would have nothing to say.
        {/* She’d spent years the object of adoration for an unfamiliar crowd, a marvel stonecast and coveted, while I the architect, appraiser, and occupant of a fortress for suffocating self-sabotage. Guess that’s how we came to be, entrants from opposing sides in the war on ego.  */}
     
        </p>
      </>
    ),
    image: 'images/45.jpg',
  },
  {
    text: (
      <>
        <p>I visited old friends in a city I once called home, and I couldn’t quite shake the feeling I didn’t belong. The people still had the same ring to their laughter, the streetlights still painted the hidden corners in their orange all the same, yet there was an unmistakable air of sadness behind it all. Things were reduced to mere reminiscences of a time long abandoned, and people nothing more than the broken fragments of a collective that started so tightly knit, but ended so hopelessly scattered.
        </p>
      </>
    ),
    image: 'images/57.jpg',
  },
  {
    text: (
      <>
        <p>The glasslike mudbank, shimmered bluebeige gradients above and below, and the slowswayed cordgrass were, at their edges, so incredibly you: smooth, soft, and shine; a miracle, I couldn’t look away, words forgotten, heart electrified. And I remember laying on that shoreline, fast asleep, your head held safe against my chest. Not realizing that in the years to follow, I’d never love another nearly as much as I loved you. Our moments together preserved in heavy sunshine, the closest I’d ever come to content; your love, the only thing I’d ever hold of value.
        </p>
      </>
    ),
    image: 'images/IMG_7436.PNG',
  },
  {
    text: (
      <>
        <p>She wanted approval and I wanted acceptance, neither of which was ours to give. <br /><br />Friday. The city burned in a grayellow haze, not a cloud visible in the afternoon July. The summer had skipped by in a flash eager to get where it needed to go, and nights I’d lie awake thinking about moments I couldn’t rearrange and make right after all this time. Ultimately we came to an end just as too many other woulda-coulda-shoulda-beens from my damned life. A crying shame I couldn’t give you something more, that there was an uneasiness in my heart I couldn’t quell no matter the miles I walked nor hours I stared at the waters. I guess I operated with the knowledge that our days as more-than-just-friends were numbered, and knew in the lining of my heart that it wasn’t built to last. That, in a matter of moments, what we shared would be smoldered down to nothing more than gossip, hearsay, campfire talk, and who was I to ask for any sort of honor in our band of thieves. She’d go her way, I mine, and we’d never hold what we once grasped.
        </p>
      </>
    ),
    image: 'images/29.jpg',
  },
  {
    text: (
      <>
        <p>For years afterward I’d seen her everywhere, torturously haunted by any flash of dark hair. Every other girl was a derivative of her, the haunting scoria of her memory that hadn’t yet burned off, with darker hair, greener eyes, and even less distinct features. A shade of a shade of a shade, collapsing toward some faceless abstraction, with the only distinguishible features being eyes of pure green shadowed by a ribbon of jet-black hair. No matter the effort all roads lead back to her image, and the harder I fought against the pull of her memory, the larger, wider, and less defined it grew. <br /><br /> Miserable, I washed the days down with a flavorless cocktail of work, chores, and the usual vices in their predictable glory all the same, warping my perception of past, present, and future, watching time pass fast and slow, avalanche and hourglass, disoriented all the more by the temperamental shift of the seasons. Always the same fight. <br /><br />So when fall came I moved to the far side of town and I had no friends. Nights I would drink and walk and think about all of it. About her. About me. About us. Everything. Every bit and piece, shape and shine, edge and outline of her that I'd committed to memory only to later discard. Maybe not by intention, but discard nonetheless, some natural defense mechanism against ever feeling incomplete. <br /><br />In fairness to her, there was no way to truthfully honor the connection we shared; a tangled mess of feeling & frustration distorted through the jagged shards of a time misremembered. Moments, memories, broken bits and pieces. Pushing, pulling, fading, must be real, must be true, must be love. Gone.
        </p>
      </>
    ),
    image: 'images/22.jpg',
  },
  {
    text: (
      <>
        <p>God I wanted you so much. Really, truly, it’s all I can do to trudge from here to there and distract my heart with fleeting fulfillment, all in imitation, never in replacement, of you. I used to just ride the bus around town, jumping from line to line, anything to get further away from my apartment. Because in my apartment was my phone, and if I was home all I’d ever think about was picking up, calling you.<br /><br /> So I guess the past few years I can’t say I haven’t felt the distance. Distance man, always distance. Always falling in love from afar, always moving the borders around. Justifying the transience of a come-and-go kind of lover with whatever explanation was convenient at the time, finding a way to always hold something in reserve. <br /><br />Though we were two halves fractured from the same block, our irregularities and imperfections mirrored only in each other,<br />she sold love to the highest bidder,<br /> <i>and I guess I’d just been coming up short.</i>
        </p>
      </>
    ),
    image: 'images/2.jpg',
  },
  {
    text: (
      <>
        <p>Trust me, I still remember all of it, down to the finest detail: the smell of her hair fresh-washed; the silhouette of her face opposite mine; the way she laughed eyes-closed and carefree. It was all right there at the front of my mind all day, a reminder of days unmuddied by doubt and fear. Moments when I felt like part of a larger whole, connected to another at the heart, god how much do I miss that. Though it crumbled despite my best intentions, realistically I didn't see any other way. Love could exist and grow only in a world without borders, and any effort I made to wrangle it into some structured understanding was misled. From somewhere inside my get-it-all-right tendencies was the need to make it all align and fit properly, with defined edges and nothing overlapping. <br /><br />Like I said, I still remember: her dorky shoes, the ones I made fun of; her eyebrows strong and razor sharp; the pierce of her gaze cutting right to the bone; her sense of humor and the way it melted into mine; the way I felt inside whenever I was around her, no matter how briefly.
        </p>
      </>
    ),
    image: 'images/37.jpg',
  },
  {
    text: (
      <>
        <p>Funny cause I couldn't quite place where I was when I first met her. It must've been summer. Not a whole lot to do before bed those days, read and listen to some music, maybe write a bit of what was on my mind.  Things were quiet but in a good way, enough excitement to keep me occupied and enough downtime to really soak in my surroundings: the trees were an intoxicating green, the air was cool at night, and the sunsets never failed to impress, not once. I'd wake up early, earlier than I'd ever had  consistently and get my day off to a good start. Needless to say the weeks flew by. A turbulent time, blurry and colorful and fuzzy around the edges. I enjoyed much of it, and knew immediately I'd grow to miss it in the future. Not fair how life does that to you. <br />But where was I? Hard to tell, hard to put a time and a place on a moment that had been with me all my life, that I'd lived a thousand iterations of in every interminable existence. That I'd dreamt, imagined, and reconsidered so many times, twirling it between my fingers, that when it finally happened I couldn't fathom it to be real. But it had to be. Got to be. I know because I woke up that day without that pit in my stomach, you know the one. I must've been at a friend's house for a dip in the pool, or I think I went out for a run on a cool day by the river, or I woke up under shade on the beach and there she was. Can't say. <br /><br />Maybe I was on a walk after dark, or wandering the forest trails I could find, or doing something, anything, a million things of no consequence all wrapped up in my own misinterpretations of it all before she ever came around. <br /><br />
        {["Maybe she was my opposite when I sat down at the library.", "Maybe it was a double date,", "or a save the date,", "or a wedding when we both showed up stag.", "Actually I think she was a mutual friend,",  "or a friend-of-a-friend,", "or someone that I knew through my brother.", "Maybe I'd seen her out and about,", "and somehow had the nerve to go up and talk to her.", "Or did she strike up a conversation with me?", "Can't say.", "Maybe she rode the same bus line as me.",].map((chunk, i) => {
        const size = Math.max(1 - i * 0.075, 0.01); // never smaller than 0.15em
        const opacity = Math.max(1 - i * 0.1, 0.01);

        return (
          <span
            key={i}
            style={{
              fontSize: `${size}em`,
              opacity,
              display: "inline-block",
              marginRight: "0.25em"
            }}
          >
            {chunk}
          </span>
        );
      })}
    </p>
      </>
    ),
    image: 'images/34.jpg',
  },
  {
    text: (
      <>
        <p>There were days not far in my rearview that I romanticized. Those at our old apartment, and the walks we’d take when there was nothing to do, and the laughs we’d share over home cooked meals, and the way the sun filtered through the blinds, just so. Enough time had elapsed to where I could assess the composition of those days with an honest system of scales: I was so happy, completely preoccupied with our trio of fools, no regard for anything beyond my love for them, their commitment to each other, and their value to me. Those days were already shuttered into long term memory, their aftertaste quickly replaced by more recent regrets all the same too soon. I wish it didn’t have to be that way, I wish that I could burn through the mistrials of the moment while holding warmer scenes at the precipice  of emotion.
        <br /><br />That’s honestly the only world I can ascribe to it: <i>preoccupied.</i> We were so blissfully incubated by the atmosphere we’d cordoned in a sub-level apartment at the end of a private drive. There were monsters out there, why would we ever leave the confines of our cocoon.
        <br /><br /> And I guess it's been hard to come to grips with the fact that, one day, that will be someone else's house. And I'll drive by and see in the windows every second of every life we lived in there replaying all at once, too much going on to possibly describe it to you. 
        </p>
      </>
    ),
    image: 'images/46.jpg',
  },
  {
    text: (
      <>
        <p>“Science needed to make order of all the chaos, wrenching and squeezing life’s inexplicable injustices into well labeled boxes, and at misalignments break the pieces down further and invent smaller boxes.
        <br />Philosophy abandoned that need, sweeping away life’s ambiguities under layers of abstractions broad enough to always prove true, and at contradiction redefine what always and true even implied.” I guess lately I’ve been a scientist, can’t quiet the need to explain it all no matter how futile the effort, and the boxes I'm building are too small to even distinguish from nothing. Yea well, show a modern man magic… 
        <br /><br />“Magic”. He said that and it It brought me back to a meeting we had, you know the one. I don’t know what it was that night, maybe the coffee we were all amped on, or the residual electromagnetism in the air from the storms that afternoon, but we truly left all our cards on the table for no fear of rejection. And how, soon after, we each saw each other around town when we needed it the most. Couldn’t be chance, must’ve been predetermined. Something about being in recovery made coincidence unbelievable. You guys were there for me when I had nowhere to go, I’ll owe you forever. It reminded me of letting go and losing hope. Days when I felt nothing inside and I thank god things are better now. Not easier, not by any measure of the word, but better. It reminded me of rain on the mountains and the feel of sun on the back of my neck, warming the goosebumps off my skin. It reminded me of seeing my brother’s smile and growing closer with my sister every time we’re together. I’m a firm believer that true love was the closest humans could ever come to performing magic, because more so than anything else his words reminded me of the pure fucking electricity I felt in my heart every time I saw you, jolting me out of whatever sleepingwalking monotony I'd considered my life. Within a turn of second my misery was overwhelmed with joy. White blood ambushed poisonous despair, and I felt a rush of endorphine ecstasy simply by recounting all that led me to you. The trials, tribulations, switchbacks and landslides. Every stone, stumble and stalemate, years of war, days without register.
        </p>
      </>
    ),
    image: 'images/.jpg',
  },
  {
    text: (
      <>
        <p>The current flickered, a shock spiking amplitude and chilling the skin of my spine. She was here. Got to be. I knew but I just couldn’t look, I wanted to save my heart the exhaustion for a change.
        </p>
      </>
    ),
    image: 'images/.jpg',
  },
  {
    text: (
      <>
        <p>Days followed. Within worlds of wonder we familiarized with work of another, following tracks tread to the ring of some faraway call. We were always in orbit, subject to the gravity of our opposite, pulled in despite any knowledge of our impending collision. Weeksmonthsyears of mimicry and madness, where familiar faces and minute idiosyncrasies were thornful callbacks to past parts and pieces, now disassembled, strewn about everfading memory, begging for repurpose.
        <br /><br />And one day, <i>years later,</i> she moves into view at your lunch spot.
        <br />Gaze met, pause, smile.
        <br />And it's right where you left it.
        </p>
      </>
    ),
    image: 'images/31.jpg',
  },
  {
    text: (
      <>
        <p><i>This isn’t goodbye, so meet me at the end of it all, when you’re tired, lost, bent and broken out of shape. When the trees don’t sway like they used to, and you’re numb from seasons worth of days waking up wishing you hadn’t. When "is this it?" is replaced by "this is all it’ll ever be", and you don’t <s>wonder</s> <s>wander</s> wonder anymore. Meet me wherever you find yourself in the pits, however frayed and fragmented, whenever necessary.</i>
        <br /><br />Why? Why would you ever?
        <br /><br /><i>You made a promise to me long ago, a commitment of magnitude I could never comprehend in the moment. Years of failure and fuckups could only point me to where I saw the love underlying it all. When I was lost you were my lifeline, when I was stranded you were my tether, pulling me back to shore.</i>
        <br /><br />You don’t know the first thing about me, and there’s an infinite amount you can never know, that’d only disappoint you if I ever had the heart to be honest with you.
        <br /><br /><i>Maybe. Probably. Doesn’t matter. Despite any and all of that, I’m still your friend. Because for years I was a dead man walking, a cadaver clad grave clothes marching toward his inevitable expiration, nothing to show for all the energy wasted pretending to be alive. GOD GAVE YOU TO ME. Wrenching foundation from my rubble, song in silence, hope in an atmosphere inhospitable. And if there was ever way or word that could honor your hold on my heart, believe me I’d have run that race a million times over, and I die just to think you wouldn’t see yourself how I do</i>.
        <br /><br />For years I was swimming upcurrent, my heart fighting tooth and nail just only to get his ass kicked defending the simple truth: that I’ve never felt for anyone, the way I feel about you.
        <br /><br /><i>Promise me. Fucking promise you won’t give up. Even when you’ve nothing left to give; you can’t imagine my wish for you to find peace one day. That’s the only way the story doesn’t end as a tragedy.</i>
        <br /><br />Before I go please know, that every second and every minute I ever spent with you was the greatest honor of my entire life. I love you infinitely.
        </p>
      </>
    ),
    image: 'images/40.jpg',
  },
  {
    text: (
      <>
        <p>I remember I used to walk with my eyes closed, trying to memorize the sun on my neck and the windshake of the trees, all at once feeling the incredible roar of the world beneath my feet shuffling and rotating between every arrangement I’d trod throughout past lives. <br /><br /> I’m going to miss you. A lot. I’ll see you again my friend.
        </p>
      </>
      ),
    image: 'images/water2.jpg'
  },
]

function Scraps() {
  const [selected, setSelected] = useState(0);
  const textRef = useRef<HTMLDivElement | null>(null);

  // when switching entries, reset any internal scroll and scroll the page
  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // reset internal scroll (if the text container ever becomes scrollable)
    el.scrollTop = 0;

    // scroll the window so the top of the entry is visible
    const rect = el.getBoundingClientRect();
    const top = rect.top + window.scrollY - 16; // small offset
    window.scrollTo({ top, behavior: "smooth" });
  }, [selected]);

  // dynamically assigning id to the entries
  // const entryIndex = 1;
  for(let entryIndex = 0; entryIndex <= entries.length - 1; entryIndex ++){
    const entryId = entryIndex + 1
    entries[entryIndex].id = entryId;
    console.log('Entry: ', entries[entryIndex].text, 'has been assigned index: ', entryId)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        {entries.map((entry, i) => {
          const offset = i - selected;
          return (
            <div
              key={entry.id}
              className={styles.card}
              style={{
                transform: `
                  translateX(${offset * 20}vw)
                  translateZ(${Math.abs(offset) * -20}vw)
                  rotateY(${offset * -15}deg)
                `,
                filter: offset === 0 ? "none" : "grayscale(1) blur(8px)",
                zIndex: 100 - Math.abs(offset),
              }}
              onClick={() => setSelected(i)}
            >
              <img src={entry.image} />
            </div>
          );
        })}
      </div>

      <div ref={textRef} className={styles.text}>
        {entries[selected].text}
      </div>
    </div>
  );
}

export default function Writing() {
  return (
    <>
    <Canvas
        style={{ width: "100vw", height: "100vh" }}
        camera={{ position: [0, 3, 1]}}
      >
      <WritingScene />

    </Canvas>
    <section className={styles.writingBlurb}>
      <h1>Writing is my first love, full stop. One day, years ago, she sank her teeth in me.<br/>And for all the other vices I could waste a lifetime in courtship of,<br/><i>somehow, I just knew that I would find none more seductive.</i><br/><br/><br/>Take a look below at some things I've written: mini book reviews, essays, bits, pieces.</h1>
    </section>

    <section className={styles.books}>
      <h1>Book Reviews</h1>


      <div className={styles.book} id='passenger'>
        <h2>The Passenger - Cormac McCarthy</h2>
      <p>What you have here is McCarthy at the end of his career, at the end of his life, he is swinging all the way for the fences. He is asking the big wuestions, questiond like: why are we all here?; who do we become when we lose the only thing that matters to us?; and, what do we leave behind from this life, if anything at all?</p>
      </div>


      <div className={styles.book} id='swannsway'>
        <h2>In Search of Lost Time Volume I: Swann's Way - Marcel Proust</h2>
        <p>Incredible. A glimmering, silky, heart-tugging marvel.<br/><br/>
        Proust constructs his sentences so comprehensively that he considers every angle of a given thought. His ability to transport the reader into the smallest details at the periphery of his own memories is unmatched. The innocence, the love, the purity of his early days in Combray truly bring a smile to one's face, a reminder of the simplicity of childhood; the joy to be found in reliving those experiences. His gratitude for walks struck a particular chord in me: <i>When I attempt to reckon up all that I owe to the Méséglise way…</i><br/>Reading this book, I’m reminded that I’m a lucky man, a rich man, for having the brilliant company of <u>just so many</u> walks throughout my life.<br/><br/>
        Swann's love for and eventual loss of Odette is built in such an  impeccably gradual manner by Proust, bringing the reader on the full parabola of love's emotions through coexistence, interest, infatuation, jealousy, and eventually, contempt. I'd imagine Swann's inner turmoil to be all-too-familiar to every reader some point in their lives, "satisfying a sensual curiosity of discovering those who live for love alone”. <br/><br/>
        I guess in some ways I was drawn to this begin series because  (and not to be too lofty here) I’d been searching for lost time of my own, dwelling in the past, convinced that I could somehow relive the glory of days long ago if I reminisced on them hard enough. And having taken only the first step on the path through Proust's masterpiece, I’m amazed at how timeless some the lessons are regarding memory, loss, chance, and all of life's other ephemera that are so hard to articulate. At risk of getting ahead of myself, I can already validate the claims that Proust is one of the most talented writers in history, and I look forward to progressing through the series.
        </p>
      </div>

      <div className={styles.book} id='recognitions'>
        <h2>The Recogitions - William Gaddis</h2>
        <p>Make no mistake, Gaddis establishes himself as a titan of american literature, with some sentences constructed so explosively that you can't help but read them thrice over to appreciate their severity. <br/><br/>
        His influence on several later, more recognized (no pun intended) authors like Cormac McCarthy and Don DeLillo is abundantly clear. It is stunning just how much Gaddis packs into each page<span>&#8212;</span>even despite the tome’s 956-page length<span>&#8212;</span>made all the more evident by Steven Moore's priceless guide. For a reader like myself with little exposure to painting, world religions, and philosophy, the work contained some poignant mediations on the broader purposes of art. And despite the risk of pretention with tackling these subjects, the work contains a schoolyard profanity and ear for dialogue that is laugh-out-loud funny, surprisingly so for a book over 70 years old. One of my favorite aspects (as noted by Chris Via) is how it implicates the reader in its own ruse. In that, Gaddis plants ideas in the middle of conversations (a spot of moonlight on a sleeve, a crude joke, a raised eyebrow, etc.), and revisits them hundreds of pages later, sometimes with different characters, forcing <i>our own recognitions</i> within the work.  <br/><br/>
        With all that said, it's not necessaruly a book I'd recommend to others, save for the hardcore reader. I found little to latch on to in the events of the story or the motivations of the characters, which could be a sign of the times or a just shortcoming of my own imagination. Often, I preferred to focus on Gaddis's style itself; content to admire his word choice and form.<br/><br/>
        Love it or hate it, I can't deny Gaddis's talent. This is the type of book that demands a rereading many, many years down the line, when you've finally caught your breath from the first pass up the mountain.</p>
      </div>

      <div className={styles.book}id='lonesomedove'>
        <h2>Lonesome Dove - Larry McMurtry</h2>
        <p>A weighted, highly memorable intertwining tale of the somewhat unbelievable way of life that was once typical for much of America. A sobering tale of responsibility, masculinity, and friendship. There are few lengths we won't travel to protect those that we love, or, in Call's case, those whom we feel indebted to. <br/><br/>
        McMurtry's has an understated tone that creates characters succinctly, without making them feel one-dimensional, but rather as if you’ve known them for many years, and you’ve become accustomed to their characteristic charm. <br/><br/>
        The book <i>just ends,</i> and you're left with a paperweight on your chest symbolic of the hardship characteristic to the times. Times where, to my understanding, men of a certain persuasion were just left in the dirt, with a stick to mark their place of final rest. 
        </p>
      </div>

      <div className={styles.book} id='paleking'>
        <h2>The Pale King - David Foster Wallace</h2>
        <p>Wallace bursts out the starting gate in this one. The opening section grabs the reader immediately with its sensory arrangment of the landscape's components, beckoning them, <i>Read these.</i> I am of the belief that it is intended to be unfinished, and I’d go so far as to say that work like this is enhanced by<span>&#8212;</span>and could only exist due to<span>&#8212;</span>the fact that it is unfinished.<br/><br/>
        Wallace's characters are people you can imagine, those you've seen and met and interacted with in the office, and wondered what their parents believed in, where they get their hair cut, or what quirks did they had as a kid which made them different from others.<br/><br/>
        It is, pound-for-pound, the funniest book I've read, with an ability to generate laughter through dialogue, through unbelievable circumstance, through "soul-shearing" mundanity, through metatextual cheekiness, that is suprisingly consistent throughout the numerous, variable sections. An excellent primer for Wallace's magnum opus, Infinite Jest.</p>
      </div>

      <div className={styles.book} id='plains'>
        <h2>The Plains</h2>
        <p>A heady, intoxicating blur of geography, landscapes, identity, and consciousness. Murnane's prose loads in memory, and remains lodged there until a golden afternoon glints off of a peripheral surface, <i>just so.</i><br/><br/>
        Similar to Gaddis’s trick, Murnane forces the reader to impart their own meaning onto the plains of their life. This book should be required reading for any introductory collegiate course in geography and anthropology. “There must have been many a man who knew…”</p>
        <br />

      </div>
    </section>

    <section id='essays'>
      <h1>Essays</h1>
      
        <div className={styles.essay} id='straits'>
          <h2>Straits</h2>
          <p>YOU LEFT, and for some time after I couldn’t fathom it to be real. Our memories felt so strangely fabricated: the literature of a forgotten empire with no academics to confirm their validity. That picture of us, sunburnt and smiling after my soccer game, was captured in a restaurant now closed down with a team long since disbanded. It seemed as if any memory of us together was working hard to erase itself, vanishing from self-immolation. I wanted nothing more than to just ask random passersby “did you know him?” These memories couldn’t belong to me alone. 
          <br/><br/>
          The neighbors sobbed when we cleaned out your house; the days flowed downslope. Time meandered on its own accord, and I burned through the waking hours as quickly as I could. Most of those days I stayed late at the office, hypnotized by the sunset’s shimmer on the glass buildings across the pond, watching the trees move beyond the window at the end of the hall. I was lost trying to navigate a world beyond you: no longer the one we shared, but a new world overlaid on this one with undefined projection, invalid geometry, flat shading.
          <br/><br/>
          For weeks I ran exhaustive routes around your memory, replaying the music you showed me, music from your time, Oingo Boingo and the like. The music I shared with you–well I guess you weren’t such a fan of. I remembered the pranks you played, always embarrassing me for my own benefit. A hip-check into a row of bushes was an ever-present threat, and if our waitress at dinner was a pretty girl, you’d tell her I loved her just to torture me. Months passed where I saw you in everyone else. Minute idiosyncrasies were thornful callbacks to past parts and pieces, now disassembled, strewn about everfading memory, begging for repurpose.
          <br/><br/>
          For me, one of our last conversations is forever cast in amber<span>&#8212;</span>a moment we finally saw each other in honest regard. I’d called you with cinder blocks on my heart asking of the crossroads in your younger years, finally willing to admit the fear I’d held tethered between the fragile spires of future plans. In a moment of off-color relatability you asked “do you ever have those days where you wake up wishing you hadn’t?”, and just for a second the cracks had started to show. 
          <br/>
          If I could just make that call last a little longer, there’s not a lot I wouldn’t give twice over. If I had one more chance I would tell you everything: all the failures and fuckups, every fear and flaw of mine, details spared none. And if it led to your rejection, so be it, my cross to bear. That way, we could say that we truly knew each other<span>&#8212;</span>even if it was only for a moment<span>&#8212;</span>before you left this earth.
          <br/><br/>
          You were a man of huge ideas, some might say to a fault. More than capable and impossibly determined you went about them with fervor. But I guess life, or more accurately the fragility of it all, got in the way. Though you were never quite able to realize some things you’d planned, I have to remember that doesn’t mean you didn’t have them, you were always moving towards them. 
          <br/><br/>
          Like how you spoke of moving to Maine one day, and if by design, a job took me there. The glasslike mudbanks across the sound, shimmered bluebeige gradients above and below, and slowswayed cordgrass held at their edges some promise you made that I had to keep. I walked miles around the cove and felt you in every step, extra tracks mirrored mine on the gravel trail. I walked towards you when I was afraid, from you when I was indignant, and with you while you still could. I can remember when we walked together for the last time<span>&#8212;</span>November, so many years ago. 
          <br/><br/>
          I remember so many things but I’ve already forgotten so many, the pain had a way of paving over the past and sealing everything that could have been under a watertight bond. All you’d ever wanted was my fulfillment and all I’d ever wanted was to make you proud, but we each pushed for those things in our equally misguided ways, repellent forces which could never truly harmonize. And for all our fights and fodder, words of vitriol, years of war, this was all we’d become: a lineage bankrupt by the conversations we were too afraid to have.
          <br/><br/>
          So call me naive, call me deluded, call me what you want, but I had to believe that there was still time. Time to make things right, time to be a better man. I know because you told me so, and that was all it took. I know because I had to believe it, if nothing else would get me out of bed every day. 
          <br/><br/>
          And I know because I remember you telling me that you were still in the fight, <i>even when straits were dire.</i></p>
          
        </div>
        
        <div className={styles.essay}id='favor'>
          <h2>Letter to a Lost Love</h2>
          <p>MY DYING WISH, my last request, is that you save space for me in your heart.
          <br/><br/>
          Take my memory, bury it under a stone, and let the years flow over it. You won't need it for now.
          <br/><br/>
          I ask this not to keep you for myself. I would never want to keep you for myself, because that's not what friends do to each other. I know people that have moved across the country, or across the world, and even though I miss them dearly I'm all the richer for ever having been in their orbit. I've made peace with the fact that our days together have come and gone. And that's okay. By the same principle, I loved growing up in Florida, chasing lizards around the yard and throwing mangos at my brother's head, but those days have come and gone too, and they have a place in my heart that will never be trespassed.
          <br/><br/>
          I ask this not in hopes that we would reunite. I know you’ll find care you deserve, the recognitions that you’ve earned, and the love so destined for you<span>&#8212;</span>love beyond anything I could have offered you. There's things you want in life that I'm just not the one to give you. And though that saddens me to say, my sadness only lasts for a second, because I can rest assured with peace knowing that you will get to experience them. Even if I'm not by your side when they happen, knowing that <i>you will enjoy them regardless</i> is good enough for me.
          <br/><br/>
          I need you to know, not question, but know deep in your heart, that I care about you. I did at the time, I do now, and I will for as far as I can see. Because, for years I was just a <b>dead man walking</b>, but you pulled me out of long string of darker days. I'm gonna owe you for that, forever. So I don’t want to, and I couldn’t even imagine going back to my life before I met you. Let's just consider all those days lost.
          <br/><br/>
          So I don't ask this with any ulterior motives, but only to appreciate what you've given me. I can remember a moment when we were laying on the shoreline, fast asleep, with your head held against my chest. <br/>I had <i>no idea</i> the implications of that moment on the years to follow. We were so young, how would I know?<br/>How would I know that even though I'd get the incredible privilege of flying drones worth tens of thousands of dollars, your love was <i>by far</i> the most valuable thing I would ever touch. Or, how would I know that even though I could crown my resume with a job I'd worked years to attain, our times spent doing the most trivial things were the <i>closest I've come</i> to feeling complete.
          <br/><br/>
          So I ask this, rather, purely out of gratitude. I don’t mean to be too abstract here, consider for a second the towering improbability that I would exist in this world in the first place. Seriously. Multiply that by the sheer impossibility that 1) you and I would exist in the same time, 2) in the same place, and 3) we would cross paths. By all accounts, we should not have even met. <br />
          And yet, <i>there was something greater.</i><br />
          Something which could ignore odds and outcomes, something which could brush off statistics and probabilities, and manufacture circumstances so extreme, so severe, that you and I could collide in this immeasurable void of darkness.<br/>
          So I'm grateful for that: whoever tipped the scales, whoever loaded the dice in our favor that day, they have my regards.
          <br/><br/>
          So I'll ask one last time: save space for me in your heart, and keep preserved a monument to the hours that we spent together on this earth. I ask you this, so that on hard days when you forget just how much joy you bring to the people around you, you can dig up my memory, and recall the moments when we were talking, laughing, doing whatever. And maybe in doing so, my memory can bring to mind warmer days filled with heavy sunshine,
          <br /><i>just as the memory of you has done for me.</i>
          <br/><br/>
          And that's all I ask: for the opportunity to return the favor.
          </p>
          
        </div>
  
        <div className={styles.essay} id='love-letter'>
          <h2>Love letter to Virginia</h2>
          <p>During my interview, my former boss warned me that it was a very physical job that I was applying for, and she asked: Would I be able to carry weight up and down terrain? My response was that when I turned 13 my parents simply stopped hiring movers. We kept moving every couple years, but my brother and I were now at an age to provide unpaid manual labor. Hey fair is fair, they kept me clothed & fed me 18 years. 
          <br/><br/>
          So I got the job. And for years after I used to wake up early, tie my boots tight in the darkness of my room, and hit the road before the sun came up. I traveled all throughout the state of Virginia conducting site visits for conservation easements. In layman's terms, I hiked around in the woods all day, taking pictures with an iPad and flying a drone. I saw the of the cattle ranches of the Piedmont, the swamps of eastern Richmond, and the 
          <br/><br/>
          Come class time I would be on the other side of the state. Make no mistake, the site visits weren’t just a walk in the park. I was earning every cent of the intern pay, climbing over livewire cattle fences, running away from dogs, and trekking briar thickets.
          <br/><br/>
          Now, normally, the place in which you live becomes smaller with time. You begin to get around without using a map, you become familiar with the best places to eat, you make friends with people who live across town. Places get smaller, strings get tighter. With Virginia, it was exactly the opposite. The more I traveled Virginia the larger it grew, an ever-unfolding piece of origami, intoxicating sea of deep green forests, constantly unfolding. 
          <br/><br/>
          It wasn’t just my farm or my backyard, it was my family’s land, my livelihood. 
          <br/><br/>
          One landowner I’ll never forget. It was was eastern Richmond, late march, and we had just turned the corner out of the winter slumber when everything around was starting to wake up. We had finished our work for the day, and as we’re packing our gear to head out, and I go up to the landowner shake her hand, and say “thank you for showing us around your property”. And she looks at me, and smiles with tears in her eyes, and I swear to god, she says “It’s my life’s work”. And so it grew. 
          <br/><br/>
          I had known, I mean really gotten to know, the land in which I inhabited.
          </p>
          
        </div>

    </section>
    
   <section>
      <h2>Scraps</h2>
      <Scraps />
    </section> 

    </>
  )
}