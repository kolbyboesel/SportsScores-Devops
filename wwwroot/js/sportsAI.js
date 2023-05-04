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
		max_tokens: 1200,
		temperature: 0.5,
	  })
	});
	const data = await response.json();
	return data.choices[0].text.trim();
  };