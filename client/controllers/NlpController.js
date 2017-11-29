NlpController.$inject = [
    '$scope',
    '$location',
    'superdesk'
]
export function NlpController($scope,
                             $location,
                             superdesk) {

    this.annotate = function(item) {
        console.log("NlpController.annotate", item.headline)
    }
}
