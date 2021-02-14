<script>
	import { afterUpdate } from 'svelte'
	export let progress
	$: progress_percent = progress * 10
	let canvas

	$: pathcolour = '#2c2c2c';
	$: blue = 0;
	$: red = ( progress_percent<50 )? 255 : 255 -parseInt(((progress_percent - 50)* 2.55 *2))
	$: green = ( progress_percent > 50 )? 255 : parseInt(((progress_percent )* 2.55 * 2))
	$: rgbcolour ="rgb("+red+","+green+","+blue+")"
	
	afterUpdate(async () => {
			setCanvas(progress_percent)
	})


	function setCanvas(x) {
	  var context = canvas.getContext('2d');
		var x=context.canvas.width/2;
		var y=context.canvas.height/2;
	  context.lineWidth=5;
		context.beginPath();
		context.arc(x,y,40,(Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
		context.strokeStyle=pathcolour;
		context.stroke();
		context.strokeStyle= rgbcolour;
		context.beginPath();
		context.arc(x,y,40,(Math.PI/180) * 270, (Math.PI/180) * (270 + progress_percent *3.6) );
		context.stroke();
}

</script>

<div class='container'>
		<div class='box'>
			<div class='percent'>
				<canvas bind:this={canvas} width="100" height="100"></canvas>
				<div class='number'>
					<h2>{progress_percent}<span>%</span></h2>
				</div>
			</div>
		</div>
	</div>	

<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		border: 0;
	}
	canvas {
		width: 100px;
		height: 100px;
	}	
	.container {
		background-color: #081c22;;
		position: relative;
		display: block;
		align-items: center;
		border-radius: 50%;
		text-align:center;
		position:relative;
		width: 100px;
		height: 100px;
		padding: 0px;

	}
	.percent .number {
		position:absolute;
		top: 0;
		left: 0;
		width:100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;		
	}
	.percent .number h2 {
		color: var(--light-text);
		font-weight: 700;
		font-size: 38px;
	}
	
	.percent .number h2 span{
		font-size: 20px;
		vertical-align: top;
	}

</style>