import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger 설정
  const config = new DocumentBuilder()
    .setTitle('갱쥐야 가자')
    .setDescription('GBSB 합동 프로젝트 ver01')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  // cookie-parser 설정
  app.use(cookieParser());

  // Passport 초기화 추가
  app.use(passport.initialize());

  // CORS 활성화
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  await app.listen(3001);
}
bootstrap();
