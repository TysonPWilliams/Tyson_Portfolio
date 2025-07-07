import React from "react";
import Contact from "../Contact";
import "../Blog.css"

const aiPost = {
    title: "Can We Trust AI to Write Our Code? A Developer's Perspective",
    author: "Tyson Williams",
    date: "July, 5, 2025",
    content: (
        <>
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
            <blockquote>
                <strong>Business Insider (Barr, 2025)</strong><br />
                Business Insider states that the integration of AI into development workflows offers several opportunities:
                <ul>
                    <li><strong>Accelerated Development: </strong>AI tools can generate boilerplate code, suggest functions, and even identify bugs, significantly reducing development time</li>
                    <li><strong>Knowledge Democratisation: </strong>By lowering the barrier to entry, these toold empower non-traditional developers to build functional software using natural language prompts</li>
                </ul>
                However, this rapid adoption also presents challenges:
                <ul>
                    <li><strong>Overreliance on AI: </strong>Developers may become dependent on AI suggestions, potentially diminishing their problem-solving skills and understanding of underlying code structures.</li>
                    <li><strong>Code Quality Concerns: </strong>AI-generated code may lack the context-specific nuances that human developers provide, leading to maintainability issues.</li>
                </ul>
            </blockquote>
            <p>As AI continues to reshape the development landscape, developers must balance the benefits of these tools with a critical understanding of their limitations.</p>

            <h3>Ethical Implications of AI-Generated Code</h3>
            <p>The integration of AI into code generation raises several ethical concerns that developers and organisations must address:</p>
            <ul>
                <li>
                    <strong>Intellectual Property and Plagiarism:</strong> AI models trained on vast code repositories may inadvertently reproduce copyrighted code without proper attribution, leading to
                    potential legal issues. For instance, GitHub Copilot has been observed generating code snippets that closely resemble existing open-source projects, sometimes without preserving
                    original license information. (Davis & Rajamanickam, 2022)
                </li>
                <li>
                    <strong>Transparency and Accountability:</strong> When AI-generated code leads to errors or vulnerabilities, determining responsibility becomes complex. The lack of transparency in
                    how AI models make decisions further complicates accountability.
                </li>
                <li>
                    <strong>Bias and Fairness:</strong> AI tools may perpetuate existing biases present in their training data, leading to unfair or discriminatory outcomes in software applications.
                    (BytePlus Editorial Team, 2025)
                </li>
            </ul>
            <p><strong>To navigate these ethical challenges, developers should:</strong></p>
            <ul>
                <li>Conduct code reviews for potential IP infringements and biases.</li>
                <li>Maintain documentation of AI tool usage and code origins.</li>
                <li>Implement ethical guidelines for responsible AI use in development.</li>
            </ul>
            <p>By proactively addressing these ethical considerations, the developer community can harness the benefits of AI while upholding standards of integrity and accountability.</p>

            <h3>My Skills vs AI: A Practical Comparison</h3>
            <p>
                To explore the ethical and practical concerns of AI-generated code, I created a small programming project twice, once manually and once using Cursor.
                The chosen task was a simple CRUD application written in JavaScript (Node.js, Express). The backend lets users create, edit, and delete students, enrollments,
                teachers, courses, and grades.
            </p>
            <p>
                Over a few days, using a spare few hours here and there, I was able to write my program; however, with one prompt, it took AI a mere 30 seconds. I then
                used AI to compare my human-written code with the AI-generated code, and AI made a harsh assessment of its work. Below are the summarised results (full
                results can be found on my <a href="https:github.com/TysonPWilliams/ISK1002-Article-Assignment">GitHub</a>):</p>

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
            </ul>
            <div className="blog-code-image">
                <img src="/human-code-snippet.png" alt="Human-Written Code" />
                <div className="blog-code-caption">Fig 1. Human-Written Student Routes Snippet</div>
            </div>
            <ul>
                <li><strong>AI-Generated API:</strong> Pass Level (72%)
                    <ul>
                        <li>Works, but Barebones: Functional CRUD, basic Express structure</li>
                        <li>Security Gaps: No protection middleware or input sanitization</li>
                        <li>Inconsistent & Dated: CommonJS, minimal validation, lacks error handling</li>
                        <li>Docs Lack Depth: Basic setup, missing real-world guidance</li>
                    </ul>
                </li>
            </ul>
            <div className="blog-code-image">
                <img src="/ai-generated-snippet.png" alt="AI-Generated Code" />
                <div className="blog-code-caption">Fig 2. AI-Generated Student Routes Snippet</div>
            </div>

            <p>Below are snippets of my own schema and validation compared to AI</p>
            <div className="blog-code-image">
                <img src="/human-schema.png" alt="Human-Written Code" />
                <div className="blog-code-caption">Fig 3. Human-Written Schema Example</div>
            </div>
            <div className="blog-code-image">
                <img src="/ai-schema.png" alt="AI-Generated Code" />
                <div className="blog-code-caption">Fig 4. AI-generated Schema Example</div>
            </div>

            <h3>Key Findings and Recommendations</h3>
            <ol>
                <li><strong>Security Gap:</strong> The AI-generated code lacks essential security measures, making it unsuitable for production use without significant modifications</li>
                <li><strong>Code Quality Disparity:</strong> The human-written code demonstrates significantly better practices in validation, error handling, and modern JavaScript usage.</li>
                <li><strong>Maintainability Concerns:</strong> AI-generated code would be difficult to maintain and extend in a team environment without human intervention</li>
                <li><strong>Documentation Excellence Gap:</strong> The human-written project demonstrates exceptional documentation quality with a comprehensive README, user-friendly setup instructions, and practical examples, while the AI-generated project provides only basic functional documentation.</li>
                <li><strong>Development Experience:</strong> The human-written project provides a much better developer experience with proper tooling, scripts, and comprehensive documentation that guides users through setup, usage, and troubleshooting.</li>
            </ol>
            <p>
                <strong>Conclusion:</strong><br />This is what AI said of the comparison: This comparison demonstrates that while AI tools can generate functional code quickly, they often produce
                solutions that lack the depth, security, maintainability, and comprehensive documentation required for professional software development. The human-written project shows superior
                understanding of modern development practices, security considerations, code quality standards, and user experience design. (ChatGPT, 2025)
            </p>

            <h3>Justification for Tools & Languages</h3>
            <p>
                I chose JavaScript and Node.js because they are widely used for backend development and offer fast prototyping for small apps. Express.js was selected for its popularity and simplicity
                in setting up RESTful APIs. This tech also mirrors what AI tools like Copilot and ChatGPT are trained on, making the comparison more valid.
            </p>
            <blockquote>
                <strong>Stack Overflows Developer Survey (Stack Overflow, 2024)</strong><br />
                JavaScript continues to be the most commonly used language worldwide, and tools like AI agents are often benchmarked using JavaScript-based examples
                <p>As such, this made it the ideal language to highlight the differences in how humans and AI approach code structure and clarity.</p>
            </blockquote>

            <h3>Suggestions for Future Improvement</h3>
            <p>This project scratched the surface of comparing human-written vs. AI-generated code, but if I had more time, I would have loved to push things further.</p>
            <p>
                First, I would add user authentication. Security is a critical part of any real-world application, and testing how both the AI and I handled things like password hashing, session
                management, or JWT tokens would be a great way to evaluate whether AI can write secure, robust logic or if it simply mimics insecure patterns from its training data.
            </p>
            <p>Like any student project, there were a few avoidable limitations: </p>
            <ul>
                <li>Time contraints meant I had to keep the scope narrow - just a basic CRUD app.</li>
                <li>The task itself was relatively simple. While that made it easier to compare, it also meant the AI wasn't really pushed to handle more abstract or complex logic.</li>
                <li>I only used one AI assisted coding application (Cursor). Trying another AI program could have provided more well-rounded insights into how different tools handle code generation.</li>
            </ul>

            <h3>Some Advice for Other Developers Using AI Tools</h3>
            <p>If you're just starting with AI-assisted coding, here's what I'd say:</p>
            <blockquote>
                <strong>Understand the Tools</strong>
                <p>Even if the AI gives you a working solution, don’t blindly accept it. Read through every line. Try to break it. Try to fix it. If you can’t explain what it’s doing, you don’t own that code.</p>
                <strong>Refactor and Improve</strong>
                <p>Use AI-generated code as a rough draft. Clean it up. Make it your own. Add comments, rename variables, and split it into reusable modules. That’s how you turn generated code into good code.</p>
                <strong>Give Credit Where it's Due</strong>
                <p>If a tool helped you, acknowledge it, whether that’s in your documentation or project write-up. Transparency builds trust.</p>
                <strong>Don't Shortcut Your Learning</strong>
                <p>AI can be a helpful assistant, but it can’t replace the value of struggling through a problem, getting stuck, and finally figuring it out. That process builds real developer skills, the kind no model can give you.</p>
            </blockquote>
            <p>
                In short, AI is a tool, not a replacement for thinking. If used thoughtfully, it can boost your productivity and even help you learn. But if you rely on it too heavily, you risk
                becoming a passive copy-paster rather than an active problem-solver. And in this industry, <em>understanding</em> always trumps <em>speed.</em></p>

            <h3>References</h3>
            <ul>
                <li>Barr, A. (2025) <em>AI coding tools upend the 'buy versus build' software equation and threaten the SaaS business model. Business Insider.</em> Available at: <a href="https:www.businessinsider.com/ai-coding-tools-buy-versus-build-software-saas-netlify-bolt-2025-6africa.businessinsider.com+6businessinsider.com+6businessinsider.com+6">Link</a> (Accessed: 2 July 2025).</li>
                <li>BytePlus Editorial Team. (2025). <em>Ethical concerns about AI code generation: Navigating the moral landscape of technological innovation.</em> Available at: <a href="https:www.byteplus.com/en/topic/381416?title=ethical-concerns-about-ai-code-generation-navigating-the-moral-landscape-of-technological-innovation" target="_blank" rel="noopener noreferrer">Link</a> (Accessed: 2 July 2025).</li>
                <li>Davis, T. & Rajamanickam, S. (2022). <em>Ethical concerns of code generation through artificial intelligence. SIAM News, 55(10).</em> Available at: <a href="https:www.siam.org/publications/siam-news/articles/ethical-concerns-of-code-generation-through-artificial-intelligence/siam.org" target="_blank" rel="noopener noreferrer">Link</a> (Accessed: 2 July 2025).</li>
                <li>GitClear. (2024). <em>Coding on Copilot: 2023 Data Suggests Downward Pressure on Code Quality (Including 2024 Projections).</em> Available at: <a href="https:www.gitclear.com/coding_on_copilot_data_shows_ais_downward_pressure_on_code_quality" target="_blank" rel="noopener noreferrer">Link</a> (Accessed: 4 July 2025).</li>
                <li>Sanj.dev. (2025). <em>Ethical Considerations in AI Code Generation.</em> Available at: <a href="https:sanj.dev/post/ethical-ai-code-generationsanj.dev" target="_blank" rel="noopener noreferrer">Link</a> (Accessed: 4 July 2025). </li>
                <li>Stack Overflow (2024) <em>Stack Overflow Developer Survey 2024 – Technology.</em> Available at: <a href="https:survey.stackoverflow.co/2024/technology#most-popular-technologies-language-prof"> Link</a> (Accessed: 4 July 2025).</li>
            </ul>
            <p><em>Thanks for reading! If you have thoughts or experiences with AI-generated code, please reach out via the contact form below</em></p>

            <Contact />
        </>
    ),
};

export default aiPost;
