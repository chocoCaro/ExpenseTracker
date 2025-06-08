import { useState } from 'react';

import AddTransactionButton from '@/components/AddTransactionButton';


const Transactions = () => {
	const [toggleModal, setToggleModal] = useState(false);

	return (
		<div className='flex flex-col items-center justify-center w-full h-full'>
			<AddTransactionButton
				setToggleModal={() => setToggleModal(prev => !prev)}
			/>
			<table className='min-w-full bg-white border border-gray-200 rounded-[15px]'>
				<thead>
					<tr>
						<th className='px-4 py-2 border-b'>ID</th>
						<th className='px-4 py-2 border-b'>Description</th>
						<th className='px-4 py-2 border-b'>Amount</th>
						<th className='px-4 py-2 border-b'>Date</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className='px-4 py-2 border-b'>1</td>
						<td className='px-4 py-2 border-b'>Office Supplies</td>
						<td className='px-4 py-2 border-b'>$150.00</td>
						<td className='px-4 py-2 border-b'>2023-10-01</td>
					</tr>
					<tr>
						<td className='px-4 py-2 border-b'>2</td>
						<td className='px-4 py-2 border-b'>Travel Expenses</td>
						<td className='px-4 py-2 border-b'>$300.00</td>
						<td className='px-4 py-2 border-b'>2023-10-05</td>
					</tr>
				</tbody>
			</table>
			
			{toggleModal && (
				<div className='fixed top-0 left-0 flex items-center justify-center w-screen h-screen'>
					<div className='fixed top-0 left-0 w-full h-full bg-gray-200 opacity-70' />
					<div className='relative w-[80%] h-[60%] p-[20px] bg-white rounded-[15px] opacity-100'>
						<p>Activity</p>
						<textarea
							name='activity'
							id='activity'
							placeholder='Enter your activity here...'
							className='w-full h-[50px] p-[10px] border-1 resize-none'
						/>
						<button
							onClick={() => setToggleModal(false)}
							className='absolute top-0 right-0 px-4 py-2 text-white transition-colors duration-300 bg-red-500 rounded-[15px] hover:bg-red-600'
						>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Transactions;
