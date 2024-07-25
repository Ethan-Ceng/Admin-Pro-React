import ReactDOM from 'react-dom/client'
import Loading from './loading.tsx'


export const showLoading = () => {
  const loading = document.createElement('div')
  loading.setAttribute('id', 'loading')
  ReactDOM.createRoot(loading).render(<Loading />)
}

export const hideLoading = () => {
  document.body.removeChild(document.getElementById('loading') as HTMLDivElement)
}
