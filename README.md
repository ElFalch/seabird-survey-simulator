# Seabird Survey Simulator

The purpose of this website is to provide training for those looking to improve their seabird survey skills and point users in the direction of relevant learning resources. 

## Contents 

1. <details open>
    <summary><a href="#ux">UX</a></summary>

    <ul>
    <li><details>
    <summary><a href="#goals">Goals</a></summary>

    - [Target Audience](#target-audience)
    - [User Stories](#user-stories)

    </details></li>

    <li><details>
    <summary><a href="#visual-design">Visual Design</a></summary>

    - [Colours](#colours)
    - [Fonts](#fonts)
    - [Icons](#icons)
    - [Images](#images)

      </details></li>

    </ul>

</details>

2. <details open>
    <summary><a href="#page-elements">Page Elements</a></summary>

    <ul>
    <li><details>
    <summary><a href="#all-pages">All Pages</a></summary>
    </details></li>

    <li><details>
    <summary><a href="#home-page">Home Page</a></summary>

    - [Main section](#main-section)
    - [Footer section](#footer-section)

      </details></li>

    <li><details>
    <summary><a href="#game-page">Game Page</a></summary>

    - [Landscape mode message](#landscape-mode-message)
    - [Main section](#main-section)
    - [Footer section](#footer-section)
    
      </details></li>

    </ul>
    </details>


3. <details open>
    <summary><a href="#testing">Testing</a></summary>

    <ul>

    <li><details>
    <summary><a href="#validation">Validation</a></summary> 

    - [HTML Validation](#html-validation)
    - [CSS Validation](#css-validation)
    - [JavaScript Validation](#javascript-validation)

    </details></li>

    <li><details>
    <summary><a href="#automated-testing">Automated Testing</a></summary>

    - [Lighthouse Testing](#lighthouse-testing)
    - [Wave Accessibility Testing](#wave-accessibility-testing)

    </details></li>

    <li>

    <summary><a href="#manual-testing">Manual Testing</a></summary>

    </li>

    <li>

    <summary><a href="#try-catch-statements">Try Catch Statements</a></summary>

    </li>

    </li>
</ul>
</details>

4. <details open>
    <summary><a href="#deployment">Deployment</a></summary>
    <ul>
    <li>

    - [Forking the Github Repository](#forking-the-github-repository)
    - [Cloning Your Repository to Visual Studio Code](#cloning-your-repository-to-visual-studio-code)
    - [Deploying Your Repository to GitHub Pages](#deploying-your-repository-to-github-pages)

    </li>
</ul>

</details>

5. <details open>
    <summary><a href="#attributions">Attributions</a></summary>

    <ul>

    <li>

    - [Frameworks Used](#frameworks-used)
    - [Libraries Used](#libraries-used)
    - [Other Tools Used](#other-tools-used)
    - [Code From External Sources](#code-from-external-sources)
    - [Images](#images)

</li>

</ul>

</details>


# UX 

## Goals

### Target Audience 

- Seabird enthusiasts looking to improve their ID skills. 

- Those looking to join seabird surveys want to learn survey methodology.

### User Stories

User stories can be found [here](https://github.com/users/ElFalch/projects/3/views/1).

- These user stories include some future ideas (labelled as "wont-have"). 


## Visual Design 

### Colours

![Seabird Survey Simulator colour palette](https://github.com/ElFalch/seabird-survey-simulator/blob/main/assets/images/colour-palette/seabird-survey-simulator.png "Seabird Survey Simulator colour palette")

Colours used reflect those in the image of the boat, creating an immersive gaming experience. Black, white and bright blue were also used to make buttons and text stand out, making the website easier to use whilst being complimentary with the main colour scheme. 

Green and red were used for the correct and incorrect messages shown after form submission. These colours have a high contrast with the others used in this project, making the game more user friendly, but do not feature in the main colour palette as they are only shown between questions/ rounds. 

### Fonts 

- The heading font was chosen for it's retro-futuristic yet clear style, giving users the feeling that they are playing a vintage video game whilst being easy to read. 

- The main font was chosen for its hand-written look, adding to the feeling of experiencing a real survey where data is recorded using paper and pencil. This font also has a and neat appearance and is easy to read even at small sizes, increasing the likelihood that users will understand the material provided. 

### Icons 

Icons are from the [FontAwsome](https://fontawesome.com/v4/icons/) icon library. 

- A book icon was used for the index page navbar link, to reflect that this page contains information, making it easier for users to find everything they need to play the game. 

- A boat icon was used for the game page navbar link, to demonstrate that this is where the game is, as the simulated survey takes place on a boat. 

- A pencil icon was used at the beginning of the message telling users to record what they see in the form below, hilighting that this action is needed to progress in the game. 

- A gaming controller icon was used to highlight the index page message explaining that game rounds alternate continuosly. 

### Images 

Game Page:  

- An image of a dorsal view of a moving boat has been used as the central image for the game. This reflects the setup of a real life survey, giving users survey experience and makes it easy to tell which side of the boat bird images are on. 

- A large amount of bird images have been used for the game. Their size has been reduced as much as possible to allow for fast loading times whilst maintaining the clarity needed for the idenfication of species. Numbers of birds in each image vary between 1 and 3 and effort has been taken to demonstrate any variability in plumage which may occur. 

Index page: 

- An attractive image of an observer looking out to sea from a boat has been used for the BTO code card, attracting users to the linked resource. 

- An attractive image of multiple seabird species has been used for the spp identification card, attracting users to the linked resource. 

- The same boat image used in the game is used for the boat side card, reminding users of this aspect of the game and to follow the link provided if they ened more information. 


# Page Elements 

## All Pages 

Navbar: The Bootstrap navbar contains links to the index and game pages of the site and has the Seabird Survey Simulator logo in its brand. The navbar links collapse down to a burger icon with a dropdown menu on smaller decies.

## Home Page

The index page is titled "Info" and is intended to provide game instructions and information to help users answer game questions correctly. 

## Main section

A large heading, one introductory paragraph and two small sections of text that explain how to play the game along with a button that links to the game page.

![Index Page main section](https://github.com/ElFalch/seabird-survey-simulator/blob/main/assets/images/feature-images/index-page/how-to-play.png)

## Footer section
 
A large heading and Bootstrap cards arranged in a responsive grid that provide links to useful resources along with attractive images.

![Index Page footer section](https://github.com/ElFalch/seabird-survey-simulator/blob/main/assets/images/feature-images/index-page/useful-links.png)

## Game Page

The game involves the continuous repetition of two rounds in which users have to record information about either sitting or flying bird images on either side of a boat image. Due to the need for two clear images to be displayed in one row, a minimum device width of 768px is required. 

### Landscape mode message

If the game is opened on a mobile device in portrait mode, the only visible element is a message asking users to turn to landscape mode.

![Game page landscape mode message](https://github.com/ElFalch/seabird-survey-simulator/blob/main/assets/images/feature-images/game-page/turn-to-landscape.png)

### Main section

Contains three Bootstrap columns, the middle of which is filled with an image of a boat. Bird images, messages and buttons periodically appear in the left and right hand columns as users interact with the game.

1. When the game page is first opened, the only visible game elements are the central boat image and a start button.

![Game page start](https://github.com/ElFalch/seabird-survey-simulator/blob/main/assets/images/feature-images/game-page/start.png)

2. When the start button is clicked, the sitting bird round begins. This consists of random images of birds sitting on the water, displayed one at a time on random sides of the boat image along with a message telling you to use the form below to record information. 

![Game page sitting bird image](https://github.com/ElFalch/seabird-survey-simulator/blob/main/assets/images/feature-images/game-page/sitting-bird-image.png)

3. When the next button in the footer section is clicked, a new randomly selected image on a random side of the boat will replace the first one. 

![Game page sitting bird image](https://github.com/ElFalch/seabird-survey-simulator/blob/main/assets/images/feature-images/game-page/sitting-bird-next.png)

4. When the next button in the footer section is clicked after the number of form submissions is above 4, the results for the sitting bird round will be displayed along with a next round button. 

![Game page sitting bird image](https://github.com/ElFalch/seabird-survey-simulator/blob/main/assets/images/feature-images/game-page/next-round.png)

5. When the next round button is clicked, steps 1-4 will repeat but with images of flying birds. 

![Game page sitting bird image](https://github.com/ElFalch/seabird-survey-simulator/blob/main/assets/images/feature-images/game-page/flying-bird-image.png)

6. When step 5 is reached again, steps 1-4 will repeat but with images of sitting birds.  

### Footer section

Contains a header, answers form, messages and buttons which appear, disappear and change as users interact with the game.  

1. A form for selecting the BTO species code, number and boat side of birds from dropdown menus appears when users press the start button. 

![Game page sitting bird form](https://github.com/ElFalch/seabird-survey-simulator/blob/main/assets/images/feature-images/game-page/sitting-bird-form.png)

3. If information is entered incorrectly, when users press the submit button, the dropdown menus will freeze and they will be presented with an incorrect message which refreshes the form. 

![Game page incorrect answer](https://github.com/ElFalch/seabird-survey-simulator/blob/main/assets/images/feature-images/game-page/sitting-bird-incorrect.png)

2. If information is entered correctly, when users press the submit button, the dropdown menus will freeze and they will be presented with a correct message and a next button. 

![Game page correct answer](https://github.com/ElFalch/seabird-survey-simulator/blob/main/assets/images/feature-images/game-page/sitting-bird-correct.png)

3. When the next button is pressed, the form will refresh until the number of submissions is above 4, when it will be hidden until the next round button in the main section is clicked. 

4. When the next round button in the main section is clicked, the flying bird round form will be displayed, which works in the same way as the sitiing bird round form except it does not have a boat side dropdown. 

![Game page flying bird form](https://github.com/ElFalch/seabird-survey-simulator/blob/main/assets/images/feature-images/game-page/flying-bird-form.png)

# Testing

## Validation 

### HTML Validation

The HTML for each page was validated used the [W3C Markup Validator](https://validator.w3.org/). No errors or warnings were found for the index page, however for the game page, errors occured because of empty src values for the port and starboard bird images. As the game is played the inner html of these images is filled and these errors disappear.

| Page          | Result                                                                                                                                                |   
| ------------- |:-----------------------------------------------------------------------------------------------------------------------------------------------------:| 
| index.html    |![Index Page HTML validation](https://github.com/ElFalch/seabird-survey-simulator/blob/main/assets/images/testing-images/validation-images/html-validation/index-page-validation.png) | 
| game.html     |![Game Page HTML validation](https://github.com/ElFalch/seabird-survey-simulator/blob/main/assets/images/testing-images/validation-images/html-validation/game-page-validation.png)  |

### CSS Validation

The CSS stylesheet was validated using [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

| Summary         | Result                                                                                                                                                |   
| --------------- |:-----------------------------------------------------------------------------------------------------------------------------------------------------:| 
| No errors found |![Seabird Survey Simulator CSS validation](https://github.com/ElFalch/seabird-survey-simulator/blob/main/assets/images/testing-images/validation-images/css-validation/css-validation.png)   | 
| Warnings are the result of Google fonts and css prefixes being used and do not present any issues |![](https://github.com/ElFalch/seabird-survey-simulator/blob/main/assets/images/testing-images/validation-images/css-validation/css-warnings.png)|

### JavaScript Validation 

The JavaScript for this project was validated using [JSHint](https://jshint.com/). No errors or warnings were found.

![](https://github.com/ElFalch/seabird-survey-simulator/blob/main/assets/images/testing-images/validation-images/js-validation/js-validation.png)

## Automated Testing 

## Lighthouse 

- Automated testing of the deployed site for performance, accessibility and best practises was conducted using the [Lighthouse tool](https://developer.chrome.com/docs/lighthouse) within Chrome DevTools.  

#### Lighthouse Report Summaries

The total score for performance was 74% for the index page and 99% for the game page. The total score for accessibility and best practices was 100% for both of the pages. 

| Page          | Lighthouse Report Summary                                                                                                                             |   
| ------------- |:-----------------------------------------------------------------------------------------------------------------------------------------------------:| 
| index.html    |![Index Page Lighthouse Report Summary](https://github.com/ElFalch/seabird-survey-simulator/blob/main/assets/images/testing-images/lighthouse-testing/index-lighthouse-summary.png)                       | 
| game.html     |![Game Page Lighthouse Report Summary](https://github.com/ElFalch/seabird-survey-simulator/blob/main/assets/images/testing-images/lighthouse-testing/game-lighthouse-summary.png)                     |


#### Lighthouse performance report diagnostics

The main negative influence upon Lighthouse performance scores for this site was the large size of some bird images. However, images were optimised and their size was reduced as much as possible whilst allowing users to easily identify the species depicted. Given the importance of clear images to the game, and that each page loads fairly quickly with an overall performance score of atleast 70%, it was decided to not reduce the size of the images any further. 

Other significant negative influences upon Lighthouse performance scores were related to the loading of external libraries, so couldn't be resolved without removing the content of the website, something which wasn't attempted due to the already high overall performance scores of each page. 

| Page          | Lighthouse Report Diagnostics                                                                                                                         |   
| ------------- |:-----------------------------------------------------------------------------------------------------------------------------------------------------:| 
| index.html    |![Index Page Lighthouse Report Diagnostics](https://github.com/ElFalch/seabird-survey-simulator/blob/main/assets/images/testing-images/lighthouse-testing/index-lighthouse-diagnostics.png)                   | 
| game.html  |![Game Page Lighthouse Report Diagnostics](https://github.com/ElFalch/seabird-survey-simulator/blob/main/assets/images/testing-images/lighthouse-testing/game-lighthouse-diagnostics.png)                 |

## Wave Accessibility 

Further automated testing for the accessibility of the site was conducted using the [Wave Web Accessibility Evaluation Tool](https://wave.webaim.org/).

#### Redundant link alerts

Both page reports contained alerts relating to redundant links to the home page, due to the navbar brand and navbar menu both containing links to the home page. This alert could be resolved by removing the link from the navbar brand, but this link represents an easy and intuitive way for users to find the home page, so this alert was ignored. 

There was an additional redundant link alert referring to the button in the main section of the home page linking to the game page in addition to the navbar link. This alert could be resolved by removing the button, but this button represents a clear way for users to find the game page after reading the instructions, so this alert was ignored. 

#### Possible heading alerts

The index page report contained alerts relating to possible headings in the main text of the cards due to this text being brief, however these are not headings, so these alerts were ignored. 

The game page report also contained an alert relating to a possible heading within the next button, however, this is not a heading so this alert was also ignored. 

#### Underlined text alerts 

The game page report contained an alert relating to the underlined header for the answers form footer. There is a risk that the footer header could be confused with a link when underlined, however the underline provides a clear visual distinction between the form and the header, so it was retained. 

#### Wave accessibility Report Summaries

| Page          | Wave Report Summary                                                                                                                             |   
| ------------- |:-----------------------------------------------------------------------------------------------------------------------------------------------------:| 
| index.html    |![Index Page Wave Report Summary](https://github.com/ElFalch/seabird-survey-simulator/blob/main/assets/images/testing-images/wave-testing/index-wave-summary.png)                                   | 
| game.html  |![Game Page Wave Report Summary](https://github.com/ElFalch/seabird-survey-simulator/blob/main/assets/images/testing-images/wave-testing/game-wave-summary.png)                                 |

#### Wave accessibility Report Details

| Page          | Wave Report Details                                                                                                                             |   
| ------------- |:-----------------------------------------------------------------------------------------------------------------------------------------------------:| 
| index.html    |![Index Page Wave Report Details](https://github.com/ElFalch/seabird-survey-simulator/blob/main/assets/images/testing-images/wave-testing/index-wave-details-1.png)                                 | 
| index.html    |![Index Page Wave Report Details](https://github.com/ElFalch/seabird-survey-simulator/blob/main/assets/images/testing-images/wave-testing/index-wave-details-2.png)                                 |
| game.html  |![Game Page Wave Report Details](https://github.com/ElFalch/seabird-survey-simulator/blob/main/assets/images/testing-images/wave-testing/game-wave-details.png)                               | 


## Manual Testing 

Manual testing was carried out to ensure all links, forms and JavaScript elements of the game worked as intended. Device mode in [Chrome DevTools](https://developer.chrome.com/docs/devtools) was used to ensure that the design was responsive and that features were fully functional across all device sizes. 


## Try Catch Statements 

As an extra measure to ensure functions worked as intended, try catch statements were implemented within Javascript functions to produce error messages if errors occured. 


# Deployment 

## Forking the GitHub Repository

To create your own copy of a GitHub repository that you can edit, you must fork the repository using the following steps: 

1. Open the repository you want to fork. 

2. Click the fork button in the top-right corner of the screen. 

3. Choose a new name for the repository, if you wish. 

4. Click create fork. 

## Cloning your Github Repository to Visual Studio Code

1. In your computer's file system, create a folder for the new project within the folder containing your VS Code projects. 

2. Open the folder for the new project in VS Code and open a new terminal. 

3. Navigate to your GitHub dashboard and open the repository you want to clone.   

4. click on the code dropdown menu and copy the URL. 

5. In the VS code terminal, enter git clone and paste the URL with a space and full stop at the end. For example: 

git clone https://github.com/ElFalch/seabird-survey-simulator.git .

6. You should now see the repository files on the left hand side of the screen and be able to push changes to Git. 


## Deploying Your Repository to GitHub Pages

The steps to deploy to GitHub pages are as follows:

1. In the specific GitHub repository page, select the "Settings" tab in the menu at the top of the screen.
2. Select the "pages" tab on the left-hand side of the screen.
3. Find the "Build and Deployment" section and select "main" from the left-most dropdown menu of the "Branch" sub-section then select "save" **

** Note - deployement may take a few minutes. 

Once deployed, the steps to access your live site are as follows:  

1. In the specific GitHub repository page, select the "Code" tab in the menu at the top of the screen.
2. Refresh the page, then select "Deployments" in the bottom-right corner of the screen
3. Select the link at the top of the screen to open the deployed site. 


# Attributions

## Frameworks Used

- [Bootstrap 5](https://getbootstrap.com/docs/5.3/getting-started/introduction/) was used for basic elements and styles. 

## Libraries Used

- Fonts used were from [Google Fonts](https://fonts.google.com/)

- Icons used were from [Font Awsome](https://fontawesome.com/v4/icons/)

## Other tools used

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) was used to check the contrast between each of the colours used in the project. 

- Favicons were generated by [favicon.io](https://favicon.io/)

- [Autoprefixer](https://autoprefixer.github.io) to add css prefixes required for consistency across browsers.

- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) messages were used to describe each stage of the development of this project in a clear, consistant format. 

## Code from external sources

- General game layout, functions and styling including systems used to get html elements in JavaScript by ID, hide and reveal elements and listen for JS events taken from [Web Dev Simplified Build a Quiz App With JavaScript Tutorial](https://www.youtube.com/watch?v=riDzcEQbX6k)

- General structure and code for dropdown menu contents section of ReadMe taken from the GitHub repository [horizon-photo](https://github.com/Ri-Dearg/horizon-photo/tree/main)

- Docstring comment format taken from [here](https://jsdoc.app/about-getting-started)

- try catch statement format taken from [here](https://www.w3schools.com/jsref/jsref_try_catch.asp)

## Images

boat.webp: [Photo by Josh Sorenson]("https://www.pexels.com/photo/bird-s-eye-photography-of-boat-570987/")

observer.webp: [Photo by Tolga Ahmetler]("https://www.pexels.com/photo/serene-istanbul-ferry-ride-at-sunset-30540273/")

seabirds.webp: Photo by [Nicolas DC]("https://unsplash.com/@nicolasdc20?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash") on [Unsplash]("https://unsplash.com/photos/three-ducks-on-sea-lMscASxB-NU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>)

### Sitting Birds

cormorant.webp: Photo by [Santiago Lacarta]("https://unsplash.com/@lacarta?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash")>on [Unsplash]("https://unsplash.com/photos/black-duck-on-water-during-daytime-egn655y_D5o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash")>

cormorant2.webp: Image by [Thanasis Papazacharias]("https://pixabay.com/users/papazachariasa-12696704/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6142893") from [Pixabay]("https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=6142893")

european-shag.webp: [Photo by Ivan]("https://www.pexels.com/photo/close-up-of-a-european-shag-in-the-water-18419539/")

fulmar.webp:  Photo of Northern Fulmar uploaded from [iNaturalist]("https://www.inaturalist.org/")

guillemot.webp: Photo by [Doncoombez]("https://unsplash.com/@coombez?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash") on [Unsplash]("https://unsplash.com/photos/a-bird-floating-on-top-of-a-body-of-water-tvaZhFq4C9I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash") 

guillemot3.webp: Photo by Ragnhild & Neil Crawford. Licensed under the [Creative Commons Attribution-Share Alike 2.0 Generic license](https://creativecommons.org/licenses/by-sa/2.0/deed.en). This image has been cropped for the purposes of this project. 

kittiwake2.webp: Kittiwakes (Rissa tridactlya), Westing by Mike Pennington. Licensed under the [Creative Commons Attribution-Share Alike 2.0 Generic license](https://creativecommons.org/licenses/by-sa/2.0/deed.en).

puffin.webp: Photo by [Mark Olsen]("https://unsplash.com/@markolsen?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash") on [Unsplash]("https://unsplash.com/photos/black-and-white-bird-on-water-during-daytime-PCGC-9qW3o4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">)

razorbill.webp: Photo by [Nicolas DC]("https://unsplash.com/@nicolasdc20?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash") on [Unsplash]("https://unsplash.com/photos/three-ducks-on-sea-lMscASxB-NU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>)
      
razorbill2.webp: Photo by [Anastasiya Dragun]("https://unsplash.com/@sunny_kote?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash") on [Unsplash]("https://unsplash.com/photos/a-black-and-white-bird-floating-on-top-of-a-body-of-water-qthrJinqNRk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash")

### Flying Birds

cormorant3.webp: Photo by [Odd Rune Falch]("https://www.pexels.com/photo/black-and-yellow-bird-flying-over-the-water-11682093/")

cormorant4.webp: Photo by Rohit Sharma. Licensed under the [Creative Commons Attribution-Share Alike 4.0 International license](https://creativecommons.org/licenses/by-sa/4.0/deed.en). This image has been cropped for the purposes of this project.

european-shag2.webp: Photo by [Odd Rune Falch]("https://www.pexels.com/photo/black-and-yellow-bird-flying-over-the-water-11682093/")

european-shag3.webp: Photo by Marton Berntsen. Licensed under the [Creative Commons Attribution-Share Alike 3.0 Unported license](https://creativecommons.org/licenses/by-sa/3.0/deed.en). This image has been cropped for the purposes of this project.       

gannet.webp: Photo by [Wolfgang Wendefeuer]("https://www.pexels.com/photo/a-flying-northern-gannet-12827110/")

guillemot2.webp: Image by [danny moore]("https://pixabay.com/users/dannymoore1973-1813225/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1119282") from [Pixabay]("https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1119282")

herring-gull.webp: Image by [Michael Kleinsasser]("https://pixabay.com/users/mike_68-10359383/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4349143") from [Pixabay]("https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4349143")

kittiwake.webp: Photo by [Fiona Trewartha]("https://www.pexels.com/photo/photo-of-a-flying-seagull-19825875/")

puffin2.webp: Photo by [Tyler Jamieson Moulton]("https://unsplash.com/@moultoty?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash") on [Unsplash]("https://unsplash.com/photos/a-couple-of-birds-flying-over-a-body-of-water-zL1_C4E91-E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash")