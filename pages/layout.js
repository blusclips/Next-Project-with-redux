import Link from 'next/link'
import { Head } from 'next/document'

class Signup extends React.Component {
  render () {
  return (
    <div>
       <Head>
           <title> hello </title>
       </Head>
       { this.props.children }
    </div>
  )
  }
}

export default Signup;