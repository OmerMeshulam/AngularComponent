export class FunctionsService {
  toggleContent = '';
  dropdownContent = '';
    setToggleContent(state: boolean){
        if(state){
            this.toggleContent = 'מחוסן';
          }
          else{
            this.toggleContent = 'לא מחוסן';
          }
          return this.toggleContent;
    }
    preventDefaultPlaceholder(placeholder: string){
      if(placeholder === 'בחר תחביב' || placeholder === '...הבחירה נמחקה'){
        this.dropdownContent = '';
      }
      else{
        this.dropdownContent = placeholder;
      }
      return this.dropdownContent;
    }
    logData(nameInput: string, timeInput: string, dropdownContent: string, toggleContent: string){
      console.log('Your Name is: '+ nameInput +', the Time is: '+ timeInput +', your Hobbie is: '+ dropdownContent +', and you are: '+ toggleContent +'.'); 
    }
    resetDropdown(placeholder: string){
      if(placeholder !== 'בחר תחביב'){
        placeholder = 'בחר תחביב';
        this.dropdownContent = placeholder;
    }
    return this.dropdownContent, placeholder;
    }
}