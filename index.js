'use strict';

var TOP    = 1;
var RIGHT  = 2;
var BOTTOM = 4;
var LEFT   = 8;

var edgeMap = {};
edgeMap[TOP]            = 'ns-resize';
edgeMap[BOTTOM]         = 'ns-resize';
edgeMap[RIGHT]          = 'ew-resize';
edgeMap[LEFT]           = 'ew-resize';
edgeMap[TOP    | RIGHT] = 'nesw-resize';
edgeMap[BOTTOM | LEFT]  = 'nesw-resize';
edgeMap[TOP    | LEFT]  = 'nwse-resize';
edgeMap[BOTTOM | RIGHT] = 'nwse-resize';

/**
 * Return a cursor style given positional state.
 *
 * @param {object} state Cursor position state relative to an element
 * @return {string|undefined}
 */
module.exports = function(state) {
    state = state || {};

    var top    = state.top    << 0;
    var right  = state.right  << 1;
    var bottom = state.bottom << 2;
    var left   = state.left   << 3;

    var mask = (top | right | bottom | left);

    return edgeMap[mask];
};
