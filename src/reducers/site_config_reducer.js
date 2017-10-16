// we import a const to keep naming in sync 
import SiteConfig from '../configs/site_config';

const SiteConfigReducer = (state = SiteConfig('en'), action) => 
	state;
export default SiteConfigReducer;
