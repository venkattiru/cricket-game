

export const imgList = () =>{
    const images = [];
    function importAll(r) {
        r.keys().forEach(key => images.push(r(key)));
      }
      importAll(require.context('../images', true, /\.(png|jpe?g|svg)$/)); 
      console.log(images);
      return images;
}


export const cricObj = [
    {
      name: 'out',
      desc: 'Stumped! The batsman is out, a brilliant piece of wicketkeeping!',
      sign: 'W',
    },
    {
      name: 'runs',
      desc: 'No runs scored on that delivery. The batsman defended it well, keeping it out of the reach of the fielders.',
      sign: '0',
      value: 0
    },
    {
      name: 'runs',
      desc: 'What a stunning cover drive that was!',
      sign: '4',
      value: 4
    },
    {
      name: 'out',
      desc: "That was a fantastic delivery from the bowler. It straightened after pitching and struck the batsman's pads in line with the stumps.",
      sign: 'W',
    },
    {
      name: 'runs',
      desc: 'The batsman plays it gently into the gap and quickly scampers for a single.',
      sign: '1',
      value: 1
    }, 
    {
      name: 'runs',
      desc: 'Its a SIXER',
      sign: '6',
      value: 6
    },
    {
      name: 'runs',
      desc: 'Excellent running between the wickets! The batsmen have turned a single into a double with lightning speed.',
      sign: '2',
      value: 2
    },
    {
      name: 'runs',
      desc: 'Brilliant running between the wickets! The batsmen have turned it into a three! This is exceptional running!',
      sign: '3',
      value: 3
    },
    {
      name: 'runs',
      desc: 'That was a textbook straight drive, elegantly executed by the batsman.',
      sign: '4',
      value: 4
    },
    {
      name: 'runs',
      desc: "It was a good delivery from the bowler, testing the batsman's skills. The batsman showed good technique and solid defense to keep the ball away from any scoring opportunity.",
      sign: '0',
      value: 0
    },
    {
      name: 'runs',
      desc: 'The batsmen recognized the opportunity for a single and responded quickly to get off the mark.',
      sign: '1',
      value: 1
    },
    {
      name: 'freehit',
      desc: 'Free hit! The bowler has overstepped, and the batsman gets a chance to capitalize on this rare opportunity.',
      sign: 'FH',
      value: 1,
    },
    {
      name: 'runs',
      desc: 'The fielders had to retrieve the ball from the outfield, and by the time they returned it, the batsmen had comfortably completed the second run.',
      sign: '2',
      value: 2
    },
    {
      name: 'runs',
      desc: 'The batsmen recognized the opportunity for a single and responded quickly to get off the mark.',
      sign: '1',
      value: 1
    },
    {
      name: 'runs',
      desc: 'He picked the length early and executed the pull shot with immense power.',
      sign: '4',
      value: 4
    },
    {
      name: 'runs',
      desc: 'What a stunning cover drive that was!',
      sign: '4',
      value: 4
    },
    {
      name: 'runs',
      desc: 'Brilliant running between the wickets! The batsmen have turned it into a three! This is exceptional running!',
      sign: '3',
      value: 3
    },
    {
      name: 'out',
      desc: 'The umpire had no hesitation in raising the finger. It looked plumb, and the batsman knew he was in trouble as soon as he missed the ball.',
      sign: 'W',
    },
    {
      name: 'runs',
      desc: 'Doubles are crucial in building partnerships and keeping the scoreboard ticking.',
      sign: '2',
      value: 2
    },
    {
      name: 'runs',
      desc: 'The fielders had to cover a lot of ground to retrieve the ball, but the batsmen were relentless in their running and made it comfortably.',
      sign: '3',
      value: 3
    },
    {
      name: 'runs',
      desc: "The crowd is on its feet, cheering in awe of that shot. It's a risky stroke, but when executed with such finesse, it can be a game-changer.",
      sign: '4',
      value: 4
    },
    {
      name: 'runs',
      desc: 'Brilliant running between the wickets! The batsmen have turned it into a three! This is exceptional running!',
      sign: '3',
      value: 3
    },
    {
      name: 'runs',
      desc: 'Doubles are crucial in building partnerships and keeping the scoreboard ticking.',
      sign: '2',
      value: 2
    },
    {
      name: 'out',
      desc: 'Ouch!! Hit Wicket',
      sign: 'W',
    },
    {
      name: 'runs',
      desc: 'The fielders tried to cut off the single, but the batsman was too fast between the wickets. He completed it comfortably in the end.',
      sign: '1',
      value: 1
    },
    {
      name: 'runs',
      desc: 'What a stunning cover drive that was!',
      sign: '4',
      value: 4
    },
    {
      name: 'runs',
      desc: 'Brilliant running between the wickets! The batsmen have turned it into a three! This is exceptional running!',
      sign: '3',
      value: 3
    },
    {
      name: 'runs',
      desc: 'The batsmen recognized the opportunity for a single and responded quickly to get off the mark.',
      sign: '1',
      value: 1
    },
    {
      name: 'runs',
      desc: 'The batsmen seem to be in sync with each other. They have a good understanding and are pushing each other to take those extra runs.',
      sign: '2',
      value: 2
    },
    {
      name: 'out',
      desc: "It was a clever piece of work from the wicketkeeper. The bowler enticed the batsman to come forward, and he couldn't get his foot back in time.",
      sign: 'W',
    },
    {
      name: 'runs',
      desc: 'Doubles are crucial in building partnerships and keeping the scoreboard ticking.',
      sign: '2',
      value: 2
    },
    {
      name: 'runs',
      desc: 'Oh, what a classy back foot drive! The batsman displayed textbook technique and exquisite timing with that shot.',
      sign: '4',
      value: 4
    },
    {
      name: 'runs',
      desc: 'The batsmen recognized the opportunity for a single and responded quickly to get off the mark.',
      sign: '1',
      value: 1
    },
    {
      name: 'out',
      desc: 'Oh, what a bizarre turn of events! The batsman has been dismissed hit wicket, which is quite a rare occurrence in cricket.',
      sign: 'W',
    },
    {
      name: 'runs',
      desc: ' Yes, the batsman missed his attempted shot, and the ball went past him, evading both the bat and the wicketkeeper.',
      sign: '1b',
      value: 1
    },
    {
      name: 'runs',
      desc: 'Brilliant running between the wickets! The batsmen have turned it into a three! This is exceptional running!',
      sign: '3',
      value: 3
    },
    {
      name: 'runs',
      desc: 'Oh, my word! The batsman has just unleashed the helicopter shot! This is one of the most extraordinary strokes in the game of cricket.',
      sign: '6',
      value: 6
    },
    {
      name: 'runs',
      desc: 'The batsmen recognized the opportunity for a single and responded quickly to get off the mark.',
      sign: '1',
      value: 1
    },
    {
      name: 'runs',
      desc: "Three runs like that can really boost the run rate and add valuable runs to the team's total.",
      sign: '3',
      value: 3
    },
    {
      name: 'out',
      desc: "It's a reminder that anything can happen in cricket. The game is full of surprises, and this hit wicket dismissal adds another chapter to its unpredictability.",
      sign: 'W',
    },
    {
      name: 'runs',
      desc: 'Brilliant running between the wickets! The batsmen have turned it into a three! This is exceptional running!',
      sign: '3',
      value: 3
    },
    {
      name: 'runs',
      desc: 'The batsmen recognized the opportunity for a single and responded quickly to get off the mark.',
      sign: '1',
      value: 1
    },
    {
      name: 'runs',
      desc: 'Wide ball signaled by the umpire. The bowler has erred in his line and the ball has strayed outside the marked lines.',
      sign: 'WD',
      value: 1
    },
    {
      name: 'runs',
      desc: 'Oh, what audacity from the batsman! He has just played the dilscoop, a shot that takes sheer courage and skill to execute.',
      sign: '6',
      value: 6
    },
    {
      name: 'runs',
      desc: 'The batting team will be looking to build a solid foundation, and singles play a significant role in setting up big totals.',
      sign: '1',
      value: 1
    },
    {
      name: 'runs',
      desc: 'Doubles are crucial in building partnerships and keeping the scoreboard ticking.',
      sign: '2',
      value: 2
    },
    {
      name: 'runs',
      desc: 'The batsmen recognized the opportunity for a single and responded quickly to get off the mark.',
      sign: '1',
      value: 1
    },
    {
      name: 'runs',
      desc: 'The bowler will be disappointed with himself for giving away an extra run and an extra delivery to the batting side.',
      sign: 'WD',
      value: 1
    },
    {
      name: 'runs',
      desc: 'Brilliant running between the wickets! The batsmen have turned it into a three! This is exceptional running!',
      sign: '3',
      value: 3
    },
    {
      name: 'runs',
      desc: 'Doubles are crucial in building partnerships and keeping the scoreboard ticking.',
      sign: '2',
      value: 2
    },
    {
      name: 'out',
      desc: "It's a classic dismissal in cricket, and the bowler has executed it perfectly. The batsman will have to make the long walk back to the pavilion.",
      sign: 'W',
    },
    {
      name: 'runs',
      desc: 'The batsmen recognized the opportunity for a single and responded quickly to get off the mark.',
      sign: '1',
      value: 1
    },
    {
      name: 'runs',
      desc: 'Doubles are crucial in building partnerships and keeping the scoreboard ticking.',
      sign: '2',
      value: 2
    },
    {
      name: 'runs',
      desc: 'Doubles are crucial in building partnerships and keeping the scoreboard ticking.',
      sign: '2',
      value: 2
    },
    {
      name: 'runs',
      desc: 'The batsmen recognized the opportunity for a single and responded quickly to get off the mark.',
      sign: '1',
      value: 1
    },
    {
      name: 'runs',
      desc: 'The fielders were alert and quick to close any gaps, preventing the batsman from finding a run.',
      sign: '0',
      value: 0
    },
    {
      name: 'runs',
      desc: 'Just a single bye taken on that delivery.',
      sign: '1b',
      value: 1
    },
    {
      name: 'out',
      desc: 'The wicketkeeper reacted swiftly, dislodging the bails with precision. The umpire had no hesitation in raising the finger.',
      sign: 'W',
    },
    {
      name: 'runs',
      desc: 'The batsmen recognized the opportunity for a single and responded quickly to get off the mark.',
      sign: '1',
      value: 1
    },
    {
      name: 'runs',
      desc: 'Two byes added to the score on that delivery.',
      sign: '2b',
      value: 2
    },
    {
      name: 'runs',
      desc: "Oh, that's a wide! The bowler has strayed down the leg side, and the umpire has signaled it as a wide.",
      sign: 'WD',
      value: 1
    },
    {
      name: 'out',
      desc: 'Oh no, a disastrous run-out! Miscommunication between the batsmen has resulted in a run-out, a grave error in this crucial moment of the game.',
      sign: 'W',
    },
    {
      name: 'runs',
      desc: 'The batsmen recognized the opportunity for a single and responded quickly to get off the mark.',
      sign: '1',
      value: 1
    },
    {
      name: 'runs',
      desc: 'Brilliant running between the wickets! The batsmen have turned it into a three! This is exceptional running!',
      sign: '3',
      value: 3
    },
    {
      name: 'runs',
      desc: 'The fielders were quick to react, but the batsmen completed the run comfortably before the throw could reach the stumps.',
      sign: '1',
      value: 1
    },
    {
      name: 'runs',
      desc: "It's a massive hit! That ball has gone all the way! It's a six!",
      sign: '6',
      value: 6
    },
    {
      name: 'freehit',
      desc: "That's an unfortunate mistake by the bowler. The batsman now has a chance to go all out without the fear of getting dismissed on this delivery.",
      sign: 'FH',
      value: 1
    },
    {
      name: 'runs',
      desc: 'The batsmen recognized the opportunity for a single and responded quickly to get off the mark.',
      sign: '1',
      value: 1
    },
    {
      name: 'runs',
      desc: 'Brilliant running between the wickets! The batsmen have turned it into a three! This is exceptional running!',
      sign: '3',
      value: 3
    },
    {
      name: 'runs',
      desc: 'What a stunning cover drive that was!',
      sign: '4',
      value: 4
    },
    {
      name: 'runs',
      desc: 'Brilliant running between the wickets! The batsmen have turned it into a three! This is exceptional running!',
      sign: '3',
      value: 3
    },
    {
      name: 'runs',
      desc: 'It was a good line and length by the bowler, not giving the batsman any room to score.',
      sign: '0',
      value: 0
    },
    {
      name: 'runs',
      desc: 'Brilliant running between the wickets! The batsmen have turned it into a three! This is exceptional running!',
      sign: '3',
      value: 3
    },
    {
      name: 'runs',
      desc: 'The batsmen recognized the opportunity for a single and responded quickly to get off the mark.',
      sign: '1',
      value: 1
    },
    {
      name: 'out',
      desc: "That's a classic dismissal, known as the bowler's dream. The batsman will be extremely disappointed with his misjudgment.",
      sign: 'W',
    },
    {
      name: 'runs',
      desc: 'The batsmen recognized the opportunity for a single and responded quickly to get off the mark.',
      sign: '1',
      value: 1
    },
    {
      name: 'runs',
      desc: 'Oh, what a sensational uppercut! The batsman displayed remarkable skill and audacity with that shot.',
      sign: '4',
      value: 4
    },
    {
      name: 'runs',
      desc: 'The batsmen recognized the opportunity for a single and responded quickly to get off the mark.',
      sign: '1',
      value: 1
    },
    {
      name: 'runs',
      desc: 'It was a challenging ball for both the batsman and the wicketkeeper. The ball took an unexpected bounce or turn, resulting in the byes.',
      sign: '2b',
      value: 2
    },
    {
      name: 'runs',
      desc: 'What a stunning cover drive that was!',
      sign: '4',
      value: 4
    },
    {
      name: 'runs',
      desc: 'Brilliant running between the wickets! The batsmen have turned it into a three! This is exceptional running!',
      sign: '3',
      value: 3
    },
    {
      name: 'runs',
      desc: "The batsman attempted to play a shot but couldn't make contact with the ball.",
      sign: '0',
      value: 0
    },
    {
      name: 'out',
      desc: 'Yes, it seems like the ball came off the top edge of the bat. It went up high into the air, and the fielder took an easy catch.',
      sign: 'W',
    },
    {
      name: 'runs',
      desc: 'The batsmen recognized the opportunity for a single and responded quickly to get off the mark.',
      sign: '1',
      value: 1
    },
    {
      name: 'out',
      desc: 'The batsman will be disappointed with his shot selection or execution, as he failed to get his bat on the ball and was trapped in front of the wicket.',
      sign: 'W',
    },
    {
      name: 'freehit',
      desc: "This is a golden chance for the batsman to unleash his full power and take advantage of the free hit.",
      sign: 'FH',
      value: 1
    },
    {
      name: 'out',
      desc: "It's an unfortunate way to get out. The batsman will be extremely disappointed with himself, as this is a self-inflicted dismissal.",
      sign: 'W',
    },
    {
      name: 'runs',
      desc: 'Wide ball signaled by the umpire! The bowler has erred in line and has strayed too far outside the off-stump.',
      sign: 'WD',
      value: 1
    },
    {
      name: 'runs',
      desc: 'What a stunning cover drive that was!',
      sign: '4',
      value: 4
    },
    {
      name: 'runs',
      desc: ' The ball was well outside the reach of the wicketkeeper, and the batsmen seized the opportunity to steal a bye and add an extra run to the total.',
      sign: '1b',
      value: 1
    },
    {
      name: 'out',
      desc: 'It was a well-disguised delivery by the bowler. The batsman attempted to drive it, but ended up spooning a simple catch to the fielder.',
      sign: 'W',
    },
    {
      name: 'runs',
      desc: "The crowd is on their feet, cheering in excitement! That shot has brought a wave of energy to the stadium",
      sign: '6',
      value: 6
    },
    {
      name: 'runs',
      desc: 'Brilliant running between the wickets! The batsmen have turned it into a three! This is exceptional running!',
      sign: '3',
      value: 3
    },
    {
      name: 'out',
      desc: "And that's an OUT! The bowler strikes with a brilliant delivery, and the fielding side erupts in celebration.",
      sign: 'W',
    },
    {
      name: 'runs',
      desc: 'What a stunning cover drive that was!',
      sign: '4',
      value: 4
    },
    {
      name: 'freehit',
      desc: 'Free hit',
      sign: 'FH',
      value: 1
    },
    {
      name: 'runs',
      desc: 'Wow, what a daring switch hit! The batsman has completely turned the game on its head with that unconventional stroke.',
      sign: '4',
      value: 4
    },
    {
      name: 'runs',
      desc: "The fielders could only watch as the ball soared high into the sky and landed safely beyond the boundary. That's a fantastic hit.",
      sign: '6',
      value: 6
    },
    {
      name: 'runs',
      desc: 'What a stunning cover drive that was!',
      sign: '4',
      value: 4
    },
    {
      name: 'out',
      desc: ' LBW! The batsman is given out LBW (Leg Before Wicket)!',
      sign: 'W',
    },
    {
      name: 'runs',
      desc: 'Brilliant running between the wickets! The batsmen have turned it into a three! This is exceptional running!',
      sign: '3',
      value: 3
    },
    {
      name: 'runs',
      desc: 'What a stunning cover drive that was!',
      sign: '4',
      value: 4
    },
    {
      name: 'runs',
      desc: "It was a clean strike, right from the meat of the bat. The ball disappeared into the stands in a blink of an eye.",
      sign: '6',
      value: 6
    },
  ];