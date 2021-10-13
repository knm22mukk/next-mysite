export default function PageTitle({ title }) {
  return (
    <div className="container px-10 lg:px-24 py-5">
      <h1 className="font-bold text-xl uppercase">{ title }</h1>
      <div className="h-1 w-10 bg-blue-500 rounded"></div>
    </div>
  )
}