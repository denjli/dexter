import { Input } from "@heroui/input";
import { SearchIcon } from "lucide-react";

function Search() {
  return (
    <Input
      type="text"
      placeholder="search by name or global id"
      startContent={
        <SearchIcon className="text-2xl text-default-400 pointer-events-none shrink-0" />
      }
    />
  );
}

export default Search;
