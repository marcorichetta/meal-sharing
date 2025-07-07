import React from "react";

export default async function ServerPage() {
	// Simulate data fetching

	const randomId = Math.floor(Math.random() * 100) + 1;
	const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${randomId}`, {
		cache: "no-store",
	});
	const post = await data.json();

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Server Component Example</h1>
			<div className="bg-gray-100 p-4 rounded">
				<h2 className="text-xl font-semibold">{post.title}</h2>
				<p className="mt-2">{post.body}</p>
				<p className="text-sm text-gray-600 mt-4">
					This content was fetched on the server at build time.
				</p>
			</div>
		</div>
	);
}
