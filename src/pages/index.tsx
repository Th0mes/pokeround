import type { NextPage } from 'next';
import { trpc } from '@utils/trpc';
import { getOptionsForVote } from '@utils/getRandomPokemon';
import { useState } from 'react';
import Image from 'next/image';

const Home: React.FC<NextPage> = () => {
	const [ids, updateIds] = useState(getOptionsForVote());

	const [first, second] = ids;

	const firstPokemon = trpc.useQuery(['get-pokemon-by-id', { id: first }]);
	const secondPokemon = trpc.useQuery(['get-pokemon-by-id', { id: second }]);

	if (firstPokemon.isLoading || secondPokemon.isLoading) return null;

	return (
		<section className="h-screen w-screen flex  flex-col justify-center items-center">
			<div className="text-2xl text-center mb-8">Which Pokemon is Rounder?</div>
			<div className="border rounded p-8 flex justify-between items-center max-w-2xl">
				<div>
					<Image
						src={firstPokemon.data?.sprites.front_default}
						alt={firstPokemon.data?.name}
						width={9999}
						height={9999}
						className="w-64 h-64 bg-purple-600"
					/>
					<p className="text-xl text-center capitalize mb-[-1rem]">
						{firstPokemon.data?.name}
					</p>
				</div>
				<div className="p-8">VS</div>
				<div>
					<Image
						src={secondPokemon.data?.sprites.front_default}
						alt={secondPokemon.data?.name}
						width={9999}
						height={9999}
						className="w-64 h-64 bg-cyan-600"
					/>
					<p className="text-xl text-center capitalize mb-[-1rem]">
						{secondPokemon.data?.name}
					</p>
				</div>
			</div>
		</section>
	);
};

export default Home;
