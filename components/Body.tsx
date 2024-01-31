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
        <p className="text-1.5xl !leading-tight mx-auto max-w-xl text-center pt-10">
          My Calendy doesn't just tell you <b>when</b> to do something, it tells
          you <b>what</b> to do <b>when</b>. By understanding your fluctuating
          cognitive <b>abilities</b>, it aligns your tasks <b>accordingly</b>.
          Need <b>analytical thinking</b>? My Calendy schedules that for when
          your brain is <b>sharpest</b>.<b> Creative writing</b>? It plans that
          for when your <b>imagination</b> is soaring. It's like having a
          personal productivity coach whispering in your ear, guiding you
          towards
          <b> peak performance</b> hour by hour.
        </p>
      </main>
      <Columns />
    </div>
  );
}
