gsap.registerPlugin(ScrollTrigger);

const imagenLogo = document.querySelector('.imagen__header');
const parafoTitulo = document.querySelector('.parrafo__titulo__contacto');
const parafo = document.querySelector('.hero__titulo__parrafo');

const tl = gsap.timeline({
	delay: 0.1,
});

tl.to(imagenLogo, {
	duration: 2,
	ease: 'elastic.out(1, 0.3)',
	y: 200,
	opacity: 1,
});
tl.to(
	parafoTitulo,
	{
		delay: 0.1,
		opacity: 1,
	},
	'-=1'
);
tl.from('.hero__contenedor__titilos__h2__y__h1', {
	x: '100vw',
	opacity: 0,
});
tl.from('.hero__titulo__parrafo', {
	x: '100vw',
});
tl.from('.hero__titulo__boton', {
	opacity: 1,
	y: '100vh',
});
tl.from(
	'.hero__imagen',
	{
		y: '100vh',
	},
	'-=3.2'
);

const tl2 = gsap.timeline({
	scrollTrigger: {
		trigger: '.seccion__contenedor__aboutUs',
		toggleActions: 'play reverse restart reverse',
		// pin: true,
		start: '20% 70%',
		end: '60% 20%',
		// markers: true,
		anticipatePin: 1,
	},
});
tl2
	.from('.aboutUs__items_1', {
		x: '100vw',
		duration: 1,
		delay: 0.2,
		ease: 'power1.inOut',
	})
	.from('.aboutUs__contenedor__texto', {
		x: '-100vw',
	});

const tl3 = gsap.timeline({
	scrollTrigger: {
		trigger: '.seccion__contenedor__ourService',
		toggleActions: 'play reverse restart reverse',
		// pin: true,
		start: '20% 70%',
		end: '90% 20%',
		// markers: true,
		anticipatePin: 1,
	},
});
tl3
	.from('.ourService__imagen', {
		x: '100vw',
		duration: 1,
		delay: 0.2,
		ease: 'power1.inOut',
	})
	.from(
		'.ourService__titulo__contenedor',
		{
			x: '-100vw',
			duration: 1,
			ease: 'power1.inOut',
		},
		'-=1'
	)
	.from(
		'.ourService__item__1',
		{
			x: '-100vw',
			duration: 1,
			ease: 'power1.inOut',
		},
		'-=0.5'
	)
	.from(
		'.ourService__item__2',
		{
			x: '-100vw',
			duration: 1,
			ease: 'power1.inOut',
		},
		'-=0.5'
	)
	.from(
		'.ourService__item__3',
		{
			x: '-100vw',
			duration: 1,
			ease: 'power1.inOut',
		},
		'-=0.5'
	);

const tl4 = gsap.timeline({
	scrollTrigger: {
		trigger: '.div___contenedor__contact',
		toggleActions: 'play reverse restart reverse',
		// pin: true,
		start: '35% 70%',
		end: '90% 20%',
		// markers: true,
		anticipatePin: 1,
	},
});
tl4
	.from('.contenedor__contact__titulo', {
		x: '100vw',
		duration: 1,
		ease: 'power1.inOut',
	})
	.from('.contact__contenedor', {
		y: '100vh',
	});

const tl5 = gsap.timeline({
	scrollTrigger: {
		trigger: '.seccion__contenedor__contact__2',
		toggleActions: 'play reverse restart reverse',
		// pin: true,
		start: '35% 70%',
		end: '90% 20%',
		// markers: true,
		anticipatePin: 1,
	},
});
tl5.from('.contact__mapa', {
	x: '100vw',
	ease: 'power1.inOut',
});

const tl6 = gsap.timeline({
	scrollTrigger: {
		trigger: '.footer__contenedor',
		toggleActions: 'play reverse restart reverse',
		// pin: true,
		start: '0% 80%',
		end: '100% 20%',
		// markers: true,
		anticipatePin: 1,
	},
});
tl6
	.from('.footer__imagen', {
		opacity: 0,
		ease: 'power1.inOut',
	})
	.from('.fooder__texto', {
		y: '100vh',
		ease: 'power1.inOut',
	})
	.from(
		'.redes__item__1',
		{
			x: '-100vw',
			ease: 'power1.inOut',
		},
		'-=0.5'
	)
	.from(
		'.redes__item__2',
		{
			y: '100vw',
			ease: 'power1.inOut',
		},
		'-=0.5'
	)
	.from(
		'.redes__item__3',
		{
			x: '100vw',
			ease: 'power1.inOut',
		},
		'-=0.5'
	);
