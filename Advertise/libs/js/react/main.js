var Oops= React.createClass({
    getInitialState:function(){
        return{
            message:this.props.message
        };
    },
    render:function(){
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

var AdShow=React.createClass({
    getInitialState:function(){return{
        toShow:this.props.show,
        data:this.props.data
    };},
    flat:function(key,value){
        return(
            <div className="adFullDiv">
            {key}{value}
            </div>
        );
    },
    colored:function(key,value){
        return(
            <div className="adFullDiv colored">
            {key}{value}
            </div>
        );
    },
    vidIconDiv:function(url,id){
        return(
            <button className="btn-like video" id={id} title="Video Link">
            <a href={url} target="_blank">
                <img className="btn-images" /></a></button>
        );
    },
    render:function(){
        if(this.state.toShow=="empty"){
            return(<div className="emptyAdDemo">
                   <div className="loader-full width-one-third" id="loadingAd"></div>
                   <div className="imgThemeDivDemo"><img src="https://rukminim1.flixcart.com/image/312/312/speaker/mobile-tablet-speaker/s/e/n/philips-bt50w-original-imaee3payqhehhrv.jpeg?q=70" className="imgTheme" />
                    </div>
                    <div className="adFullDiv adTitle">Title to show on your Ad
                    </div>
                    {this.flat("Mail: ","advertise@adver.com")}
                    {this.colored("Contact: ","+918012029707")}
                    {this.flat("Features: ","Product features will be dispalyed here")}
                    {this.colored("Price: ","10000")}
                    {this.vidIconDiv("https://youtu.be/W0xuMd_JLKI","videoIcon")}
                    </div>);
        } else{
            
                        let mail;
                        if(this.state.data['bhk']){
                            mail=[mail,this.flat("BHK: ",this.state.data["bhk"])];
                        }
                        if(this.state.data['sqFeet']){
                            mail=[mail,this.colored("Sq.Feet: ",this.state.data["sqFeet"])];
                        }
                        
                        if(this.state.data['rent']){
                            mail=[mail,this.flat("Rent: ",this.state.data["rent"])];
                        }
                        
                        if(this.state.data['advance']){
                            mail=[mail,this.colored("Advance: ",this.state.data["advance"])];
                        }

                        if(this.state.data['offers']){
                            mail=[mail,this.flat("Offers: ",this.state.data["offers"])];
                        }

                        if(this.state.data['type']){
                            mail=[mail,this.colored("Type: ",this.state.data["type"])];
                        }

                        if(this.state.data['price']){
                            mail=this.flat("Price: ",this.state.data["price"]);
                        }

                        if(this.state.data['mYear']){
                            mail=[mail,this.colored("Year of Make: ",this.state.data["mYear"])];
                        }

                        if(this.state.data['splFeatures']){
                            mail=[mail,this.flat("Features: ",this.state.data["splFeatures"])];
                        }
                        
                        if(this.state.data['ownMed']){
                            mail=[mail,this.flat("Owner: ",this.state.data["ownMed"])];
                        }
                        if(this.state.data['landmark']){
                            mail=[mail,this.flat("Landmark: ",this.state.data["landmark"])];
                        }
                        if(this.state.data['mail']){
                            mail=[mail,this.flat("Mail: ",this.state.data["mail"])];
                        }
                       if(this.state.data['contact']){
                            mail=[mail,this.colored("Contact: ",this.state.data["contact"])];
                        }
                         if(this.state.data['description']){
                            mail=[mail,this.flat("Description:",this.state.data["description"])];
                        }
                         if(this.state.data['trailer']){
                            mail=[mail,this.vidIconDiv(this.state.data['trailer'],"videoIcon")];
                        }
                        var my_timer = setTimeout(function () {
                            $("#loadingAd").hide();
                        }, 1000);

                return(
                    <div className="emptyAdDemo">
                    <div className="loader-full width-one-third" id="loadingAd"></div>
                        <div className="imgThemeDivDemo"><img src={this.state.data["themeImg"]} className="imgTheme" />
                        </div>
                        <div className="adFullDiv adTitle">{this.state.data["title"]}
                        </div>
                        {mail}
                    </div>            
    
    
                    );
        }
        
    }
});



var AdForm = React.createClass({
    getInitialState:function(){
      return{
          username:'',
          userid:this.props.userid,
          formType:this.props.formType,
          currView:this.props.currView,
          iData:{}
      };  
    },
    header:function(value){
        return(
            <div className="row">
                    <div className="col-md-12">
                        <label>{value}</label>
                    </div>    
                </div>
        );
    },
    Input:function(value,id){
        return(
            <div className="row">
                    <div className="col-md-4 alRight">
                          <label>{value}</label>    
                    </div>
                    <div className="col-md-6 alLeft">
                        <input type="text" className="formIp" id={id}></input>
                    </div>
                   </div>
        );
    },
    TextArea:function(value,id){
      return(
        <div className="row">
                          <div className="col-md-4 alRight">
                            <label>{value}</label>
                          </div>
                          <div className="col-md-6 alLeft">
                            <textarea name="Desc" cols="40" rows="3" className="formIp" id={id}></textarea>
                          </div>
                    </div>
      );
    },
    develope:function(e){
        
         
        this.state.iData["userid"]=this.state.userid;
        this.state.iData["category"]=this.state.formType;
        this.state.iData["title"]=$("#title").val();
        this.state.iData["themeImg"]=$("#themeImg").val();
        this.state.iData["conImg"]=$("#conImg").val();
        this.state.iData["bhk"]=$("#bhk").val();
        this.state.iData["sqFeet"]=$("#sqFeet").val();
        this.state.iData["rent"]=$("#rent").val();
        this.state.iData["advance"]=$("#advance").val();
        this.state.iData["offers"]=$("#offers").val();
        this.state.iData["type"]=$("#type").val();
        this.state.iData["trailer"]=$("#trailer").val();
        this.state.iData["price"]=$("#price").val();
        this.state.iData["mYear"]=$("#mYear").val();
        this.state.iData["ownMed"]=$("#ownMed").val();
        this.state.iData["spclFeatures"]=$("#spclFeatures").val();
        this.state.iData["landmark"]=$("#landmark").val();
        this.state.iData["mail"]=$("#mail").val();
        this.state.iData["contact"]=$("#contact").val();
        this.state.iData["description"]=$("#desc").val(); 
        
        if(!$("#title").val()){
            $('#title').addClass('bg-warning').focus();
            setTimeout(function() {
             $("#title").removeClass('bg-warning');
            },2000 );
        }else if($("#bhk").length!=0  && !$("#bhk").val()){
            $("#bhk").addClass('bg-warning').focus();
            
            setTimeout(function() {
             $("#bhk").removeClass('bg-warning');
            },2000 );
        }else if($("#rent").length!=0  && !$("#rent").val()){
            $("#rent").addClass('bg-warning').focus();
            
            setTimeout(function() {
             $("#rent").removeClass('bg-warning');
            },2000 );
        }else if($("#advance").length!=0  && !$("#advance").val()){
            $("#advance").addClass('bg-warning').focus();
            
            setTimeout(function() {
             $("#advance").removeClass('bg-warning');
            },2000 );
        }else  if(!$("#contact").val()){
            $('#contact').addClass('bg-warning').focus();
            setTimeout(function() {
             $("#contact").removeClass('bg-warning');
            },2000 );
        }else{
            
            $("#loading").show();
            setTimeout(function() {
             $("#loading").hide();
            },1000 );
            ReactDOM.unmountComponentAtNode(document.getElementById('adDemoDiv'));
            ReactDOM.render(<AdShow data={this.state.iData} snow="showAd"/>, document.getElementById('adDemoDiv'));
          
        }
          //$("#loadingAd").hide();
        
                e.preventDefault();
    },
    Save:function(e){
        //var data=[];
         
        this.state.iData["userid"]=this.state.userid;
        this.state.iData["category"]=this.state.formType;
        this.state.iData["title"]=$("#title").val();
        this.state.iData["themeImg"]=$("#themeImg").val();
        this.state.iData["conImg"]=$("#conImg").val();
        this.state.iData["bhk"]=$("#bhk").val();
        this.state.iData["sqFeet"]=$("#sqFeet").val();
        this.state.iData["rent"]=$("#rent").val();
        this.state.iData["advance"]=$("#advance").val();
        this.state.iData["offers"]=$("#offers").val();
        this.state.iData["type"]=$("#type").val();
        this.state.iData["trailer"]=$("#trailer").val();
        this.state.iData["price"]=$("#price").val();
        this.state.iData["mYear"]=$("#mYear").val();
        this.state.iData["ownMed"]=$("#ownMed").val();
        this.state.iData["spclFeatures"]=$("#spclFeatures").val();
        this.state.iData["landmark"]=$("#landmark").val();
        this.state.iData["mail"]=$("#mail").val();
        this.state.iData["contact"]=$("#contact").val();
        this.state.iData["description"]=$("#desc").val(); 
        
        if(!$("#title").val()){
            $('#title').addClass('bg-warning').focus();
            setTimeout(function() {
             $("#title").removeClass('bg-warning');
            },2000 );
        }else if($("#bhk").length!=0  && !$("#bhk").val()){
            $("#bhk").addClass('bg-warning').focus();
            
            setTimeout(function() {
             $("#bhk").removeClass('bg-warning');
            },2000 );
        }else if($("#rent").length!=0  && !$("#rent").val()){
            $("#rent").addClass('bg-warning').focus();
            
            setTimeout(function() {
             $("#rent").removeClass('bg-warning');
            },2000 );
        }else if($("#advance").length!=0  && !$("#advance").val()){
            $("#advance").addClass('bg-warning').focus();
            
            setTimeout(function() {
             $("#advance").removeClass('bg-warning');
            },2000 );
        }else  if(!$("#contact").val()){
            $('#contact').addClass('bg-warning').focus();
            setTimeout(function() {
             $("#contact").removeClass('bg-warning');
            },2000 );
        }else{
        $("#loading").show();
        $.post("api/saveAd.php", {
                data: this.state.iData,
            },
            function(res) {
                if(res){
                    
                        var my_timer = setTimeout(function () {
                            $("#loading").fadeOut("slow");
                        }, 1000);
                    $("#success").fadeIn("slow");
                    var my_timer=setTimeout(function(){
                        $("#success").fadeOut("slow");
                            this.Reset();
                    }.bind(this),4000);
                    
                    console.log("success")
                    console.log(res);
                }
            else{
                  var my_timer = setTimeout(function () {
                            $("#loading").fadeOut("slow");
                        }, 1000);
                    $("#warn").fadeIn("slow");
                    var my_timer=setTimeout(function(){
                        $("#warn").fadeOut("slow");
                    },4000);
                    
                console.log("Failed...");
                console.log(res);
            }
                }.bind(this)

            );
        }
        e.preventDefault();
        
    },
   Reset:function(e){
        this.state.userid='';
        $("#title").val('');
        $("#themeImg").val('');
        $("#conImg").val('');
        $("#bhk").val('');
        $("#sqFeet").val('');
        $("#rent").val('');
        $("#advance").val('');
        $("#offers").val('');
        $("#type").val('');
        $("#trailer").val('');
        $("#price").val('');
        $("#mYear").val('');
        $("#ownMed").val('');
        $("#spclFeatures").val('');
        $("#landmark").val('');
        $("#mail").val('');
        $("#contact").val('');
        $("#desc").val('');
       if(e){
        e.preventDefault();    
       }
       
   },
   submitReset:function(){
        return(
            <div className="row">
                        <div className="col-md-4">
                            
                        </div>
                        <div className="col-md-6">
                             <button id="submit-btn" className="search-btn" onClick={this.Save}>Publish</button>
                             <button id="reset-btn" className="search-btn" onClick={this.Reset}>Reset</button>
                        </div>
                    </div>
        );
    },
   render:function(){
        
        
        if(this.state.currView){
            console.log(this.state.formType);
            if(this.state.formType=="general")
            {
                return(
                <div className="row adform">
                    <form className="adform-all" data-aos="fade-in">
                    {this.header("General")}
                    {this.Input("Title:","title")}
                    {this.Input("Theme Image:","themeImg")}
                    {this.Input("Content Image:","conImg")}
                    {this.Input("Offers:","offers")}
                    {this.Input("Mail:","mail")}
                    {this.Input("Contact:","contact")}                 
                    {this.TextArea("Desc:","desc")}
                    <br />
                    
                    <button id="dev-btn" className="search-btn" onClick={this.develope}>Develope</button>
                    {this.submitReset()}
                    <div className="row">
                        <div className="col-md-4">
                            
                        </div>
                        <div className="col-md-6">
                             <Success message="Your Ad hosted successfully..." id="success"/>
                            <Warning message="Failed Ad hosting..." id="warn"/>
                        </div>
                             
                    </div>
                  </form>
                      
                 <div className="adDemo" id="adDemoDiv">
                    <AdShow show="empty"/>
                  </div>
                  </div>
            );
           } else if(this.state.formType=="tolet"){
                return(
                <div className="row adform">    
               <form className="adform-all" data-aos="fade-in">
                    {this.header("To-Let")}
                    {this.Input("House Name:","title")}
                    {this.Input("BHK:","bhk")}
                    {this.Input("Sq.Feet:","sqFeet")}
                    {this.Input("Rent:","rent")}
                    {this.Input("Advance:","advance")}
                    {this.Input("Landmark:","landmark")}
                    {this.Input("Theme Image:","themeImg")}
                    {this.Input("Content Image:","conImg")}
                    {this.Input("Contact:","contact")}
                    {this.Input("Mail ID:","mail")}
                    {this.TextArea("Desc:","desc")}
                    <br />
                    
                    <button id="dev-btn" className="search-btn" onClick={this.develope}>Develope</button>
                    {this.submitReset()}
                    <div className="row">
                        <div className="col-md-4">
                            
                        </div>
                        <div className="col-md-6">
                             <Success message="Your Ad hosted successfully..." id="success"/>
                            <Warning message="Failed Ad hosting..." id="warn"/>
                        </div>
                             
                    </div>
                  </form>
                      
                     <div className="adDemo" id="adDemoDiv">
                        <AdShow show="empty"/>
                      </div>
                  </div>
                );
                 
            } else if(this.state.formType=="food"){
                return(
                <div className="row adform">
                 <form className="adform-all" data-aos="fade-in">
                    {this.header("Foods")}
                    {this.Input("Hotel Name:","title")}
                    {this.Input("Offers:","offers")}
                    {this.Input("Landmark:","landmark")}
                    {this.Input("Theme Image:","themeImg")}
                    {this.Input("Content Image:","conImg")}
                    {this.Input("Contact:","contact")}
                    {this.Input("Mail ID:","mail")}
                    {this.TextArea("Desc:","desc")}
                    <br />
                    <button id="dev-btn" className="search-btn" onClick={this.develope}>Develope</button>
                    {this.submitReset()}
                    <div className="row">
                        <div className="col-md-4">
                            
                        </div>
                        <div className="col-md-6">
                             <Success message="Your Ad hosted successfully..." id="success"/>
                            <Warning message="Failed Ad hosting..." id="warn"/>
                        </div>
                             
                    </div>
                  </form>
                      
                 <div className="adDemo" id="adDemoDiv">
                    <AdShow show="empty"/>
                  </div>
                  </div>
            );
            }else if(this.state.formType=="entertain"){
                 return(
                     <div className="row adform">
                   <form className="adform-all" data-aos="fade-in">
                    {this.header("Entertainment")}
                    {this.Input("Theme:","title")}
                    {this.Input("Language:","language")}
                    {this.Input("Type:","type")}
                    {this.Input("Trailer Link(if any):","trailer")}
                    {this.Input("Poster link:","themeImg")}
                    {this.Input("Content Image:","conImg")}
                    {this.Input("Offers:","offers")}
                    {this.Input("Landmark:","landmark")}
                    {this.Input("Contact:","contact")}
                    {this.Input("Mail ID:","mail")}
                    {this.TextArea("Desc:","desc")}
                    <br />
                    <button id="dev-btn" className="search-btn" onClick={this.develope}>Develope</button>
                    {this.submitReset()}
                    <div className="row">
                        <div className="col-md-4">
                            
                        </div>
                        <div className="col-md-6">
                             <Success message="Your Ad hosted successfully..." id="success"/>
                            <Warning message="Failed Ad hosting..." id="warn"/>
                        </div>
                             
                    </div>
                  </form>
                      
                 <div className="adDemo" id="adDemoDiv">
                    <AdShow show="empty"/>
                  </div>
                  </div>
                    );
            }else if(this.state.formType=="services"){
                return(
                    <div className="row adform">
                   <form className="adform-all" data-aos="fade-in">
                    {this.header("Services")}
                    {this.Input("Service Provider:","title")}
                    {this.Input("Type of services:","type")}
                    {this.Input("Theme Image:","themeImg")}
                    {this.Input("Content Image:","conImg")}
                    {this.Input("Charges:","price")}
                    {this.Input("Special Features:","spclFeatures")}
                    {this.Input("Landmark:","landmark")}
                    {this.Input("Contact:","contact")}
                    {this.Input("Mail ID:","mail")}
                    {this.TextArea("Desc:","desc")}
                    <br />
                    <button id="dev-btn" className="search-btn" onClick={this.develope}>Develope</button>
                    {this.submitReset()}
                    <div className="row">
                        <div className="col-md-4">
                            
                        </div>
                        <div className="col-md-6">
                             <Success message="Your Ad hosted successfully..." id="success"/>
                            <Warning message="Failed Ad hosting..." id="warn"/>
                        </div>
                             
                    </div>
                  </form>
                      
                 <div className="adDemo" id="adDemoDiv">
                    <AdShow show="empty"/>
                  </div>
                  </div>
                    );
            }else if(this.state.formType=="automobile"){
                return(
                    <div className="row adform">
                   <form className="adform-all" data-aos="fade-in">
                    {this.header("Automobiles")}
                    {this.Input("Brand:","title")}
                    {this.Input("Model:","type")}
                    {this.Input("Make Year:","mYear")}
                    {this.Input("Theme Image:","themeImg")}
                    {this.Input("Content Image:","conImg")}
                    {this.Input("Price:","price")}
                    {this.Input("Landmark:","landmark")}
                    {this.Input("Contact:","contact")}
                    {this.Input("Mail ID:","mail")}
                    {this.TextArea("Parts:","desc")}
                    <br />
                    <button id="dev-btn" className="search-btn" onClick={this.develope}>Develope</button>
                    {this.submitReset()}
                    <div className="row">
                        <div className="col-md-4">
                            
                        </div>
                        <div className="col-md-6">
                             <Success message="Your Ad hosted successfully..." id="success"/>
                            <Warning message="Failed Ad hosting..." id="warn"/>
                        </div>
                             
                    </div>
                  </form>
                      
                 <div className="adDemo" id="adDemoDiv">
                    <AdShow show="empty"/>
                  </div>
                  </div>
                    );
            }else if(this.state.formType=="land"){
                return(
                    <div className="row adform">
                   <form className="adform-all" data-aos="fade-in">
                    {this.header("Real Estate")}
                    {this.Input("Name:","title")}
                    {this.Input("Land Type:","type")}
                    {this.Input("Sq.Feet:","sqFeet")}
                    {this.Input("Theme Image:","themeImg")}
                    {this.Input("Land Image:","conImg")}
                    {this.Input("Price:","price")}
                    {this.Input("Special Features:","spclFeatures")}
                    {this.Input("Landmark:","landmark")}
                    {this.Input("Contact:","contact")}
                    {this.Input("Mail ID:","mail")}
                    {this.TextArea("Facilities:","desc")}
                    <br />
                    <button id="dev-btn" className="search-btn" onClick={this.develope}>Develope</button>
                    {this.submitReset()}
                    <div className="row">
                        <div className="col-md-4">
                            
                        </div>
                        <div className="col-md-6">
                             <Success message="Your Ad hosted successfully..." id="success"/>
                            <Warning message="Failed Ad hosting..." id="warn"/>
                        </div>
                             
                    </div>
                  </form>
                      
                 <div className="adDemo" id="adDemoDiv">
                    <AdShow show="empty"/>
                  </div>
                  </div>
                    );
            }else if(this.state.formType=="education"){
                return(
                    <div className="row adform">
                   <form className="adform-all" data-aos="fade-in">
                    {this.header("Education")}
                    {this.Input("Institution:","title")}
                    {this.Input("School/College:","type")}
                    {this.Input("Theme Image:","themeImg")}
                    {this.Input("Poster Image:","conImg")}
                    {this.Input("Special Features:","spclFeatures")}
                    {this.Input("Landmark:","landmark")}
                    {this.Input("Contact:","contact")}
                    {this.Input("Mail ID:","mail")}
                    {this.TextArea("Facilities:","desc")}
                    <br />
                    <button id="dev-btn" className="search-btn" onClick={this.develope}>Develope</button>
                    {this.submitReset()}
                    <div className="row">
                        <div className="col-md-4">
                            
                        </div>
                        <div className="col-md-6">
                             <Success message="Your Ad hosted successfully..." id="success"/>
                            <Warning message="Failed Ad hosting..." id="warn"/>
                        </div>
                             
                    </div>
                  </form>
                      
                 <div className="adDemo" id="adDemoDiv">
                    <AdShow show="empty"/>
                  </div>
                  </div>
                    );
            }else if(this.state.formType=="products"){
                 return(
                     <div className="row adform">
                <form className="adform-all" data-aos="fade-in">
                    {this.header("Products")}
                    {this.Input("Brand:","title")}
                    {this.Input("Model:","model")}
                    {this.Input("Year of Making:","mYear")}
                    {this.Input("Theme Image:","themeImg")}
                    {this.Input("Product Image:","conImg")}
                    {this.Input("Price:","spclFeatures")}
                    {this.Input("Owner/Mediator:","ownMed")}
                    {this.Input("Contact:","contact")}
                    {this.Input("Mail ID:","mail")}
                    {this.TextArea("Features:","desc")}
                    <br />
                    <button id="dev-btn" className="search-btn" onClick={this.develope}>Develope</button>
                    {this.submitReset()}
                    <div className="row">
                        <div className="col-md-4">
                            
                        </div>
                        <div className="col-md-6">
                             <Success message="Your Ad hosted successfully..." id="success"/>
                            <Warning message="Failed Ad hosting..." id="warn"/>
                        </div>
                             
                    </div>
                  </form>
                      
                 <div className="adDemo" id="adDemoDiv">
                    <AdShow show="empty"/>
                  </div>
                  </div>
                    );
            }
        
                               
        }
            
        }
});


var FloatLeftBar = React.createClass({
    
    getInitialState:function(){
        return{
            username:'',
            userid:this.props.userid,
            currView:"visitor",
            formType:'general'
        };
    },
    switchState:function(){
        
        
        if(this.state.currView=="visitor"){
            this.setState({currView:"advertiser"});
            $('#viewSwitch').text('Become a Visitor');
            
            console.log(this.state.formType);
            ReactDOM.unmountComponentAtNode(document.getElementById('Feeds'));
            ReactDOM.render(<AdForm formType={this.state.formType} userid={this.props.userid} username={this.state.username} currView={this.state.currView} />, document.getElementById('Feeds'));
            $("#loadingAd").hide();
            $("#success").hide();                
            $("#warn").hide();
        }else{
            $('#viewSwitch').text('Become a Advertiser');
            this.setState({currView:"visitor"});
            console.log("Loads feeds...");
            ReactDOM.unmountComponentAtNode(document.getElementById('adsPlatform'));
            ReactDOM.render(<LoadFeeds location={this.state.location} category={$(".current").attr("id")} />, document.getElementById('adsPlatform'));
        }
        
    },
                                     
                                     
    loadAll:function(event){
        $("#loading").show();
       $('.current').attr('class','float-left');
       $('.current').attr('class','float-left');
       event.target.className="current";
        this.setState({formType:$(".current").attr("id")});
        console.log($(".current").attr("id"));
        
       if(this.state.currView=="advertiser"){
           
           ReactDOM.unmountComponentAtNode(document.getElementById('Feeds'));
            ReactDOM.render(<AdForm formType={$(".current").attr("id")} userid={this.props.userid} username={this.state.username} currView={this.state.currView} />, document.getElementById('Feeds'));
            $("#success").hide();                
            $("#warn").hide();
        } else {
            console.log("Loads feeds...");
            ReactDOM.unmountComponentAtNode(document.getElementById('adsPlatform'));
            ReactDOM.render(<LoadFeeds location={this.state.location} category={$(".current").attr("id")} />, document.getElementById('adsPlatform'));
        }
        $("#loading").hide();
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
         $("#loading").hide();
        return(
                <div className="float-bar-left contents">
                  <ul className="float-bar-ul">
                    <li  className="switchKey" onClick={this.switchState}>
                      <a href="#">
                        <img src="https://image.flaticon.com/icons/svg/254/254029.svg" alt="" />
                        <h6 id="viewSwitch">Become a Advertiser</h6>
                      </a>
                    </li>
                    <li className="float-left current" id="general" onClick={this.loadAll}>
                      <a href="#">
                        <img src="img/gift.png"/>
                        <h6>General</h6>
                      </a>
                    </li>
                    <li className="float-left" id="tolet"  onClick={this.loadAll}>
                      <a href="#">
                        <img src="img/building.png"/>
                        <h6>To-let</h6>
                      </a>
                    </li>
                    <li className="float-left" id="food"  onClick={this.loadAll}>
                      <a href="#">
                        <img src="img/food.png"/>
                        <h6>Foods</h6>
                      </a>
                    </li>
                    <li className="float-left" id="entertain" onClick={this.loadAll}>
                      <a href="#">
                        <img src="img/dashboard.png"/>
                        <h6>Entertainment</h6>
                      </a>
                    </li>
                    <li className="float-left" id="services" onClick={this.loadAll}>
                      <a href="#">
                        <img src="img/med.png"/>
                        <h6>Services</h6>
                      </a>
                    </li>
                    <li className="float-left" id="automobile" onClick={this.loadAll}>
                      <a href="#">
                        <img src="img/auto.png"/>
                        <h6>Automobiles</h6>
                      </a>
                    </li>
                    <li className="float-left" id="land" onClick={this.loadAll}>
                      <a href="#">
                        <img src="img/land.png"/>
                        <h6>Real Estate</h6>
                      </a>
                    </li>
                    <li  className="float-left" id="education" onClick={this.loadAll}>
                      <a href="#">
                        <img src="img/edu.png"/>
                        <h6>Education</h6>
                      </a>
                    </li>
                    <li className="float-left" id="products" onClick={this.loadAll}>
                      <a href="#">
                        <img src="img/cart.png"/>
                        <h6>Products</h6>
                      </a>
                    </li>
                  </ul>
                </div>
        );
    }
});


var Header=React.createClass({
    getInitialState:function(){
        return{
            username:this.props.username,
            userid:this.props.userid
        };
    },
    componentDidMount:function(){
        console.log("Mounting Header");
        console.log(this.props.username);
    },
    render:function(){
        return(
          
            <div className="header-top" >
                <div className="header-inner">
                    <div className="networkLogo header-img"></div>
                    <div className="search-wrap" >
                       <div className="inner-addon search">
                        <i className="glyphicon"></i>      
                        <input type="text" className="ip-area" placeholder="Place or Region" />
                        </div>

                        <div className="inner-addon search">
                          <i className="glyphicon"></i>
                          <input type="text" className="ip-category" placeholder="Search" />
                        </div>
                        <div className="search">
                            <button id="search-btn" className="search-btn">Search</button>
                        </div>
                    </div>
            
                    
                    <div className="user-dp"><img src="https://image.flaticon.com/icons/svg/236/236831.svg" /></div>
                    <div className="username"><h5>{this.props.username}</h5></div>
                    
                </div>
                <div  className="loader-full width-full" id="loading">
                    
                </div>
            
            </div>
        );
    }
    
});
var Feeds=React.createClass({
    getInitialState:function(){
        return{
            location:this.props.location,
            category:this.props.category
        };
    },
    render:function(){
        return(
            <div id="adsPlatform">
                <LoadFeeds location={this.state.location} category={this.state.category} />
            </div>
        );
        
    }
});
var LoadFeeds = React.createClass({
    getInitialState: function() {
       
        return {
            products: [],
            location:this.props.location,
            category:this.props.category
        };
    },
    componentWillMount: function(){
        console.log(this.state.location);
        console.log(this.state.category);
            $.get("api/read_all_ads.php", {
                location: this.state.location,
                category:this.state.category
            },
            function(results){
                console.log(results);
                this.setState({products:JSON.parse(results)});
                console.log(this.state.products);
            }.bind(this));
        
    },
     render: function() {
         var filteredFeeds= this.state.products;
         $('.nav-page').text("Home");
         
         return (
            <div className="feeds contents" id="Feeds">
            
                <AdsLoad feeds={filteredFeeds} />
             
            </div>
         );
     }
});
     


var AdsLoad=React.createClass({
    render: function(){
        
       var feed=this.props.feeds.map(function(f,i){
            return(
                <LoadAdOne key={i} feed={f} />
            );
        }.bind(this));
        if(feed.length>0)
        {
            return <div className='row'>{feed}</div>;
        }else{return <Oops message="No Feeds found." />;}
    }
});


var LoadAdOne = React.createClass({
    getInitialState:function(){
        return{
            successUpdate:false,
            showModel:false
        };
    },

    showDetails:function(){
        $("#Feeds.row").fadeOut("2000");
        ReactDOM.render(<LoadAdComp data={this.props.feed}/>,document.getElementById("Feeds"));
    },
    render: function() {
            
            
            return(
                 <div className="aos-item" data-aos="fade-in" onClick={this.showDetails}>
                <div className="aos-item__inner">
                    <div className="list-group-item-img">
                        <img src={this.props.feed.themeImg} />
                    </div>
                    {this.props.feed.title ? <div className='list-group-item-heading subTitle'>{this.props.feed.title}</div>:null}
                    
            {this.props.feed.bhk ?<div className='list-group-item-text'>BHK:{this.props.feed.bhk}</div>:null}
   
        
            {this.props.feed.sqFeet?  <div className="list-group-item-text">Sq.Feet:{this.props.feed.sqFeet}</div>:null}
            
            {this.props.feed.rent>0 ?    <div className="list-group-item-text">Rent:{this.props.feed.rent}</div>:null}
            
            {this.props.feed.advance>0? <div className="list-group-item-text">Advance:{this.props.feed.advance}</div>:null}
            
            {this.props.feed.offers? <div className="list-group-item-category">{this.props.feed.offers}</div>:null}
            
            {this.props.feed.type?<div className="list-group-item-text">Type:{this.props.feed.type}</div>:null}
                
            {this.props.feed.price>0? <div className="list-group-item-text">Price:{this.props.feed.price}</div>:null}
                 
            {this.props.feed.mYear>1990? <div className="list-group-item-text">Year of make:{this.props.feed.mYear}</div>:null}
            
            {this.props.feed.trailer? <div className="list-group-item-foot"><a href={this.props.feed.trailer} target="_blank"><button className="btn-like video"><img src="img/videoLink.png"/></button></a></div>:null}  
                     
            </div>
                
              
                </div>
            );
    }
});

var LoadAdComp = React.createClass({
    getInitialState:function(){
        return{
            data:this.props.data
        };
    },
    render:function(){
    console.log(this.state.data.conImage);
    return(
        <div id="adComp">
            <div className="compLeft contents aos-item">
                {this.state.data.themeImg? <div className="compThemeImg "><img src={this.state.data.themeImg} /></div>: this.state.data.conImage? <div className="compThemeImg "><img src={this.state.data.conImage} /></div>:<div className="compThemeImg"><img src="http://thebucknerclarion.com/images/advertise.png" /></div>}
            </div>
            <div className="compRight contents aos-item">
                <div className="compContents">
                     {this.state.data.title ? <div className='list-group-item-heading mainTitle'>{this.state.data.title}</div>:null}
                    <div className='list-group-item'>
                        {this.state.data.bhk ?<button className="btn-like tag">BHK:   {this.state.data.bhk}</button>:null}


                        {this.state.data.sqFeet?  <button className="btn-like tag">Sq.Feet:   {this.state.data.sqFeet}</button>:null}

                        {this.state.data.rent>0 ? <button className="btn-like tag">Rent:  {this.state.data.rent}</button>:null}

                        {this.state.data.advance>0? <button className="btn-like tag">Advance:  {this.state.data.advance}</button>:null}

                        {this.state.data.offers? <div className="list-group-item-category"><button className="btn-like offers"><img src="img/label.png" className="iconSmall"/>{this.state.data.offers}</button></div>:null}

                        {this.state.data.type?<button className="btn-like tag">Type:  {this.state.data.type}</button>:null}

                        {this.state.data.price>0? <button className="btn-like tag">Price:  {this.state.data.price}</button>:null}

                        {this.state.data.mYear>1990? <button className="btn-like tag">Year of make:  {this.state.data.mYear}</button>:null}

                        {this.state.data.splFeatures? <button className="btn-like tag">Features:  {this.state.data.splFeatures}</button>:null}
                        {this.state.data.ownMed? <button className="btn-like tag">Ownership:  {this.state.data.ownMed}</button>:null}
                        {this.state.data.landmark? <button className="btn-like tag">Landmark:  {this.state.data.landmark}</button>:null}
                        {this.state.data.description? <button className="btn-like tag">{this.state.data.description}</button>:null}
                    </div>
                    
                        {this.state.data.trailer?  <div className='list-group-item'><a href={this.state.data.trailer} target="_blank"><button className="btn-like video"><img src="img/videoLink.png"/></button></a></div>:null}      
                    
                    <div className='list-group-item'>
                        
                            {this.state.data.mail? <div className='list-group-item-heading subTitle'>Contact Details</div>:this.state.data.contact?<div className='list-group-item-heading'>Contact Details</div>:null}
                            {this.state.data.mail? <button className="btn-like tag"><img src="img/mail.png" className="iconSmall"/>  {this.state.data.mail}</button>:null}
                            {this.state.data.contact? <button className="btn-like tag"><img src="img/call.png" className="iconSmall"/>{this.state.data.contact}</button>:null}
                        
                    </div>

                   

        
                    
                </div>
            </div>
            
        </div>
    );
    }
});


var Footer= React.createClass({
    getInitialState:function(){
        return{
            userid:''
        };
    },
    render:function(){
        return(
            <footer className="footer-bottom"></footer>
        );
    }
});

var Homepage=React.createClass({
    getInitialState:function(){
        console.log(this.props.username);
        return{
            userid:this.props.userid,
            username:this.props.username
        };
    },
    render:function(){
        return(
            <div>
                <Header username={this.state.username} userid={this.state.userid}/>
                <FloatLeftBar userid={this.state.userid} username={this.state.username}/>
                <Feeds location="Bangalore" category='general'/>
                <Footer />
            </div>
        );
    }
});
var Success=React.createClass({
    getInitialState:function(){
    return{
          message:this.props.message,
        id:this.props.id
    };
    },
    render: function(){
        return(
            <div className="alert alert-success" id={this.state.id} >
              <strong>Success!</strong>{this.state.message}
            </div>
        );
    }
    
});
var Warning=React.createClass({
    getInitialState:function(){
    return{
          message:this.props.message,
        id:this.props.id
    };
    },
    render: function(){
        return(
            <div className="warning" id={this.state.id}><strong>{this.state.message} </strong></div>
        );
    }
    
});

var Login=React.createClass({
    getInitialState:function(){
      return{
        isLogged:'',
          userid:'',
          password:''
      };  
    },
    componentDidMount:function(){
        $('.warning').hide();
        console.log("Login Component Mounted...");
    },
    LoginCheck: function(e) {
        if (localStorage.getItem('auser') == 1) {
            console.log(localStorage.getItem('auser'));
            this.state.username = localStorage.getItem('auid');
            this.state.password = localStorage.getItem('apass');
        }
        if (this.state.username.length < 4 || this.state.password.length < 4) {
            $('#login-warning').show();
            
            $('#login-warning').text('Invalid Credentials...');
            $('#login-warning').delay(3000).fadeOut();
            if (e) {
                e.preventDefault();
            }
            return;
        }

        if ($('#remember').is(":checked")) {
            localStorage.setItem('auser', 1);
            localStorage.setItem('auid', this.state.username);
            localStorage.setItem('apass', this.state.password);
        }


        $.get("api/read_one_product.php", {
                username: this.state.username,
                password: this.state.password
            },
            function(res) {
                var r = JSON.parse(res)[0];
                if (typeof r != 'undefined') {
                    if (this.isMounted()) {
                        this.setState({
                            name: r.name
                        });
                        this.setState({
                            userid: r.id
                        });
                        this.setState({
                            isLogged: true
                        });
                        ReactDOM.unmountComponentAtNode(document.getElementById('body-container'));
                        ReactDOM.render(<Homepage username={this.state.name} userid={this.state.userid} />, document.getElementById('body-container'));
                        }

                    } else {
                        this.setState({
                            isLogged: false
                        });
                        $('#login-warning').show();
                        $('#login-warning').text('Username and Password mismatch...');
                         $('#login-warning').delay(3000).fadeOut();
                        if (e) {
                            e.preventDefault();
                        }
                        return;

                    }
                }.bind(this)

            );

            if (e) {
                e.preventDefault();
            }
    },
    Reset(event) {
        this.setState({username: ''});
        this.setState({password: ''});
        $('#login-warning').hide();
    }, 
    handleChange(event) {
        this.setState({username: event.target.value.toLowerCase()});
    }, 
    handleChangePassword(event) {
    this.setState({password: event.target.value});
  },
    render:function(){
        return(
            <div className="login-container">
                <div className="login-default">
                    <div className="networkLogo"></div>
                    <h2 className="tagline">The Life of market</h2>
                </div>
                <div className="login-content" data-aos="fade-in">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>By signing up you indicate that you have read and agree to the Terms of Service and Privacy Policy.</h5>
                        </div>
                        <div className="col-md-6">
                             <form id="form-signin">
                                <div className="">Login</div>
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
                               <Warning message="Invalid Credentials..." id="login-warning"/>
                                
                              </form>
                        </div>
                         
                    </div>
                </div>
                
            </div>
        );
    }
    
});

var MainApp=React.createClass({
    getInitialState:function(){
      return{
        isLogged:''
      };  
    },
    componentDidMount:function(){
        console.log("MainApp Component Mounted...");
    },
    render:function(){
        return (
                <div className="body-container" id="body-container">
                   <Login />
                </div>
            );
    }
});

ReactDOM.render(
    <MainApp />,
    document.getElementById('content')
);