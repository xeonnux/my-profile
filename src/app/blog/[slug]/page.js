import Card from '../../../components/Card'
import Container from '../../../components/Container'



export default function Page({ params }) {
  const { slug } = params

  return <div>My Post: {slug}</div>
}