import { Icon, LatLngExpression } from 'leaflet';

interface Location {
  position: LatLngExpression
  title: string
  description: string
  icon?: Icon
};

const iconSize: [number, number] = [50, 50];
const iconAnchor: [number, number] = [17, 23];
const popupAnchor: [number, number] = [0, 0];

export const motorBikeMarker = new Icon({
  iconUrl: 'https://img.icons8.com/?size=100&id=15130&format=png&color=000000',
  iconSize,
  iconAnchor,
  popupAnchor
});

const carMarker = new Icon({
  iconUrl: 'https://img.icons8.com/?size=100&id=36738&format=png&color=000000',
  iconSize,
  iconAnchor,
  popupAnchor
})

const planeMarker = new Icon({
  iconUrl: 'https://img.icons8.com/?size=100&id=C7Q1wz0DAlZR&format=png&color=000000',
  iconSize,
  iconAnchor,
  popupAnchor
})

const trekkingMarker = new Icon({
  iconUrl: 'https://img.icons8.com/?size=100&id=16958&format=png&color=000000',
  iconSize,
  iconAnchor,
  popupAnchor
})

export const defaultMarker = new Icon({
  iconUrl: 'https://img.icons8.com/?size=100&id=13800&format=png&color=000000',
  iconSize,
  iconAnchor,
  popupAnchor
});

const NepalLocations: Location[] = [
  { title: 'Korala Border', position: [29.322748, 83.986198], description: 'Pillar 24', icon: motorBikeMarker },
  { title: 'Rara Lake', position: [29.528439, 82.089435], description: 'Rara Lake', icon: motorBikeMarker },
  { title: 'Rani Mahal', position: [27.926689, 83.527947], description: 'Rani Mahal', icon: motorBikeMarker },
  { title: 'Nuwakot Durbar', position: [27.913735, 85.164610], description: 'Nuwakot Durbar', icon: motorBikeMarker },
  { title: 'Muktinath Temple', position: [28.816962, 83.871721], description: 'Muktinath', icon: motorBikeMarker },
  { title: 'Pathivara Temple', position: [27.429599, 87.766837], description: 'Pathivara', icon: trekkingMarker },
  { title: 'Ghatlang Village', position: [28.162931, 85.268072], description: 'Ghatlang', icon: motorBikeMarker },
  { title: 'Chitwan National Park', position: [27.574373, 84.493314], description: 'Chitwan', icon: motorBikeMarker },
  { title: 'Lumbini', position: [27.469564, 83.275848], description: 'Lumbini', icon: carMarker },
  { title: 'Syangja', position: [28.095565, 83.874866], description: 'Syangja', icon: motorBikeMarker },
  { title: 'Kulekhani Dam', position: [27.599879, 85.161090], description: 'Kulekhani', icon: motorBikeMarker },
  { title: 'Dolakha Bhimsen Temple', position: [27.677802, 86.076535], description: 'Dolakha', icon: carMarker },
  { title: 'Illam', position: [26.909509, 87.925324], description: 'Illam', icon: carMarker },
  { title: 'Manakamana Temple', position: [27.904262, 84.584046], description: 'Manakamana', icon: motorBikeMarker },
  { title: 'Nepaljung', position: [28.038746, 81.612121], description: 'Nepaljung', icon: motorBikeMarker },
  { title: 'Hetauda', position: [27.429510, 85.031474], description: 'Hetauda', icon: carMarker },
  { title: 'Birendranagar', position: [28.583849, 81.627842], description: 'Birendranagar', icon: motorBikeMarker },
  { title: 'Sukute Beach', position: [27.711773, 85.767293], description: 'Sukute', icon: motorBikeMarker },
  { title: 'Gosaikunda Lake', position: [28.082935, 85.413701], description: 'Gosaikunda', icon: trekkingMarker },
  { title: 'Haleshi Temple', position: [27.192803, 86.622144], description: 'Haleshi', icon: carMarker },
  { title: 'Janaki Temple', position: [26.730411, 85.926010], description: 'Janaki', icon: carMarker },
  { title: 'Kodari Border', position: [27.973555, 85.963568], description: 'Kodari', icon: motorBikeMarker },
  { title: 'Rasuwa Gadhi', position: [28.278004, 85.378328], description: 'Rasuwa', icon: motorBikeMarker },
  { title: 'Lo Manthang', position: [29.182866, 83.956967], description: 'Lo Manthang', icon: motorBikeMarker },
  { title: 'Marpha', position: [28.752048, 83.686032], description: 'Marpha', icon: motorBikeMarker },
  { title: 'Pokhara', position: [28.208015, 83.955629], description: 'Pokhara', icon: motorBikeMarker },
  { title: 'Butwal', position: [27.689693, 83.451492], description: 'Butwal', icon: motorBikeMarker },
  { title: 'Lahan', position: [26.729662, 86.479484], description: 'Lahan', icon: motorBikeMarker },
]

const UAELocations: Location[] = [
  { title: 'Universal Desert Camp', position: [25.155243, 55.628146], description: 'Desert Camp', icon: carMarker },
  { title: 'Sharjah International Airport', position: [25.320906, 55.520248], description: 'Sharjah Airport', icon: carMarker },
  { title: 'City Centre Deira', position: [25.251958, 55.332762], description: 'Deira Mall', icon: carMarker },
  { title: 'Dubai Mall', position: [25.197243, 55.279767], description: 'Dubai Mall', icon: carMarker },
  { title: 'Burj Khalifa', position: [25.196500, 55.274352], description: 'Burj Khalifa', icon: carMarker },
  { title: 'Atlantis, The Palm', position: [25.130109, 55.117158], description: 'Atlantis', icon: carMarker },
  { title: 'Museum of the Future', position: [25.219114, 55.281720], description: 'Future Museum', icon: carMarker },
  { title: 'Ferrari World', position: [24.483551, 54.607699], description: 'Ferrari World', icon: carMarker },
  { title: 'Global Village', position: [25.068848, 55.306483], description: 'Global Village', icon: carMarker },
  { title: 'Sheikh Zayed Grand Mosque', position: [24.412439, 54.474924], description: 'Grand Mosque', icon: carMarker },
  { title: 'Dubai Frame', position: [25.235201, 55.300285], description: 'Dubai Frame', icon: carMarker },
]

export const Locations: Location[] = [
  ...NepalLocations,
  ...UAELocations
]