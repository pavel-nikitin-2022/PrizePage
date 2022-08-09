import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

/**
 * Renders text with border
 *
 * @example
 * ```js
 * <BorderedText component="h1" y={2} borderWidth={2}>Hello!</BorderedText>
 * ```
 */
const BorderedText = ({
	children,
    fontSize = '14px',
	component: Component = 'p',
	color = "white",
	x = 0,
	y = 1,
	borderWidth = 2,
	borderColor = '#000000',
	shadowColor = borderColor,
	...props
}: {
    children?: string,
    fontSize?: string,
    component?: any,
    Component?: string,
    color?: string,
    x?: number,
    y?: number,
    borderWidth?: number,
    borderColor?: string,
    shadowColor?: string,

}) => {
	const StyledText = useMemo(
		() =>
			styled(Component)({
                fontSize: fontSize,
				color: color,
				position: 'relative',
				zIndex: 0,
				'&:after': {
					content: `"${children}"`,
					WebkitTextStroke: borderWidth + 'px ' + borderColor,
					color: '#000000',
					position: 'absolute',
					left: x,
					top: 0,
					zIndex: -1,
				},
				'&:before': {
					content: `"${children}"`,
					WebkitTextStroke: borderWidth + 'px ' + shadowColor,
					color: '#000000',
					position: 'absolute',
					left: x,
					top: y,
					zIndex: -2,
				},
			}),
		[Component, borderColor, borderWidth, children, shadowColor, x, y]
	)

	return <StyledText {...props}>{children}</StyledText>
}

BorderedText.propTypes = {
	/** Text to be rendered. Must be a string */
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	/** Border x position */
	x: PropTypes.number,
	/** Border y position */
	y: PropTypes.number,
	/** Border width */
	borderWidth: PropTypes.number,
	/** Border color */
	borderColor: PropTypes.string,
	/** Shadow color */
	shadowColor: PropTypes.string,
	/** Custom component to be rendered. Defaults to <p> */
	component: PropTypes.elementType,
}

export default React.memo(BorderedText)