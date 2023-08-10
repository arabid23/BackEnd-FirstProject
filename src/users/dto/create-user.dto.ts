import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({required: true })
    firstName: string
    
    @ApiProperty({required: false })
    lastName: string

    @ApiProperty({required: true })
    email: string 

    @ApiProperty()
    age: number
}