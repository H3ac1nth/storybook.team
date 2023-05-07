window.addEventListener(
    "DOMContentLoaded",
    async () => {
        const text = document.getElementById( "comingSoon" );
        text.innerText = "Making the next big thing,";
        setTimeout(() => text.className = "disappear comingSoon", 1 * 1000);
        await new Promise((res) => setTimeout(() => res(), 2.5 * 1000));
        text.className = "comingSoon appear";
        text.innerText = "Together!";
        setTimeout(() => text.className = "disappear comingSoon", 1 * 1000);
        await new Promise((res) => setTimeout(() => res(), 2.5 * 1000));
        text.className = "comingSoon appear";
        text.innerText = "Coming soon.";
    },
);