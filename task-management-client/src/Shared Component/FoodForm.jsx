

const FoodForm = ({ onSubmit, defaultValues, isEditMode }) => {

    // console.log(defaultValues);

    return (

        <form onSubmit={onSubmit} className="card-body">
            {/* Food Name */}
            <div className="form-control">
                <label className="label">
                    <span >Food Name</span>
                </label>
                <input
                    type="text"
                    placeholder="Chicken Biriyani"
                    className="input input-bordered"
                    name="food_name"
                    defaultValue={defaultValues?.food_name || ''}
                    required
                />
            </div>

            {/* Food Image */}
            <div className="form-control">
                <label className="label">
                    <span >Food Image</span>
                </label>
                <input
                    type="url"
                    placeholder="http://image.com/"
                    className="input input-bordered"
                    name="food_image"
                    defaultValue={defaultValues?.food_image || ''}
                    required
                />
            </div>

            {/* Food Quantity */}
            <div className="form-control">
                <label className="label">
                    <span >Food Quantity</span>
                </label>
                <input
                    type="number"
                    placeholder="1/2/3"
                    className="input input-bordered"
                    name="food_quantity"
                    defaultValue={defaultValues?.food_quantity || ''}
                    required
                />
            </div>

            {/* Pickup Location */}
            <div className="form-control">
                <label className="label">
                    <span >Pickup Location</span>
                </label>
                <input
                    type="text"
                    placeholder="A.K SQUARE, DHAKA"
                    className="input input-bordered"
                    name="pickup_location"
                    defaultValue={defaultValues?.pickup_location || ''}
                    required
                />
            </div>

            {/* Expired Date */}
            <div className="form-control">
                <label className="label">
                    <span >Expired Date</span>
                </label>
                <input
                    type="date"
                    className="input input-bordered"
                    name="expired_datetime"
                    defaultValue={defaultValues?.expired_datetime || ''}
                    required
                />
            </div>

            {/* Additional Notes and Food Status */}
            <div className="lg:flex items-center justify-between">
                <div className="form-control lg:w-[50%]">
                    <label className="label">
                        <span >Additional Notes</span>
                    </label>
                    <textarea
                        placeholder="Describe food a little bit"
                        className="textarea textarea-bordered"
                        name="additional_notes"
                        defaultValue={defaultValues?.additional_notes || ''}
                    ></textarea>
                </div>
                <div className="form-control lg:w-[50%]">
                    <label className="label">
                        <span >Food Status</span>
                    </label>
                    <select
                        className="select select-bordered"
                        name="food_status"
                        defaultValue={defaultValues?.food_status || 'available'}
                    >
                        <option value="available">available</option>
                        <option value="not available">not available</option>
                        <option value="requested">requested</option>
                    </select>
                </div>
            </div>

            {/* Donator Info */}
            <div className="form-control">
                <label className="label">
                    <span >Donator Name</span>
                </label>
                <input
                    type="text"
                    placeholder="Jhankar Mahbub"
                    className="input input-bordered"
                    name="food_donator_name"
                    defaultValue={defaultValues?.food_donator_name || ''}
                    required
                />
            </div>
            <div className="form-control">
                <label className="label">
                    <span >Donator Image</span>
                </label>
                <input
                    type="url"
                    placeholder="http://image.com/"
                    className="input input-bordered"
                    readOnly
                    name="food_donator_image"
                    defaultValue={defaultValues?.food_donator_image || ''}
                    required
                />
            </div>
            <div className="form-control">
                <label className="label">
                    <span >Donator Email</span>
                </label>
                <input
                    type="email"
                    className="input input-bordered"
                    readOnly
                    name="food_donator_email"
                    defaultValue={defaultValues?.food_donator_email || ''}
                />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
                <button className="btn bg-green-500">{isEditMode ? 'Update Food' : 'Add Food'}</button>
            </div>
        </form>
    );
};

export default FoodForm;
