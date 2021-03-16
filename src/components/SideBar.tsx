import React, { useContext, useEffect, useState } from 'react';
import { Button } from './Button';
import { api } from '../services/api';
import { SidebarContext } from '../contexts/SidebarContext';
import '../styles/sidebar.scss';

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}
export function SideBar() {
  const { selectedGenreId, setSelectedGenreId } = useContext(SidebarContext);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then((response) => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>
      <div className='buttons-container'>
        {genres.map((genre) => (
          <Button
            key={genre.name}
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
