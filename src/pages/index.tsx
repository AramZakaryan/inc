import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useGetPublicPostsQuery } from '@/service/inc.service'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { isError, isLoading, data } = useGetPublicPostsQuery()

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error!</p>

  return (
    <div>
      MAIN PAGE
      <nav>
        <Link href="/login">go login</Link>
      </nav>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
