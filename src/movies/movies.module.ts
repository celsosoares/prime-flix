import { Module } from '@nestjs/common';
import { MoviesController } from './controller/movies.controller';
import { MoviesService } from './service/movies.service';
import { MoviesApiModule } from 'src/movies-api/movies-api.module';

@Module({
  imports: [MoviesApiModule],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
