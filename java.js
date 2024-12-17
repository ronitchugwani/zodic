async function fetchZodiacData(sign) {
    try {
        const response = await fetch('http://horoscope-api.herokuapp.com/');
        const data = await response.json();

        const zodiacInfo = data.find(item => item.name.toLowerCase() === sign.toLowerCase());
        if (zodiacInfo) {
            const traits = zodiacInfo.mental_traits.join(", ");
            const sunDates = zodiacInfo.sun_dates.join(" to ");
            document.getElementById("details").innerText = 
                `Traits: ${traits}\nDate Range: ${sunDates}`;
        } else {
            document.getElementById("details").innerText = "Zodiac information not found.";
        }
    } catch (error) {
        document.getElementById("details").innerText = "Error fetching zodiac details.";
    }
}
function findZodiacSign() {
    const birthdate = document.getElementById("birthdate").value;
    if (!birthdate) {
        document.getElementById("result").innerText = "Please enter a valid birthdate!";
        return;
    }

    const date = new Date(birthdate);
    const month = date.getUTCMonth() + 1; // Months are 0-based
    const day = date.getUTCDate();

    let zodiacSign = "";

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        zodiacSign = "Aquarius";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        zodiacSign = "Pisces";
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        zodiacSign = "Aries";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        zodiacSign = "Taurus";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        zodiacSign = "Gemini";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        zodiacSign = "Cancer";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        zodiacSign = "Leo";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        zodiacSign = "Virgo";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        zodiacSign = "Libra";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        zodiacSign = "Scorpio";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        zodiacSign = "Sagittarius";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        zodiacSign = "Capricorn";
    } else {
        zodiacSign = "Invalid date";
    }

    document.getElementById("result").innerText = "Your Zodiac Sign is: " + zodiacSign;

    if (zodiacSign !== "Invalid date") {
        fetchZodiacData(zodiacSign);
    }
}