import React from 'react';
import '../stylesheets/testy.css'
function Testimonials(props){

	return(
  		<div className='testy'>
			<img
			className='testy_img'
			src={require(`../img/testimonio-${props.pic}.jpg`)}
			alt='imagen-pekora' />
			<div className='testy_contex'>
				<p className='testy_name'>{props.name}</p>
				<p className='testy_rank'><strong>{props.rank}</strong></p>
				<p className='testy_desc'>{props.desc}</p>
			</div>
		</div>
	)
}

export default Testimonials;