import { Slot } from 'expo-router'
import '@/styles/global.css'

// Slot carrega as informações do meu global.css e repassa em toda a aplicação
export default function Layout() {
  return <Slot />
}