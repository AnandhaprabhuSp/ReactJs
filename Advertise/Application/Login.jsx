
var LikeButton = React.createClass({
    getInitialState:function(){
        return{
            successUpdate:this.props.updateSuccess,
            likeCount:this.props.count,
            feed_id:this.props.feed_id
        };
    },
    componentDidMount:function(){
        console.log(this.state.successUpdate);
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
        console.log(this.state.successUpdate);
    },
    render:function(){
        return(
            
            this.state.successUpdate?
                <button className="btn-like"><img className="btn-images" src="https://image.flaticon.com/icons/svg/148/148836.svg"/> {this.state.likeCount+1}</button>
            :
                <button className="btn-like" onClick={this.saveLike}><img className="btn-images" src="https://image.flaticon.com/icons/svg/149/149217.svg"/> {this.state.likeCount}</button>
        
        );
    }
});
var LoadFeedOne = React.createClass({
    getInitialState:function(){
        return{
            successUpdate:false
        };
    },
    
    render: function() {
            return (
        <div className="col-sm-3 module">
            <div className="list-group-item-category">{this.props.feed.category}</div>
            <div className="list-group-item-heading">{this.props.feed.feed_title}</div>
            <div className="list-group-item-text">{this.props.feed.feed_content}</div>
            <div className="list-group-item-img"><img src={this.props.feed.feed_img} /></div>
            <div className="list-group-item-foot"><a href={this.props.feed.feed_foot} target="_blank">{this.props.feed.feed_foot}</a></div>
            <div><LikeButton updateSuccess={this.state.successUpdate} count={this.props.feed.likes} feed_id={this.props.feed.feed_id}/></div>
        </div>
        );
    }
});




var FeedsLoad=React.createClass({
    render: function(){
        var feed=this.props.feeds.map(function(f,i){
            return(
                <LoadFeedOne key={i} feed={f} />
            );
        }.bind(this));
        
        return(
            !feed.length?
                <div className='alert alert-danger'>No feeds found.</div>
                :
                <div className='row'>
                    
                        {feed}
                    
                </div>
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
         $.post("api/read_all_feeds.php", {
                id: this.props.userid
        },
            function(results){
                this.setState({products:JSON.parse(results)});
            }.bind(this));
        
       },
    
    componentWillUnmount: function() {
        console.log("Feed component unmount");
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


var MainFeed = React.createClass({
    LogoutClick:function(){
        ReactDOM.unmountComponentAtNode(document.getElementById('content'));
        ReactDOM.render(<MainFeed name="Guest" userid="guestid" />, document.getElementById('content'));
    },
    
    componentDidMount: function() {
        console.log(this.props.name); 
         console.log("Component Did Mount");
        $('.loginfo').text("Logout");
    },
    render: function(){
        return(
            <div class="userFeeds">
                <div class="user">
                </div>
                <div class="feeds" id="feeds">
                    <ul>
                    <Feeds userid={this.props.userid} />
                    </ul>
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
        $.post("api/read_one_product.php", {
                username: this.state.username,
                password: this.state.password
        },
            function(res){
                //alert(res);
                var r=JSON.parse(res)[0];
             if(r){
                 if (this.isMounted()) {
                    this.setState({name: r.name});
                    this.setState({userid:r.id});
                    this.setState({isLogged:true});
                 }
                 
             } else {
                 this.setState({isLogged:false});
                alert("No matching user");
                 ReactDOM.unmountComponentAtNode(document.getElementById('content'));
                 ReactDOM.render(<MainFeed name="Guest" userid="guestid" />, document.getElementById('content'));
          
             }
            }.bind(this)
            
        );
        if(this.state.isLogged){
            ReactDOM.unmountComponentAtNode(document.getElementById('content'));
             $('.loginfo').text('Logout');
            
            ReactDOM.render(<MainFeed name={this.state.name} userid={this.state.userid}/>, document.getElementById('content'));
          
        }
        e.preventDefault();
            $('.user-header').text('Welcome '+this.state.name);
        
    },
      
    handleChange(event) {
        this.setState({username: event.target.value});
    }, 
    handleChangePassword(event) {
    this.setState({password: event.target.value});
  },
    
    render: function() {
        $('.page-header h1').text('Feedofeed');
        $('.page-header img').remove();
        
        
        return (
            
            
            
             <div className="page-content">
                <div className="content-left"></div>
            
                <div className="content-right">
                       
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-md-offset-4">
                        <h1 className="text-center login-title">Login</h1>
                        <div className="account-wall">
                            <form id="form-signin">
                                 <input type="text" value={this.state.username} onChange={this.handleChange} />
                                <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
                                <button className="btn btn-lg btn-primary btn-block" type="submit"  onClick={this.LoginCheck}>Login</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
                
            </div>
            
            
         
        );
    }
});

export default Login;