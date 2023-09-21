import { Injectable } from '@nestjs/common';
import { MoviesApiService } from 'src/movies-api/service/movies-api.service';

@Injectable()
export class MoviesService {
  constructor(private readonly moviesApiService: MoviesApiService) {}

  getPopularMovies() {
    return this.moviesApiService.getPopularMovies();
  }
}
