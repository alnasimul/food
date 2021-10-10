import axios from "axios";

const api = 'b5wsmeOM_m939ZZ-xpdZn6CDJkJpZK_NQl7wQT-tKvm9bAPLBnmd4VfQlH-4Vf-3lBIG9UACW4LO8FAxb03M763vZlRTdt7kTMNk_UMDUIxpR1dmKxoMXSe0vlthYXYx';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer ${api}`
    }
});
