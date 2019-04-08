
// loading inboxSDK with registered appId
InboxSDK.load('1', 'sdk_dealio_5db4b0c17c').then(function(sdk){
	

	// the SDK has been loaded!
	sdk.Compose.registerComposeViewHandler(function(composeView){
	

       //  html which will  be rendered in the body of gmail compose view
		var xmlString = "<div style = 'background-color:cyan' id='foo'><a href='https://youtu.be/hUX011WOrG0'>watch this video</a><span><p style = 'color:red; text-align:center'><b>welcome to Dealio</b></p></span><span><p style = 'color:red; text-align:center'><i>you can create dedicated mails using this extension this platform allows you to embed videos in your mails</i></p></span><span><p style = 'color:orange; text-align:center'><i>users can share various coupons & deals</i></p></span><span><p style = 'color:orange; text-align:center'><b>so be ready to play with gmail</b></p></span><footer style = 'background-color:green'><p>developments on gmail and browser extensions 20109 </p></footer></div>";
		
		// parsing html string as html dom elements 
		doc = new DOMParser().parseFromString(xmlString, "text/html");

		// a compose view has come into existence, do something with it!

		
		composeView.addButton({
			title: "insert html!",
			iconUrl: 'https://img.icons8.com/color/48/000000/documents.png',
			onClick: function(event) {
				debugger;
			

		// to open an another window simultaneously with the addition of html in the body
		
				window.open("https://www.elegantthemes.com/gallery/divi/","_blank","height=400,width=700")
				
		// this will insert html into body of compose view		
			event.composeView.insertHTMLIntoBodyAtCursor(doc.firstChild.innerHTML);

			},
		});

	});
});
