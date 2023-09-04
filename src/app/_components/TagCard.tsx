import Link from 'next/link'
import { TagCount } from '@/app/_utils/tags'

export function TagCard(props: { tagCount: TagCount }) {
  return (
    <>
      <Link href={`/tags/${props.tagCount.tag}`} data-testid={'tag-link'}>
        {props.tagCount.tag}{' '}
      </Link>
      <small>({props.tagCount.count} articles)</small>
      <br />
    </>
  )
}
