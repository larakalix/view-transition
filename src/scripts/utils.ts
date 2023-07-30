export function getLink(href: string): HTMLAnchorElement | undefined {
	const fullLink = new URL(href, location.href).href

	return Array.from(document.querySelectorAll('a')).find((link) => link.href === fullLink) as
		| HTMLAnchorElement
		| undefined
}

export function wait(timeout: number): Promise<void> {
	return new Promise((resolve) => {
		setTimeout(() => resolve(), timeout)
	})
}
