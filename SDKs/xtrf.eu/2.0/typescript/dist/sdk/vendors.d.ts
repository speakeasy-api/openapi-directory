import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * To change the description use /examples/TagsDescriptions.json
 */
export declare class Vendors {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Removes a provider.
     *
     * @remarks
     * Removes a provider.
     */
    delete10(req: operations.Delete10Request, config?: AxiosRequestConfig): Promise<operations.Delete10Response>;
    /**
     * Removes a person.
     *
     * @remarks
     * Removes a person.
     */
    delete8(req: operations.Delete8Request, config?: AxiosRequestConfig): Promise<operations.Delete8Response>;
    /**
     * Removes a provider price list.
     *
     * @remarks
     * Removes a provider price list.
     */
    delete9(req: operations.Delete9Request, config?: AxiosRequestConfig): Promise<operations.Delete9Response>;
    /**
     * Returns address of a given provider.
     *
     * @remarks
     * Returns address of a given provider.
     */
    getAddress1(req: operations.GetAddress1Request, config?: AxiosRequestConfig): Promise<operations.GetAddress1Response>;
    /**
     * Returns persons' internal identifiers.
     *
     * @remarks
     * Returns persons' internal identifiers.
     */
    getAllIds4(req: operations.GetAllIds4Request, config?: AxiosRequestConfig): Promise<operations.GetAllIds4Response>;
    /**
     * Returns providers' internal identifiers.
     *
     * @remarks
     * Returns providers' internal identifiers.
     */
    getAllIds5(req: operations.GetAllIds5Request, config?: AxiosRequestConfig): Promise<operations.GetAllIds5Response>;
    /**
     * Returns person details.
     *
     * @remarks
     * Returns person details.
     */
    getById4(req: operations.GetById4Request, config?: AxiosRequestConfig): Promise<operations.GetById4Response>;
    /**
     * Returns provider details.
     *
     * @remarks
     * Returns provider details.
     */
    getById5(req: operations.GetById5Request, config?: AxiosRequestConfig): Promise<operations.GetById5Response>;
    /**
     * Returns competencies of a given provider.
     *
     * @remarks
     * Returns competencies of a given provider.
     */
    getCompetencies(req: operations.GetCompetenciesRequest, config?: AxiosRequestConfig): Promise<operations.GetCompetenciesResponse>;
    /**
     * Returns contact of a given person.
     *
     * @remarks
     * Returns contact of a given person.
     */
    getContact2(req: operations.GetContact2Request, config?: AxiosRequestConfig): Promise<operations.GetContact2Response>;
    /**
     * Returns contact of a given provider.
     *
     * @remarks
     * Returns contact of a given provider.
     */
    getContact3(req: operations.GetContact3Request, config?: AxiosRequestConfig): Promise<operations.GetContact3Response>;
    /**
     * Returns correspondence address of a given provider.
     *
     * @remarks
     * Returns correspondence address of a given provider.
     */
    getCorrespondenceAddress1(req: operations.GetCorrespondenceAddress1Request, config?: AxiosRequestConfig): Promise<operations.GetCorrespondenceAddress1Response>;
    /**
     * Returns custom fields of a given person.
     *
     * @remarks
     * Returns custom fields of a given person.
     */
    getCustomFields2(req: operations.GetCustomFields2Request, config?: AxiosRequestConfig): Promise<operations.GetCustomFields2Response>;
    /**
     * Returns custom fields of a given provider.
     *
     * @remarks
     * Returns custom fields of a given provider.
     */
    getCustomFields3(req: operations.GetCustomFields3Request, config?: AxiosRequestConfig): Promise<operations.GetCustomFields3Response>;
    /**
     * Sends invitation to Vendor Portal.
     *
     * @remarks
     * Sends invitation to Vendor Portal.
     */
    sendInvitations(req: operations.SendInvitationsRequest, config?: AxiosRequestConfig): Promise<operations.SendInvitationsResponse>;
    /**
     * Sends invitations to Vendor Portal.
     *
     * @remarks
     * Sends invitations to Vendor Portal.
     */
    sendInvitations1(req: operations.SendInvitations1Request, config?: AxiosRequestConfig): Promise<operations.SendInvitations1Response>;
}
