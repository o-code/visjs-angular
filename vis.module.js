/*VISjs wrapper*/
angular.module('VISjs',[]).factory('vis', [
    '$window',
    function ($window) {
        var vis = $window.vis;
        return vis;
    }
]);
