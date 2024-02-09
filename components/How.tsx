import 'styles/main.css';

export default function How() {
  return (
    <div>
      <main className="flex-1 w-full flex flex-col justify-center items-center pt-20">
        <p className="text-4xl signika-header font-extrabold sm:text-center sm:text-6xl">
          How will this work?
        </p>
        <br />
        <p className="text-1.5xl signika !leading-tight mx-auto max-w-xl text-center mobile-body">
          You input your task and when its due and My Calendy will schedule it
          based on the timing of your cognitive abilities. The more information
          you give our 'cognitive calculator', the better it can schedule your
          tasks.
        </p>
      </main>
    </div>
  );
}
