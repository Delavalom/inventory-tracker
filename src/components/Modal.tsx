type ModalTyppe = {
    title: string,
    onClick: () => void
}

const Modal = ({title, onClick}: ModalTyppe) => {

    (
    <section id="modak">
        <h1>{title}</h1>
    </section>
  )
}
export default Modal