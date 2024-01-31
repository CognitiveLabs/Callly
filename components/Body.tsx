import 'styles/main.css';
import Columns from './Columns';
import Logo from './icons/Logo';

export default function Body() {
  return (
    <div>
      <main className="flex-1 w-full flex flex-col justify-center items-center">
        <p className="text-4xl signika-header font-extrabold sm:text-center sm:text-6xl">
          My Calendy
        </p>
        <p className="text-4xl signika-title font-extrabold sm:text-center sm:text-6xl pb-10">
          the Cognitive Calendar
        </p>

        <p className="text-1.5xl !leading-tight mx-auto max-w-xl text-center">
          My Calendy is designed to organize your tasks and activities based on
          your cognitive abilities, enhancing your efficiency and productivity.
        </p>
        <p className="text-1.5xl !leading-tight mx-auto max-w-xl text-center pt-10 ">
          Are you getting the most out of yourself and your day by aligning your
          schedule when your cognitive abilities are at their peak? Everyone is
          different so is when their cognitive abilities are at their peak, so
          that is
        </p>
      </main>
      <Columns />
      <LogoCloud />
    </div>
  );
}

function LogoCloud() {
  return (
    <div>
      <p className="mt-24 text-xs uppercase text-zinc-400 text-center font-bold tracking-[0.3em]">
        The Cognitive Calendar is being built with
      </p>
      <div className="flex flex-col items-center my-12 space-y-4 sm:mt-8 sm:space-y-0 md:mx-auto md:max-w-2xl sm:grid sm:gap-6 sm:grid-cols-5">
        <div className="flex items-center justify-start">
          <a href="https://nextjs.org" aria-label="Next.js Link">
            <img
              src="/nextjs.svg"
              alt="Next.js Logo"
              className="h-12 text-white"
            />
          </a>
        </div>
        <div className="flex items-center justify-start">
          <a href="https://vercel.com" aria-label="Vercel.com Link">
            <img
              src="/vercel.svg"
              alt="Vercel.com Logo"
              className="h-6 text-white"
            />
          </a>
        </div>
        <div className="flex items-center justify-start">
          <a href="https://stripe.com" aria-label="stripe.com Link">
            <img
              src="/stripe.svg"
              alt="stripe.com Logo"
              className="h-12 text-white"
            />
          </a>
        </div>
        <div className="flex items-center justify-start">
          <a href="https://supabase.io" aria-label="supabase.io Link">
            <img
              src="/supabase.svg"
              alt="supabase.io Logo"
              className="h-10 text-white"
            />
          </a>
        </div>
        <div className="flex items-center justify-start">
          <a href="https://github.com" aria-label="github.com Link">
            <img
              src="/github.svg"
              alt="github.com Logo"
              className="h-8 text-white"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
