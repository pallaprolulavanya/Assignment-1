const userProfile ={};
// defining immutable property
Object.defineProperty(userProfile, 'dateOfBirth', {
    value: '1990-01-01',
    writable: false, //can not change the value
    configurable: true, // will not be able to delete the property
    enumerable: true 
  });

// defining mutable property
userProfile.email = 'lavanya@gmail.com';

console.log(userProfile);

userProfile.dateOfBirth = '1-1-1995';
userProfile.email = 'test@gmail.com';

console.log(userProfile);


delete userProfile.dateOfBirth;
delete userProfile.email;
console.log(userProfile);