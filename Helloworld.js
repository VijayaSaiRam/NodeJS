var maxTime=1000;
var evenDoubler=function(n,callBack){

   var waitTime=Math.floor(Math.random()*(maxTime+1));
	if(n%2)
	{
			setTimeout(function(){

				callBack(new Error('Odd Input!'))
	
		},1000)

	}
	else
	{

		setTimeout(function()
		{
				callBack(null,n*2,waitTime)

		},waitTime);

	}
}
var processResult=function(err,results,time){

	if(err){

		console.log("Error message is "+err);
	}
	else{

			console.log("Results are "+results);
	}

}
evenDoubler(2,processResult);
evenDoubler(3,processResult);
evenDoubler(4,processResult);
console.log("Program ended");