/* eslint max-len: 0 */
import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const PageLayout = ({ content }) => (
  <div className="main-wrapper">
    <Header />
    { content }
    <Footer />
  </div>
)

PageLayout.propTypes = {
  content: React.PropTypes.element
}

export default PageLayout
