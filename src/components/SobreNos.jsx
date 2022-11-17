import React from 'react'

function SobreNos() {
  return (
    <article class="nosotros d-flex flex-column align-items-center">
        <div class="cont__titulo w-100 text-center mt-2">
            <h2 class="d-block"> SOBRE NOSOTROS </h2>
        </div>
        <div class="nosotros__text d-flex flex-column flex-xl-row p-2 align-items-center justify-content-around">
            <p class="p-2 col-10 col-xl-5"> Milan indumentaria es una marca argentina que acompaña la dinamica de la vida
                de la mujer contemporanea, acercandole una amplia propuesta de prendas y accesorios
                inspirados en las ultimas tendencias de moda.
                Nuestra gran variedad amalgama diseño con funcionalidad y asegura un justo equilibrio
                entre calidad y accesibilidad, permitiendo que cada mujer pueda recrear su priopio estilo
                y potenciar lo mejor de si misma.
            </p>
            <iframe class="col-10 col-xl-6" width="560" height="315" src="https://www.youtube.com/embed/1VplnxmVjao" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </article>
  )
}

export default SobreNos