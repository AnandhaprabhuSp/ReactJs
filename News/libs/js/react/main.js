var Oops= React.createClass({
    getInitialState:function(){
        return{
            message:this.props.message
        };
    },
    render:function(){
        $('.page-header img').hide();
        return(
            <div className="oopsImg">
                <img src="https://image.flaticon.com/icons/svg/214/214328.svg" />
                <div className="alert alert-danger">
                    <strong>Oooops!!! </strong>{this.state.message}
                </div>
            </div>
        );
    }
});


var UserProfile = React.createClass({
    getInitialState:function(){
        return{
            userid:this.props.userid
        };
    },
    componentDidMount:function(){
        console.log("Profile component mounted");
        
        $.get("api/read_userProfile.php", {
                userid: this.state.userid,
        },
            function(res){
                var r=JSON.parse(res);
                var category="";
            for(var i=0;i<r.length;i++){
                category=category+" "+r[i].category;
            }
            if(r){
                 if (this.isMounted()) {
                    this.setState({name: r[0].name});
                    this.setState({userid:r[0].id});
                    this.setState({intrest:category});
                 }
                 
             } else {
                <Oops message="Error in Loading... "/>          
             }
            }.bind(this)
            
        );
       
           
    },
    render:function(){
        return(
            <div className="userProfile">
    <div id="transcroller-body" className="aos-all">
        <div className="aos-item" data-aos="fade-up">
            <div className="col-md-10">
                <div className="profile_text">
                    <h4>Hi <span className="profile_span"><strong>{this.state.name}</strong></span>,</h4>
                </div>

                <div className="profile_text">
                    <h4>Your Id:<span className="profile_span"><strong>{this.state.userid}</strong></span></h4>
                </div>
                <div className="profile_text">
                    <h4>Intrested in:<span className="profile_span"><strong>{this.state.intrest}</strong></span></h4>
                </div>
            </div>
                <div  className="col-md-2">
                    <img className="profile_dp" src="https://image.flaticon.com/icons/svg/236/236831.svg" />
                </div>            
            
        </div>
    </div>
</div>
        );
    }
});





var LikeButton = React.createClass({
    getInitialState:function(){
        return{
            successUpdate:this.props.updateSuccess,
            likeCount:this.props.count,
            feed_id:this.props.feed_id
        };
    },
    componentDidMount:function(){
        //console.log(this.state.successUpdate);
    },
    saveLike: function(e) {
        $.post("api/update_Likes.php",{
            feed_id:this.state.feed_id,
            likes:this.state.likeCount
        },
             function(res){
                this.setState({successUpdate: res});
                if(this.state.successUpdate){
                    this.setState({likeCount:this.state.likeCount++});    
                }
                }.bind(this)
            );
        e.preventDefault();
        //console.log(this.state.successUpdate);
    },
    render:function(){
        return(
            
            this.state.successUpdate?
                <button className="btn-like like"><img className="btn-images" src="https://image.flaticon.com/icons/svg/148/148836.svg"/> {this.state.likeCount+1}</button>
            :
                <button className="btn-like like" onClick={this.saveLike}><img className="btn-images" src="https://image.flaticon.com/icons/svg/149/149217.svg"/> {this.state.likeCount}</button>
        
        );
    }
});



var LoadFeedOne = React.createClass({
    getInitialState:function(){
        return{
            successUpdate:false,
            showModel:false
        };
    },

    componentDidMount:function(){
        //console.log("Component mounted...");
    },
    render: function() {
        $('.oopsImg').hide();
            return (
                <div className="aos-item" data-aos="fade-in">
                        <div className="aos-item__inner">
                        <div className="list-group-item-category">{this.props.feed.category}</div>
                        <div className="list-group-item-heading">{this.props.feed.feed_title}</div>
                        <div className="list-group-item-text">{this.props.feed.feed_content}</div>
                        <div className="list-group-item-img"><img src={this.props.feed.feed_img} /></div>
                        <div className="list-group-item-foot"><a href={this.props.feed.feed_foot} target="_blank">{this.props.feed.feed_foot}</a></div>
                        <div><LikeButton updateSuccess={this.state.successUpdate} count={this.props.feed.likes} feed_id={this.props.feed.feed_id}/>
                <a target="_blank" href={"https://www.facebook.com/sharer/sharer.php?u="+this.props.feed.feed_foot+";src=sdkpreparse"}>
                <button className="btn-like fb">
                <img className="btn-images" src="https://image.flaticon.com/icons/svg/39/39322.svg"/></button></a></div>

                        </div>
                      </div>
               
        );
    }
});




var FeedsLoad=React.createClass({
    render: function(){
         //$('.page-header img').hide();
        var feed=this.props.feeds.map(function(f,i){
            return(
                <LoadFeedOne key={i} feed={f} />
            );
        }.bind(this));
        
        return(
            feed.length?
                <div className='row'>
                    
                        {feed}
                    
                </div>
                :
                <Oops message="No Feeds found." />
               
        );
    }
});




