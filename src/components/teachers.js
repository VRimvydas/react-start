import avtr1 from '../assets/image/avatar3.png';

function Teacher(props) {
    const name = props.teacher.name;
    const spec = props.teacher.spec;


    return (

        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">

                    <img src={avtr1} class="img-fluid p-4 rounded-circle" />


                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h4 class="card-title">{name}</h4>
                        <p class="card-text">{spec}</p>

                    </div>
                </div>
            </div>
        </div>
    );

}

export default Teacher;