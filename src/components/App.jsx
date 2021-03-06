import React from "react";
import Entery from "./Entery";
import emojipedia from "../emojipedia";

// { just to refer data of emojipedia
//   id: 1,
//   emoji: "ðª",
//   name: "Tense Biceps",
//   meaning:
//     "âYou can do that!â or âI feel strong!â Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
// },

// all the emojies are copied from the {Emojipedia.org }  which are used in emojipeida.js file

function createEntery(emojiTerms) {
  return (
    <Entery
      key={emojiTerms.id}
      emoji={emojiTerms.emoji}
      name={emojiTerms.name}
      description={emojiTerms.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {/* this is using mapping above */}
        {emojipedia.map(createEntery)}

        {/* This is a hard code data  */}

        {/* <Entery
          emoji="ðª"
          name="Tense Biceps"
          description="âYou can do that!â or âI feel strong!â Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
        /> */}
      </dl>
    </div>
  );
}

export default App;
