//Filter module
  export const filter = {
    name: '#name',
    city: '#city',
    submit: '[type=submit]',
    clear: '[type=button]'
  };

//User info container
  export const candidate = {
    profileContainer: '.CrewMember-container',
    profileImage: '.CrewMemeber-photo',
    profileName: '.CrewMemeber-name',
    upButton: '.CrewMember-up',
    fullName: '.CrewMemeber-name > div:nth-child(1)',
    city: '.CrewMemeber-name > div:nth-child(2)',
    //Missing appropriate class i.e crewMember-down
    //downButton: '[type=button]'
    buttonsContainer: '.CrewMember-toolbar'
  };

  //Hiring flow section
  export const hiringSection = {
    step1: ' ',
    step2: ' ',
    step3: ' '
  }
