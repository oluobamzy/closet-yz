## Rules

1. Setting meeting times : Daily scrums (Morning : 10Am - 12noon, Evening : 5pm)

### 1. Project Planning

In the planning phase, you’ll prepare several documents to help guide your team through the execution of your project.

# Project planning Deadline: Finished and reviewed by a mentor on week 10 day 5.

# a) Project Description

You should have a document describing your project idea. In other words, what your project is all about. It should contain at least the following:

### Project title

1... closet yz

Project description - What problem your app solves
closet yz will help you organize and manage your wardrobe.
Scenario : know the number of clothes and accessories you have and manage them. Sort clothes according to their use.

Target audience - Your app will be useful to whom?
1...Hybrid and onsite workers
2...People who want to organize their clothes
Team members

1. Benson Lee
2. Khalid Yusuf
3. Oluwasegun Idowu

Deliverable: Project description document

b) User Stories
User stories allow you to draft the high-level requirements based on the user needs. It should describe the interaction of the user and the app.

# MVP :

1. As a user, i should be able to create a closet
2. As a user, i should be able to add items to my closet
3. As a user, i should be able to sort my items into categories
4. As a user, i should be able to login
5. As a user, i should be able to see all items in my closet
6. As a user, i should be able to delete items from my closet
7. As a user, i should be able to edit items in my closet
8. As a user, i should be able to see items that are in recycle

## stretch features

1. Weather display
2. Current trends
3. Notification for outfit of the day

Deliverable: User stories document

c) Wireframes
Wireframes are a visual representation of the skeletal structure of your app. It should lay out the structure hierarchy and relationships between the different element of your app. Ideally, you should use a simple design software to get your wireframes done (draw.io, balsamiq, etc).

Deliverable: Wireframe designs

d) Entity Relationship Diagram
You need to design the database ERD and define what are the tables and their relationships. You should use a design software (draw.io or any other) to draft the ERD.

# Table structure

Entities:

User

UserID (Primary Key)
Name
Last Name
Username
Password
email

Closet

ClosetID (Primary Key)
UserID (Foreign Key)
ClosetName

Item

ItemID (Primary Key)
ClosetID (Foreign Key)
ItemName
Category
Color
PurchaseDate
useCount
imgSrc
Description
Season

Category

CategoryID (Primary Key)
CategoryName

RecycleBin

RecycleBinID (Primary Key)
ClosetID (Foreign Key)
ItemID (Foreign Key)
DateDeleted

Deliverable: ERD design

e) Stack Choices
What are the technologies you’re going to use to develop for your app. You need to think about:

Front-End REACT
Back-End (Rails / Express) Express preferred.
Database (Postgres)
img upload / processing : multer (express) && carrierwave, minimagick (rails)
Deliverable: Stack choices document

2. Project Setup
   To start off on the right foot, you’ll need a good project setup:

a) Git repo setup
Create a repo on GitHub and give access to all team members.

b) Project scaffold
If needed, you have to decide which boilerplate code you’re going to use for your project.

c) Database setup
You may need to create the database and the initial migration.

d) Seed file
You may need to create a seed file since the content of the database should never be part of your repo. Each team member will have to seed their local database.

Deliverable: Setup of your app

3. Project Workflow
   a) Project Communication
   We highly recommend that your group implements a daily stand up which will allow better communication and follow-up. You can appoint one member of your team to be the "Stand Up Master", or you can ask a mentor to help lead your stand up meetings. The stand up will allow to review:

What has been accomplished
What will you be working on
What hurdles are you facing
Deliverable: Daily stand up

b) Project Workflow
You need to take a few key decisions to ensure a smooth project workflow. Ideally, you should think about the following:

What are the project milestones: you need to create a list of the project milestones and specify what are the deadlines.
Git workflow: establish rules about how you’re going to manage your Git workflow. You can discuss it with a mentor if needed.
How to distribute teamwork: before distributing work, you might want to consider working together until you build the core of your app. Afterward, you need to think about how you will distribute the work among your team members.
Coding styles: consider establishing some coding guidelines to ensure consistency between team members.
Deliverable: Project milestones document

4. Project Development
   You should work on the development of your app according to your feature list and project milestones. You should not develop any new features beyond week 11 day 5, since you need to prepare for Demo Day.

Deadline: Week 11, day 5

5. Project Deployment
   You should have a production-ready local version of your app for Demo Day. Optionally, you might want to consider deploying your app on Railway.app (or elsewhere). However, you need to account for the extra time to deploy on Railway.app (or again, elsewhere).

a) Testing, bug fixing
Make sure you take time to test the functionalities of your app. You need to think about:

Testing, testing, testing
Fixing bugs
Refactoring your code
Cleaning up your code
Deadline: Demo Day minus 2

6. Project Presentation
   It’s important to take some time to structure the presentation of your app.

Who is the target audience:
You have 2 targets: Employers and the public. For prospective employers you should focus on what you’ve accomplished, highlight - your skills, the technologies you used. For the public, it’s more about the user experience.
You should have a script for the live demo. Optionally, you might want to consider using a power point.
Audio/video setup: it’s important that you check your setup to ensure that everything works.
Presentation practice: It’s important to practice before Demo Day. You should practice in front of a mentor so you can get some feedback.
Deadlines: - Practice Demo (with mentors): Demo Day minus 1 - Demo Day

Home component

## Nav Bar

Conponents
Logo
Menu Bar

Banner

  <h1>
  Image

Info

  <h2>
    <image>
    <p>
  </h2>

Button - Join Now
link to register

Footer
About
Meet the team


## stats to display in dashboard
Total number per category (count per category)
Brand stats (pie chart)
color count (pie chart)
season count (pie chart)
last item purchased (itemid, image, date)
