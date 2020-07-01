import React from 'react'

export const DisplayItem = ({title, imageUrl, price, desc, id}) => (
/* destructor the title off of the props  the same as {props.title} */ 
/* this is called string interpolation, setting the css class dynamically */
 <div class="Card  col-lg-4">
			<div class="thumbnail">
								<img className="cardImg" height='150' width='200' src={`${imageUrl}`} alt='' />
				<div class="caption" key={id}>
					<h3>{title}</h3>
					<p class="flex-text desc">{desc} <br /> {price}</p>
					<p>
						<a class="btn btn-primary" href="#">Add to cart</a>
					</p>
				</div>
				
			</div>
		
		</div>
   )

   