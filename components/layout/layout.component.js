import MainHeader from './main-header/main-header.component';

function Layout(props) {
	return (
		<>
			<MainHeader />
			<main>{props.children}</main>
		</>
	);
}

export default Layout;
