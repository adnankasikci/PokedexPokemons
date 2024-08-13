function attachEventListenersToCard(card) {
    const pokemonHoloBefore = card.querySelector('.pokemonHoloBefore');

    card.addEventListener('mousemove', (e) => {
        const cardRect = card.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;

        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const rotateX = (mouseY / cardRect.height) * 45;
        const rotateY = (mouseX / cardRect.width) * -45;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        const moveX = (mouseX / cardRect.width) * 30;
        const moveY = (mouseY / cardRect.height) * 30;

        card.style.setProperty('--bg-pos-x', `${moveX}%`);
        card.style.setProperty('--bg-pos-y', `${moveY}%`);

        if (pokemonHoloBefore) {
            const moveXpokemonHoloBefore = (mouseX / cardRect.width) * -250;
            const moveYpokemonHoloBefore = (mouseY / cardRect.height) * -100;

            pokemonHoloBefore.style.setProperty('--bg-pos-x', `${moveXpokemonHoloBefore}%`);
            pokemonHoloBefore.style.setProperty('--bg-pos-y', `${moveYpokemonHoloBefore}%`);
        }
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `rotateX(0deg) rotateY(0deg)`;

        card.style.setProperty('--bg-pos-x', '50%');
        card.style.setProperty('--bg-pos-y', '50%');

        if (pokemonHoloBefore) {
            pokemonHoloBefore.style.setProperty('--bg-pos-x', '50%');
            pokemonHoloBefore.style.setProperty('--bg-pos-y', '50%');
        }
    });
}