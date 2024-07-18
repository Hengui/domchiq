import React, { useState } from 'react';
import { Search28Filled } from '@fluentui/react-icons';
import { useSearchParams } from 'react-router-dom';

function Search({ placeholder, className }) {
    const [search, setSearch] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();

    const handleClick = () => {
        setSearchParams({ search: search });
        setSearch("");
    };

    return (
        <div className={'relative flex items-center ' + className}>
            <input 
                value={search}
                placeholder={placeholder}
                type="text"
                className="w-48 h-10 border-2 border-black rounded-lg pr-10 pl-2"
                onChange={event => setSearch(event.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleClick()}
            />
            <Search28Filled 
                className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer'
                onClick={handleClick} 
            />
        </div>
    );
}

export default Search;
