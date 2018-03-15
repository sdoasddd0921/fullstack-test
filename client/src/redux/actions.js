export const togglePopup = (type, result='default result', err=false) => {
  let option = '';
  if (type===true||type==='open') {
    option = 'OPENPOPUP';
  } else if (type===false||type==='close') {
    option = 'CLOSEPOPUP';
  } else {
    option = 'OTHER';
  }
  return {
    type: option,
    result,
    err
  };
};