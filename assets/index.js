window.addEventListener(
    "DOMContentLoaded",
    async () => {
        const text = document.getElementById( "comingSoon" );
        text.innerText = "Making the next big thing,";
        setTimeout(() => text.className = "disappear comingSoon", 2 * 1000);
        await new Promise((res) => setTimeout(() => res(), 4 * 1000));
        text.className = "comingSoon appear";
        text.innerText = "Together!";
        setTimeout(() => text.className = "disappear comingSoon", 2 * 1000);
        await new Promise((res) => setTimeout(() => res(), 4 * 1000));
        text.className = "comingSoon appear";
        text.innerText = "Storybook Studios";
        setTimeout(() => text.className = "disappear comingSoon", 2 * 1000);
        await new Promise((res) => setTimeout(() => res(), 4 * 1000));
        document.getElementById( "comingSoon" ).remove();

        const comingSoon = document.getElementById( "comingSoonElement" );
        comingSoon.style = null;
        comingSoon.className = "comingSoonElement appear";

        const logoVideo = document.getElementById( "logoVideo" );
        logoVideo.style = "position: fixed; width: 100%; height: 100%;";
        logoVideo.className = "appear";
        try {
            logoVideo.play();
        } catch(e) {
            console.log(e);
        };

        await new Promise((res) => setTimeout(() => res(), 0.5 * 1000));
        const comingSoonText = document.getElementById( "comingSoonText" );
        comingSoonText.style = "font-size: 36px;";
        comingSoonText.className = "comingSoon appearSlow";

        await new Promise((res) => setTimeout(() => res(), 1 * 1000));
        const socials = document.getElementById( "socials" );
        socials.style = "top: 15%;";
        socials.className = "comingSoonElement appear";
    },
);