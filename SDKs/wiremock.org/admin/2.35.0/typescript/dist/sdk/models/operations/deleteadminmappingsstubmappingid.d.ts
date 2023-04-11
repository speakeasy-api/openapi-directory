import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteAdminMappingsStubMappingIdRequest extends SpeakeasyBase {
    /**
     * The UUID of stub mapping
     */
    stubMappingId: string;
}
export declare class DeleteAdminMappingsStubMappingIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
