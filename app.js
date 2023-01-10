import React from "react";
import ReactDOM from "react-dom/client";

// const heading1 = React.createElement(
//   "h1",
//   {
//     id: "head1",
//   },
//   "First Heading with parcel"
// );

// const heading2 = React.createElement(
//   "h2",
//   {
//     id: "head2",
//   },
//   "Second heading"
// );
// const heading3=<h3>This is heading 3</h3>

// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//   },
//   [heading1, heading2,heading3]
// );
const heading1 = <h1 id="heading1">The content goes here...</h1>;
const Headert = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="logo"
          src="https://www.shutterstock.com/image-vector/food-logo-smile-label-company-260nw-1271590297.jpg"
          alt=""
        />
      </div>
      
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Offers</li>
          <li>Cart</li>
        </ul>
      </div>
      <div className="userIcon">
        <img
          className="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt=""
        />
      </div>
    </div>
  );
};
const resturantCard = [
  {
  "type": "restaurant",
  "data": {
    "type": "F",
    "id": "424100",
    "name": "Thomsons Casa",
    "uuid": "f6cfd044-f354-415a-9e9c-9c9395c38564",
    "city": "66",
    "area": "East Fort",
    "totalRatingsString": "1000+ ratings",
    "cloudinaryImageId": "g7ausfcdmu0nwyf4kkxe",
    "cuisines": [
      "Chinese",
      "North Indian",
      "South Indian",
      "Ice Cream",
      "Biryani"
    ],
    "tags": [
      
    ],
    "costForTwo": 23600,
    "costForTwoString": "₹236 FOR TWO",
    "deliveryTime": 25,
    "minDeliveryTime": 25,
    "maxDeliveryTime": 25,
    "slaString": "25 MINS",
    "lastMileTravel": 2.299999952316284,
    "slugs": {
      "restaurant": "thomson's-casa-ollur-ollur",
      "city": "thrissur"
    },
    "cityState": "66",
    "address": "Thomsons casa, Ikkandavarrier Rd, Thrissur",
    "locality": "Ollur",
    "parentId": 235965,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "50% off",
      "shortDescriptionList": [
        {
          "meta": "50% off | Use TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹100 | Use code TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "50% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹100 | Use code TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "ribbon": [
      {
        "type": "PROMOTED"
      }
    ],
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        {
          "name": "distance",
          "fee": 1900,
          "message": ""
        },
        {
          "name": "time",
          "fee": 0,
          "message": ""
        },
        {
          "name": "special",
          "fee": 0,
          "message": ""
        }
      ],
      "totalFees": 1900,
      "message": "",
      "title": "Delivery Charge",
      "amount": "1900",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=5669725~p=4~eid=00000185-99d3-457e-1f3f-3e3c00e5042a",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "2.2 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "424100",
      "deliveryTime": 25,
      "minDeliveryTime": 25,
      "maxDeliveryTime": 25,
      "lastMileTravel": 2.299999952316284,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.3",
    "totalRatings": 1000,
    "new": false
  },
  "subtype": "basic"
}, {
  "type": "restaurant",
  "data": {
    "type": "F",
    "id": "381843",
    "name": "Radha Krishna Sweets",
    "uuid": "4ee2ecd6-e53c-4861-9ebc-92067f12e6b5",
    "city": "66",
    "area": "Nayakkanal",
    "totalRatingsString": "50+ ratings",
    "cloudinaryImageId": "xqtoaxed1zbzir2vrwsi",
    "cuisines": [
      "Chinese",
      "South Indian"
    ],
    "tags": [
      
    ],
    "costForTwo": 20000,
    "costForTwoString": "₹200 FOR TWO",
    "deliveryTime": 17,
    "minDeliveryTime": 17,
    "maxDeliveryTime": 17,
    "slaString": "17 MINS",
    "lastMileTravel": 0.5,
    "slugs": {
      "restaurant": "chennai-idly-poothole-poothole",
      "city": "thrissur"
    },
    "cityState": "66",
    "address": "RADHAKRISHNA SWEET'S, A R MENON ROAD, NAYAKKANAL\t680001",
    "locality": "Poothole",
    "parentId": 10553,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "25% off",
      "shortDescriptionList": [
        {
          "meta": "25% off | Use TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "25% off up to ₹65 | Use code TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "25% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "25% off up to ₹65 | Use code TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        {
          "name": "distance",
          "fee": 1900,
          "message": ""
        },
        {
          "name": "time",
          "fee": 0,
          "message": ""
        },
        {
          "name": "special",
          "fee": 0,
          "message": ""
        }
      ],
      "totalFees": 1900,
      "message": "",
      "title": "Delivery Charge",
      "amount": "1900",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "0.5 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "381843",
      "deliveryTime": 17,
      "minDeliveryTime": 17,
      "maxDeliveryTime": 17,
      "lastMileTravel": 0.5,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.0",
    "totalRatings": 50,
    "new": false
  },
  "subtype": "basic"
},
{
  "type": "restaurant",
  "data": {
    "type": "F",
    "id": "73945",
    "name": "Hotel Akshaya - Marar Road",
    "uuid": "41b2f186-a159-4a67-8b4a-617f6103ed1e",
    "city": "66",
    "area": "Round South",
    "totalRatingsString": "1000+ ratings",
    "cloudinaryImageId": "b6x2rzl2n9b48m0v8gbu",
    "cuisines": [
      "Chinese",
      "North Indian",
      "South Indian",
      "Biryani"
    ],
    "tags": [
      
    ],
    "costForTwo": 30000,
    "costForTwoString": "₹300 FOR TWO",
    "deliveryTime": 18,
    "minDeliveryTime": 18,
    "maxDeliveryTime": 18,
    "slaString": "18 MINS",
    "lastMileTravel": 1,
    "slugs": {
      "restaurant": "akshaya-multicuisine-restaurant-poothole-poothole",
      "city": "thrissur"
    },
    "cityState": "66",
    "address": "4, Marar Rd, Marar Road Area, Round South, Marar Rd, Marar Road Area, Round South, Poothole, Thrissur",
    "locality": "Marar Road",
    "parentId": 97796,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "40% off",
      "shortDescriptionList": [
        {
          "meta": "40% off | Use MISSEDYOU",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "40% off up to ₹80 | Use code MISSEDYOU",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "40% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use MISSEDYOU",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "40% off up to ₹80 | Use code MISSEDYOU",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        {
          "name": "distance",
          "fee": 1900,
          "message": ""
        },
        {
          "name": "time",
          "fee": 0,
          "message": ""
        },
        {
          "name": "special",
          "fee": 0,
          "message": ""
        }
      ],
      "totalFees": 1900,
      "message": "",
      "title": "Delivery Charge",
      "amount": "1900",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "1 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "73945",
      "deliveryTime": 18,
      "minDeliveryTime": 18,
      "maxDeliveryTime": 18,
      "lastMileTravel": 1,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.3",
    "totalRatings": 1000,
    "new": false
  },
  "subtype": "basic"
},
{
  "type": "restaurant",
  "data": {
    "type": "F",
    "id": "73245",
    "name": "Vrindavan",
    "uuid": "bdb48a69-e669-409b-b21b-79ad5f4074eb",
    "city": "66",
    "area": "Keerankulangara",
    "totalRatingsString": "100+ ratings",
    "cloudinaryImageId": "smivbeg7hwosiyn7ngc5",
    "cuisines": [
      "Chinese",
      "North Indian",
      "South Indian",
      "Ice Cream",
      "Biryani"
    ],
    "tags": [
      
    ],
    "costForTwo": 25000,
    "costForTwoString": "₹250 FOR TWO",
    "deliveryTime": 18,
    "minDeliveryTime": 18,
    "maxDeliveryTime": 18,
    "slaString": "18 MINS",
    "lastMileTravel": 1.7000000476837158,
    "slugs": {
      "restaurant": "vrindavan-poothole-poothole",
      "city": "thrissur"
    },
    "cityState": "66",
    "address": "XXVI/271/1,2 MIDHUNAPPILLI CENTRE CENTRE, BENNET ROAD THRISSUR, Thrissur Circle, Thrissur, Kerala-680020",
    "locality": "Bennet Road",
    "parentId": 4375,
    "unserviceable": false,
    "veg": true,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "aggregatedDiscountInfo": {
      "header": "50% off",
      "shortDescriptionList": [
        {
          "meta": "50% off | Use TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹100 | Use code TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "aggregatedDiscountInfoV2": {
      "header": "50% OFF",
      "shortDescriptionList": [
        {
          "meta": "Use TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "descriptionList": [
        {
          "meta": "50% off up to ₹100 | Use code TRYNEW",
          "discountType": "Percentage",
          "operationType": "RESTAURANT"
        }
      ],
      "subHeader": "",
      "headerType": 0,
      "superFreedel": ""
    },
    "ribbon": [
      {
        "type": "PROMOTED"
      }
    ],
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        {
          "name": "distance",
          "fee": 1900,
          "message": ""
        },
        {
          "name": "time",
          "fee": 0,
          "message": ""
        },
        {
          "name": "special",
          "fee": 0,
          "message": ""
        }
      ],
      "totalFees": 1900,
      "message": "",
      "title": "Delivery Charge",
      "amount": "1900",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=5661753~p=7~eid=00000185-99d3-457e-1f3f-3e3d00e50733",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "1.7 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "73245",
      "deliveryTime": 18,
      "minDeliveryTime": 18,
      "maxDeliveryTime": 18,
      "lastMileTravel": 1.7000000476837158,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "3.9",
    "totalRatings": 100,
    "new": false
  },
  "subtype": "basic"
},
{
  "type": "restaurant",
  "data": {
    "type": "F",
    "id": "654310",
    "name": "Saravana Pure Vegetarian Restaurant\t",
    "uuid": "1c4bddb2-a1cf-4917-aeba-1810bc9f62d3",
    "city": "66",
    "area": "Poothole",
    "totalRatingsString": "20+ ratings",
    "cloudinaryImageId": "1eb36dbebd2ead92937d444cac5c0335",
    "cuisines": [
      "North Indian",
      "Chinese",
      "South Indian"
    ],
    "tags": [
      
    ],
    "costForTwo": 20000,
    "costForTwoString": "₹200 FOR TWO",
    "deliveryTime": 25,
    "minDeliveryTime": 25,
    "maxDeliveryTime": 25,
    "slaString": "25 MINS",
    "lastMileTravel": 0.4000000059604645,
    "slugs": {
      "restaurant": "saravana-pure-vegetarian-restaurant-poothole-poothole",
      "city": "thrissur"
    },
    "cityState": "66",
    "address": "36/7243,7244, ROUND NORTH, THRISSUR CIRCLE, THRISSUR, KERALA-680001",
    "locality": "Thrissur circle",
    "parentId": 393744,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [
      
    ],
    "chain": [
      
    ],
    "feeDetails": {
      "fees": [
        {
          "name": "distance",
          "fee": 1900,
          "message": ""
        },
        {
          "name": "time",
          "fee": 0,
          "message": ""
        },
        {
          "name": "special",
          "fee": 0,
          "message": ""
        }
      ],
      "totalFees": 1900,
      "message": "",
      "title": "Delivery Charge",
      "amount": "1900",
      "icon": ""
    },
    "availability": {
      "opened": true,
      "nextOpenMessage": "",
      "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
      "imageBased": [
        
      ],
      "textBased": [
        
      ],
      "textExtendedBadges": [
        
      ]
    },
    "lastMileTravelString": "0.4 kms",
    "hasSurge": false,
    "sla": {
      "restaurantId": "654310",
      "deliveryTime": 25,
      "minDeliveryTime": 25,
      "maxDeliveryTime": 25,
      "lastMileTravel": 0.4000000059604645,
      "lastMileDistance": 0,
      "serviceability": "SERVICEABLE",
      "rainMode": "NONE",
      "longDistance": "NOT_LONG_DISTANCE",
      "preferentialService": false,
      "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "3.6",
    "totalRatings": 20,
    "new": true
  },
  "subtype": "basic"
},]

const RestCard=(props)=>{
  console.log("props verinfa",props);
return(<div className="card">

<img className="cardImg" 
src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+props.restaurant.data?.cloudinaryImageId} alt="cardImage" />
<h2>{props.restaurant.data?.name}</h2>
<h3>{props.restaurant.data?.cuisines.join(",")}</h3>
<h4 className="rating">Rating {props.restaurant.data?.avgRating}</h4>
</div>)
}
const Body=()=>{
  return(
    <>
    <div className="searchbar">
        <input className="input-txt" type="text" placeholder="search your favourites..." />
        <button className="search-btn">Search</button>
      </div>
    <div className="bodyCard">
      {
        resturantCard.map((resturant)=>{
         return <RestCard restaurant={resturant}/>
        })
      }



    </div>
    </>   
  )
}

const Appon1 = () => {
  return (
    <div id="container">
      <Headert />
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Appon1 />);
