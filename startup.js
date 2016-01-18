if(Meteor.isServer) {
    Meteor.startup(function(){
        if (Images.find().count()== 0){
            for (var i=0; i<23; i++){
                Images.insert(
                 {
                img_src:"img_"+i+".jpg",
                img_alt:"sloths"+i
                    }
                );
            }// end of for insert images
        }//end of if images
        console.log("startup.js says:"+Images.find().count());
    });
}