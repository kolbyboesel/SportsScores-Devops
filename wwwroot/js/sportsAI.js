const sendMessage = async (message) => {
	const response = await fetch('https://api.openai.com/v1/completions', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json',
		'Authorization': 'Bearer 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'
	  },
	  body: JSON.stringify({
		model: "text-davinci-003",
		prompt: `User: ${message}\nAI:`,
		max_tokens: 400,
		temperature: 0.5,
	  })
	});
	const data = await response.json();
	return data.choices[0].text.trim();
  };