function showUploadCoverButton() {
    const uploadCoverButton = document.getElementById('upload-cover-button');
    uploadCoverButton.style.display = 'block';
}

function hideUploadCoverButton() {
    const uploadCoverButton = document.getElementById('upload-cover-button');
    uploadCoverButton.style.display = 'none';
}

async function  changeProfilePicture (input) {
    var input = document.getElementById('cover-picture-input');
    var file = input.files[0];
    
    var formData = new FormData();
    formData.append('img', file);

    await fetch('http://18.117.141.141:3333/img', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Imagem enviada com sucesso:', data.payload.url);
        const url = data.payload.url
        return url 
    })
    .then(data=>{
        var newImageUrl = 'http://18.117.141.141:3333/' + data; // Supondo que a resposta tenha um campo chamado 'fileName'
        document.getElementById('profile-picture').src = newImageUrl;
    })
    .catch(error => {
        console.error('Erro ao enviar a imagem:', error);
        const url = 'profile-picture.jpg'
        return url 
    });
    
}
