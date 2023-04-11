import { SpeakeasyBase } from "../../../internal/utils";
export declare class ExportInProgressResponse extends SpeakeasyBase {
    /**
     * If the export request was cancelled (`true`) or not (`false`).
     */
    cancelled: boolean;
    /**
     * Order export process completed date.
     */
    completedDate: string;
    /**
     * Order export request date.
     */
    dateOfRequest: string;
    /**
     * Order export requester email.
     */
    email: string;
    /**
     * Order export request filter.
     */
    filter: string;
    /**
     * Host URL.
     */
    hostUri: string;
    /**
     * Order export request ID.
     */
    id: string;
    /**
     * Instance ID.
     */
    instanceId: string;
    /**
     * Order export process update time.
     */
    lasUpdateTime: string;
    /**
     * Link to order export download.
     */
    linkToDownload: string;
    /**
     * Order export publish ID.
     */
    publishId: string;
    /**
     * Order export request filter query.
     */
    query: string;
    /**
     * Order export total rows.
     */
    rowNumber: number;
    /**
     * Order export total processed rows.
     */
    rowsProcessed: number;
    /**
     * Order export process start date.
     */
    startDate: string;
    /**
     * UTC time.
     */
    utcTime: string;
}
