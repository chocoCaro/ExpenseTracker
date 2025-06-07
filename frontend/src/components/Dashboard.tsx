const Dashboard = () => {
	return (
		<div className='flex flex-col items-center justify-center w-full h-full'>
			<h1 className='mb-4 text-2xl font-bold'>All Expenses</h1>
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
		</div>
	)
}

export default Dashboard
