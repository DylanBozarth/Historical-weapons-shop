import React from 'react'

export const DisplayItem = ({title, imageUrl, price, desc, id}) => (
/* destructor the title off of the props  the same as {props.title} */ 
/* this is called string interpolation, setting the css class dynamically */
 <div className="Card  col-lg-4">
			<div className="thumbnail">
								<img className="cardImg" height='150' width='200' src={`${imageUrl}`} alt='' />
				<div className="caption" key={id}>
					<h3>{title}</h3>
					<p className="flex-text desc">{desc} <br /> {price}</p>
					<p>
						<a className="btn btn-primary" href="#">Add to cart</a>
					</p>
				</div>
				
			</div>
		
		</div>
   )

   