import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { MoviesApiDto } from '../dto/movies-api.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class MoviesApiService {
  private readonly THEMOVIEDB_API_URL = process.env.THEMOVIEDB_API_URL;
  private readonly THEMOVIEDB_API_KEY = process.env.THEMOVIEDB_API_KEY;

  constructor(private http: HttpService) {}

  async getPopularMovies(): Promise<MoviesApiDto> {
    const url = `${this.THEMOVIEDB_API_URL}/movie/popular`;
    const config = {
      headers: { Authorization: `Bearer ${this.THEMOVIEDB_API_KEY}` },
    };

    const response = await lastValueFrom(
      this.http.get<MoviesApiDto>(url, config),
    );

    return plainToInstance(MoviesApiDto, response?.data);
  }

  async getTopRatedMovies(): Promise<MoviesApiDto> {
    const url = `${this.THEMOVIEDB_API_URL}/movie/top_rated`;
    const config = {
      headers: { Authorization: `Bearer ${this.THEMOVIEDB_API_KEY}` },
    };

    const response = await lastValueFrom(
      this.http.get<MoviesApiDto>(url, config),
    );

    return plainToInstance(MoviesApiDto, response?.data);
  }
}
