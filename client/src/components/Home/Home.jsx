import React from 'react';
import { Grid, GridItem, Box } from '@chakra-ui/react';

function Home() {
	return (
		<Grid
			templateAreas={`
                "header header"
                "nav main"
                "nav footer"
            `}
			gridTemplateRows={'50px 1fr 30px'}
			gridTemplateColumns={'150px 1fr'}
			h='100vh'
			gap='1'
			color='blackAlpha.700'
			fontWeight='bold'>
			<GridItem bg='orange.300' area={'header'}>
				Header
			</GridItem>
			<GridItem bg='pink.300' area={'nav'}>
				Nav
			</GridItem>
			<GridItem bg='green.300' area={'main'}>
				Main
			</GridItem>
			<GridItem bg='blue.300' area={'footer'}>
				Footer
			</GridItem>
		</Grid>
	);
}

export default Home;
