// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-about",
          title: "about",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of some cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-when-light-leaves-the-lab-a-breakthrough-for-depression-treatment",
        
          title: 'When Light Leaves the Lab: A Breakthrough for Depression Treatment <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Article on a light-based breakthrough for depression treatment and the path from lab discovery to real-world care.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.inspirethemind.org/post/when-light-leaves-the-lab-a-breakthrough-for-depression-treatment", "_blank");
          
        },
      },{id: "post-the-light-that-instructs-the-brain-to-support-in-healing",
        
          title: 'The light that instructs the brain to support in healing <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Article on how light-based brain stimulation may support healing and mental health research.",
        section: "Posts",
        handler: () => {
          
            window.open("https://syntropicmedical.com/2025/01/30/the-light-that-instructs-the-brain-to-support-in-healing/", "_blank");
          
        },
      },{id: "post-meet-francesca-giovanetti-founder-s-associate",
        
          title: 'Meet Francesca Giovanetti, Founder’s Associate <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Interview with Francesca Giovanetti, Founder’s Associate at Syntropic Medical.",
        section: "Posts",
        handler: () => {
          
            window.open("https://syntropicmedical.com/2024/10/25/francesca-giovanetti-founders-associate/", "_blank");
          
        },
      },{id: "post-l-esperienza-di-francesca-giovanetti-wolisso-etiopia",
        
          title: 'L’esperienza di Francesca Giovanetti | Wolisso, Etiopia <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Esperienza di Francesca Giovanetti, una giovane Dottoressa trentina in Etiopia, presso il St. Luke Catholic Hospital di Wolisso.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.mediciconlafrica.org/gruppo-trentino/news/2024/lesperienza-di-francesca-giovanetti-wolisso-etiopia/", "_blank");
          
        },
      },{id: "books-is-ai-the-perfect-doctor",
          title: 'Is AI the Perfect Doctor?',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/perfect_doctor/";
            },},{id: "books-radical-candor",
          title: 'Radical Candor',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/radical_candor/";
            },},{id: "books-without-a-doubt",
          title: 'Without a Doubt',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/without_a_doubt/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-siiam",
          title: 'SIIAM',
          description: "Italian Society for Artificial Intelligence in Medicine",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-futurely",
          title: 'Futurely',
          description: "Mentor for the Healthcare Track",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-nucleate",
          title: 'Nucleate',
          description: "The world&#39;s largest community of bio-innovators",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-healthmakers",
          title: 'HealthMakers',
          description: "Candid conversations about what it really takes to build in healthcare, unpacking the messy incentives, real-world constraints, and high stakes that shape innovation in medicine",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-telos-circle",
          title: 'Telos Circle',
          description: "A society of builders engineering humanity&#39;s future",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
