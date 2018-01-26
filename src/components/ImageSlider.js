// All dummy content

import Imgix from 'react-imgix';

export default () => (
  <Imgix src={'http://rosefield.imgix.net/slider.png'} type="picture">
    <Imgix src={'http://rosefield.imgix.net/slider.png'} type="source" imgProps={{ media: '(min-width: 768px)' }} faces={false} customParams={{ q: 50 }} />
    <Imgix src={'http://rosefield.imgix.net/slider.png'} width={400} type="source" imgProps={{ media: '(min-width: 320px)' }} faces={false} customParams={{ q: 50 }} />
  </Imgix>
);
