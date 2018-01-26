const nextRoutes = require('next-routes');

const routes = nextRoutes();
module.exports = routes;

// argurments: name, url, name of file under page = name
const rootPath = '/:lang'; //  /:lang
routes.add('home', `${rootPath}/`, '/');

routes.add('show_watch', `${rootPath}/watches/:id`, '/products/show');
routes.add('show_strap', `${rootPath}/straps/:id`, '/products/show');

routes.add('watches', `${rootPath}/watches`, '/category/watches/show');
routes.add('straps', `${rootPath}/straps`, '/category/straps/show');
routes.add('jewelry', `${rootPath}/jewelry`, '/category/jewelry/show');

/* for temp link -> Pages are not created */
routes.add('inspiration', `${rootPath}/inspiration`, '/inspiration/index');
routes.add('service', `${rootPath}/service`, '/service/index');

routes.add('terms', `${rootPath}/terms`, '/terms/index');
routes.add('privacy', `${rootPath}/privacy`, '/privacy/index');
routes.add('shipping-returns', `${rootPath}/shipping-returns`, '/shipping-returns/index');
routes.add('login', `${rootPath}/login`, '/login/index');
routes.add('forgotpassword', `${rootPath}/forgotpassword`, '/forgotpassword/index');
routes.add('our-story', `${rootPath}/our-story`, '/our-story/index');
routes.add('register', `${rootPath}/register`, '/register/index');
routes.add('career', `${rootPath}/career`, '/career/index');
routes.add('checkout', `${rootPath}/checkout`, '/checkout/index');
routes.add('job-detail', `${rootPath}/job-detail/:id`, '/job-detail/index');
routes.add('my-account', `${rootPath}/my-account`, '/my-account/index');
routes.add('customer/account/edit', `${rootPath}/customer/account/edit`, '/my-account/edit');
routes.add('customer/address', `${rootPath}/customer/address`, '/my-account/address');
routes.add('customer/address/edit', `${rootPath}/customer/address/edit`, '/my-account/edit-address');
routes.add('customer/address/add', `${rootPath}/customer/address/add`, '/my-account/add-address');
routes.add('/customer/newsletter-edit', `${rootPath}/customer/newsletter-edit`, '/my-account/newsletter-edit');

routes.add('campaign', `${rootPath}/campaign`, '/campaign/index');
routes.add('a-day-with-aby', `${rootPath}/a-day-with-aby`, '/campaign/aby');
routes.add('a-day-with-ally', `${rootPath}/a-day-with-ally`, '/campaign/ally');

routes.add('downtown-chic', `${rootPath}/downtown-chic`, '/campaign/downtown-chic');
routes.add('upper-east-side', `${rootPath}/upper-east-side`, '/campaign/upper-east-side');
routes.add('west-village', `${rootPath}/west-village`, '/campaign/west-village');

routes.add('stores', `${rootPath}/stores`, '/stores/index');
routes.add('location-detail', `${rootPath}/location-detail/:id`, '/location-detail/index');
routes.add('customer/orders', `${rootPath}/customer/orders`, '/my-account/orders');
routes.add('/customer/order/view', `${rootPath}/customer/order/view`, '/my-account/view');
routes.add('support', `${rootPath}/support`, '/support/index');

routes.add('15-minutes-with-stephanie', `${rootPath}/15-minutes-with-stephanie`, '/15min/15-minutes-with-stephanie');
routes.add('15-minutes-with-virna-auvergne', `${rootPath}/15-minutes-virna-auvergne`, '/15min/15-minutes-with-virna-auvergne');
routes.add('15-minutes-with-esmee', `${rootPath}/15-minutes-with-esmee`, '/15min/15-minutes-with-esmee');
routes.add('15-minutes-with-nicole', `${rootPath}/15-minutes-with-nicole`, '/15min/15-minutes-with-nicole');
routes.add('15-minutes-with-lena', `${rootPath}/15-minutes-with-lena`, '/15min/15-minutes-with-lena');
routes.add('15-minutes-with-chloe', `${rootPath}/15-minutes-with-chloe`, '/15min/15-minutes-with-chloe');
routes.add('15-minutes-with-laurianne', `${rootPath}/15-minutes-with-laurianne`, '/15min/15-minutes-with-laurianne');
routes.add('15-minutes-with-yin', `${rootPath}/15-minutes-with-yin`, '/15min/15-minutes-with-yin');
routes.add('15-minutes-with-rebecca', `${rootPath}/15-minutes-with-rebecca`, '/15min/15-minutes-with-rebecca');
routes.add('15-minutes-with-caroline', `${rootPath}/15-minutes-with-caroline`, '/15min/15-minutes-with-caroline');
routes.add('15-minutes-with-annabel', `${rootPath}/15-minutes-with-annabel`, '/15min/15-minutes-with-annabel');
routes.add('15-minutes-with-barbara', `${rootPath}/15-minutes-with-barbara`, '/15min/15-minutes-with-barbara');
routes.add('15-minutes-with-cheyenne', `${rootPath}/15-minutes-with-cheyenne`, '/15min/15-minutes-with-cheyenne');
routes.add('15-minutes-with-jeanine', `${rootPath}/15-minutes-with-jeanine`, '/15min/15-minutes-with-jeanine');
routes.add('15-minutes-with-ludivine', `${rootPath}/15-minutes-with-ludivine`, '/15min/15-minutes-with-ludivine');
routes.add('15-minutes-with-laetitia', `${rootPath}/15-minutes-with-laetitia`, '/15min/15-minutes-with-laetitia');
routes.add('15-minutes-with-paulina', `${rootPath}/15-minutes-with-paulina`, '/15min/15-minutes-with-paulina');
routes.add('15-minutes-with-katja', `${rootPath}/15-minutes-with-katja`, '/15min/15-minutes-with-katja');
routes.add('tangerine-summer-set', `${rootPath}/tangerine-summer-set`, '/gift-set/tangerine-summer-set');
routes.add('myrosefieldmoment', `${rootPath}/myrosefieldmoment`, '/myrosefieldmoment/index');
routes.add('cart', `${rootPath}/cart`, '/cart/index');
