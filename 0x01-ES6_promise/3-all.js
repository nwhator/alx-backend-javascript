import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
	Promise.all([uploadPhoto(), createUser()])
	.then(([photoData, userData]) => {
		const { firstName, lastName } = userData.body;
		console.log(`${photoData.body} ${firstName} ${lastName}`);
	})
	.catch(error => {
		console.log("Signup system offline");
	});
}
