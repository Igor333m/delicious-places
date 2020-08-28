import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';


function EditStore () {

	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [tags, setTags] = useState([]);
	
	const choicesTags = ['Wifi', 'Family Friendly', 'Delivery', 'Pickup Only', 'Vegeterian', 'Pet Friendly'];
	const router = useRouter();

	const modifyTags = value => {
		const current = [...tags];
		if (current.find(c => c === value)) {
			setTags( current.filter(c => c !== value) );
		} else {
			setTags( choice => [...tags, value]);
		}
	};

	const submitStoreForm = async e => {
		e.preventDefault();
		const store = { name, description, tags };
		
		try {
			const result = await axios.post('api/store', store);
			if (result.status === 200) router.push(`/store/${result.data.slug}`);

		} catch (err) {
			console.log('Post store error: ', err);
		}
	};

	return (
		<form action='/add' method='post' className='card' onSubmit={submitStoreForm}>
			<label htmlFor='name'>Name</label>
			<input type='text' name='name' onChange={e => setName(e.target.value)} />
			<label htmlFor='description'>Description</label>
			<textarea name='description' onChange={e => setDescription(e.target.value)}></textarea>
			<ul className='tags'>
				{choicesTags.map( tag => (
					<li className='tag tag__choice' key={tag}>
						<input type='checkbox' id={tag} value={tag} name='tags' onChange={e => modifyTags(e.target.value)}/>
						<label htmlFor={tag}>{tag}</label>
					</li>
				))}
			</ul>
			<input type='submit' value='Save' className='button' />
		</form>
	);
}

export default EditStore;