import { useEffect, useState } from "react";
import { API_BASE_URL } from "../config";

const api = API_BASE_URL; // Adjust to your API URL

interface FilterSectionProps {
  onFilter: (category: string) => void;
}

interface CategoryProps {
  name: string;
}

const FilterSection = ({ onFilter }: FilterSectionProps) => {
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    // Fetch categories from API
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${api}/api/v1/categories/`); // Your category endpoint
        const data: CategoryProps[] = await response.json(); // Ensure correct typing
        setCategories(data); // ✅ Store array of objects correctly
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryName = e.target.value;
    setSelectedCategory(categoryName);
    onFilter(categoryName);
  };

  return (
    <div className="mb-4">
      <label className="block font-semibold mb-2">Filter by Category:</label>
      <select
        value={selectedCategory}
        onChange={handleFilterChange}
        className="p-2 border rounded w-full"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterSection;
