function getZodiac(month) {
  switch (month.toLowerCase()) {
    case 'january': return { sign: 'Capricorn', symbol: '♑' };
    case 'february': return { sign: 'Aquarius', symbol: '♒' };
    case 'march': return { sign: 'Pisces', symbol: '♓' };
    case 'april': return { sign: 'Aries', symbol: '♈' };
    case 'may': return { sign: 'Taurus', symbol: '♉' };
    case 'june': return { sign: 'Gemini', symbol: '♊' };
    case 'july': return { sign: 'Cancer', symbol: '♋' };
    case 'august': return { sign: 'Leo', symbol: '♌' };
    case 'september': return { sign: 'Virgo', symbol: '♍' };
    case 'october': return { sign: 'Libra', symbol: '♎' };
    case 'november': return { sign: 'Scorpio', symbol: '♏' };
    case 'december': return { sign: 'Sagittarius', symbol: '♐' };
    default: return { sign: 'Unknown', symbol: '?' };
  }
}

const fortunes = [
  '✨ Today is a great day to start something new.',
  '🌟 You will find what you have been looking for.',
  '🔥 Challenges ahead will make you stronger.',
  '🎁 A pleasant surprise is waiting for you.',
  '🧠 Trust your instincts; they will guide you well.'
];

function getRandomFortune() {
  const index = Math.floor(Math.random() * fortunes.length);
  return fortunes[index];
}

function generateHoroscope() {
  const monthInput = document.getElementById('month').value;
  if (!monthInput) {
    document.getElementById('result').innerText = 'Please select a month!';
    return;
  }

  const zodiac = getZodiac(monthInput);
  const fortune = getRandomFortune();

  const result = document.getElementById('result');
  result.innerHTML = `
    <strong>🌌 Your Sign:</strong> ${zodiac.sign} ${zodiac.symbol} <br/><br/>
    <strong>🔮 Fortune:</strong> ${fortune}
  `;
  result.classList.add('show');
}
