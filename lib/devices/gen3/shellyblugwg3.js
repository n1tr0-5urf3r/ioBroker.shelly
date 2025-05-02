'use strict';

/**
 * Shelly BLU Gateway Gen3 / shellyblugwg3
 *
 * https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/ShellyBluGwG3
 */

const shellyHelperGen2 = require('../gen2-helper');

const shellyblugwg3 = {

};


const available_trvs = shellyHelperGen2.getAvailableTRVs();
for (const trv_id of available_trvs) {
    shellyHelperGen2.addBluTrvDevice(shellyblugwg3, trv_id);
}



module.exports = {
    shellyblugwg3,
};
