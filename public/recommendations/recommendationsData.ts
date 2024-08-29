export interface Recommendation {
    reviewerName: string;
    jobTitle: string;
    date: string;
    relationship: string;
    reviewContent: string;
    imagePath: string;
  }
  
  export const recommendations: Recommendation[] = [
    {
      reviewerName: 'Tim Minnakhmetov',
      jobTitle: 'DevOps',
      date: 'March 11, 2024',
      relationship: 'Managed Joseph directly',
      reviewContent: `I've managed and worked with Joe for the past couple of years, and I cannot say enough good things about him. He is a true asset to any team, demonstrating exceptional coding abilities across multiple languages. Joe consistently delivers his projects on time, a testament to his strong work ethic and dedication. His ability to collaborate seamlessly with his team members sets Joe apart. His colleagues absolutely adore working with him, constantly praising him for his positive attitude, excellent communication skills, and willingness to lend a helping hand whenever needed. Joe fosters a supportive and inclusive environment, fostering team camaraderie and enabling everyone to perform at their best. Joe is a fantastic engineer who consistently exceeds expectations. His technical expertise, coupled with his commitment to quality and attention to detail, results in outstanding work that exceeds client requirements. He approaches every challenge enthusiastically and with a solutions-oriented mindset, making him an invaluable team member. I wholeheartedly recommend Joe for any engineering role. His exceptional skills, unwavering work ethic, and ability to foster a positive team dynamic make him a valuable asset to any organization. Joe's contributions have been instrumental to our team's success, and I do not doubt that he will continue to excel in his future endeavors.`,
      imagePath: '/recommendations/tim_minnakhmetov.jpeg',
    },
    {
      reviewerName: 'Jake Campbell',
      jobTitle: 'Principal QA Engineer at Routable',
      date: 'March 11, 2024',
      relationship: 'Was senior to Joseph',
      reviewContent: `I am delighted to write this recommendation for Joseph Smith, whom I have had the pleasure of working alongside as a Software Quality Test Automation Developer. Joseph is an exceptional professional whose contributions to our team have consistently exceeded expectations. One of Joseph's standout qualities is his remarkable productivity speed. His ability to efficiently complete tasks without compromising quality is truly impressive. Whether it's designing automated test scripts or executing test cases, Joseph consistently delivers outstanding results within tight deadlines. He possesses a deep understanding of various testing methodologies, tools, and frameworks, allowing him to tackle complex challenges with ease. Joseph's aptitude for grasping new concepts quickly and applying them effectively sets him apart as a highly capable and adaptable professional. His technical expertise has been instrumental in identifying and resolving critical issues, thereby enhancing the overall quality and reliability of our software products. Furthermore, Joseph's positive attitude is contagious. He approaches every task with enthusiasm, optimism, and a willingness to learn. His ability to maintain a positive outlook, even in the face of adversity, inspires those around him and fosters a collaborative and supportive work environment. Joseph's exceptional interpersonal skills and team-oriented mindset make him a pleasure to work with and a valuable addition to any team.`,
      imagePath: '/recommendations/jake_campbell.jpeg',
    },
    {
      reviewerName: 'Debra Sparr',
      jobTitle: 'Pythonista',
      date: 'March 7, 2024',
      relationship: 'Worked with Joseph',
      reviewContent: `I have had the privilege of working with Joe for roughly 2 years and have consistently been impressed by his reliability, technical proficiency, and collaborative spirit. In addition, due to his fantastic sense of humor and can-do attitude, he is always enjoyable to work with. We worked together to unlock sending local currencies over the SWIFT payment rail. This required testing every currency we supported (which was a lot) and Joe did a tremendous job. He even made sure to add valid banking requirements (IBAN, sort code, BIC SWIFT, etc) to a centralized document while he tested so that others did not have to waste any time or energy finding those codes on his or her own. I definitely recommend working with Joe! He is a tenacious team player with great experience in fintech, very reliable, and he's a great person.`,
      imagePath: '/recommendations/debra_sparr.jpeg',
    },
    {
      reviewerName: 'Prapti Shrestha',
      jobTitle: 'Technology Manager',
      date: 'March 5, 2024',
      relationship: 'Managed Joseph directly',
      reviewContent: `I've had the privilege of having Joe in my team and I can't recommend him enough as an SDET and a Quality Engineer; in fact, he'd be great at any role that demands intelligence, reliability, and a strong work ethic. Joe's intellect shines through in every task he undertakes, consistently delivering exceptional results. His willingness to assist his team whenever and wherever needed is truly commendable and I can tell for a fact that his coworkers would equally agree. Not only does Joe approach test automation tasks with remarkable speed and reliability, but he also demonstrates a keen ability to learn quickly and adapt to new challenges effortlessly. Joe's helpful nature, reliable performance, and utmost professionalism make him an invaluable asset to any team. With his unparalleled focus on his work and his commitment to excellence, I have every confidence that Joe will continue to thrive and make significant contributions wherever he goes. Joe is a great asset.`,
      imagePath: '/recommendations/prapti_shrestha.jpeg',
    },
    {
      reviewerName: 'Ashley Ancheta',
      jobTitle: 'Software QA Engineer',
      date: 'March 5, 2024',
      relationship: 'Worked with Joseph',
      reviewContent: `I was always impressed by Joe's attention to detail and knowledge in automation whenever we worked together. One of the things I most admire about Joe is his calm and friendly demeanor in the most stressful of situations. As an example, when I was working on code release I found multiple backend functional tests that failed and I needed help investigating and re-running them. Joe was super quick to respond and began investigating. He explained clearly where the test failed and why. Without his agility and support, I wouldn't have been able to complete code release as quickly as we did together. In addition to that, when Joe came back to Routable as a Senior SQA Engineer, he made himself always available to help the team out even while trying to get his bearings together during the first weeks. Joe is a dedicated and hardworking engineer who brings out the best quality in any project. Any team will be thrilled and happy they made a decision on Joe!`,
      imagePath: '/recommendations/ashley_ancheta.jpeg',
    },
    {
      reviewerName: 'Adam Jaffe Back',
      jobTitle: 'Engineering Manager at Routable',
      date: 'May 9, 2023',
      relationship: 'Worked with Joseph',
      reviewContent: `Joe is a talented QA engineer. During our time working together, he routinely worked as an integral part of the team unit together with software engineers, designers, and product managers to ship quality features with high impact. The features he helped QA were highly technical, including international payments and tax form collection. Joe also automated tests and led the team in bug bashes, owning a huge piece of the product development life cycle.`,
      imagePath: '/recommendations/adam_jaffe_back.jpeg',
    },
  ];
  