var Feeds = React.createClass({
    getInitialState: function() {
       
        return {
            products: [],
            userid:'',
            category:''
        };
    },
    componentDidMount: function(){
         $('.page-header img').show();
         $.post("api/read_all_feeds.php", {
                id: this.props.userid
        },
            function(results){
                this.setState({products:JSON.parse(results)});
            }.bind(this));
        
    },
    
    componentWillUnmount: function() {
        //console.log("Feed component unmount");
    },
     render: function() {
         var filteredFeeds= this.state.products;
         $('.nav-page').text("Home");
         
         return (
            <div class="feeds">
                <FeedsLoad feeds={filteredFeeds} />
            </div>
         );
     }
    });

var FloatLeftBar = React.createClass({
    getInitialState:function(){
        return{
            username:'',
            userid:''
        };
    },
    reload:function(){
        $('.page-header img').show(); 
       ReactDOM.unmountComponentAtNode(document.getElementById('content'));
       ReactDOM.render(<MainFeed name={this.props.name} userid={this.props.userid} />, document.getElementById('content'));
    },
    loadProfile:function(){
        console.log("Profile Loaded");
      ReactDOM.unmountComponentAtNode(document.getElementById('userFeeds'));
      ReactDOM.render(<UserProfile name={this.props.name} userid={this.props.userid} />, document.getElementById('userFeeds'));
    },
    componentDidMount: function() {
       this.setState({username:this.props.name});
       this.setState({userid:this.props.userid});
    },
    render:function(){
        return(
             <div className="float-bar-left">

                  <div className="col-sm-1">
                <div className="sidebar-nav">
                    <div className="navbar-collapse collapse sidebar-navbar-collapse">
                      <ul className="nav navbar-nav">
                        <li  className="float-left"><a href="#"><img src="https://image.flaticon.com/icons/svg/254/254029.svg" alt="Feedofeed" /><h6>Feedofeed</h6></a></li>
                        <li  className="float-left"><a href="#"><img src="https://image.flaticon.com/icons/svg/236/236832.svg" onClick={this.loadProfile}/><h6>{this.props.name}</h6></a></li>
                        <li  className="float-left"><a><img src="https://image.flaticon.com/icons/svg/189/189686.svg" onClick={this.reload}/><h6>Refresh</h6></a></li>
                        <li className="float-left"><a href="#"><img src="https://image.flaticon.com/icons/svg/305/305978.svg"/><h6>Video</h6></a></li>
                        <li className="float-left"><a href="#"><img src="https://image.flaticon.com/icons/svg/149/149217.svg"/><span className="badge">18</span></a></li>
                      </ul>
                    </div>
                </div>
            </div>
                </div>
        );
    }
});
var MainFeed = React.createClass({
    getInitialState:function(){
        return{
            username:'',
            userid:''
        }
    },
   componentDidMount: function() {
       this.setState({username:this.props.name});
       this.setState({userid:this.props.userid});
        $('.loginfo').text("Logout");
       $('.loginfo').on('click',function(){
           localStorage.setItem('fuser',0);
           localStorage.setItem('fuid','');
           localStorage.setItem('fpass','');
       });
    },
    render: function(){
        return(
            <div>
               <FloatLeftBar name={this.state.username} userid={this.state.userid} />
            
                <div className="userFeeds" id="userFeeds">
                    <div className="user">
                    </div>
                    <div className="feeds" id="feeds">
                        
                        <Feeds userid={this.props.userid} />
                        
                    </div>
          
                </div>
            </div>
        );
    }
});





