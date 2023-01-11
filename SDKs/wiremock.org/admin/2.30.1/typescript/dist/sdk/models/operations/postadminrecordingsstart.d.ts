import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAdminRecordingsStartRequestBodyCaptureHeaders extends SpeakeasyBase {
    caseInsensitive?: boolean;
}
/**
 * Criteria for extracting response bodies to a separate file instead of including it in the stub mapping
**/
export declare class PostAdminRecordingsStartRequestBodyExtractBodyCriteria extends SpeakeasyBase {
    binarySizeThreshold?: string;
    textSizeThreshold?: string;
}
/**
 * Pre-emptive basic auth credentials to match against
**/
export declare class PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostAdminRecordingsStartRequestBodyFilters extends SpeakeasyBase {
    basicAuthCredentials?: PostAdminRecordingsStartRequestBodyFiltersBasicAuthCredentials;
    bodyPatterns?: Record<string, any>[];
    cookies?: Record<string, any>;
    headers?: Record<string, any>;
    method?: string;
    queryParameters?: Record<string, any>;
    url?: string;
    urlPath?: string;
    urlPathPattern?: string;
    urlPattern?: string;
}
export declare class PostAdminRecordingsStartRequestBody extends SpeakeasyBase {
    captureHeaders?: Record<string, PostAdminRecordingsStartRequestBodyCaptureHeaders>;
    extractBodyCriteria?: PostAdminRecordingsStartRequestBodyExtractBodyCriteria;
    filters?: PostAdminRecordingsStartRequestBodyFilters;
    persist?: boolean;
    repeatsAsScenarios?: boolean;
    requestBodyPattern?: Record<string, any>;
    targetBaseUrl?: string;
    transformerParameters?: Record<string, any>;
    transformers?: string[];
}
export declare class PostAdminRecordingsStartRequest extends SpeakeasyBase {
    request: PostAdminRecordingsStartRequestBody;
}
export declare class PostAdminRecordingsStartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
