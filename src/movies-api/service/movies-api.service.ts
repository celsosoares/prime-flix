import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { MoviesApiDto } from '../dto/movies-api.dto';

@Injectable()
export class MoviesApiService {
  private readonly logger = new Logger(MoviesApiService.name);
  constructor(private http: HttpService) {}

  async getPopularMovies(): Promise<MoviesApiDto> {
    const url =
      'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const { data } = await firstValueFrom(
      this.http
        .get<MoviesApiDto>(url, {
          withCredentials: true,
          params: {
            api_key: '047f6c34ed9a0403faf9fcd9e4e89489',
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );
    return data;
  }
}
