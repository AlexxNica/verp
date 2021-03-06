/*
 *
 * File  : text.js
 * Author: Cagatay Demiralp (cagatay)
 * Desc  : 
 *
 * 	Example: 
 *
 * Date    : Mon Jan  5 00:44:44 2015
 *
 */

var text = function(){

    var width = 256,
        height = 256,
        xScale = d3.scale.linear()
            .domain([0, width])
            .range([0, width]),
        yScale =  d3.scale.linear()
            .domain([0, height])
            .range([0, height]),
        svg;


    function _text(s, d){

        svg = s.append('svg')
            .attr('width', width)
            .attr('height', height);

        svg.selectAll('text')
            .data(d)
            .enter()
            .append('text');

        draw();

    }

    function updateBinding(d){

        //update selection
        var s = svg.selectAll('text')
            .data(d);

        s.enter()
            .append('text');

        s.exit()
            .remove();

    }


    function draw(){

        svg.selectAll('text')
            .attr('x', function(d){ return xScale(d.pos[0]);})
            .attr('y', function(d){ return yScale(d.pos[1]);})
            .text(function(d){return d.label;});

    }

    _text.update = function(_){

        if(arguments.length) {
            updateBinding(_);
            draw();
        } else {
            draw();
        }

    };


    _text.width = function(_){

        if(!arguments.length) return width;

        width = _;

        return _text;

    };


    _text.height = function(_){

        if(!arguments.length) return height;

        height = _;

        return  _text;

    };


    _text.xScale = function(_){


        if(!arguments.length) return xScale;

        xScale = _;

        return  _text;



    };



    _text.yScale = function(_){

        if(!arguments.length) return yScale;

        yScale = _;

        return  _text;

    };


    return _text;

};


