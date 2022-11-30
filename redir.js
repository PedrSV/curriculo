// SCRIPT EXPERIMENTAL
const link = new URLSearchParams(document.location.search);
if(link.get('')) {
    switch(link.get('')){
        case 'portalfamepi':
            window.location.href = 'http://inscricoes.fundacaomatiasmachline.org.br/FrameHTML//web/app/edu/PortalEducacional/#/nota-falta-unificada'; break;
        case 'famepi':
            window.location.href = 'https://www.famepi.org.br'; window.close(); break;
        case 'github':
            window.location.href = 'http://github.com/pedrsv'; window.close(); break;
        case 'google':
            window.location.href = 'http://www.google.com.br'; window.close(); break;
        case 'instagram':
            window.location.href = 'https://www.instagram.com/pedrsv/'; window.close(); break;
        case 'denver':
            window.location.href = 'https://joaofefes.github.io/denver/'; window.close(); break;
        case 'linkedin':
            window.location.href = 'https://br.linkedin.com/in/pedrolucas-sds'; window.close(); break;
        case 'links':
            window.location.href = 'https://pedrsv.github.io/links'; window.close(); break;
        default:
            // document.getElementById('msg').remove();
            // document.write('<p style="color:red;">Inválido. Verifique o link.</p>');
            // alert('Não foi possível redirecionar para "' + link.get('') + '".\nVerifique o link e tente novamente.');
            if (confirm('Não foi possível redirecionar para "' + link.get('') + '".\nVerifique o link e tente novamente.')) {
                window.location.href = 'about:blank';
            } else {
                window.location.href = 'about:blank';
            }
    }
}
