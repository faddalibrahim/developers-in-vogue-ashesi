# DIV - Ashesi

## Week 1

- HTML : meaning and significance of each word

```html
<!-- information to our browser about what document type to expect -->
<!DOCTYPE html>
<!-- lang defines the natural language of our page-->
<html lang="en">
  <!-- extra info and resources our pages needs (css links, fonts, metadata etc) -->
  <head>
    <!-- make sure we can render almost all characters and symbols in the world -->
    <meta charset="UTF-8" />
    <!-- for internet explorer support -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- scale to fit different screen sizes -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Title of the document, displayed in the tab view -->
    <title>DIV</title>
  </head>
  <!-- Where our website/webapp display goes -->
  <body></body>
</html>
```

### Extra Resources

[on use of lang attribute](https://adrianroselli.com/2015/01/on-use-of-lang-attribute.html)  
[lang attribute](https://www.matuzo.at/blog/lang-attribute/)  
[meta charset](https://www.w3schools.com/tags/att_meta_charset.asp)

- CSS -> meaning and significance of each word

  - internal css
  - linking to external stylesheets

- JS
  - internal javascript
  - linking to external javascript files
  - why we don't link scripts in the header

## Week 2

[flexboxfroggy](https://flexboxfroggy.com/)

## Week 3

### Git & Github

- [x] Download and install [gitbash](https://git-scm.com/downloads)

- [x] Create a new folder

- [x] Open newly created folder in vscode

- [x] Launch your terminal from the top of your vscode as shown below

![terminal](assets/terminal.png)

- [x] By default its going to be **powershell**. Change it to **git bash** by clicking on the dropdown and selecting **git bash** in the dropdown list.

![changing to git bash](assets/terminal-2.png)

---

#### 1. Tell git we want to track changes in our project folder ( we do this once for every new project )

In the terminal,

```py
git init
```

Create a new file (.html or .py) and fill it with some content

---

#### 2. Checking the status of our project folder

```py
git status
```

Infomation about the state of the files in the folder should be displayed. The file previously created would be displayed and colored red, implying that its been modified but yet to be moved to the **staging area**

_Staging Area is an intermediary stage for changes we plan to commit_

---

#### 3. Adding our file to the staging area

```py
git add .
```

---

#### 4. Checking the status of our project folder again ( after adding the file to the staging area )

```py
git status
```

This time around the name of our file should be shown in green, implying that its in the staging area and ready for commit.

---

#### Time to commit

```py
git commit -m "type your commit message here"

# for example, if the change we made was to add a new function to calculate sum of odd numbers

git commit -m "add function to calculate sum of odd numbers"

```

---

If you face an error about identity, do this one after the other
( its for git to track who is making the commit )

```py
# configuring your username
git config --global user.name "your mame"
example : git config --global user.name wendy

# configuring your email
git config --global user.name "your email"
example: git config --global user.name wendy@gmail.com
```
