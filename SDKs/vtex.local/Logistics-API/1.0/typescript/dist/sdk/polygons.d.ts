import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Polygons {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create/update polygon
     *
     * @remarks
     * Creates or updates your store's polygons by geoshape coordinates and polygon name.
     */
    createUpdatePolygon(req: operations.CreateUpdatePolygonRequest, config?: AxiosRequestConfig): Promise<operations.CreateUpdatePolygonResponse>;
    /**
     * Delete polygon
     *
     * @remarks
     * Deletes polygon set up in your store, by polygon name.
     */
    deletePolygon(req: operations.DeletePolygonRequest, config?: AxiosRequestConfig): Promise<operations.DeletePolygonResponse>;
    /**
     * List paged polygons
     *
     * @remarks
     * Lists stored polygons.
     */
    pagedPolygons(req: operations.PagedPolygonsRequest, config?: AxiosRequestConfig): Promise<operations.PagedPolygonsResponse>;
    /**
     * List polygon by ID
     *
     * @remarks
     * Lists your store's polygons by searching through polygon name
     */
    polygonbyId(req: operations.PolygonbyIdRequest, config?: AxiosRequestConfig): Promise<operations.PolygonbyIdResponse>;
}
