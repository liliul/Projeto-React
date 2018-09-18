import React from 'react'

const reposlist = props => {
	return(<ul>
		{props.state.repos.map(repo => (
			<li key={repo.id}>{repo.name}</li> 
			))}
					
				</ul>)
}


export default reposlist