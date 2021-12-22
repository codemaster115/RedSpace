import React from 'react'

import './userDetails.css'

export default function UserDetails({data}) {
	if(!data) return <div></div>;
	return (
		<>
			<div className='userName'>Name: {data.name}</div>
			<div className='userItem'>Height: {data.height} cm</div>
			<div className='userItem'>Mass: {data.mass}</div>
			<div className='userItem'>Hair Color: {data.hair_color}</div>
			<div className='userItem'>Skin Color: {data.skin_color}</div>
			<div className='userItem'>Gender: {data.gender}</div>
			<div className='userItem'>Birth Year: {data.birth_year}</div>

			<div className='userGroupBox'>				
				<div className='userGroup'>
					<div className='userGroupTitle'>Home planet</div>
					<div className='userItem'>{`Title: n/a`}</div>
					<div className='userItem'>{`Terrain: n/a`} </div>
					<div className='userItem'>{`Population: n/a`}</div>
				</div>

				<div className='userGroup'>
					<div className='userGroupTitle'>Species</div>
					<div className='userItem'>{`Name: n/a`}</div>
					<div className='userItem'>{`Average Lifespan: n/a`}</div>
					<div className='userItem'>{`Classification: n/a`}</div>
					<div className='userItem'>{`Language: n/a`}</div>
				</div>

				<div className='userGroup'>
					<div className='userGroupTitle'>Films</div>
					<div className='userItem'>{`Title: n/a`}</div>
					<div className='userItem'>{`Director: n/a`}</div>
					<div className='userItem'>{`Producers: n/a`}</div>
					<div className='userItem'>{`Release Date: n/a`}</div>
				</div>
			</div>
		</>
	)
}
