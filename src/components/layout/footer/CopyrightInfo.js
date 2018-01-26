import { Link } from '../../../config/routes';
export default ({lang}) => (
  <section className="copyright">
    <p>&copy; {(new Date()).getFullYear()} ROSEFIELD BV. Alle rechten voorbehouden.&nbsp;</p>
    <div className="copyright-links">
      <Link route="privacy" params={{ lang }}>
      	<a>Privacybeleid</a>
      </Link>&nbsp;|&nbsp; 
      <Link route="terms" params={{ lang }}>
      	 <a>Algemene voorwaarden</a>
      </Link>
    </div>
  </section>
);
