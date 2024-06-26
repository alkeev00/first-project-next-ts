import styles from './Tag.module.css'
import { TagProps } from './Tag.props'
import cn from 'classnames'

export const Tag = ({
	size = 'small',
	color = 'ghost',
	children,
	className,
	href,
	...props
}: TagProps): JSX.Element => {
	return (
		<div
			className={cn(styles.tag, className, {
				[styles.small]: size == 'small',
				[styles.medium]: size == 'medium',
				[styles.ghost]: color == 'ghost',
				[styles.red]: color == 'red',
				[styles.gray]: color == 'gray',
				[styles.green]: color == 'green',
				[styles.primary]: color == 'primary',
			})}
			{...props}
		>
			{href ? <a href={href}>{children}</a> : <>{children}</>}
		</div>
	)
}
