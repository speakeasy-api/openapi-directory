import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * To change the description use /examples/TagsDescriptions.json
 */
export declare class Clients {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new person.
     *
     * @remarks
     * Creates a new person. Required fields are presented in the example. Other fields (from PUT) may also be specified here.
     */
    create2(req: shared.CustomerPersonDTO, config?: AxiosRequestConfig): Promise<operations.Create2Response>;
    /**
     * Creates a new client.
     *
     * @remarks
     * Creates a new client. All available fields are presented in PUT request.<p>
     *   Required fields:
     *   <ul>
     *     <li>name</li>
     *     <li>fullName</li>
     *     <li>contact -> emails -> primary</li>
     *   </ul>
     * </p>
     *
     */
    create3(req: shared.CustomerDTO, config?: AxiosRequestConfig): Promise<operations.Create3Response>;
    /**
     * Removes a person.
     *
     * @remarks
     * Removes a person.
     */
    delete3(req: operations.Delete3Request, config?: AxiosRequestConfig): Promise<operations.Delete3Response>;
    /**
     * Removes a customer price list.
     *
     * @remarks
     * Removes a customer price list.
     */
    delete4(req: operations.Delete4Request, config?: AxiosRequestConfig): Promise<operations.Delete4Response>;
    /**
     * Removes a client.
     *
     * @remarks
     * Removes a client.
     */
    delete5(req: operations.Delete5Request, config?: AxiosRequestConfig): Promise<operations.Delete5Response>;
    /**
     * Generates a single use sign-in token.
     *
     * @remarks
     * Generates a single use sign-in token for the customer person found for given login or e-mail. Returns 'url' and 'token' which allows to sign-in to customer portal as this person. Token is valid for two minutes and can be used only once. To sign-in to customer portal you should post 'token' provided as the 'accessToken' form param to the 'url' using POST method.Detailed description is available in the Customer API <a href="/api-doc/customer-api/authentication">authentication</a>.
     */
    generateSingleUseSignInToken(req: shared.AccessTokenRequestDTO, config?: AxiosRequestConfig): Promise<operations.GenerateSingleUseSignInTokenResponse>;
    /**
     * Returns address of a given client.
     *
     * @remarks
     * Returns address of a given client.
     */
    getAddress(req: operations.GetAddressRequest, config?: AxiosRequestConfig): Promise<operations.GetAddressResponse>;
    /**
     * Returns persons' internal identifiers.
     *
     * @remarks
     * Returns persons' internal identifiers.
     */
    getAllIds1(req: operations.GetAllIds1Request, config?: AxiosRequestConfig): Promise<operations.GetAllIds1Response>;
    /**
     * Returns clients' internal identifiers.
     *
     * @remarks
     * Returns clients' internal identifiers.
     */
    getAllIds2(req: operations.GetAllIds2Request, config?: AxiosRequestConfig): Promise<operations.GetAllIds2Response>;
    /**
     * Returns list of simple clients representations
     *
     * @remarks
     * Returns list of simple clients representations
     */
    getAllNamesWithIds(req: operations.GetAllNamesWithIdsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllNamesWithIdsResponse>;
    /**
     * Returns person details.
     *
     * @remarks
     * Returns person details.
     */
    getById1(req: operations.GetById1Request, config?: AxiosRequestConfig): Promise<operations.GetById1Response>;
    /**
     * Returns client details.
     *
     * @remarks
     * Returns client details.
     */
    getById2(req: operations.GetById2Request, config?: AxiosRequestConfig): Promise<operations.GetById2Response>;
    /**
     * Returns categories of a given client.
     *
     * @remarks
     * Returns categories of a given client.
     */
    getCategories(req: operations.GetCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesResponse>;
    /**
     * Returns contact of a given person.
     *
     * @remarks
     * Returns contact of a given person.
     */
    getContact(req: operations.GetContactRequest, config?: AxiosRequestConfig): Promise<operations.GetContactResponse>;
    /**
     * Returns contact of a given client.
     *
     * @remarks
     * Returns contact of a given client.
     */
    getContact1(req: operations.GetContact1Request, config?: AxiosRequestConfig): Promise<operations.GetContact1Response>;
    /**
     * Returns correspondence address of a given client.
     *
     * @remarks
     * Returns correspondence address of a given client.
     */
    getCorrespondenceAddress(req: operations.GetCorrespondenceAddressRequest, config?: AxiosRequestConfig): Promise<operations.GetCorrespondenceAddressResponse>;
    /**
     * Returns custom field of a given client.
     *
     * @remarks
     * Returns custom field of a given client.
     */
    getCustomField(req: operations.GetCustomFieldRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomFieldResponse>;
    /**
     * Returns custom fields of a given person.
     *
     * @remarks
     * Returns custom fields of a given person.
     */
    getCustomFields(req: operations.GetCustomFieldsRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomFieldsResponse>;
    /**
     * Returns custom fields of a given client.
     *
     * @remarks
     * Returns custom fields of a given client.
     */
    getCustomFields1(req: operations.GetCustomFields1Request, config?: AxiosRequestConfig): Promise<operations.GetCustomFields1Response>;
    /**
     * Returns industries of a given client.
     *
     * @remarks
     * Returns industries of a given client.
     */
    getIndustries(req: operations.GetIndustriesRequest, config?: AxiosRequestConfig): Promise<operations.GetIndustriesResponse>;
    /**
     * Updates address of a given client.
     *
     * @remarks
     * Updates address of a given client.
     */
    updateAddress(req: operations.UpdateAddressRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAddressResponse>;
    /**
     * Updates categories of a given client.
     *
     * @remarks
     * Updates categories of a given client.
     */
    updateCategories(req: operations.UpdateCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCategoriesResponse>;
    /**
     * Updates contact of a given person.
     *
     * @remarks
     * Updates contact of a given person. Sets that this person uses specific address and contact (not the one from customer).
     */
    updateContact(req: operations.UpdateContactRequest, config?: AxiosRequestConfig): Promise<operations.UpdateContactResponse>;
    /**
     * Updates contact of a given client.
     *
     * @remarks
     * Updates contact of a given client.
     */
    updateContact1(req: operations.UpdateContact1Request, config?: AxiosRequestConfig): Promise<operations.UpdateContact1Response>;
    /**
     * Updates correspondence address of a given client.
     *
     * @remarks
     * Updates correspondence address of a given client.
     */
    updateCorrespondenceAddress(req: operations.UpdateCorrespondenceAddressRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCorrespondenceAddressResponse>;
    /**
     * Updates given custom field of a given client.
     *
     * @remarks
     * Updates given custom field of a given client.
     */
    updateCustomField(req: operations.UpdateCustomFieldRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCustomFieldResponse>;
    /**
     * Updates custom fields of a given person.
     *
     * @remarks
     * Updates custom fields of a given person.
     */
    updateCustomFields(req: operations.UpdateCustomFieldsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCustomFieldsResponse>;
    /**
     * Updates custom fields of a given client.
     *
     * @remarks
     * Updates custom fields of a given client.
     */
    updateCustomFields1(req: operations.UpdateCustomFields1Request, config?: AxiosRequestConfig): Promise<operations.UpdateCustomFields1Response>;
    /**
     * Updates industries of a given client.
     *
     * @remarks
     * Updates industries of a given client.
     */
    updateIndustries(req: operations.UpdateIndustriesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIndustriesResponse>;
    /**
     * Updates an existing person.
     *
     * @remarks
     * Only specified fields will be changed. One may not specify embeddable fields here - use separate API calls for updating them.
     */
    update1(req: operations.Update1Request, config?: AxiosRequestConfig): Promise<operations.Update1Response>;
    /**
     * Updates an existing client.
     *
     * @remarks
     * Only specified fields will be changed (id is required). One may not specify embeddable fields here - use separate API calls for updating them.
     */
    update2(req: operations.Update2Request, config?: AxiosRequestConfig): Promise<operations.Update2Response>;
}
