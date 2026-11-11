export default function Main({ id, className, style, children }) {

  return (
    <main
      id={id}
      className={className}
      style={style}
    >
      {children}
    </main >
  )

}