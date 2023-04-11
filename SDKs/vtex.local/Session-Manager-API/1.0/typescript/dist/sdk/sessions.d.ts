import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Sessions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create new session
     *
     * @remarks
     * The response should contain a session cookie. Further `POST` or `PATCH` requests will edit the existing session rather than creating a new one. All parameters in the body that are not within the public namespace will be ignored. Query string items will automatically be added to the public namespace. Cookies relevant to the session manager execution are also recorded.
     *
     *
  > The sessions API uses the `vtex_session` cookie to store the data required to identify the user and the session. This cookie is stored in the user's browser when the session is created and sent automatically in every request to that domain. You will have to reproduce that in order for it to work outside of a browser environment.
     */
    createnewsession(req: shared.CreatenewsessionRequest, config?: AxiosRequestConfig): Promise<operations.CreatenewsessionResponse>;
    /**
     * Edit session
     *
     * @remarks
     * This works exactly the same as the POST create session, but when the request is sent with a vtex_session cookie, it retrieves the session first and then applies the changes instead of generating a new one.
     *
     *
  As with the `POST` method, only keys inside the public namespace on the body are considered, and query parameters are automatically added to the public namespace.
     *
     *
  > The sessions API uses the `vtex_session` cookie to store the data required to identify the user and the session. This cookie is stored in the user's browser when the session is created and sent automatically in every request to that domain. You will have to reproduce that in order for it to work outside of a browser environment.
     */
    editsession(req: shared.EditsessionRequest, config?: AxiosRequestConfig): Promise<operations.EditsessionResponse>;
    /**
     * Get Session
     *
     * @remarks
     * Items are the keys of the values you wish to get. It follows the format `namespace1.key1,namespace2.key2`. So if you wish to recover the data sent on the previous request, it should be `public.country,public.postalCode`.
     *
     *
  > The sessions API uses the `vtex_session` cookie to store the data required to identify the user and the session. This cookie is stored in the user's browser when the session is created and sent automatically in every request to that domain. You will have to reproduce that in order for it to work outside of a browser environment.
     *
     *
  > If you want to retrieve all keys from Session Manager, you can use the wildcard operator (`*`) in your request (i.e. `?items=*`).
     */
    getSession(req: operations.GetSessionRequest, config?: AxiosRequestConfig): Promise<operations.GetSessionResponse>;
}
