# Let's Decide!

![homescreen](https://user-images.githubusercontent.com/98512628/195449181-83d8f740-f5e1-45c4-8fe9-a055d050a561.png)

### Group Members:
* Yashaswi
* Omar
* Liam
* Aya

### Project Description:

<p align="justify">
Our project is called "Let's Decide" since it is about the user making an important decision. Essentially, a group of 4 people cannot decide on the art-style for their comic and it follows them "into" their mind - a forest - and they reach a crossroad where they have to choose an abstract or oil painting art-style. "Let's Decide" follows the conventions of a comic book, however we have adapted these conventions for the web, like having each panel adapt to the widescreen size of a webpage instead of gutters to separate.
</p>

<p align="justify">
At the end of each path when the user makes the choice, the final panels both agree that this method is not a good idea and we should start again! And the user is prompted to start again via a button *inside* the speech bubble. Basically, this causes the user to play again and try the different path, no matter which path they took which is a funny way of looking at how difficult it is to make simple decisions, that we just go round and round...
</p>

### Process:

<p align="justify">
Our group was tasked to create a 6 panel "interactive" comic using 2D software to create the content and html/css/javascript to put it on the web and incorporate the interactivity. When we sat down to discuss ideas, we decided on the interactivity first, and then came up with ideas for the comic's storyline. We wanted to have a pick your own path scenario at one point during the comic, which meant that the user will have to make a decision - so why not make the comic about making a decision between two things? We concluded with a very meta narrative that calls attention to the medium of the "comic" itself.
</p>

**Initial ideas written by our group on a shared google doc, the final idea was highlighted:**

![ideas](https://user-images.githubusercontent.com/98512628/195438758-68a1e8fa-d001-428d-8607-aa93f1f19034.png)

<p align="justify">
Using a tablet, we sketched rough panels that then gave a good insight for the whole group into what the final product would look like. Aspects like the parallax scroll zoom into the thought bubble and the two path buttons in the forest made it into our final comic which shows that we stuck to our plan and that we planned it well.
</p>

**Concept sketch for the panels with arrows showing the way we want the user to navigate it:**

![concept](https://user-images.githubusercontent.com/98512628/195437766-dbe8d63b-89da-4dc6-b599-787af405c995.png)

<p align="justify">
When it came to the code, we used the parallax scroll template from class and modified it to fit our needs. For each div, which individually takes up the dimensions of the screen, we added a template image from the internet that mirrored our storyboard. In that way, we can work on the code first and make everything funtion as we desired before continuing the artistic aspects of our project.
</p>

**Photos from internet used as a template for the comic, with added comments for ideas on speech bubbles and actions:**

![template](https://user-images.githubusercontent.com/98512628/195439217-fe65c995-2018-4a27-96b0-80623eee3586.png)

<p align="justify">
In addition to incorporating the visual nature of the panels, we also added sound. The first panel has classroom sounds on autoplay, which pauses once the user reaches the next panel div. Simultaneously, the sound of a spooky forets plays, and this was done in javascript by using the y position of the scroll as the window scrolls up or down. We also added audios to our final panels (the panels that show up after the user chooses a path) and these audios were selected based on what we thought matched the themes of the panels (abstract art vs. realistic medieval paintings). Additionally, we made the audios 8D to create a more realistic impact on the users who visited our web comic with headphones.  
</p>

<p align="justify">
One of the final things we added was a homescreen with a button that lets the user start the comic and also gives them a small teaser for what's to come. In the homescreen, an animation of floating shapes was added in order to make it a bit more dynamic and to match the abstract theme of the comic. The animation was created using Javascript setInterval() function that allows a certain function to be called over and over again in specific time intervals. The function that was used with setInterval() in our code was to change the position of the objects constantly so that it looked like they were floating from one side of the screen to the other.  
</p>

<p align="justify">
Talking about the panels, we used Adobe Photoshop to create the panels based on our initial concept sketches. We gathered available images (with no copyright) from the Internet and put them together in the form that we needed using Photoshop. Some elements in the panel were also created using HTML and CSS, like buttons. For example, for the fourth panel where we needed four people standing in the forest with two paths in front of them, each path with its own button to take the user to their chosen panel, we first found silhouette images for four people, then of the background with the paths, integrated them using Photoshop and finally used the code to add the buttons. 
</p>

**Image of the fourth panel of our web comic:**

![example](https://github.com/yashaswiim/lets_decide/blob/main/img/panel4.png)

### Reflection/Evaluation:

**Group Reflection:**

<p align="justify">
In overall reflection, it was somewhat challenging and mostly fun creating this web comic as part of the assignment. Most of the tasks were time-consuming, such as creating the panels and adding different animations to make the comic interactive and dynamic. However, we are happy and satisfied with the final version of the comic that we have right now. If we had more time, some of things that could have been included in this project are hand-drawn illustrations (to be able to make the panels suit better to our ideas), responsive web design (so that change in the size of screen in which the comic is viewed does not impact the user's experience on our website) and more variations of animations (so that the animations aren't repetitive). Nonetheless, the final working version of our comic and our website do meet the goals and expectations that we had when we started working on this project. We were able to create the look and feel as we had initially wanted. And we were also able to get our initial idea realized by the end, which was to show how someone can enter into a loop of going back and forth between the choices that they have as they try to make a decision in life, no matter how small the decision is.
</p>

**Personal Reflection for myself (Yashaswi):**

<p align="justify">
This assignment was a great learning experience for me. Especially because I worked on creating the panels using Photoshop, I learnt a lot more about creating and editing 2D images. I did not have much experience before with image editing, so this project was really a space for me to explore that. I was able to polish my skills in creating composited images to fit my specific needs (in this case, the needs of the project). Furthermore, I was also able to play around more with various tools within Photoshop and learned the right way of using them when working on 2D images. In addition to the panels, I also worked on integrating the sounds to the website. So, I was able to learn how to control sounds using Javascript based on scroll positions. I was able to play around with the various attributes of the <audio> tag in HTML and it was fun learning all of these. 
</p>
