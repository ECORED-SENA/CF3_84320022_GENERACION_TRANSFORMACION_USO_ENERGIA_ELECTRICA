<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Definición y clasificación de las máquinas eléctricas rotativas
    .row.mb-5
      .col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p Se entiende por máquina eléctrica al conjunto de mecanismos capaces de generar, aprovechar o transformar la energía eléctrica.
        .row.mb-3
          .col-12
            .p-3.bg-c2
              .row.mb-3
                .col-12
                  .p-3.bg-c3
                    ul.lista-ul.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-bolt(style="color: #FF4947")
                        |
                        p.mb-0 Si la máquina convierte energía mecánica en energía eléctrica, se llama generador.
              .row
                .col-12
                  .p-3.bg-c3
                    ul.lista-ul.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-bolt(style="color: #FF4947")
                        |
                        p.mb-0 Si convierte energía eléctrica en energía mecánica, se denomina motor.
        p.mb-0 Esta relación se conoce como el principio de conservación de la energía electromecánica.
      .col-lg-5.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img1.png', alt='', style="width: 450px").m-auto
    .row.bg-c4
      .col-12
        .px-5
          .row.mb-4
            .col-auto.bg-c5(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img1.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Clasificación de las máquinas eléctricas rotativas
          p.mb-4(data-aos="fade-right") La clasificación de las máquinas eléctricas rotativas se basa en su función principal: generadores, que transforman energía mecánica en eléctrica, y motores, que convierten energía eléctrica en mecánica.
          .row.justify-content-center
            .col-lg-10
              .p-4.bg-c3.shadow
                .row
                  .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
                    .p-4.bg-c6
                      .row.align-items-end
                        .col-md-auto.mb-4.mb-md-0
                          figure
                            img(src='@/assets/curso/tema1/img3.png', alt='', style='width: 160px')
                        .col
                          p #[b Generadores]
                          p.mb-0 Transforman la energía mecánica en energía eléctrica.
                  .col-lg-6(data-aos="fade-left")
                    .p-4.bg-c6
                      .row.align-items-end
                        .col-md-auto.mb-4.mb-md-0
                          figure
                            img(src='@/assets/curso/tema1/img4.png', alt='', style='width: 160px')
                        .col
                          p #[b Motores]
                          p.mb-0 Transforman la energía eléctrica en energía mecánica.
          Separador
          #t_1_1
          .titulo-segundo.color-acento-contenido
            h2 1.1 Factor de potencia
          p(data-aos="fade-right") La potencia es la velocidad a la que se consume la energía. También se puede definir como la energía desarrollada o consumida en una unidad de tiempo, expresada en la fórmula:
          .row.justify-content-center.mb-4
            .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c7
                .row.align-items-center.mb-3
                  .col-md-auto
                    figure
                      img(src='@/assets/curso/tema1/img3.svg', alt='', style='width: 150px')
                  .col
                    p.mb-0 Donde:
                    p.mb-0 P: potencia eléctrica (en #[i watts]).
                    p.mb-0 E: energía (en #[i joules]).
                    p.mb-0 t: tiempo (en segundos).
                p.mb-0 La potencia eléctrica se define como la energía consumida en un dispositivo por unidad de tiempo.
            .col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema1/img5.png', alt='', style="width: 340px").m-auto
          .row.mb-4
            .col-12
              .p-4.bg-c3.shadow(data-aos="fade-down")
                .row.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    p.mb-0 El factor de potencia es un término utilizado para cuantificar la cantidad de energía eléctrica que se convirtió en trabajo. El valor ideal del factor de potencia es 1, lo que indica que toda la energía consumida por los aparatos ha sido transformada en trabajo. El factor de potencia se puede representar como:
                  .col-lg-6
                    figure
                      img(src='@/assets/curso/tema1/img4.svg', alt='', style="width: 500px").m-auto
          .row.align-items-center.mb-4
            .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema1/img6.png', alt='', style="width: 470px").m-auto
            .col-lg-7(data-aos="fade-left")
              p Existen tres tipos de potencia:
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
                .row(titulo="Potencia activa (P)")
                  .col-12
                    p.mb-0 Energía útil que los dispositivos eléctricos convierten en otras formas de energía como mecánica, lumínica, térmica o química. Se mide en #[i watts] (W).
                .row(titulo="Potencia reactiva (Q)")
                  .col-12
                    p.mb-0 Energía empleada en la creación de campos magnéticos o eléctricos. No produce trabajo útil y se mide en voltios-amperios reactivos (VAR).
                .row(titulo="Potencia aparente (S)")
                  .col-12
                    p.mb-0 Suma algebraica de las potencias activa y reactiva. Representa la potencia total suministrada y se mide en voltios-amperios (VA).
    p.mb-4(data-aos="fade-right") En la siguiente figura, se presenta una representación geométrica del factor de potencia, donde se relacionan la potencia activa (P), la potencia aparente (S) y el ángulo de desfase (Φ).
    .row.justify-content-center.mb-4
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          p.mb-0 #[b Figura 1.] Representación geométrica del factor de potencia
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img5.svg', alt='La figura representa la relación matemática entre la potencia activa (P) y la potencia aparente (S) mediante el factor de potencia, definido como el coseno del ángulo Φ (⁅cos⁆⁅ ⁆⁅Φ⁆⁅ ⁆).', style="width: 800px").m-auto
    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Las consecuencias de un bajo factor de potencia son:
        .row
          .col-12
            .p-3.bg-c8
              .row.mb-3
                .col-12
                  .p-3.bg-c3
                    ul.lista-ul.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-bolt(style="color: #FF4947")
                        |
                        p.mb-0 Mayor consumo de corriente.
              .row.mb-3
                .col-12
                  .p-3.bg-c3
                    ul.lista-ul.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-bolt(style="color: #FF4947")
                        |
                        p.mb-0 Aumento de pérdidas en los conductores.
              .row.mb-3
                .col-12
                  .p-3.bg-c3
                    ul.lista-ul.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-bolt(style="color: #FF4947")
                        |
                        p.mb-0 Sobrecarga en transformadores, generadores y líneas de distribución.
              .row.mb-3
                .col-12
                  .p-3.bg-c3
                    ul.lista-ul.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-bolt(style="color: #FF4947")
                        |
                        p.mb-0 Incremento en las caídas de voltaje.
              .row
                .col-12
                  .p-3.bg-c3
                    ul.lista-ul.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-bolt(style="color: #FF4947")
                        |
                        p.mb-0 Aumento en los costos de facturación eléctrica debido al mayor consumo de corriente.
      .col-lg-5(data-aos="fade-left")
        p Los beneficios de corregir el factor de potencia son:
        .row.mb-3
          .col-12
            .p-3.bg-c7
              .row.mb-3
                .col-12
                  .p-3.bg-c3
                    ul.lista-ul.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-bolt(style="color: #FF4947")
                        |
                        p.mb-0 Prolongación de la vida útil de los equipos.
              .row
                .col-12
                  .p-3.bg-c3
                    ul.lista-ul.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-bolt(style="color: #FF4947")
                        |
                        p.mb-0 Reducción en los costos por facturación.
        figure
          img(src='@/assets/curso/tema1/img7.png', alt='', style="width: 500px").m-auto
    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido
      h2 1.2 Ejemplos
    p(data-aos="fade-right") A continuación, se presentan algunos ejemplos:
    .row
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        .row.mb-3
          .col-12
            .p-4.bg-c9
              p.mb-0 #[b Ejemplo 1:]
              p Calcule el factor de potencia de un motor que indica 1800W (P) y una potencia aparente de 2040 VA (S). También calcule el ángulo de fase entre el voltaje de línea y la corriente de línea.
              p #[b Solución]
              .row.mb-3
                .col-12
                  math
                    mrow
                      mi F
                      mi p
                      mo =
                      mfrac
                        mrow
                          mn P
                        mrow
                          mn S
                      mo =
                      mfrac
                        mrow
                          mn 1800
                        mrow
                          mn 2040
                      mo =
                      mi 0882
              .row.mb-3
                .col-12
                  math
                    mrow
                      mn Cos
                      mo =
                      mn 0882
              p Por lo tanto, = 28.1º
        figure
          img(src='@/assets/curso/tema1/img8.png', alt='', style="width: 600px").m-auto
      .col-lg-6(data-aos="fade-left")
        .p-4.bg-c10
          p.mb-0 #[b Ejemplo 2:]
          p Un motor monofásico absorbe una corriente de 5A de una línea de 120V y 60Hz. El factor de potencia del motor es de 65 por ciento.
          p.mb-0 #[b Calcule:]
          p.mb-0 #[b a.] La potencia activa absorbida por el motor.
          p #[b b.] La potencia reactiva suministrada por la línea.
          p.mb-0 #[b Solución]
          p #[b a.] La potencia aparente absorbida por el motor es:
          .row.mb-3
            .col-12
              math.ms-3
                msub
                  mi S
                  mi m
                mo =
                mi E
                mi l
                mo =
                mn 120
                mi x
                mn 5
                mo =
                mn 600
                mi V
                mi A
          p #[b b.] La potencia activa absorbida por el motor es
          .row.mb-3
            .col-12
              math.ms-3
                msub
                  mi S
                  mi m
                mo =
                mi C
                mi o
                mi s
                mi q
          .row.mb-3
            .col-12
              math.ms-3
                msub
                  mi Q
                  mi m
                mo =
                msqrt
                  mrow
                    mi S
                    msup
                      mi m
                      mn 2
                    mo +
                    mi P
                    msup
                      mi m
                      mn 2
          .row.mb-3
            .col-12
              math.ms-3
                msub
                  mi Q
                  mi m
                mo =
                msqrt
                  mrow
                    msup
                      mi 600
                      mn 2
                    mo +
                    msup
                      mi 390˄2
                      mn 2
          .row.mb-3
            .col-12
              math.ms-3
                msub
                  mi Q
                  mi m
                mo = 
                mn 456 var
          p.mb-0 Observe que el motor absorbe aún más potencia reactiva que activa de la línea. Esto carga la línea con una cantidad relativamente grande de potencia improductiva.
      
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
