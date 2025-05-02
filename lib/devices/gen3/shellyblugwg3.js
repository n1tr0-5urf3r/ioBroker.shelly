'use strict';

/**
 * Shelly BLU Gateway Gen3 / shellyblugwg3
 *
 * https://shelly-api-docs.shelly.cloud/gen2/Devices/Gen3/ShellyBluGwG3
 */

const shellyHelperGen2 = require('../gen2-helper');

const shellyblugwg3 = {

};

shellyHelperGen2.detectPairedBluTRVs(shellyblugwg3);

shellyHelperGen2.addBluTrvDevice(shellyblugwg3, 200);

module.exports = {
    shellyblugwg3,
};
