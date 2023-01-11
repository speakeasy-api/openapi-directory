import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllOrdersQueryParams extends SpeakeasyBase {
    dateFilterOption?: string;
    endDate?: Date;
    page?: number;
    pageSize?: number;
    startDate?: Date;
}
export declare class GetAllOrdersHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetAllOrdersRequest extends SpeakeasyBase {
    queryParams: GetAllOrdersQueryParams;
    headers: GetAllOrdersHeaders;
}
export declare class GetAllOrdersResponse extends SpeakeasyBase {
    contentType: string;
    getAllOrdersResponseType?: shared.GetAllOrdersResponseType;
    headers: Record<string, string[]>;
    statusCode: number;
}
