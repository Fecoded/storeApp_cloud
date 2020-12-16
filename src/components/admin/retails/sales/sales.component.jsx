import { Fragment} from 'react'

import PageHeader from './page-header.component'
import PageContent from './page-content.component'

const SalesContent = () => (
    <Fragment>
        <div id="main">
            <div className="main-content">
                <PageHeader />
                <PageContent />
            </div>
        </div>
    </Fragment>
)

export default SalesContent
