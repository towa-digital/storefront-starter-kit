import { useState } from 'react'
import classNames from 'classnames'
import { useTranslation } from '../../../utils'
import { Link } from '../..'
import NavigationFlyout from './NavigationFlyout'

const TRANSITION_DELAY_IN_MS = 200

export default function FirstLevelNavigationItem(props) {
  const [isExpanded, toggleExpanded] = useState(false)
  const [timerId, setTimer] = useState(null)
  const { language } = useTranslation()
  const { text = {}, link = {}, children = [] } = props

  const hasSubcategories = children.length > 0

  const itemClasses = classNames('desktop-navigation__item', {
    ['desktop-navigation__item--expanded']: isExpanded,
  })

  return (
    <li
      className={itemClasses}
      onMouseEnter={() => {
        clearTimeout(timerId)

        setTimeout(() => toggleExpanded(true), TRANSITION_DELAY_IN_MS)
      }}
      onMouseLeave={() => {
        setTimer(
          setTimeout(() => {
            toggleExpanded(false)
          }, TRANSITION_DELAY_IN_MS)
        )
      }}
    >
      <Link href={link[language]} className="desktop-navigation__item-link">
        {text[language]}
      </Link>

      <NavigationFlyout
        isVisible={hasSubcategories && isExpanded}
        subcategories={children}
      />
    </li>
  )
}
