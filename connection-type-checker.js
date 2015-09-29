(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.connectionTypeChecker = factory();
    }
}(this, function () {
    function isMobileIp(callback) {
        var carrierIpBlocks = [
                {
                    ipStart: '213.162.64.0',
                    ipEnd: '213.162.67.255',
                    country: 'AT',
                    carrier: 'T-Mobile (Maxmobil)'
                },
                {
                    ipStart: '203.20.32.0',
                    ipEnd: '203.20.39.255',
                    country: 'AU',
                    carrier: 'Vodafone '
                },

                {
                    ipStart: '58.145.128.0',
                    ipEnd: '58.145.159.255',
                    country: 'AU',
                    carrier: 'Optus'
                },

                {
                    ipStart: '202.124.64.0',
                    ipEnd: '202.124.95.255',
                    country: 'AU',
                    carrier: 'H3G'
                },

                {
                    ipStart: '203.171.192.0',
                    ipEnd: '203.171.207.255',
                    country: 'AU',
                    carrier: 'H3G'
                },

                {
                    ipStart: '192.148.116.0',
                    ipEnd: '192.148.165.255',
                    country: 'AU',
                    carrier: 'Telstra'
                },

                {
                    ipStart: '212.39.122.0',
                    ipEnd: '212.39.122.255',
                    country: 'BA',
                    carrier: 'Eronet'
                },

                {
                    ipStart: '202.134.8.0',
                    ipEnd: '202.134.15.255',
                    country: 'BD',
                    carrier: 'AKTEL'
                },

                {
                    ipStart: '217.72.228.0',
                    ipEnd: '217.72.231.255',
                    country: 'BE',
                    carrier: 'BASE'
                },

                {
                    ipStart: '212.65.63.0',
                    ipEnd: '212.65.63.255',
                    country: 'BE',
                    carrier: 'Orange (Mobistar)'
                },

                {
                    ipStart: '81.169.60.0',
                    ipEnd: '81.169.63.255',
                    country: 'BE',
                    carrier: 'Proximus'
                },

                {
                    ipStart: '200.140.0.0',
                    ipEnd: '200.150.66.255',
                    country: 'BR',
                    carrier: 'Brazil Telecom'
                },

                {
                    ipStart: '200.179.66.192',
                    ipEnd: '200.179.66.255',
                    country: 'BR',
                    carrier: 'TIM'
                },

                {
                    ipStart: '189.0.0.0',
                    ipEnd: '189.0.255.255',
                    country: 'BR',
                    carrier: 'VIVO'
                },

                {
                    ipStart: '206.47.78.128',
                    ipEnd: '206.47.78.159',
                    country: 'CA',
                    carrier: 'Bell Mobilite'
                },

                {
                    ipStart: '212.35.32.0',
                    ipEnd: '212.35.47.255',
                    country: 'CH',
                    carrier: 'Sunrise (Diax)'
                },

                {
                    ipStart: '194.230.144.0',
                    ipEnd: '194.230.159.255',
                    country: 'CH',
                    carrier: 'Sunrise (Diax)'
                },

                {
                    ipStart: '213.55.128.0',
                    ipEnd: '213.55.255.255',
                    country: 'CH',
                    carrier: 'Orange'
                },

                {
                    ipStart: '138.188.0.0',
                    ipEnd: '138.188.255.255',
                    country: 'CH',
                    carrier: 'Swisscom'
                },

                {
                    ipStart: '200.91.0.0',
                    ipEnd: '200.91.31.255',
                    country: 'CL',
                    carrier: 'Telefonica CTC'
                },

                {
                    ipStart: '217.77.164.0',
                    ipEnd: '217.77.165.255',
                    country: 'CZ',
                    carrier: 'Vodafone (oskarmobil)'
                },

                {
                    ipStart: '84.57.113.0',
                    ipEnd: '84.61.96.255',
                    country: 'DE',
                    carrier: 'Arcor'
                },

                {
                    ipStart: '82.113.100.0',
                    ipEnd: '82.113.100.255',
                    country: 'DE',
                    carrier: 'O2'
                },

                {
                    ipStart: '80.187.0.0',
                    ipEnd: '80.187.111.255',
                    country: 'DE',
                    carrier: 'T-Mobile'
                },

                {
                    ipStart: '139.7.0.0',
                    ipEnd: '139.7.255.255',
                    country: 'DE',
                    carrier: 'Vodafone'
                },

                {
                    ipStart: '80.251.192.0',
                    ipEnd: '80.251.207.255',
                    country: 'DK',
                    carrier: 'H3G (SE?)'
                },

                {
                    ipStart: '194.182.251.0',
                    ipEnd: '194.182.251.63',
                    country: 'DK',
                    carrier: 'Tele Danmark (TDC)'
                },

                {
                    ipStart: '62.44.128.0',
                    ipEnd: '62.44.191.255',
                    country: 'DK',
                    carrier: 'Teliamobile'
                },

                {
                    ipStart: '217.71.32.0',
                    ipEnd: '217.71.35.12',
                    country: 'EE',
                    carrier: 'EMT'
                },

                {
                    ipStart: '213.143.32.0',
                    ipEnd: '213.143.43.255',
                    country: 'ES',
                    carrier: 'Amena'
                },

                {
                    ipStart: '195.55.47.0',
                    ipEnd: '195.55.47.63',
                    country: 'ES',
                    carrier: 'Telefonica'
                },

                {
                    ipStart: '80.27.0.0',
                    ipEnd: '80.27.127.255',
                    country: 'ES',
                    carrier: 'Telefonica TME'
                },

                {
                    ipStart: '62.87.92.0',
                    ipEnd: '62.87.92.63',
                    country: 'ES',
                    carrier: 'Vodafone'
                },

                {
                    ipStart: '62.142.0.0',
                    ipEnd: '62.142.7.255',
                    country: 'FI',
                    carrier: 'Saunalahti'
                },

                {
                    ipStart: '193.209.131.0',
                    ipEnd: '193.209.134.255',
                    country: 'FI',
                    carrier: 'Sonera'
                },

                {
                    ipStart: '62.201.128.0',
                    ipEnd: '62.201.129.255',
                    country: 'FR',
                    carrier: 'Bouygues Telecom'
                },

                {
                    ipStart: '213.223.200.0',
                    ipEnd: '213.223.200.255',
                    country: 'FR',
                    carrier: 'Cegetel'
                },

                {
                    ipStart: '195.115.116.0',
                    ipEnd: '195.115.119.255',
                    country: 'FR',
                    carrier: 'Cegetel'
                },

                {
                    ipStart: '194.206.212.0',
                    ipEnd: '194.206.212.7',
                    country: 'FR',
                    carrier: 'Orange (France Telecom)'
                },

                {
                    ipStart: '193.113.235.0',
                    ipEnd: '193.113.235.255',
                    country: 'GB',
                    carrier: '02'
                },

                {
                    ipStart: '193.113.200.0',
                    ipEnd: '193.113.200.255',
                    country: 'GB',
                    carrier: 'O2'
                },

                {
                    ipStart: '89.192.0.0 ',
                    ipEnd: '89.193.255.255',
                    country: 'GB',
                    carrier: 'Orange'
                },

                {
                    ipStart: '213.205.192.0',
                    ipEnd: '213.205.223.255',
                    country: 'GB',
                    carrier: 'Orange'
                },

                {
                    ipStart: '213.205.224.0',
                    ipEnd: '213.205.255.255',
                    country: 'GB',
                    carrier: 'Orange'
                },

                {
                    ipStart: '193.35.128.0',
                    ipEnd: '193.35.143.255',
                    country: 'GB',
                    carrier: 'Orange'
                },

                {
                    ipStart: '149.254.0.0',
                    ipEnd: '149.254.255.255',
                    country: 'GB',
                    carrier: 'T-Mobile'
                },

                {
                    ipStart: '212.183.128.0',
                    ipEnd: '212.183.144.255',
                    country: 'GB',
                    carrier: 'Vodafone'
                },

                {
                    ipStart: '195.167.65.0',
                    ipEnd: '195.167.65.255',
                    country: 'GR',
                    carrier: 'Cosmote'
                },

                {
                    ipStart: '62.103.102.0',
                    ipEnd: '62.103.103.255',
                    country: 'GR',
                    carrier: 'Cosmote'
                },

                {
                    ipStart: '84.224.0.0',
                    ipEnd: '84.224.63.255',
                    country: 'HU',
                    carrier: 'Pannon'
                },

                {
                    ipStart: '212.51.126.0',
                    ipEnd: '212.51.126.255',
                    country: 'HU',
                    carrier: 'T-Mobile (Westel)'
                },

                {
                    ipStart: '202.93.36.0',
                    ipEnd: '202.93.37.255',
                    country: 'ID',
                    carrier: 'Indosat (Mentari/IM3)'
                },

                {
                    ipStart: '219.83.36.128',
                    ipEnd: '219.83.36.143',
                    country: 'ID',
                    carrier: 'Indosat (XL?)'
                },

                {
                    ipStart: '212.129.64.0',
                    ipEnd: '212.129.64.255',
                    country: 'IE',
                    carrier: 'Meteor'
                },

                {
                    ipStart: '62.40.32.0',
                    ipEnd: '62.40.63.255',
                    country: 'IE',
                    carrier: 'O2'
                },

                {
                    ipStart: '213.233.128.0',
                    ipEnd: '213.233.159.255',
                    country: 'IE',
                    carrier: 'Vodafone'
                },

                {
                    ipStart: '192.118.8.0',
                    ipEnd: '192.118.11.255',
                    country: 'IL',
                    carrier: 'Orange (via Partner Comms?)'
                },

                {
                    ipStart: '203.145.128.0',
                    ipEnd: '203.145.128.15',
                    country: 'IN',
                    carrier: 'Bharti'
                },

                {
                    ipStart: '203.145.159.32',
                    ipEnd: '203.145.159.47',
                    country: 'IN',
                    carrier: 'Bharti'
                },

                {
                    ipStart: '59.145.208.0',
                    ipEnd: '59.145.208.255',
                    country: 'IN',
                    carrier: 'Bharti'
                },

                {
                    ipStart: '202.56.231.112',
                    ipEnd: '202.56.231.127',
                    country: 'IN',
                    carrier: 'Bharti'
                },

                {
                    ipStart: '220.227.211.0',
                    ipEnd: '220.227.211.255',
                    country: 'IN',
                    carrier: 'Reliance'
                },

                {
                    ipStart: '219.64.0.0',
                    ipEnd: '219.65.255.255',
                    country: 'IN',
                    carrier: 'VSNL'
                },

                {
                    ipStart: '151.80.0.0',
                    ipEnd: '151.80.255.255',
                    country: 'IT',
                    carrier: 'Infostrada (telco?)'
                },

                {
                    ipStart: '151.83.0.0',
                    ipEnd: '151.83.255.255',
                    country: 'IT',
                    carrier: 'Infostrada (telco?)'
                },

                {
                    ipStart: '213.26.0.0',
                    ipEnd: '213.26.255.255',
                    country: 'IT',
                    carrier: 'Interbusiness/Telecom Italia?'
                },

                {
                    ipStart: '83.224.0.0',
                    ipEnd: '83.225.255.255',
                    country: 'IT',
                    carrier: 'Vodafone'
                },

                {
                    ipStart: '210.169.40.0',
                    ipEnd: '210.169.40.255',
                    country: 'JP',
                    carrier: 'AU (KDDI)'
                },

                {
                    ipStart: '210.196.3.192',
                    ipEnd: '210.196.3.255',
                    country: 'JP',
                    carrier: 'AU (KDDI) '
                },

                {
                    ipStart: '210.196.5.192',
                    ipEnd: '210.196.5.255',
                    country: 'JP',
                    carrier: 'AU (KDDI) '
                },

                {
                    ipStart: '210.230.128.0',
                    ipEnd: '210.230.128.255',
                    country: 'JP',
                    carrier: 'AU (KDDI) '
                },

                {
                    ipStart: '210.230.141.192',
                    ipEnd: '210.230.141.255',
                    country: 'JP',
                    carrier: 'AU (KDDI)'
                },

                {
                    ipStart: '210.234.105.32',
                    ipEnd: '210.234.105.39',
                    country: 'JP',
                    carrier: 'AU (KDDI)'
                },

                {
                    ipStart: '210.234.108.64',
                    ipEnd: '210.234.108.127',
                    country: 'JP',
                    carrier: 'AU (KDDI)'
                },

                {
                    ipStart: '210.251.1.192',
                    ipEnd: '210.251.1.255',
                    country: 'JP',
                    carrier: 'AU (KDDI)'
                },

                {
                    ipStart: '210.251.2.0',
                    ipEnd: '210.251.2.31',
                    country: 'JP',
                    carrier: 'AU (KDDI)'
                },

                {
                    ipStart: '211.5.1.0',
                    ipEnd: '211.5.1.255',
                    country: 'JP',
                    carrier: 'AU (KDDI)'
                },

                {
                    ipStart: '211.5.2.128',
                    ipEnd: '211.5.2.255',
                    country: 'JP',
                    carrier: 'AU (KDDI)'
                },

                {
                    ipStart: '211.5.7.0',
                    ipEnd: '211.5.7.255',
                    country: 'JP',
                    carrier: 'AU (KDDI)'
                },

                {
                    ipStart: '218.222.1.0',
                    ipEnd: '218.222.1.255',
                    country: 'JP',
                    carrier: 'AU (KDDI)'
                },

                {
                    ipStart: '61.117.0.0',
                    ipEnd: '61.117.0.255',
                    country: 'JP',
                    carrier: 'AU (KDDI)'
                },

                {
                    ipStart: '61.117.1.0',
                    ipEnd: '61.117.1.255',
                    country: 'JP',
                    carrier: 'AU (KDDI)'
                },

                {
                    ipStart: '61.117.2.0',
                    ipEnd: '61.117.2.63',
                    country: 'JP',
                    carrier: 'AU (KDDI)'
                },

                {
                    ipStart: '61.202.3.0',
                    ipEnd: '61.202.3.255',
                    country: 'JP',
                    carrier: 'AU (KDDI)'
                },

                {
                    ipStart: '219.108.158.0',
                    ipEnd: '219.108.158.63',
                    country: 'JP',
                    carrier: 'AU (KDDI)'
                },

                {
                    ipStart: '219.125.148.0',
                    ipEnd: '219.125.148.255',
                    country: 'JP',
                    carrier: 'AU (KDDI)'
                },

                {
                    ipStart: '222.5.63.0',
                    ipEnd: '222.5.63.255',
                    country: 'JP',
                    carrier: 'AU (KDDI)'
                },

                {
                    ipStart: '222.7.56.0',
                    ipEnd: '222.7.56.255',
                    country: 'JP',
                    carrier: 'AU (KDDI)'
                },

                {
                    ipStart: '222.5.62.128',
                    ipEnd: '222.5.62.255',
                    country: 'JP',
                    carrier: 'AU (KDDI)'
                },

                {
                    ipStart: '222.7.57.0',
                    ipEnd: '222.7.57.255',
                    country: 'JP',
                    carrier: 'AU (KDDI)'
                },

                {
                    ipStart: '59.135.38.128',
                    ipEnd: '59.135.38.255',
                    country: 'JP',
                    carrier: 'AU (KDDI) '
                },

                {
                    ipStart: '219.108.157.0',
                    ipEnd: '219.108.157.255',
                    country: 'JP',
                    carrier: 'AU (KDDI)'
                },

                {
                    ipStart: '219.125.151.128',
                    ipEnd: '219.125.151.255',
                    country: 'JP',
                    carrier: 'AU (KDDI)'
                },

                {
                    ipStart: '219.96.0.0',
                    ipEnd: '219.127.255.255',
                    country: 'JP',
                    carrier: 'AU (KDDI)'
                },

                {
                    ipStart: '210.153.84.0',
                    ipEnd: '210.153.84.255',
                    country: 'JP',
                    carrier: 'DoCoMo (i-mode)'
                },

                {
                    ipStart: '210.136.161.0',
                    ipEnd: '210.136.161.255',
                    country: 'JP',
                    carrier: 'DoCoMo (i-mode) '
                },

                {
                    ipStart: '210.153.86.0',
                    ipEnd: '210.153.86.255',
                    country: 'JP',
                    carrier: 'DoCoMo (i-mode)'
                },

                {
                    ipStart: '210.153.87.0',
                    ipEnd: '210.153.87.255',
                    country: 'JP',
                    carrier: 'DoCoMo (inet)'
                },

                {
                    ipStart: '203.138.180.0',
                    ipEnd: '203.138.180.255',
                    country: 'JP',
                    carrier: 'DoCoMo (e-mail)'
                },

                {
                    ipStart: '203.138.181.0',
                    ipEnd: '203.138.181.255',
                    country: 'JP',
                    carrier: 'DoCoMo (e-mail)'
                },

                {
                    ipStart: '203.138.203.0',
                    ipEnd: '203.138.203.255',
                    country: 'JP',
                    carrier: 'DoCoMo (email)'
                },

                {
                    ipStart: '202.179.204.0',
                    ipEnd: '202.179.204.255',
                    country: 'JP',
                    carrier: 'SoftBank'
                },

                {
                    ipStart: '202.253.96.248',
                    ipEnd: '202.253.96.255',
                    country: 'JP',
                    carrier: 'SoftBank'
                },

                {
                    ipStart: '210.146.7.192',
                    ipEnd: '210.146.7.255',
                    country: 'JP',
                    carrier: 'SoftBank'
                },

                {
                    ipStart: '210.146.60.192',
                    ipEnd: '210.146.60.255',
                    country: 'JP',
                    carrier: 'SoftBank'
                },

                {
                    ipStart: '210.151.9.128',
                    ipEnd: '210.151.9.191',
                    country: 'JP',
                    carrier: 'SoftBank'
                },

                {
                    ipStart: '210.169.130.112',
                    ipEnd: '210.169.130.119',
                    country: 'JP',
                    carrier: 'SoftBank'
                },

                {
                    ipStart: '210.169.130.120',
                    ipEnd: '210.169.130.127',
                    country: 'JP',
                    carrier: 'SoftBank'
                },

                {
                    ipStart: '210.169.176.0',
                    ipEnd: '210.169.176.255',
                    country: 'JP',
                    carrier: 'SoftBank '
                },

                {
                    ipStart: '210.175.1.128',
                    ipEnd: '210.175.1.255',
                    country: 'JP',
                    carrier: 'SoftBank'
                },

                {
                    ipStart: '210.228.189.0',
                    ipEnd: '210.228.189.255',
                    country: 'JP',
                    carrier: 'SoftBank'
                },

                {
                    ipStart: '211.8.159.128',
                    ipEnd: '211.8.159.255',
                    country: 'JP',
                    carrier: 'SoftBank'
                },

                {
                    ipStart: '84.15.0.0',
                    ipEnd: '84.15.255.255',
                    country: 'LT',
                    carrier: 'Bite'
                },

                {
                    ipStart: '213.226.128.0',
                    ipEnd: '213.226.131.255',
                    country: 'LT',
                    carrier: 'Bite'
                },

                {
                    ipStart: '212.93.97.0',
                    ipEnd: '212.93.97.255',
                    country: 'LV',
                    carrier: 'LMT'
                },

                {
                    ipStart: '194.134.0.0',
                    ipEnd: '194.134.0.255',
                    country: 'NL',
                    carrier: 'EuroNet(ISP)'
                },

                {
                    ipStart: '212.45.191.0',
                    ipEnd: '212.45.191.31',
                    country: 'NO',
                    carrier: 'Netcom'
                },

                {
                    ipStart: '130.244.196.90',
                    ipEnd: '130.244.196.92',
                    country: 'NO',
                    carrier: 'Tele2'
                },

                {
                    ipStart: '212.17.128.0',
                    ipEnd: '212.17.151.255',
                    country: 'NO',
                    carrier: 'Telenor'
                },

                {
                    ipStart: '166.179.37.130',
                    ipEnd: '166.179.37.130',
                    country: 'NZ',
                    carrier: 'NZ Telco under WDSPCO?'
                },

                {
                    ipStart: '202.73.192.0',
                    ipEnd: '202.73.207.255',
                    country: 'NZ',
                    carrier: 'Vodafone'
                },

                {
                    ipStart: '194.9.223.0',
                    ipEnd: '194.9.223.255',
                    country: 'PL',
                    carrier: 'Orange (PTK-Centertel)'
                },

                {
                    ipStart: '212.18.178.0',
                    ipEnd: '212.18.178.255',
                    country: 'PT',
                    carrier: 'Vodafone (Telecel)'
                },

                {
                    ipStart: '83.217.40.0',
                    ipEnd: '83.217.43.255',
                    country: 'RU',
                    carrier: 'Moscow Cellular'
                },

                {
                    ipStart: '217.8.224.0',
                    ipEnd: '217.8.235.255',
                    country: 'RU',
                    carrier: 'SCS'
                },

                {
                    ipStart: '217.118.84.0',
                    ipEnd: '217.118.87.255',
                    country: 'RU',
                    carrier: 'Vimpelcom (beeoffice)'
                },

                {
                    ipStart: '212.129.104.0',
                    ipEnd: '212.129.119.255',
                    country: 'RU',
                    carrier: 'Skylink'
                },

                {
                    ipStart: '130.244.0.0',
                    ipEnd: '130.244.255.255',
                    country: 'SE',
                    carrier: 'Tele2'
                },

                {
                    ipStart: '192.71.148.0',
                    ipEnd: '192.71.148.255',
                    country: 'SE',
                    carrier: 'Telia'
                },

                {
                    ipStart: '217.174.67.0',
                    ipEnd: '217.174.67.255',
                    country: 'SE',
                    carrier: 'Telenor'
                },

                {
                    ipStart: '203.124.0.0',
                    ipEnd: '203.124.3.255',
                    country: 'SG',
                    carrier: 'SingTel'
                },

                {
                    ipStart: '213.151.208.128',
                    ipEnd: '213.151.208.255',
                    country: 'SK',
                    carrier: 'Orange (Globtel)'
                },

                {
                    ipStart: '203.170.228.0',
                    ipEnd: '203.170.228.255',
                    country: 'TH',
                    carrier: 'Loxinfo (telco?)'
                },

                {
                    ipStart: '82.206.233.0',
                    ipEnd: '82.206.233.255',
                    country: 'TG',
                    carrier: 'Togocel'
                },

                {
                    ipStart: '193.41.60.0',
                    ipEnd: '193.41.63.255',
                    country: 'UA',
                    carrier: 'Kyivstar'
                },

                {
                    ipStart: '193.108.252.0',
                    ipEnd: '193.108.255.255',
                    country: 'UG',
                    carrier: 'MTN-Uganda'
                },

                {
                    ipStart: '66.209.0.0',
                    ipEnd: '66.209.31.255',
                    country: 'US',
                    carrier: 'Cingular'
                },

                {
                    ipStart: '68.24.0.0',
                    ipEnd: '68.31.255.255',
                    country: 'US',
                    carrier: 'Sprint'
                },

                {
                    ipStart: '66.94.0.0',
                    ipEnd: '66.94.31.255',
                    country: 'US',
                    carrier: 'T-Mobile'
                },

                {
                    ipStart: '170.206.246.0',
                    ipEnd: '170.206.247.255',
                    country: 'US',
                    carrier: 'Nextel'
                },

                {
                    ipStart: '166.128.0.0',
                    ipEnd: '166.255.255.255',
                    country: 'US',
                    carrier: 'WDSPCO (ip leasing)'
                },

                {
                    ipStart: '200.40.246.0',
                    ipEnd: '200.40.246.63',
                    country: 'UY',
                    carrier: 'Ancel'
                },

                {
                    ipStart: '200.35.64.0',
                    ipEnd: '200.35.64.255',
                    country: 'VE',
                    carrier: 'Telcel'
                },

                {
                    ipStart: '196.11.240.228',
                    ipEnd: '196.11.245.33',
                    country: 'ZA',
                    carrier: 'MTN'
                },

                {
                    ipStart: '196.31.58.5',
                    ipEnd: '196.31.58.5',
                    country: 'ZA',
                    carrier: 'UUNET (telco?)'
                },

                {
                    ipStart: '196.207.32.253',
                    ipEnd: '196.207.45.254',
                    country: 'ZA',
                    carrier: 'Vodacom'
                },

                {
                    ipStart: '80.232.117.0',
                    ipEnd: '80.232.117.255',
                    country: 'OperaMini',
                    carrier: 'Opera'
                }
            ],
            calcIpValue = function calcIpValue(ip) {
                var i,
                    value = 0,
                    blockValue = 0,
                    ipBlocks = ip.split('.');

                for (i = 0; i < ipBlocks.length; i++) {
                    blockValue = Math.pow(255, 4 - i);
                    value += blockValue * parseInt(ipBlocks[i], 10) / 255;
                }

                return value;
            },
            req = new XMLHttpRequest();

        req.onload = function () {
            var result,
                ip,
                isMobile = false,
                ipInRange = function ipInRange(ipBlock) {
                    if (
                        calcIpValue(ip) >= calcIpValue(ipBlock.ipStart) &&
                        calcIpValue(ip) >= calcIpValue(ipBlock.ipEnd)
                    ) {
                        isMobile = true;

                        if (window.console) {
                            console.log('Detected mobile carrier IP: ' + ipBlock.carrier);
                        }
                    }
                };

            try {
                result = JSON.parse(req.response);
                ip = result.ip;
                carrierIpBlocks.forEach(ipInRange);

                if (isMobile) {
                    callback.call(undefined, 'cellular');
                } else {
                    callback.call(undefined, 'broadband');
                }
            } catch (e) {
                callback.call(undefined, 'broadband');
            }
        };
        req.onerror = function () {
            callback.call(undefined, 'broadband');
        };
        req.open('GET', 'https://api.ipify.org?format=json');
        req.send();
    }

    function getConnectionType(callback) {
        var connection =
            navigator.connection ||
            navigator.msConnection ||
            navigator.mozConnection ||
            navigator.webkitConnection;

        if (typeof navigator.onLine !== 'undefined' && !navigator.onLine) {
            callback.call(undefined, 'offline');
        }
        else if (connection) {
            if (window.console) {
                console.log('Using navigator.connection');
            }

            switch (connection.type) {
                default:
                    callback.call(undefined, 'broadband');
                    break;

                case 'none':
                    callback.call(undefined, 'offline');
                    break;

                case 'bluetooth':
                case 'cellular':
                    callback.call(undefined, 'cellular');
                    break;
            }
        }
        else if (window.performance && window.performance.getEntries) {
            var req = new XMLHttpRequest();

            if (window.console) {
                console.log('Using window.performance');
            }

            req.addEventListener('load', function () {
                var entries = window.performance.getEntries(),
                    latency = entries[0].responseStart - entries[0].requestStart;

                if (latency >= 100) {
                    callback.call(undefined, 'cellular');
                } else {
                    callback.call(undefined, 'broadband');
                }
            });
            req.addEventListener('error', function () {
                callback.call(undefined, 'offline');
            });
            req.open('GET', location.pathname + '?nocache=' + (new Date()).getTime());
            req.send();
        } else {
            isMobileIp(callback);
        }
    }

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    return {
        getConnectionType: getConnectionType
    };
}));
