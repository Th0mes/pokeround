import type { NextPage } from 'next';
import Head from 'next/head';

const Home: React.FC<NextPage> = () => {
	return (
		<section className="h-screen w-screen flex  flex-col justify-center items-center">
			<div className="text-2xl text-center mb-8">Which Pokemon is Rounded?</div>
			<div className="border rounded p-8 flex justify-between items-center max-w-2xl">
				<div className="w-16 h-16 bg-purple-600" />
				<div className="px-8">VS</div>
				<div className="w-16 h-16 bg-cyan-600" />
			</div>
		</section>
	);
};

export default Home;
