import estilos from './Banner.module.scss';

const Banner = () => {
  return (<section className={estilos.BannerArea}>
    <div className={estilos.Container}>
      <h1 className={estilos.Titulo}>Kadima Foods</h1>
      <p>Amor em cada prato.</p>
    </div>
  </section>)
}

export default Banner