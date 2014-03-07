//New window/tab for Home
 homeWindow = Titanium.UI.createWindow({
  title:'Welcome to the Go! Team App' 
  
 });


    //Log in Page<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
var logwin = Ti.UI.createWindow();
var username = Titanium.UI.createTextField({ 
    color:'#336699', 
    top:10, 
    left:40, 
    width:1000, 
    height:200, 
    hintText:'Username', 
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT, 
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT, 
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED 
}); 
logwin.add(username); 
var password = Titanium.UI.createTextField({ 
    color:'#336699', 
    top:220, 
    left:40, 
    width:1000, 
    height:200, 
    hintText:'Password', 
    passwordMask:true, 
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT, 
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT, 
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED 
}); 
logwin.add(password); 
var loginBtn = Titanium.UI.createButton({ 
    title:'Login', 
    top:430, 
    width:500, 
    height:200, 
    borderRadius:3, 
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:20}
}); 
logwin.add(loginBtn);
loginBtn.addEventListener('click',function(f) 
{  
      //login node.js stuff goes here
});


// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//Home Tab<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	var homewin = Ti.UI.createWindow({
		title:"Home",
		backgroundColor:"#BA0D0D"
	});
	var tab1 = Ti.UI.createTab({
		title:"Home",
		icon:"Ks_nav_ui.png",
		window:homewin
	});
	var label1 = Titanium.UI.createLabel({
		color:'#999',
		text:'Go Team!',
		font:{fontSize:60,fontFamily:'Helvetica Neue'},
		textAlign:'center',
		top:1
	});
	var mission = Ti.UI.createLabel({
	color: '#999',
		text:'This is the WTAMU College of Business Student Engagement Team! It is Your Business...Go!',
		font:{fontSize:15,fontFamily:'Helvetica Neue'},
		top:65
	});
	
	var goPic = Ti.UI.createImageView({
	  image:'/images/goPic.png',
	  top:110
	});
	
	homewin.add(goPic);
	homewin.add(mission);
	homewin.add(label1);

// Event Checkins<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	var win2 = Ti.UI.createWindow({
		title:"Event Checkins!",
		backgroundColor:"#BA0D0D"
	});
	var tab2 = Ti.UI.createTab({
		title:"Event Checkins",
		icon:"Ks_nav_ui.png",
		window:win2
	});
	var EventLabel = Titanium.UI.createLabel({
		color:'#999',
		text:'Event Check-Ins',
		font:{fontSize:60,fontFamily:'Helvetica Neue'},
		textAlign:'center',
		top:5
	});
	win2.add(EventLabel);


// Calenday<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	var win3 = Ti.UI.createWindow({
		title:"Calendar",
		backgroundColor:"#BA0D0D"
	});
	var tab3 = Ti.UI.createTab({
		title:"Calendar",
		icon:"Ks_nav_ui.png",
		window:win3
	});
	var CalendarLabel = Titanium.UI.createLabel({
		color:'#999',
		text:'Social Media!',
		font:{fontSize:60,fontFamily:'Helvetica Neue'},
		textAlign:'center',
		top:5
	});
	win3.add(CalendarLabel);

//Social Media<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	var win4 = Ti.UI.createWindow({
		title:"Social Media",
		backgroundColor:"#BA0D0D"
	});
	var tab4 = Ti.UI.createTab({
		title:"Social Media",
		icon:"Ks_nav_ui.png",
		window:win4
	});
	var SocialMediaLabel = Titanium.UI.createLabel({
		color:'#999',
		text:'Social Media!',
		font:{fontSize:60,fontFamily:'Helvetica Neue'},
		textAlign:'center',
		top:5
	});
	win4.add(SocialMediaLabel);

//Code of Ethics<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	var win5 = Ti.UI.createWindow({
		title:"Code of Ethics",
		backgroundColor:"#BA0D0D"
	});
	var tab5 = Ti.UI.createTab({
		title:"Code of Ethics",
		icon:"Ks_nav_ui.png",
		window:win5
	});
	var CodeofEthics = Titanium.UI.createLabel({
		color:'#999',
		text:'Code of Ethics!',
		font:{fontSize:60,fontFamily:'Helvetica Neue'},
		textAlign:'center',
		top:5
	});
	win5.add(CodeofEthics);


tabGroup.addTab(tab1); 
tabGroup.addTab(tab2); 
tabGroup.addTab(tab3); 
tabGroup.addTab(tab4);
tabGroup.addTab(tab5);
tabGroup.open();
homeWindow.open();

