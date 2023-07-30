import { Children } from 'react'

const PlayButton = () => {
	return (
		<div className='w-8 h-8 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700'>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
				<path
					fillRule='evenodd'
					d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z'
					clipRule='evenodd'
				></path>
			</svg>
		</div>
	)
}

export const Tracks = ({ tracks }: { tracks: ITrack[] }) => {
	return (
		<ul className='m-auto max-w-full px-4 md:max-w-5xl divide-y divide-gray-200 dark:divide-gray-700'>
			{Children.toArray(
				tracks.map(({ title, length, position }) => (
					<li className='pb-3 sm:pb-4'>
						<div className='flex items-center space-x-4'>
							<div className='flex-1 min-w-0'>
								<p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
									{title}
								</p>
								<p className='text-sm text-gray-500 truncate dark:text-gray-400'>
									Track {position}
								</p>
							</div>
							<div className='inline-flex gap-4 items-center text-base font-semibold text-gray-900 dark:text-white'>
								{length}

								<PlayButton />
							</div>
						</div>
					</li>
				))
			)}
		</ul>
	)
}
