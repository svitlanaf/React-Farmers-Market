import React from 'react';
// import marketSchedule from '../data';

export const marketSchedule = [  
    {  
       id: 0,
       day: "Sunday",
       location: "Lents International",
       hours: "9:00am - 2:00pm",
       booth: "4A"
    },
    {  
       id: 1,
       day: "Monday",
       location: "Pioneer Courthouse Square",
       hours: "10:00am - 2:00pm",
       booth: "7C"
    },
    {  
       id: 2,
       day: "Tuesday",
       location: "Hillsboro",
       hours: "5:00pm - 8:30pm",
       booth: "1F"
    },
    {  
       id: 3,
       day: "Wednesday",
       location: "Shemanski Park",
       hours: "10:00am - 2:00pm",
       booth: "3E"
    },
    {  
       id: 4,
       day: "Thursday",
       location: "Northwest Portland",
       hours: "2:00pm - 6:00pm",
       booth: "6D"
    },
    {  
       id: 5,
       day: "Saturday",
       location: "Beaverton",
       hours: "10:00am - 1:30pm",
       booth: "9G"
    }
   ];

   function getMarkets () {
    return (
        <div>
          <hr/>
          {marketSchedule.map((market, index) =>
            <Market location={market.location}
                hours={market.hours}
                booth={market.booth}
                key={index} />
          )}
        </div>
      );
   }

   export default getMarkets;
