import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ImChat {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * imChatMessages - Get IM chat messages
     *
     * Retrieve IM chat messages for a specified period of time. <aside>Note: This API only supports oauth2.</aside><br><br>
     *
     * **Scopes:** `imchat:read`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     *
     * Please see our [announcements page related to this deprecation](https://marketplace.zoom.us/docs/guides/stay-up-to-date/announcements#im-api-notice).
     *
     *
     *
    **/
    imChatMessages(req: operations.ImChatMessagesRequest, config?: AxiosRequestConfig): Promise<operations.ImChatMessagesResponse>;
    /**
     * imChatSessions - Get IM chat sessions
     *
     * Retrieve IM Chat sessions for a specified period of time. <aside>Note: This API only supports Oauth2.</aside><br>
     *
     * **Scopes:** `imchat:read, imchat:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
     *
     *  Please see our [announcements page related to this deprecation](https://marketplace.zoom.us/docs/guides/stay-up-to-date/announcements#im-api-notice).
    **/
    imChatSessions(req: operations.ImChatSessionsRequest, config?: AxiosRequestConfig): Promise<operations.ImChatSessionsResponse>;
    /**
     * listimmessages - Get user’s IM messages
     *
     * Get IM Chat messages for a specified period of time. <aside>Note: This API only supports Oauth2.</aside><br><br>
     * **Scopes:** `imchat:read`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     *
     * Please see the [announcements page related to this deprecation.](https://marketplace.zoom.us/docs/guides/stay-up-to-date/announcements#im-api-notice)
    **/
    listimmessages(req: operations.ListimmessagesRequest, config?: AxiosRequestConfig): Promise<operations.ListimmessagesResponse>;
    /**
     * sendimmessages - Send IM messages
     *
     * Send chat message to a user. <aside>Note: This API only supports OAuth 2.0.</aside><br><br>**Scope:** `imchat:write`
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    sendimmessages(req: operations.SendimmessagesRequest, config?: AxiosRequestConfig): Promise<operations.SendimmessagesResponse>;
}
