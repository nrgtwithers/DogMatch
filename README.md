# DogMatch
GWU Final Team Project

**Team Members:** Jalia Evans, Fernanda Garcia, Munguntsetseg Erdenebat & Nina Rose Withers

## Overview

This assignment is to provide users the ability to take a test to find perfect canine companion for them. It will allow them to see information based on their match or look into the a breed they're already interested in. 

It will also, allow them to see local rescues and breeders of the perfect canine companion on a map. 

### Roles

- **Nina**: Work on setting up MongoDB (Saved favs to user accounts, Set up user schema to allow name and location?, Figure out set up with map.)
- **Jalia**: Finish up Quiz (Populate results, & do styling), and utilizing the Petfinder API?
- **Fernanda**: Finish How page w/ video & work on presentation (Canva or Prism)
- **Mungunu**: Work on using Google Maps API and integrating it with petfinder API.

### Tasks (Everyone for their section)

1. Work on Branches, communicate merges.
1. Create / Connect all Backend
1. Test & Debug
1. Push changes to branch / If approved merge master.


#### Technologies 

- MongoDB
- Express
- React JS
- Node JS

#### Framework
- Bootstrap

---

Will work with Fetch, as opposed to AJAX
 
GET Request with this the following URL call will return Corgis that are within range of the 20190 zip code. The response includes name, sex, photos, descriptions, shelterIDs, locations, and contact info for the specific listing
http://api.petfinder.com/pet.find?animal=dog&breed=Corgi&location=20190&key=300cb21456a9656c61757fb75d958a79&format=json


Returns shelters near the given zip code, with contact information, name and address. With the location API, we might be able to help them pick a shelter to visit.
http://api.petfinder.com/shelter.find?location=20190&key=300cb21456a9656c61757fb75d958a79&format=json


Dogs listed in the general pet.find method include shelter dogs though, so not sure if listing shelters needs to be top priority in the API result aspect. But it could be great as part of the JSON objects in terms of the scraped data.


#### Brainstorm Quiz
1. Pet size
    <!-- - size of the person? -->
    - walkability/safety aspect
    - living arrangement size issues
2. Exercise needs
    - living arrangement (sq footage)
    - personal activity level
    - willingness/ability to hire dogwalker/dog daycare
3. Friendliness
    - pets you already own
    - children?
4. Lifespan
    - commitment and/or health issues?
    - definitely on back burner in terms of quiz

