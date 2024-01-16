import styles from './Products.module.css';
import { Await, useLoaderData } from 'react-router-dom';
import { Product } from '../../interfaces/product.interface';
import { Suspense } from 'react';
import Headling from '../../components/Headling/Headling';

export function Product() {
	const data = useLoaderData() as {data: Product };
	console.log(data);

	return <>
		<Suspense fallback={'Загружаю...'}>
			<Await
				resolve={data.data}
				
			>
				{({data}: {data: Product }) => (
					<div><Headling>{data.name}</Headling>
						<div className={styles['container']}>
							<div className={styles['price']}>
								Цена: {data.price}<span>₽</span>
							</div>
							<div className={styles['rating']}>
								Цена: {data.rating}
								<img src="/rating-icon.svg" alt="rating" />
							</div>
							<div className={styles['ingredients']}>
								Ингридиенты: {data.ingredients}
							</div>
						</div>
					</div>
					
				)}
			</Await>
		</Suspense>
	</>;
}