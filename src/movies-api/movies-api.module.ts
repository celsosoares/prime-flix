import { Module } from '@nestjs/common';
import { MoviesApiService } from './service/movies-api.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  providers: [MoviesApiService],
  exports: [MoviesApiService],
})
export class MoviesApiModule {}
