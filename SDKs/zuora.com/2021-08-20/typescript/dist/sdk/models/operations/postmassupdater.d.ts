import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMassUpdaterHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostMassUpdaterRequestBodyFile extends SpeakeasyBase {
    content: Uint8Array;
    file: string;
}
export declare class PostMassUpdaterRequestBody extends SpeakeasyBase {
    file: PostMassUpdaterRequestBodyFile;
    params: string;
}
export declare class PostMassUpdaterRequest extends SpeakeasyBase {
    headers: PostMassUpdaterHeaders;
    request: PostMassUpdaterRequestBody;
}
export declare class PostMassUpdaterResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    postMassUpdateResponseType?: shared.PostMassUpdateResponseType;
    statusCode: number;
}
