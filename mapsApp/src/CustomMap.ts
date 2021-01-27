export class CustomMap {
	// carry reference to the created map while hiding the overall API
	private googleMap: google.maps.Map
	constructor(divId: string) {
		// need a div for the map
		this.googleMap = new google.maps.Map(document.getElementById(divId), {
				zoom: 2,
				center: {
					lat: 0,
					lng: 0
				}
			}
		)
	}
}