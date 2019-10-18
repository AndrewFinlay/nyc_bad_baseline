/**
 * My Service
 */
myApp.service('MyService', [
    function () {
        var service = {
            /**
             * @return {Object} the list of latest items keyed by name
             */
            getLatestItems: function () {
                var items    = window.__my.items || {};
                var latest   = items.latest || {};
                return latest.byName || {};
            },

            /**
             * Get info for an item
             *
             * @param {String} name of the item
             * @return {Object} the item info
             */
            getItemInfo: function (name) {
                var items = service.getLatestItems();
                return items[name] || {};
            },

            /**
             * @return {Object} the list of latest things keyed by name
             */
            getLatestThings: function () {
                var stuff = window.__my.stuff || {};
                var things = stuff.things || {};
                return things.byName || {};
            },

            /**
             * Get info for a thing
             *
             * @param {String} name of the thing
             * @return {Object} the thing info
             */
            getThingInfo: function (name) {
                var things = service.getLatestThings();
                return things[name] || {};
            }
        };

        return service;
    }
]);
