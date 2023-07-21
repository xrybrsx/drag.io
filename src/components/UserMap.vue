<template>
  <div id="map">
  </div>
  <div id="island">
    <h3 class="title">drag.io</h3>
    <button class="button primary" style="margin-right: 15px" @click="addMarker">Add Marker</button>
    <button class="button success" @click="saveMarker" :disabled="this.marker == null">Save</button>
  </div>
</template>


<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


export default {
  mounted() {

    this.unsavedIcon = L.icon({
      iconUrl: "https://www.containerrental.com/public/img/marker/free-map-marker-icon-red.png",
      iconSize: [45, 45],
      iconAnchor: [45, 45],
      popupAnchor: [-3, -76],
    })

    this.savedIcon = L.icon({
      iconUrl: "https://icon-library.com/images/google-map-marker-icon/google-map-marker-icon-18.jpg",
      iconSize: [45, 45],
      iconAnchor: [45, 45],
      popupAnchor: [-3, -76],
    })

    // Initialize the map
    this.map = L.map('map', {
      center: [51.505, -0.09],
      minZoom: 3,
      zoom: 5,
      savedMarkers: []
    })

    // Add the tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(this.map);

    // Set up the marker
    this.marker = L.marker([51.505, -0.09], {
      icon: this.unsavedIcon,
      draggable: true,
        }).addTo(this.map);
  },
  methods: {
    addMarker() {

      // Add a new draggable marker to the map
      // If no draggable marker - create one, else - relocate draggable marker to initial position 
      if (this.marker == null) {
        this.marker = L.marker([51.505, -0.09], {
          icon: this.unsavedIcon,
          draggable: true
        }).addTo(this.map);
      } else {
        this.marker.setLatLng(new L.LatLng(51.505, -0.09))
      }
    },
    saveMarker() {
      if (this.marker) {
        // Make the marker non-draggable and permanent
        this.marker.dragging.disable();
        this.marker.options.draggable = false;
        this.marker.setIcon(this.savedIcon);
        this.marker.unbindPopup();
        this.savedMarkers.push(this.marker);
        this.marker = null; // Reset the marker
      }
    },
  },
  computed: {},
  data() {
    return {
      myIcon: null,
      map: null,
      marker: null,
      savedMarkers: [],
    };
  },
};
</script>

<style>
#map {
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  border: 0px;
}

#island {
  box-sizing: border-box;
  position: absolute;
  /*top: 20px;*/
  left: 20px;
  bottom: 20px;
  width: 300px;
  height: 190px;
  background-color: #222b45;
  z-index: 1000;
  box-shadow: 0 6px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}

.title {
  color: #f9f3f3;
  font-size: 46px;
  font-weight: 500;
  border-bottom: 8px solid #151a30;
  padding-bottom: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.button {
  color: white;
  font-size: 20px;
  border-radius: 10px;
  text-decoration: none;
  border: none;
  padding: 8px 15px;
}

.button:hover:not(:disabled) {
  cursor: pointer;
}

.primary {
  background-color: rgb(45, 96, 237);
}

.primary:hover {
  background-color: rgb(43, 93, 231);
}

.success {
  background-color: #3d9c50;
}

.success:disabled {
  background-color: #6e6e6e;
  color: #2f2f2f;
  cursor: not-allowed;
}

.success:hover:not(:disabled) {
  background-color: #40a657;
}
</style>
