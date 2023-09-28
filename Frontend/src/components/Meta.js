import { Helmet } from 'react-helmet'
import React from 'react'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}
Meta.defaultProps = {
  title: 'Bidhyarthisewa ',
  description:
    'Buy the second hand products at cheap price only on sell anything ',
  keyword: 'notes, buy engineering notes, second hand products, second hand, cheap price',
}
export default Meta