var Login = React.createClass({
    getInitialState: function() {
        return {
            userid:'',
            username:'',
            password:'',
            name:''
        };
    },
    LoginCheck: function(e){
         if(localStorage.getItem('fuser')==1){
             console.log(localStorage.getItem('fuser'));
            this.state.username=localStorage.getItem('fuid');
             this.state.password=localStorage.getItem('fpass');
        }
        if(this.state.username.length<4 || this.state.password.length<4){
            $('#login-warning').show();
            $('#login-warning').text('Invalid Credentials...');
            if(e){e.preventDefault();}
            return;
        }
        
       if($('#remember').is(":checked")){
           localStorage.setItem('fuser', 1);
            localStorage.setItem('fuid', this.state.username);
            localStorage.setItem('fpass', this.state.password);
       }
        
        
        $.get("api/read_one_product.php", {
                username: this.state.username,
                password: this.state.password
        },
            function(res){
            console.log("Fetched data");
                var r=JSON.parse(res)[0];
            console.log(r);
            if(typeof r != 'undefined'){
                 if (this.isMounted()) {
                    this.setState({name: r.name});
                    this.setState({userid:r.id});
                    this.setState({isLogged:true});
                     ReactDOM.unmountComponentAtNode(document.getElementById('content'));
                         $('.loginfo').text('Logout');
                        ReactDOM.render(<MainFeed name={this.state.name} userid={this.state.userid}/>, document.getElementById('content'));
                       $('.user-header').text('Welcome '+this.state.name);
                 }
                 
             } else {
                 this.setState({isLogged:false});
                 $('#login-warning').show();
                $('#login-warning').text('Username and Password mismatch...');
                 //this.Reset();
                if(e){e.preventDefault();}
                return;
          
             }
            }.bind(this)
            
        );
      
        if(e){
            e.preventDefault();    
        }
        
           
    },
    Reset(event) {
        this.setState({username: ''});
        this.setState({password: ''});
        $('#login-warning').hide();
    }, 
    handleChange(event) {
        this.setState({username: event.target.value});
    }, 
    handleChangePassword(event) {
    this.setState({password: event.target.value});
  },
    
    render: function() {
        $('.page-header h1').text('Feedofeed');
        $('.page-header img').hide();
        if(localStorage.getItem('fuser')==1){
            this.LoginCheck();
        }
        
        return (
            
            
            
             <div className="page-content">
                <div className="content-left">
                     <div id="transcroller-body" className="aos-all">
      <div className="aos-item" data-aos="fade-up">
        <div className="aos-item__inner"><h3>1</h3></div>
      </div>
      <div className="aos-item" data-aos="fade-down">
        <div className="aos-item__inner"><h3>2</h3></div>
      </div>
      <div className="aos-item" data-aos="zoom-out-down">
        <div className="aos-item__inner"><h3>3</h3></div>
      </div>
      <div className="aos-item" data-aos="flip-down">
        <div className="aos-item__inner"><h3>4</h3></div>
      </div>
      <div className="aos-item" data-aos="flip-up">
        <div className="aos-item__inner"><h3>5</h3></div>
      </div>
      <div className="aos-item" data-aos="fade-down">
        <div className="aos-item__inner"><h3>6</h3></div>
      </div>
      <div className="aos-item" data-aos="fade-in">
        <div className="aos-item__inner"><h3>7</h3></div>
      </div>
      <div className="aos-item" data-aos="fade-down">
        <div className="aos-item__inner"><h3>8</h3></div>
      </div>
   
      <div className="aos-item" data-aos="fade-down">
        <div className="aos-item__inner"><h3>10</h3></div>
      </div>
      <div className="aos-item" data-aos="fade-up">
        <div className="aos-item__inner"><h3>11</h3></div>
      </div>

      <div className="aos-item" data-aos="fade-down">
        <div className="aos-item__inner"><h3>17</h3></div>
      </div>
      <div className="aos-item" data-aos="fade-up">
        <div className="aos-item__inner"><h3>18</h3></div>
      </div>
      <div className="aos-item" data-aos="zoom-out">
        <div className="aos-item__inner"><h3>19</h3></div>
      </div>
      <div className="aos-item" data-aos="fade-up">
        <div className="aos-item__inner"><h3>20</h3></div>
      </div>
      <div className="aos-item" data-aos="zoom-out">
        <div className="aos-item__inner"><h3>21</h3></div>
      </div>
            
      <div className="aos-item" data-aos="zoom-out-up">
        <div className="aos-item__inner"><h3>23</h3></div>
      </div>
      <div className="aos-item" data-aos="zoom-out-down">
        <div className="aos-item__inner"><h3>24</h3></div>
      </div>
      <div className="aos-item" data-aos="fade-in">
        <div className="aos-item__inner"><h3>25</h3></div>
      </div>
      
                    </div>
                
                </div>
            
            
            
                <div className="content-right">
                       
                <div className="row">
                    <div className="">
                        <h1 className="text-center login-title">Login</h1>
                        <div className="account-wall">
                            <form id="form-signin">
                                <div className="">
                                     <input type="text" value={this.state.username} onChange={this.handleChange} />
                                </div>
                                <div className="">
                                    <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
                                </div>
                                <div>
                                   <label class="checkbox-inline"><input type="checkbox" value="" id="remember"/>Remember me</label>
                                </div>
            
                                <div className="login-btn">
                                        <button className="btn btn-default" type="submit"  onClick={this.LoginCheck}>Login</button>
                                    <button className="btn btn-default" type="reset"  onClick={this.Reset}>Reset</button>
                                </div>
                                <Warning message="Invalid Credentials..." />
                                
                              </form>
                        </div>
                    </div>
                </div>
            </div>
                
            </div>
            
            
         
        );
    }
});
var Warning=React.createClass({
    getInitialState:function(){
    return{
          message:this.props.message  
    };
    },
    render: function(){
        return(
            <div className="alert alert-danger" id="login-warning"><strong>Failed! </strong>{this.state.message}</div>
        );
    }
    
});
var MainApp = React.createClass({
    getInitialState: function() {
        return {
            isLogged : 'false',
            currentPage: 'login',
            userid: null
        };
    },
    changeAppMode: function(newMode, username){
        this.setState({currentMode: newMode});

        if(username !== undefined){
            this.setState({username: username});
        }
    },
    render: function() {
        var modeComponent;
        if(localStorage.getItem('fuser')){
            console.log(localStorage.getItem('fuser'));
            this.state.userid=localStorage.getItem('fuid');
            this.state.password=localStorage.getItem('fpass');
            modeComponent=<Login userid={this.state.userid} password={this.state.password} />;
        } else{
            modeComponent =
            <Login userid='' password='' />;     
        }

       
        
        return modeComponent;
    }
});

ReactDOM.render(
    <MainApp />,
    document.getElementById('content')
);