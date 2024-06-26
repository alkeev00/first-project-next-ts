import styles from './Button.module.css'
import { ButtonProps } from './Button.props'
import cn from 'classnames'
import { IoIosArrowForward } from 'react-icons/io'

export const Button = ({
	appearance,
	arrow = 'none',
	children,
	className,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button
			{...props}
			className={cn(styles.button, className, {
				[styles.primary]: appearance == 'primary',
				[styles.ghost]: appearance == 'ghost',
			})}
		>
			{children}
			{arrow != 'none' && (
				<span
					className={cn(styles.arrow, {
						[styles.down]: arrow == 'down',
						[styles.right]: arrow == 'right',
					})}
				>
					<IoIosArrowForward />
				</span>
			)}
		</button>
	)
}
