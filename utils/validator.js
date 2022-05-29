function checkDiecast(diecast) {
   // Check for empty fields
   if (!diecast.carNumber || !diecast.make || !diecast.model || !diecast.year ||
       !diecast.scale || !diecast.sponsor || !diecast.driverFirst || !diecast.driverLast) {
      return 'Required fields cannot be empty';
   } 
   // Character lengths
   else if (diecast.carNumber.length > 2 || diecast.make.length > 30 || diecast.model.length > 30 ||
            diecast.year.length > 4 || diecast.scale.length > 4 || diecast.sponsor.length > 30 || 
            diecast.driverFirst > 30 || diecast.driverLast > 30) {
      return 'Please check character lengths';
   }
   else {
      return 'valid';
   }
}

module.exports = {
   checkDiecast,
};
