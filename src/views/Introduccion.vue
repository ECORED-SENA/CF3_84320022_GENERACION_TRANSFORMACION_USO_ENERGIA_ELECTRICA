<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        p Las máquinas eléctricas rotativas son dispositivos esenciales en la ingeniería eléctrica, diseñados para transformar o generar energía según los requerimientos del sistema. Estas máquinas se clasifican principalmente en generadores, que convierten energía mecánica en eléctrica, y motores, que realizan el proceso inverso al transformar energía eléctrica en mecánica. Este funcionamiento se fundamenta en el principio de conservación de la energía electromecánica, lo que las convierte en piezas clave para el desarrollo y operación de numerosos equipos industriales y domésticos.
        .row.justify-content-center
          .col-lg-auto.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/intro/img2.png', alt='', style="width: 230px").m-auto
          .col
            .p-3.bg-c1
              p.mb-0 El desempeño de estas máquinas está estrechamente vinculado al factor de potencia, un parámetro que indica la proporción de energía eléctrica convertida en trabajo útil. Un factor de potencia bajo puede generar consecuencias negativas, como mayores pérdidas de energía, sobrecargas en los equipos y costos elevados en la facturación eléctrica. En cambio, su corrección trae beneficios importantes, como la prolongación de la vida útil de los dispositivos y la optimización del consumo energético, contribuyendo a la eficiencia de los sistemas eléctricos.
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/intro/img1.png', alt='', style="width: 260px").m-auto
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
