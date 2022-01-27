# Maskottchen

Maskottchen webpage

## The project

This is the webpage for a dog grooming center and store.

It shows who they are and the services they provide along with a way to contact them.

## Development

### Technologies

I used four technologies to develop this webpage.

- HTML:
  It is used for the webpage structure keeping in mind semantically correct HTML.
  I did two HTML files because the grooming center is located in San Miguel de Allende and it needs to be both in Spanish and English.(Here is only the webpage in Spanish but when it is live on its own domain it will link to both languages)

- CSS:
  It is used to style and animate some of the elements of the webpage and to ensure responsiveness with different devices.

- Javascript:
  I used it to modify elements like the navbar when on a mobile device, to handle the form submit and to map images and data to later display them with React.

- React:
  I used React with hooks, it is used for two sections of this webpage, the reviews and the gallery, so we can keep adding reviews or images to the JSON and it displays all of them in their respective containers

- Others:
  I used gsap for scrolling animations

### Challenges

I faced a few challenges for this webpage in different aspects:

- Design

  - I had some trouble with getting the right design and the right colors for the webpage so they work together and look friendly and professional at the same time.
  - I had to resize and change the format of the pictues to increase performance.

- Coding
  I hadn't handled the submit part of the form until this project, I used axios along with the website Formsubmit.co to solve this.

### What I would do different if I do it again

- I would get the right design and pictures down and ready first so building up the site takes less time.
- I would use useContext hook to handle the languages
