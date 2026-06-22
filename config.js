// Configuração do Site g7s1lva
// Modifique estes valores para personalizar seu site

const SITE_CONFIG = {
    // Informações Pessoais
    title: "g7s1lva",
    citation: "I don't seek power - I am power.",
    
    // Cores Principais (formato hexadecimal)
    colors: {
        primary: "#504f4f",      // Vermelho Primário
        secondary: "#646464",    // Vermelho Secundário
        accent: "#585858",       // Vermelho de Destaque
        white: "#ffffff",        // Branco
        black: "#000000"         // Preto
    },
    
    // Links para Redes Sociais
    socialLinks: {
        github: "https://github.com/g7s1lva",
        tiktok: "https://www.tiktok.com/@nl.hype",
        spotify: "https://open.spotify.com/user/315o7uhovg277va74smsucqve5we?si=9a5a93e5a1504457",
        discord: "https://discord.gg/3bxUcyAeNR",
        instagram: "https://www.instagram.com/g7s1lva"
    },
    
    // Configuration audio
    audio: {
        volume: 0.15,            // Volume padrão (0,0 a 1,0)
        autoplay: true,          // Reprodução automática
        loop: true               // Reprodução em loop
    },
    
    // Configuration vidéo
    video: {
        autoplay: true,          // Reprodução automática
        muted: true,             // Silenciado por padrão
        loop: true,              // Reprodução em loop
        playsinline: true        // Reprodução integrada em dispositivos móveis
    },
    
    // Configuration des animations
    animations: {
        enabled: true,           // Ativar animações
        particleCount: 50,       // Número de partículas
        particleSpeed: 300,      // Velocidade da partícula (m/s)
        titleAnimationSpeed: 200, // Velocidade da animação do título (ms)
        typingSpeed: 100         // Velocidade de ataque (ms)
    },
    
    // Configuration responsive
    responsive: {
        mobileBreakpoint: 768,   // Ponto de quebra para dispositivos móveis (px)
        tabletBreakpoint: 1024   // Ponto de quebra para tablet (px)
    },
    
    // Messages personnalisés
    messages: {
        intro: "Click to enter",
        loading: "Chargement...",
        errorVideo: "Your browser does not support HTML5 video.",
        errorAudio: "Your browser does not support the audio element."
    },
    
    // Configuration des effets visuels
    effects: {
        scanlines: true,         // Efeito de linhas de varredura
        vignette: true,          // Efeito de vinheta
        distortion: true,        // Efeito de distorção
        particles: true,         // Partículas flutuantes
        fireParticles: true,     // Partículas de fogo
        parallax: true,          // Efeito de paralaxe
        shockwave: true          // Ondas de choque acionadas por clique
    },
    
    // Configuration des animations de texte
    textAnimations: {
        holographic: true,       // Animação holográfica
        glitch: true,            // Efeito glitch
        neon: true,              // Efeito neon
        typing: true,            // Efeito de digitação
        shine: true,             // Efeito cintilante
        pulse: true              // Efeito de pulsação
    }
};

// Função para aplicar a configuração
function applyConfig() {
    // Application du titre
    document.title = SITE_CONFIG.title;
    
    // Aplicando a citação
    const citationElement = document.getElementById("citation-text");
    if (citationElement) {
        citationElement.textContent = SITE_CONFIG.citation;
    }
    
    // Aplicando o título principal
    const titleElement = document.getElementById("main-title");
    if (titleElement) {
        titleElement.textContent = SITE_CONFIG.title;
    }
    
    // Implementação da mensagem de introdução
    const introElement = document.querySelector(".intro-text");
    if (introElement) {
        introElement.textContent = SITE_CONFIG.messages.intro;
    }
    
    // Configuração de áudio
    const audio = document.getElementById("audio");
    if (audio) {
        audio.volume = SITE_CONFIG.audio.volume;
        audio.loop = SITE_CONFIG.audio.loop;
    }
    
    // Configuração de vídeo
    const video = document.getElementById("background");
    if (video) {
        video.autoplay = SITE_CONFIG.video.autoplay;
        video.muted = SITE_CONFIG.video.muted;
        video.loop = SITE_CONFIG.video.loop;
        video.playsinline = SITE_CONFIG.video.playsinline;
    }
    
    // Atualização de links de redes sociais
    updateSocialLinks();
}

// Função para atualizar links de redes sociais
function updateSocialLinks() {
    const socialLinks = {
        'github': document.querySelector('a[href*="github.com"]'),
        'tiktok': document.querySelector('a[href*="tiktok.com"]'),
        'youtube': document.querySelector('a[href*="youtube.com"]'),
        'discord': document.querySelector('a[href*="discord.gg"]'),
        'telegram': document.querySelector('a[href*="t.me"]')
    };
    
    for (const [platform, element] of Object.entries(socialLinks)) {
        if (element && SITE_CONFIG.socialLinks[platform]) {
            element.href = SITE_CONFIG.socialLinks[platform];
        }
    }
}

// Função para ativar/desativar efeitos
function toggleEffect(effectName, enabled) {
    if (SITE_CONFIG.effects[effectName] !== undefined) {
        SITE_CONFIG.effects[effectName] = enabled;
        
        // Application immédiate pour certains effets
        if (effectName === 'scanlines') {
            const scanlines = document.querySelector('.scanlines');
            if (scanlines) {
                scanlines.style.display = enabled ? 'block' : 'none';
            }
        }
        
        if (effectName === 'vignette') {
            const vignette = document.querySelector('.vignette');
            if (vignette) {
                vignette.style.display = enabled ? 'block' : 'none';
            }
        }
        
        if (effectName === 'distortion') {
            const distortion = document.querySelector('.screen-distortion');
            if (distortion) {
                distortion.style.display = enabled ? 'block' : 'none';
            }
        }
    }
}

// Função para alterar cores
function updateColors(newColors) {
    Object.assign(SITE_CONFIG.colors, newColors);
    
    // Mise à jour des variables CSS
    const root = document.documentElement;
    root.style.setProperty('--primary-color', SITE_CONFIG.colors.primary);
    root.style.setProperty('--secondary-color', SITE_CONFIG.colors.secondary);
    root.style.setProperty('--accent-color', SITE_CONFIG.colors.accent);
}

// Função para recuperar a configuração
function getConfig() {
    return SITE_CONFIG;
}

// Exportação para uso em outros arquivos
window.SITE_CONFIG = SITE_CONFIG;
window.applyConfig = applyConfig;
window.toggleEffect = toggleEffect;
window.updateColors = updateColors;
window.getConfig = getConfig;

// Aplicação automática da configuração ao carregar
document.addEventListener('DOMContentLoaded', applyConfig);
