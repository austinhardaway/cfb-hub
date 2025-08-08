
# CFB-HUB

Ok, I want to have a dashboard that I can run on my homelab machine that allows me to easily see
live game information every Saturday (and non-saturday cfb games even though they make me cry). 

This is a spiritual successor to cfb.guide and a cure for the lack of good at-your-fingertips info.

I feel that as a community that likes data we're not being well served and the available information is in too many places.
I never ever want to look at the google schedule widget ever again.
This is an app for those who know ball, but dont always remember salient details in conversation. 
This is the app I want to check before fighting with someone in r/cfb 

I want that the site is highly linkable for the kind of background information I want.

The main page should be a high level dashboard that displays games that are happening now most 
prominently. It should first and foremost be a place that you go to check scores for games you
are not watching. 

You should be able to click into a game and see stats for that game pulled from wherever I can 
get stats. You should be able to click into each team and get stats and some headlines for that
team. Crucially I want to the whole schedule for each team on the team page. 

# Design

## Pages

### Home

- live game scores when available
    - live games and upcoming games should share a component and include TV Network its broadcast on
- upcoming games after (or first when no live games are on)
- maybe a news feed 
- search for team/conference/players/etc

### Settings

- Weird one to be second on this list but the settings page should allow user to setup the service
    - that means input API keys
    - select some preferences (optional light mode?)
- Maybe set a preferred conference
- Maybe set two teams as favorite teams 

### Game Page

- Each game should get a page with digestible information for:
    - Teams playing in each game
        - links to the team page
        - links to conference page
    - Where the game is
        - links to a stadium page
    - When the game is (And if its TBD)
        - links to a week page
    - What network is broadcasting the game
        - links to how-to-watch network page
    - Box score
    - Play-by-Play could be cool!
    - ESPN style current representation of the field conditions would be really really cool!
    - Any other stats that seem cool

### Team Page

- Team Page should show the schedule of the team for at least this season (previous seasons coming soon)
- Team Page should have news feed for that team
- Maybe some players on that team?
- Maybe some overall offense/defense stats
- Conference
    - links to conference page
- Conference standing
- Current Coach
    - links to coach page
- current rank (AP and CFB, maaaaybe CFB Reddit Rank also)
- Potentially some historical data

### Conference Page

- Shows teams in a conference in order of current standing. Links to team pages

### Stadium page

- Shows picture of the stadium, who plays there, what its actually called, possibly 

### Coach Page

- Shows picture of coach
- Shows coach position
- shows historical Tenures at which teams
    - Maybe includes nfl teams
    - teams link to team page

## Software

@TODO: you got some 'splaining to do

## Contributing

Feel free to fork! Make a PR if you do something cool I guess. I have no roadmap and professionally im pretty bad at staying on top of issue creation so I would expect that to be a problem here as well. Who knows maybe I'll get better at that too during this endeavor


## Captains Log

### 8/07/25

Current goal is to get something that is novel, usable, and deployable going before kickoff. I think I have like 18 days or so. Would love to show it to HN or reddit during sleepy week 0 games.

### 8/07/25

Gave up on web components. Moving to react + vite


###### Vite's readme (havent read todo: remove after reading)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
