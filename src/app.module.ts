import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { MoviesApiModule } from './movies-api/movies-api.module';
import { ConfigModule } from 'nestjs-config';

@Module({
  imports: [ConfigModule, MoviesModule, MoviesApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
