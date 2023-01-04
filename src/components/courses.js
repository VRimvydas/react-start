function Courses(props) {
    const title = props.product.title;
    const price = props.product.price;


    return (
        <div class="card bg-primary mb-3">
            <div class="card-header">
                <h3>{title}</h3>
            </div>
            <div class="card-body m-3">
                {price}
            </div>
        </div>);

}

export default Courses;

