# Nature Disrupted
See it here: https://naturedisrupted.com/, which is a mask for https://kevins-hiking-147cc5114b61.herokuapp.com/

This site is devoted to my backcountry adventures.
Enjoy browsing my trip photos and notes.

This site is built with Node.js site and templated with Pug. It uses a RESTful API for quick load times by sending the webpage first, then separetly calling for more content, while the page dynamically shows a 'Loading...' UI.

It's hosted by Heroku, but rerouted via GoDaddy for a clean domain. Please excuse the unsecure connection - I'm still learning how to create/obtain my own certificate.

Last updated September 2023.

---

# TODO
*Client-side*
- Add 'loading tracks...' to Cats35 map
- Implement AJAX call to get one geojson of all cats 35 tracks combined
- Make Bagadonuts Gear page emulate an online shopping site
  
*Server-side*
- Complete 'combineCatTracks() in geojsonHelper
- Create API for sending geojson of combined Cats tracks
- Move local 'databases' to true db (Catskills peaks/tracks, Bagadonuts gear, images, etc)