import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Note {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve Note
     *
     * @remarks
     * Retrieves a given note in VTEX DO, filtering by `noteId`.
     */
    getNote(req: operations.GetNoteRequest, config?: AxiosRequestConfig): Promise<operations.GetNoteResponse>;
    /**
     * Get Notes by orderId
     *
     * @remarks
     * Retrieves notes related to a specific `orderId`.
     */
    getNotesbyorderId(req: operations.GetNotesbyorderIdRequest, config?: AxiosRequestConfig): Promise<operations.GetNotesbyorderIdResponse>;
    /**
     * Create Note
     *
     * @remarks
     * This endpoint creates a new note in VTEX DO. Be aware of the following limitations:
     *
     *
  - The maximum number of notes for an order is 30.
     *
     *
  - The maximum number of characters in a note's description is 2000.
     */
    newNote(req: operations.NewNoteRequest, config?: AxiosRequestConfig): Promise<operations.NewNoteResponse>;
}
