
export function Testimonials() {
  return (
    <section className="py-16 bg-smartbench-gray-light">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-smartbench-blue/10 px-3 py-1 text-sm text-smartbench-blue">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Trusted by small business owners
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See why hundreds of business owners rely on SmartBench to make data-driven decisions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <TestimonialCard
            quote="SmartBench helped me identify that Fridays were my slowest days. After running a Friday promotion, we saw a 30% increase in sales!"
            name="Sarah Johnson"
            title="Owner, Sunrise Cafe"
            imageSrc="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
          />
          <TestimonialCard
            quote="The weekly emails are like having my own business consultant. The insights are specific to my salon and have helped us focus our inventory on what actually sells."
            name="Michael Chen"
            title="Owner, Style Studio"
            imageSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
          />
          <TestimonialCard
            quote="As someone who hates spreadsheets, SmartBench has been a lifesaver. It tells me exactly what I need to know without the complexity."
            name="Emma Rodriguez"
            title="Owner, Urban Boutique"
            imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
          />
        </div>

        <div className="mt-16 flex flex-col items-center justify-center space-y-4">
          <h3 className="text-xl font-semibold">Trusted by businesses everywhere</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
              <img
                src="/placeholder.svg"
                alt="Square Logo"
                className="h-8"
                width={120}
                height={32}
              />
            </div>
            <div className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
              <img
                src="/placeholder.svg"
                alt="Google Sheets Logo"
                className="h-8"
                width={120}
                height={32}
              />
            </div>
            <div className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
              <img
                src="/placeholder.svg"
                alt="Partner Logo"
                className="h-8"
                width={120}
                height={32}
              />
            </div>
            <div className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
              <img
                src="/placeholder.svg"
                alt="Partner Logo"
                className="h-8"
                width={120}
                height={32}
              />
            </div>
            <div className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
              <img
                src="/placeholder.svg"
                alt="Partner Logo"
                className="h-8"
                width={120}
                height={32}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  imageSrc: string;
}

function TestimonialCard({ quote, name, title, imageSrc }: TestimonialCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-smartbench-blue mb-4 h-6 w-6"
        >
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
        </svg>
        <p className="text-gray-700">{quote}</p>
      </div>
      <div className="flex items-center space-x-4 pt-4 mt-4 border-t">
        <img
          src={imageSrc}
          alt={name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
}
