import editorImage from "../assets/process-editor.jpg";
import collaborationImage from "../assets/process-collaboration.jpg";
import creatorImage from "../assets/process-creator.jpg";

export function HowItWorks({ platform }: { platform?: "Instagram" | "YouTube" }) {
  const steps = [
    {
      title: "Meet your editor.",
      description: `Share your style and goals. We’ll match you with a dedicated ${platform ? `${platform} ` : ""}editor who understands your content.`,
      image: editorImage,
      alt: "Video editor in a bright studio with a video editing timeline on his screens",
      color: "bg-secondary text-secondary-foreground",
      caption: "Your style. Your dedicated editor.",
    },
    {
      title: "Create together.",
      description: "You bring the footage. Your editor brings the hooks, pacing and polish. Review every cut in one shared workspace.",
      image: collaborationImage,
      alt: "Content creator reviewing footage with her remote editor on a laptop",
      color: "bg-accent text-accent-foreground",
      caption: "One place to brief, review and approve.",
    },
    {
      title: "Keep showing up.",
      description: "Stay focused on creating. Get on-brand content on schedule, built to earn attention and keep your audience coming back.",
      image: creatorImage,
      alt: "Content creator recording a talking-head video with a camera and microphone",
      color: "bg-primary text-primary-foreground",
      caption: "A content rhythm you can count on.",
    },
  ];

  return (
    <section id="how" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="font-display text-4xl font-extrabold leading-tight tracking-normal text-foreground sm:text-5xl">How Scoobie works.</h2>
        <div className="mt-9 grid items-stretch gap-4 lg:mt-12 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-foreground/25 bg-card text-card-foreground">
              <div className="flex flex-1 flex-col p-6 pb-5 sm:p-7">
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-sm text-2xl font-extrabold ${step.color}`}>{index + 1}</span>
                <h3 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-normal">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">{step.description}</p>
              </div>
              <div className="px-6 sm:px-7">
                <img src={step.image} alt={step.alt} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full rounded-sm object-cover" />
              </div>
              <p className="px-6 py-5 text-xs font-semibold leading-5 text-muted-foreground sm:px-7">{step.caption}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}