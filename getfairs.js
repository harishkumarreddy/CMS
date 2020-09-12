/**
 * Get the ticket fair
   ex:
   basic fair is 500. 
   for infants, no charge.
   for adults, for male 2 times heigher and for females 1.5 times.
   for Sr's it should be 0.5 times.

   Note: if infants are more than one, charge base price for each two infants.
 */

// get adulys counts by M and F
var adult_m = 2;
var audult_f = 3;

// get infants count
var infants = 3;
// get sr.Citigens count
var sr_citigens = 2;

var basic_fair = 500;
var adultMcharge = 2;
var adultFcharge = 1.5;
var infantscharge = 0;
var srcitigens = 0.5;
var ticket_fair = 0

// implimenting note
// Note: if infants are more than one, charge base price for each two infants.
if (infants > 1) {
    infantscharge = 1 / 2;
}

// adult male 500 * 2;
ticket_fair += ((basic_fair * adultMcharge) * adult_m);
debugger;
// adult mfeale 500 * 1.5;
ticket_fair = ticket_fair + ((basic_fair * adultFcharge) * audult_f);

// adult infants 500 * 0;
ticket_fair = ticket_fair + ((basic_fair * infantscharge) * infants);

// adult secitigens 500 * 0.5;
ticket_fair = ticket_fair + ((basic_fair * srcitigens) * sr_citigens);

console.log(ticket_fair);