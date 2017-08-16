NlpController.$inject = [
    '$scope',
    '$location',
    'superdesk',
]
export function NlpController($scope,
                             $location,
                             superdesk) {

    this.annotate = function(item) {
        console.log("annotate", item.headline)
    }
}
