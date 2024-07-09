import { useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward, IoIosLaptop } from 'react-icons/io';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


const sections = [
  { name: "Put @cloudstate on any class and it's properties will be stored forever and available in any request.", title: "TypeScript is The Database", content: `
\`\`\`javascript
@cloudstate
class CloudEmailList {
  emails: string[] = [];
  add(email: string) {
    this.emails.push(email);
  }
  list() {
    return this.emails;
  }
}
\`\`\`
`
  },
  { name: "Store blobs on classes just like any other data.", title: "Blob Storage", 
    content: `
\`\`\`javascript
    @cloudstate
class MyBlobs {
  blobs: Blob[] = [];
  add(blob: Blob) {
    this.blobs.push(blob);
  }
}
\`\`\`
`
},
  { name: "No need to build a REST API. Just call functions on your frontend with useCloud. Create root level classes with static ids and instances with dynamic ids.", title: "RPC Layer", 
    content:`
\`\`\`javascript
     @cloudstate
    class YourClass {
      static id = "your-class";
      // or id = crypto.randomUUID();
      // ...
    }
    
    useCloud<typeof YourClass>("your-class")
      .yourFunction(); 
\`\`\`
`
    },
  { name: "Methods are effects. You'll be notified when their dependencies have changed allowing you to recall them as you see fit to implement complex realtime systems.", title: "Full Stack Signals", 
    content:`
\`\`\`javascript
     @cloudstate
    class YourClass {
      @signal count = 0;
      getCount() {
        return this.count;
      }
    }
    
    const counter = 
    useCloud<typeof YourClass>("<instance-id>");
    for await (const getCount of counter.getCount) {
      console.log(await getCount());
    } 
\`\`\`
`},
  { name: "Leverage signals and async iterators to create efficient realtime streams.", title: "Streaming Data", 
    content: `
\`\`\`javascript@cloudstate
class YourClass {
  // ...
  async *countStream() {
    const counter = 
    useSignal<typeof YourClass>(this.id);
    for await (getCount of counter.getCount) {
      yield await getCount();
    }
  }
}
const counter = 
useCloud<typeof YourClass>("<instance-id>");
for await (const count of counter.countStream()) {
  console.log(count);
} 
\`\`\`
` }
];

export default function Slider(){

  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);

  const scrollToSection = (index: number) => {
    if (scrollRef.current) {
      const sectionWidth = scrollRef.current.clientWidth/0.962;
      const scrollAmount = sectionWidth * index;
      scrollRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
      setCurrentSection(index);
    }
  };

  const handleNext = () => {
    const nextSection = (currentSection + 1) % sections.length;
    scrollToSection(nextSection);
  };

  const handlePrev = () => {
    const prevSection = (currentSection - 1 + sections.length) % sections.length;
    scrollToSection(prevSection);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <div className="w-2/3 border-t border-gray-300 mt-4 mx-auto py-10"></div>
      <div className="text-3xl font-semibold text-center p-10 dark:text-slate-400">
        Unified cloud solutions for comprehensive data management, real-time communication, and scalable content delivery.
      </div>
      <div className="relative w-full max-w-4xl">
        <div className="relative w-full pt-[75%] -mt-24">
          <IoIosLaptop className="absolute inset-0 text-gray-800 w-full h-full dark:text-gray-500" />
          <div className="absolute inset-[20%] top-[25.7%] bottom-[29%] left-[24%] right-[24%] flex justify-center items-center">
            <div ref={scrollRef} className="flex w-[103%] h-full overflow-hidden scrollbar-hidden">
              {sections.map((section, index) => (
                <div key={index} className="flex-shrink-0 w-[104%] flex flex-col items-center justify-center p-4 bottom-[21%] bg-wierd-gray">
                  <ReactMarkdown
                    components={{
                      code({ node, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');
                        return match ? (
                          <SyntaxHighlighter
                            style={atomDark as any
                            }
                            language={match[1]}
                            PreTag="pre"
                            className="rounded-md overflow-x-auto max-w-4xl text-[0.6rem] sm:text-sm md:text-base lg:text-base xl:text-base w-full max-h-full p-5"
                            {...props}
                          >
                            {String(children).replace(/\n$/, '')}
                          </SyntaxHighlighter>
                        ) : (
                          <code className="rounded-lg shadow-lg w-[95%]" {...props}>
                            {children}
                          </code>
                        );
                      },
                    }}
                  >
                    {section.content}
                  </ReactMarkdown>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className='flex flex-col flex-wrap  text-center space-y-5 -mt-20'>
        <div className="text-3xl font-bold  p-5 dark:text-slate-400 ">{sections[currentSection].title}</div>
        <div className="text-xl font-semibold dark:text-slate-400 ">{sections[currentSection].name}</div>
        </div>
    </div>
    
      {/* Navigation Dots */}
      <div className="w-full flex justify-center items-center mt-4 p-10">
        <div className="flex space-x-2">
          {sections.map((section, index) => (
            <div
              key={section.name}
              onClick={() => scrollToSection(index)}
              className={`cursor-pointer w-4 h-4 rounded-full ${currentSection === index ? 'bg-gray-600' : 'bg-gray-400'}`}
            ></div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center px-2 absolute">
        <button
          onClick={handlePrev}
          className=" text-slate-700 p-6 rounded-full  hover:bg-slate-300"
        >
          <IoIosArrowBack size={42} />
        </button>
        <button
          onClick={handleNext}
          className=" text-slate-700 p-6 rounded-full  hover:bg-slate-300"
        >
          <IoIosArrowForward size={42} />
        </button>
        
      </div>
      <div className="w-2/3 border-t border-gray-300 mt-4 mx-auto py-10"></div>
    </div>
  );
};