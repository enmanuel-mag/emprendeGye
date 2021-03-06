import React from 'react';

import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Button,
	Typography,
	Divider,
	Grid,
} from '@material-ui/core';

import style from './style';

import { ItemsEvents } from '@interfaces/emprendedor';

export default function page({
	index,
	item,
}: {
	index: number;
	item: ItemsEvents;
}) {
    const classes = style();
    const initData = {
        btnText: 'Más información',
    };

	return (
		<React.Fragment>
			<Card
				className={classes.cardContainer}
				elevation={0}
				variant={'elevation'}
			>
				<Grid container>
					<Grid item xs={12}>
						<CardMedia
							className={classes.cover}
							component='img'
							alt={item.alt}
							image={item.srcImg}
							title={item.alt}
						/>
					</Grid>
					<Grid item xs={12}>
						<CardContent className={classes.cardContent}>
							<Typography gutterBottom variant='subtitle1' component='h2'>
								{item.title}
							</Typography>
							<Typography variant='body2' color='textSecondary' component='p'>
								{item.description}
							</Typography>
						</CardContent>
					</Grid>
					<Grid item xs={12}>
						<CardActions>
							<Button color='primary' variant='text' href={item.srcInfo} className = {classes.btnText}>
								{initData.btnText}
							</Button>
						</CardActions>
					</Grid>
				</Grid>
			</Card>

			<Divider variant='middle' />
		</React.Fragment>
	);
}
