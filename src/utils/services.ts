import placeholder from '../images/astro.jpg';

export interface Service {
	id: number;
	image: ImageMetadata;
	title: string;
	description: string;
	tags: string[];
}
// array of 3 services using the service interface
export const services: Service[] = [
	{
		id: 0,
		image: placeholder,
		title: 'Personal & Business Websites',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
		tags: ['HTML', 'CSS', 'JavaScript', 'Svelte']
	},
	{
		id: 1,
		image: placeholder,
		title: 'Portfolios & Blogs',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
		tags: ['HTML', 'CSS', 'JavaScript', 'Svelte']
	},
	{
		id: 2,
		image: placeholder,
		title: 'E-Commerce Websites',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
		tags: ['HTML', 'CSS', 'JavaScript', 'Svelte']
	}
];
