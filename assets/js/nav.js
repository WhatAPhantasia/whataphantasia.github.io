//stole this from zi heheheheh 
//im going to be honest idk how to style this no im not gonna use it.

let islocal = location.protocol == "https:" ? '' : '.html';

let links = [
	{ path: 'index', title: 'home' },
	{ path: 'aboutme', title: 'about me & da site!' },	
	{ path: 'projects', title: 'projects', sublinks: [
		{ path: 'perpro', title: 'personal projects' },
		{ path: 'fanpro', title: 'fandom projects' },
		{ path: 'ukagaka', title: 'ukagakas' },
	] },
	{ path: 'coms', title: 'commissions' },	
	{ path: 'portfolio', title: 'portfolio & art archive', sublinks: [
		{ path: '2023portfolio', title: '2023 portfolio' },
		{ title: '— da archive!! —' },
		{ path: 'artz', title: 'ALL OF DA ART' },
	] },
	{ title: 'webshrines & hoards :3', sublinks: [
		{ path: 'dibshrine', title: 'DIB MEMBRANE!! X3' },
		{ title: '— DA HOARD!! —' },
		{ path: 'genderz', title: 'gender hoard'},
		{ path: 'graphicz', title: 'graphics hoard'},
	] },
	{ path: 'links', title: 'external links' },	
];

let basepath = '';
let active = null;

function findActive(links) {
	for (let link of links) {
		if (link.path && location.pathname.endsWith(link.path)) {
			active = link;
			basepath = location.pathname.substring(0, location.pathname.length-link.path.length);
		}
		if (link.sublinks) {
			findActive(link.sublinks);
		}
	}
}

function linkHTML(link) {
	if (link.title == "home" && !islocal)
	{
		let className = link == active ? 'class="active"' : '';
		return `<a href="/PHANTASMAGORICAL/" ${className}>${link.title}</a>`;
	}
	else if (link.path) {
		//Edited this slightly so that the 'class=' bit is part of the variable. Otherwise there was just the word 'class' sitting on its own in the divs, and that seemed weird and like something I don't want. (Not sure why/how it didn't have an '=""' part... perhaps a side effect of inspect element or something?)
		let className = link == active ? 'class="active"' : '';
		//Just need an if check here probably...
		if (link.path.startsWith("http"))
		{
			return `<a href="${link.path}" ${className}>${link.title}</a>`;
		}
		else
		{
			return `<a href="${basepath}${link.path}${islocal}" ${className}>${link.title}</a>`;
		}
		
	} else if (link.sublinks) {
		return `
			<div class="dropdown">
				<button class="dropbtn">${link.title}
				  <i class="fa fa-caret-down"></i>
				</button>
				<div class="dropdown-content">
				${link.sublinks.map(linkHTML).join('')}
				</div>
			</div>`;
	} else {
		return `<p class="navdivider">${link.title}</p>`;
	}
}

findActive(links);
document.getElementById('navbar').innerHTML = links.map(linkHTML).join('');