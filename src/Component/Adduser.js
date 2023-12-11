import './Userdetail.css'
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Adduser = () => {
    const navigate = useNavigate()
    function saveData(data) {
        console.log(data);
        axios.post("http://localhost:8080/students",data);
        alert("Data Added Successfully");
        navigate('/showuser');
    }

    const { register, handleSubmit } = useForm();





    return (

        <div className="col-6 mx-auto ">
            <h1 id="s" className='text-center mb-5'>ADD STUDENTS DETAILS</h1>
            <div id='box' className='mx-auto'>
                <form onSubmit={handleSubmit(saveData)} >

                    <label htmlFor="rn" className="mb-2"> <h6> Roll no.</h6>  </label>
                    <input type="number" id="roll" className='form-control' {...register("roll")} />
                    <br />
                    <label htmlFor="name" className="mb-2"> <h6>Name</h6> </label>
                    <input type="text" id="name" className='form-control'{...register("name")} />
                    <br />
                    <label htmlFor="mark" className="mb-2">  <h6> Enter Mark</h6> </label>
                    <input type="number" id="mark" className='form-control'{...register("mark")} />
                    <br />

                    <label htmlFor="gender" className='me-5'> <h6>Select Gender</h6> </label>
                    <div class="form-check form-check-inline">
                        
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="male" value="male" {...register("gender")} />
                        <label class="form-check-label" for="inlineRadio1">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="female" value="Female"{...register("gender")} />
                        <label class="form-check-label" for="inlineRadio2">Female</label>
                    </div>
                    <br />
                    <br />
                    <label htmlFor="city" id='city' className="mb-2">  <h6> City</h6> </label>
                    <select class="form-select" aria-label="Default select example" {...register("city")}>
                        <option selected >Select City</option >
                        <option value="amravati">Amravati</option>
                        <option value="akola">Akola</option>
                        <option value="nagpur">Nagpur</option>
                    </select>
                    <br />
               

                    
                    <br />

                    <button type="submit" className="btn btn-outline-success col-3 offset-2">ADD USER</button>
                    <button type="reset" className="btn btn-outline-warning col-3 offset-2">RESET</button>

                </form>
            </div>
        </div>
    )
}
export default Adduser;