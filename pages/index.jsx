import React from 'react';
import PageContainer from '~/components/layouts/PageContainer';
import BreadCrumb from '~/components/elements/BreadCrumb';
import VendorBanner from '~/components/partials/vendor/VendorBanner';
import VendorAbout from '~/components/partials/vendor/VendorAbout';
import VendorMileStone from '~/components/partials/vendor/VendorMileStone';
import VendorBestFrees from '~/components/partials/vendor/VendorBestFees';
import VendorTestimonials from '~/components/partials/vendor/VendorTestimonials';
import VendorFaqs from '~/components/partials/vendor/VendorFaqs';
import Newsletters from '~/components/partials/commons/Newletters';

const HomepageDefaultPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Become a Vendor',
        },
    ];

    return (
        <PageContainer title="A Multipurpose B2B Platform">
           <div className="ps-page--single">
               
               <VendorBanner />
               <VendorAbout />
               <VendorMileStone/>
               <VendorBestFrees/>
               <VendorTestimonials/>
               <VendorFaqs/>
               <VendorBanner/>
 
           </div>
           <Newsletters layout="container"/>
        </PageContainer>
    );
};

export default HomepageDefaultPage;
