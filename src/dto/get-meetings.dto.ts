import { IsInt, IsOptional, IsString, IsBoolean } from 'class-validator';

export class GetMeetingsDto {
  @IsInt()
  @IsOptional()
  limit?: number;

  @IsString()
  @IsOptional()
  after?: string;

  @IsOptional()
  @IsString({ each: true })
  properties?: string[];

  @IsOptional()
  @IsString({ each: true })
  propertiesWithHistory?: string[];

  @IsOptional()
  @IsString({ each: true })
  associations?: string[];

  @IsOptional()
  @IsBoolean()
  archived?: boolean;
}
