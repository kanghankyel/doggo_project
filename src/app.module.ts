import { MiddlewareConsumer, Module, NestModule, Options } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { DogModule } from './dog/dog.module';
import { StoreModule } from './store/store.module';
import { AdminModule } from './admin/admin.module';
import { CrudModule } from './crud/crud.module';
import { MenuModule } from './menu/menu.module';
import { SftpModule } from './sftp/sftp.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    AuthModule,
    RoleModule,
    DogModule,
    StoreModule,
    AdminModule,
    CrudModule,
    MenuModule,
    SftpModule,
    MulterModule.register({dest:'./uploads'}),    // 업로드된 파일이 저장될 경로 (정적 구성)
    // MulterModule.registerAsync({useFactory: () => ({dest:'./uploads'})}),    // 업로드된 파일이 저장될 경로 (비동기 구성)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//       consumer.apply(CorsMiddleware).forRoutes('*');
//   }
// }
