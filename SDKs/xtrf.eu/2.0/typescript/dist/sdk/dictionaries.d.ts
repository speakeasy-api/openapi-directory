import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * To change the description use /examples/TagsDescriptions.json
 */
export declare class Dictionaries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns active dictionary entities for all types.
     *
     * @remarks
     * Returns active dictionary entities for all types.
     */
    getActive(config?: AxiosRequestConfig): Promise<operations.GetActiveResponse>;
    /**
     * Returns active values from a given dictionary.
     *
     * @remarks
     * Returns active values from a given dictionary.
     */
    getActiveByType(req: operations.GetActiveByTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetActiveByTypeResponse>;
    /**
     * Returns active services list
     *
     * @remarks
     * Returns active workflows list
     */
    getAllActive(req: operations.GetAllActiveRequest, config?: AxiosRequestConfig): Promise<operations.GetAllActiveResponse>;
    /**
     * Returns all values (both active and not active) from a given dictionary.
     *
     * @remarks
     * Returns all values (both active and not active) from a given dictionary.
     */
    getAllByType(req: operations.GetAllByTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetAllByTypeResponse>;
    /**
     * Returns dictionary entities for all types. Both active and not active ones.
     *
     * @remarks
     * <div>
     *   <p>
     *     XTRF holds many user-defined dictionaries (ie. countries).
     *     Each dictionary contains a set of values (ie. Poland or Germany).
     *     A default value may be defined for a dictionary.
     *   </p>
     *   <p>
     *     Dictionary values are identified using internal identifier which is constant and unique among other values from the same dictionary.
     *     Please note that name used in dictionary values is presented in the locale of the current identity.
     *     The same dictionary value can have different names, ie. "Poland" for one user, "Polska" for another one.
     *   </p>
     *   <p>
     *     Possible dictionary types with short explanation:
     *     <ul>
     *       <li>calculationUnit - predefined values of how to calculate the volume of work into the price</li>
     *       <li>category - labels to organize data on the platform</li>
     *       <li>country - list of countries used on the platform</li>
     *       <li>currency - currencies used in financial operations in the system</li>
     *       <li>industry - industry sectors which clients specialize in</li>
     *       <li>jobType - services offered by a company used in customized workflows</li>
     *       <li>language - list of languages and its values used on the platform</li>
     *       <li>leadSource - lead/recruitment places where new clients and vendors may be found</li>
     *       <li>personDepartment - departments in which contact person may be assigned to</li>
     *       <li>personPosition - positions in which user may be associated with</li>
     *       <li>province - states and provinces used in various documents on the platform</li>
     *       <li>specialization - list of specific qualifications required to perform a specific job in the task, for ex. medical, military</li>
     *     </ul>
     *   </p>
     * </div>
     */
    getAll1(config?: AxiosRequestConfig): Promise<operations.GetAll1Response>;
    /**
     * Returns services list
     *
     * @remarks
     * Returns workflows list. Both active and not active ones.
     */
    getAll3(req: operations.GetAll3Request, config?: AxiosRequestConfig): Promise<operations.GetAll3Response>;
    /**
     * Returns specific value from a given dictionary.
     *
     * @remarks
     * Returns specific value from a given dictionary.
     */
    getByTypeAndId(req: operations.GetByTypeAndIdRequest, config?: AxiosRequestConfig): Promise<operations.GetByTypeAndIdResponse>;
}
