# Stack

- Create React App (familiar)
- Responsive Design (familiar)
- Context API (limited knowledge)
- GraphQL API (limited knowledge)
- DynamoDB (completely new)
- AWS Lambda backend (completely new)
  - Amplify (completely new)

# Initial Approach

Begin with what I know (front-end)
Work out math and logistics
Research frameworks I don't know
Attempt to connect the backend

## step one

build out react components with static data

- 10x10 acre square field --> [43560 square feet per acre (square root 208.710325571 = feet across one acre)]
- combine
- rock obstacles
- wheel size input
- auger length input
- fuel type input

## step two

- I've come to the realization that actually calculting the meneuvering of a real combine requires calculus.
- For now, I will focus on coding what I know. This means I plan to make a base simulation using a grid system instead, and can improve upon it later once I get the data logging fully connected.
- A rock is only 1ft x 1ft, but I am going to oversimplify while using the grid to make the combine skip out on the entire grid square containing the rock.
- Each part of the grid is the size of the auger in the form of a square
- Can use a matrix to encode passable and impassible values and to foresee obstacles requiring premature turn

# basics

- wheel size: 60 inch
- auger length: 8.7 feet --> 240 passes @ 5min each (auger takes up)
- fuel type: diesel --> 20 gallons per 10 acres (\$350)
- 1 pass is approx 2,087.1 feet
- pretending there is not a turn radius -- in real life we would have to cut off corners and have fancy meneuvering to turn around. Base model will ignore this reality and snake around tightly.

# Resources

### AWS Amplify Serverless GraphQL React workshop by Nader Dabit

- https://www.youtube.com/watch?v=HZUlQ7Z2xHQ
- https://github.com/dabit3/aws-appsync-react-workshop

### useContext

- https://reactjs.org/docs/hooks-reference.html#usecontext
- https://upmostly.com/tutorials/how-to-use-the-usecontext-hook-in-react
- https://stackoverflow.com/questions/57840535/passing-multiple-value-and-setter-pairs-to-context-provider-in-react

# Assignment from ATG

Assignment: CARS “Combine Automation Report Simulator”
Requirements:

• Create React App
• Responsive Design
• Context API state management
• GraphQL API Schema
• DynamoDB
• AWS lambda backend functions
\*For AWS services please use Amplify
Instructions:
You have been assigned to create a prototype simulation for the future of agriculture
harvesting. To prove the concept of autonomous combines [ harvesting tractor], you must build
a react wizard component allowing users to configure their own autonomous combine and add
that configuration onto a database. All combines in the database will have scheduled simulation
test ran to log the functionality and operation of each combine to measure its efficiency
through harvesting a 10-acre square field.
Each combine is tested every hour with randomly generated obstacles placed on the square
field. The test should account for the obstacles and calculate efficiency for each combine and
log the values onto the database. It is important to note that the combines can follow any
pattern but cannot move backwards.
The wizard’s input is:

1. Wheel Size [ To calculate time taken, considering all combines operate at the same
   speed]
2. Combine Stalk Auger length [ to calculate the number of passes made to plane the field]
3. Fuel Type:
   a. Electrical
   b. Diesel
   Constraints and Assumptions
4. A Base Combine weighs 53,000 pounds, with 60-inch wheels, and 8.7 feet wide auger,
   making 240 passes to plane a 10-acre square field with each pass taking 5 min. The base
   fuel type is Diesel with a fuel consumption per 10 acres of 20 gallons. Costing \$350 per
   10 acres.

5. Increase in Wheel Size by 1-inch results in weight increase by 5% but a time reduction of
   3%.
6. Electric Combines are more costly per 10 acres by 25% at the start but with each run
   reducing cost by 0.5 % consistently. Diesel is a fixed cost. Regardless of fuel type the
   cost per 10 acres is a factor of weight with a linear relationship.
7. Auger length can be altered from the base unit by 1 foot increments up to a maximum
   auger length of 25.7 feet. 1 increment increase results in weight increase by 8%.
8. 3 obstacles [ 1ft x 1ft rock ] are to be placed randomly on the field per run and the
   combines must transverse around them. The point of this exercise is calculating the
   most efficient path to plane the field with least amount of time.
9. Make and state any other reasonable assumptions made for this project
   Data Logging
   Each hourly test generates a report added onto the database for each combine providing:
10. Time taken to plane the field
11. Percentage of field chosen to cover
12. Cost per run
13. Total Efficiency
    Total Efficiency is:
    e = Average [
    600
    time taken(mins)

- percent of field chosen to cover +
  run cost
  350
  ]

Note: This test is designed to challenge your capabilities and perseverance, ATG understands
the difficulty of this test to be completed within 2 weeks. The team is looking for talent that
understands the process in tackling this test not only the end product presented, as the
internship pertains roles working indirectly with robotics.
Individuals are expected to work on their own, all candidates that make it to the follow up
interview will be expected to explain their solution.

The Test submission is due November 25, 2020. Once Completed, upload the repository onto
GitHub and send the repository link to: ahmed@atgpharma.com
