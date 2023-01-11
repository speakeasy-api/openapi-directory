import { SpeakeasyBase } from "../../../internal/utils";
import { CobrandSession } from "./cobrandsession";
export declare class CobrandLoginResponse extends SpeakeasyBase {
    applicationId?: string;
    cobrandId?: number;
    locale?: string;
    session?: CobrandSession;
}
