import Link from 'next/link'
import { connect } from 'react-redux';
import {toggleAction }from '../redux/actions/test';
import Head from 'next/head'

import Layout from './layout';

class Signup extends React.Component {
  presMe = (toggle) => { 
    const { addCount } = this.props;
    addCount(toggle)
  }
  render () {
    toggleAction;
    const { test } = this.props;
  return ( 
        <div>
         <Head>
            <title>This page has a title 🤔 </title>
            <link rel="stylesheet" href="../static/css/bootstrap.min.css" />
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
      <h1>Hello Next.js 👋 {JSON.stringify(this.props)} yammy </h1>
       <button className="btn btn-info" onClick={() => this.presMe(test.toggle)}> {JSON.stringify(test.toggle)} </button>
      <Link href='/about'><a>About</a></Link>
       </div> 
  )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCount: (bool) => dispatch(toggleAction(bool))
  };
};

const mapStateToProps = state => {
  return {
    test: state.test
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);