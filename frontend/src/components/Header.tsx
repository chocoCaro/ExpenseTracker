import LoginButton from '@/components/LoginButton'


const Header = () => {
	return (
		<div className='fixed top-0 w-screen h-[70px] flex items-center justify-between px-[30px] bg-gray-200'>
			<img
				src='vite.svg'
				alt='logo'
				height={50}
				width={50}
				className=''
			/>
			<nav>
				<ul className='flex ml-4 space-x-4'>
					<li>
						<a
							href='/'
							className='text-blue-500 hover:underline'
						>
							Dashboard
						</a>
					</li>
					<li>
						<a
							href='/transactions'
							className='text-blue-500 hover:underline'
						>
							Transactions
						</a>
					</li>
				</ul>
			</nav>
			<LoginButton />
		</div>
	)
}

export default Header
