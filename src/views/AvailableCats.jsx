import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Peterbald' },
  { name: 'Shadow', age: '1', breed: 'Birman' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Persian' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState(availableCats);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setFilteredCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  // Filter cats based on breed and name
  const filterCats = () => {
    let filtered = cats;

    if (selectedBreed) {
      filtered = filtered.filter((cat) => cat.breed === selectedBreed);
    }

    if (searchName) {
      filtered = filtered.filter((cat) =>
        cat.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    setFilteredCats(filtered);
  };

  // Handle breed filter change
  const handleBreedChange = (e) => {
    setSelectedBreed(e.target.value);
  };

  // Handle name search change
  const handleSearchChange = (e) => {
    setSearchName(e.target.value);
  };

  // Call the filter function every time breed or search changes
  useEffect(() => {
    filterCats();
  }, [selectedBreed, searchName]);

  return (
    <section className="container mt-5 py-4">
      <h2 className="text-center text-primary mb-4">Available Cats</h2>
      <p className="text-center text-muted mb-4">Meet our adorable cats looking for their forever home!</p>

      {/* Filters Section */}
      <div className="filters-container d-flex justify-content-center mb-5 gap-4">
        {/* Breed Filter */}
        <div className="filter-item">
          <label htmlFor="breed-filter" className="form-label text-muted">Filter by Breed</label>
          <select
            id="breed-filter"
            value={selectedBreed}
            onChange={handleBreedChange}
            className="form-select form-control-lg shadow-sm"
          >
            <option value="">All Breeds</option>
            <option value="Sphynx">Sphynx</option>
            <option value="Peterbald">Peterbald</option>
            <option value="Birman">Birman</option>
            <option value="Abyssinian">Abyssinian</option>
            <option value="Persian">Persian</option>
            <option value="Bengal">Bengal</option>
          </select>
        </div>

        {/* Name Search Filter */}
        <div className="filter-item">
          <label htmlFor="name-search" className="form-label text-muted">Search by Name</label>
          <input
            type="text"
            id="name-search"
            value={searchName}
            onChange={handleSearchChange}
            placeholder="Enter cat name"
            className="form-control form-control-lg shadow-sm"
          />
        </div>
      </div>

      {/* Available Cats List */}
      <div className="row g-4">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card rounded shadow-sm overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-3"
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <div className="cat-info text-center p-3">
                <h3 className="h5 text-dark mb-2">{cat.name}</h3>
                <p className="mb-1 text-muted">Age: {cat.age}</p>
                <p className="mb-0 text-muted">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
