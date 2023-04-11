import { SpeakeasyBase } from "../../../internal/utils";
import { Domain } from "./domain";
/**
 * User Credentials
 */
export declare class UserCredential extends SpeakeasyBase {
    domain?: Domain;
    password?: string;
    username?: string;
}
