import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * It allows to record and remove points in the` Score2` fields.
 */
export declare class Score {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete score by field
     *
     * @remarks
     * Allows you to remove a key from a specific field.
     */
    deletescorebyfield(req: operations.DeletescorebyfieldRequest, config?: AxiosRequestConfig): Promise<operations.DeletescorebyfieldResponse>;
    /**
     * Put score by field
     *
     * @remarks
     * It allows to punctuate in a specific field.
     */
    putscorebyfield(req: operations.PutscorebyfieldRequest, config?: AxiosRequestConfig): Promise<operations.PutscorebyfieldResponse>;
    /**
     * Put scores
     *
     * @remarks
     * It allows punctuate in more than one field and more than one key.
     */
    putscores(req: operations.PutscoresRequest, config?: AxiosRequestConfig): Promise<operations.PutscoresResponse>;
}
