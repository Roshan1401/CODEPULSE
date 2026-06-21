import { useState, useMemo, useEffect } from "react";
import { Country, State, City } from "country-state-city";
import type { SelectOption } from "../types/types";

interface InitialLocation {
  country?: string;
  state?: string;
  city?: string;
}

export function useLocationFilter(initial?: InitialLocation) {
  const [selectedCountry, setSelectedCountry] = useState<string | "all">("all");
  const [selectedState, setSelectedState] = useState<string | "all">("all");
  const [selectedCity, setSelectedCity] = useState<string | "all">("all");

  const countries = useMemo(() => Country.getAllCountries(), []);

  const countryOptions: SelectOption[] = useMemo(
    () =>
      countries.map((c) => ({
        label: c.name,
        value: c.name,
      })),
    [countries],
  );

  const countryIso = useMemo(() => {
    if (!selectedCountry) return undefined;
    return countries.find((c) => c.name === selectedCountry)?.isoCode;
  }, [selectedCountry]);

  const stateIso = useMemo(() => {
    if (!countryIso || !selectedState || selectedState === "all")
      return undefined;
    return State.getStatesOfCountry(countryIso).find(
      (s) => s.name === selectedState,
    )?.isoCode;
  }, [selectedState, countryIso]);

  const stateOptions: SelectOption[] = useMemo(
    () =>
      countryIso
        ? [
            { label: "All states", value: "all" },
            ...State.getStatesOfCountry(countryIso).map((s) => ({
              label: s.name,
              value: s.name,
            })),
          ]
        : [],
    [countryIso],
  );

  const cityOptions: SelectOption[] = useMemo(
    () =>
      countryIso && stateIso
        ? [
            { label: "All cities", value: "all" },
            ...City.getCitiesOfState(countryIso, stateIso).map((c) => ({
              label: c.name,
              value: c.name,
            })),
          ]
        : [],
    [countryIso, stateIso],
  );

  useEffect(() => {
    if (!initial?.country) return;

    const matchedCountry =
      countries.find((c) => c.isoCode === initial.country) ??
      countries.find(
        (c) => c.name.toLowerCase() === initial.country?.toLowerCase(),
      );

    if (!matchedCountry) return;
    setSelectedCountry(matchedCountry.name);

    if (initial.state) {
      const states = State.getStatesOfCountry(matchedCountry.isoCode);
      const matchedState =
        states.find((s) => s.isoCode === initial.state) ??
        states.find(
          (s) => s.name.toLowerCase() === initial.state?.toLowerCase(),
        );

      if (matchedState) {
        setSelectedState(matchedState.name);
        if (initial.city) {
          setSelectedCity(initial.city);
        }
      }
    }
  }, [initial?.country, initial?.state, initial?.city]);

  const handleCountryChange = (value: string | "all") => {
    setSelectedCountry(value);
    setSelectedState("all");
    setSelectedCity("all");
  };

  const handleStateChange = (value: string | "all") => {
    setSelectedState(value);
    setSelectedCity("all");
  };

  return {
    selectedCountry,
    selectedState,
    selectedCity,
    countryOptions,
    stateOptions,
    cityOptions,
    handleCountryChange,
    handleStateChange,
    setSelectedCity,
  };
}
