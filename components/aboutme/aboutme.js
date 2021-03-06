import Emphasize from "../emphasize";
import Subscript from "../subscript";
import Paragraph from "../paragraph";
import MobileHeader from "../header/mobileHeader";

const AboutMe = () => {
    return ( 
        <div className="leading-relaxed">
            <p>
                Heyyyy! ๐   
            </p>
            {/* <MobileHeader /> */}
            <Paragraph>
                My name is Yehezkiel Andrean but you can call me 
                <Emphasize type="3"> Hez! </Emphasize>
                <Subscript>
                    (I still turn my head around if you said <Emphasize type="3">yes</Emphasize>, haha.)
                </Subscript>
            </Paragraph>

            <Paragraph>Hereโs some facts about me:</Paragraph>

            <ul className="list-disc pl-6">
                <li>
                    Born and raised in Indonesia ๐ฎ๐ฉ.
                </li>
                <li>
                    Total wacko ๐.
                </li>
                <li>
                    A fan of doggos ๐.
                </li>
                <li>
                    My inspirations mostly came from the mighty throne ๐ฝ๐ฆ.
                </li>
            </ul>

            <Paragraph>In all for seriousness, this is the length-y version of myself.</Paragraph>

            <Paragraph>
                Iโm a final year Computer Science student at BINUS University. 
                Right now, Iโm working as a Mobile Developer at Ruparupa, one of the largest home & living e-commerce in Indonesia.
            </Paragraph>

            <Paragraph>
                In my spare time when I donโt code, I usually explore new places to go ๐บ๏ธ, scrolling on social media (keeping myself updated with latest technology or just hoarding memes ๐ฌ),
                and napping for all I care (JK ๐คง).
            </Paragraph>
            
            <h4 className="pt-6">Tech Stacks</h4>

            <Paragraph>
                I usually use React Native, that is oftenly used when Iโm working at Ruparupa. But, when it comes to another
                frameworks, Iโve tried Ionic, Next.js (this is what I used to create this website) and right now, learning Node.js 
                to challenge myself learning backend stuff, ish.
            </Paragraph>

            <Paragraph>
                <Emphasize>Languages: </Emphasize>JavaScript, TypeScript, C, C#.<br/>
                <Emphasize>Frameworks: </Emphasize>React/React Native, Ionic, Next.js, Tailwind CSS.
            </Paragraph>

            <Paragraph>
                If that list is kind of lacking, Iโm still learning a lot, donโt worry โ๏ธ!
            </Paragraph>

            <h4 className="pt-6">Reaching Out</h4>

            <Paragraph>
                If you have anything to discuss with me, feel free to hit me up by 
                <a href="mailto:yehezkielandrean2000@gmail.com"
                   target="_blank"
                   rel="noopener noreferrer"
                > Email </a> 
                or if youโre one of those Twitter ๐๏ธ guys, I accept DMs too ๐ฉ. 
            </Paragraph>

        </div>
    )
}

export default AboutMe;