# Gatsby Simplefolio ⚡️ [![GitHub](https://img.shields.io/github/license/cobidev/gatsby-simplefolio?color=blue)](https://github.com/cobidev/gatsby-simplefolio/blob/master/LICENSE.md) ![GitHub stars](https://img.shields.io/github/stars/cobidev/gatsby-simplefolio) ![GitHub forks](https://img.shields.io/github/forks/cobidev/gatsby-simplefolio)

## A clean, beautiful and responsive portfolio template for Developers!

<h2 align="center">
  <img src="https://github.com/cobidev/simplefolio/blob/master/examples/example.gif" alt="Simplefolio" width="600px" />
  <br>
</h2>

## Features
✔️ Modern UI Design + Reveal Animations\
✔️ One Page Layout built with React\
✔️ Styled with Bootstrap v4.3 + Custom SCSS\
✔️ Fully Responsive\
✔️ Configurable color scheme\
✔️ Valid HTML5 & CSS3\
✔️ Load optimization with Gatsby\
✔️ Easy site customization\
✔️ Well organized documentation

To view a demo example, **[click here](https://gatsby-simplefolio.netlify.com/)**\
To view a live example, **[click here](https://cobidev.com/)**

---

## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites 📋

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.\
Also you need to have installed [Gatsby CLI](https://www.gatsbyjs.org/docs/quick-start/)

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
gatsby-cli@2.8.22 or higher
```

---

## How To Use 🔧

From your command line, clone and run Simplefolio:

```bash
# Clone this repository
$ git clone https://github.com/cobidev/gatsby-simplefolio

# Go into the repository
$ cd gatsby-simplefolio

# Remove current origin repository
$ git remote remove origin

# Install dependencies
$ npm install

# Start development server
$ gatsby develop
```

**NOTE**:
If your run into issues installing the dependencies, use this command:

```bash
# Install dependencies with all permissions
$ sudo npm install --unsafe-perm=true --allow-root

# Start development server
$ gatsby develop
```

Once your server has started, go to this url `http://localhost:8000/` and you will see the website running on a Development Server:

<h2 align="center">
  <img src="https://github.com/cobidev/simplefolio/blob/master/examples/example.png" alt="Simplefolio" width="100%">
</h2>

---

## Instructions:

### Step 1 - STRUCTURE

Go to `/src/template.html` and fill your information, they are 5 sections:

**Hero Section**

- On `.hero-title`, put your custom title.
- On `.hero-cta`, put your custom button cta.

```html
<!-- **** Hero Section **** -->
<div id="hero" class="jumbotron">
  <div class="container">
    <h1 class="hero-title" class="load-hidden">
      Hi, my name is <span class="text-color-main">John Doe</span>
      <br />
      I'm the Unknow Developer.
    </h1>
    <p class="hero-cta" class="load-hidden">
      <a class="cta-btn cta-btn--hero" href="#about">Know more</a>
    </p>
  </div>
</div>
<!-- /END Hero Section -->
```

**About Section**


**Projects Section**



**Contact Section**



**Footer Section**



### Step 2 - STYLES

Change the color theme of the website ( choose 2 colors to create a gradient ):

Go to `src/styles/abstracts/_variables.scss` and only change the values on this classes `$main-color` and `$secondary-color` to your prefered HEX color

```scss
// Defaut values
$main-color: #02aab0;
$secondary-color: #00cdac;
```

**NOTE**: I highly recommend to checkout gradients variations on [UI Gradient](https://uigradients.com/#BrightVault)

---

## Deployment 📦

Once you have done with your setup. You need to put your website online!

I highly recommend to use [Netlify](https://netlify.com) to achieve this on the EASIEST WAY

Please watch my step-by-step video tutorial to successfully upload your Simplefolio Website on Netlify!

**[WATCH NOW MY STEP-BY-STEP TUTORIAL FOR DEPLOYMENT](https://www.youtube.com/watch?v=soaG3GNSxJY)**

## Others versions made by the community 👥

[Simplefolio Ember.js](https://github.com/sernadesigns/simplefolio-ember) by [Michael Serna](https://github.com/sernadesigns)

## Technologies used 🛠️

- [Gatsby](https://www.gatsbyjs.org/) - Static Site Generator
- [GraphQL](https://graphql.org/) - Query language for APIs
- [React](https://es.reactjs.org/) - Front-End JavaScript library
- [Bootstrap 4](https://getbootstrap.com/docs/4.3/getting-started/introduction/) - Front-End UI library
- [Sass](https://sass-lang.com/documentation) - CSS extension language

## Authors

- **Jacobo Martinez** - [https://github.com/cobidev](https://github.com/cobidev)

## Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/2365af6f-820a-4fb8-83e6-69a66f686dfe/deploy-status)](https://app.netlify.com/sites/gatsby-simplefolio/deploys)

## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments 🎁

I was motivated to create this project because I wanted to contribute on something useful for the dev community, thanks to [ZTM Community](https://github.com/zero-to-mastery) and [Andrei](https://github.com/aneagoie)
