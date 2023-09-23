import { Controller, Get } from '@nestjs/common';
import { MoviesService } from '../service/movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('/popular')
  getPopularMovies() {
    return this.moviesService.getPopularMovies();
  }

  @Get('/toprated')
  getTopRatedMovies() {
    return this.moviesService.getTopRatedMovies();
  }
}
