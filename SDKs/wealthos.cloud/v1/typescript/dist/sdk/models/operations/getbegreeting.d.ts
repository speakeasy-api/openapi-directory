import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBeGreetingSecurity extends SpeakeasyBase {
    apiSecretKey: shared.SchemeApiSecretKey;
}
export declare class GetBeGreetingRequest extends SpeakeasyBase {
    security: GetBeGreetingSecurity;
}
export declare class GetBeGreetingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getBEGreeting200ApplicationJSONAny?: any;
    getBEGreeting403ApplicationJSONAny?: any;
    getBEGreeting429ApplicationJSONAny?: any;
    getBEGreeting500ApplicationJSONAny?: any;
}
