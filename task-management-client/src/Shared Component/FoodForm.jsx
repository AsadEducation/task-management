

const FoodForm = ({ onSubmit, defaultValues, isEditMode }) => {

    // console.log(defaultValues);

    return (

        <form onSubmit={onSubmit} className="card-body">
            {/* Task Title */}
            <div className="form-control">
                <label className="label">
                    <span>Task Title</span>
                </label>
                <input
                    type="text"
                    placeholder="Enter task title"
                    className="input input-bordered"
                    name="title"
                    defaultValue={defaultValues?.title || ''}
                    required
                />
            </div>

            {/* Task Image */}
            <div className="form-control">
                <label className="label">
                    <span>Task Image</span>
                </label>
                <input
                    type="url"
                    placeholder="http://image.com/"
                    className="input input-bordered"
                    name="image"
                    defaultValue={defaultValues?.image || ''}
                    required
                />
            </div>

            {/* Task Description */}
            <div className="form-control">
                <label className="label">
                    <span>Task Description</span>
                </label>
                <textarea
                    placeholder="Describe the task"
                    className="textarea textarea-bordered"
                    name="description"
                    defaultValue={defaultValues?.description || ''}
                    required
                ></textarea>
            </div>

            {/* Task Timestamp */}
            <div className="form-control">
                <label className="label">
                    <span>Task Date</span>
                </label>
                <input
                    type="date"
                    className="input input-bordered"
                    name="timestamp"
                    defaultValue={defaultValues?.timestamp || ''}
                    required
                />
            </div>

            {/* Task Category */}
            <div className="form-control">
                <label className="label">
                    <span>Task Category</span>
                </label>
                <select
                    className="select select-bordered"
                    name="category"
                    defaultValue={defaultValues?.category || 'To-Do'}
                >
                    <option value="To-Do">To-Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
                <button className="btn bg-green-500">{isEditMode ? 'Update Task' : 'Add Task'}</button>
            </div>
        </form>

    );
};

export default FoodForm;
