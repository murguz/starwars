app.component('searchBar', {
    templateUrl: 'templates/search_bar.html',
    controllerAs: 'ctrl',
    bindings: {
        onSearch: '&'
    },
    controller: function starWarsController($http,$filter) {

        this.$onInit = function () {
            //
        };

        this.search = function() {
            if(this.searchText == undefined) {
                alert("Search value is missing");
            }else{
                this.onSearch({event: {type: this.searchType, text: this.searchText}});
            }
        };
    }
});

