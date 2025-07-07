import React from "react";
import Contact from "../Contact";
import "../Blog.css"

const linuxPost = {
    title: "Saying Goodbye to Windows, Hello to Linux Mint!",
    author: "Tyson Williams",
    date: "July, 7, 2025",
    content: (
        <>
            <p>
                I didn’t set out planning to ditch Windows — but after having a few 'red-pill' moments, it kind of made the choice for me.
            </p>

            <h3>The Wake-Up Call: Ads on My Desktop?</h3>
            <p>
                It started subtly. First, I noticed ads creeping into the Start menu. Then they showed up on the lock screen.
                Before long, I was being nudged toward Microsoft products I didn’t ask for — “Try Microsoft 365!” “Use Edge instead!”
            </p>
            <p>
                This wasn’t just annoying — it felt like I was slowly losing control of my own computer.
            </p>

            <img src="./windows-ad.png"></img>
            <div className="blog-code-caption">Fig 1. Ads Appearing on Lock Screen</div>

            <blockquote>
                <p>"It's frustrating to see Microsoft turn what used to be a productivity-focused operating system into an ad delivery platform"</p>
                <p>- The Verge, 2023, on Windows 11 ad placements</p>
            </blockquote>

            <h3>Store Errors and System Bloat</h3>
            <p>
                Then came the problems with the Microsoft Store. It started refusing to install apps properly. Updates failed silently,
                and even basic tools like the Calculator wouldn’t launch without glitches.
            </p>
            <p>
                And it wasn’t just one thing. My system felt bloated. Constant background processes. Telemetry I couldn’t fully turn off.
                RAM disappearing to who-knows-what. It felt less like <em>my</em> PC, and more like Microsoft’s.
            </p>

            <h3>Craving Customisation (and Sanity)</h3>
            <p>
                I like having control over my setup — from the terminal to themes to file structure. But in Windows, I felt fenced in.
                Sure, you can tweak a few settings, but anything deeper either breaks something or is locked behind the system.
            </p>
            <p>
                That’s when I started seriously considering Linux.
            </p>

            <blockquote>
                <p>"You own your system. Not the other way around."</p>
                <p>- Linus Torvalds (paraphrased philosophy of Linux and open source)</p>
            </blockquote>

            <img src="./linux-mint-custom.png" alt="" />
            <div className="blog-code-caption">Fig 2. A custom desktop environment on Linux Mint - Cinnamon</div>

            <h3>Why I Chose Linux Mint</h3>
            <p>There are dozens of Linux distributions out there, but Linux Mint stood out to me for three main reasons:</p>
            <ul>
                <li><strong>It just works</strong> – No weird driver issues, no confusing install steps. Everything from Wi-Fi to my Bluetooth headset worked out of the box.</li>
                <li><strong>Familiar feel</strong> – If you're coming from Windows, the Cinnamon desktop environment feels like home — without the baggage.</li>
                <li><strong>Complete control</strong> – Whether it's updating through the terminal, customising my themes, or purging bloatware entirely — I’m in the driver's seat now.</li>
            </ul>

            <h3>What I’ve Gained Since Switching</h3>
            <ul>
                <li>No more ads — My OS isn’t trying to upsell me anything.</li>
                <li>Better speed and performance — My laptop runs cooler, faster, and quieter.</li>
                <li>Peace of mind — No random restarts, no forced updates, no watching my OS turn into an ad platform.</li>
            </ul>

            <p>
                And the best part? It’s all free and powered by a passionate open-source community.
            </p>

            <h3>Final Thoughts</h3>
            <p>
                Switching to Linux Mint has been one of the most empowering changes I’ve made in my tech life. It’s not just about ditching the ads or escaping the Store errors —
                it’s about using a system that respects my choices.
            </p>
            <p>
                If you’re tired of feeling like a passenger in your own digital life, maybe it’s time you gave Linux a try too.
            </p>

            <p><em>Thanks for reading! If you have thoughts or experiences with switching to Linux, please reach out via the contact form below</em></p>

            <h3>References</h3>
            <ul>
                <li>Bisson, S (2023) <em>Microsoft Store plagued with bugs and app install failures. TechRadar.</em> Available at: <a href="https://www.techradar.com/news/microsoft-store-broken-again-users-report-app-issues">Link</a> (Accessed: 7 July 2025).</li>
                <li>Snowden, E (2019) <em>Why I use Linux. Linux Journal.</em> Available at: <a href="https://www.linuxjournal.com/content/edward-snowden-why-i-use-linux">Link</a> (Accessed: 7 July 2025).</li>
                <li>Stallman, R.M (2015) <em>The Free Software Definition. GNU Operating System.</em> Available at: <a href="https://www.gnu.org/philosophy/free-sw.html">Link</a> (Accessed: 7 July 2025).</li>
                <li>Vaughan-Nichols, S.J (2022) <em>Linux Mint: Still the best Linux desktop for Windows users. ZDNet.</em> Available at: <a href="https://www.zdnet.com/article/linux-mint-best-linux-desktop/">Link</a> (Accessed: 7 July 2025).</li>
                <li>Warren, T (2023) <em>Microsoft is putting ads in the Windows 11 Start Menu now. The Verge.</em> Available at: <a href="https://www.theverge.com/2023/3/30/23663525/microsoft-windows-11-start-menu-ads">Link</a> (Accessed: 7 July 2025).</li>
            </ul>
            


            <Contact />
        </>
    ),
};

export default linuxPost;
