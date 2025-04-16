import { Bottom, Container, MapHeader } from './styles';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Register from '../../components/Register';
import SearchClinic from '../../components/SearchClinic';
import { useHome } from './hook';
import { logHelper } from '../../util/LogHelper';
import Card from '../../components/Card';

const Home: React.FC = () => {
  const { clinics } = useHome();
  logHelper({ title: 'Home', data: { clinics: clinics } });

  return (
    <>
      <MapContainer
        center={[-22.7757511, -43.359684]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <Container>
          <Register />
          <SearchClinic />
        </Container>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {clinics?.map((clinic) => {
          return (
            <Marker position={[clinic.lat, clinic.lng]} key={clinic.id}>
              <Popup>
                <h3>{clinic.name}</h3>
                <ul>
                  <li>
                    Logradouro: {clinic.place}, {clinic.number}
                  </li>
                  <li>Bairro: {clinic.neighborhood}</li>
                  <li>
                    Cidade: {clinic.city} - {clinic.country}
                  </li>
                </ul>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
};
export default Home;
