import Link from 'next/link';
import 'semantic-ui-css/semantic.min.css'
import { Container, Header, Grid, Image, Segment } from 'semantic-ui-react'

import Head from '../components/head'
import SearchStandard from '../components/search'

export default () => (
  <div>
    <Grid columns={1}>
      <Grid.Column>
        <Head title="GitHub Search" />
      </Grid.Column>
    </Grid>
    <Grid centered columns={2} style={{marginTop: 80}}>
      <Grid.Column>
        <Header as='h1' textAlign='center'>
          Welcome to GitHub Search!
        </Header>
         <Container textAlign='center'>
            <p>Enter a repo name in search field below to see the demo.</p>
            <SearchStandard />
         </Container>
      </Grid.Column>
    </Grid>
  </div>
)
