import React from 'react';
import loadable from '@loadable/component';
const PrimaryLayout = loadable(() => import('../layouts/PrimaryLayout'));



export default () => (
        
       <PrimaryLayout column="col-xs-6">
  
           <h1>About Us</h1>
           <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
           Aenean commodo ligula eget dolor. Aenean massa. 
           Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
           Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
           Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
           In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. 
           Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. 
           Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. </p>
        </PrimaryLayout>
  
  )


