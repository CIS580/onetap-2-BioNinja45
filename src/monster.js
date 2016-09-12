"use strict";

/**
 * @module exports the Player class
 */
module.exports = exports = Monster;
this.checkTurn = 0;


/**
 * @constructor Player
 * Creates a new player object
 * @param {Postition} position object specifying an x and y
 */
function Monster(position) {
	this.frame=0;
	this.state="left";
	this.x = position.x;
	this.y = position.y;
	this.width  = 16;
	this.height = 16;
	this.spritesheet  = new Image();
	this.spritesheet.src = encodeURI('assets/bones/bones down.png');
	var self = this;
  
}

/**
 * @function updates the player object
 * {DOMHighResTimeStamp} time the elapsed time since the last frame
 */
Monster.prototype.update = function(elapsedTime) 
{
	this.timer+=elapsedTime;
	
	if(this.timer>1000/16)
	{
		this.frame = (this.frame+1)%4;
	}
	
	if(self.state=="left"){
		self.x+=1;
		self.checkTurn+=1;
	}
	else{
		self.x-=1;
		self.checkTurn+=1;
	}
	if(self.checkTurn==50){
		if(self.state=="left"){
			self.state="right";
		}
		else{
			self.state="left";
		}
		self.checkTurn=;
	}
}



/**
 * @function renders the player into the provided context
 * {DOMHighResTimeStamp} time the elapsed time since the last frame
 * {CanvasRenderingContext2D} ctx the context to render into
 */
Monster.prototype.render = function(time, ctx) {
  ctx.drawImage(
    // image
    this.spritesheet,
    // source rectangle
    this.frame*this.width, 0, this.width, this.height,
    // destination rectangle
    this.x, this.y, this.width, this.height
  );
}
