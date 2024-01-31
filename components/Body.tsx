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
    </div>
  );
}
