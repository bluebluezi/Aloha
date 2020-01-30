# Project 1 Aloha Homepage

The project is a online store layout for an apparel company, its structure is coded with HTML5, CSS, and Javascript.


## Built With

* [Flickity](https://flickity.metafizzy.co/) - Used to generate carousels in the "Featured" area
* [Font Awesome](https://fontawesome.com/) - Used to generate social media icons
* [Transfonter](https://transfonter.org/) - Used to generate @font-face for custom font support


## Author

* **Johnny Ng** - [BlueBluezi](https://github.com/bluebluezi)

## Personal Learnings

Developing website is a complex task as every single template could be implemented a variety of ways. Keeping in mind the diversity of screen sizes and the issue of scaling, I have mainly used vw and vh as the units for sizing elements and it is a power tool to quickly create the website layout within a short time frame. However through online readings, I found that the viewport units are relatively new and would not be properly supported in an outdated browser. Instead, it is better to try to use em, rem and %, especially for elements that scale according to text size (ie. paddings, margins). That would also allow elements scale properly without shifting the layout (due to differential rates of scaling).

It is also important to gain experience by designing more website to gain exposure to more properties, built-in functions, etc, to see how they are used. I discovered a useful function :calc() (not used in final design) for calculating values and it is CRUCIAL, to style the formula with a space before AND after a mathematical operator for this to work properly. Another instance is to know the difference of object-fit and background-size property. The former is for explicitly declared items in the html while the latter is usable for a background on a container. There shall be many more intricacies to discover.

Another unused design solution to force containers to be a square, is to create a pseudo class for the container. It involes creating, in css, a "'"element-name:after" with its content to be an empty string, display:block, and padding-bottom:100%. Due to the fact that bottom( or top) padding calculation is based off of the width, this will create an invisible item entirely made up of padding. (https://codepen.io/kristencodes/pen/BopVyB).

Side note, ::after creates a pseudo element that is generated AFTER the element proper (it stacks on top)



## Acknowledgments

* Stack Overflow Community
* [PurpleBooth](https://github.com/purplebooth) for her easy to understand ReadMe template

##Future iteration proposal
	- modify existed sizing units to prioritize em, rem, and %.
	- animated logo.
	- add highlighting effects for when hovering over shop grid and feature sections
