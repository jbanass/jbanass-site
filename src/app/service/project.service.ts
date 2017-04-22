import {Project} from '../model/project.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export class ProjectService {
    projects: Array<Project> = [
        new Project('Syncala', 
                    'Synchronize With Scala!', 
                    [
                        `Syncala (SYNchronize with sCALA) was a distributed systems project written in Scala,
                        while utilizing the Akka messaging framework. With one server acting as a host, two clients
                        can connect and submit their own directories for differences.`,
                        
                        `The server would compare the two directories and find any mismatches, with one client being the source,
                        and the other being the target. Once the comparison was finished, Akka was used to send a message to both
                        clients regarding the result of the comparison.`,

                        `This project utilized Scala, Akka, virtual machines, Linux, and distributed design patterns 
                        to accomplish the goal.`
                    ]),
        new Project('Remote Web2Py Installer',
                    "Time Keeps on Slippin' into the __future__", 
                    [
                        `Python is great for web scraping, automation, and the __future__ module.
                        But what happens when you combine all three of those things?`,

                        `When I was still in university, we were tasked with a project of tunneling
                        into a virtual machine with SSH and installing Web2Py. However, we couldn't
                        install it ourselves. We had to automate Python to do it for us. To this day,
                        it has been one of the projects I keenly remember.
                        `,

                        `This project utilized modules such as BeautifulSoup, __future__ for Python,
                        and urllib to download, send, compile, and initiate a Web2Py installation.                        
                        `
                    ]),
        new Project('TwitchSaver', 
                    'Or How I Learned to Stop Worrying and Love Tk()', 
                    [
                        `Twitch.tv is an online video-game streaming service in which anyone can stream
                        themselves playing a game of their choice, and people can watch live, and chat to each other.
                        I would always miss the live showings, and I'd never remember to go back and watch them.
                        `,

                        `So, I had a problem, and Python was going to help me solve it.`,

                        `This project made API queries to Twitch.tv's web service, which returned back a JSON object
                        that I could parse out and call 'wget' to initiate a download of the video I had just missed.
                        This script also takes in an input file for a series of videos you wish to download, as well as a
                        search query to populate a list box to select which videos you wish to download.`,

                        `This project used Python's built-in Tkinter library for a GUI, and utilized the simplejsons module to
                        easily parse the JSON web result from my query. It was my first foray into GUI development with Python,
                        as well as my first experience with communicating with a web API.`
                    ]),
        new Project('PyWrite',
                    'Sokgraphs? What are Sokgraphs!?', 
                    [
                        `Before I was able to graduate with my degree, I had to take a Capstone course. Essentially, something that
                        groups you with a number of others from your own concentration, as well as other majors that you will
                        work with on the job, such as project managers, technical writers, so on and so forth.`,

                        `We were given a project to create a Sokgraph user interface. Sokgraphs are essentially shapes that are made
                        that can be parsed, analysed, and computed to return a word that the user "swiped". If you are familiar
                        with keyboards for an Android phone, you may be familiar with the built-in keyboard in which you can swipe your finger
                        across the keyboard, and it will properly discern which word you meant to type. This is exactly what we had to implement`,

                        `My role in the group was the lead programmer for the client-side. I was able to generate a Python prototype
                        that properly sent and received API requests and responses for a Sokgraph the same day it was assigned. It was then
                        analysed and re-written to have a smaller file-size, as well as a more efficient and resilient algorithm to discern which word the user
                        was swiping. Python then sent the Sokgraph to a MySQL database in which we used for data collection, in which Python later used for more
                        intelligent guesses for the Sokgraph given.`
                    ]),
        new Project('Malgol -> C Compiler',
                    'Converting a Toy Language into C', 
                    [
                        `This was a group project that assigned myself with two others in my curriculum in which we had to make a full
                        compiler that performed tokenization, AST traversal, and code generation to convert Malgol into x86 assembly.`,

                        `We programmed the compiler in Java, utilizing object-oriented programming patterns to properly parse
                        the AST and produce valid x86 assembly code that can be compiled with gcc.`,

                        `The project was successfully finished before the deadline and receieved a near-perfect grade.`
                    ]),
        new Project('C++ Raytracing Engine',
                    'How Hard Can it Be?', 
                    [
                        `I love PC games. I was essentially raised on them. As such, I was familiar with OpenGL. Or at least I thought I was.`,

                        `I was given a project to build a C++ Raytrace Engine utilizing OpenGL and object-oriented programming
                        patterns. We had to apply translations, transforms, and matrix calculations to properly perform rotations, scaling, and rendering
                        of 3D shapes. This project was truly challenging, as it was the first time I was exposed to programming patterns and the deeper
                        cuts of the OpenGL library.`
                    ])
    ];

    mobileShowProjects: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    mobileShowProjects$ = this.mobileShowProjects.asObservable();

    getShowcaseProjects() : Array<Project> {
        return this.projects.slice(0, 6);
    }

    getAllProjects() : Array<Project> {
        return this.projects;
    }

    findProject(name: string) : Project {
        return this.projects.find(myProject => myProject.name === name)
    }

    showAllProjects() {
        this.mobileShowProjects.next(true);
    }
}