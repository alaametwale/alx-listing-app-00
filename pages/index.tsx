import { PROPERTYLISTINGSAMPLE } from "@/constants";

const filters = [
  "Top Villa",
  "Self Checkin",
  "Free Parking",
  "Pet Friendly",
  "Luxury"
];

const Pill = ({ label }: { label: string }) => (
  <span className="px-4 py-2 bg-gray-200 rounded-full text-sm cursor-pointer hover:bg-gray-300">
    {label}
  </span>
);

export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section
        className="h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85')",
        }}
      >
        <div className="bg-black/50 p-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 py-8 flex gap-4 flex-wrap">
        {filters.map((filter) => (
          <Pill key={filter} label={filter} />
        ))}
      </section>

      {/* Listings */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-sm"
          >
            <img
              src={property.image}
              alt={property.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg">
                {property.name}
              </h3>

              <p className="text-sm text-gray-500">
                ⭐ {property.rating}
              </p>

              <p className="font-bold mt-2">
                ${property.price} / night
              </p>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}
