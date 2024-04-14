import { Button } from '@/components/Button/Button'
import { H } from '@/components/H/H'
import { P } from '@/components/P/P'
import { Tag } from '@/components/Tag/Tag'

export default function Home() {
	return (
		<div>
			<H tag='h1'>Text H1</H>
			<Button appearance='primary'>Button</Button>
			<Button appearance='ghost' arrow='right'>
				Button
			</Button>
			<P size='small'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
				accusantium!
			</P>
			<P>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
				accusantium!
			</P>
			<P size='large'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
				accusantium!
			</P>
			<Tag size='medium' color='red'>
				Red
			</Tag>
			<Tag size='small' color='ghost'>
				Ghost
			</Tag>
			<Tag size='medium' color='gray'>
				Gray
			</Tag>
			<Tag size='small' color='primary'>
				Primary
			</Tag>
			<Tag size='medium' color='green'>
				Green
			</Tag>
		</div>
	)
}
