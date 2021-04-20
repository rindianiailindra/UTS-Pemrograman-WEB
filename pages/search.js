import Head from 'next/head'


import Sidebar from '../components/sidebar'
import Layout from '../components/layout'
import Menu from '../data-dummy/menu.json'

export default function Search({ props }) {
  return (
      

<Layout layoutProps = {props.menu}>

  <div className="row">
    <div className="col-md-8">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">
        Halaman Pencarian
      </h3>
      <form action="">
            <div className="form-group">
                <label htmlFor="">Isikan Kata Kunci Disini</label>
                <input type="text" className="form-control"></input>
            </div>
      </form>
    </div>

      <Sidebar />

  </div>

</Layout>

  )
}
Search.getInitialProps = () => {
  return {
    props : {
      menu : Menu
    }
  }
}