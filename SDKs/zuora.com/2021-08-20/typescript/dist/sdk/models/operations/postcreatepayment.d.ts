import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostCreatePaymentHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class PostCreatePaymentRequest extends SpeakeasyBase {
    headers: PostCreatePaymentHeaders;
    request: Record<string, any>;
}
export declare class PostCreatePaymentResponse extends SpeakeasyBase {
    contentType: string;
    getarPaymentType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
