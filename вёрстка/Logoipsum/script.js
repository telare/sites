const year_btn = document.getElementById("footer-year-btn");
const month_btn = document.getElementById("footer-month-btn");


const header_title_btn = document.getElementById("header-title-btn");


const starter_offer_box = document.getElementById("starter-offer-box");
const starter_offer_title = document.getElementById("starter-offer-title");
const starter_offer_cost = document.getElementById("starter-offer-cost");
const starter_offer_desc = document.getElementById("starter-offer-desc");
const starter_offer_btn = document.getElementById("starter-offer-btn");

const premium_offer_box = document.getElementById("premium-offer-box");
const premium_offer_title = document.getElementById("premium-offer-title");
const premium_cost = document.getElementById("premium-offer-cost");
const premium_offer_desc = document.getElementById("premium-offer-desc");
const premium_offer_btn = document.getElementById("premium-offer-btn");

const enterprise_offer_box = document.getElementById("enterprise-offer-box");
const enterprise_offer_title = document.getElementById("enterprise-offer-title");
const enterprise_cost = document.getElementById("enterprise-cost");
const enterprise_offer_desc = document.getElementById("enterprise-offer-desc");
const enterprise_offer_btn = document.getElementById("enterprise-offer-btn");


header_title_btn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    })
})

month_btn.addEventListener('click', function () {
    month_btn.style.background = "#5454d4";
    month_btn.style.color = "#fff";
    month_btn.style.borderRadius = "0 10px 10px 0";

    year_btn.style.background = "rgba(247, 246, 251, 1)";
    year_btn.style.color = "#19191b";

    premium_cost.textContent = "$129 /month";
    enterprise_cost.textContent = "$149 /month";
})

year_btn.addEventListener('click', function () {
    year_btn.style.background = "#5454d4";
    year_btn.style.color = "#fff";
    year_btn.style.borderRadius = "10px 0 0 10px";

    month_btn.style.background = "rgba(247, 246, 251, 1)";
    month_btn.style.color = "#19191b";

    premium_cost.textContent = "$29 /month";
    enterprise_cost.textContent = "$49 /month";
})



starter_offer_box.addEventListener('mouseover', function () {
    starter_offer_box.style.background = '#ff7143';
    starter_offer_box.style.transitionDuration = '1s';

    starter_offer_box.style.height = '473px';
    starter_offer_box.style.margin = '0';

    starter_offer_title.style.color = '#fff';
    starter_offer_title.style.transitionDuration = '1s';
    
    starter_offer_cost.style.color = '#fff';
    starter_offer_cost.style.transitionDuration = '1s';


    starter_offer_desc.style.color = '#fff';
    starter_offer_desc.style.transitionDuration = '1s';

    starter_offer_btn.style.background = '#9f3919';
    starter_offer_btn.style.color = '#fff';
    starter_offer_btn.style.transitionDuration = '1s';
    starter_offer_btn.style.border = 'none';


    premium_offer_box.style.background = '#f8f8f8';
    premium_offer_box.style.boxShadow = 'none';
    premium_offer_box.style.height = '441px';
    premium_offer_box.style.margin = '14px 0 0 0';
    premium_offer_title.style.color = '#696871';
    premium_offer_title.style.transitionDuration = '1s';
    
    premium_cost.style.color = '#1d293f';
    premium_cost.style.transitionDuration = '1s';


    premium_offer_desc.style.color = '#696871';
    premium_offer_desc.style.transitionDuration = '1s';

    premium_offer_btn.style.background = '#fff';
    premium_offer_btn.style.color = '#5454d4';
    premium_offer_btn.style.transitionDuration = '1s';

})
starter_offer_box.addEventListener('mouseout', function () {
    starter_offer_box.style.background = '#f8f8f8';
    starter_offer_box.style.transitionDuration = '1s';

    starter_offer_box.style.height = '441px';
    starter_offer_box.style.margin = '14px 0 0 0';

    starter_offer_title.style.color = '#696871';
    starter_offer_title.style.transitionDuration = '1s';
    
    starter_offer_cost.style.color = '#1d293f';
    starter_offer_cost.style.transitionDuration = '1s';


    starter_offer_desc.style.color = '#696871';
    starter_offer_desc.style.transitionDuration = '1s';

    starter_offer_btn.style.background = '#fff';
    starter_offer_btn.style.color = '#5454d4';
    starter_offer_btn.style.transitionDuration = '1s';
})



premium_offer_box.addEventListener('mouseover', function () {
    premium_offer_box.style.background = '#ff7143';
    premium_offer_box.style.transitionDuration = '1s';

    premium_offer_box.style.height = '473px';
    premium_offer_box.style.margin = '0';

    premium_offer_title.style.color = '#fff';
    premium_offer_title.style.transitionDuration = '1s';
    
    premium_cost.style.color = '#fff';
    premium_cost.style.transitionDuration = '1s';


    premium_offer_desc.style.color = '#fff';
    premium_offer_desc.style.transitionDuration = '1s';

    premium_offer_btn.style.background = '#9f3919';
    premium_offer_btn.style.color = '#fff';
    premium_offer_btn.style.transitionDuration = '1s';
    premium_offer_btn.style.border = 'none';


})
premium_offer_box.addEventListener('mouseout', function () {
    premium_offer_box.style.background = '#f8f8f8';
    premium_offer_box.style.transitionDuration = '1s';

    premium_offer_box.style.height = '441px';
    premium_offer_box.style.margin = '14px 0 0 0';

    premium_offer_title.style.color = '#696871';
    premium_offer_title.style.transitionDuration = '1s';
    
    premium_cost.style.color = '#1d293f';
    premium_cost.style.transitionDuration = '1s';


    premium_offer_desc.style.color = '#696871';
    premium_offer_desc.style.transitionDuration = '1s';

    premium_offer_btn.style.background = '#fff';
    premium_offer_btn.style.color = '#5454d4';
    premium_offer_btn.style.transitionDuration = '1s';
})





enterprise_offer_box.addEventListener('mouseover', function () {
    enterprise_offer_box.style.background = '#ff7143';
    enterprise_offer_box.style.transitionDuration = '1s';

    enterprise_offer_box.style.height = '473px';
    enterprise_offer_box.style.margin = '0';

    enterprise_offer_title.style.color = '#fff';
    enterprise_offer_title.style.transitionDuration = '1s';
    
    enterprise_cost.style.color = '#fff';
    enterprise_cost.style.transitionDuration = '1s';


    enterprise_offer_desc.style.color = '#fff';
    enterprise_offer_desc.style.transitionDuration = '1s';

    enterprise_offer_btn.style.background = '#9f3919';
    enterprise_offer_btn.style.color = '#fff';
    enterprise_offer_btn.style.transitionDuration = '1s';
    enterprise_offer_btn.style.border = 'none';
})
enterprise_offer_box.addEventListener('mouseout', function () {
    enterprise_offer_box.style.background = '#f8f8f8';
    enterprise_offer_box.style.transitionDuration = '1s';

    enterprise_offer_box.style.height = '441px';
    enterprise_offer_box.style.margin = '14px 0 0 0';

    enterprise_offer_title.style.color = '#696871';
    enterprise_offer_title.style.transitionDuration = '1s';
    
    enterprise_cost.style.color = '#1d293f';
    enterprise_cost.style.transitionDuration = '1s';


    enterprise_offer_desc.style.color = '#696871';
    enterprise_offer_desc.style.transitionDuration = '1s';

    enterprise_offer_btn.style.background = '#fff';
    enterprise_offer_btn.style.color = '#5454d4';
    enterprise_offer_btn.style.transitionDuration = '1s';
})