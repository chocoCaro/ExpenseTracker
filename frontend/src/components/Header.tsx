import logo from '@/assets/logo.png';
import LoginButton from '@/components/LoginButton';


const Header = () => {
	return (
		<div className='fixed top-0 flex items-center justify-between w-screen h-[70px] px-[30px] bg-gray-200'>
			<a href='/'>
				<img
					src={logo}
					alt='logo'
					height={85}
					width={85}
				/>
			</a>
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
	);
};

export default Header;
