    function clickButtonIfItAppears() {
        const button = document.querySelector("#botprotection_quest");
        if (button) {
            button.click();
        }
    }

    // Verifique imediatamente na carga da página
    clickButtonIfItAppears();

    // Configura o MutationObserver
    const observer = new MutationObserver((mutationsList, observer) => {
        for(let mutation of mutationsList) {
            // Se o adicionado ao DOM foi um nó (por exemplo, um elemento) e não um caracter
            if(mutation.addedNodes.length) {
                clickButtonIfItAppears();
            }
        }
    });

    // Inicia o observador
    observer.observe(document.body, { childList: true, subtree: true });