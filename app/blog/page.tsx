import Image from "next/image";

export default function Component() {
  return (
    <div className="min-h-screen grid grid-rows-[auto 1fr auto]">
      <main className="grid gap-6 sm:gap-8 lg:gap-12">
        <div className="px-4 py-6 md:px-6 lg:py-12">
          <div className="container prose prose-sm lg:prose-lg mx-auto dark:prose-invert">
            <div className="space-y-2 not-prose">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
                Food Website: Developed by Dream Webbies
              </h1>
              <p className="text-gray-500 dark:text-gray-400">Posted on August 24, 2023</p>
            </div>
            <p>
              Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne.
              One day, his advisors came to him with a problem: the kingdom was running out of money.
            </p>
            <p>
              Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place:
              under the king&apos;s pillow, in his soup, even in the royal toilet. The king was furious, but he couldn&apos;t seem
              to stop Jokester.
            </p>
            <p>
              And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that
              they couldn&apos;t help but laugh. And once they started laughing, they couldn&apos;t stop.
            </p>
            <figure>
              <Image
                alt="Cover image"
                className="aspect-video object-cover rounded-md my-3"
                height={340}
                src="/application.png"
                width={1250}
              />
              <figcaption>Image caption goes here</figcaption>
            </figure>
            <p>
              The king thought long and hard, and finally came up with
              <a href="#">a brilliant plan</a>: he would tax the jokes in the kingdom.
            </p>
            <blockquote>
              “After all,” he said, “everyone enjoys a good joke, so it&apos;s only fair that they should pay for the
              privilege.”
            </blockquote>
            <h3>The Joke Tax</h3>
            <p>The king&apos;s subjects were not amused. They grumbled and complained, but the king was firm:</p>
            <ul>
              <li>1st level of puns: 5 gold coins</li>
              <li>2nd level of jokes: 10 gold coins</li>
              <li>3rd level of one-liners : 20 gold coins</li>
            </ul>
            <p>
              As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who
              refused to let the king&apos;s foolishness get him down: a court jester named Jokester.
            </p>
          </div>
        </div>
      </main>
      <footer className="py-6 border-t">
        <div className="container flex flex-col gap-4 items-center justify-center text-center mx-auto px-4 md:gap-6 md:px-6">
        </div>
      </footer>
    </div>
  );
}
