import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * To change the description use /examples/TagsDescriptions.json
 */
export declare class ProjectsClassic {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new language combination for a given project without creating a task.
     *
     * @remarks
     * Creates a new language combination for a given project without creating a task.
     */
    createLanguageCombination(req: operations.CreateLanguageCombinationRequest, config?: AxiosRequestConfig): Promise<operations.CreateLanguageCombinationResponse>;
    /**
     * Adds a payable to a project.
     *
     * @remarks
     * Adds a payable to a project.
     */
    createPayable(req: operations.CreatePayableRequest, config?: AxiosRequestConfig): Promise<operations.CreatePayableResponse>;
    /**
     * Adds a receivable to a project.
     *
     * @remarks
     * Adds a receivable to a project.
     */
    createReceivable(req: operations.CreateReceivableRequest, config?: AxiosRequestConfig): Promise<operations.CreateReceivableResponse>;
    /**
     * Creates a new task for a given project.
     *
     * @remarks
     * Creates a new task for a given project.<p>
     *   Required fields:
     *   <ul>
     *     <li>languageCombination</li>
     *     <li>specializationId</li>
     *     <li>workflowId</li>
     *   </ul>
     * </p>
     *
     */
    createTask(req: operations.CreateTaskRequest, config?: AxiosRequestConfig): Promise<operations.CreateTaskResponse>;
    /**
     * Creates a new Classic Project.
     *
     * @remarks
     * Creates a new Classic Project. If the specified service ID refers to Smart Project, 400 Bad Request is returned instead.
     */
    create5(req: shared.ClassicProjectCreateDTO, config?: AxiosRequestConfig): Promise<operations.Create5Response>;
    /**
     * Deletes a payable.
     *
     * @remarks
     * Deletes a payable.
     */
    deletePayable(req: operations.DeletePayableRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayableResponse>;
    /**
     * Deletes a receivable.
     *
     * @remarks
     * Deletes a receivable.
     */
    deleteReceivable(req: operations.DeleteReceivableRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReceivableResponse>;
    /**
     * Removes a project.
     *
     * @remarks
     * Removes a project.
     */
    delete12(req: operations.Delete12Request, config?: AxiosRequestConfig): Promise<operations.Delete12Response>;
    /**
     * Returns projects' internal identifiers.
     *
     * @remarks
     * Returns projects' internal identifiers.
     */
    getAllIds6(req: operations.GetAllIds6Request, config?: AxiosRequestConfig): Promise<operations.GetAllIds6Response>;
    /**
     * Returns project details.
     *
     * @remarks
     * Returns project details. If the specified project ID refers to Smart Project, 400 Bad Request is returned instead.
     */
    getById7(req: operations.GetById7Request, config?: AxiosRequestConfig): Promise<operations.GetById7Response>;
    /**
     * Returns contacts of a given project.
     *
     * @remarks
     * Returns contacts of a given project.
     */
    getContacts(req: operations.GetContactsRequest, config?: AxiosRequestConfig): Promise<operations.GetContactsResponse>;
    /**
     * Returns custom fields of a given project.
     *
     * @remarks
     * Returns custom fields of a given project.
     */
    getCustomFields5(req: operations.GetCustomFields5Request, config?: AxiosRequestConfig): Promise<operations.GetCustomFields5Response>;
    /**
     * Returns dates of a given project.
     *
     * @remarks
     * Returns dates of a given project.
     */
    getDates1(req: operations.GetDates1Request, config?: AxiosRequestConfig): Promise<operations.GetDates1Response>;
    /**
     * Downloads a file.
     *
     * @remarks
     * Downloads a file.
     */
    getFileById(req: operations.GetFileByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFileByIdResponse>;
    /**
     * Returns finance of a given project.
     *
     * @remarks
     * Returns finance of a given project.
     */
    getFinance(req: operations.GetFinanceRequest, config?: AxiosRequestConfig): Promise<operations.GetFinanceResponse>;
    /**
     * Returns instructions of a given project.
     *
     * @remarks
     * Returns instructions of a given project.
     */
    getInstructions(req: operations.GetInstructionsRequest, config?: AxiosRequestConfig): Promise<operations.GetInstructionsResponse>;
    /**
     * Updates contacts of a given project.
     *
     * @remarks
     * Updates contacts of a given project.
     */
    updateContacts(req: operations.UpdateContactsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateContactsResponse>;
    /**
     * Updates custom fields of a given project.
     *
     * @remarks
     * Updates custom fields of a given project.
     */
    updateCustomFields3(req: operations.UpdateCustomFields3Request, config?: AxiosRequestConfig): Promise<operations.UpdateCustomFields3Response>;
    /**
     * Updates dates of a given project.
     *
     * @remarks
     * Updates dates of a given project.
     */
    updateDates1(req: operations.UpdateDates1Request, config?: AxiosRequestConfig): Promise<operations.UpdateDates1Response>;
    /**
     * Updates instructions of a given project.
     *
     * @remarks
     * Updates instructions of a given project.
     */
    updateInstructions1(req: operations.UpdateInstructions1Request, config?: AxiosRequestConfig): Promise<operations.UpdateInstructions1Response>;
    /**
     * Updates a payable.
     *
     * @remarks
     * Updates a payable.
     */
    updatePayable(req: operations.UpdatePayableRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePayableResponse>;
    /**
     * Updates a receivable.
     *
     * @remarks
     * Updates a receivable.
     */
    updateReceivable(req: operations.UpdateReceivableRequest, config?: AxiosRequestConfig): Promise<operations.UpdateReceivableResponse>;
}
