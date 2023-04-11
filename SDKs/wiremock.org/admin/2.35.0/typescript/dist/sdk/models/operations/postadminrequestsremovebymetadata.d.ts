import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAdminRequestsRemoveByMetadataRequestBodyXPathMatch extends SpeakeasyBase {
    matchesXpath: string;
    namespaces?: Record<string, any>;
    valuePattern?: Record<string, any>;
}
export declare class PostAdminRequestsRemoveByMetadataRequestBodyXMLEquality extends SpeakeasyBase {
    equalToXml: string;
}
export declare class PostAdminRequestsRemoveByMetadataRequestBodyJSONPathMatch extends SpeakeasyBase {
    ignoreArrayOrder?: boolean;
    ignoreExtraElements?: boolean;
    matchesJsonPath: string;
}
export declare class PostAdminRequestsRemoveByMetadataRequestBodyJSONEquals extends SpeakeasyBase {
    equalToJson: string;
}
export declare class PostAdminRequestsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch extends SpeakeasyBase {
    doesNotMatch: string;
}
export declare class PostAdminRequestsRemoveByMetadataRequestBodyRegularExpressionMatch extends SpeakeasyBase {
    matches: string;
}
export declare class PostAdminRequestsRemoveByMetadataRequestBodyStringContains extends SpeakeasyBase {
    contains: string;
}
export declare class PostAdminRequestsRemoveByMetadataRequestBodyStringEquals extends SpeakeasyBase {
    caseInsensitive?: boolean;
    equalTo: boolean;
}
export declare class PostAdminRequestsRemoveByMetadataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
