import styles from './CartItem.module.css';
import { CardItemProps } from './CartItem.props.ts'; 
import { useDispatch } from 'react-redux';
import { AppDispath } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

function CardItem(props: CardItemProps){
	const dispatch = useDispatch<AppDispath>();

	const increase = () => {
		dispatch(cartActions.add(props.id));
	};

	const descrease = () => {
		dispatch(cartActions.remove(props.id));
	};

	const remove = () => {
		dispatch(cartActions.delete(props.id));
	};

	return(
		<div className={styles['item']}>
			<div className={styles['image']} style={{ backgroundImage: `url('${props.image}')` }}></div>
			<div className={styles['description']}>
				<div className={styles['name']}>{props.name}</div>
				<div className={styles['price']}>{props.price}&nbsp;₽</div>
			</div>
			<div className={styles['actions']}>
				<button className={styles['minus']} onClick={descrease}>
					<img src="/minus-icon.svg" alt="Удалить из корзины" />
				</button>
				<div>{props.count}</div>
				<button className={styles['plus']} onClick={increase}>
					<img src="/plus-icon.svg" alt="Добавить в корзину" />
				</button>
				<button className={styles['remove']} onClick={remove}>
					<img src="/delete-icon.svg" alt="Удалить все" />
				</button>
			</div>
		</div>
	);
}

export default CardItem;
