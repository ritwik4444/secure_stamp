import { AuthService } from './auth.service';
import { AuthDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    singup(dto: AuthDto): Promise<{
        access_token: string;
    }>;
    singin(dto: AuthDto): Promise<{
        access_token: string;
    }>;
}
