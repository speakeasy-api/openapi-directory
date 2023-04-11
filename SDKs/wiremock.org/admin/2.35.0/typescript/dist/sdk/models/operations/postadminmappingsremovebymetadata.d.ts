import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch extends SpeakeasyBase {
    matchesXpath: string;
    namespaces?: Record<string, any>;
    valuePattern?: Record<string, any>;
}
export declare class PostAdminMappingsRemoveByMetadataRequestBodyXMLEquality extends SpeakeasyBase {
    equalToXml: string;
}
export declare class PostAdminMappingsRemoveByMetadataRequestBodyJSONPathMatch extends SpeakeasyBase {
    ignoreArrayOrder?: boolean;
    ignoreExtraElements?: boolean;
    matchesJsonPath: string;
}
export declare class PostAdminMappingsRemoveByMetadataRequestBodyJSONEquals extends SpeakeasyBase {
    equalToJson: string;
}
export declare class PostAdminMappingsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch extends SpeakeasyBase {
    doesNotMatch: string;
}
export declare class PostAdminMappingsRemoveByMetadataRequestBodyRegularExpressionMatch extends SpeakeasyBase {
    matches: string;
}
export declare class PostAdminMappingsRemoveByMetadataRequestBodyStringContains extends SpeakeasyBase {
    contains: string;
}
export declare class PostAdminMappingsRemoveByMetadataRequestBodyStringEquals extends SpeakeasyBase {
    caseInsensitive?: boolean;
    equalTo: boolean;
}
export declare class PostAdminMappingsRemoveByMetadataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
