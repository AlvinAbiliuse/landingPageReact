import "./navStyles.css";

function openWindow() {
	let open = document.querySelector(".openWindow");
	open.classList.remove("hidden");
}

function closeWindow() {
	let open = document.querySelector(".openWindow");
	open.classList.add("hidden");
}

export default function Navbar() {
	return (
		<div className="navBar">
			<div className="openWindow hidden">
				<button onClick={closeWindow} className="close">
					<img src="/multiply.svg" />
				</button>
				<ul>
					<li>
						<a href="/">
							<img src="/logo.svg" />
						</a>
					</li>
					<li>
						<a href="/">HOME</a>
					</li>
					<li>
						<a href="#">ABOUT</a>
					</li>
					<li>
						<a href="#">MEMBERSHIP</a>
					</li>
					<li>
						<a href="#">EVENTS & OFFERS</a>
					</li>
					<li>
						<a href="#">RESTAURANT</a>
					</li>
					<li>
						<a href="#">FACILITIES</a>
					</li>
					<li>
						<a href="#">SPA & SALON</a>
					</li>
					<li>
						<a href="#">CONTACT</a>
					</li>
				</ul>
				<a href="#">MEMBERS LOGIN</a>
				<p>Sharjah Wanderers Sports Club</p>
			</div>
			<div className="mobileNav">
				<a href="#">
					<img className="logo" src="/logo.svg" />
				</a>
				<button onClick={openWindow} className="hamburgerMenu">
					&#9776;
				</button>
			</div>
			<div className="desktopNav">
				<div className="topNav">
					<a href="#">
						<img src="/home.png" />
					</a>
					<div className="rightNavContents">
						<a href="#">
							members login
							<img src="./enter.svg" />
						</a>
						<a href="#">contact</a>
					</div>
				</div>
				<div className="bottomNav">
					<ul>
						<li>
							<a href="#">ABOUT</a>
						</li>
						<li>
							<a href="#">MEMBERSHIP</a>
						</li>
						<li>
							<a href="#">EVENTS & OFFERS</a>
						</li>
						<li>
							<a href="/">
								<img className="logo" src="/logo.svg" />
							</a>
						</li>
						<li>
							<a href="#">RESTAURANT</a>
						</li>
						<li>
							<a href="#">FACILITIES</a>
						</li>
						<li>
							<a href="#">SPA & SALON</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
