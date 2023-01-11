import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeOAuth extends SpeakeasyBase {
    authorization: string;
}
export declare class Security extends SpeakeasyBase {
    oAuth: SchemeOAuth;
}
export declare class SchemeBearer extends SpeakeasyBase {
    apiKey: string;
}
export declare class SchemeClientCredentials extends SpeakeasyBase {
    authorization: string;
}
