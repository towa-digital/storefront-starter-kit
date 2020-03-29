import Header, { headerVariants } from '../../../patterns/core/Header'
import TeaserHero, {
  teaserHeroVariants,
} from '../../../patterns/core/TeaserHero'
import MultiColumnText, {
  multiColumnTextVariants,
} from '../../../patterns/core/MultiColumnText'
import TeaserProducts, {
  teaserProductsVariants,
} from '../../../patterns/core/TeaserProducts'

const headerProps = headerVariants[0].props
const teaserHeroProps = teaserHeroVariants[0].props
const multiColumnTextProps = multiColumnTextVariants[6].props
const teaserProductsProps = teaserProductsVariants[0].props

export default function Home(props) {
  return (
    <>
      <Header {...props} {...headerProps} />
      <TeaserHero {...props} {...teaserHeroProps} />
      <MultiColumnText {...props} {...multiColumnTextProps} />
      <TeaserProducts {...props} {...teaserProductsProps} />
    </>
  )
}
