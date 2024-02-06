import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { DataContext } from '../../../../context';

const filter = createFilterOptions();

export default function InternJobSearchByLocation(props) {

  const [value, setValue] = React.useState(null);
  const { jobSearchFilterFunc } = React.useContext(DataContext);

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        props.setSelectedLocation(newValue.location_slug);
      if (!newValue){
        props.setIsFilter(false);
      }
      else{
        props.setIsFilter(true);
        jobSearchFilterFunc(props.selectedTitle, newValue.location_slug,props.setFilteredJobs);
      }
        
      
      if (typeof newValue === 'string') {
          setValue({
            location_slug: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            location_slug: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.location_slug);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            location_slug: `"${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={props.searchLocationSlugObj}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.location_slug;
      }}
      renderOption={(props, option) => <li {...props}>{option.location_slug}</li>}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Filter Location" />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { location_slug: 'The Shawshank Redemption', year: 1994 },
  { location_slug: 'The Godfather', year: 1972 },
  { location_slug: 'The Godfather: Part II', year: 1974 },
];
