export async function getImgByQuery1(data : any) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
	return result;
}
 