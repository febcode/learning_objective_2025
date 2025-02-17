
import './task.css';
const AddTask = () => {

return <div class="container">
    <div class="text-center mt-5">
        <h1 >Add Task</h1>
    </div>

    <div class="row ">
        <div class="col-lg-7 mx-auto">
            <div class="card mt-2 mx-auto p-4 bg-light">
                <div class="card-body bg-light">
                    <div class = "container">
                        <form id="contact-form" role="form">
                            <div class="controls">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="form_title">Title *</label>
                                            <input id="form_title" type="text" name="title" class="form-control" placeholder="Please enter your title *" required="required" data-error="Title is required."/> 
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="form_due">Due Date *</label>
                                            <input id="form_due" type="text" name="due_date" class="form-control" placeholder="Please enter your due date *" required="required" data-error="due date is required."/> 
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="row">
                                   
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="form_assignee">Assignee *</label>
                                            <select id="form_assignee" name="assignee" class="form-control" required="required" data-error="Please specify your assignee.">
                                                <option value="" selected disabled>--Select Your Task assignee--</option>
                                                <option >Ready to work </option>
                                                <option >In analysis</option>
                                                <option >In Progress</option>
                                                <option >In Review</option>
                                                <option >Done</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="form_status">Status *</label>
                                            <select id="form_status" name="status" class="form-control" required="required" data-error="Please specify your Status.">
                                                <option value="" selected disabled>--Select Your Task Status--</option>
                                                <option >Ready to work </option>
                                                <option >In analysis</option>
                                                <option >In Progress</option>
                                                <option >In Review</option>
                                                <option >Done</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="form_description">Description *</label>
                                            <textarea id="form_description" name="description" class="form-control" placeholder="Write your description here." rows="4" required="required" data-error="Please, leave us a description."></textarea>
                                        </div>
                                    </div>

                                    <div class="col-md-12">
                                        <input type="submit" class="btn btn-success btn-send  pt-2 btn-block" value="Add Task" />
                                    </div>
                                </div>


                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

};

export default AddTask;

