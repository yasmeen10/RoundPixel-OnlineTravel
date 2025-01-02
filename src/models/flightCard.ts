export interface IFlightCard {
  airlineLogo: string;
  airlineName: string;
  airlineCode: string;
  flightNumber: string;
  deptDate: string;
  arrivalDate: string;
  departureAirportCode: string;
  departureAirportName?: string;
  arrivalAirportCode: string;
  arrivalAirportName?: string;
  stops: number;
  price: number;
  isRefundable?: boolean;
  cabinClass?: string;
}
// {
//   "sequenceNum": 1,
//   "pKey": "52",
//   "isRefundable": true,
//   "itinTotalFare": {
//       "amount": 133.8,
//       "fareAmount": 0,
//       "promoCode": null,
//       "promoDiscount": 0,
//       "currencyCode": "KWD",
//       "totalTaxes": 101.8
//   },
//   "totalDuration": 160,
//   "deptDate": "2023-06-01T17:50:00",
//   "arrivalDate": "2023-06-01T20:30:00",
//   "cabinClass": "Economy",
//   "flightType": "",
//   "allJourney": {
//       "flights": [
//           {
//               "flightDTO": [
//                   {
//                       "departureOffset": 2,
//                       "arrivalOffset": 3,
//                       "isStopSegment": false,
//                       "deptTime": "17:50:00",
//                       "landTime": "20:30:00",
//                       "departureDate": "2023-06-01T17:50:00",
//                       "arrivalDate": "2023-06-01T20:30:00",
//                       "flightAirline": {
//                           "airlineCode": "NP",
//                           "airlineName": "Nile Air",
//                           "airlineLogo": "https://images.khaleejgate.com/Content\\AirlineIcons\\NP.png",
//                           "alternativeBusinessName": "Nile Air",
//                           "passportDetailsRequired": true
//                       },
//                       "operatedAirline": {
//                           "airlineCode": null,
//                           "airlineName": null,
//                           "airlineLogo": null,
//                           "alternativeBusinessName": null,
//                           "passportDetailsRequired": false
//                       },
//                       "durationPerLeg": 160,
//                       "departureTerminalAirport": {
//                           "airportCode": "CAI",
//                           "airportName": "Cairo International Airport",
//                           "cityName": "Cairo",
//                           "cityCode": "CAI",
//                           "countryCode": "EG",
//                           "countryName": "Egypt",
//                           "regionName": "Africa"
//                       },
//                       "arrivalTerminalAirport": {
//                           "airportCode": "KWI",
//                           "airportName": "Kuwait International Airport",
//                           "cityName": "Kuwait",
//                           "cityCode": "KWI",
//                           "countryCode": "KW",
//                           "countryName": "Kuwait",
//                           "regionName": "Asia"
//                       },
//                       "transitTime": "00:00:00",
//                       "flightInfo": {
//                           "flightNumber": "161",
//                           "equipmentNumber": "320",
//                           "mealCode": "",
//                           "bookingCode": "E",
//                           "cabinClass": "Economy"
//                       },
//                       "segmentDetails": {
//                           "uniqueKey": "",
//                           "baggage": "40 Kilograms",
//                           "childBaggage": null,
//                           "infantBaggage": null
//                       },
//                       "supplierRefID": null
//                   }
//               ],
//               "flightAirline": {
//                   "airlineCode": "NP",
//                   "airlineName": "Nile Air",
//                   "airlineLogo": "https://images.khaleejgate.com/Content\\AirlineIcons\\NP.png",
//                   "alternativeBusinessName": "Nile Air",
//                   "passportDetailsRequired": true
//               },
//               "elapsedTime": 160,
//               "stopsNum": 0
//           }
//       ]
//   },
//   "baggageInformation": [
//       {
//           "baggage": "40 Kilograms",
//           "childBaggage": null,
//           "infantBaggage": null,
//           "airlineName": "Nile Air",
//           "deptCity": "Cairo",
//           "landCity": "Kuwait",
//           "flightNum": "161"
//       }
//   ],
//   "passengerFareBreakDownDTOs": [
//       {
//           "key": "i57sUhj3nDKAVzNTILAAAA==",
//           "pricingMethod": "GuaranteedUsingAirlinePrivateFare",
//           "cancelPenaltyDTOs": [
//               {
//                   "price": 18,
//                   "curency": "KWD",
//                   "percentage": 0
//               }
//           ],
//           "changePenaltyDTOs": [
//               {
//                   "price": 15,
//                   "curency": "KWD",
//                   "percentage": 0
//               }
//           ],
//           "passengerQuantity": 2,
//           "passengerType": "ADT",
//           "passengersRef": [
//               "JG5PKDH6NZ723EWOW8JQSD==",
//               "LOU9VCUFXMX596GQJ0KWGA=="
//           ],
//           "flightFaresDTOs": [
//               {
//                   "fareAmount": 1050,
//                   "fareType": "BaseFare",
//                   "currencyCode": "EGP"
//               },
//               {
//                   "fareAmount": 11,
//                   "fareType": "EquivFare",
//                   "currencyCode": "KWD"
//               },
//               {
//                   "fareAmount": 45.15,
//                   "fareType": "TotalFare",
//                   "currencyCode": "KWD"
//               },
//               {
//                   "fareAmount": 34.15,
//                   "fareType": "TotalTax",
//                   "currencyCode": "KWD"
//               }
//           ],
//           "taxes": [
//               {
//                   "taxCode": "N4",
//                   "amount": 2,
//                   "taxName": null,
//                   "taxCurrencyCode": "KWD",
//                   "content": "i57sUhj3nDKAWzNTILAAAAAA",
//                   "countryCode": null
//               },
//               {
//                   "taxCode": "EG",
//                   "amount": 1.5,
//                   "taxName": null,
//                   "taxCurrencyCode": "KWD",
//                   "content": "i57sUhj3nDKAXzNTILAAAAAA",
//                   "countryCode": null
//               },
//               {
//                   "taxCode": "EQ",
//                   "amount": 0.65,
//                   "taxName": null,
//                   "taxCurrencyCode": "KWD",
//                   "content": "i57sUhj3nDKAYzNTILAAAAAA",
//                   "countryCode": null
//               },
//               {
//                   "taxCode": "JK",
//                   "amount": 0.5,
//                   "taxName": null,
//                   "taxCurrencyCode": "KWD",
//                   "content": "i57sUhj3nDKAZzNTILAAAAAA",
//                   "countryCode": null
//               },
//               {
//                   "taxCode": "O2",
//                   "amount": 0.15,
//                   "taxName": null,
//                   "taxCurrencyCode": "KWD",
//                   "content": "i57sUhj3nDKAazNTILAAAAAA",
//                   "countryCode": null
//               },
//               {
//                   "taxCode": "O9",
//                   "amount": 0.35,
//                   "taxName": null,
//                   "taxCurrencyCode": "KWD",
//                   "content": "i57sUhj3nDKAbzNTILAAAAAA",
//                   "countryCode": null
//               },
//               {
//                   "taxCode": "QH",
//                   "amount": 7.75,
//                   "taxName": null,
//                   "taxCurrencyCode": "KWD",
//                   "content": "i57sUhj3nDKAczNTILAAAAAA",
//                   "countryCode": null
//               },
//               {
//                   "taxCode": "S4",
//                   "amount": 0.65,
//                   "taxName": null,
//                   "taxCurrencyCode": "KWD",
//                   "content": "i57sUhj3nDKAdzNTILAAAAAA",
//                   "countryCode": null
//               },
//               {
//                   "taxCode": "XK",
//                   "amount": 1.5,
//                   "taxName": null,
//                   "taxCurrencyCode": "KWD",
//                   "content": "i57sUhj3nDKAezNTILAAAAAA",
//                   "countryCode": null
//               },
//               {
//                   "taxCode": "YQ",
//                   "amount": 3.1,
//                   "taxName": null,
//                   "taxCurrencyCode": "KWD",
//                   "content": "i57sUhj3nDKAfzNTILAAAAAA",
//                   "countryCode": null
//               },
//               {
//                   "taxCode": "YR",
//                   "amount": 16,
//                   "taxName": null,
//                   "taxCurrencyCode": "KWD",
//                   "content": "i57sUhj3nDKAgzNTILAAAAAA",
//                   "countryCode": null
//               }
//           ]
//       },
//       {
//           "key": "i57sUhj3nDKAlzNTILAAAA==",
//           "pricingMethod": "GuaranteedUsingAirlinePrivateFare",
//           "cancelPenaltyDTOs": [
//               {
//                   "price": 18,
//                   "curency": "KWD",
//                   "percentage": 0
//               }
//           ],
//           "changePenaltyDTOs": [
//               {
//                   "price": 15,
//                   "curency": "KWD",
//                   "percentage": 0
//               }
//           ],
//           "passengerQuantity": 1,
//           "passengerType": "CNN",
//           "passengersRef": [
//               "E3JQLVVK9MKF4R5KSFLHBV=="
//           ],
//           "flightFaresDTOs": [
//               {
//                   "fareAmount": 945,
//                   "fareType": "BaseFare",
//                   "currencyCode": "EGP"
//               },
//               {
//                   "fareAmount": 10,
//                   "fareType": "EquivFare",
//                   "currencyCode": "KWD"
//               },
//               {
//                   "fareAmount": 43.5,
//                   "fareType": "TotalFare",
//                   "currencyCode": "KWD"
//               },
//               {
//                   "fareAmount": 33.5,
//                   "fareType": "TotalTax",
//                   "currencyCode": "KWD"
//               }
//           ],
//           "taxes": [
//               {
//                   "taxCode": "N4",
//                   "amount": 2,
//                   "taxName": null,
//                   "taxCurrencyCode": "KWD",
//                   "content": "i57sUhj3nDKAmzNTILAAAAAA",
//                   "countryCode": null
//               },
//               {
//                   "taxCode": "EG",
//                   "amount": 1.5,
//                   "taxName": null,
//                   "taxCurrencyCode": "KWD",
//                   "content": "i57sUhj3nDKAnzNTILAAAAAA",
//                   "countryCode": null
//               },
//               {
//                   "taxCode": "EQ",
//                   "amount": 0.65,
//                   "taxName": null,
//                   "taxCurrencyCode": "KWD",
//                   "content": "i57sUhj3nDKAozNTILAAAAAA",
//                   "countryCode": null
//               },
//               {
//                   "taxCode": "JK",
//                   "amount": 0.5,
//                   "taxName": null,
//                   "taxCurrencyCode": "KWD",
//                   "content": "i57sUhj3nDKApzNTILAAAAAA",
//                   "countryCode": null
//               },
//               {
//                   "taxCode": "O2",
//                   "amount": 0.15,
//                   "taxName": null,
//                   "taxCurrencyCode": "KWD",
//                   "content": "i57sUhj3nDKAqzNTILAAAAAA",
//                   "countryCode": null
//               },
//               {
//                   "taxCode": "O9",
//                   "amount": 0.35,
//                   "taxName": null,
//                   "taxCurrencyCode": "KWD",
//                   "content": "i57sUhj3nDKArzNTILAAAAAA",
//                   "countryCode": null
//               },
//               {
//                   "taxCode": "QH",
//                   "amount": 7.75,
//                   "taxName": null,
//                   "taxCurrencyCode": "KWD",
//                   "content": "i57sUhj3nDKAszNTILAAAAAA",
//                   "countryCode": null
//               },
//               {
//                   "taxCode": "S4",
//                   "amount": 0.65,
//                   "taxName": null,
//                   "taxCurrencyCode": "KWD",
//                   "content": "i57sUhj3nDKAtzNTILAAAAAA",
//                   "countryCode": null
//               },
//               {
//                   "taxCode": "XK",
//                   "amount": 1.5,
//                   "taxName": null,
//                   "taxCurrencyCode": "KWD",
//                   "content": "i57sUhj3nDKAuzNTILAAAAAA",
//                   "countryCode": null
//               },
//               {
//                   "taxCode": "YQ",
//                   "amount": 3.1,
//                   "taxName": null,
//                   "taxCurrencyCode": "KWD",
//                   "content": "i57sUhj3nDKAvzNTILAAAAAA",
//                   "countryCode": null
//               },
//               {
//                   "taxCode": "YR",
//                   "amount": 15.35,
//                   "taxName": null,
//                   "taxCurrencyCode": "KWD",
//                   "content": "i57sUhj3nDKAwzNTILAAAAAA",
//                   "countryCode": null
//               }
//           ]
//       }
//   ]
// },
