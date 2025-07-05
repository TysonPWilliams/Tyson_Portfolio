import React from "react";

const Blog = () => (
  <section className="blog-section">
    <h2>Can We Trust AI to Write Our Code? A Developer's Perspective</h2>
    <p><strong>By Tyson Williams</strong></p>
    <time dateTime="2025-07-05" className="blog-date"><em>Posted on July, 5, 2025</em></time>

    <p>AI tools such as ChatGPT and GitHub Copilot are revolutionising software and web development. With the ability to generate entire code blocks from prompts, these tools promise faster development cycles and fewer bugs. But at what cost?</p>

    <p>As a student developer, I've often wondered: "Should I trust AI to write code I cannot fully explain myself?" In this project, I explore the quality, clarity, and maintainability of AI-generated code compared to my own manually written code for the same task.</p>

    <h3>The Importance of Maintainable Code</h3>
    <p>In a professional setting, maintainable and readable code is critical for team collaboration, handovers, and long-term support. If developers are deploying AI-written code without fully understanding it, this poses potential risks to project sustainability and ethical integrity.</p>
    <p>To explore this issue, I developed two versions of a simple project: one written entirely by me, and one generated using ChatGPT. I then compared both based on code readability, maintainability, and my own level of understanding.</p>
    <p>This concern is not mine alone; several industry leaders and researchers have raised alarms about overreliance on AI tools for production code, especially in junior teams.</p>
    <blockquote>
      <strong>GitClear's "Coding on Copilot" Report (2024)</strong><br />
      Analysed over 150 million lines of code and found that AI-assisted development with tools like GitHub Copilot can lead to a decrease in code quality. The report highlights an increase in code churn and a decline in code reuse, suggesting that AI-generated code may be less maintainable and more prone to issues over time.
    </blockquote>

    <h3>The Rise of AI-Powered Coding Tools</h3>
    <p>In recent years, AI-powered coding tools have transitioned from experimental novelties to integral components of modern software development. Platforms like GitHub Copilot, Replit, and Cursor are now commonplace, assisting developers in writing, debugging, and optimising code more efficiently. This shift is driven by the demand for faster development cycles and the democratisation of coding knowledge, enabling individuals with varying levels of expertise to contribute to software projects.</p>
    <ul>
      <li><strong>Accelerated Development:</strong> AI tools can generate boilerplate code, suggest functions, and even identify bugs, significantly reducing development time.</li>
      <li><strong>Knowledge Democratisation:</strong> By lowering the barrier to entry, these tools empower non-traditional developers to build functional software using natural language prompts.</li>
    </ul>
    <p><strong>Challenges:</strong></p>
    <ul>
      <li><strong>Overreliance on AI:</strong> Developers may become dependent on AI suggestions, potentially diminishing their problem-solving skills and understanding of underlying code structures.</li>
      <li><strong>Code Quality Concerns:</strong> AI-generated code may lack the context-specific nuances that human developers provide, leading to maintainability issues.</li>
    </ul>
    <p>As AI continues to reshape the development landscape, developers must balance the benefits of these tools with a critical understanding of their limitations.</p>

    <h3>Ethical Implications of AI-Generated Code</h3>
    <p>The integration of AI into code generation raises several ethical concerns that developers and organisations must address:</p>
    <ul>
      <li><strong>Intellectual Property and Plagiarism:</strong> AI models trained on vast code repositories may inadvertently reproduce copyrighted code without proper attribution, leading to potential legal issues. For instance, GitHub Copilot has been observed generating code snippets that closely resemble existing open-source projects, sometimes without preserving original license information.</li>
      <li><strong>Transparency and Accountability:</strong> When AI-generated code leads to errors or vulnerabilities, determining responsibility becomes complex. The lack of transparency in how AI models make decisions further complicates accountability.</li>
      <li><strong>Bias and Fairness:</strong> AI tools may perpetuate existing biases present in their training data, leading to unfair or discriminatory outcomes in software applications.</li>
    </ul>
    <p><strong>To navigate these ethical challenges, developers should:</strong></p>
    <ul>
      <li>Conduct code reviews for potential IP infringements and biases.</li>
      <li>Maintain documentation of AI tool usage and code origins.</li>
      <li>Implement ethical guidelines for responsible AI use in development.</li>
    </ul>
    <p>By proactively addressing these ethical considerations, the developer community can harness the benefits of AI while upholding standards of integrity and accountability.</p>

    <h3>My Skills vs AI: A Practical Comparison</h3>
    <p>I developed two APIs to compare my human-written API to an AI-generated API. The project: a student grading system where you can input students, teachers, enrollments, grades, and courses into a MongoDB database.</p>
    <ul>
      <li><strong>Time to Build:</strong><br />Human: A few hours over two days<br />AI: 60 seconds (with a few follow-up prompts to fix mistakes)</li>
    </ul>
    <p>The AI-generated code wasn't perfect, as I had to use a few prompts to correct mistakes. The code didn't run straight away as the AI created a subfolder system but left the server.js file in the root folder.</p>
    <p>I used AI to compare my own code with it's own, and AI made a harsh assessment of it's own work. These are the summarised results:</p>
    <p><strong>Results:</strong></p>
    <ul>
      <li><strong>Human-Written API:</strong> High Distinction (92%)
        <ul>
          <li>Modern & Clean Code: ES6+ syntax, strong schema validation, centralised error handling</li>
          <li>Secure by Design: Helmet.js, input validation, clear error messages</li>
          <li>Professional Docs: Top-tier README, setup guides, API examples</li>
          <li>Developer-Friendly: Modular structure, version control, dev tools</li>
        </ul>
      </li>
      <li><strong>AI-Generated API:</strong> Pass Level (72%)
        <ul>
          <li>Works, but Barebones: Functional CRUD, basic Express structure</li>
          <li>Security Gaps: No protection middleware or input sanitization</li>
          <li>Inconsistent & Dated: CommonJS, minimal validation, lacks error handling</li>
          <li>Docs Lack Depth: Basic setup, missing real-world guidance</li>
        </ul>
      </li>
    </ul>
    <p><strong>Key Takeaways:</strong></p>
    <ul>
      <li><strong>Security is Non-Negotiable:</strong> Human code included it; AI didn't.</li>
      <li><strong>Docs Matter:</strong> AI missed the mark on developer experience.</li>
      <li><strong>Maintainability Wins:</strong> Modular, consistent code &gt; quick, one-off scripts.</li>
      <li><strong>AI = Assistant, Not Autopilot:</strong> Use it to speed up, but not replace, expert development.</li>
    </ul>
    <p><strong>Conclusion:</strong><br />AI tools like Cursor are promising, but not yet a replacement for skilled developers. Human-crafted code demonstrated superior quality, clarity, and long-term value. AI should support the dev process, not drive it alone.</p>

    <h3>Comparing the Code</h3>
    <p>Below, I compare the Student model/schema focusing on readability, maintainability, and code understanding.</p>
    <ul>
      <li><strong>Human-Written:</strong>
        <ul>
          <li>Uses ES6+ syntax (import/export), descriptive variable names, and explicit error messages.</li>
          <li>Route paths are explicit (<code>/student</code>, <code>/student/:id</code>).</li>
          <li>Consistent error handling and status codes.</li>
        </ul>
        <div className="blog-code-image">
            <img src="/human-code-snippet.png" alt="Human-Written Code" />
            <div className="blog-code-caption">Fig 1. Human-Written Student Routes Snippet</div>
        </div>
      </li>
      <li><strong>AI-Generated:</strong>
        <ul>
            <li>Functional, but less maintainable and less secure.</li>
        </ul>
        <div className="blog-code-image">
            <img src="/ai-generated-snippet.png" alt="AI-Generated Code" />
            <div className="blog-code-caption">Fig 2. AI-Generated Student Routes Snippet</div>
        </div>
      </li>
    </ul>

    <h3>References</h3>
    <ul>
      <li>Barr, A. (2025). AI coding tools upend the 'buy versus build' software equation and threaten the SaaS business model. Business Insider. <a href="https://www.businessinsider.com/ai-coding-tools-buy-versus-build-software-saas-netlify-bolt-2025-6africa.businessinsider.com+6businessinsider.com+6businessinsider.com+6" target="_blank" rel="noopener noreferrer">Link</a></li>
      <li>BytePlus Editorial Team. (2025). Ethical concerns about AI code generation: Navigating the moral landscape of technological innovation. <a href="https://www.byteplus.com/en/topic/381416?title=ethical-concerns-about-ai-code-generation-navigating-the-moral-landscape-of-technological-innovation" target="_blank" rel="noopener noreferrer">Link</a></li>
      <li>Davis, T. & Rajamanickam, S. (2022). Ethical concerns of code generation through artificial intelligence. SIAM News, 55(10). <a href="https://www.siam.org/publications/siam-news/articles/ethical-concerns-of-code-generation-through-artificial-intelligence/siam.org" target="_blank" rel="noopener noreferrer">Link</a></li>
      <li>GitClear. (2024). Coding on Copilot: 2023 Data Suggests Downward Pressure on Code Quality (Including 2024 Projections). <a href="https://www.gitclear.com/coding_on_copilot_data_shows_ais_downward_pressure_on_code_quality" target="_blank" rel="noopener noreferrer">Link</a></li>
      <li>Sanj.dev. (2025). Ethical Considerations in AI Code Generation. <a href="https://sanj.dev/post/ethical-ai-code-generationsanj.dev" target="_blank" rel="noopener noreferrer">Link</a></li>
    </ul>
    <p><em>Thanks for reading! If you have thoughts or experiences with AI-generated code, let's discuss in the comments below.</em></p>
  </section>
);

export default Blog; 