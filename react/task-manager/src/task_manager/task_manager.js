import './task_manager.css';
const TaskManager = () => { 
  return  <div class="row d-flex justify-content-center container">
    <div class="col-md-8">
      <div class="card-hover-shadow-2x mb-3 card">
        <div class="card-header-tab card-header">
          <div class="card-header-title font-size-lg text-capitalize font-weight-normal"><i
              class="fa fa-tasks"></i>&nbsp;Task Lists</div>
          
        </div>
        <div class="scroll-area-sm">
          <perfect-scrollbar class="ps-show-limits">
            <div style={{position: 'static'}} class="ps ps--active-y">
              <div class="ps-content">
                <ul class=" list-group list-group-flush">
                  <li class="list-group-item">
                    <div class="todo-indicator bg-warning"></div>
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-2">
                          <div class="form-check">
                            <input class="form-check-input" 
                              id="exampleCustomCheckbox12" type="checkbox" />
                                <label class="form-check-label"
                              for="exampleCustomCheckbox12" >&nbsp;</label>
                            </div>
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Call Sam For payments <div class="badge badge-danger ml-2">Rejected</div>
                          </div>
                          <div class="widget-subheading"><i>By Bob</i></div>
                        </div>
                      <div class="widget-content-right">
                        <button class="border-0 btn-transition btn btn-outline-success">
                          <i class="fa fa-check"></i></button>
                          <button class="border-0 btn-transition btn btn-outline-danger">
                         <i class="fa fa-trash"></i>
                         
                        </button>
                      </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="todo-indicator bg-focus"></div>
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-2">
                          <div class="form-check">
                            <input class="form-check-input"
                              id="exampleCustomCheckbox1" type="checkbox" />
                              
                              <label class="form-check-label"
                              for="exampleCustomCheckbox1">&nbsp;</label></div>
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">Make payment to Bluedart</div>
                          <div class="widget-subheading">
                            <div>By Johnny <div class="badge badge-pill badge-info ml-2">NEW</div>
                            </div>
                            
                          </div>
                          
                        </div>
                        <div class="widget-content-right">
                          <button class="border-0 btn-transition btn btn-outline-success">
                            <i class="fa fa-check"></i></button>
                          <button class="border-0 btn-transition btn btn-outline-danger">
                            <i class="fa fa-trash"></i>
                        
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="todo-indicator bg-primary"></div>
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-2">
                          <div class="form-check">
                             <input class="form-check-input"
                              id="exampleCustomCheckbox4" type="checkbox"/> 
                              <label class="form-check-label"
                              for="exampleCustomCheckbox4">&nbsp;</label></div>
                        </div>
                        <div class="widget-content-left flex2">
                          <div class="widget-heading">Office rent </div>
                          <div class="widget-subheading">By Samino!</div>
                        </div>
                        
                        <div class="widget-content-right">
                          <button class="border-0 btn-transition btn btn-outline-success">
                            <i class="fa fa-check"></i></button>
                          <button class="border-0 btn-transition btn btn-outline-danger">
                            <i class="fa fa-trash"></i>
                        
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="todo-indicator bg-info"></div>
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-2">
                          <div class="form-check">
                             <input class="form-check-input"
                              id="exampleCustomCheckbox2" type="checkbox" />
                              <label class="form-check-label"
                              for="exampleCustomCheckbox2">&nbsp;</label></div>
                        </div>
                        
                        <div class="widget-content-left">
                          <div class="widget-heading">Office grocery shopping</div>
                          <div class="widget-subheading">By Tida</div>
                        </div>
                        <div class="widget-content-right">
                          <button class="border-0 btn-transition btn btn-outline-success">
                            <i class="fa fa-check"></i></button>
                          <button class="border-0 btn-transition btn btn-outline-danger">
                            <i class="fa fa-trash"></i>
                        
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="todo-indicator bg-success"></div>
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-2">
                          <div class="form-check">
                             <input class="form-check-input"
                              id="exampleCustomCheckbox3" type="checkbox" />
                              <label class="form-check-label"
                              for="exampleCustomCheckbox3">&nbsp;</label></div>
                        </div>
                        <div class="widget-content-left flex2">
                          <div class="widget-heading">Ask for Lunch to Clients</div>
                          <div class="widget-subheading">By Office Admin</div>
                        </div>
                        
                        <div class="widget-content-right">
                          <button class="border-0 btn-transition btn btn-outline-success">
                            <i class="fa fa-check"></i></button>
                          <button class="border-0 btn-transition btn btn-outline-danger">
                            <i class="fa fa-trash"></i>
                        
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="list-group-item">
                    <div class="todo-indicator bg-success"></div>
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-2">
                          <div class="form-check">
                             <input class="form-check-input" id="exampleCustomCheckbox10"
                              type="checkbox" />
                              <label class="form-check-label" for="exampleCustomCheckbox10">&nbsp;</label></div>
                        </div>
                        <div class="widget-content-left flex2">
                          <div class="widget-heading">Client Meeting at 11 AM</div>
                          <div class="widget-subheading">By CEO</div>
                        </div>
                  
                        <div class="widget-content-right">
                          <button class="border-0 btn-transition btn btn-outline-success">
                            <i class="fa fa-check"></i></button>
                          <button class="border-0 btn-transition btn btn-outline-danger">
                            <i class="fa fa-trash"></i>
                  
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              
            </div>
          </perfect-scrollbar>
        </div>
        <div class="d-block text-right card-footer">
          <button class="mr-2 btn btn-link btn-sm">Cancel</button>
          <button class="btn btn-primary"><a href="/add_task" data-discover="true"> Add Task</a></button></div>
      </div>
    </div>
    </div> 
  };
  
  export default TaskManager;

  // https://bbbootstrap.com/snippets/todo-task-list-badges-71324362