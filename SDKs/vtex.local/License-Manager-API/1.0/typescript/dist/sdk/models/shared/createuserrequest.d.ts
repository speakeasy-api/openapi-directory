import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request body for creating users
 */
export declare class CreateUserRequest extends SpeakeasyBase {
    /**
     * Email of the user
     */
    email: string;
    /**
     * Name of the user
     */
    name: string;
}
