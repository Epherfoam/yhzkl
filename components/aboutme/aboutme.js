import Emphasize from "../emphasize";
import Subscript from "../subscript";
import Paragraph from "../paragraph";
import MobileHeader from "../header/mobileHeader";

const AboutMe = () => {
    return ( 
        <div className="leading-relaxed">
            <p>
                Heyyyy! 😎   
            </p>
            {/* <MobileHeader /> */}
            <Paragraph>
                My name is Yehezkiel Andrean but you can call me 
                <Emphasize type="3"> Hez! </Emphasize>
                <Subscript>
                    (I still turn my head around if you said <Emphasize type="3">yes</Emphasize>, haha.)
                </Subscript>
            </Paragraph>

            <Paragraph>Here’s some facts about me:</Paragraph>

            <ul className="list-disc pl-6">
                <li>
                    Born and raised in Indonesia 🇮🇩.
                </li>
                <li>
                    Total wacko 😋.
                </li>
                <li>
                    A fan of doggos 🐕.
                </li>
                <li>
                    My inspirations mostly came from the mighty throne 🚽💦.
                </li>
            </ul>

            <Paragraph>In all for seriousness, this is the length-y version of myself.</Paragraph>

            <Paragraph>
                I’m a final year Computer Science student at BINUS University. 
                Right now, I’m working as a Mobile Developer at Ruparupa, one of the largest home & living e-commerce in Indonesia.
            </Paragraph>

            <Paragraph>
                In my spare time when I don’t code, I usually explore new places to go 🗺️, scrolling on social media (keeping myself updated with latest technology or just hoarding memes 😬),
                and napping for all I care (JK 🤧).
            </Paragraph>
            
            <h4 className="pt-6">Tech Stacks</h4>

            <Paragraph>
                I usually use React Native, that is oftenly used when I’m working at Ruparupa. But, when it comes to another
                frameworks, I’ve tried Ionic, Next.js (this is what I used to create this website) and right now, learning Node.js 
                to challenge myself learning backend stuff, ish.
            </Paragraph>

            <Paragraph>
                <Emphasize>Languages: </Emphasize>JavaScript, TypeScript, C, C#.<br/>
                <Emphasize>Frameworks: </Emphasize>React/React Native, Ionic, Next.js, Tailwind CSS.
            </Paragraph>

            <Paragraph>
                If that list is kind of lacking, I’m still learning a lot, don’t worry ✌️!
            </Paragraph>

            <h4 className="pt-6">Reaching Out</h4>

            <Paragraph>
                If you have anything to discuss with me, feel free to hit me up by 
                <a href="mailto:yehezkielandrean2000@gmail.com"
                   target="_blank"
                   rel="noopener noreferrer"
                > Email </a> 
                or if you’re one of those Twitter 🕊️ guys, I accept DMs too 📩. 
            </Paragraph>

        </div>
    )
}

export default AboutMe;