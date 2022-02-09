import type { NextPage } from 'next';
import { trpc } from '@utils/trpc';

const Home: React.FC<NextPage> = () => {
	const { data, isLoading } = trpc.useQuery(['hello', { text: 'Thømes' }]);

	if (isLoading) return <div>Loading...</div>;

	if (data) return <div>{data.greeting}.</div>;

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
