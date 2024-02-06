import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { DataContext } from '../../../../context';

const filter = createFilterOptions();

export default function InternJobSearch(props) {

  const [value, setValue] = React.useState(null);
  const { jobSearchFilterFunc } = React.useContext(DataContext);


  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        props.setSelectedTitle(newValue.job_title_slug);
      if (!newValue){
        props.setIsFilter(false);
      }
      else{
        props.setIsFilter(true);
        // const fl = props.studentJobsObj?.filter((element, index)=> element.job_title  == newValue.job_title_slug)
        // props.setFilteredJobs(fl);
          jobSearchFilterFunc(newValue.job_title_slug, props.selectedLocation ,props.setFilteredJobs);  
      }

      
      if (typeof newValue === 'string') {
          setValue({
            job_title_slug: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            job_title_slug: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.job_title_slug);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            job_title_slug: `${inputValue}`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={props.searchTitleSlugsObj}
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
        return option.job_title_slug;
      }}
      renderOption={(props, option) => <li {...props}>{option.job_title_slug}</li>}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Search Jobs" />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { job_title_slug: 'The Shawshank Redemption', year: 1994 },
  { job_title_slug: 'The Godfather', year: 1972 },
  { job_title_slug: 'The Godfather: Part II', year: 1974 },
];
