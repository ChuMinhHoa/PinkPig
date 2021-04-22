import '../css/Items.css';
const Items=(pros)=>{
    //title, price, sale off,
    let imageUrl = ""
    let title = ""
    let price = ""
    let saleoff = ""
    if(pros.title!="")
        title = pros.title
    if(pros.price!="")
        price = pros.price
    if(pros.sale_off!="")
        saleoff = pros.sale_off
    if(pros.imageUrl!="")
        imageUrl = pros.imageUrl

    return (
        <>
        <div className="itemw">
            <div className="imge">
                <img src={imageUrl}></img>
            </div>
            <div className="discrible">
                <div className="d_title">
                    <h1>{title}</h1>
                </div>
                <div className="d_price">
                    <h3>{price} ₫</h3>
                </div>
                <div className="d_saleOff">
                    <p>{saleoff}</p>
                </div>
            </div>
            <div className="bt_buy">
                <button className="bt_"><img src="https://doxeaz.com/themes/banhang/img/empty-cart.png"></img></button>
            </div>
        </div>
        </>
    );

}

export default Items