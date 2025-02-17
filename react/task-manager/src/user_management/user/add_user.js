
import './user.css';
const AddUser = () => {

return <div class="container">
    <div class="text-center mt-5">
        <h1 >Add User</h1>
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
                                            <label for="form_name">Name *</label>
                                            <input id="form_name" type="text" name="name" class="form-control" placeholder="Please enter your title *" required="required" data-error="Title is required."/> 
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="form_surname">SurName *</label>
                                            <input id="form_surname" type="text" name="surname" class="form-control" placeholder="Please enter your title *" required="required" data-error="Surname is required."/> 
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="form_email">Email *</label>
                                            <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required."/>
                                            
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="form_password">Password *</label>
                                            <input id="form_password" type="password" name="password" class="form-control" placeholder="Please enter your password *" required="required" data-error="Valid password is required."/>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="row">
                                    
                                    <div class="col-md-12">
                                        <input type="submit" class="btn btn-success btn-send  pt-2 btn-block" value="Add User" />
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

export default AddUser;

