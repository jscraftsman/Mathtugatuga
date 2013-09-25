var VectorData = function(x, y, z){
	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;
	this.toString = function(){
		var x = this.x;
		var y = this.y;
		var z = this.z;
		var str = x + "x" + (y >= 0 ? " + " : " - ") + Math.abs(y) + "y" + (z >= 0 ? " + " : " - ") + Math.abs(z) + "z";
		return str;
	}
};

var Vector = {
	Magnitude: function(vector, decimal){
		decimal = decimal || 6;
		var magnitude = 0;
		magnitude += Math.pow(vector.x, 2);
		magnitude += Math.pow(vector.y, 2);
		magnitude += Math.pow(vector.z, 2);
		magnitude = Math.pow(magnitude, 1/2);
		return magnitude.toFixed(decimal);	
	},

	Unit: function(vector, decimal){
		decimal = decimal || 6;
		var mag = this.Magnitude(vector);
		vector.x = (vector.x/mag).toFixed(decimal);
		vector.y = (vector.y/mag).toFixed(decimal);
		vector.z = (vector.z/mag).toFixed(decimal);
		return vector;
	},

	Add: function(vectorA, vectorB){
		var vectorR = new VectorData();
		vectorR.x = vectorA.x + vectorB.x;
		vectorR.y = vectorA.y + vectorB.y;
		vectorR.z = vectorA.z + vectorB.z;
		return vectorR;
	},

	Sub: function(vectorA, vectorB){
		var vectorR = new VectorData();
		vectorR.x = vectorA.x - vectorB.x;
		vectorR.y = vectorA.y - vectorB.y;
		vectorR.z = vectorA.z - vectorB.z;
		return vectorR;
	}

};