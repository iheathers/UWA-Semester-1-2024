The first assessment for CITS5505 is to do some basic research on the history of the web, and particularly the humble hyperlink and present your research in a simple website demonstrating the use of **HTML5, CSS3, and JavaScript. Bootstrap and JQuery may be used, but customised CSS** is required to give your site a distinctive feel.

Hyperlinks are a core feature of the original HTML specification and have powered some of the web’s great innovations, including Wikipedia and Google’s page rank algorithm. Although hyperlinks predate the web, **hypermedia** as the engine of application state was implicit in the original conception of the world wide web and HTML’s href attribute inside the anchor tag enabled for people to interact with information. Recent innovations, such as single page applications, mobile applications and social media are changing the way we use hyperlinks, perhaps undermining hyperlinks and the user autonomy they enable. **Students should research the history of HTML and hyperlinks in the context of the web, identifying key innovations and applications, a basic overview of the architecture of HTTP requests, including the related technologies.**

Your website should consist of three pages or sections:
1. One section should 
- [ ] describe the concept of Hyperlinks 
- [ ] and provide local examples, describing how they are implemented in the context of both the web-developers and browsers (i.e. as anchor tags and HTTP requests). 
- [ ] It should be about 1000 words of content, but interactive examples, including AJAX, and pictures and encouraged.

2. One section should describe the history of hyperlinks, identifying the key technologies and applications and the evolving use of hyperlinks in both presentation and organisation of material. Again, creative use of styles, interaction, media and reactive presentations are encouraged.

3. The final section should give a brief biography of the author, including a picture. It should be presented as a curriculum vitae, and is expected to use advanced HTML5, CSS3 and JavaScript to promote yourself, and introduce yourself to the teaching team.

### History of Web - Hyperlink

- title - A brief history of hyperlink
- MAYBE ADD THE RENDERer / playground if possible
- Create a figma/wireframe design once the research is complete
- using iframe/ video tags
- can include ajax to see how the interaction is done with hyperlink
- use a link to your linkedin and github as a demo on final section

References: 


Basics and Advanced references - different section 

https://www.freecodecamp.org/news/what-is-a-hyperlink-definition-for-beginners/

hpyerlink specification  - https://www.w3.org/MarkUp/html-spec/html-spec_7.html
https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_are_hyperlinks

https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_are_hyperlinks

https://www.w3.org/TR/html4/struct/links.html

https://dev.w3.org/html5/spec-LC/links.html

https://html.spec.whatwg.org/multipage/links.html


https://html.spec.whatwg.org/multipage/
https://html.spec.whatwg.org/multipage/semantics.html#the-link-element

https://www.freecodecamp.org/news/what-is-a-hyperlink-definition-for-html-link-beginners/


- in linkedin and resume add your contribution to open source project
- 
- 
- ----gitk
- git help status
- 
- 
- https://www.atlassian.com/git/tutorials/gitk#:~:text=Gitk%20is%20a%20graphical%20repository,it%20portable%20across%20operating%20systems.
- 
- 
- 
- 
- 
- 
- 



### First Section
- Describe Concept of hyperlinks
- provide local examples, describing how they are implemented in the context of both the web-developers and browsers (i.e. as anchor tags and HTTP requests).
- should be about 1000 words of content, but interactive examples, including AJAX, and pictures and encouraged.

**Concept of Hyperlinks:**

Hyperlinks, also known simply as links, are fundamental elements of the World Wide Web that allow users to navigate between different web pages or resources. They serve as connectors between various pieces of content, enabling seamless browsing experiences and facilitating the exploration of information across the internet. Hyperlinks play a crucial role in the interconnectedness of the web, empowering users to access a vast array of resources with just a click.

**Implementation in Web Development:**

In the context of web development, hyperlinks are typically implemented using HTML anchor tags (`<a>`). These tags contain the `href` attribute, which specifies the destination URL that the hyperlink points to. Web developers use anchor tags to create clickable elements within web pages, allowing users to navigate to other pages, websites, or resources.

Here's a simple example of how hyperlinks are implemented in HTML:

```html
<a href="https://www.example.com">Visit Example</a>
```

In this example, clicking on the text "Visit Example" would direct the user to the website specified by the URL `https://www.example.com`.

Additionally, hyperlinks can be styled using CSS to enhance their visual appearance and provide feedback to users when hovering over or clicking on them. This styling can include changes in color, underlines, or animations to make hyperlinks more visually appealing and interactive.

**Implementation in Browsers:**

From the perspective of web browsers, hyperlinks trigger HTTP requests to retrieve the content associated with the destination URL. When a user clicks on a hyperlink, the browser initiates an HTTP request to the server hosting the linked resource. The server responds with the requested content, which is then rendered and displayed to the user within the browser window.

Browsers also provide various features and functionalities related to hyperlinks, such as:

1. **Tabbed Browsing:** Modern web browsers often support tabbed browsing, allowing users to open multiple web pages simultaneously in separate tabs. Hyperlinks can be opened in new tabs, enabling users to navigate between different pages without losing their place in the current browsing session.

2. **History Management:** Browsers maintain a history of visited web pages, allowing users to revisit previously accessed content through hyperlinks. Users can navigate backward and forward through their browsing history using built-in browser controls or keyboard shortcuts.

3. **Bookmarking:** Hyperlinks can be bookmarked or saved for future reference, allowing users to quickly access their favorite websites or frequently visited pages. Bookmarks can be organized into folders and synced across devices for convenient access from anywhere.

**Interactive Examples:**

To demonstrate the concept of hyperlinks and their implementation, interactive examples can be incorporated into web pages. One such example involves making AJAX requests to dynamically load content without refreshing the entire page.

```html
<button id="ajaxButton">Load Content via AJAX</button>
<div id="ajaxResponse"></div>

<script>
document.getElementById('ajaxButton').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.getElementById('ajaxResponse').innerHTML = xhr.responseText;
            } else {
                console.error('Error: ' + xhr.status);
            }
        }
    };
    xhr.open('GET', 'example-content.html', true);
    xhr.send();
});
</script>
```

In this example, clicking the button triggers an AJAX request to retrieve content from a separate HTML file (`example-content.html`). The retrieved content is then dynamically inserted into the designated `<div>` element (`ajaxResponse`), demonstrating how hyperlinks can be used to fetch and display content without reloading the entire page.

**Conclusion:**

Hyperlinks are foundational elements of the web that enable seamless navigation and exploration of information across interconnected resources. From their implementation in web development using HTML anchor tags to their role in triggering HTTP requests within browsers, hyperlinks facilitate the seamless exchange of content and the interconnectedness of the World Wide Web. By incorporating interactive examples and visual elements, the concept of hyperlinks can be effectively demonstrated, showcasing their significance in shaping the modern web browsing experience.