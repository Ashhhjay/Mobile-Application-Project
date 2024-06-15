const hardcodedUsers = [
    { username: 'Faizan@gmail.com', password: '123' },
    { username: 'Ahmad', password: 'password2' },
    { username: 'Dua', password: 'password3' },
];

const handleLogin = () => {
    const user = hardcodedUsers.find(user => user.username === username && user.password === password);
    if (user) {
        setErrorMessage('');
        navigation.navigate('HomeScreen');
    } else {
        setErrorMessage('Invalid username and/or password. Please try again');
    }
};
