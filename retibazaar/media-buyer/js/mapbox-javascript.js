mapboxgl.accessToken = 'pk.eyJ1IjoicmV0aW5hYWQiLCJhIjoiY20wNmt6anUwMG81NDJyczRoOW0zdmZjbyJ9.xJOw8JwObQUAneO2SmCNqw';
const map = new mapboxgl.Map({
    container: 'location_map2',
    style: 'mapbox://styles/retinaad/cm0w7blwo00vm01pi55c9a5pu',
    center: [6.195690, 5.794860],
    zoom: 8.4
});
map.on('load', () => {
   map.addSource('points', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/hashbrown-github/retina/main/Retina2_Delta.geojson',
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50
    });
    map.addLayer({
        id: 'cluster-count-1',
        type: 'symbol',
        source: 'points',
        filter: ['has', 'point_count'],
        layout: {
            'text-field': '{point_count_abbreviated}',
            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
            'text-size': 14  
        },
        paint: {
            'text-color': '#ffffff'  
        }
    });
    map.addLayer({
    id: 'cluster-circles',
    type: 'circle',
    source: 'points',
    filter: ['has', 'point_count'],
    paint: {
        'circle-color': [
            'step', ['get', 'point_count'],
            '#80b6ea', 60,  
            '#1a7cd9', 500,  
            '#0157aa'      
        ],
        'circle-radius': [
            'step', ['get', 'point_count'],
            15, 60,  
            25, 500, 
            35    
        ],
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
    }
});
map.addLayer({
    id: 'cluster-count',
    type: 'symbol',
    source: 'points',
    filter: ['has', 'point_count'],
    layout: {
        'text-field': '{point_count_abbreviated}',
        'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
        'text-size': 14  
    },
    paint: {
        'text-color': '#ffffff'  
    }
});
map.addLayer({
    id: 'unclustered-point',
    type: 'circle',
    source: 'points',
    filter: ['!', ['has', 'point_count']],
    paint: {
        'circle-color': '#80b6ea',
        'circle-radius': 15,
        'circle-stroke-width': 2,
        'circle-stroke-color': '#ffffff'
    }
});

// Start hide and show on user persona tab
    map.setLayoutProperty('cluster-circles', 'visibility', 'none');
    map.setLayoutProperty('cluster-count', 'visibility', 'none');
    map.setLayoutProperty('unclustered-point', 'visibility', 'none');
  document.getElementById('userpersona-tab').addEventListener('click', function () {
    map.setLayoutProperty('cluster-circles', 'visibility', 'none');
    map.setLayoutProperty('cluster-count', 'visibility', 'none');
    map.setLayoutProperty('unclustered-point', 'visibility', 'none');
    map.setLayoutProperty('Food-Joints', 'visibility', 'none');
    map.setLayoutProperty('Entertainment', 'visibility', 'none');
    map.setLayoutProperty('Clothing-store', 'visibility', 'none');
    map.setLayoutProperty('cluster-count-all', 'visibility', 'none');
    map.setLayoutProperty('cluster-count-1', 'visibility', 'none');
    map.setLayoutProperty('cluster-count-2', 'visibility', 'none');
    map.setLayoutProperty('cluster-count-3', 'visibility', 'none');
    map.setLayoutProperty('cluster-count-4', 'visibility', 'none');
    map.setLayoutProperty('cluster-count-5', 'visibility', 'none');
    map.setLayoutProperty('cluster-count-6', 'visibility', 'none');
    map.setLayoutProperty('cluster-count-7', 'visibility', 'none');
    map.setLayoutProperty('cluster-count-8', 'visibility', 'none');
    map.setLayoutProperty('traffic', 'visibility', 'none');
});
// End hide and show on user persona tab

//hide and show on POI tab  
  map.setLayoutProperty('cluster-count-all', 'visibility', 'none');
    document.getElementById('poi-tab').addEventListener('click', function () {
        map.setLayoutProperty('Food-Joints', 'visibility', 'visible');
        map.setLayoutProperty('Entertainment', 'visibility', 'visible');
        map.setLayoutProperty('Clothing-store', 'visibility', 'visible');
        map.setLayoutProperty('Middle-class', 'visibility', 'none');
        map.setLayoutProperty('Urban-males', 'visibility', 'none');
        map.setLayoutProperty('Family-oriented-people', 'visibility', 'none');
        map.setLayoutProperty('First-time-voters', 'visibility', 'none');
        map.setLayoutProperty('Fitness-freaks', 'visibility', 'none');
        map.setLayoutProperty('Female-Adults', 'visibility', 'none');
        map.setLayoutProperty('Male-Adult', 'visibility', 'none');
        map.setLayoutProperty('food-enthusiast', 'visibility', 'none');
        map.setLayoutProperty('Infrequent-voters', 'visibility', 'none');
        map.setLayoutProperty('wealthy-with-limited-edu', 'visibility', 'none');
        map.setLayoutProperty('skilled-job-seekers', 'visibility', 'none');
        map.setLayoutProperty('Travel-enthusiasts', 'visibility', 'none');
        map.setLayoutProperty('Teenagers', 'visibility', 'none');
        map.setLayoutProperty('Young-enthusiasts', 'visibility', 'none');
        map.setLayoutProperty('Movie-enthusisats', 'visibility', 'none');
        map.setLayoutProperty('Young-parents', 'visibility', 'none');
        map.setLayoutProperty('Artists', 'visibility', 'none');
        map.setLayoutProperty('Urban-female', 'visibility', 'none');
        map.setLayoutProperty('cluster-count-all', 'visibility', 'none');
        map.setLayoutProperty('cluster-count-1', 'visibility', 'none');
        map.setLayoutProperty('cluster-count-2', 'visibility', 'none');
        map.setLayoutProperty('cluster-count-3', 'visibility', 'none');
        map.setLayoutProperty('cluster-count-4', 'visibility', 'none');
        map.setLayoutProperty('cluster-count-5', 'visibility', 'none');
        map.setLayoutProperty('cluster-count-6', 'visibility', 'none');
        map.setLayoutProperty('cluster-count-7', 'visibility', 'none');
        map.setLayoutProperty('cluster-count-8', 'visibility', 'none');
        map.setLayoutProperty('traffic', 'visibility', 'none');
    });
//hide and show on POI tab

//Traffic tab
document.getElementById('traffic-tab').addEventListener('click', function () {
    map.setLayoutProperty('Food-Joints', 'visibility', 'none');
    map.setLayoutProperty('Entertainment', 'visibility', 'none');
    map.setLayoutProperty('Clothing-store', 'visibility', 'none');
    map.setLayoutProperty('Middle-class', 'visibility', 'none');
    map.setLayoutProperty('Urban-males', 'visibility', 'none');
    map.setLayoutProperty('Family-oriented-people', 'visibility', 'none');
    map.setLayoutProperty('First-time-voters', 'visibility', 'none');
    map.setLayoutProperty('Fitness-freaks', 'visibility', 'none');
    map.setLayoutProperty('Female-Adults', 'visibility', 'none');
    map.setLayoutProperty('Male-Adult', 'visibility', 'none');
    map.setLayoutProperty('food-enthusiast', 'visibility', 'none');
    map.setLayoutProperty('Infrequent-voters', 'visibility', 'none');
    map.setLayoutProperty('wealthy-with-limited-edu', 'visibility', 'none');
    map.setLayoutProperty('skilled-job-seekers', 'visibility', 'none');
    map.setLayoutProperty('Travel-enthusiasts', 'visibility', 'none');
    map.setLayoutProperty('Teenagers', 'visibility', 'none');
    map.setLayoutProperty('Young-enthusiasts', 'visibility', 'none');
    map.setLayoutProperty('Movie-enthusisats', 'visibility', 'none');
    map.setLayoutProperty('Young-parents', 'visibility', 'none');
    map.setLayoutProperty('Artists', 'visibility', 'none');
    map.setLayoutProperty('Urban-female', 'visibility', 'none');
    map.setLayoutProperty('traffic', 'visibility', 'visible');
    map.setLayoutProperty('cluster-count-1', 'visibility', 'visible');
    map.setLayoutProperty('cluster-count-2', 'visibility', 'visible');
    map.setLayoutProperty('cluster-count-3', 'visibility', 'visible');
    map.setLayoutProperty('cluster-count-4', 'visibility', 'visible');
    map.setLayoutProperty('cluster-count-5', 'visibility', 'visible');
    map.setLayoutProperty('cluster-count-6', 'visibility', 'visible');
    map.setLayoutProperty('cluster-count-7', 'visibility', 'visible');
    map.setLayoutProperty('cluster-count-8', 'visibility', 'visible');
    map.setLayoutProperty('cluster-circles', 'visibility', 'visible');
    map.setLayoutProperty('cluster-count', 'visibility', 'visible');
    map.setLayoutProperty('unclustered-point', 'visibility', 'visible');
});

// Start User Persona
    map.setLayoutProperty('delta-userpersona-compiled-3aaekp', 'visibility', 'none');
     document.getElementById('heatmap').addEventListener('click', function () {
   var visibility = map.getLayoutProperty('delta-userpersona-compiled-3aaekp', 'visibility');
      if (visibility === 'visible') {
            map.setLayoutProperty('delta-userpersona-compiled-3aaekp', 'visibility', 'none');
        } else {
            map.setLayoutProperty('delta-userpersona-compiled-3aaekp', 'visibility', 'visible');
        }
    });
    map.setLayoutProperty('Middle-class', 'visibility', 'none');
   document.getElementById('middle_class').addEventListener('click', function () {
        var visibility = map.getLayoutProperty('Middle-class', 'visibility');
      if (visibility === 'visible') {
            map.setLayoutProperty('Middle-class', 'visibility', 'none');
        } else {
            map.setLayoutProperty('Middle-class', 'visibility', 'visible');
        }
    });
    map.setLayoutProperty('Urban-males', 'visibility', 'none');
    document.getElementById('urban_male').addEventListener('click', function () {
        var visibility = map.getLayoutProperty('Urban-males', 'visibility');
      if (visibility === 'visible') {
            map.setLayoutProperty('Urban-males', 'visibility', 'none');
        } else {
            map.setLayoutProperty('Urban-males', 'visibility', 'visible');
        }
    });
    map.setLayoutProperty('Family-oriented-people', 'visibility', 'none');
    document.getElementById('family_oriented').addEventListener('click', function () {
        var visibility = map.getLayoutProperty('Family-oriented-people', 'visibility');
      if (visibility === 'visible') {
            map.setLayoutProperty('Family-oriented-people', 'visibility', 'none');
        } else {
            map.setLayoutProperty('Family-oriented-people', 'visibility', 'visible');
        }
    });
    map.setLayoutProperty('First-time-voters', 'visibility', 'none');
    document.getElementById('firstTime_voters').addEventListener('click', function () {
        var visibility = map.getLayoutProperty('First-time-voters', 'visibility');
      if (visibility === 'visible') {
            map.setLayoutProperty('First-time-voters', 'visibility', 'none');
        } else {
            map.setLayoutProperty('First-time-voters', 'visibility', 'visible');
        }
    });
    map.setLayoutProperty('Fitness-freaks', 'visibility', 'none');
    document.getElementById('fitness_freaks').addEventListener('click', function () {
        var visibility = map.getLayoutProperty('Fitness-freaks', 'visibility');
      if (visibility === 'visible') {
            map.setLayoutProperty('Fitness-freaks', 'visibility', 'none');
        } else {
            map.setLayoutProperty('Fitness-freaks', 'visibility', 'visible');
        }
    });
    map.setLayoutProperty('Female-Adults', 'visibility', 'none');
    document.getElementById('female_adults').addEventListener('click', function () {
        var visibility = map.getLayoutProperty('Female-Adults', 'visibility');
      if (visibility === 'visible') {
            map.setLayoutProperty('Female-Adults', 'visibility', 'none');
        } else {
            map.setLayoutProperty('Female-Adults', 'visibility', 'visible');
        }
    });
    map.setLayoutProperty('Male-Adult', 'visibility', 'none');
    document.getElementById('male_adults').addEventListener('click', function () {
        var visibility = map.getLayoutProperty('Male-Adult', 'visibility');
      if (visibility === 'visible') {
            map.setLayoutProperty('Male-Adult', 'visibility', 'none');
        } else {
            map.setLayoutProperty('Male-Adult', 'visibility', 'visible');
        }
    });
    map.setLayoutProperty('food-enthusiast', 'visibility', 'none');
    document.getElementById('food_enthusiasts').addEventListener('click', function () {
        var visibility = map.getLayoutProperty('food-enthusiast', 'visibility');
      if (visibility === 'visible') {
            map.setLayoutProperty('food-enthusiast', 'visibility', 'none');
        } else {
            map.setLayoutProperty('food-enthusiast', 'visibility', 'visible');
        }
    });
    map.setLayoutProperty('Infrequent-voters', 'visibility', 'none');
    document.getElementById('infrequent_voters').addEventListener('click', function () {
        var visibility = map.getLayoutProperty('Infrequent-voters', 'visibility');
      if (visibility === 'visible') {
            map.setLayoutProperty('Infrequent-voters', 'visibility', 'none');
        } else {
            map.setLayoutProperty('Infrequent-voters', 'visibility', 'visible');
        }
    });
    map.setLayoutProperty('wealthy-with-limited-edu', 'visibility', 'none');
    document.getElementById('wealth_limitedEdu').addEventListener('click', function () {
        var visibility = map.getLayoutProperty('wealthy-with-limited-edu', 'visibility');
      if (visibility === 'visible') {
            map.setLayoutProperty('wealthy-with-limited-edu', 'visibility', 'none');
        } else {
            map.setLayoutProperty('wealthy-with-limited-edu', 'visibility', 'visible');
        }
    });
    map.setLayoutProperty('skilled-job-seekers', 'visibility', 'none');
    document.getElementById('skilled-job-seekers').addEventListener('click', function () {
        var visibility = map.getLayoutProperty('skilled-job-seekers', 'visibility');
      if (visibility === 'visible') {
            map.setLayoutProperty('skilled-job-seekers', 'visibility', 'none');
        } else {
            map.setLayoutProperty('skilled-job-seekers', 'visibility', 'visible');
        }
    });
    map.setLayoutProperty('Travel-enthusiasts', 'visibility', 'none');
    document.getElementById('travel_enthusiasts').addEventListener('click', function () {
        var visibility = map.getLayoutProperty('Travel-enthusiasts', 'visibility');
      if (visibility === 'visible') {
            map.setLayoutProperty('Travel-enthusiasts', 'visibility', 'none');
        } else {
            map.setLayoutProperty('Travel-enthusiasts', 'visibility', 'visible');
        }
    });
    map.setLayoutProperty('Teenagers', 'visibility', 'none');
    document.getElementById('teenagers').addEventListener('click', function () {
        var visibility = map.getLayoutProperty('Teenagers', 'visibility');
      if (visibility === 'visible') {
            map.setLayoutProperty('Teenagers', 'visibility', 'none');
        } else {
            map.setLayoutProperty('Teenagers', 'visibility', 'visible');
        }
    });
    map.setLayoutProperty('Young-enthusiasts', 'visibility', 'none');
    document.getElementById('young_enthusiasts').addEventListener('click', function () {
        var visibility = map.getLayoutProperty('Young-enthusiasts', 'visibility');
      if (visibility === 'visible') {
            map.setLayoutProperty('Young-enthusiasts', 'visibility', 'none');
        } else {
            map.setLayoutProperty('Young-enthusiasts', 'visibility', 'visible');
        }
    });
    map.setLayoutProperty('Movie-enthusisats', 'visibility', 'none');
    document.getElementById('movie_enthusisats').addEventListener('click', function () {
        var visibility = map.getLayoutProperty('Movie-enthusisats', 'visibility');
      if (visibility === 'visible') {
            map.setLayoutProperty('Movie-enthusisats', 'visibility', 'none');
        } else {
            map.setLayoutProperty('Movie-enthusisats', 'visibility', 'visible');
        }
    });
    map.setLayoutProperty('Young-parents', 'visibility', 'none');
    document.getElementById('young_parents').addEventListener('click', function () {
        var visibility = map.getLayoutProperty('Young-parents', 'visibility');
      if (visibility === 'visible') {
            map.setLayoutProperty('Young-parents', 'visibility', 'none');
        } else {
            map.setLayoutProperty('Young-parents', 'visibility', 'visible');
        }
    });
    map.setLayoutProperty('Artists', 'visibility', 'none');
    document.getElementById('artists').addEventListener('click', function () {
        var visibility = map.getLayoutProperty('Artists', 'visibility');
      if (visibility === 'visible') {
            map.setLayoutProperty('Artists', 'visibility', 'none');
        } else {
            map.setLayoutProperty('Artists', 'visibility', 'visible');
        }
    });
    map.setLayoutProperty('Urban-female', 'visibility', 'none');
    document.getElementById('urban_Female').addEventListener('click', function () {
        var visibility = map.getLayoutProperty('Urban-female', 'visibility');
      if (visibility === 'visible') {
            map.setLayoutProperty('Urban-female', 'visibility', 'none');
        } else {
            map.setLayoutProperty('Urban-female', 'visibility', 'visible');
        }
    });
  // End User Persona

  // Show POI by default  on POI tab
    map.setLayoutProperty('traffic', 'visibility', 'none'); //hide traffic by default
    document.getElementById('food_joints').addEventListener('click', function () {
        var visibility = map.getLayoutProperty('Food-Joints', 'visibility');
    if (visibility === 'none') {
            map.setLayoutProperty('Food-Joints', 'visibility', 'visible');
        } else {
            map.setLayoutProperty('Food-Joints', 'visibility', 'none');
        }
    });
    document.getElementById('entertainment').addEventListener('click', function () {
        var visibility = map.getLayoutProperty('Entertainment', 'visibility');
    if (visibility === 'none') {
            map.setLayoutProperty('Entertainment', 'visibility', 'visible');
        } else {
            map.setLayoutProperty('Entertainment', 'visibility', 'none');
        }
    });
    document.getElementById('clothing').addEventListener('click', function () {
        var visibility = map.getLayoutProperty('Clothing-store', 'visibility');
    if (visibility === 'none') {
            map.setLayoutProperty('Clothing-store', 'visibility', 'visible');
        } else {
            map.setLayoutProperty('Clothing-store', 'visibility', 'none');
        }
    });
// Show POI by default  on POI tab


const layers = map.getStyle().layers;
    layers.forEach(layer => {
        console.log('Layer Details:', layer);
    });
});