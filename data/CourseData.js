import bcrypt from "bcrypt";


const salt = await bcrypt.genSalt();

export const data ={
          adminUsers:[
              {
                firstName:"EDMUND",
                lastName:"NII ODOI",
                email:"admin123@gmail.com",
                password:bcrypt.hashSync("desy123",salt),
                role:"admin",
                isAdmin:true,
                verified:true,
              },
              {
                firstName:"Barbara",
                lastName:"NII ODOI",
                email:"barbara12@gmail.com",
                password:bcrypt.hashSync("desy123",salt),
                role:"admin",
                isAdmin:true,
                verified:true,
              },
                 
                 ],
    
          courses:[
            {
        title:"Web Developer",
        description:"Step by guid to becoming web developer in 2022",
        details:"A web developer is at heart an interactive artist. They’re someone driven by a deep desire to create things. A web developer’s canvas is a user’s web browser.Much like how a curious child takes pleasure in making toys by joining LEGO blocks—and then experiences a similar joy in taking things apart to see how they’re made, a web developer’s job is to use the basic building blocks of the web (like HTML, CSS and JavaScript) to create something complex like a webpage. Don’t sweat it! We’ll get into all of those terms soon.It is also the web developer’s job to diagnose problems in a website’s functionality, to understand how something works by reading the code behind it, and to make changes to fix any issues. That essentially makes web developers the physicians of the world wide web."
            },
            {
                title:"Cyber Security Specialist",
        description:"Step by guid to becoming Cyber security in 2022",
        details:"It is a mistake to believe that you are of no interest to cyber attackers. Everyone who is connected to the Internet needs cyber security. This is because most cyber attacks are automated and aim to exploit common vulnerabilities rather than specific websites or organisations Computer security, cybersecurity (cyber security), or information technology security (IT security) is the protection of computer systems and networks from information disclosure, theft of, or damage to their hardware, software, or electronic data, as well as from the disruption or misdirection of the services they provide"
            },
            {
                title:"Data Analysis Specialist",
        description:"Step by guid to becoming Data Analysis Specialist in 2022",
        details:"A data analyst collects, cleans, and interprets data sets in order to answer a question or solve a problem. They work in many industries, including business, finance, criminal justice, science, medicine, and government.What kind of customers should a business target in its next ad campaign? What age group is most vulnerable to a particular disease? What patterns in behavior are connected to financial fraud? These are the types of questions you might be pressed to answer as a data analyst"
            },
            {
                title:"Artificial intelligence Specialist",
        description:"Step by guid to becoming Artificial intelligence Specialist in 2022",
        details:"Artificial intelligence (AI) specialists program computers to simulate thinking. They work on systems that gather information, make decisions, and act on the information. Some AI specialists work in cognitive simulation, in which computers are used to test hypotheses about how the human mind works. … Expert systems are used in the fields of medicine, law, geology, and accounting."
            },
            {
                title:"Software Architect",
        description:"Step by guid to becoming Software Architect in 2022",
        details:"Software Architecture Describes how an application is built including its components, how they interact with each other, environment in which they operate and so on A software expert who makes high level design choices, including technical standards, tools, design principles,platforms to be used, etc"
            },
            {
                title:"Data Engineer",
        description:"Step by guid to becoming Data Engineer in 2022",
        details:"A data engineer is an IT worker whose primary job is to prepare data for analytical or operational uses. These software engineers are typically responsible for building data pipelines to bring together information from different source systems. They integrate, consolidate and cleanse data and structure it for use in analytics applications. They aim to make data easily accessible and to optimize their organization's big data ecosystem.The amount of data an engineer works with varies with the organization, particularly with respect to its size. The bigger the company, the more complex the analytics architecture, and the more data the engineer will be responsible for. Certain industries are more data-intensive, including healthcare, retail and financial services."
            },
            {
                title:"Robotic Engineer",
        description:"Step by guid to becoming Robotic Engineer in 2022",
        details:"Thanks to media portrayals, it’s easy to think of robots as foreign creatures made to take over our world. In reality, robots are incredibly smart machines that aid individuals and organizations in problem-solving every day. Those solutions might be as impactful as the Packbots used to inspect damage at the Fukushima Daiichi nuclear power station in 2011 — or as mundane as a Roomba cleaning up the cat hair on your rug so you don’t have to. For these inventions and many more, we have robotics engineers to thank.Robotics engineering is a growing field that entails a combination of data analysis, engineering, and computer science. People working in these fields use software and mechanical hardware to design, build, and test robots and their related machine-based processes.That said, each robotics engineering job is unique, and the practicalities of a job in this field often depend on the person’s background. While robotics engineers with coding backgrounds tend to focus more on the software side of things, those with mechanical engineering backgrounds lean toward the physical components of a robot."
            },
            {
                title:"Full Stack engineer",
        description:"Step by guid to becoming Full Stack engineer in 2022",
        details:"A full-stack engineer is a high-level software engineer that works to design, test, and implement various software applications. They create software, applications, and scalable web services, while also providing leadership for coding teams. Full-stack engineers usually possess prodigious skills and are involved in each stage of software development. This can include data structure completion, architecture design, code review, performance evaluation, internal tool management, and updates. The term “full-stack” refers to the engineer’s ability to work on both the front-end and back-end development of an application.At the beginning of a project, full-stack engineers may meet with members of the software development team in order to lay out the scale and scope of the software project. After that, they will begin designing and building the software. Full-stack engineers write various high-level and low-level code. They troubleshoot errors, help design the user experience (UX), resolve bugs, and improve the overall efficiency of the software. Full-stack engineers need excellent collaboration skills because they work with front- and back-end development team members"
            },
            {
                title:"Site Reliability engineer",
        description:"Step by guid to becoming Site Reliability engineer in 2022",
        details:"SRE is what you get when you treat operations as if it’s a software problem.The mission is to protect, provide for, and progress the software and systems behind all of Google’s public services — Google Search, Ads, Gmail, Android, YouTube, and App Engine, to name just a few — with an ever-watchful eye on their availability, latency, performance, and capacity.As SRE, we flip between the fine-grained detail of disk driver IO scheduling to the big picture of continental-level service capacity, across a range of systems and a user population measured in billions."
            },
            {
        
        title:"Customer Success specialist",
        description:"Step by guid to becoming Customer Success specialist in 2022",
        details:"A customer Success specialist takes your customer from the level of onboarding through various key stages and ensures they understand the comfort. This lets you improve the customer lifetime value and overall profit from it. A customer success specialist allows you to increase your customer’s lifetime value. You can learn from customer success managers and even other stakeholders in the customer success process. A customer success manager who can ensure customer success is a customer specialist. A customer success professional will help you learn more about the company and its customers."
            },
            {
        
        title:"Chief revenue Officer (CRO)",
        description:"Step by guid to becoming Chief revenue Officer (CRO) in 2022",
        details:"klkklklkl"
            },
            {
        
        title:"Data Science",
        description:"Step by guid to becoming Data Science in 2022",
        details:"hjhhhjjj"
        
            },
            {
        
        title:"Behavioral Health Technician",
        description:"Step by guid to becoming Behavioral Health Technician in 2022",
        details:"jkjkjkjkkj"
        
            },
            {
        
        title:"Android developer",
        description:"Step by guid to becoming android developer in 2022",
        details:"There are multiple ways to develop applications for the android; you can go down the path of hybrid application development where flutter, react-native, or NativeScript are the most common contenders. Flutter uses Dart, whereas React Native and Native Script rely on JavaScript. Answering the question of hybrid vs native is out of the scope of this roadmap. This roadmap is focused on the native Android apps development but if you are interested in learning any hybrid framework, my personal preference is react-native and I would recommend you to checkout the Frontend Developer Roadmap."
        
            },
            {
        
        title:"frontend developer",
        description:"Step by guid to becoming frontend developer in 2022",
        details:"hjhjhjhjhjhj"
        
            },
        ]
}