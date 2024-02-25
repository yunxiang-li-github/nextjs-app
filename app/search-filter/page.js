"use client";
import * as React from "react";
import Container from "@/app/ui/dashboard/container";
import SearchFilter from "@/app/ui/search-filter";

const items = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Fig",
  "Grape",
  "Honeydew",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Papaya",
  "Raspberry",
  "Strawberry",
  "Watermelon",
];

export default function Page() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filteredItems={filteredItems}
      />
    </Container>
  );
}
