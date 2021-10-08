function getToValidFormat(phoneNumber) {
  switch (phoneNumber.length) {
    case 12:
      return phoneNumber;

    case 11: {
      phoneNumber = phoneNumber.slice(1, phoneNumber.length);
    }

    case (11, 10): {
      return '+7' + phoneNumber;
    }

    default:
      throw new Error('Wrong phone number format!');
  }
}

function formattedPhoneNumber(phoneNumber) {
  try {
    phoneNumber = getToValidFormat(phoneNumber);
  } catch (error) {
    return error;
  }

  let newNumber = '';

  for (let i = 0; i < phoneNumber.length; i++) {
    newNumber += phoneNumber[i];

    switch (i) {
      case 1: {
        newNumber += ' (';
        break;
      }
      case 4: {
        newNumber += ') ';
        break;
      }
      case 7: {
        newNumber += '-';
        break;
      }
      case 9: {
        newNumber += '-';
        break;
      }
      default:
        break;
    }
  }

  return newNumber;
}

const phoneNumber = prompt('Your number:');
alert(formattedPhoneNumber(phoneNumber));
