import { Module } from '@nestjs/common';
import { MoviesApiService } from './service/movies-api.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [MoviesApiService],
  exports: [MoviesApiService],
})
export class MoviesApiModule {}
