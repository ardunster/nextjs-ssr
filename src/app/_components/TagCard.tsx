import Link from 'next/link'
import { TagCount } from '@/app/_utils/tags'

export function TagCard(props: { tagCount: TagCount; key: number }) {
  return (
    <>
      <Link
        href={`/tags/${props.tagCount.tag}`}
        key={props.key}
        data-testid={'tag-link'}
      >
        {props.tagCount.tag}{' '}
      </Link>
      <small>({props.tagCount.count} articles)</small>
      <br />
    </>
  )
}
