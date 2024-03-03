class Telephone{
    constructor(phoneNumbers, observers){
      this.phoneNumbers = [];
      this.observers = [];
    }

    addPhoneNumber(number){
      this.phoneNumbers.push(number);
    }

    removePhoneNumber(number){
      const index = this.phoneNumbers.indexOf(number);
      if(index >= 0)
      {
        this.phoneNumbers.splice(index, 1);
      } 
    }


    dialPhoneNumber(number){
      if(this.phoneNumbers.includes(number)){
        this.notifyObservers(number);
      }else{
        this.notifyObservers(`${number} is not in your contacts`);
      }
    }
   
    addObserver(observer){
      this.observers.push(observer);
    }
    removeObserver(observer){
      const index = this.observers.indexOf(observer);
      if(index !== -1)
      {
        this.observers.splice(index,1);
      }
    }
    notifyObservers(phoneNumber){
      this.observers.forEach(observer => observer.update(phoneNumber));
    }
}


  class Observer{
    update(phoneNumber){
      console.log("Dialing the number", phoneNumber);
    }
  }
  class ObservedUser1 extends Observer{
    update(phoneNumber){
      console.log("Dialed", phoneNumber);
    }
  }
  class ObservedUser2 extends Observer{
    update(phoneNumber){
      console.log("Now Dialing", phoneNumber);
    }
  }
  const telephone = new Telephone();
  const observer1 = new ObservedUser1();
  const observer2 = new ObservedUser2();
  telephone.addObserver(observer1);
  telephone.addObserver(observer2);
  telephone.addPhoneNumber('0987654321');
  telephone.dialPhoneNumber('0987654321');
  telephone.removePhoneNumber('0987654321');
  telephone.dialPhoneNumber('0987654321');
  telephone.removeObserver(observer1);
