import type { AppProps } from 'next/app'
import '../styles/style.css';

export default function TrainApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}