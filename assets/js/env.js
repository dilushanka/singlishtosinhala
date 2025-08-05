var base_url;var index_url;var images;var TESTING="test";var DEVELOPMENT="development";var PRODUCTION="production";var PAYHERE_PAYMENT_FEE=10;if(environment=='development')
{base_url="http://localhost:8080/";index_url=base_url;images=base_url+'assets/images/'}
else if(environment=='production')
{base_url="index.html";index_url=base_url;images='/assets/images/'}
else if(environment=='test')
{base_url="http://localhost:8080/";index_url=base_url;images=base_url+'assets/images/'}