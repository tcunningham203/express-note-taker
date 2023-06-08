# express-note-taker


## Description
Note Taker can be used to write and save notes using an Express.js back end, and will save and retrieve note data from a JSON file.

## Table of Contents
- [Link](#link)
- [Video](#video)
- [Usage](#usage)
- [Development](#development)
- [Credits](#credits)

## Link

This is a link to the application.



## Video

An instructional/demonstration video has been made to show how to use the application and what it can do. Click the screenshot to go to the youtube link, or click here: https://youtu.be/5dC3oSR8BCo

[![AppScreenshot1](public/assets/screenshots/screenshot.png?raw=true)](https://youtu.be/5dC3oSR8BCo "Demonstration Video")

The notes created in the video are the same notes featured on the deployed application.

## Usage

When you open the Note Taker, you are presented with a landing page with a link to a notes page. Click on the link to the notes page to view the notes.

For this deployed application, the page will already contain existing notes listed in the left-hand column, per the assignment instructions. They also act as an example for you to make your own. 

On the right, you can see empty fields to enter a new note title and the note’s text. After entering your new note's title and text, a Save icon appears in the navigation at the top of the page. The save icon looks like the classic floppy disk icon. When you click on the Save icon, the new note is saved and appears in the left-hand column with the other existing notes. 

Click on an existing note in the list in the left-hand column to get that note to appear in the right-hand column. You can then view the full text of the note.

When you click on the Write icon in the navigation at the top of the page, you are presented with the empty fields again. Use these fields to enter an additional note.

Lastly, you can delete a note by pressing the trash can icon next to the note you wish to delete. This action cannot be undone. 

## Development
In this section, I'll briefly discuss some of the challenges and successes with the project, as well as goals for the future.

It took a while to get going on this one, because I wasn't quite sure how to do the routing. I was eventually able to use the mini project from this module as the basis for the majority of the content. The GET and POSTing code worked for both projects, so I was able to insert it easily. 

In the future, I would consider adding a modal popup to the screen asking if they are sure about deleting. As of right now, deleting cannot be undone, so I think this would be a good feature to add in case of a mis-click.

## Credits

The code featured in the second commit "Starter Code" was taken from the following repo per the assignment instructions: https://github.com/coding-boot-camp/miniature-eureka

I used the mini project from Module 11 for guidance on how everything should look. In particular, the fsUtils.js file is ripped directly from that. Additionally, the "Get" and "Post" routes were also taken directly from there. In that situation, the contents were modified slightly to fit this project.

I used various learning resources like Stack Overflow and W3 schools to help with random questions I had, in particular the delete fuction.  

