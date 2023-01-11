import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDescribePathParams extends SpeakeasyBase {
    object: string;
}
export declare class GetDescribeHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetDescribeRequest extends SpeakeasyBase {
    pathParams: GetDescribePathParams;
    headers: GetDescribeHeaders;
}
export declare class GetDescribeResponse extends SpeakeasyBase {
    contentType: string;
    getDescribe200TextXMLString?: string;
    getDescribe404TextXMLString?: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
