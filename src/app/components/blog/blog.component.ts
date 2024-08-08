import { Component } from '@angular/core';

interface postInterface {
  id: number;
  title: string;
  img: string;
  text: string[];
  updated: string;
};

const posts: postInterface[] = [
  {
    id: 1,
    title: `What Is Responsive Web Design?`,
    img: `https://i.pinimg.com/736x/f5/0e/59/f50e59642a37c6b9e3ed2b3f6e9d5a76.jpg`,
    text: [
      `With the rise of mobile devices, responsive web design has become more important than ever, as users expect websites to look and function perfectly on their smartphones and tablets.`,
    ],
    updated: `Last updated 3 days ago`,
  },
  {
    id: 2,
    title: `Is color important in website design? YES!`,
    img: '',
    text: [
      `Selecting the right colors for your website design is crucial for your online success. Colors can be a powerful tool to elicit a response from your intended audience. You can use colors to evoke emotions in your visitors or prompt them to take action on your website.`,
    ],
    updated: `Last updated 2 month ago`,
  },
  {
    id: 3,
    title: `What Is AI?`,
    img: '',
    text: [
      `Artificial Intelligence (AI) has become ubiquitous in modern society, revolutionizing industries and reshaping daily life. From healthcare to finance, AI-powered innovations enhance efficiency and decision-making. Yet, alongside its transformative potential, AI presents challenges such as data privacy and job displacement.`,
      `To navigate this landscape effectively, we must prioritize:`,
      `1. Ethical AI Development: Ensuring fairness, transparency, and accountability in AI systems.`,
      `2. Investment in Education: Equipping the workforce with skills for an AI-driven economy through training and upskilling initiatives.`,
      `3. Fostering Collaboration: Encouraging interdisciplinary collaboration and diversity in AI development teams to address biases and promote inclusive solutions.`,
      `4. Enabling Regulation: Developing agile regulatory frameworks that balance innovation with risk mitigation.`,
      `By embracing these principles, we can shape a future where AI serves as a catalyst for positive societal change, fostering innovation, inclusivity, and ethical advancement.`
    ],
    updated: `Last updated 8 month ago`,
  },
  {
    id: 4,
    title: `What are WCAG standards?`,
    img: '',
    text: [
      `The WCAG, or Web Content Accessibility Guidelines, is a set of guidelines created by the World Wide Web Consortium (W3C) to ensure that web content is accessible to people with disabilities. It provides recommendations for making web content more accessible to individuals with disabilities like visual, auditory, physical, speech, cognitive, language, learning, and neurological disabilities. The WCAG standards are based on four principles known as "POUR": Perceivable (information and user interface components must be presentable to users in ways they can perceive), Operable (user interface components and navigation must be operable), Understandable (information and the operation of user interface must be understandable), and Robust (content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies). Each principle is accompanied by specific guidelines, success criteria, and techniques for achieving accessibility. WCAG standards are globally recognized and followed by web developers, designers, and organizations to ensure inclusivity and accessibility for all users.`,
    ],
    updated: `Last updated 22 days ago`,
  },
  {
    id: 5,
    title: `What the font you use can tell us about your website?`,
    img: '',
    text: [
      `Fonts are all around us (like the one you're reading right now), but they're not something marketers usually think about much. This is a missed opportunity because the font you choose affects how people understand and interpret your message, creates a sense of consistency, and sets the overall tone of your website. Selecting the right fonts for your company is just as important as choosing your brand colors.`,
      `1. Fonts influence how we perceive content. Each type has its associations. Thoughtful font choice enhances our message and reading experience: The font you choose should match the message of your content. `,
      `2. While aesthetics are important, readability should always be a priority. A beautiful-looking font that's hard to read will turn readers away.`,
      `3. It's important to understand the preferences of your target audience. A font that works well for one group may not have the same effect on another.`,
      `The font you choose for your website reflects its character and sets the tone for visitors. It's powerful!`
    ],
    updated: `Last updated 5 month ago`,
  },
  {
    id: 6,
    title: `WHAT IS Native Advertising?`,
    img: '',
    text: [
      `Native advertising is a type of paid advertising where the ads blend in with the appearance, style, and purpose of the media format they are placed in. They are designed to integrate seamlessly into the web page, unlike banners or display ads.`,
      `Since native ads don't look like typical ads, they don't interrupt the user's experience on the page. This is the essence of native advertising – it presents promotional content to the reader without being obtrusive. Perhaps readers may not even realize they are consuming a paid advertisement.`,
      `<b>Why do advertisers love native advertising?</b> Because it works.`,
      `Native advertising is more effective than display ads, with 53% more consumer engagement and an 18% increase in purchase intent.`,
      `Consumers are aware that native advertisements constitute a form of advertising, yet their impact remains substantial. Results from research at Stanford University reveal that native advertising does not deceive consumers, who remain conscious of its promotional nature. Nonetheless, these ads still wield a notable influence on consumer purchasing behavior.`,
    ],
    updated: `Last updated today`,
  },
];

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})

export class BlogComponent {
  // name: string = `some text`;

  // nameChange(event:any){
  //   this.name = event.target.value;
  // }

  postsArr = posts;
}
