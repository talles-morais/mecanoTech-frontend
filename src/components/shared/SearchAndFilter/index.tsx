import { Search } from "@mui/icons-material";

export default function SearchAndFilter() {
  return (
    <div>
      <div className="flex p-2 text-white gap-2 border border-white rounded-lg">
        <input className="outline-none border-none grow" type="text"  placeholder="Pesquise..."/>
        <Search />
      </div>
    </div>
  )
}