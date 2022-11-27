import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const AddACars = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();
    const postDate = new Date();

    const handleAddCars = data =>{
        const image = data.image[0]
        console.log(image)
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                const car = {
                    title: data.name,
                    email: user?.email,
                    sellerName: user?.displayName,
                    categoryId: data.categoryId,
                    image: imgData.data.url,
                    resalePrice: data.resalePrice,
                    condition: data.condition,
                    location: data.location,
                    categoryName: data.categoryName,
                    onDate: data.onDate,
                    description: data.description,
                    postDate 

                }
                //Save sellers post to DB
                fetch('http://localhost:5000/cars',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(car)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result)
                    toast.success('Your Post, Posted is Successfully')
                    navigate('/dashboard/mycars')
                })

                //Selers Cars
                fetch('http://localhost:5000/sellersCar',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(car)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result)
                    navigate('/dashboard/mycars')
                })
            }
        })
    }

    return (
        <div className=''>
            <h2 className='text-4xl mb-5'>Post Your Cars To Selling</h2>
            <form onSubmit={handleSubmit(handleAddCars)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Car Name</span></label>
                        <input type="text"
                         {...register("name", {required: "Name is required"})}
                         className="input input-bordered w-full max-w-xs" /> 
                         {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Price in Doller</span></label>
                        <input type="number"
                         {...register("resalePrice", {required: "Price is required"})}
                         className="input input-bordered w-full max-w-xs" /> 
                         {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Condition</span></label>
                        <select 
                        {...register('condition', {required: "Condition is required"})}
                        className="select input-bordered w-full max-w-xs">
                            <option value='Excellent'>Excellent</option>
                            <option value='Good'>Good</option>
                            <option value='Fair'>Fair</option>
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Mobile Number</span></label>
                        <input type="tel"
                         {...register("phone", {required: "Phone number is required"})}
                         className="input input-bordered w-full max-w-xs" /> 
                         {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Location</span></label>
                        <input type="text"
                         {...register("location", {required: "Location is required"})}
                         className="input input-bordered w-full max-w-xs" /> 
                         {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" 
                         {...register("email")}
                         defaultValue={user?.email}
                         className="input input-bordered w-full max-w-xs" disabled/> 
                         {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Years Of Purchase</span></label>
                        <input type="text"
                         {...register("onDate", {required: "Name is required"})}
                         className="input input-bordered w-full max-w-xs" /> 
                         {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Category Name</span></label>
                        <select 
                        {...register('categoryId', {required: "Category Name is required"})}
                        className="select input-bordered w-full max-w-xs">
                            <option value='Luxurious Cars'>Luxurious Cars</option>
                            <option value='Electric Cars'>Electric Cars</option>
                            <option value='Sports Cars'>Sports Cars</option>
                            <option value='Microbus'>Microbus</option>
                            
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Category ID</span></label>
                        <select 
                        {...register('categoryId', {required: "Category Id is required"})}
                        className="select input-bordered w-full max-w-xs">
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Description</span></label>
                        <textarea
                        {...register('description')}
                        className="textarea textarea-bordered" placeholder="Short Description"></textarea>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Photo</span></label>
                        <input type="file"
                         {...register("image", {required: "Photo is required"})}
                         className="input input-bordered w-full max-w-xs p-2 " /> 
                         {errors.image && <p className='text-red-600'>{errors.img?.message}</p>}
                    </div>
                    <input className='btn btn-primary w-full max-w-xs mt-4 mb-2' type="submit" value="Post Car" />
                    
                </form>
        </div>
    );
};

export default AddACars;