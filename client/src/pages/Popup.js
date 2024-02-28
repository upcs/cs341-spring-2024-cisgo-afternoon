import React from 'react';
const countryFlagUrls = {
    "Sweden": "https://www.worldometers.info/img/flags/sw-flag.gif",
    "Philippines": "https://www.worldometers.info/img/flags/small/tn_rp-flag.gif",
    "Canada": "https://www.worldometers.info/img/flags/small/tn_ca-flag.gif",
    "China": "https://www.worldometers.info/img/flags/small/tn_ch-flag.gif",
    "Slovenia": "https://www.worldometers.info/img/flags/small/tn_lo-flag.gif",
    "Indonesia": "https://www.worldometers.info/img/flags/small/tn_id-flag.gif",
    "Ukraine": "https://www.worldometers.info/img/flags/small/tn_up-flag.gif",
    "Serbia": "https://www.worldometers.info/img/flags/small/tn_ri-flag.gif",
    "Portugal": "https://www.worldometers.info/img/flags/small/tn_po-flag.gif",
    "France": "https://www.worldometers.info/img/flags/small/tn_fr-flag.gif",
    "Brazil": "https://www.worldometers.info/img/flags/small/tn_br-flag.gif",
    "Macedonia": "https://www.worldometers.info/img/flags/small/tn_mk-flag.gif",
    "Czech Republic": "https://www.worldometers.info/img/flags/small/tn_ez-flag.gif",
    "Malaysia": "https://www.worldometers.info/img/flags/small/tn_my-flag.gif",
    "Mongolia": "https://www.worldometers.info/img/flags/small/tn_mg-flag.gif",
    "Vietnam": "https://www.worldometers.info/img/flags/small/tn_vm-flag.gif",
    "Poland": "https://www.worldometers.info/img/flags/small/tn_pl-flag.gif",
    "Mexico": "https://www.worldometers.info/img/flags/small/tn_mx-flag.gif",
    "Costa Rica": "https://www.worldometers.info/img/flags/small/tn_cs-flag.gif",
    "Cuba": "https://www.worldometers.info/img/flags/small/tn_cu-flag.gif",
    "Russia": "https://www.worldometers.info/img/flags/small/tn_rs-flag.gif",
    "Morocco": "https://www.worldometers.info/img/flags/small/tn_mo-flag.gif",
    "Jamaica": "https://www.worldometers.info/img/flags/small/tn_jm-flag.gif",
    "Mali": "https://www.worldometers.info/img/flags/small/tn_ml-flag.gif",
    "Micronesia": "https://www.worldometers.info/img/flags/small/tn_fm-flag.gif",
    "South Africa": "https://www.worldometers.info/img/flags/small/tn_sf-flag.gif",
    "Albania": "https://www.worldometers.info/img/flags/small/tn_al-flag.gif",
    "Colombia": "https://www.worldometers.info/img/flags/small/tn_co-flag.gif",
    "Argentina": "https://www.worldometers.info/img/flags/small/tn_ar-flag.gif",
    "French Polynesia": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Flag_of_French_Polynesia.svg/800px-Flag_of_French_Polynesia.svg.png",
    "Palestinian Territory": "https://www.worldometers.info/img/flags/small/tn_palestine-flag.gif",
    "Uruguay": "https://www.worldometers.info/img/flags/small/tn_uy-flag.gif",
    "Finland": "https://www.worldometers.info/img/flags/small/tn_fi-flag.gif",
    "Greece": "https://www.worldometers.info/img/flags/small/tn_gr-flag.gif",
    "Syria": "https://www.worldometers.info/img/flags/small/tn_sy-flag.gif",
    "Cambodia": "https://www.worldometers.info/img/flags/small/tn_cb-flag.gif",
    "Kazakhstan": "https://www.worldometers.info/img/flags/small/tn_kz-flag.gif",
    "Pakistan": "https://www.worldometers.info/img/flags/small/tn_pk-flag.gif",
    "Ireland": "https://www.worldometers.info/img/flags/small/tn_ei-flag.gif",
   
    
  };

  const getCountryFlagUrl = (countryName) => {
    const trimmedCountryName = countryName.trim();
    return countryFlagUrls[trimmedCountryName] || ''; 
  };
  
  const Popup = ({ isOpen, onClose, experience }) => {
    if (!isOpen || !experience) return null;
  
    const { name, contact, body } = experience;
  
    return (
      <div className="popup-overlay" onClick={onClose}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <span className="popup-close" onClick={onClose}>X</span>
          <h2>{name.firstName} {name.lastName}</h2>
          <div className="popup-details">
            <div className="popup-info">
              <p>Email: {contact.email}</p>
              <p>
                Country: {body.location.country}
                <img 
                  src={getCountryFlagUrl(body.location.country)} 
                  alt="Country Flag" 
                  className="popup-flag" 
                  style={{ width: '30px', height: 'auto' }} // Adjust size as needed
                />
              </p>
              <p>Region: {body.location.region}</p>
              <p>Description: {body.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  
  export default Popup;