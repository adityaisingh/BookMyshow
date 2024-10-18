import React from "react";
import MovieCard from "./MovieCard";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Card, Badge, Sidebar, Accordion, Button } from "flowbite-react";

const AllMoviesPage = () => {
  const [movies, setMovies] = useState([]);

  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const [fdata, setfdata] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/movie`);
        const moviedata = response.data.data;
        setMovies(response.data.data);

        const filterMovies =
          moviedata &&
          moviedata.filter(
            (movie) =>
              (selectedLanguages.length === 0 ||
                movie.language.some((lang) =>
                  selectedLanguages.includes(lang.toLowerCase())
                )) &&
              (selectedGenres.length === 0 ||
                movie.genre.some((gen) =>
                  selectedGenres.includes(gen.toLowerCase())
                ))
          );
        setfdata(filterMovies);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovies();
  }, [selectedLanguages, selectedGenres]);

  const languages = [
    "English",
    "Hindi",
    "Kannada",
    "Malayalam",
    "Telugu",
    "Tamil",
  ];
  const genres = ["Drama", "Thriller", " Comedy", " Action", " Romantic"];

  const toggleLanguage = (lang) => {
    setSelectedLanguages((prev) =>
      prev.includes(lang.toLowerCase())
        ? prev.filter((item) => item !== lang.toLowerCase())
        : [...prev, lang.toLowerCase()]
    );
  };

  const toggleGenre = (gen) => {
    setSelectedGenres((prev) =>
      prev.includes(gen.toLowerCase())
        ? prev.filter((item) => item !== gen.toLowerCase())
        : [...prev, gen.toLowerCase()]
    );
  };

  return (
    <div className="max-w-7xl mx-auto m-10 flex ">
      <Sidebar className="w-64 h-screen">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <h3 className="text-lg font-semibold mb-2 p-5">Filters</h3>
            <Accordion>
              <Accordion.Panel>
                <Accordion.Title>Languages</Accordion.Title>
                <Accordion.Content>
                  <div className="flex flex-wrap gap-2">
                    {languages.map((lang) => (
                      <Button
                        key={lang}
                        color={
                          selectedLanguages.includes(lang) ? "info" : "red"
                        }
                        onClick={() => toggleLanguage(lang)}
                        className="cursor-pointer text-red-600 ">
                        {lang}
                      </Button>
                    ))}
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
              <div className="border"></div>
              <Accordion.Panel>
                <Accordion.Title>Genres</Accordion.Title>
                <Accordion.Content>
                  <div className="flex flex-wrap gap-2">
                    {genres.map((gen) => (
                      <Button
                        key={gen}
                        color={
                          selectedGenres.includes(gen.toLowerCase())
                            ? "info"
                            : "gray"
                        }
                        onClick={() => toggleGenre(gen)}
                        className="cursor-pointer text-red-600">
                        {gen}
                      </Button>
                    ))}
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <div className="border"></div>
              </Accordion.Panel>
            </Accordion>
            <Button className="mt-4 w-full text-red-600">
              Browse by Cinemas
            </Button>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Movies In Bengaluru</h1>
        <div className="flex flex-wrap gap-3 mb-6 ">
          {languages.map((lang) => (
            <Badge
              key={lang}
              color={selectedLanguages.includes(lang) ? "info" : "red"}
              className="cursor-pointer border-red-600">
              {lang}
            </Badge>
          ))}
        </div>

        <div className="p-10 px-20 max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-end  ">
            {fdata.length > 0
              ? fdata.map((movie) => <MovieCard key={movie.id} movie={movie} />)
              : movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllMoviesPage;

{
  /* <div className="p-10 px-20 max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-end  ">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
          </div> */
}
