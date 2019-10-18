

/**

 */
myApp.service('MyService', [
    function () {
        var service = {
/**

 */
            getLatestItems: function () {
                var items    = window.__my.items || {};
                var latest   = items.latest || {};
                return latest.byName || {};
            },




/**

 */
            getItemInfo: function (name) {
                var items = service.getLatestItems();
                return items[name] || {};
            },

/**

 */
            getLatestThings: function () {
                var stuff = window.__my.stuff || {};
                var things = stuff.things || {};
                return things.byName || {};
            },




/**

 */
            getThingInfo: function (name) {
                var things = service.getLatestThings();
                return things[name] || {};
            }
        };

        return service;
    }
]);
