export const togglePopup = (type) => {
  let option = '';
  if (type===true||type==='open') {
    option = 'OPENPOPUP';
  } else if (type===false||type==='close') {
    option = 'CLOSEPOPUP';
  } else {
    option = 'OTHER';
  }
  return { type: option };
};