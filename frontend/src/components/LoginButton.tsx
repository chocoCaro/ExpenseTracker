const LoginButton = () => {
	return (
		<button
			className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
			onClick={() => {
				window.location.href = '/api/auth/login'
			}}
		>
			Log in
		</button>
	)
}

export default LoginButton
