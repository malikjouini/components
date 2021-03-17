import React from 'react';
import ImageProfil from './profilimg.png';
import './profil.css';

function ProfilPhoto() {
    return (
        <div>
            <img src={ImageProfil} className="imageprofil"/>
        </div>
    )
}

export default ProfilPhoto;
