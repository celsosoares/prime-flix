import { Controller, Get } from '@nestjs/common';
import { MoviesService } from '../service/movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getPopularMovies() {
    const result = this.moviesService.getPopularMovies();

    return result;
  }
}
