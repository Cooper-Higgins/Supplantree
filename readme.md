Concept:
- App that makes it easy for users to plant trees. Guides user through choosing the right trees to plant for their plot - taking user location and soil type to suggest tree variety based on native species. Offers educational content for users to learn about native trees to Scotland.

MVP:
- Account Registration & Login: Using Auth0 to create account via email or Google etc. 
- Tree Planting Flow: As a user, input plot details (location / soil type). App calculates ideal trees based on location and soil quality, return option(s) back to user as a carousel, as a user have option to plant this (which gets added to their 'My Trees')
- Learn: Page with an interactive map of Scotland split into c. 5 regions, with facts for each region. List of all trees, which can be searched through / filtered to return specific trees i.e. deciduous
- About: Page with profiles for the team / overview of the project 
- Fully responsive mobile-first design in React using Flex

Extensions:
- Adds plot size variable to tree planting flow
- Adds shade variable to tree planting flow
- Hosted on AWS
