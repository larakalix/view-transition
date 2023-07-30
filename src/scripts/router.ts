// import * as turbo from '@hotwired/turbo'

// turbo.start()

// function addImageClass(pathname: string) {
// 	// find the image that corresponds to the album that was clicked
// 	const albumLinkEl = document.querySelector(`[href="${pathname}"]`) as HTMLAnchorElement | null
// 	if (albumLinkEl) {
// 		const img = albumLinkEl.querySelector('img') as HTMLImageElement | null
// 		if (img) {
// 			img.classList.add('album-image')
// 		}
// 	}
// }

// async function handleHomeNavigation(event: CustomEvent) {
// 	const transition = document.createDocumentTransition()

// 	transition.start(async () => {
// 		await event.detail.resume()

// 		const pathname =
// 			turbo.navigator.lastVisit?.location.pathname ||
// 			turbo.navigator.currentVisit?.referrer?.pathname

// 		if (pathname) {
// 			addImageClass(pathname)
// 		}
// 	})
// }

// function handleAlbumNavigation(event: CustomEvent) {
// 	// find the image that corresponds to the album that was clicked
// 	addImageClass(location.pathname)

// 	const transition = document.createDocumentTransition()

// 	transition.start(() => {
// 		event.detail.resume()
// 	})
// }

// function beforeRender(event: CustomEvent) {
// 	// prevent adding multiple event listeners
// 	document.removeEventListener('turbo:before-render', beforeRender)

// 	// loads the next page's HTML but doesn't render it
// 	event.preventDefault()

// 	if (!('createDocumentTransition' in document)) {
// 		// no Shared Element Transition API support; fall back
// 		event.detail.resume()
// 		return
// 	}

// 	if (location.pathname === '/') {
// 		handleHomeNavigation(event)
// 	} else {
// 		handleAlbumNavigation(event)
// 	}
// }

// document.addEventListener('turbo:load', () => {
// 	document.addEventListener('turbo:before-render', beforeRender)
// })
