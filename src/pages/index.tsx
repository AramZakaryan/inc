import { Inter } from 'next/font/google'
import Link from 'next/link'
import {
  useGetProfileQuery,
  useGetPublicPostsQuery,
  useGetUsersQuery,
  useUpdateProfileMutation,
} from '@/service/inc.service'
import s from './index.module.scss'
import ReactTimeAgo from 'react-time-ago'
import { Loader } from '@/components/loader/loader'
import { useState } from 'react'
import {FormInput} from "@/components/form/form-input";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const [userClicked, setUserClicked] = useState(true)
  // const { isError, isLoading, data } = useGetPublicPostsQuery(undefined, { skip: userClicked })
  // const [trigger, { isError, isLoading, data }] = useLazyGetPublicPostsQuery()
  const [pageSize, setPageSize] = useState<number>(6)
  const { isError, isLoading, data } = useGetPublicPostsQuery({
    pageSize,
  })

  // const { data: dataUsers } = useGetUsersQuery()

  const { data: dataUser } = useGetProfileQuery()

  const {} = useUpdateProfileMutation()

  if (isLoading)
    return (
      <div style={{ display: 'grid', width: '40vh', height: '100vh', placeItems: 'center' }}>
        <Loader />
      </div>
    )
  if (isError) return <p>Error!</p>

  console.log('pageSize', pageSize)

  return (
    <div>
      MAIN PAGE
      <hr />
        <FormInput name={name} control={}
      <hr />
      {/*<pre>{JSON.stringify(dataUsers, null, 2)}</pre>*/}
      <pre>{JSON.stringify(dataUser, null, 2)}</pre>
      <select onChange={e => setPageSize(+e.currentTarget.value)}>
        <option value={4}>4</option>
        <option value={6} selected>
          6
        </option>
        <option value={8}>8</option>
        <option value={10}>10</option>
        <option value={12}>12</option>
      </select>
      <div>
        {/*<button type={'button'} onClick={() => trigger()}>*/}
        {/*  Get Posts*/}
        {/*</button>*/}
      </div>
      <nav>
        <Link href="/login">go login</Link>
      </nav>
      {/*<pre>{JSON.stringify(data?.items, null, 2)}</pre>*/}
      <div className={s.pageContainer}>
        {data?.items.map(item => (
          <div key={item.id} className={s.container}>
            <div>
              <img className={s.img} src={item.images[0].url} alt={item.userName + ' image'} />
              <div className={s.descriptionContainer}>
                <div className={s.avatarImg}>
                  {item.avatarOwner && (
                    <img src={item.avatarOwner} alt={item.userName + ' avatar'} />
                  )}
                </div>
                <span>{item.userName}</span>
              </div>
              <div style={{ marginLeft: '0.5rem' }}>
                {/*<time>{new Date(item.createdAt).toLocaleDateString()}</time>*/}
                <ReactTimeAgo date={new Date(item.createdAt)} />
              </div>
              <div
                style={{
                  marginLeft: '0.5rem',
                  marginTop: '0.5rem',
                }}
              >
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
