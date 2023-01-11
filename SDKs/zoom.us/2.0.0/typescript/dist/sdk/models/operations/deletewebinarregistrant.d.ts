import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteWebinarRegistrantPathParams extends SpeakeasyBase {
    registrantId: string;
    webinarId: number;
}
export declare class DeleteWebinarRegistrantQueryParams extends SpeakeasyBase {
    occurrenceId?: string;
}
export declare class DeleteWebinarRegistrantRequest extends SpeakeasyBase {
    pathParams: DeleteWebinarRegistrantPathParams;
    queryParams: DeleteWebinarRegistrantQueryParams;
}
export declare class DeleteWebinarRegistrantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
