import { CSSProperties } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

const Spinner = () => {
  const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red'
  }

  return (
    <ClipLoader
      color='#fff'
      loading={true}
      cssOverride={override}
      size={150}
      aria-label='Loading Spinner'
      data-testid='loader'
    />
  )
}

export default Spinner
