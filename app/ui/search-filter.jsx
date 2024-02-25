export default function SearchFilter({
  searchTerm,
  setSearchTerm,
  filteredItems,
}) {
  return (
    <div className="grid gap-6">
      <h1 className="font-bold uppercase w-full">Search Filter</h1>
      <p>Filter results by typing into the input box</p>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="primary"
      />
      <ul className="px-6">
        {filteredItems.map((item) => (
          <li key={item} className="list-disc">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
