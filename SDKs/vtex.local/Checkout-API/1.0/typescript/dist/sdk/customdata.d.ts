import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomData {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Remove single custom field value
     *
     * @remarks
     * Your account may create `apps`, which contain custom fields, through the [Update orderForm configuration](https://developers.vtex.com/reference#updateorderformconfiguration) request. The value of a specific custom field can be removed by this request.
     *
     *
  To do that, you need to inform in the URL the ID of the app you created with the configuration API (`appId`).
     *
     *
  You also need to iform the specific field created in this app (identified by the `appFieldName` parameter, also passed through the URL) whose value you want to remove.
     */
    removesinglecustomfieldvalue(req: operations.RemovesinglecustomfieldvalueRequest, config?: AxiosRequestConfig): Promise<operations.RemovesinglecustomfieldvalueResponse>;
    /**
     * Set multiple custom field values
     *
     * @remarks
     * Your account may create `apps`, which contain custom fields, through the [Update orderForm configuration](https://developers.vtex.com/reference/configuration#updateorderformconfiguration) request. The values of these custom fields can then be updated by this request.
     *
     *
  To do that, you need to inform the ID of the app you created with the configuration API (`appId`).
     *
     *
  In the body of the request, for each field created in this app (`appFieldName`) you will inform a value (`appFieldValue`).
     *
     * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
     */
    setMultipleCustomFieldValues(req: operations.SetMultipleCustomFieldValuesRequest, config?: AxiosRequestConfig): Promise<operations.SetMultipleCustomFieldValuesResponse>;
    /**
     * Set single custom field value
     *
     * @remarks
     * Your account may create `apps`, which contain custom fields, through the [Update orderForm configuration](https://developers.vtex.com/reference#updateorderformconfiguration) request. The value of a specific custom field can then be updated by this request.
     *
     *
  To do that, you need to inform in the URL the ID of the app you created with the configuration API (`appId`).
     *
     *
  In the body of the request, you will inform the new value (`appFieldValue`, passed through the body) of the specific field created in this app (identified by the `appFieldName` parameter, passed through the URL).
     *
     * The [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) is the data structure which represents a shopping cart and contains all information pertaining to it. Hence, the `orderFormId` is the identification code of a given cart.
     */
    setSingleCustomFieldValue(req: operations.SetSingleCustomFieldValueRequest, config?: AxiosRequestConfig): Promise<operations.SetSingleCustomFieldValueResponse>;
}
