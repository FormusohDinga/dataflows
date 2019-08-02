import React from 'react'
import { Header, Image , Container, Divider, Grid, Segment} from 'semantic-ui-react'

const AboutPage = () => (
    <Segment>
        <Grid columns={2} relaxed='very'>
            <Grid.Column>
                We want to democratize the knowledge skills and best practices of  the world's most elite consultants to the masses.​ ​
            </Grid.Column>
            <Grid.Column>
                Solve our clients Immediate problems.
            </Grid.Column>
        </Grid>
        <Divider vertical></Divider>
    </Segment>

)
export default AboutPage
