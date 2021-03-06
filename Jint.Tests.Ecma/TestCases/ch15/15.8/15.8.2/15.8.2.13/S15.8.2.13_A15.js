// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * If x is -Infinity and y<0 and y is an odd integer, Math.pow(x,y) is -0
 *
 * @path ch15/15.8/15.8.2/15.8.2.13/S15.8.2.13_A15.js
 * @description Checking if Math.pow(x,y) equals to -0, where x is -Infinity and y<0
 */

// CHECK#1

x = -Infinity;
y = new Array();
y[2] = -1;
y[1] = -111; 
y[0] = -111111;
ynum = 3;

for (i = 0; i < ynum; i++)
{
	if (Math.pow(x,y[i]) !== -0)
	{
		$ERROR("#1: Math.pow(" + x + ", " + y[i] + ") !== -0");
	}
}

