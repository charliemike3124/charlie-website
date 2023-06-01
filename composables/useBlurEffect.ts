export function useBlurEffect(elementId: string) {
    let element: any = null;

    function isInViewport(el: HTMLElement, offset = 0) {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight - offset && rect.bottom >= 0;
    }

    function handleScroll() {
        if (element) {
            if (isInViewport(element, 200)) {
                setTimeout(() => {
                    element.style.filter = "blur(0)";
                    element.style.opacity = "1";
                }, 500);
            } else {
                element.style.filter = "blur(10px)";
                element.style.opacity = "0.5";
            }
        }
    }

    onMounted(() => {
        element = document.getElementById(elementId);
        if (element) {
            element.style.filter = "blur(10px)";
            element.style.opacity = "0.5";
            element.style.transition = "opacity 1s ease-in-out, filter 1s ease-in-out";
            window.addEventListener("scroll", handleScroll);
        } else {
            console.log("useBlurEffect: element does not exist.");
        }
    });
}
