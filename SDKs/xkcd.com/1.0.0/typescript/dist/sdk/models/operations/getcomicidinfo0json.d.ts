import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetComicIdInfo0JsonRequest extends SpeakeasyBase {
    comicId: number;
}
export declare class GetComicIdInfo0JsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
