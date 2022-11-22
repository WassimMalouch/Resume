import {About,Experience,Education,Certificate,Skills} from './components';
import avatar from "./assets/avatar.png"
 const App=()=>{
    const person = {
      avatar: avatar,
      name: 'Malouch Wassim',
      profession: 'Développeur Web',
      bio: "Jeune étudiant en 3ème année licence en science de l'informatique à l'institut supérieur de l'informatique à Tunis, Ariana. Dynamique et rigoureux , prêt à mettre mon enthousiasme au service de votre entreprise. La reactivité et le goût pour le travail bien fait sont mes caractéristiques .",
      address: 'Tunis , Tunisie',
      social: [
        {name: 'Github', url: 'https://github.com/WassimMalouch'},
        {name: 'Linkedin', url: 'https://www.linkedin.com/in/malouchwassim/'}
      ],
      experience: [
        {jobTitle: 'Stage', company: "Banque de l'habitat", startDate: 'Juin 2021', endDate: 'juillet 2021', jobDescription: "Un stage d'initiation afin de s'intégrer dans la vie professionnelle. J'ai decouvert les différentes activitées dans l'entreprise en m'interessant aux departements d'informatiques"},
      ],
      education: [
        {degree: "Licence en sciences de l'informatique", institution: 'ISI', startDate: '2020', endDate: '2023', description: "Licence en sciences de l'informatique a l' institut Superieur d'Informatique Ariana Tunisie"},
        {degree: "Baccalauréat en sciences de l'informatique", institution: 'Lycée Mourouj 1', startDate: '2019', endDate: '2020', description: "Baccalauréat en sciences de l'informatique avec mention bien 2020"},
      ],
      certificate: [
        {name: 'Development Web', institution: 'OPUS LAB', date: 'Jan 2022', description: ' HTML | CSS | JavaScript | Bootstrap | Git | GIthub | Jquery ' },
        {name: 'Development front-end', institution: 'OPUS LAB', date: 'octobre 2016', description: ' ReactJs | NodeJS ' }
      ],
      skills: [
        {name: 'HTML5', percentage: '95%'},
        {name: 'CSS', percentage: '90%'},
        {name: 'JavaScript', percentage: '75%'},
        {name: 'React', percentage: '50%'},
        {name: 'Node', percentage: '50%'},
        {name: 'SQL', percentage: '50%'},
        {name: 'Git', percentage: '50%'},
      ]
    };

    return (
        <div className='flex max-sm:flex-col   '>
          <div className='bg-primary w-[30%] sticky  h-screen max-sm:w-[100%] max-sm:flex max-sm:h-max'>
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social} />
          </div>

          <div className='overflow-scroll h-screen max-sm:h-fit max-sm:overflow-hidden w-[70%] max-sm:w-[100%]'>
              <div className=' flex flex-col justify-center items-center gap-2 p-1  bg-match '>
                <Experience experience={person.experience} />
                <Education education={person.education} />
                <Certificate certificate={person.certificate} />
                <Skills skills={person.skills} />
              </div>
          </div>

        </div>
    );
  }
export default App;
