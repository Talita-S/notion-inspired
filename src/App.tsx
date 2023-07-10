function App() {
  return (
    <div className="min-h-screen p-8 text-zinc-900 bg-gradient-to-r from-indigo-300 to-purple-400">
      <div className="bg-white w-[1100px] mx-auto rounded-xl min-h-[720px] shadow-sm border border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
        <aside className="bg-zinc-50 border-r border-r-zinc-100 p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400" />
          </div>
        </aside>
        <main className="p-4">
          <div className="max-w-[700px] mx-auto pt-16 prose prose-violet">
            <h1>The Advantages of Tailwind CSS</h1>
            <p>
              Tailwind CSS is a popular utility-first CSS framework that has
              gained significant traction in recent years. It provides a
              comprehensive set of pre-defined classes that allow developers to
              rapidly build user interfaces without the need for writing custom
              CSS. In this blog post, we will explore some of the advantages of
              using Tailwind CSS.
            </p>

            <p>
              You can learn more about at <a href="https://tailwindcss.com/">Tailwind CSS</a>
            </p>

            <h2>1. Rapid Development</h2>
            <p>
              Tailwind CSS excels in enabling rapid development by providing a
              vast array of utility classes. These classes are designed to be
              highly composable, allowing developers to quickly combine them to
              achieve the desired visual styling. With Tailwind CSS, you can
              easily create complex layouts and components without the need for
              writing custom CSS from scratch, resulting in significantly
              reduced development time.
            </p>
            <p>
              For example, to create a button with a blue background and white
              text, you can simply use the following Tailwind CSS classes:
            </p>
            <pre>
              <code class="language-html">
                &lt;button class="bg-blue-500 text-white px-4 py-2
                rounded"&gt;Click me&lt;/button&gt;
              </code>
            </pre>
            <h2>2. Customization</h2>
            <p>
              Tailwind CSS offers extensive customization options. You can
              easily configure various aspects of the framework, such as colors,
              spacing, font sizes, breakpoints, and more, to match your
              project's specific design requirements. This flexibility allows
              Tailwind CSS to adapt to various design systems and ensures
              consistency across your application.
            </p>
            <h2>3. Mobile-First Approach</h2>
            <p>
              Tailwind CSS follows a mobile-first approach, which means it
              prioritizes designing for mobile devices first and then gradually
              enhances the layout for larger screens. This approach aligns with
              the current trend of responsive web design, where mobile devices
              dominate internet usage. By default, Tailwind CSS provides
              responsive utility classes that make it effortless to create
              adaptive and mobile-friendly interfaces.
            </p>
            <h2>4. Efficient Bundle Size</h2>
            <p>
              One concern with some CSS frameworks is the impact on the final
              bundle size of your web application. However, Tailwind CSS takes a
              different approach. Instead of shipping predefined components and
              styles, it provides utility classes that can be selectively used.
              This means that you only include the CSS for the specific utility
              classes used in your project, resulting in a more efficient bundle
              size compared to traditional frameworks.
            </p>
            <h2>5. Consistent Design Language</h2>
            <p>
              With Tailwind CSS, you can establish a consistent design language
              throughout your application. By utilizing the predefined utility
              classes, you ensure that elements across different pages and
              components share the same visual styles. This consistency improves
              the user experience and makes it easier for developers to maintain
              and scale the application over time.
            </p>
            <blockquote>
              <p>
                "Tailwind CSS has revolutionized the way I build user
                interfaces. The flexibility and speed it offers are
                unparalleled. I can't imagine going back to writing custom CSS
                for every project."
              </p>
              <cite>John Doe, Front-end Developer</cite>
            </blockquote>
            <h2>6. Active Community and Ecosystem</h2>
            <p>
              Tailwind CSS has gained a large and active community of developers
              who contribute to its growth and improvement. The framework has an
              extensive ecosystem of plugins, extensions, and integrations that
              enhance its functionality and make it even more powerful. This
              active community ensures that Tailwind CSS remains up-to-date,
              well-documented, and supported with frequent updates and new
              features.
            </p>
            <p>
              Overall, Tailwind CSS offers a range of advantages that make it an
              excellent choice for building modern, responsive web applications.
              Its rapid development capabilities, customization options,
              mobile-first approach, efficient bundle size, consistent design
              language, and active community all contribute to its popularity
              and success among developers.
            </p>
            <p>
              If you're looking for a CSS framework that combines flexibility,
              ease of use, and performance, Tailwind CSS is definitely worth
              considering for your next project.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
