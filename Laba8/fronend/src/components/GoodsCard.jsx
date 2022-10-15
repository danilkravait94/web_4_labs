import f from './GoodsCard.module.css';

function GoodsCards({ props}) {

    return (
        <div className={f['good-item']}>
                <div className={f['item-picture']}>
                    <img
                        className={f['item-picture__img']}
                        src={
                            './images/' +
                            props.image
                        }
                        alt={'./images/' +props.image}
                    />
                </div>
                <div className={f['item-title']}>
                    <p><strong>{props.title}</strong></p>
                </div>
                <div className={f['item-desc']}>
                    <p className={f['catalog_rate']}>
                        Price: {props.price} $/kg
                    </p>
                </div>
            
        </div>
    );
}
export default GoodsCards;