import type { SelectOption } from "../../types/types";
import Select from "react-select";

interface RegionFiltersProps {
  countryOptions: SelectOption[];
  stateOptions: SelectOption[];
  cityOptions: SelectOption[];
  selectedCountry: string | null;
  selectedState: string | null;
  selectedCity: string | null;
  onCountryChange: (value: string | null) => void;
  onStateChange: (value: string | null) => void;
  onCityChange: (value: string | null) => void;
}

export function RegionFilters({
  countryOptions,
  stateOptions,
  cityOptions,
  selectedCountry,
  selectedState,
  selectedCity,
  onCountryChange,
  onStateChange,
  onCityChange,
}: RegionFiltersProps) {
  return (
    <div className="flex gap-4">
      <div>
        <label className="block text-sm font-medium text-(--color-text-secondary) sm:mb-2">
          Country
        </label>
        <Select
          options={countryOptions}
          value={countryOptions.find(
            (option) => option.value === selectedCountry,
          )}
          onChange={(option) => onCountryChange(option?.value ?? null)}
          className="w-48"
          classNamePrefix="select"
          placeholder="Select Country"
          isClearable
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-(--color-text-secondary) sm:mb-2">
          State
        </label>
        <Select
          options={stateOptions}
          value={stateOptions.find((option) => option.value === selectedState)}
          onChange={(option) => onStateChange(option?.value ?? null)}
          className="w-48"
          classNamePrefix="select"
          placeholder="Select State"
          isDisabled={!selectedCountry}
          isClearable
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-(--color-text-secondary) sm:mb-2">
          City
        </label>
        <Select
          options={cityOptions}
          value={cityOptions.find((option) => option.value === selectedCity)}
          onChange={(option) => onCityChange(option?.value ?? null)}
          className="w-48"
          classNamePrefix="select"
          placeholder="Select City"
          isDisabled={!selectedState}
          isClearable
        />
      </div>
    </div>
  );
}
